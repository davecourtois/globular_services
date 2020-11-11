package main

import (
	"context"
	"errors"
	"flag"
	"fmt"
	"io"
	"log"
	"os"
	"path/filepath"
	"strconv"
	"strings"

	globular "github.com/globulario/services/golang/globular_service"
	"github.com/globulario/services/golang/persistence/persistence_client"

	"github.com/davecourtois/Utility"
	"github.com/globulario/Globular/Interceptors"
	"github.com/globulario/services/golang/mail/mail_client"
	"github.com/globulario/services/golang/mail/mailpb"
	"google.golang.org/grpc"
	"google.golang.org/grpc/codes"

	//"google.golang.org/grpc/grpclog"

	"github.com/globulario/services/golang/mail/mail_server/imap"
	"github.com/globulario/services/golang/mail/mail_server/smtp"
	"google.golang.org/grpc/reflection"
	"google.golang.org/grpc/status"

	gomail "gopkg.in/gomail.v1"
)

var (
	defaultPort  = 10067
	defaultProxy = 10068

	// By default all origins are allowed.
	allow_all_origins = true

	// comma separeated values.
	allowed_origins string = ""

	// the domain of the server.
	domain string = "localhost"
)

// Keep connection information here.
type connection struct {
	Id       string // The connection id
	Host     string // can also be ipv4 addresse.
	User     string
	Password string
	Port     int32
}

type server struct {
	// The global attribute of the services.
	Id                 string
	Name               string
	Path               string
	Proto              string
	Port               int
	Proxy              int
	Protocol           string
	AllowAllOrigins    bool
	AllowedOrigins     string // comma separated string.
	Domain             string
	Description        string
	Keywords           []string
	Repositories       []string
	Discoveries        []string
	CertFile           string
	KeyFile            string
	CertAuthorityTrust string
	Version            string
	TLS                bool
	PublisherId        string
	KeepUpToDate       bool
	KeepAlive          bool
	Permissions        []interface{} // contains the action permission for the services.

	// The grpc server.
	grpcServer *grpc.Server

	// The map of connection...
	Connections map[string]connection

	// The smtp server port
	SMTP_Port     int
	SMTPS_Port    int // ssl port
	SMTP_ALT_Port int // alternate port

	// The imap server port
	IMAP_Port     int
	IMAPS_Port    int // ssl port
	IMAP_ALT_Port int // alternate port

	// The backend admin password necessary to validate email address and
	// store incomming message.
	Password string
	DbIpV4   string // The address of the databe ex 0.0.0.0:27017

}

// Globular services implementation...
// The id of a particular service instance.
func (self *server) GetId() string {
	return self.Id
}
func (self *server) SetId(id string) {
	self.Id = id
}

// The name of a service, must be the gRpc Service name.
func (self *server) GetName() string {
	return self.Name
}
func (self *server) SetName(name string) {
	self.Name = name
}

// The description of the service
func (self *server) GetDescription() string {
	return self.Description
}
func (self *server) SetDescription(description string) {
	self.Description = description
}

// The list of keywords of the services.
func (self *server) GetKeywords() []string {
	return self.Keywords
}
func (self *server) SetKeywords(keywords []string) {
	self.Keywords = keywords
}

// Dist
func (self *server) Dist(path string) error {

	return globular.Dist(path, self)
}

func (self *server) GetPlatform() string {
	return globular.GetPlatform()
}

func (self *server) PublishService(address string, user string, password string) error {
	return globular.PublishService(address, user, password, self)
}

// The path of the executable.
func (self *server) GetPath() string {
	return self.Path
}
func (self *server) SetPath(path string) {
	self.Path = path
}

func (self *server) GetRepositories() []string {
	return self.Repositories
}
func (self *server) SetRepositories(repositories []string) {
	self.Repositories = repositories
}

func (self *server) GetDiscoveries() []string {
	return self.Discoveries
}
func (self *server) SetDiscoveries(discoveries []string) {
	self.Discoveries = discoveries
}

