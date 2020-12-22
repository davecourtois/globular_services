// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package rbacpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// RbacServiceClient is the client API for RbacService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type RbacServiceClient interface {
	//* Set resource permissions this method will replace existing permission at once *
	SetResourcePermissions(ctx context.Context, in *SetResourcePermissionsRqst, opts ...grpc.CallOption) (*SetResourcePermissionsRqst, error)
	//* Delete a resource permissions (when a resource is deleted) *
	DeleteResourcePermissions(ctx context.Context, in *DeleteResourcePermissionsRqst, opts ...grpc.CallOption) (*DeleteResourcePermissionsRqst, error)
	//* Delete a specific resource permission *
	DeleteResourcePermission(ctx context.Context, in *DeleteResourcePermissionRqst, opts ...grpc.CallOption) (*DeleteResourcePermissionRqst, error)
	//* Get specific resource permission  ex. read permission... *
	GetResourcePermission(ctx context.Context, in *GetResourcePermissionRqst, opts ...grpc.CallOption) (*GetResourcePermissionRsp, error)
	//* Set specific resource permission  ex. read permission... *
	SetResourcePermission(ctx context.Context, in *SetResourcePermissionRqst, opts ...grpc.CallOption) (*SetResourcePermissionRsp, error)
	//* Get resource permissions *
	GetResourcePermissions(ctx context.Context, in *GetResourcePermissionsRqst, opts ...grpc.CallOption) (*GetResourcePermissionsRsp, error)
	//* Add resource owner do nothing if it already exist
	AddResourceOwner(ctx context.Context, in *AddResourceOwnerRqst, opts ...grpc.CallOption) (*AddResourceOwnerRsp, error)
	//* Remove resource owner
	RemoveResourceOwner(ctx context.Context, in *RemoveResourceOwnerRqst, opts ...grpc.CallOption) (*RemoveResourceOwnerRsp, error)
	//* That function must be call when a subject is removed to clean up permissions.
	DeleteAllAccess(ctx context.Context, in *DeleteAllAccessRqst, opts ...grpc.CallOption) (*DeleteAllAccessRsp, error)
	//* Validate if a user can get access to a given Resource for a given operation (read, write...)
	ValidateAccess(ctx context.Context, in *ValidateAccessRqst, opts ...grpc.CallOption) (*ValidateAccessRsp, error)
	//* Return the action ressource informations.
	GetActionResourceInfos(ctx context.Context, in *GetActionResourceInfosRqst, opts ...grpc.CallOption) (*GetActionResourceInfosRsp, error)
	//* Validate the actions
	ValidateAction(ctx context.Context, in *ValidateActionRqst, opts ...grpc.CallOption) (*ValidateActionRsp, error)
}

type rbacServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewRbacServiceClient(cc grpc.ClientConnInterface) RbacServiceClient {
	return &rbacServiceClient{cc}
}

