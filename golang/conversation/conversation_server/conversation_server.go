package main

import (
	"context"
	"encoding/json"
	"log"
	"os"
	"path/filepath"
	"strconv"

	"github.com/davecourtois/Utility"
	"github.com/globulario/services/golang/conversation/conversation_client"
	"github.com/globulario/services/golang/conversation/conversationpb"
	globular "github.com/globulario/services/golang/globular_service"
	"github.com/globulario/services/golang/interceptors"
	"google.golang.org/grpc"

	"google.golang.org/grpc/codes"

	//"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/metadata"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/status"

	"errors"
	"fmt"
	"strings"
	"sync"
	"time"

	"github.com/golang/protobuf/jsonpb"

	"github.com/globulario/services/golang/rbac/rbac_client"
	"github.com/globulario/services/golang/rbac/rbacpb"
	"github.com/globulario/services/golang/search/search_engine"
	"github.com/globulario/services/golang/storage/storage_store"
)

// The default values.
var (
	defaultPort  = 10029
	defaultProxy = 10030

	// By default all origins are allowed.
	allow_all_origins = true

	// comma separeated values.
	allowed_origins string = ""

	domain string = "localhost"
)

// Value need by Globular to start the services...
type server struct {
	// The global attribute of the services.
	Id              string
	Name            string
	Mac             string
	Domain          string
	Path            string
	Proto           string
	Port            int
	Proxy           int
	AllowAllOrigins bool
	AllowedOrigins  string // comma separated string.
	Protocol        string
	Version         string
	PublisherId     string
	KeepUpToDate    bool
	KeepAlive       bool
	Description     string
	Keywords        []string
	Repositories    []string
	Discoveries     []string

	// Specific configuration.
	Root string // Where to look for conversation data, file.. etc.

	TLS bool

	// svr-signed X.509 public keys for distribution
	CertFile string

	// a private RSA key to sign and authenticate the public key
	KeyFile string

	// a private RSA key to sign and authenticate the public key
	CertAuthorityTrust string

	Permissions []interface{} // contains the action permission for the services.

	Dependencies []string // The list of services needed by this services.

	// The grpc server.
	grpcServer *grpc.Server

	// Use to sync conversations channel manipulation.
	actions chan map[string]interface{}

	// stop the processing loop.
	exit chan bool

	// The search engine..
	search_engine *search_engine.XapianEngine

	// Store global conversation information like conversation owner's participant...
	store *storage_store.LevelDB_store

	// keep in map active conversation db connections.
	conversations *sync.Map

	// The rbac client
	rbac_client_ *rbac_client.Rbac_Client
}

// Globular services implementation...
// The id of a particular service instance.
func (svr *server) GetId() string {
	return svr.Id
}
func (svr *server) SetId(id string) {
	svr.Id = id
}

// The name of a service, must be the gRpc Service name.
func (svr *server) GetName() string {
	return svr.Name
}
func (svr *server) SetName(name string) {
	svr.Name = name
}

func (svr *server) GetMac() string {
	return svr.Mac
}

func (svr *server) SetMac(mac string) {
	svr.Mac = mac
}

// The description of the service
func (svr *server) GetDescription() string {
	return svr.Description
}
func (svr *server) SetDescription(description string) {
	svr.Description = description
}

// The list of keywords of the services.
func (svr *server) GetKeywords() []string {
	return svr.Keywords
}
func (svr *server) SetKeywords(keywords []string) {
	svr.Keywords = keywords
}

func (svr *server) GetRepositories() []string {
	return svr.Repositories
}
func (svr *server) SetRepositories(repositories []string) {
	svr.Repositories = repositories
}

func (svr *server) GetDiscoveries() []string {
	return svr.Discoveries
}
func (svr *server) SetDiscoveries(discoveries []string) {
	svr.Discoveries = discoveries
}

// Dist
func (svr *server) Dist(path string) (string, error) {

	return globular.Dist(path, svr)
}

func (server *server) GetDependencies() []string {

	if server.Dependencies == nil {
		server.Dependencies = make([]string, 0)
	}

	return server.Dependencies
}

func (server *server) SetDependency(dependency string) {
	if server.Dependencies == nil {
		server.Dependencies = make([]string, 0)
	}

	// Append the depency to the list.
	if !Utility.Contains(server.Dependencies, dependency) {
		server.Dependencies = append(server.Dependencies, dependency)
	}
}

func (svr *server) GetPlatform() string {
	return globular.GetPlatform()
}

// The path of the executable.
func (svr *server) GetPath() string {
	return svr.Path
}
func (svr *server) SetPath(path string) {
	svr.Path = path
}

// The path of the .proto file.
func (svr *server) GetProto() string {
	return svr.Proto
}
func (svr *server) SetProto(proto string) {
	svr.Proto = proto
}

// The gRpc port.
func (svr *server) GetPort() int {
	return svr.Port
}
func (svr *server) SetPort(port int) {
	svr.Port = port
}

// The reverse proxy port (use by gRpc Web)
func (svr *server) GetProxy() int {
	return svr.Proxy
}
func (svr *server) SetProxy(proxy int) {
	svr.Proxy = proxy
}

// Can be one of http/https/tls
func (svr *server) GetProtocol() string {
	return svr.Protocol
}
func (svr *server) SetProtocol(protocol string) {
	svr.Protocol = protocol
}

// Return true if all Origins are allowed to access the mircoservice.
func (svr *server) GetAllowAllOrigins() bool {
	return svr.AllowAllOrigins
}
func (svr *server) SetAllowAllOrigins(allowAllOrigins bool) {
	svr.AllowAllOrigins = allowAllOrigins
}

