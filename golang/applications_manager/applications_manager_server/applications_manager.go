package main

import (
	"bytes"
	"context"
	"errors"
	"io"
	"io/ioutil"
	"log"
	"os"
	"regexp"
	"strings"
	"time"

	"github.com/davecourtois/Utility"
	"github.com/globulario/services/golang/applications_manager/applications_managerpb"
	"github.com/golang/protobuf/jsonpb"
	"github.com/globulario/services/golang/repository/repository_client"
	"github.com/globulario/services/golang/resource/resource_client"
	"github.com/globulario/services/golang/resource/resourcepb"
	"golang.org/x/net/html"
	"google.golang.org/grpc/codes"

	//"google.golang.org/grpc/grpclog"
	"google.golang.org/grpc/status"
)

// Uninstall application...
func (server *server) UninstallApplication(ctx context.Context, rqst *applications_managerpb.UninstallApplicationRequest) (*applications_managerpb.UninstallApplicationResponse, error) {

	// Here I will also remove the application permissions...
	if rqst.DeletePermissions {
		/** TODO remove applicaiton permissions...*/
	}

	// Same as delete applicaitons.
	err := server.deleteApplication(rqst.ApplicationId)
	if err != nil {
		return nil,
			status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &applications_managerpb.UninstallApplicationResponse{
		Result: true,
	}, nil
}

// Install web Application
func (server *server) InstallApplication(ctx context.Context, rqst *applications_managerpb.InstallApplicationRequest) (*applications_managerpb.InstallApplicationResponse, error) {

	// Connect to the dicovery services
	resource_client_, err := resource_client.NewResourceService_Client(rqst.DicorveryId, "resource.ResourceService")

	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("Fail to connect to "+rqst.DicorveryId)))
	}

	descriptor, err := resource_client_.GetPackageDescriptor(rqst.ApplicationId, rqst.PublisherId, rqst.Version)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	if len(descriptor.Repositories) == 0 {

		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), errors.New("No service repository was found for application "+descriptor.Id)))
		}

	}

	for i := 0; i < len(descriptor.Repositories); i++ {

		package_repository, err := repository_client.NewRepositoryService_Client(descriptor.Repositories[i], "repository.PackageRepository")
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}

		bundle, err := package_repository.DownloadBundle(descriptor, "webapp")
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}

		// Create the file.
		r := bytes.NewReader(bundle.Binairies)

		// Now I will install the applicaiton.
		err = server.installApplication(rqst.Domain, descriptor.Id, descriptor.PublisherId, descriptor.Version, descriptor.Description, descriptor.Icon, descriptor.Alias, r, descriptor.Actions, descriptor.Keywords, descriptor.Roles, descriptor.Groups, rqst.SetAsDefault)
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}

	}

	return &applications_managerpb.InstallApplicationResponse{
		Result: true,
	}, nil

}

// Intall
func (server *server) installApplication(domain, name, publisherId, version, description string, icon string, alias string, r io.Reader, actions []string, keywords []string, roles []*resourcepb.Role, groups []*resourcepb.Group, set_as_default bool) error {

	// Here I will extract the file.
	__extracted_path__, err := Utility.ExtractTarGz(r)
	if err != nil {
		return err
	}

	// remove temporary files.
	defer os.RemoveAll(__extracted_path__)

	// Here I will test that the index.html file is not corrupted...
	__indexHtml__, err := ioutil.ReadFile(__extracted_path__ + "/index.html")
	if err != nil {
		return err
	}

	// The file must contain a linq to a bundle.js file.
	if !strings.Contains(string(__indexHtml__), "./bundle.js") {
		return errors.New("539 something wrong append the index.html file does not contain the bundle.js file... " + string(__indexHtml__))
	}

	// Copy the files to it final destination
	abosolutePath := server.WebRoot

	// If a domain is given.
	if len(domain) > 0 {
		if Utility.Exists(abosolutePath + "/" + domain) {
			abosolutePath += "/" + domain
		}
	}

	// set the absolute application domain.
	abosolutePath += "/" + name

	// Remove the existing files.
	if Utility.Exists(abosolutePath) {
		os.RemoveAll(abosolutePath)
	}

	// Recreate the dir and move file in it.
	Utility.CreateDirIfNotExist(abosolutePath)
	Utility.CopyDir(__extracted_path__+"/.", abosolutePath)

	err = server.createApplication(name, Utility.GenerateUUID(name), "/"+name, publisherId, version, description, alias, icon, actions, keywords)
	if err != nil {
		return err
	}

	// Now I will create/update roles define in the application descriptor...
	for i := 0; i < len(roles); i++ {
		role := roles[i]
		err = server.createRole(role.Id, role.Name, role.Actions)
		if err != nil {
			log.Println("fail to create role "+role.Id, "with error:", err)
		}
	}

	for i := 0; i < len(groups); i++ {
		group := groups[i]
		err = server.createGroup(group.Id, group.Name)
		if err != nil {
			log.Println("fail to create group "+group.Id, "with error:", err)
		}
	}

	// here is a little workaround to be sure the bundle.js file will not be cached in the brower...
	indexHtml, err := ioutil.ReadFile(abosolutePath + "/index.html")
	if err != nil {
		return err
	}

	// Parse the index html file to be sure the file is valid.
	_, err = html.Parse(strings.NewReader(string(indexHtml)))
	if err != nil {
		return err
	}

	if err == nil {
		var re = regexp.MustCompile(`\/bundle\.js(\?updated=\d*)?`)
		indexHtml_ := re.ReplaceAllString(string(indexHtml), "/bundle.js?updated="+Utility.ToString(time.Now().Unix()))
		if !strings.Contains(indexHtml_, "/bundle.js?updated=") {
			return errors.New("651 something wrong append the index.html file does not contain the bundle.js file... " + indexHtml_)
		}
		// save it back.
		ioutil.WriteFile(abosolutePath+"/index.html", []byte(indexHtml_), 0644)
	}

	if set_as_default {
		// TODO keep track of the starting appliation...
		// server.IndexApplication = name
	}

	return err
}

