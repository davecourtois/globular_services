package file_client

import (
	"io"
	"log"
	"os"
	"strconv"

	"context"

	"github.com/globulario/services/golang/file/filepb"
	globular "github.com/globulario/services/golang/globular_client"

	"github.com/davecourtois/Utility"
	"google.golang.org/grpc"
)

////////////////////////////////////////////////////////////////////////////////
// File Client Service
////////////////////////////////////////////////////////////////////////////////

type File_Client struct {
	cc *grpc.ClientConn
	c  filepb.FileServiceClient

	// The id of the service
	id string

	// The name of the service
	name string

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
func NewFileService_Client(address string, id string) (*File_Client, error) {
	client := new(File_Client)
	err := globular.InitClient(client, address, id)
	if err != nil {
		return nil, err
	}
	client.cc, err = globular.GetClientConnection(client)
	if err != nil {
		return nil, err
	}
	client.c = filepb.NewFileServiceClient(client.cc)

	return client, nil
}

func (self *File_Client) Invoke(method string, rqst interface{}, ctx context.Context) (interface{}, error) {
	if ctx == nil {
		ctx = globular.GetClientContext(self)
	}
	return globular.InvokeClientRequest(self.c, ctx, method, rqst)
}

// Return the domain
func (self *File_Client) GetDomain() string {
	return self.domain
}

// Return the address
func (self *File_Client) GetAddress() string {
	return self.domain + ":" + strconv.Itoa(self.port)
}

// Return the id of the service instance
func (self *File_Client) GetId() string {
	return self.id
}

// Return the name of the service
func (self *File_Client) GetName() string {
	return self.name
}

// must be close when no more needed.
func (self *File_Client) Close() {
	self.cc.Close()
}

// Set grpc_service port.
func (self *File_Client) SetPort(port int) {
	self.port = port
}

// Set the client instance id.
func (self *File_Client) SetId(id string) {
	self.id = id
}

// Set the client name.
func (self *File_Client) SetName(name string) {
	self.name = name
}

// Set the domain.
func (self *File_Client) SetDomain(domain string) {
	self.domain = domain
}

////////////////// TLS ///////////////////

// Get if the client is secure.
func (self *File_Client) HasTLS() bool {
	return self.hasTLS
}

// Get the TLS certificate file path
func (self *File_Client) GetCertFile() string {
	return self.certFile
}

// Get the TLS key file path
func (self *File_Client) GetKeyFile() string {
	return self.keyFile
}

// Get the TLS key file path
func (self *File_Client) GetCaFile() string {
	return self.caFile
}

// Set the client is a secure client.
func (self *File_Client) SetTLS(hasTls bool) {
	self.hasTLS = hasTls
}

// Set TLS certificate file path
func (self *File_Client) SetCertFile(certFile string) {
	self.certFile = certFile
}

// Set TLS key file path
func (self *File_Client) SetKeyFile(keyFile string) {
	self.keyFile = keyFile
}

// Set TLS authority trust certificate file path
func (self *File_Client) SetCaFile(caFile string) {
	self.caFile = caFile
}

///////////////////// API //////////////////////

// Stop the service.
func (self *File_Client) StopService() {
	self.c.Stop(globular.GetClientContext(self), &filepb.StopRequest{})
}

// Read the content of a dir and return it info.
func (self *File_Client) ReadDir(path interface{}, recursive interface{}, thumbnailHeight interface{}, thumbnailWidth interface{}) (string, error) {

	// Create a new client service...
	rqst := &filepb.ReadDirRequest{
		Path:           Utility.ToString(path),
		Recursive:      Utility.ToBool(recursive),
		ThumnailHeight: int32(Utility.ToInt(thumbnailHeight)),
		ThumnailWidth:  int32(Utility.ToInt(thumbnailWidth)),
	}

	stream, err := self.c.ReadDir(globular.GetClientContext(self), rqst)
	if err != nil {
		log.Println("---> 181 ", err)
		return "", err
	}

	// Here I will create the final array
	data := make([]byte, 0)
	for {
		msg, err := stream.Recv()
		if err == io.EOF {
			// end of stream...
			break
		} else if err != nil {
			return "", err
		}

		data = append(data, msg.Data...)

	}

	return string(data), nil
}

/**
 * Create a new directory on the server.
 */
func (self *File_Client) CreateDir(path interface{}, name interface{}) error {

	rqst := &filepb.CreateDirRequest{
		Path: Utility.ToString(path),
		Name: Utility.ToString(name),
	}

	_, err := self.c.CreateDir(globular.GetClientContext(self), rqst)
	if err != nil {
		return err
	}

	return nil
}

/**
 * Read file data
 */
func (self *File_Client) ReadFile(path interface{}) ([]byte, error) {

	rqst := &filepb.ReadFileRequest{
		Path: Utility.ToString(path),
	}

	stream, err := self.c.ReadFile(globular.GetClientContext(self), rqst)
	if err != nil {
		return nil, err
	}

	// Here I will create the final array
	data := make([]byte, 0)
	for {
		msg, err := stream.Recv()
		if err == io.EOF {
			// end of stream...
			break
		} else if err != nil {
			return nil, err
		}

		data = append(data, msg.Data...)

	}

	return data, err
}

/**
 * Rename a directory.
 */
func (self *File_Client) RenameDir(path interface{}, oldname interface{}, newname interface{}) error {

	rqst := &filepb.RenameRequest{
		Path:    Utility.ToString(path),
		OldName: Utility.ToString(oldname),
		NewName: Utility.ToString(newname),
	}

	_, err := self.c.Rename(globular.GetClientContext(self), rqst)

	return err
}

/**
 * Delete a directory
 */
func (self *File_Client) DeleteDir(path string) error {
	rqst := &filepb.DeleteDirRequest{
		Path: Utility.ToString(path),
	}

	_, err := self.c.DeleteDir(globular.GetClientContext(self), rqst)
	return err
}

/**
 * Get a single file info.
 */
func (self *File_Client) GetFileInfo(path interface{}, recursive interface{}, thumbnailHeight interface{}, thumbnailWidth interface{}) (string, error) {

	rqst := &filepb.GetFileInfoRequest{
		Path:           Utility.ToString(path),
		ThumnailHeight: int32(Utility.ToInt(thumbnailHeight)),
		ThumnailWidth:  int32(Utility.ToInt(thumbnailWidth)),
	}

	rsp, err := self.c.GetFileInfo(globular.GetClientContext(self), rqst)
	if err != nil {
		return "", err
	}

	return string(rsp.Data), nil
}

/**
 * That function move a file from a directory to another... (mv) in unix.
 */
func (self *File_Client) MoveFile(path interface{}, dest interface{}) error {

	// Open the stream...
	stream, err := self.c.SaveFile(globular.GetClientContext(self))
	if err != nil {
		return err
	}

	err = stream.Send(&filepb.SaveFileRequest{
		File: &filepb.SaveFileRequest_Path{
			Path: Utility.ToString(dest), // Where the file will be save...
		},
	})

	if err != nil {
		return err
	}

	// Where the file is read from.
	file, err := os.Open(Utility.ToString(path))
	if err != nil {
		return err
	}

	// close the file when done.
	defer file.Close()

	const BufferSize = 1024 * 5 // the chunck size.
	buffer := make([]byte, BufferSize)
	for {
		bytesread, err := file.Read(buffer)
		if bytesread > 0 {
			rqst := &filepb.SaveFileRequest{
				File: &filepb.SaveFileRequest_Data{
					Data: buffer[:bytesread],
				},
			}
			err = stream.Send(rqst)
		}

		if err != nil {
			if err != io.EOF {
				return err
			}
			break
		}
	}

	_, err = stream.CloseAndRecv()
	if err != nil {
		return err
	}

	return nil
}

/**
 * Delete a file whit a given path.
 */
func (self *File_Client) DeleteFile(path string) error {

	rqst := &filepb.DeleteFileRequest{
		Path: Utility.ToString(path),
	}

	_, err := self.c.DeleteFile(globular.GetClientContext(self), rqst)
	if err != nil {
		return err
	}

	return err
}

// Read the content of a dir and return all images as thumbnails.
func (self *File_Client) GetThumbnails(path interface{}, recursive interface{}, thumbnailHeight interface{}, thumbnailWidth interface{}) (string, error) {

	// Create a new client service...
	rqst := &filepb.GetThumbnailsRequest{
		Path:           Utility.ToString(path),
		Recursive:      Utility.ToBool(recursive),
		ThumnailHeight: int32(Utility.ToInt(thumbnailHeight)),
		ThumnailWidth:  int32(Utility.ToInt(thumbnailWidth)),
	}

	stream, err := self.c.GetThumbnails(globular.GetClientContext(self), rqst)
	if err != nil {
		return "", err
	}

	// Here I will create the final array
	data := make([]byte, 0)
	for {
		msg, err := stream.Recv()
		if err == io.EOF {
			// end of stream...
			break
		} else if err != nil {
			return "", err
		}

		data = append(data, msg.Data...)
		if err != nil {
			return "", err
		}
	}

	return string(data), nil
}

func (self *File_Client) HtmlToPdf(html string) ([]byte, error) {
	rqst := &filepb.HtmlToPdfRqst{
		Html: html,
	}

	rsp, err := self.c.HtmlToPdf(globular.GetClientContext(self), rqst)
	if err != nil {
		return nil, err
	}
	return rsp.Pdf, nil
}