// If AllowAllOrigins is false then AllowedOrigins will contain the
// list of address that can reach the services.
func (svr *server) GetAllowedOrigins() string {
	return svr.AllowedOrigins
}

func (svr *server) SetAllowedOrigins(allowedOrigins string) {
	svr.AllowedOrigins = allowedOrigins
}

// Can be a ip address or domain name.
func (svr *server) GetDomain() string {
	return svr.Domain
}
func (svr *server) SetDomain(domain string) {
	svr.Domain = domain
}

// TLS section

// If true the service run with TLS. The
func (svr *server) GetTls() bool {
	return svr.TLS
}
func (svr *server) SetTls(hasTls bool) {
	svr.TLS = hasTls
}

// The certificate authority file
func (svr *server) GetCertAuthorityTrust() string {
	return svr.CertAuthorityTrust
}
func (svr *server) SetCertAuthorityTrust(ca string) {
	svr.CertAuthorityTrust = ca
}

// The certificate file.
func (svr *server) GetCertFile() string {
	return svr.CertFile
}
func (svr *server) SetCertFile(certFile string) {
	svr.CertFile = certFile
}

// The key file.
func (svr *server) GetKeyFile() string {
	return svr.KeyFile
}
func (svr *server) SetKeyFile(keyFile string) {
	svr.KeyFile = keyFile
}

// The service version
func (svr *server) GetVersion() string {
	return svr.Version
}
func (svr *server) SetVersion(version string) {
	svr.Version = version
}

// The publisher id.
func (svr *server) GetPublisherId() string {
	return svr.PublisherId
}
func (svr *server) SetPublisherId(publisherId string) {
	svr.PublisherId = publisherId
}

func (svr *server) GetKeepUpToDate() bool {
	return svr.KeepUpToDate
}
func (svr *server) SetKeepUptoDate(val bool) {
	svr.KeepUpToDate = val
}

func (svr *server) GetKeepAlive() bool {
	return svr.KeepAlive
}
func (svr *server) SetKeepAlive(val bool) {
	svr.KeepAlive = val
}

func (svr *server) GetPermissions() []interface{} {
	return svr.Permissions
}
func (svr *server) SetPermissions(permissions []interface{}) {
	svr.Permissions = permissions
}

// Create the configuration file if is not already exist.
func (svr *server) Init() error {

	// That function is use to get access to other server.
	Utility.RegisterFunction("NewConversationService_Client", conversation_client.NewConversationService_Client)

	// Get the configuration path.
	dir, _ := filepath.Abs(filepath.Dir(os.Args[0]))

	err := globular.InitService(dir+"/config.json", svr)
	if err != nil {
		return err
	}

	// Initialyse GRPC server.
	svr.grpcServer, err = globular.InitGrpcServer(svr, interceptors.ServerUnaryInterceptor, interceptors.ServerStreamInterceptor)
	if err != nil {
		return err
	}

	// Initialyse the search engine.
	svr.search_engine = new(search_engine.XapianEngine)

	// Create a new local store.
	svr.store = storage_store.NewLevelDB_store()

	return nil

}

// Save the configuration values.
func (svr *server) Save() error {
	// Create the file...
	dir, _ := filepath.Abs(filepath.Dir(os.Args[0]))
	return globular.SaveService(dir+"/config.json", svr)
}

func (svr *server) StartService() error {
	return globular.StartService(svr, svr.grpcServer)
}

func (svr *server) StopService() error {
	svr.exit <- true
	return globular.StopService(svr, svr.grpcServer)
}

func (svr *server) Stop(context.Context, *conversationpb.StopRequest) (*conversationpb.StopResponse, error) {
	svr.exit <- true
	return &conversationpb.StopResponse{}, svr.StopService()
}

/////////////////////// Conversation specific function /////////////////////////////////

/**
 * Databases will be created in the 'conversations' directory inside the Root path
 * Each conversation will have it own leveldb database
 */
func (svr *server) getConversationConnection(id string) (*storage_store.LevelDB_store, error) {

	dbPath := svr.Root + "/conversations/" + id
	Utility.CreateDirIfNotExist(dbPath)

	connection, ok := svr.conversations.Load(dbPath)
	if !ok {
		connection = storage_store.NewLevelDB_store()
		err := connection.(*storage_store.LevelDB_store).Open(`{"path":"` + dbPath + `", "name":"store_data"}`)
		if err != nil {
			return nil, err
		}
		svr.conversations.Store(dbPath, connection)
	}

	connection_ := connection.(*storage_store.LevelDB_store)

	return connection_, nil
}

func (svr *server) closeConversationConnection(id string) {

	dbPath := svr.Root + "/conversations/" + id
	connection, ok := svr.conversations.Load(dbPath)
	if !ok {
		return
	}

	// Close the connection.
	connection.(*storage_store.LevelDB_store).Close()

	defer svr.conversations.Delete(dbPath)
}

/////////////////////////// Public interfaces //////////////////////////////////

// Create a new conversation with a given name. The creator will became the
// owner of that conversation and he will be able to set permissions to
// determine who can participate to the conversation.
func (svr *server) CreateConversation(ctx context.Context, rqst *conversationpb.CreateConversationRequest) (*conversationpb.CreateConversationResponse, error) {
	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {
			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}
		} else {
			errors.New("no token was given")
		}
	}

	uuid := Utility.RandomUUID()

	if len(rqst.Language) == 0 {
		rqst.Language = "en"
	}

	conversation := &conversationpb.Conversation{
		Uuid:            uuid,
		Name:            rqst.Name,
		Keywords:        rqst.Keywords,
		CreationTime:    time.Now().Unix(),
		LastMessageTime: 0,
		Language:        rqst.Language,
		Participants:    []string{clientId},
	}

	err = svr.saveConversation(conversation)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// So here I will append the value in the index.
	err = svr.addParticipantConversation(clientId, uuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Now I will set it in the rbac as ressource owner...
	permissions := &rbacpb.Permissions{
		Allowed: []*rbacpb.Permission{},
		Denied:  []*rbacpb.Permission{},
		Owners: &rbacpb.Permission{
			Name:          "owner", // The name is informative in that particular case.
			Applications:  []string{},
			Accounts:      []string{clientId},
			Groups:        []string{},
			Peers:         []string{},
			Organizations: []string{},
		},
	}

	// Set the owner of the conversation.
	err = svr.rbac_client_.SetResourcePermissions(uuid, permissions)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &conversationpb.CreateConversationResponse{
		Conversation: conversation,
	}, nil
}