// The path of the .proto file.
func (self *server) GetProto() string {
	return self.Proto
}
func (self *server) SetProto(proto string) {
	self.Proto = proto
}

// The gRpc port.
func (self *server) GetPort() int {
	return self.Port
}
func (self *server) SetPort(port int) {
	self.Port = port
}

// The reverse proxy port (use by gRpc Web)
func (self *server) GetProxy() int {
	return self.Proxy
}
func (self *server) SetProxy(proxy int) {
	self.Proxy = proxy
}

// Can be one of http/https/tls
func (self *server) GetProtocol() string {
	return self.Protocol
}
func (self *server) SetProtocol(protocol string) {
	self.Protocol = protocol
}

// Return true if all Origins are allowed to access the mircoservice.
func (self *server) GetAllowAllOrigins() bool {
	return self.AllowAllOrigins
}
func (self *server) SetAllowAllOrigins(allowAllOrigins bool) {
	self.AllowAllOrigins = allowAllOrigins
}

// If AllowAllOrigins is false then AllowedOrigins will contain the
// list of address that can reach the services.
func (self *server) GetAllowedOrigins() string {
	return self.AllowedOrigins
}

func (self *server) SetAllowedOrigins(allowedOrigins string) {
	self.AllowedOrigins = allowedOrigins
}

// Can be a ip address or domain name.
func (self *server) GetDomain() string {
	return self.Domain
}
func (self *server) SetDomain(domain string) {
	self.Domain = domain
}

// TLS section

// If true the service run with TLS. The
func (self *server) GetTls() bool {
	return self.TLS
}
func (self *server) SetTls(hasTls bool) {
	self.TLS = hasTls
}

// The certificate authority file
func (self *server) GetCertAuthorityTrust() string {
	return self.CertAuthorityTrust
}
func (self *server) SetCertAuthorityTrust(ca string) {
	self.CertAuthorityTrust = ca
}

// The certificate file.
func (self *server) GetCertFile() string {
	return self.CertFile
}
func (self *server) SetCertFile(certFile string) {
	self.CertFile = certFile
}

// The key file.
func (self *server) GetKeyFile() string {
	return self.KeyFile
}
func (self *server) SetKeyFile(keyFile string) {
	self.KeyFile = keyFile
}

// The service version
func (self *server) GetVersion() string {
	return self.Version
}
func (self *server) SetVersion(version string) {
	self.Version = version
}

// The publisher id.
func (self *server) GetPublisherId() string {
	return self.PublisherId
}
func (self *server) SetPublisherId(publisherId string) {
	self.PublisherId = publisherId
}

func (self *server) GetKeepUpToDate() bool {
	return self.KeepUpToDate
}
func (self *server) SetKeepUptoDate(val bool) {
	self.KeepUpToDate = val
}

func (self *server) GetKeepAlive() bool {
	return self.KeepAlive
}
func (self *server) SetKeepAlive(val bool) {
	self.KeepAlive = val
}

func (self *server) GetPermissions() []interface{} {
	return self.Permissions
}
func (self *server) SetPermissions(permissions []interface{}) {
	self.Permissions = permissions
}

// Create the configuration file if is not already exist.
func (self *server) Init() error {

	// That function is use to get access to other server.
	Utility.RegisterFunction("NewSmtpService_Client", mail_client.NewMailService_Client)

	// Get the configuration path.
	dir, _ := filepath.Abs(filepath.Dir(os.Args[0]))

	err := globular.InitService(dir+"/config.json", self)
	if err != nil {
		return err
	}

	// Initialyse GRPC server.
	self.grpcServer, err = globular.InitGrpcServer(self, Interceptors.ServerUnaryInterceptor, Interceptors.ServerStreamInterceptor)
	if err != nil {
		return err
	}

	return nil

}

// Save the configuration values.
func (self *server) Save() error {
	// Create the file...
	dir, _ := filepath.Abs(filepath.Dir(os.Args[0]))
	return globular.SaveService(dir+"/config.json", self)
}

func (self *server) StartService() error {
	return globular.StartService(self, self.grpcServer)
}