// Deloyed a web application to a globular node. Mostly use a develeopment time.
func (server *server) DeployApplication(stream applications_managerpb.ApplicationManagerService_DeployApplicationServer) error {

	// - Get the information from the package.json (npm package, the version, the keywords and set the package descriptor with it.

	// The bundle will cantain the necessary information to install the service.
	var buffer bytes.Buffer

	// Here is necessary information to publish an application.
	var name string
	var domain string
	var user string
	var organization string
	var version string
	var description string
	var repositoryId string
	var discoveryId string
	var keywords []string
	var actions []string
	var icon string
	var alias string
	var roles []*resourcepb.Role
	var groups []*resourcepb.Group
	var set_as_default bool

	for {
		msg, err := stream.Recv()
		if err == io.EOF || msg == nil {
			// end of stream...
			stream.SendAndClose(&applications_managerpb.DeployApplicationResponse{
				Result: true,
			})
			err = nil
			break
		} else if err != nil {
			return err
		} else if len(msg.Data) == 0 {
			break
		} else {
			buffer.Write(msg.Data)
		}

		if len(msg.Name) > 0 {
			name = msg.Name
		}

		if len(msg.Alias) > 0 {
			alias = msg.Alias
		}

		if len(msg.Domain) > 0 {
			domain = msg.Domain
		}
		if len(msg.Organization) > 0 {
			organization = msg.Organization
		}
		if len(msg.User) > 0 {
			user = msg.User
		}
		if len(msg.Version) > 0 {
			version = msg.Version
		}
		if len(msg.Description) > 0 {
			description = msg.Description
		}
		if msg.Keywords != nil {
			keywords = msg.Keywords
		}
		if len(msg.Repository) > 0 {
			repositoryId = msg.Repository
		}
		if len(msg.Discovery) > 0 {
			discoveryId = msg.Discovery
		}

		if len(msg.Roles) > 0 {
			roles = msg.Roles
		}

		if len(msg.Groups) > 0 {
			groups = msg.Groups
		}

		if len(msg.Actions) > 0 {
			actions = msg.Actions
		}

		if len(msg.Icon) > 0 {
			icon = msg.Icon
		}

		if msg.SetAsDefault {
			set_as_default = true
		}

	}

	if len(repositoryId) == 0 {
		repositoryId = domain
	}

	if len(discoveryId) == 0 {
		discoveryId = domain
	}

	// Retreive the actual application installed version.
	previousVersion, _ := server.getApplicationVersion(name)

	// Now I will save the bundle into a file in the temp directory.
	path := os.TempDir() + "/" + Utility.RandomUUID()
	defer os.RemoveAll(path)

	err := ioutil.WriteFile(path, buffer.Bytes(), 0644)
	if err != nil {
		return err
	}

	// Publish application...
	err = server.publishApplication(user, organization, path, name, domain, version, description, icon, alias, repositoryId, discoveryId, actions, keywords, roles, groups)

	if err != nil {
		return err
	}

	// convert struct...
	roles_ := make([]*resourcepb.Role, len(roles))
	for i := 0; i < len(roles); i++ {
		roles_[i] = new(resourcepb.Role)
		roles_[i].Id = roles[i].Id
		roles_[i].Name = roles[i].Name
		roles_[i].Actions = roles[i].Actions
	}

	groups_ := make([]*resourcepb.Group, len(groups))
	for i := 0; i < len(groups); i++ {
		groups_[i] = new(resourcepb.Group)
		groups_[i].Id = groups[i].Id
		groups_[i].Name = groups[i].Name
	}

	// Read bytes and extract it in the current directory.
	r := bytes.NewReader(buffer.Bytes())
	err = server.installApplication(domain, name, organization, version, description, icon, alias, r, actions, keywords, roles_, groups_, set_as_default)
	if err != nil {
		return err
	}

	server.logServiceInfo("PublishApplication", Utility.FileLine(), Utility.FunctionName(), "A new version of " +alias + " vesion " + version + " was publish")
	
	// If the version has change I will notify current users and undate the applications.
	if previousVersion != version {

		// Send application notification...
		server.publish("update_"+strings.Split(domain, ":")[0]+"_"+name+"_evt", []byte(version))

		message := `<div style="display: flex; flex-direction: column">
              <div>A new version of <span style="font-weight: 500;">` + alias + `</span> (v.` + version + `) is available.
              </div>
              <div>
                Press <span style="font-weight: 500;">f5</span> to refresh the page.
              </div>
            </div>
            `

		
		return server.sendApplicationNotification(name, message)
	}
	return nil
}

/**
 * Send a application notification.
 * That function will send notification to all connected user of that application.
 */
func (server *server) sendApplicationNotification(application string, message string) error {

	// That service made user of persistence service.
	notification := new(resourcepb.Notification)
	notification.Id = Utility.RandomUUID()
	notification.NotificationType = resourcepb.NotificationType_APPLICATION_NOTIFICATION
	notification.Message = message
	notification.Recipient = application
	notification.Date = time.Now().Unix()
	notification.Sender = ""

	err := server.createNotification(notification)
	if err != nil {
		return err
	}

	var marshaler jsonpb.Marshaler
	jsonStr, err := marshaler.MarshalToString(notification)
	if err != nil {
		return err
	}

	return server.publish(application+"_notification_event", []byte(jsonStr))
}