// Return the list of conversations created by a given user.
func (svr *server) GetConversations(ctx context.Context, rqst *conversationpb.GetConversationsRequest) (*conversationpb.GetConversationsResponse, error) {

	_conversations_, err := svr.store.GetItem(rqst.Creator + "_conversations")
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	_conversations := new(conversationpb.Conversations)
	_conversations.Conversations = make([]*conversationpb.Conversation, 0)

	uuids := make([]string, 0)

	json.Unmarshal(_conversations_, &uuids)
	for i := 0; i < len(uuids); i++ {
		conversation, err := svr.getConversation(uuids[i])
		if err == nil {
			_conversations.Conversations = append(_conversations.Conversations, conversation)
		}
	}

	return &conversationpb.GetConversationsResponse{
		Conversations: _conversations,
	}, nil
}

// The list of participant inside a conversation.
func (svr *server) addConversationParticipant(participant string, conversation string) error {
	c, err := svr.getConversation(conversation)
	if err != nil {
		return err
	}

	if !Utility.Contains(c.Participants, participant) {
		c.Participants = append(c.Participants, participant)
		return svr.saveConversation(c)
	}

	return nil
}

func (svr *server) removeConversationParticipant(participant string, conversation string) error {
	c, err := svr.getConversation(conversation)
	if err != nil {
		return err
	}

	if !Utility.Contains(c.Participants, participant) {
		return nil
	}

	paticipants := make([]string, 0)
	for i := 0; i < len(c.Participants); i++ {
		if c.Participants[i] != participant {
			paticipants = append(paticipants, c.Participants[i])
		}
	}

	c.Participants = paticipants
	return svr.saveConversation(c)
}

// The list of conversation of a participant.
func (svr *server) addParticipantConversation(paticipant string, conversation string) error {

	// Index owned conversation to be retreivable by it creator.
	_conversations_, err := svr.store.GetItem(paticipant + "_conversations")
	_conversations := make([]string, 0)
	if err == nil {
		err = json.Unmarshal(_conversations_, &_conversations)
		if err != nil {
			return err
		}
	}

	if Utility.Contains(_conversations, conversation) {
		return nil
	}

	// Now I will append the newly created conversation into conversation owned by
	// the client id.
	_conversations = append(_conversations, conversation)

	// Now I will save it back in the bd.
	jsonStr, err := json.Marshal(_conversations)
	if err != nil {
		return err
	}

	return svr.store.SetItem(paticipant+"_conversations", jsonStr)

}

// Remove conversation from a given participant
func (svr *server) removeParticipantConversation(paticipant string, conversation string) error {
	// Index owned conversation to be retreivable by it creator.
	jsonStr, err := svr.store.GetItem(paticipant + "_conversations")
	_conversations := make([]string, 0)
	if err == nil {
		err = json.Unmarshal(jsonStr, &_conversations)
		if err != nil {
			return err
		}
	}

	_conversations_ := make([]string, 0)
	for i := 0; i < len(_conversations); i++ {
		if _conversations[i] != conversation {
			_conversations_ = append(_conversations_, _conversations[i])
		}
	}

	jsonStr_, err := json.Marshal(_conversations_)

	if err != nil {
		return err
	}

	// save it back...
	return svr.store.SetItem(paticipant+"_conversations", jsonStr_)

}

// Kickout a user for any good reason...
func (svr *server) KickoutFromConversation(ctx context.Context, rqst *conversationpb.KickoutFromConversationRequest) (*conversationpb.KickoutFromConversationResponse, error) {

	var clientId string
	var err error
	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {
			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, err
			}
		} else {
			return nil, errors.New("no token was given")
		}
	}

	// Get conversation if not exist I will return here.
	_, err = svr.getConversation(rqst.ConversationUuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Validate the clientId is the owner of the conversation.
	isOwner, _, err := svr.rbac_client_.ValidateAccess(clientId, rbacpb.SubjectType_ACCOUNT, "owner", rqst.ConversationUuid)

	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	if !isOwner {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("only the owner of the conversation can kickout a participant")))
	}

	// Here I will simply remove the converstion from the paticipant.
	err = svr.removeConversationParticipant(rqst.Account, rqst.ConversationUuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}
	err = svr.removeParticipantConversation(rqst.Account, rqst.ConversationUuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}
	return &conversationpb.KickoutFromConversationResponse{}, err

}

