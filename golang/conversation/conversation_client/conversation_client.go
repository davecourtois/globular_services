package conversation_client

import (
	"strconv"

	"context"
	"fmt"
	"io"
	"time"

	//"github.com/davecourtois/Utility"
	"github.com/davecourtois/Utility"
	"github.com/globulario/services/golang/conversation/conversationpb"
	globular "github.com/globulario/services/golang/globular_client"
	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

////////////////////////////////////////////////////////////////////////////////
// conversation Client Service
////////////////////////////////////////////////////////////////////////////////

type Conversation_Client struct {
	cc *grpc.ClientConn
	c  conversationpb.ConversationServiceClient

	// The id of the service
	id string

	// The name of the service
	name string

	// The mac address of the server
	mac string

	// The client domain
	domain string

	// The port
	port int

	// is the connection is secure?
	hasTLS bool

	// Link to client key file
	keyFile string

	// Link to client certificate file.
	certFile string

	// certificate authority file
	caFile string

	// The event channel.
	actions chan map[string]interface{}

	// A unique uuid use for authenticate with the server.
	uuid string
}

// Create a connection to the service.
func NewConversationService_Client(address string, id string) (*Conversation_Client, error) {
	client := new(Conversation_Client)
	err := globular.InitClient(client, address, id)
	if err != nil {
		return nil, err
	}
	client.cc, err = globular.GetClientConnection(client)
	if err != nil {
		return nil, err
	}
	client.c = conversationpb.NewConversationServiceClient(client.cc)

	// The channel where data will be exchange.
	client.actions = make(chan map[string]interface{})

	// Create a random uuid.
	client.uuid = Utility.RandomUUID()

	// Open a connection with the server. In case the server is not ready
	// It will wait 5 second and try it again.
	nb_try_connect := 15

	go func() {
		for nb_try_connect > 0 {
			err := client.run()
			if err != nil && nb_try_connect == 0 {
				fmt.Println("78 Fail to create event client: ", id, err)
				break // exit loop.
			}
			time.Sleep(5 * time.Second) // wait five seconds.
			nb_try_connect--
		}
	}()

	return client, nil
}

/**
 * Process event from the server. Only one stream is needed between the server
 * and the client. Local handler are kept in a map with a unique uuid, so many
 * handler can exist for a single event.
 */
func (converstion_client *Conversation_Client) run() error {

	// Create the channel.
	data_channel := make(chan *conversationpb.Message)

	// start listenting to events from the server...
	err := converstion_client.connect(converstion_client.uuid, data_channel)
	if err != nil {
		return err
	}

	// the map that will contain the event handler.
	handlers := make(map[string]map[string]func(*conversationpb.Message))

	for {
		select {
		case msg := <-data_channel:
			// So here I received a message, I will dispatch it to it conversation.
			handlers_ := handlers[msg.Conversation]
			for _, fct := range handlers_ {
				// Call the handler.
				fct(msg)
			}

		case action := <-converstion_client.actions:
			if action["action"].(string) == "join" {
				if handlers[action["name"].(string)] == nil {
					handlers[action["name"].(string)] = make(map[string]func(*conversationpb.Message))
				}
				// Set it handler.
				handlers[action["name"].(string)][action["uuid"].(string)] = action["fct"].(func(*conversationpb.Message))
			} else if action["action"].(string) == "leave" {
				// Now I will remove the handler...
				for _, handler := range handlers {
					if handler[action["uuid"].(string)] != nil {
						delete(handler, action["uuid"].(string))
					}
				}
			} else if action["action"].(string) == "stop" {
				return nil
			}
		}
	}
}

func (converstion_client *Conversation_Client) Invoke(method string, rqst interface{}, ctx context.Context) (interface{}, error) {
	if ctx == nil {
		ctx = globular.GetClientContext(converstion_client)
	}
	return globular.InvokeClientRequest(converstion_client.c, ctx, method, rqst)
}

// Return the domain
func (converstion_client *Conversation_Client) GetDomain() string {
	return converstion_client.domain
}

// Return the address
func (converstion_client *Conversation_Client) GetAddress() string {
	return converstion_client.domain + ":" + strconv.Itoa(converstion_client.port)
}

// Return the id of the service instance
func (converstion_client *Conversation_Client) GetId() string {
	return converstion_client.id
}

// Return the name of the service
func (converstion_client *Conversation_Client) GetName() string {
	return converstion_client.name
}

func (converstion_client *Conversation_Client) GetMac() string {
	return converstion_client.mac
}

// must be close when no more needed.
func (converstion_client *Conversation_Client) Close() {
	converstion_client.cc.Close()
}

// Set grpc_service port.
func (converstion_client *Conversation_Client) SetPort(port int) {
	converstion_client.port = port
}

// Set the client instance id.
func (converstion_client *Conversation_Client) SetId(id string) {
	converstion_client.id = id
}

// Set the client name.
func (converstion_client *Conversation_Client) SetName(name string) {
	converstion_client.name = name
}

func (converstion_client *Conversation_Client) SetMac(mac string) {
	converstion_client.mac = mac
}

// Set the domain.
func (converstion_client *Conversation_Client) SetDomain(domain string) {
	converstion_client.domain = domain
}

////////////////// TLS ///////////////////

// Get if the client is secure.
func (converstion_client *Conversation_Client) HasTLS() bool {
	return converstion_client.hasTLS
}

// Get the TLS certificate file path
func (converstion_client *Conversation_Client) GetCertFile() string {
	return converstion_client.certFile
}

// Get the TLS key file path
func (converstion_client *Conversation_Client) GetKeyFile() string {
	return converstion_client.keyFile
}

// Get the TLS key file path
func (converstion_client *Conversation_Client) GetCaFile() string {
	return converstion_client.caFile
}

// Set the client is a secure client.
func (converstion_client *Conversation_Client) SetTLS(hasTls bool) {
	converstion_client.hasTLS = hasTls
}

// Set TLS certificate file path
func (converstion_client *Conversation_Client) SetCertFile(certFile string) {
	converstion_client.certFile = certFile
}

// Set TLS key file path
func (converstion_client *Conversation_Client) SetKeyFile(keyFile string) {
	converstion_client.keyFile = keyFile
}

// Set TLS authority trust certificate file path
func (converstion_client *Conversation_Client) SetCaFile(caFile string) {
	converstion_client.caFile = caFile
}

////////////////// Api //////////////////////
// Stop the service.
func (converstion_client *Conversation_Client) StopService() {
	converstion_client.c.Stop(globular.GetClientContext(converstion_client), &conversationpb.StopRequest{})
}

////////////////////////////////////////////////////////////////////////////////
// Conversation specific function here.
////////////////////////////////////////////////////////////////////////////////

// Create a new conversation with a given name and a list of keywords for retreive it latter.
func (converstion_client *Conversation_Client) CreateConversation(token string, name string, keywords []string) (*conversationpb.Conversation, error) {

	rqst := &conversationpb.CreateConversationRequest{
		Name:     name,
		Keywords: keywords,
	}

	ctx := globular.GetClientContext(converstion_client)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	/** Create the conversation on the server side and get it uuid as response. */
	rsp, err := converstion_client.c.CreateConversation(ctx, rqst)

	if err != nil {
		return nil, err
	}

	return rsp.Conversation, nil
}

// Return the list of owned conversations.
func (converstion_client *Conversation_Client) GetOwnedConversations(token string, creator string) (*conversationpb.Conversations, error) {
	rqst := &conversationpb.GetConversationsRequest{
		Creator: creator,
	}

	ctx := globular.GetClientContext(converstion_client)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	rsp, err := converstion_client.c.GetConversations(ctx, rqst)

	if err != nil {
		return nil, err
	}

	return rsp.GetConversations(), nil
}

// Delete a conversation
func (converstion_client *Conversation_Client) DeleteConversation(token string, conversationUuid string) error {
	rqst := new(conversationpb.DeleteConversationRequest)
	rqst.ConversationUuid = conversationUuid

	ctx := globular.GetClientContext(converstion_client)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	_, err := converstion_client.c.DeleteConversation(ctx, rqst)

	if err != nil {
		return err
	}

	return nil
}

/**
 * Find a conversations.
 */
func (converstion_client *Conversation_Client) FindConversations(token string, query string, language string, offset int32, pageSize int32, snippetSize int32) ([]*conversationpb.Conversation, error) {
	rqst := new(conversationpb.FindConversationsRequest)
	rqst.Query = query
	rqst.Language = language
	rqst.Offset = offset
	rqst.PageSize = pageSize
	rqst.SnippetSize = snippetSize

	ctx := globular.GetClientContext(converstion_client)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	results, err := converstion_client.c.FindConversations(ctx, rqst)

	if err != nil {
		return nil, err
	}

	return results.Conversations, nil
}

/**
 * Open a new connection with the conversation server.
 */
func (converstion_client *Conversation_Client) connect(uuid string, data_channel chan *conversationpb.Message) error {

	rqst := &conversationpb.ConnectRequest{
		Uuid: uuid,
	}

	stream, err := converstion_client.c.Connect(globular.GetClientContext(converstion_client), rqst)
	if err != nil {
		return err
	}

	// Run in it own goroutine.
	go func() {
		for {
			msg, err := stream.Recv()
			if err == io.EOF {
				// end of stream...
				break
			}
			if err != nil {
				break
			}

			// Get the result...
			data_channel <- msg.GetMsg()
		}
	}()

	// Wait for subscriber uuid and return it to the function caller.
	return nil
}

func (converstion_client *Conversation_Client) JoinConversation(conversation_uuid string, listener_uuid string, fct func(msg *conversationpb.Message)) (*conversationpb.Conversations, error) {
	/** Connect to a given conversation */
	rqst := &conversationpb.JoinConversationRequest{
		ConversationUuid: conversation_uuid,
		ConnectionUuid:   converstion_client.uuid,
	}

	stream, err := converstion_client.c.JoinConversation(globular.GetClientContext(converstion_client), rqst)
	if err != nil {
		fmt.Println("fail to join conversation ", conversation_uuid, err)
		return nil, err
	}

	var conversations *conversationpb.Conversations
	if stream != nil {
		// TODO get stream and init the conversations object here...
		fmt.Println("Get existing messages...")
	}

	action := make(map[string]interface{})
	action["action"] = "join"
	action["uuid"] = listener_uuid
	action["name"] = conversation_uuid
	action["fct"] = fct

	// set the action.
	converstion_client.actions <- action

	// Return the list of message already in the database...

	return conversations, nil
}

// Exit event channel.
func (converstion_client *Conversation_Client) Leave(conversation_uuid string, listener_uuid string) error {

	// Unsubscribe from the event channel.
	rqst := &conversationpb.LeaveConversationRequest{
		ConversationUuid: conversation_uuid,
		ConnectionUuid:   converstion_client.uuid,
	}

	_, err := converstion_client.c.LeaveConversation(globular.GetClientContext(converstion_client), rqst)
	if err != nil {
		return err
	}

	action := make(map[string]interface{})
	action["action"] = "leave"
	action["uuid"] = listener_uuid
	action["name"] = conversation_uuid

	// set the action.
	converstion_client.actions <- action
	return nil
}

// Publish and event over the network
func (converstion_client *Conversation_Client) SendMessage(conversation_uuid string, msg *conversationpb.Message) error {
	rqst := &conversationpb.SendMessageRequest{
		Msg: msg,
	}

	_, err := converstion_client.c.SendMessage(globular.GetClientContext(converstion_client), rqst)
	if err != nil {
		return err
	}

	return nil
}
