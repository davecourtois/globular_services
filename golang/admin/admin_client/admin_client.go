package admin_client

import (
	"bufio"
	"bytes"
	"context"
	"encoding/json"
	"errors"
	"io"
	"io/ioutil"
	"log"

	"path/filepath"
	"strings"

	"github.com/polds/imgbase64"

	//	"log"
	"os"
	"strconv"

	"github.com/davecourtois/Utility"
	"github.com/globulario/services/golang/admin/adminpb"
	globular "github.com/globulario/services/golang/globular_client"

	"google.golang.org/grpc"
	"google.golang.org/grpc/metadata"
)

////////////////////////////////////////////////////////////////////////////////
// admin Client Service
////////////////////////////////////////////////////////////////////////////////

type Admin_Client struct {
	cc *grpc.ClientConn
	c  adminpb.AdminServiceClient

	// The id of the service
	id string

	// The name of the service
	name string

	// The port
	port int

	// The client domain
	domain string

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
func NewAdminService_Client(address string, id string) (*Admin_Client, error) {

	client := new(Admin_Client)
	err := globular.InitClient(client, address, id)
	if err != nil {
		return nil, err
	}

	client.cc, err = globular.GetClientConnection(client)
	if err != nil {
		return nil, err
	}

	client.c = adminpb.NewAdminServiceClient(client.cc)

	return client, nil
}

func (self *Admin_Client) Invoke(method string, rqst interface{}, ctx context.Context) (interface{}, error) {
	if ctx == nil {
		ctx = globular.GetClientContext(self)
	}
	return globular.InvokeClientRequest(self.c, ctx, method, rqst)
}

// Return the address
func (self *Admin_Client) GetAddress() string {
	return self.domain + ":" + strconv.Itoa(self.port)
}

// Return the domain
func (self *Admin_Client) GetDomain() string {
	return self.domain
}

// Return the id of the service instance
func (self *Admin_Client) GetId() string {
	return self.id
}

// Return the name of the service
func (self *Admin_Client) GetName() string {
	return self.name
}

// must be close when no more needed.
func (self *Admin_Client) Close() {
	self.cc.Close()
}

// Set grpc_service port.
func (self *Admin_Client) SetPort(port int) {
	self.port = port
}

// Set the client service instance id.
func (self *Admin_Client) SetId(id string) {
	self.id = id
}

// Set the client name.
func (self *Admin_Client) SetName(name string) {
	self.name = name
}

// Set the domain.
func (self *Admin_Client) SetDomain(domain string) {
	self.domain = domain
}

////////////////// TLS ///////////////////

// Get if the client is secure.
func (self *Admin_Client) HasTLS() bool {
	return self.hasTLS
}

// Get the TLS certificate file path
func (self *Admin_Client) GetCertFile() string {
	return self.certFile
}

// Get the TLS key file path
func (self *Admin_Client) GetKeyFile() string {
	return self.keyFile
}

// Get the TLS key file path
func (self *Admin_Client) GetCaFile() string {
	return self.caFile
}

// Set the client is a secure client.
func (self *Admin_Client) SetTLS(hasTls bool) {
	self.hasTLS = hasTls
}

// Set TLS certificate file path
func (self *Admin_Client) SetCertFile(certFile string) {
	self.certFile = certFile
}

// Set TLS key file path
func (self *Admin_Client) SetKeyFile(keyFile string) {
	self.keyFile = keyFile
}

// Set TLS authority trust certificate file path
func (self *Admin_Client) SetCaFile(caFile string) {
	self.caFile = caFile
}

/////////////////////// API /////////////////////

// Get server configuration.
func (self *Admin_Client) GetConfig() (interface{}, error) {
	rqst := new(adminpb.GetConfigRequest)
	rsp, err := self.c.GetConfig(globular.GetClientContext(self), rqst)
	if err != nil {
		return "", err
	}

	return rsp.GetResult(), nil
}

// Get the server configuration with all detail must be secured.
func (self *Admin_Client) GetFullConfig() (interface{}, error) {

	rqst := new(adminpb.GetConfigRequest)

	rsp, err := self.c.GetFullConfig(globular.GetClientContext(self), rqst)
	if err != nil {
		return "", err
	}

	return rsp.GetResult(), nil
}

func (self *Admin_Client) SaveConfig(config string) error {
	rqst := &adminpb.SaveConfigRequest{
		Config: config,
	}

	_, err := self.c.SaveConfig(globular.GetClientContext(self), rqst)
	if err != nil {
		return err
	}

	return nil
}

func (self *Admin_Client) StartService(id string) (int, int, error) {
	rqst := new(adminpb.StartServiceRequest)
	rqst.ServiceId = id
	rsp, err := self.c.StartService(globular.GetClientContext(self), rqst)
	if err != nil {
		return -1, -1, err
	}

	return int(rsp.ServicePid), int(rsp.ProxyPid), nil
}

func (self *Admin_Client) StopService(id string) error {
	rqst := new(adminpb.StopServiceRequest)
	rqst.ServiceId = id
	_, err := self.c.StopService(globular.GetClientContext(self), rqst)
	if err != nil {
		return err
	}

	return nil
}

func (self *Admin_Client) RestartServices() error {
	rqst := new(adminpb.RestartServicesRequest)

	_, err := self.c.RestartServices(globular.GetClientContext(self), rqst)
	if err != nil {
		return err
	}

	return nil
}

// Register and start an application.
func (self *Admin_Client) RegisterExternalApplication(id string, path string, args []string) (int, error) {
	rqst := &adminpb.RegisterExternalApplicationRequest{
		ServiceId: id,
		Path:      path,
		Args:      args,
	}

	rsp, err := self.c.RegisterExternalApplication(globular.GetClientContext(self), rqst)

	if err != nil {
		return -1, err
	}

	return int(rsp.ServicePid), nil
}

/////////////////////////// Services management functions ////////////////////////

func (self *Admin_Client) hasRunningProcess(name string) (bool, error) {
	rqst := &adminpb.HasRunningProcessRequest{
		Name: name,
	}

	rsp, err := self.c.HasRunningProcess(globular.GetClientContext(self), rqst)
	if err != nil {
		return false, err
	}

	return rsp.Result, nil
}

/** Create a service package **/
func (self *Admin_Client) createServicePackage(publisherId string, serviceName string, serviceId string, version string, platform string, servicePath string) (string, error) {
	log.Println("Service path is ", servicePath)
	// Take the information from the configuration...
	id := publisherId + "%" + serviceName + "%" + version + "%" + serviceId + "%" + platform

	// tar + gzip
	var buf bytes.Buffer
	Utility.CompressDir(servicePath, &buf)

	// write the .tar.gzip
	fileToWrite, err := os.OpenFile(os.TempDir()+string(os.PathSeparator)+id+".tar.gz", os.O_CREATE|os.O_RDWR, os.FileMode(0755))
	if err != nil {
		log.Println(297)
		return "", err
	}

	if _, err := io.Copy(fileToWrite, &buf); err != nil {
		log.Println(301)
		return "", err
	}

	// close the file.
	fileToWrite.Close()

	if err != nil {
		log.Println(311)
		return "", err
	}
	return os.TempDir() + string(os.PathSeparator) + id + ".tar.gz", nil
}

/**
 * Create and Upload the service archive on the server.
 */
func (self *Admin_Client) UploadServicePackage(user string, organization string, token string, domain string, path string, platform string) (string, int, error) {

	// Here I will try to read the service configuation from the path.
	configs, _ := Utility.FindFileByName(path, "config.json")
	if len(configs) == 0 {
		return "", 0, errors.New("No configuration file was found")
	}

	// Find proto by name
	protos, _ := Utility.FindFileByName(path, ".proto")
	if len(protos) == 0 {
		return "", 0, errors.New("No prototype file was found at path '" + path + "'")
	}

	s := make(map[string]interface{}, 0)
	data, err := ioutil.ReadFile(configs[0])
	if err != nil {
		return "", 0, err
	}

	err = json.Unmarshal(data, &s)
	if err != nil {
		return "", 0, err
	}

	// set the correct information inside the configuration
	publisherId := user
	if len(organization) > 0 {
		publisherId = organization
	}

	s["PublisherId"] = publisherId

	jsonStr, _ := Utility.ToJson(&s)
	ioutil.WriteFile(configs[0], []byte(jsonStr), 0644)

	md := metadata.New(map[string]string{"token": token, "domain": domain})
	ctx := metadata.NewOutgoingContext(context.Background(), md)

	// First of all I will create the archive for the service.
	// If a path is given I will take it entire content. If not
	// the proto, the config and the executable only will be taken.

	// So here I will create set the good file structure in a temp directory and
	// copy file in it that will be the bundle to be use...
	tmp_dir := strings.ReplaceAll(os.TempDir(), "\\", "/") + "/" + s["PublisherId"].(string) + "%" + s["Name"].(string) + "%" + s["Version"].(string) + "%" + s["Id"].(string) + "%" + platform
	path_ := tmp_dir + "/" + s["PublisherId"].(string) + "/" + s["Name"].(string) + "/" + s["Version"].(string) + "/" + s["Id"].(string)
	defer os.Remove(tmp_dir)

	// I will create the directory
	Utility.CreateDirIfNotExist(path)

	// Now I will copy the content of the given path into it...
	err = Utility.CopyDir(path+"/.", path_)

	if err != nil {
		return "", 0, err
	}

	// Now I will copy the proto file into the directory Version
	proto := strings.ReplaceAll(protos[0], "\\", "/")
	err = Utility.CopyFile(proto, tmp_dir+"/"+s["PublisherId"].(string)+"/"+s["Name"].(string)+"/"+s["Version"].(string)+"/"+proto[strings.LastIndex(proto, "/"):])
	if err != nil {
		log.Println(err)
		return "", 0, err
	}

	packagePath, err := self.createServicePackage(s["PublisherId"].(string), s["Name"].(string), s["Id"].(string), s["Version"].(string), platform, tmp_dir)
	if err != nil {
		return "", 0, err
	}

	// Remove the file when it's transfer on the server...
	defer os.Remove(packagePath)

	// Read the package data.
	packageFile, err := os.Open(packagePath)
	if err != nil {
		return "", 0, err
	}
	defer packageFile.Close()

	// Now I will create the request to upload the package on the server.
	// Open the stream...
	stream, err := self.c.UploadServicePackage(ctx)
	if err != nil {
		return "", 0, err
	}

	const chunksize = 1024 * 5 // the chunck size.
	var count int
	reader := bufio.NewReader(packageFile)
	part := make([]byte, chunksize)
	size := 0
	for {

		if count, err = reader.Read(part); err != nil {
			break
		}

		rqst := &adminpb.UploadServicePackageRequest{
			User:         user,
			Organization: organization,
			Data:         part[:count],
		}

		// send the data to the server.
		err = stream.Send(rqst)
		size += count

		if err == io.EOF {
			err = nil
			break
		} else if err != nil {
			return "", 0, err
		}

	}

	// get the file path on the server where the package is store before being
	// publish.
	rsp, err := stream.CloseAndRecv()
	if err != nil {
		if err != io.EOF {
			return "", 0, err
		}
	}

	return rsp.Path, size, nil
}

/**
 * Publish a service from a runing globular server.
 */
func (self *Admin_Client) PublishService(user, organization, token, domain, path, configPath, platform string) error {

	// Here I will try to read the service configuation from the path.
	configs, _ := Utility.FindFileByName(configPath, "config.json")
	if len(configs) == 0 {
		return errors.New("No configuration file was found")
	}
	s := make(map[string]interface{}, 0)
	data, err := ioutil.ReadFile(configs[0])
	if err != nil {
		return err
	}

	err = json.Unmarshal(data, &s)
	if err != nil {
		return err
	}

	keywords := make([]string, 0)
	if s["Keywords"] != nil {
		for i := 0; i < len(s["Keywords"].([]interface{})); i++ {
			keywords = append(keywords, s["Keywords"].([]interface{})[i].(string))
		}
	}
	if s["Repositories"] == nil {
		s["Repositories"] = []interface{}{"localhost"}
	}
	repositories := s["Repositories"].([]interface{})
	if len(repositories) == 0 {
		repositories = []interface{}{"localhost"}

	}

	if s["Discoveries"] == nil {
		s["Discoveries"] = []interface{}{"localhost"}
	}
	discoveries := s["Discoveries"].([]interface{})
	if len(discoveries) == 0 {
		discoveries = []interface{}{"localhost"}
	}

	rqst := new(adminpb.PublishServiceRequest)
	rqst.Path = path
	rqst.User = user
	rqst.Organization = organization
	rqst.Description = s["Description"].(string)
	rqst.DicorveryId = discoveries[0].(string)
	rqst.RepositoryId = repositories[0].(string)
	rqst.Keywords = keywords
	rqst.Version = s["Version"].(string)
	rqst.ServiceId = s["Id"].(string)
	rqst.ServiceName = s["Name"].(string)
	rqst.Platform = platform

	// Set the token into the context and send the request.
	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	_, err = self.c.PublishService(ctx, rqst)

	return err
}

/**
 * Intall a new service or update an existing one.
 */
func (self *Admin_Client) InstallService(token string, domain string, user string, discoveryId string, publisherId string, serviceId string) error {

	rqst := new(adminpb.InstallServiceRequest)
	rqst.DicorveryId = discoveryId
	rqst.PublisherId = publisherId
	rqst.ServiceId = serviceId
	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	_, err := self.c.InstallService(ctx, rqst)

	return err
}

/**
 * Intall a new service or update an existing one.
 */
func (self *Admin_Client) UninstallService(token string, domain string, user string, publisherId string, serviceId string, version string) error {

	rqst := new(adminpb.UninstallServiceRequest)
	rqst.PublisherId = publisherId
	rqst.ServiceId = serviceId
	rqst.Version = version
	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	_, err := self.c.UninstallService(ctx, rqst)

	return err
}

/**
 * Intall a new application or update an existing one.
 */
func (self *Admin_Client) InstallApplication(token string, domain string, user string, discoveryId string, publisherId string, applicationId string) error {
	log.Println("Install application ", applicationId, "on server ", domain)
	rqst := new(adminpb.InstallApplicationRequest)
	rqst.DicorveryId = discoveryId
	rqst.PublisherId = publisherId
	rqst.ApplicationId = applicationId
	rqst.Domain = strings.Split(domain, ":")[0] // remove the port if one is given...

	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	_, err := self.c.InstallApplication(ctx, rqst)

	return err
}

/**
 * Uninstall application, if no version is given the most recent version will
 * be install.
 */
func (self *Admin_Client) UninstallApplication(token string, domain string, user string, publisherId string, applicationId string, version string) error {
	log.Println("Uninstall application ", applicationId, " at address ", domain, "...")
	rqst := new(adminpb.UninstallApplicationRequest)
	rqst.PublisherId = publisherId
	rqst.ApplicationId = applicationId
	rqst.Version = version
	rqst.Domain = strings.Split(domain, ":")[0] // remove the port if one is given...
	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	_, err := self.c.UninstallApplication(ctx, rqst)

	return err
}

/**
 * Generate the certificates for a given domain. The port is the http port use
 * to get the configuration (80 by default). The path is where the file will be
 * written. The return values are the path to tree certicate path.
 */
func (self *Admin_Client) InstallCertificates(domain string, port int, path string) (string, string, string, error) {

	rqst := &adminpb.InstallCertificatesRequest{
		Domain: domain,
		Path:   path,
		Port:   int32(port),
	}

	rsp, err := self.c.InstallCertificates(globular.GetClientContext(self), rqst)

	if err != nil {
		return "", "", "", err
	}

	return rsp.Certkey, rsp.Cert, rsp.Cacert, nil
}

/**
 * Deploy the content of an application with a given name to the server.
 */
func (self *Admin_Client) DeployApplication(user string, name string, organization string, path string, token string, domain string) (int, error) {

	dir, err := os.Getwd()
	if err != nil {
		return -1, err
	}
	path = strings.ReplaceAll(dir, "\\", "/") + "/" + path
	log.Println("Deploy directory: ", path)
	// Now I will open the data and create a archive from it.
	var buffer bytes.Buffer
	err = Utility.CompressDir(path, &buffer)
	if err != nil {
		return -1, err
	}

	// From the path I will get try to find the package.json file and get information from it...
	absolutePath, err := filepath.Abs(path)
	if err != nil {
		return -1, err
	}

	absolutePath = strings.ReplaceAll(absolutePath, "\\", "/")

	if Utility.Exists(absolutePath + "/package.json") {
		absolutePath += "/package.json"
	} else if Utility.Exists(absolutePath[0:strings.LastIndex(absolutePath, "/")] + "/package.json") {
		absolutePath = absolutePath[0:strings.LastIndex(absolutePath, "/")] + "/package.json"
	} else {
		err = errors.New("no package.config file was found!")
		return -1, err
	}

	packageConfig := make(map[string]interface{})

	data, _ := ioutil.ReadFile(absolutePath)
	err = json.Unmarshal(data, &packageConfig)
	if err != nil {
		return -1, err
	}

	description := packageConfig["description"].(string)
	version := packageConfig["version"].(string)

	alias := name
	if packageConfig["alias"] != nil {
		alias = packageConfig["alias"].(string)
	}

	// Set keywords.
	keywords := make([]string, 0)
	if packageConfig["keywords"] != nil {
		for i := 0; i < len(packageConfig["keywords"].([]interface{})); i++ {
			keywords = append(keywords, packageConfig["keywords"].([]interface{})[i].(string))
		}
	}

	// Now The application is deploy I will set application actions from the
	// package.json file.
	actions := make([]string, 0)
	if packageConfig["actions"] != nil {
		for i := 0; i < len(packageConfig["actions"].([]interface{})); i++ {
			log.Println("set action permission: ", packageConfig["actions"].([]interface{})[i].(string))
			actions = append(actions, packageConfig["actions"].([]interface{})[i].(string))
		}
	}

	// Create roles.
	roles := make([]*adminpb.Role, 0)
	if packageConfig["roles"] != nil {
		// Here I will create the roles require by the applications.
		roles_ := packageConfig["roles"].([]interface{})
		for i := 0; i < len(roles_); i++ {
			role_ := roles_[i].(map[string]interface{})
			role := new(adminpb.Role)
			role.Id = role_["id"].(string)
			role.Name = role_["name"].(string)
			role.Actions = make([]string, 0)
			for j := 0; j < len(role_["actions"].([]interface{})); j++ {
				role.Actions = append(role.Actions, role_["actions"].([]interface{})[j].(string))
			}
			roles = append(roles, role)
		}
	}

	// Create groups.
	groups := make([]*adminpb.Group, 0)
	if packageConfig["groups"] != nil {
		groups_ := packageConfig["groups"].([]interface{})
		for i := 0; i < len(groups_); i++ {
			group_ := groups_[i].(map[string]interface{})
			group := new(adminpb.Group)
			group.Id = group_["id"].(string)
			group.Name = group_["name"].(string)
			groups = append(groups, group)
		}
	}

	var icon string

	// Now the icon...
	if packageConfig["icon"] != nil {
		// The image icon.
		// iconPath := absolutePath[0:strings.LastIndex(absolutePath, "/")] + "/package.json"
		iconPath, _ := filepath.Abs(path)
		iconPath = strings.ReplaceAll(absolutePath, "\\", "/")
		lastIndex := strings.LastIndex(iconPath, "/")
		iconPath = iconPath[0:lastIndex] + "/" + packageConfig["icon"].(string)
		if Utility.Exists(iconPath) {
			// Convert to png before creating the data url.
			if strings.HasSuffix(strings.ToLower(iconPath), ".svg") {
				pngPath := os.TempDir() + "/output.png"
				defer os.Remove(pngPath)
				err := Utility.SvgToPng(iconPath, pngPath, 128, 128)
				if err == nil {
					iconPath = pngPath
				}
			}
			// So here I will create the b64 string
			icon, _ = imgbase64.FromLocal(iconPath)
		}

	}

	// Set the token into the context and send the request.
	md := metadata.New(map[string]string{"token": string(token), "application": name, "domain": domain, "organization": organization, "path": "/applications", "user": user})
	ctx := metadata.NewOutgoingContext(context.Background(), md)

	// Open the stream...
	stream, err := self.c.DeployApplication(ctx)
	if err != nil {
		return -1, err
	}

	const BufferSize = 1024 * 5 // the chunck size.
	var size int

	for {
		var data [BufferSize]byte
		bytesread, err := buffer.Read(data[0:BufferSize])
		if bytesread > 0 {
			rqst := &adminpb.DeployApplicationRequest{
				Data:         data[0:bytesread],
				Name:         name,
				Domain:       domain,
				Organization: organization,
				User:         user,
				Version:      version,
				Description:  description,
				Keywords:     keywords,
				Actions:      actions,
				Icon:         icon,
				Alias:        alias,
				Roles:        roles,
				Groups:       groups,
			}
			// send the data to the server.
			err = stream.Send(rqst)
			if err != nil {
				return -1, err
			}
		}
		size += bytesread
		if err == io.EOF {
			err = nil
			break
		} else if err != nil {
			return -1, err
		}
	}

	_, err = stream.CloseAndRecv()
	if err != nil && err != io.EOF {
		return -1, err
	}

	return size, nil
}

/**
 * Set environement variable.
 */
func (self *Admin_Client) SetEnvironmentVariable(token, name, value string) error {
	rqst := &adminpb.SetEnvironmentVariableRequest{
		Name:  name,
		Value: value,
	}

	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	_, err := self.c.SetEnvironmentVariable(ctx, rqst)
	return err

}

// UnsetEnvironement variable.
func (self *Admin_Client) UnsetEnvironmentVariable(token, name string) error {
	rqst := &adminpb.UnsetEnvironmentVariableRequest{
		Name: name,
	}

	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}
	_, err := self.c.UnsetEnvironmentVariable(ctx, rqst)
	return err
}