// Delete the conversation
func (svr *server) DeleteConversation(ctx context.Context, rqst *conversationpb.DeleteConversationRequest) (*conversationpb.DeleteConversationResponse, error) {
	var clientId string
	var err error
	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {

			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, err
			}

		} else {
			return nil, errors.New("No token was given!")
		}
	}

	// Get conversation if not exist I will return here.
	conversation, err := svr.getConversation(rqst.ConversationUuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Validate the clientId is the owner of the conversation.
	_, _, err = svr.rbac_client_.ValidateAccess(clientId, rbacpb.SubjectType_ACCOUNT, "owner", rqst.ConversationUuid)
	if err != nil {
		// Here I will simply remove the converstion from the paticipant.
		err := svr.removeConversationParticipant(clientId, rqst.ConversationUuid)
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}

		err = svr.removeParticipantConversation(clientId, rqst.ConversationUuid)
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}

		return nil, err
	}

	// Close leveldb connection
	svr.closeConversationConnection(rqst.ConversationUuid)

	// I will remove the conversation datastore...
	if Utility.Exists(svr.Root + "/conversations/" + rqst.ConversationUuid) {
		err = os.RemoveAll(svr.Root + "/conversations/" + rqst.ConversationUuid)
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}
	}

	// I will remove the conversation from the db.
	err = svr.rbac_client_.DeleteResourcePermissions("conversations/" + rqst.ConversationUuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Now I will remove indexation.

	// Remove the connection from the search engine.
	err = svr.search_engine.DeleteDocument(svr.Root+"/conversations/search_data", rqst.ConversationUuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Remove the pending invitation.
	if conversation.Invitations != nil {
		for i := 0; i < len(conversation.Invitations.Invitations); i++ {
			svr.removeInvitation(conversation.Invitations.Invitations[i])
		}
	}

	// Remove conversation from participant conversations.
	for i := 0; i < len(conversation.Participants); i++ {
		svr.removeParticipantConversation(conversation.Participants[i], conversation.Uuid)
	}

	// Delete conversation from the store.
	err = svr.store.RemoveItem(rqst.ConversationUuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &conversationpb.DeleteConversationResponse{}, nil
}

// Retreive a conversation by keywords or name...
func (svr *server) FindConversations(ctx context.Context, rqst *conversationpb.FindConversationsRequest) (*conversationpb.FindConversationsResponse, error) {
	paths := []string{svr.Root + "/conversations/search_data"}

	results, err := svr.search_engine.SearchDocuments(paths, rqst.Language, []string{"name", "keywords"}, rqst.Query, rqst.Offset, rqst.PageSize, rqst.SnippetSize)
	if err != nil {
		return nil, err
	}

	conversations := make([]*conversationpb.Conversation, 0)
	for i := 0; i < len(results.Results); i++ {
		conversation := new(conversationpb.Conversation)
		err := jsonpb.UnmarshalString(results.Results[i].Data, conversation)
		if err == nil {
			conversations = append(conversations, conversation)
		}

	}

	return &conversationpb.FindConversationsResponse{
		Conversations: conversations,
	}, nil
}

func (svr *server) Connect(rqst *conversationpb.ConnectRequest, stream conversationpb.ConversationService_ConnectServer) error {
	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(stream.Context()); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {
			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}
		} else {
			return errors.New("no token was given")
		}
	}

	action := make(map[string]interface{})
	action["action"] = "connect"
	action["stream"] = stream
	action["uuid"] = rqst.Uuid
	action["clientId"] = clientId
	action["quit"] = make(chan bool)

	svr.actions <- action

	// wait util unsbscribe or connection is close.
	<-action["quit"].(chan bool)
	return nil
}

// Close connection with the conversation server.
func (svr *server) Disconnect(ctx context.Context, rqst *conversationpb.DisconnectRequest) (*conversationpb.DisconnectResponse, error) {
	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {
			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}
		} else {
			return nil, errors.New("no token was given")
		}
	}

	quit := make(map[string]interface{})
	quit["action"] = "disconnect"
	quit["uuid"] = rqst.Uuid
	quit["clientId"] = clientId
	svr.actions <- quit

	return &conversationpb.DisconnectResponse{
		Result: true,
	}, nil
}

// Join a conversation.
func (svr *server) JoinConversation(rqst *conversationpb.JoinConversationRequest, stream conversationpb.ConversationService_JoinConversationServer) error {
	var clientId string
	var err error
	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(stream.Context()); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {

			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}

		} else {
			return errors.New("no token was given")
		}
	}

	join := make(map[string]interface{})
	join["action"] = "join"
	join["name"] = rqst.ConversationUuid // Must be the converastion uuid...
	join["uuid"] = rqst.ConnectionUuid   // Must be the connection uuid...
	join["clientId"] = clientId

	svr.actions <- join

	// so here I will get existing convesation messages and return it in the stream.
	conn, err := svr.getConversationConnection(rqst.ConversationUuid)
	if err != nil {
		return status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	err = svr.addConversationParticipant(clientId, rqst.ConversationUuid)
	if err != nil {
		return status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	conversation, err := svr.getConversation(rqst.ConversationUuid)
	if err != nil {
		return status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Retreive all message from the conversation...
	data, err := conn.GetItem(rqst.ConversationUuid + "/*")
	if err == nil {
		if data != nil {
			results := make([]interface{}, 0)
			err := json.Unmarshal(data, &results)
			if err != nil {
				return err
			}
			if len(results) == 0 {
				stream.Send(&conversationpb.JoinConversationResponse{
					Msg:          nil,
					Conversation: conversation,
				})

				return errors.New("EOF")
			}

			for i := 0; i < len(results); i++ {

				msg, err := svr.getMessage(results[i].(map[string]interface{})["conversation"].(string), results[i].(map[string]interface{})["uuid"].(string))

				if err == nil {
					if i == 0 {
						stream.Send(&conversationpb.JoinConversationResponse{
							Msg:          msg,
							Conversation: conversation,
						})
					} else {
						stream.Send(&conversationpb.JoinConversationResponse{
							Msg:          msg,
							Conversation: nil,
						})
					}
				} else {
					return err
				}

			}
		}
	}

	return err
}

// Leave a given conversation.
func (svr *server) LeaveConversation(ctx context.Context, rqst *conversationpb.LeaveConversationRequest) (*conversationpb.LeaveConversationResponse, error) {
	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {
			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}
		} else {
			return nil, errors.New("no token was given")
		}
	}

	leave := make(map[string]interface{})
	leave["action"] = "leave"
	leave["name"] = rqst.ConversationUuid
	leave["uuid"] = rqst.ConnectionUuid
	leave["clientId"] = clientId

	svr.actions <- leave

	err = svr.removeConversationParticipant(clientId, rqst.ConversationUuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}
	conversation, err := svr.getConversation(rqst.ConversationUuid)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}
	return &conversationpb.LeaveConversationResponse{
		Conversation: conversation,
	}, nil
}