func (self *server) StopService() error {
	return globular.StopService(self, self.grpcServer)
}

func (self *server) Stop(context.Context, *mailpb.StopRequest) (*mailpb.StopResponse, error) {
	return &mailpb.StopResponse{}, self.StopService()
}

//////////////////////////// SMPT specific functions ///////////////////////////

// Create a new connection and store it for futur use. If the connection already
// exist it will be replace by the new one.
func (self *server) CreateConnection(ctx context.Context, rsqt *mailpb.CreateConnectionRqst) (*mailpb.CreateConnectionRsp, error) {

	fmt.Println("Try to create a new connection")
	var c connection
	var err error

	// Set the connection info from the request.
	c.Id = rsqt.Connection.Id
	c.Host = rsqt.Connection.Host
	c.Port = rsqt.Connection.Port
	c.User = rsqt.Connection.User
	c.Password = rsqt.Connection.Password

	// set or update the connection and save it in json file.
	self.Connections[c.Id] = c

	// In that case I will save it in file.
	err = self.Save()
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	globular.UpdateServiceConfig(self)

	// test if the connection is reacheable.
	// _, err = self.ping(ctx, c.Id)

	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &mailpb.CreateConnectionRsp{
		Result: true,
	}, nil
}

// Remove a connection from the map and the file.
func (self *server) DeleteConnection(ctx context.Context, rqst *mailpb.DeleteConnectionRqst) (*mailpb.DeleteConnectionRsp, error) {
	id := rqst.GetId()
	if _, ok := self.Connections[id]; !ok {
		return &mailpb.DeleteConnectionRsp{
			Result: true,
		}, nil
	}

	delete(self.Connections, id)

	// In that case I will save it in file.
	err := self.Save()
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	// return success.
	return &mailpb.DeleteConnectionRsp{
		Result: true,
	}, nil
}

////////////////////////////////////////////////////////////////////////////////
// SMTP functions.
////////////////////////////////////////////////////////////////////////////////

/**
 * Carbon copy list...
 */
type CarbonCopy struct {
	EMail string
	Name  string
}

/**
 * Attachment file, if the data is empty or nil
 * that means the file is on the server a the given path.
 */
type Attachment struct {
	FileName string
	FileData []byte
}

/**
 * Send mail... The server id is the authentification id...
 */
func (self *server) sendEmail(id string, from string, to []string, cc []*CarbonCopy, subject string, body string, attachs []*Attachment, bodyType string) error {

	msg := gomail.NewMessage()
	msg.SetHeader("From", from)
	msg.SetHeader("To", to...)

	// Attach the multiple carbon copy...
	var cc_ []string
	for i := 0; i < len(cc); i++ {
		cc_ = append(cc_, msg.FormatAddress(cc[i].EMail, cc[i].Name))
	}

	if len(cc_) > 0 {
		msg.SetHeader("Cc", cc_...)
	}

	msg.SetHeader("Subject", subject)
	msg.SetBody(bodyType, body)

	for i := 0; i < len(attachs); i++ {
		f := gomail.CreateFile(attachs[i].FileName, attachs[i].FileData)
		msg.Attach(f)
	}

	config := self.Connections[id]

	mailer := gomail.NewMailer(config.Host, config.User, config.Password, int(config.Port))

	if err := mailer.Send(msg); err != nil {
		return err
	}
	return nil
}

// Send a simple email whitout file.
func (self *server) SendEmail(ctx context.Context, rqst *mailpb.SendEmailRqst) (*mailpb.SendEmailRsp, error) {
	if rqst.Email == nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("No email message was given!")))
	}

	cc := make([]*CarbonCopy, len(rqst.Email.Cc))
	for i := 0; i < len(rqst.Email.Cc); i++ {
		cc[i] = &CarbonCopy{Name: rqst.Email.Cc[i].Name, EMail: rqst.Email.Cc[i].Address}
	}

	bodyType := "text/html"
	if rqst.Email.BodyType != mailpb.BodyType_HTML {
		bodyType = "text/html"
	}

	err := self.sendEmail(rqst.Id, rqst.Email.From, rqst.Email.To, cc, rqst.Email.Subject, rqst.Email.Body, []*Attachment{}, bodyType)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &mailpb.SendEmailRsp{
		Result: true,
	}, nil
}