func (c *rbacServiceClient) SetResourcePermissions(ctx context.Context, in *SetResourcePermissionsRqst, opts ...grpc.CallOption) (*SetResourcePermissionsRqst, error) {
	out := new(SetResourcePermissionsRqst)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/SetResourcePermissions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) DeleteResourcePermissions(ctx context.Context, in *DeleteResourcePermissionsRqst, opts ...grpc.CallOption) (*DeleteResourcePermissionsRqst, error) {
	out := new(DeleteResourcePermissionsRqst)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/DeleteResourcePermissions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) DeleteResourcePermission(ctx context.Context, in *DeleteResourcePermissionRqst, opts ...grpc.CallOption) (*DeleteResourcePermissionRqst, error) {
	out := new(DeleteResourcePermissionRqst)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/DeleteResourcePermission", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) GetResourcePermission(ctx context.Context, in *GetResourcePermissionRqst, opts ...grpc.CallOption) (*GetResourcePermissionRsp, error) {
	out := new(GetResourcePermissionRsp)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/GetResourcePermission", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) SetResourcePermission(ctx context.Context, in *SetResourcePermissionRqst, opts ...grpc.CallOption) (*SetResourcePermissionRsp, error) {
	out := new(SetResourcePermissionRsp)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/SetResourcePermission", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) GetResourcePermissions(ctx context.Context, in *GetResourcePermissionsRqst, opts ...grpc.CallOption) (*GetResourcePermissionsRsp, error) {
	out := new(GetResourcePermissionsRsp)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/GetResourcePermissions", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) AddResourceOwner(ctx context.Context, in *AddResourceOwnerRqst, opts ...grpc.CallOption) (*AddResourceOwnerRsp, error) {
	out := new(AddResourceOwnerRsp)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/AddResourceOwner", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) RemoveResourceOwner(ctx context.Context, in *RemoveResourceOwnerRqst, opts ...grpc.CallOption) (*RemoveResourceOwnerRsp, error) {
	out := new(RemoveResourceOwnerRsp)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/RemoveResourceOwner", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) DeleteAllAccess(ctx context.Context, in *DeleteAllAccessRqst, opts ...grpc.CallOption) (*DeleteAllAccessRsp, error) {
	out := new(DeleteAllAccessRsp)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/DeleteAllAccess", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) ValidateAccess(ctx context.Context, in *ValidateAccessRqst, opts ...grpc.CallOption) (*ValidateAccessRsp, error) {
	out := new(ValidateAccessRsp)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/ValidateAccess", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) GetActionResourceInfos(ctx context.Context, in *GetActionResourceInfosRqst, opts ...grpc.CallOption) (*GetActionResourceInfosRsp, error) {
	out := new(GetActionResourceInfosRsp)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/GetActionResourceInfos", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *rbacServiceClient) ValidateAction(ctx context.Context, in *ValidateActionRqst, opts ...grpc.CallOption) (*ValidateActionRsp, error) {
	out := new(ValidateActionRsp)
	err := c.cc.Invoke(ctx, "/rbac.RbacService/ValidateAction", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RbacServiceServer is the server API for RbacService service.
// All implementations should embed UnimplementedRbacServiceServer
// for forward compatibility
type RbacServiceServer interface {
	//* Set resource permissions this method will replace existing permission at once *
	SetResourcePermissions(context.Context, *SetResourcePermissionsRqst) (*SetResourcePermissionsRqst, error)
	//* Delete a resource permissions (when a resource is deleted) *
	DeleteResourcePermissions(context.Context, *DeleteResourcePermissionsRqst) (*DeleteResourcePermissionsRqst, error)
	//* Delete a specific resource permission *
	DeleteResourcePermission(context.Context, *DeleteResourcePermissionRqst) (*DeleteResourcePermissionRqst, error)
	//* Get specific resource permission  ex. read permission... *
	GetResourcePermission(context.Context, *GetResourcePermissionRqst) (*GetResourcePermissionRsp, error)
	//* Set specific resource permission  ex. read permission... *
	SetResourcePermission(context.Context, *SetResourcePermissionRqst) (*SetResourcePermissionRsp, error)
	//* Get resource permissions *
	GetResourcePermissions(context.Context, *GetResourcePermissionsRqst) (*GetResourcePermissionsRsp, error)
	//* Add resource owner do nothing if it already exist
	AddResourceOwner(context.Context, *AddResourceOwnerRqst) (*AddResourceOwnerRsp, error)
	//* Remove resource owner
	RemoveResourceOwner(context.Context, *RemoveResourceOwnerRqst) (*RemoveResourceOwnerRsp, error)
	//* That function must be call when a subject is removed to clean up permissions.
	DeleteAllAccess(context.Context, *DeleteAllAccessRqst) (*DeleteAllAccessRsp, error)
	//* Validate if a user can get access to a given Resource for a given operation (read, write...)
	ValidateAccess(context.Context, *ValidateAccessRqst) (*ValidateAccessRsp, error)
	//* Return the action ressource informations.
	GetActionResourceInfos(context.Context, *GetActionResourceInfosRqst) (*GetActionResourceInfosRsp, error)
	//* Validate the actions
	ValidateAction(context.Context, *ValidateActionRqst) (*ValidateActionRsp, error)
}

// UnimplementedRbacServiceServer should be embedded to have forward compatible implementations.
type UnimplementedRbacServiceServer struct {
}

func (UnimplementedRbacServiceServer) SetResourcePermissions(context.Context, *SetResourcePermissionsRqst) (*SetResourcePermissionsRqst, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetResourcePermissions not implemented")
}
func (UnimplementedRbacServiceServer) DeleteResourcePermissions(context.Context, *DeleteResourcePermissionsRqst) (*DeleteResourcePermissionsRqst, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteResourcePermissions not implemented")
}
func (UnimplementedRbacServiceServer) DeleteResourcePermission(context.Context, *DeleteResourcePermissionRqst) (*DeleteResourcePermissionRqst, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteResourcePermission not implemented")
}
func (UnimplementedRbacServiceServer) GetResourcePermission(context.Context, *GetResourcePermissionRqst) (*GetResourcePermissionRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetResourcePermission not implemented")
}
func (UnimplementedRbacServiceServer) SetResourcePermission(context.Context, *SetResourcePermissionRqst) (*SetResourcePermissionRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetResourcePermission not implemented")
}
func (UnimplementedRbacServiceServer) GetResourcePermissions(context.Context, *GetResourcePermissionsRqst) (*GetResourcePermissionsRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetResourcePermissions not implemented")
}
func (UnimplementedRbacServiceServer) AddResourceOwner(context.Context, *AddResourceOwnerRqst) (*AddResourceOwnerRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddResourceOwner not implemented")
}
func (UnimplementedRbacServiceServer) RemoveResourceOwner(context.Context, *RemoveResourceOwnerRqst) (*RemoveResourceOwnerRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method RemoveResourceOwner not implemented")
}
func (UnimplementedRbacServiceServer) DeleteAllAccess(context.Context, *DeleteAllAccessRqst) (*DeleteAllAccessRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAllAccess not implemented")
}
func (UnimplementedRbacServiceServer) ValidateAccess(context.Context, *ValidateAccessRqst) (*ValidateAccessRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ValidateAccess not implemented")
}
func (UnimplementedRbacServiceServer) GetActionResourceInfos(context.Context, *GetActionResourceInfosRqst) (*GetActionResourceInfosRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetActionResourceInfos not implemented")
}
func (UnimplementedRbacServiceServer) ValidateAction(context.Context, *ValidateActionRqst) (*ValidateActionRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ValidateAction not implemented")
}

// UnsafeRbacServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to RbacServiceServer will
// result in compilation errors.
type UnsafeRbacServiceServer interface {
	mustEmbedUnimplementedRbacServiceServer()
}

func RegisterRbacServiceServer(s grpc.ServiceRegistrar, srv RbacServiceServer) {
	s.RegisterService(&RbacService_ServiceDesc, srv)
}

func _RbacService_SetResourcePermissions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetResourcePermissionsRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).SetResourcePermissions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/SetResourcePermissions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).SetResourcePermissions(ctx, req.(*SetResourcePermissionsRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_DeleteResourcePermissions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteResourcePermissionsRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).DeleteResourcePermissions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/DeleteResourcePermissions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).DeleteResourcePermissions(ctx, req.(*DeleteResourcePermissionsRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_DeleteResourcePermission_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteResourcePermissionRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).DeleteResourcePermission(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/DeleteResourcePermission",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).DeleteResourcePermission(ctx, req.(*DeleteResourcePermissionRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_GetResourcePermission_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetResourcePermissionRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).GetResourcePermission(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/GetResourcePermission",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).GetResourcePermission(ctx, req.(*GetResourcePermissionRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_SetResourcePermission_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SetResourcePermissionRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).SetResourcePermission(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/SetResourcePermission",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).SetResourcePermission(ctx, req.(*SetResourcePermissionRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_GetResourcePermissions_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetResourcePermissionsRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).GetResourcePermissions(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/GetResourcePermissions",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).GetResourcePermissions(ctx, req.(*GetResourcePermissionsRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_AddResourceOwner_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddResourceOwnerRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).AddResourceOwner(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/AddResourceOwner",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).AddResourceOwner(ctx, req.(*AddResourceOwnerRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_RemoveResourceOwner_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoveResourceOwnerRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).RemoveResourceOwner(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/RemoveResourceOwner",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).RemoveResourceOwner(ctx, req.(*RemoveResourceOwnerRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_DeleteAllAccess_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteAllAccessRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).DeleteAllAccess(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/DeleteAllAccess",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).DeleteAllAccess(ctx, req.(*DeleteAllAccessRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_ValidateAccess_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ValidateAccessRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).ValidateAccess(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/ValidateAccess",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).ValidateAccess(ctx, req.(*ValidateAccessRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_GetActionResourceInfos_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetActionResourceInfosRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).GetActionResourceInfos(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/GetActionResourceInfos",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).GetActionResourceInfos(ctx, req.(*GetActionResourceInfosRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _RbacService_ValidateAction_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ValidateActionRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RbacServiceServer).ValidateAction(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/rbac.RbacService/ValidateAction",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RbacServiceServer).ValidateAction(ctx, req.(*ValidateActionRqst))
	}
	return interceptor(ctx, in, info, handler)
}

// RbacService_ServiceDesc is the grpc.ServiceDesc for RbacService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var RbacService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "rbac.RbacService",
	HandlerType: (*RbacServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "SetResourcePermissions",
			Handler:    _RbacService_SetResourcePermissions_Handler,
		},
		{
			MethodName: "DeleteResourcePermissions",
			Handler:    _RbacService_DeleteResourcePermissions_Handler,
		},
		{
			MethodName: "DeleteResourcePermission",
			Handler:    _RbacService_DeleteResourcePermission_Handler,
		},
		{
			MethodName: "GetResourcePermission",
			Handler:    _RbacService_GetResourcePermission_Handler,
		},
		{
			MethodName: "SetResourcePermission",
			Handler:    _RbacService_SetResourcePermission_Handler,
		},
		{
			MethodName: "GetResourcePermissions",
			Handler:    _RbacService_GetResourcePermissions_Handler,
		},
		{
			MethodName: "AddResourceOwner",
			Handler:    _RbacService_AddResourceOwner_Handler,
		},
		{
			MethodName: "RemoveResourceOwner",
			Handler:    _RbacService_RemoveResourceOwner_Handler,
		},
		{
			MethodName: "DeleteAllAccess",
			Handler:    _RbacService_DeleteAllAccess_Handler,
		},
		{
			MethodName: "ValidateAccess",
			Handler:    _RbacService_ValidateAccess_Handler,
		},
		{
			MethodName: "GetActionResourceInfos",
			Handler:    _RbacService_GetActionResourceInfos_Handler,
		},
		{
			MethodName: "ValidateAction",
			Handler:    _RbacService_ValidateAction_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "proto/rbac.proto",
}