// Conversation owner can invite a contact into Conversation.
func (svr *server) SendInvitation(ctx context.Context, rqst *conversationpb.SendInvitationRequest) (*conversationpb.SendInvitationResponse, error) {
	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {

			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}

		} else {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("no token was given")))

		}
	}

	if clientId != rqst.Invitation.From {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("Invitation must be sent by the authenticated user. You are not authenticated as "+rqst.Invitation.From)))
	}

	// Validate the clientId is the owner of the conversation.
	hasAccess, _, err := svr.rbac_client_.ValidateAccess(clientId, rbacpb.SubjectType_ACCOUNT, "owner", rqst.Invitation.Conversation)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("no token was given")))
	}

	if !hasAccess {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("you must be the owner of the conversation to invite other user")))
	}

	// Append it to the list of conversation invitations.
	conversation, err := svr.getConversation(rqst.Invitation.Conversation)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Test if the the invitation was necessary.
	if Utility.Contains(conversation.Participants, rqst.Invitation.To) {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New(rqst.Invitation.To+" is already participanting to the conversation named "+rqst.Invitation.Name)))
	}

	if conversation.Invitations != nil {
		for i := 0; i < len(conversation.Invitations.Invitations); i++ {
			if conversation.Invitations.Invitations[i].From == rqst.Invitation.From && conversation.Invitations.Invitations[i].To == rqst.Invitation.To {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New(rqst.Invitation.To+" is already invited to join the conversation named "+rqst.Invitation.Name)))
			}
		}
	} else {
		conversation.Invitations = new(conversationpb.Invitations)
		conversation.Invitations.Invitations = make([]*conversationpb.Invitation, 0)
	}

	// set time from now...
	rqst.Invitation.InvitationDate = time.Now().Unix()
	// Index sent invitations
	sent_invitations_, err := svr.store.GetItem(clientId + "_sent_invitations")
	sent_invitations := new(conversationpb.Invitations)
	if err != nil {
		sent_invitations.Invitations = make([]*conversationpb.Invitation, 0)
	} else {
		err = jsonpb.UnmarshalString(string(sent_invitations_), sent_invitations)
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}
	}

	// I will save the invitation into the clientId invitation.
	sent_invitations.Invitations = append(sent_invitations.Invitations, rqst.Invitation)

	// Now I will save it back in the bd.
	var marshaler jsonpb.Marshaler
	jsonStr, err := marshaler.MarshalToString(sent_invitations)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	err = svr.store.SetItem(clientId+"_sent_invitations", []byte(jsonStr))
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Index received invitations.
	received_invitations_, err := svr.store.GetItem(rqst.Invitation.To + "_received_invitations")
	received_invitations := new(conversationpb.Invitations)
	if err != nil {
		received_invitations.Invitations = make([]*conversationpb.Invitation, 0)
	} else {
		err = jsonpb.UnmarshalString(string(received_invitations_), received_invitations)
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}
	}

	// I will save the invitation into the clientId invitation.
	received_invitations.Invitations = append(received_invitations.Invitations, rqst.Invitation)

	// Now I will save it back in the bd.
	jsonStr, err = marshaler.MarshalToString(received_invitations)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	err = svr.store.SetItem(rqst.Invitation.To+"_received_invitations", []byte(jsonStr))
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Here I will append the invitations to conversation and save it.
	conversation.Invitations.Invitations = append(conversation.Invitations.Invitations, rqst.Invitation)
	err = svr.saveConversation(conversation)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &conversationpb.SendInvitationResponse{}, nil
}

/**
 * Return a conversation with it given uuid
 */
func (svr *server) getConversation(uuid string) (*conversationpb.Conversation, error) {
	data, err := svr.store.GetItem(uuid)
	conversation := new(conversationpb.Conversation)
	if err != nil {
		return nil, err
	}

	err = jsonpb.UnmarshalString(string(data), conversation)
	if err != nil {
		return nil, err
	}

	return conversation, nil
}

/**
 * Save a conversations.
 */
func (svr *server) saveConversation(conversation *conversationpb.Conversation) error {
	var marshaler jsonpb.Marshaler
	jsonStr, err := marshaler.MarshalToString(conversation)
	if err != nil {
		return err
	}

	// set the new one.
	err = svr.store.SetItem(conversation.Uuid, []byte(jsonStr))
	if err != nil {
		return err
	}

	// Now I will set the search information for conversations...
	err = svr.search_engine.IndexJsonObject(svr.Root+"/conversations/search_data", jsonStr, conversation.Language, "uuid", []string{"name", "keywords"}, jsonStr)
	if err != nil {
		return err
	}

	fmt.Println("conversation index ", conversation.Name, " was saved!")

	return nil
}

