package main

import (
	"context"
	"errors"
	"github.com/davecourtois/Utility"
	"github.com/globulario/services/golang/discovery/discoverypb"
	"github.com/globulario/services/golang/resource/resourcepb"
	"github.com/globulario/services/golang/rbac/rbacpb"
	"google.golang.org/grpc/codes"
	"google.golang.org/grpc/status"
	"log"
)

// Discovery
func (server *server) FindPackages(ctx context.Context, rqst *resourcepb.FindPackagesDescriptorRequest) (*resourcepb.FindPackagesDescriptorResponse, error) {
	// That service made user of persistence service.
	var descriptors []*resourcepb.PackageDescriptor

	// Return the list of Service Descriptor.
	return &resourcepb.FindPackagesDescriptorResponse{
		Results: descriptors,
	}, nil
}

//* Return the list of all services *
func (server *server) GetPackageDescriptor(ctx context.Context, rqst *resourcepb.GetPackageDescriptorRequest) (*resourcepb.GetPackageDescriptorResponse, error) {
	var descriptors []*resourcepb.PackageDescriptor

	// Return the list of Service Descriptor.
	return &resourcepb.GetPackageDescriptorResponse{
		Results: descriptors,
	}, nil
}

//* Return the list of all services *
func (server *server) GetPackagesDescriptor(rqst *resourcepb.GetPackagesDescriptorRequest, stream discoverypb.PackageDiscovery_GetPackagesDescriptorServer) error {

	// Return the list of Service Descriptor.
	return nil
}

/**
 * Set the package descriptor.
 */
func (server *server) SetPackageDescriptor(ctx context.Context, rqst *resourcepb.SetPackageDescriptorRequest) (*resourcepb.SetPackageDescriptorResponse, error) {

	return &resourcepb.SetPackageDescriptorResponse{
		Result: true,
	}, nil
}

// Publish a service. The service must be install localy on the server.
func (server *server) PublishService(ctx context.Context, rqst *discoverypb.PublishServiceRequest) (*discoverypb.PublishServiceResponse, error) {
	log.Println("try to publish service ", rqst.ServiceName, "...")

	// Make sure the user is part of the organization if one is given.
	publisherId := rqst.User
	if len(rqst.Organization) > 0 {
		isMember, err := server.isOrganizationMember(rqst.User, rqst.Organization)
		if err != nil {
			return nil, err
		}
		publisherId = rqst.Organization
		if !isMember {
			err := errors.New(rqst.User + " is not member of " + rqst.Organization)
			log.Println(err.Error())
			return nil, err
		}
	}

	// Now I will upload the service to the repository...
	descriptor := &resourcepb.PackageDescriptor{
		Id:           rqst.ServiceId,
		Name:         rqst.ServiceName,
		PublisherId:  publisherId,
		Version:      rqst.Version,
		Description:  rqst.Description,
		Keywords:     rqst.Keywords,
		Repositories: []string{rqst.RepositoryId},
		Discoveries:  []string{rqst.DicorveryId},
		Type:         resourcepb.PackageType_SERVICE_TYPE,
	}

	// Publish the service package.
	err := server.publishPackage(rqst.User, rqst.Organization, rqst.DicorveryId, rqst.RepositoryId, rqst.Platform, rqst.Path, descriptor)

	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &discoverypb.PublishServiceResponse{
		Result: true,
	}, nil
}

// Publish a web application to a globular node. That must be use at development mostly...
func (server *server) PublishApplication(ctx context.Context, rqst *discoverypb.PublishApplicationRequest) (*discoverypb.PublishApplicationResponse, error) {
	
	log.Println("try to publish application ", rqst.Name, "...")

	// Make sure the user is part of the organization if one is given.
	publisherId := rqst.User
	if len(rqst.Organization) > 0 {
		isMember, err := server.isOrganizationMember(rqst.User, rqst.Organization)
		if err != nil {
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}
		publisherId = rqst.Organization
		if !isMember {
			err := errors.New(rqst.User + " is not member of " + rqst.Organization)
			return nil, status.Errorf(
				codes.Internal,
				Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
		}
	}

	// Now I will upload the service to the repository...
	descriptor := &resourcepb.PackageDescriptor{
		Id:           rqst.Name,
		Name:         rqst.Name,
		PublisherId:  publisherId,
		Version:      rqst.Version,
		Description:  rqst.Description,
		Keywords:     rqst.Keywords,
		Repositories: []string{rqst.Repository},
		Discoveries:  []string{rqst.Discovery},
		Type:         resourcepb.PackageType_SERVICE_TYPE,
	}

	// Publish the application package.
	err := server.publishPackage(rqst.User, rqst.Organization, rqst.Discovery, rqst.Repository, "webapp", rqst.Path, descriptor)

	// Set the path of the directory where the application can store files.
	Utility.CreateDirIfNotExist("/var/globular/data/files/applications/" + rqst.Name)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	err = server.addResourceOwner("/applications/"+ rqst.Name, rqst.Name, rbacpb.SubjectType_APPLICATION)
	if err != nil {
		return nil, status.Errorf(
			codes.Internal,
			Utility.JsonErrorStr(Utility.FunctionName(), Utility.FileLine(), err))
	}

	return &discoverypb.PublishApplicationResponse{}, nil
}