// Send email with file attachement attachements.
func (self *server) SendEmailWithAttachements(stream mailpb.MailService_SendEmailWithAttachementsServer) error {

	// that buffer will contain the file attachement data while data is transfert.
	attachements := make([]*Attachment, 0)
	var bodyType string
	var body string
	var subject string
	var from string
	var to []string
	var cc []*CarbonCopy
	var id string

	// So here I will read the stream until it end...
	for {
		rqst, err := stream.Recv()
		if err == io.EOF {
			// Here all data is read...
			err := self.sendEmail(id, from, to, cc, subject, body, attachements, bodyType)

			if err != nil {
				return status.Errorf(
					codes.Internal,
					Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
			}

			// Close the stream...
			stream.SendAndClose(&mailpb.SendEmailWithAttachementsRsp{
				Result: true,
			})

			return nil
		}

		if err != nil {
			return status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}

		id = rqst.Id

		// Receive message informations.
		switch msg := rqst.Data.(type) {
		case *mailpb.SendEmailWithAttachementsRqst_Email:
			cc = make([]*CarbonCopy, len(msg.Email.Cc))

			// The email itself.
			for i := 0; i < len(msg.Email.Cc); i++ {
				cc[i] = &CarbonCopy{Name: msg.Email.Cc[i].Name, EMail: msg.Email.Cc[i].Address}
			}
			bodyType = "text"
			if msg.Email.BodyType == mailpb.BodyType_HTML {
				bodyType = "html"
			}
			from = msg.Email.From
			to = msg.Email.To
			body = msg.Email.Body
			subject = msg.Email.Subject

		case *mailpb.SendEmailWithAttachementsRqst_Attachements:
			var lastAttachement *Attachment
			if len(attachements) > 0 {
				lastAttachement = attachements[len(attachements)-1]
				if lastAttachement.FileName != msg.Attachements.FileName {
					lastAttachement = new(Attachment)
					lastAttachement.FileData = make([]byte, 0)
					lastAttachement.FileName = msg.Attachements.FileName
					attachements = append(attachements, lastAttachement)
				}
			} else {
				lastAttachement = new(Attachment)
				lastAttachement.FileData = make([]byte, 0)
				lastAttachement.FileName = msg.Attachements.FileName
				attachements = append(attachements, lastAttachement)
			}

			// Append the data in the file attachement.
			lastAttachement.FileData = append(lastAttachement.FileData, msg.Attachements.FileData...)
		}

	}

	return nil
}

////////////////////////////////////////////////////////////////////////////////
// IMAP functions.
////////////////////////////////////////////////////////////////////////////////

// That service is use to give access to SQL.
// port number must be pass as argument.
func main() {

	log.Println("---> start mail server")
	port := defaultPort // the default value.
	if len(os.Args) == 2 {
		port, _ = strconv.Atoi(os.Args[1]) // The second argument must be the port number
	}
	// set the logger.
	//grpclog.SetLogger(log.New(os.Stdout, "smtp_service: ", log.LstdFlags))

	// Set the log information in case of crash...
	log.SetFlags(log.LstdFlags | log.Lshortfile)

	// The actual server implementation.
	s_impl := new(server)
	s_impl.Connections = make(map[string]connection)
	s_impl.Name = string(mailpb.File_proto_mail_proto.Services().Get(0).FullName())
	s_impl.Proto = mailpb.File_proto_mail_proto.Path()
	s_impl.Port = port
	s_impl.Domain = domain
	s_impl.Proxy = defaultProxy
	s_impl.Protocol = "grpc"
	s_impl.Version = "0.0.1"
	s_impl.AllowAllOrigins = allow_all_origins
	s_impl.AllowedOrigins = allowed_origins
	s_impl.PublisherId = "globulario"
	s_impl.Permissions = make([]interface{}, 0)
	s_impl.SMTP_Port = 25      // non encrypted
	s_impl.SMTPS_Port = 465    // encrypted
	s_impl.SMTP_ALT_Port = 587 // This is the default smtp port (25 is almost alway's blocked by isp).
	s_impl.IMAP_Port = 143     // non
	s_impl.IMAPS_Port = 993
	s_impl.IMAP_ALT_Port = 1043 // non official
	s_impl.Keywords = make([]string, 0)
	s_impl.Repositories = make([]string, 0)
	s_impl.Discoveries = make([]string, 0)
	s_impl.DbIpV4 = "0.0.0.0:27017"

	s_impl.Password = "adminadmin" // The default password for the admin.

	// Here I will retreive the list of connections from file if there are some...
	err := s_impl.Init()
	if err != nil {
		log.Fatalf("Fail to initialyse service %s: %s", s_impl.Name, s_impl.Id, err)
	}

	if len(os.Args) > 2 {
		publishCommand := flag.NewFlagSet("publish", flag.ExitOnError)
		publishCommand_domain := publishCommand.String("a", "", "The address(domain ex. my.domain.com:8080) of your backend (Required)")
		publishCommand_user := publishCommand.String("u", "", "The user (Required)")
		publishCommand_password := publishCommand.String("p", "", "The password (Required)")

		switch os.Args[1] {
		case "publish":
			publishCommand.Parse(os.Args[2:])
		default:
			flag.PrintDefaults()
			os.Exit(1)
		}

		if publishCommand.Parsed() {
			// Required Flags
			if *publishCommand_domain == "" {
				publishCommand.PrintDefaults()
				os.Exit(1)
			}

			if *publishCommand_user == "" {
				publishCommand.PrintDefaults()
				os.Exit(1)
			}

			if *publishCommand_password == "" {
				publishCommand.PrintDefaults()
				os.Exit(1)
			}

			err := s_impl.PublishService(*publishCommand_domain, *publishCommand_user, *publishCommand_password)
			if err != nil {
				fmt.Println(err.Error())
			} else {
				fmt.Println("Your service was publish successfuly!")
			}
		}
	} else {

		// Register the echo services
		mailpb.RegisterMailServiceServer(s_impl.grpcServer, s_impl)
		reflection.Register(s_impl.grpcServer)

		// Here I will start the local smtp server.
		go func() {
			certFile := s_impl.CertFile

			// Here in case of tls connection I will use the domain certificate instead of the server certificate.
			if s_impl.TLS == true {
				certFile = certFile[0:strings.Index(certFile, "server.crt")] + s_impl.Domain + ".crt"
			}

			address := string(strings.Split(s_impl.DbIpV4, ":")[0])
			port := Utility.ToInt(strings.Split(s_impl.DbIpV4, ":")[1])

			// The backend connection.
			store, err := persistence_client.NewPersistenceService_Client(address, "persistence.PersistenceService")
			if err != nil {
				log.Println(err)
				return
			}

			// set variable for imap and smtp
			imap.Backend_address = address
			smtp.Backend_address = address
			imap.Backend_port = port
			smtp.Backend_port = port
			imap.Backend_password = s_impl.Password
			imap.Store = store
			smtp.Store = store

			// Open the backend main connection
			err = store.CreateConnection("local_ressource", "local_ressource", address, float64(port), 0, "sa", s_impl.Password, 5000, "", false)
			if err != nil {
				log.Println(err)
				return
			}
			log.Println("start imap")
			// start imap server.
			imap.StartImap(store, address, port, s_impl.Password, s_impl.KeyFile, certFile, s_impl.IMAP_Port, s_impl.IMAPS_Port, s_impl.IMAP_ALT_Port)

			log.Println("start smtp")
			// start smtp server
			smtp.StartSmtp(store, address, port, s_impl.Domain, s_impl.KeyFile, certFile, s_impl.SMTP_Port, s_impl.SMTPS_Port, s_impl.SMTP_ALT_Port)

		}()
		log.Println("start grpc mail service")
		// Start the service.
		s_impl.StartService()
	}
}