// Remove invitation.
func (svr *server) removeInvitation(invitation *conversationpb.Invitation) error {

	// Remove from sent invitations...
	sent_invitations_, err := svr.store.GetItem(invitation.From + "_sent_invitations")
	sent_invitations := new(conversationpb.Invitations)
	if err != nil {
		return err
	}

	err = jsonpb.UnmarshalString(string(sent_invitations_), sent_invitations)
	if err != nil {
		return err
	}

	sent_invitations__ := make([]*conversationpb.Invitation, 0)
	for i := 0; i < len(sent_invitations.Invitations); i++ {
		if sent_invitations.Invitations[i].To != invitation.To {
			sent_invitations__ = append(sent_invitations__, sent_invitations.Invitations[i])
		}
	}

	// I will save the invitation into the clientId invitation.
	sent_invitations.Invitations = sent_invitations__

	// Now I will save it back in the bd.
	var marshaler jsonpb.Marshaler
	jsonStr, err := marshaler.MarshalToString(sent_invitations)
	if err != nil {
		return err
	}

	err = svr.store.SetItem(invitation.From+"_sent_invitations", []byte(jsonStr))
	if err != nil {
		return err
	}

	// Remove it from received invitations...
	received_invitations_, err := svr.store.GetItem(invitation.To + "_received_invitations")
	received_invitations := new(conversationpb.Invitations)
	if err != nil {
		return err
	}

	err = jsonpb.UnmarshalString(string(received_invitations_), received_invitations)
	if err != nil {
		return err
	}

	received_invitations__ := make([]*conversationpb.Invitation, 0)
	for i := 0; i < len(received_invitations.Invitations); i++ {
		if received_invitations.Invitations[i].To != invitation.To {
			received_invitations__ = append(received_invitations__, received_invitations.Invitations[i])
		}
	}

	// I will save the invitation into the clientId invitation.
	received_invitations.Invitations = received_invitations__

	// Now I will save it back in the bd.
	jsonStr, err = marshaler.MarshalToString(received_invitations)
	if err != nil {
		return err
	}

	err = svr.store.SetItem(invitation.To+"_received_invitations", []byte(jsonStr))
	if err != nil {
		return err
	}

	// Now I will remove invitation from the conversation itsvr.
	conversation, err := svr.getConversation(invitation.Conversation)
	if err != nil {
		return err
	}

	invitations__ := make([]*conversationpb.Invitation, 0)
	for i := 0; i < len(conversation.Invitations.Invitations); i++ {
		if conversation.Invitations.Invitations[i].To != invitation.To && conversation.Invitations.Invitations[i].From != invitation.From {
			invitations__ = append(invitations__, conversation.Invitations.Invitations[i])
		}
	}

	conversation.Invitations.Invitations = invitations__

	return svr.saveConversation(conversation)

}

// Accept invitation response.
func (svr *server) AcceptInvitation(ctx context.Context, rqst *conversationpb.AcceptInvitationRequest) (*conversationpb.AcceptInvitationResponse, error) {
	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {

			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}

		} else {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("no token was given")))

		}
	}

	// Validate the user id.
	if clientId != rqst.Invitation.To {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("Wrong account id your not authenticated as "+rqst.Invitation.To)))
	}

	err = svr.removeInvitation(rqst.Invitation)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	svr.addParticipantConversation(rqst.Invitation.To, rqst.Invitation.Conversation)

	return &conversationpb.AcceptInvitationResponse{}, nil
}

// Decline invitation response.
func (svr *server) DeclineInvitation(ctx context.Context, rqst *conversationpb.DeclineInvitationRequest) (*conversationpb.DeclineInvitationResponse, error) {
	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {

			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}

		} else {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("no token was given")))

		}
	}

	// Validate the user id.
	if clientId != rqst.Invitation.To {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("Wrong account id your not authenticated as "+rqst.Invitation.To)))
	}

	err = svr.removeInvitation(rqst.Invitation)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &conversationpb.DeclineInvitationResponse{}, nil
}

// Revoke invitation.
func (svr *server) RevokeInvitation(ctx context.Context, rqst *conversationpb.RevokeInvitationRequest) (*conversationpb.RevokeInvitationResponse, error) {

	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {

			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}

		} else {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("no token was given")))

		}
	}

	// Validate the user id.
	if clientId != rqst.Invitation.From {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("wrong account id your not authenticated as "+rqst.Invitation.From)))
	}

	err = svr.removeInvitation(rqst.Invitation)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &conversationpb.RevokeInvitationResponse{}, nil
}

// Get the list of received invitations request.
func (svr *server) GetReceivedInvitations(ctx context.Context, rqst *conversationpb.GetReceivedInvitationsRequest) (*conversationpb.GetReceivedInvitationsResponse, error) {
	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {

			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}

		} else {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("no token was given")))

		}
	}

	// Validate the user id.
	if clientId != rqst.Account {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("Wrong account id your not authenticated as "+rqst.Account)))
	}

	received_invitations_, err := svr.store.GetItem(clientId + "_received_invitations")
	received_invitations := new(conversationpb.Invitations)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	err = jsonpb.UnmarshalString(string(received_invitations_), received_invitations)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// Return the retreived invitations.
	return &conversationpb.GetReceivedInvitationsResponse{Invitations: received_invitations}, nil
}

// Get the list of sent invitations request.
func (svr *server) GetSentInvitations(ctx context.Context, rqst *conversationpb.GetSentInvitationsRequest) (*conversationpb.GetSentInvitationsResponse, error) {
	var clientId string
	var err error

	// Now I will index the conversation to be retreivable for it creator...
	if md, ok := metadata.FromIncomingContext(ctx); ok {
		token := strings.Join(md["token"], "")
		if len(token) > 0 {

			clientId, _, _, _, err = interceptors.ValidateToken(token)
			if err != nil {
				return nil, status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}

		} else {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("no token was given")))

		}
	}

	// Validate the user id.
	if clientId != rqst.Account {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("Wrong account id your not authenticated as "+rqst.Account)))
	}

	// Index sent invitations
	sent_invitations_, err := svr.store.GetItem(clientId + "_sent_invitations")
	sent_invitations := new(conversationpb.Invitations)
	if err != nil {
		sent_invitations.Invitations = make([]*conversationpb.Invitation, 0)
	} else {
		err = jsonpb.UnmarshalString(string(sent_invitations_), sent_invitations)
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}
	}

	// Return the retreived invitations.
	return &conversationpb.GetSentInvitationsResponse{Invitations: sent_invitations}, nil
}

