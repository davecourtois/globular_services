package ldap_client

import (
	// "context"
	// "log"
	"strconv"

	"encoding/json"

	"context"

	globular "github.com/globulario/services/golang/globular_client"
	"github.com/globulario/services/golang/ldap/ldappb"
	"google.golang.org/grpc"
)

////////////////////////////////////////////////////////////////////////////////
// LDAP Client Service
////////////////////////////////////////////////////////////////////////////////

type LDAP_Client struct {
	cc *grpc.ClientConn
	c  ldappb.LdapServiceClient

	// The id of the service on the server.
	id string

	// The name of the service
	name string

	// The ipv4 address
	addresse string

	// The client domain
	domain string

	// The port number
	port int

	// is the connection is secure?
	hasTLS bool

	// Link to client key file
	keyFile string

	// Link to client certificate file.
	certFile string

	// certificate authority file
	caFile string
}

// Create a connection to the service.
func NewLdapService_Client(address string, id string) (*LDAP_Client, error) {
	client := new(LDAP_Client)
	err := globular.InitClient(client, address, id)
	if err != nil {
		return nil, err
	}
	client.cc, err = globular.GetClientConnection(client)
	if err != nil {
		return nil, err
	}
	client.c = ldappb.NewLdapServiceClient(client.cc)

	return client, nil
}

func (self *LDAP_Client) Invoke(method string, rqst interface{}, ctx context.Context) (interface{}, error) {
	if ctx == nil {
		ctx = globular.GetClientContext(self)
	}
	return globular.InvokeClientRequest(self.c, ctx, method, rqst)
}

// Return the domain
func (self *LDAP_Client) GetDomain() string {
	return self.domain
}

func (self *LDAP_Client) GetAddress() string {
	return self.domain + ":" + strconv.Itoa(self.port)
}

// Return the id of the service
func (self *LDAP_Client) GetId() string {
	return self.id
}

// Return the name of the service
func (self *LDAP_Client) GetName() string {
	return self.name
}

// must be close when no more needed.
func (self *LDAP_Client) Close() {
	self.cc.Close()
}

// Set grpc_service port.
func (self *LDAP_Client) SetPort(port int) {
	self.port = port
}

// Set the client id.
func (self *LDAP_Client) SetId(id string) {
	self.id = id
}

// Set the client name.
func (self *LDAP_Client) SetName(name string) {
	self.name = name
}

// Set the domain.
func (self *LDAP_Client) SetDomain(domain string) {
	self.domain = domain
}

////////////////// TLS ///////////////////

// Get if the client is secure.
func (self *LDAP_Client) HasTLS() bool {
	return self.hasTLS
}

// Get the TLS certificate file path
func (self *LDAP_Client) GetCertFile() string {
	return self.certFile
}

// Get the TLS key file path
func (self *LDAP_Client) GetKeyFile() string {
	return self.keyFile
}

// Get the TLS key file path
func (self *LDAP_Client) GetCaFile() string {
	return self.caFile
}

// Set the client is a secure client.
func (self *LDAP_Client) SetTLS(hasTls bool) {
	self.hasTLS = hasTls
}

// Set TLS certificate file path
func (self *LDAP_Client) SetCertFile(certFile string) {
	self.certFile = certFile
}

// Set TLS key file path
func (self *LDAP_Client) SetKeyFile(keyFile string) {
	self.keyFile = keyFile
}

// Set TLS authority trust certificate file path
func (self *LDAP_Client) SetCaFile(caFile string) {
	self.caFile = caFile
}

////////////////////////// LDAP ////////////////////////////////////////////////
// Stop the service.
func (self *LDAP_Client) StopService() {
	self.c.Stop(globular.GetClientContext(self), &ldappb.StopRequest{})
}

func (self *LDAP_Client) CreateConnection(connectionId string, user string, password string, host string, port int32) error {
	// Create a new connection
	rqst := &ldappb.CreateConnectionRqst{
		Connection: &ldappb.Connection{
			Id:       connectionId,
			User:     user,
			Password: password,
			Port:     port,
			Host:     host, //"mon-dc-p01.UD6.UF6",
		},
	}

	_, err := self.c.CreateConnection(globular.GetClientContext(self), rqst)

	return err
}

func (self *LDAP_Client) DeleteConnection(connectionId string) error {

	rqst := &ldappb.DeleteConnectionRqst{
		Id: connectionId,
	}

	_, err := self.c.DeleteConnection(globular.GetClientContext(self), rqst)

	return err
}

func (self *LDAP_Client) Authenticate(connectionId string, userId string, password string) error {

	rqst := &ldappb.AuthenticateRqst{
		Id:    connectionId,
		Login: userId,
		Pwd:   password,
	}

	_, err := self.c.Authenticate(globular.GetClientContext(self), rqst)
	return err
}

func (self *LDAP_Client) Search(connectionId string, BaseDN string, Filter string, Attributes []string) ([][]interface{}, error) {

	// I will execute a simple ldap search here...
	rqst := &ldappb.SearchRqst{
		Search: &ldappb.Search{
			Id:         connectionId,
			BaseDN:     BaseDN,
			Filter:     Filter,
			Attributes: Attributes,
		},
	}

	rsp, err := self.c.Search(globular.GetClientContext(self), rqst)
	if err != nil {
		return nil, err
	}

	values := make([][]interface{}, 0)
	err = json.Unmarshal([]byte(rsp.Result), &values)

	return values, err

}