func (self *Admin_Client) GetEnvironmentVariable(token, name string) (string, error) {
	rqst := &adminpb.GetEnvironmentVariableRequest{
		Name: name,
	}

	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}
	rsp, err := self.c.GetEnvironmentVariable(ctx, rqst)
	if err != nil {

		return "", err
	}
	return rsp.Value, nil
}

// Run a command.
func (self *Admin_Client) RunCmd(token, cmd string, args []string, blocking bool) (string, error) {
	rqst := &adminpb.RunCmdRequest{
		Cmd:      cmd,
		Args:     args,
		Blocking: blocking,
	}

	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	rsp, err := self.c.RunCmd(ctx, rqst)
	if err != nil {
		return "", err
	}
	return rsp.Result, nil
}

func (self *Admin_Client) KillProcess(token string, pid int) error {
	rqst := &adminpb.KillProcessRequest{
		Pid: int64(pid),
	}

	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	_, err := self.c.KillProcess(ctx, rqst)
	return err
}

func (self *Admin_Client) KillProcesses(token string, name string) error {
	rqst := &adminpb.KillProcessesRequest{
		Name: name,
	}

	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	_, err := self.c.KillProcesses(ctx, rqst)
	return err
}

func (self *Admin_Client) GetPids(token string, name string) ([]int32, error) {
	rqst := &adminpb.GetPidsRequest{
		Name: name,
	}
	ctx := globular.GetClientContext(self)
	if len(token) > 0 {
		md, _ := metadata.FromOutgoingContext(ctx)

		if len(md.Get("token")) != 0 {
			md.Set("token", token)
		}
		ctx = metadata.NewOutgoingContext(context.Background(), md)
	}

	rsp, err := self.c.GetPids(ctx, rqst)
	if err != nil {
		return nil, err
	}
	return rsp.Pids, err
}