/**
 * Create/Update message and send it back on the conversation channel.
 */
func (svr *server) sendMessage(msg *conversationpb.Message) error {

	// Save the message in the database...
	conn, err := svr.getConversationConnection(msg.Conversation)
	if err != nil {
		return err
	}

	// Here I will save the message.
	var marshaler jsonpb.Marshaler
	jsonStr_, err := marshaler.MarshalToString(msg)
	if err != nil {
		return err
	}

	// The key will be composed of the conversation id and message uuid...
	err = conn.SetItem(msg.Conversation+"/"+msg.Uuid, []byte(jsonStr_))
	if err != nil {
		return err
	}

	// Now I will index the message in the search engine...
	Utility.CreateDirIfNotExist(svr.Root + "/conversations/" + msg.Conversation + "/search_data")
	svr.search_engine.IndexJsonObject(svr.Root+"/conversations/"+msg.Conversation+"/search_data", jsonStr_, msg.Language, "uuid", []string{"text"}, jsonStr_)

	// set the conversation time...
	conversation, err := svr.getConversation(msg.Conversation)
	if err != nil {
		return err
	}

	conversation.LastMessageTime = time.Now().Unix()

	err = svr.saveConversation(conversation)
	if err != nil {
		return err
	}

	// Send the message on the network...
	send_message := make(map[string]interface{})
	send_message["action"] = "send_message"
	send_message["name"] = msg.Conversation
	send_message["message"] = msg

	// publish the message.
	svr.actions <- send_message

	fmt.Println("---->(save) send message: ", msg)

	return nil
}

// Send a message
func (svr *server) SendMessage(ctx context.Context, rqst *conversationpb.SendMessageRequest) (*conversationpb.SendMessageResponse, error) {

	// Save the message in the database...
	err := svr.sendMessage(rqst.Msg)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}
	return &conversationpb.SendMessageResponse{}, nil
}

// Delete message.
func (svr *server) DeleteMessage(ctx context.Context, rqst *conversationpb.DeleteMessageRequest) (*conversationpb.DeleteMessageResponse, error) {

	err := svr.deleteMessges(rqst.Conversation, rqst.Uuid)
	if err != nil {
		return nil, err
	}

	return &conversationpb.DeleteMessageResponse{}, nil
}

// Retreive a conversation by keywords or name...
func (svr *server) FindMessages(rqst *conversationpb.FindMessagesRequest, stream conversationpb.ConversationService_FindMessagesServer) error {

	return nil
}

/**
 * Get message.
 */
func (svr *server) getMessage(conversation string, uuid string) (*conversationpb.Message, error) {
	conn, err := svr.getConversationConnection(conversation)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	data, err := conn.GetItem(conversation + "/" + uuid)
	msg := new(conversationpb.Message)
	if err != nil {
		return nil, err
	}

	err = jsonpb.UnmarshalString(string(data), msg)
	if err != nil {
		return nil, err
	}

	return msg, nil
}

func (svr *server) deleteMessges(conversation string, uuid string) error {
	conn, err := svr.getConversationConnection(conversation)
	if err != nil {
		return err
	}

	return conn.RemoveItem(conversation + "/" + uuid + "*")
}

// append a like message
func (svr *server) LikeMessage(ctx context.Context, rqst *conversationpb.LikeMessageRqst) (*conversationpb.LikeMessageResponse, error) {

	// Get the message by it id.
	msg, err := svr.getMessage(rqst.Conversation, rqst.Message)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}
	/** Authors cannot like it own message...*/
	if msg.Author == rqst.Account {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("to be humble is not to think less of onesvr, but to think of onesvr less")))
	}

	/** Append only if the msg is not likes. */

	if !Utility.Contains(msg.Likes, rqst.Account) {
		msg.Dislikes = Utility.RemoveString(msg.Dislikes, rqst.Account)
		msg.Likes = append(msg.Likes, rqst.Account)
	} else {
		msg.Likes = Utility.RemoveString(msg.Likes, rqst.Account)
	}

	/** Send message */
	err = svr.sendMessage(msg)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &conversationpb.LikeMessageResponse{}, nil
}

// dislike message
func (svr *server) DislikeMessage(ctx context.Context, rqst *conversationpb.DislikeMessageRqst) (*conversationpb.DislikeMessageResponse, error) {
	// Get the message by it id.
	msg, err := svr.getMessage(rqst.Conversation, rqst.Message)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}
	/** Authors cannot like it own message...*/
	if msg.Author == rqst.Account {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("low svr-esteem is like driving through life with your hand-brake on")))
	}

	/** Append only if the msg is not likes. */
	if !Utility.Contains(msg.Dislikes, rqst.Account) {
		msg.Likes = Utility.RemoveString(msg.Likes, rqst.Account)
		msg.Dislikes = append(msg.Dislikes, rqst.Account)
	} else {
		msg.Dislikes = Utility.RemoveString(msg.Dislikes, rqst.Account)
	}

	/** Send message */
	err = svr.sendMessage(msg)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &conversationpb.DislikeMessageResponse{}, nil
}

// set message as read
func (svr *server) SetMessageRead(ctx context.Context, rqst *conversationpb.SetMessageReadRqst) (*conversationpb.SetMessageReadResponse, error) {
	return nil, nil
}

