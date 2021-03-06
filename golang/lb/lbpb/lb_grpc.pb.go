// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package lbpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// LoadBalancingServiceClient is the client API for LoadBalancingService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LoadBalancingServiceClient interface {
	//*
	// Return the list of servers in order of availability (lower loaded at first).
	GetCanditates(ctx context.Context, in *GetCanditatesRequest, opts ...grpc.CallOption) (*GetCanditatesResponse, error)
	//*
	// Report load to the load balancer from the client.
	ReportLoadInfo(ctx context.Context, opts ...grpc.CallOption) (LoadBalancingService_ReportLoadInfoClient, error)
}

type loadBalancingServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewLoadBalancingServiceClient(cc grpc.ClientConnInterface) LoadBalancingServiceClient {
	return &loadBalancingServiceClient{cc}
}

func (c *loadBalancingServiceClient) GetCanditates(ctx context.Context, in *GetCanditatesRequest, opts ...grpc.CallOption) (*GetCanditatesResponse, error) {
	out := new(GetCanditatesResponse)
	err := c.cc.Invoke(ctx, "/lb.LoadBalancingService/GetCanditates", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *loadBalancingServiceClient) ReportLoadInfo(ctx context.Context, opts ...grpc.CallOption) (LoadBalancingService_ReportLoadInfoClient, error) {
	stream, err := c.cc.NewStream(ctx, &LoadBalancingService_ServiceDesc.Streams[0], "/lb.LoadBalancingService/reportLoadInfo", opts...)
	if err != nil {
		return nil, err
	}
	x := &loadBalancingServiceReportLoadInfoClient{stream}
	return x, nil
}

type LoadBalancingService_ReportLoadInfoClient interface {
	Send(*ReportLoadInfoRequest) error
	CloseAndRecv() (*ReportLoadInfoResponse, error)
	grpc.ClientStream
}

type loadBalancingServiceReportLoadInfoClient struct {
	grpc.ClientStream
}

func (x *loadBalancingServiceReportLoadInfoClient) Send(m *ReportLoadInfoRequest) error {
	return x.ClientStream.SendMsg(m)
}

func (x *loadBalancingServiceReportLoadInfoClient) CloseAndRecv() (*ReportLoadInfoResponse, error) {
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	m := new(ReportLoadInfoResponse)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// LoadBalancingServiceServer is the server API for LoadBalancingService service.
// All implementations should embed UnimplementedLoadBalancingServiceServer
// for forward compatibility
type LoadBalancingServiceServer interface {
	//*
	// Return the list of servers in order of availability (lower loaded at first).
	GetCanditates(context.Context, *GetCanditatesRequest) (*GetCanditatesResponse, error)
	//*
	// Report load to the load balancer from the client.
	ReportLoadInfo(LoadBalancingService_ReportLoadInfoServer) error
}

// UnimplementedLoadBalancingServiceServer should be embedded to have forward compatible implementations.
type UnimplementedLoadBalancingServiceServer struct {
}

func (UnimplementedLoadBalancingServiceServer) GetCanditates(context.Context, *GetCanditatesRequest) (*GetCanditatesResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetCanditates not implemented")
}
func (UnimplementedLoadBalancingServiceServer) ReportLoadInfo(LoadBalancingService_ReportLoadInfoServer) error {
	return status.Errorf(codes.Unimplemented, "method ReportLoadInfo not implemented")
}

// UnsafeLoadBalancingServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LoadBalancingServiceServer will
// result in compilation errors.
type UnsafeLoadBalancingServiceServer interface {
	mustEmbedUnimplementedLoadBalancingServiceServer()
}

func RegisterLoadBalancingServiceServer(s grpc.ServiceRegistrar, srv LoadBalancingServiceServer) {
	s.RegisterService(&LoadBalancingService_ServiceDesc, srv)
}

func _LoadBalancingService_GetCanditates_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GetCanditatesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LoadBalancingServiceServer).GetCanditates(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/lb.LoadBalancingService/GetCanditates",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LoadBalancingServiceServer).GetCanditates(ctx, req.(*GetCanditatesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _LoadBalancingService_ReportLoadInfo_Handler(srv interface{}, stream grpc.ServerStream) error {
	return srv.(LoadBalancingServiceServer).ReportLoadInfo(&loadBalancingServiceReportLoadInfoServer{stream})
}

type LoadBalancingService_ReportLoadInfoServer interface {
	SendAndClose(*ReportLoadInfoResponse) error
	Recv() (*ReportLoadInfoRequest, error)
	grpc.ServerStream
}

type loadBalancingServiceReportLoadInfoServer struct {
	grpc.ServerStream
}

func (x *loadBalancingServiceReportLoadInfoServer) SendAndClose(m *ReportLoadInfoResponse) error {
	return x.ServerStream.SendMsg(m)
}

func (x *loadBalancingServiceReportLoadInfoServer) Recv() (*ReportLoadInfoRequest, error) {
	m := new(ReportLoadInfoRequest)
	if err := x.ServerStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

// LoadBalancingService_ServiceDesc is the grpc.ServiceDesc for LoadBalancingService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var LoadBalancingService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "lb.LoadBalancingService",
	HandlerType: (*LoadBalancingServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "GetCanditates",
			Handler:    _LoadBalancingService_GetCanditates_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "reportLoadInfo",
			Handler:       _LoadBalancingService_ReportLoadInfo_Handler,
			ClientStreams: true,
		},
	},
	Metadata: "lb.proto",
}