// That function process channel operation and run in it own go routine.
func (svr *server) run() {

	log.Println("start conversation service")
	channels := make(map[string][]string)
	clientIds := make(map[string]string)
	streams := make(map[string]conversationpb.ConversationService_ConnectServer)
	quits := make(map[string]chan bool)

	// Here will create the action channel.
	svr.actions = make(chan map[string]interface{})

	for {
		select {
		case <-svr.exit:
			return
		case a := <-svr.actions:

			action := a["action"].(string)
			if action == "connect" {
				streams[a["uuid"].(string)] = a["stream"].(conversationpb.ConversationService_ConnectServer)
				clientIds[a["uuid"].(string)] = a["clientId"].(string)
				quits[a["uuid"].(string)] = a["quit"].(chan bool)
			} else if action == "join" {
				if channels[a["name"].(string)] == nil {
					channels[a["name"].(string)] = make([]string, 0)
				}
				if !Utility.Contains(channels[a["name"].(string)], a["uuid"].(string)) {
					channels[a["name"].(string)] = append(channels[a["name"].(string)], a["uuid"].(string))
				}
			} else if action == "send_message" {
				if channels[a["name"].(string)] != nil {
					toDelete := make([]string, 0)
					for i := 0; i < len(channels[a["name"].(string)]); i++ {
						uuid := channels[a["name"].(string)][i]
						stream := streams[uuid]
						msg := a["message"].(*conversationpb.Message)
						if stream != nil {
							// Here I will send data to stream.
							err := stream.Send(&conversationpb.ConnectResponse{
								Msg: msg,
							})

							// In case of error I will remove the subscriber
							// from the list.
							if err != nil {
								// append to channle list to be close.
								toDelete = append(toDelete, uuid)
							}
						} else {
							log.Println("connection stream with ", uuid, "is nil!")
						}
					}

					// remove closed channel
					for i := 0; i < len(toDelete); i++ {
						uuid := toDelete[i]
						clientId := clientIds[uuid]
						// remove uuid from all channels.
						for name, channel := range channels {
							uuids := make([]string, 0)
							for i := 0; i < len(channel); i++ {
								if uuid != channel[i] {
									uuids = append(uuids, channel[i])
								}
							}
							channels[name] = uuids
							svr.removeConversationParticipant(clientId, uuid)
						}
						// return from OnEvent
						quits[uuid] <- true
						// remove the channel from the map.
						delete(quits, uuid)
					}
				}
			} else if action == "leave" {
				uuids := make([]string, 0)
				for i := 0; i < len(channels[a["name"].(string)]); i++ {
					if a["uuid"].(string) != channels[a["name"].(string)][i] {
						uuids = append(uuids, channels[a["name"].(string)][i])
					}
				}
				channels[a["name"].(string)] = uuids
			} else if action == "disconnect" {
				// remove uuid from all channels.
				for name, channel := range channels {
					uuids := make([]string, 0)
					for i := 0; i < len(channel); i++ {
						if a["uuid"].(string) != channel[i] {
							uuids = append(uuids, channel[i])
						}
					}
					channels[name] = uuids
				}
				// return from connect
				quits[a["uuid"].(string)] <- true
				// remove the channel from the map.
				delete(quits, a["uuid"].(string))
			}
		}
	}
}

// That service is use to give access to SQL.
// port number must be pass as argument.
func main() {

	// set the logger.
	//grpclog.SetLogger(log.New(os.Stdout, "Conversation_service: ", log.LstdFlags))

	// Set the log information in case of crash...
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	// Initialyse service with default values.
	s_impl := new(server)
	s_impl.Name = string(conversationpb.File_conversation_proto.Services().Get(0).FullName())
	s_impl.Proto = conversationpb.File_conversation_proto.Path()
	s_impl.Port = defaultPort
	s_impl.Proxy = defaultProxy
	s_impl.Protocol = "grpc"
	s_impl.Domain = domain
	s_impl.Version = "0.0.1"
	s_impl.PublisherId = "globulario"
	s_impl.Description = "A way to communicate with other member of an organization"
	s_impl.Keywords = []string{"Conversation", "Chat", "Messenger"}
	s_impl.Repositories = make([]string, 0)
	s_impl.Discoveries = make([]string, 0)
	s_impl.Dependencies = []string{"rbac.RbacService"}
	s_impl.Permissions = make([]interface{}, 0)

	s_impl.AllowAllOrigins = allow_all_origins
	s_impl.AllowedOrigins = allowed_origins

	// Set the root path if is pass as argument.
	if len(s_impl.Root) == 0 {
		s_impl.Root = os.TempDir()
	}

	// Here I will retreive the list of connections from file if there are some...
	err := s_impl.Init()
	if err != nil {
		log.Fatalf("fail to initialyse service %s: %s", s_impl.Name, s_impl.Id)
	}

	if len(os.Args) == 2 {
		s_impl.Port, _ = strconv.Atoi(os.Args[1]) // The second argument must be the port number
	}

	// The search engine use to search into message, file and conversation.
	s_impl.search_engine = new(search_engine.XapianEngine)

	// The map of db connections.
	s_impl.conversations = new(sync.Map)

	// Open the connetion with the store.
	Utility.CreateDirIfNotExist(s_impl.Root + "/conversations")
	s_impl.store.Open(`{"path":"` + s_impl.Root + "/conversations" + `", "name":"index"}`)

	// Register the Conversation services
	conversationpb.RegisterConversationServiceServer(s_impl.grpcServer, s_impl)
	reflection.Register(s_impl.grpcServer)

	// Init the Role Based Access Control client.
	s_impl.rbac_client_, _ = rbac_client.NewRbacService_Client(s_impl.Domain, "rbac.RbacService")

	// Here I will make a signal hook to interrupt to exit cleanly.
	go s_impl.run()

	// Start the service.
	s_impl.StartService()

}
