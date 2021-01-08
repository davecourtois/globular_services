// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package logpb

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// LogServiceClient is the client API for LogService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type LogServiceClient interface {
	//* Set a method into the log... *
	Log(ctx context.Context, in *LogRqst, opts ...grpc.CallOption) (*LogRsp, error)
	//* Get the list of logs *
	GetLog(ctx context.Context, in *GetLogRqst, opts ...grpc.CallOption) (LogService_GetLogClient, error)
	//* Delete a single log entry *
	DeleteLog(ctx context.Context, in *DeleteLogRqst, opts ...grpc.CallOption) (*DeleteLogRsp, error)
	//* Delete all log *
	ClearAllLog(ctx context.Context, in *ClearAllLogRqst, opts ...grpc.CallOption) (*ClearAllLogRsp, error)
}

type logServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewLogServiceClient(cc grpc.ClientConnInterface) LogServiceClient {
	return &logServiceClient{cc}
}

func (c *logServiceClient) Log(ctx context.Context, in *LogRqst, opts ...grpc.CallOption) (*LogRsp, error) {
	out := new(LogRsp)
	err := c.cc.Invoke(ctx, "/log.LogService/Log", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *logServiceClient) GetLog(ctx context.Context, in *GetLogRqst, opts ...grpc.CallOption) (LogService_GetLogClient, error) {
	stream, err := c.cc.NewStream(ctx, &_LogService_serviceDesc.Streams[0], "/log.LogService/GetLog", opts...)
	if err != nil {
		return nil, err
	}
	x := &logServiceGetLogClient{stream}
	if err := x.ClientStream.SendMsg(in); err != nil {
		return nil, err
	}
	if err := x.ClientStream.CloseSend(); err != nil {
		return nil, err
	}
	return x, nil
}

type LogService_GetLogClient interface {
	Recv() (*GetLogRsp, error)
	grpc.ClientStream
}

type logServiceGetLogClient struct {
	grpc.ClientStream
}

func (x *logServiceGetLogClient) Recv() (*GetLogRsp, error) {
	m := new(GetLogRsp)
	if err := x.ClientStream.RecvMsg(m); err != nil {
		return nil, err
	}
	return m, nil
}

func (c *logServiceClient) DeleteLog(ctx context.Context, in *DeleteLogRqst, opts ...grpc.CallOption) (*DeleteLogRsp, error) {
	out := new(DeleteLogRsp)
	err := c.cc.Invoke(ctx, "/log.LogService/DeleteLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *logServiceClient) ClearAllLog(ctx context.Context, in *ClearAllLogRqst, opts ...grpc.CallOption) (*ClearAllLogRsp, error) {
	out := new(ClearAllLogRsp)
	err := c.cc.Invoke(ctx, "/log.LogService/ClearAllLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// LogServiceServer is the server API for LogService service.
// All implementations should embed UnimplementedLogServiceServer
// for forward compatibility
type LogServiceServer interface {
	//* Set a method into the log... *
	Log(context.Context, *LogRqst) (*LogRsp, error)
	//* Get the list of logs *
	GetLog(*GetLogRqst, LogService_GetLogServer) error
	//* Delete a single log entry *
	DeleteLog(context.Context, *DeleteLogRqst) (*DeleteLogRsp, error)
	//* Delete all log *
	ClearAllLog(context.Context, *ClearAllLogRqst) (*ClearAllLogRsp, error)
}

// UnimplementedLogServiceServer should be embedded to have forward compatible implementations.
type UnimplementedLogServiceServer struct {
}

func (UnimplementedLogServiceServer) Log(context.Context, *LogRqst) (*LogRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Log not implemented")
}
func (UnimplementedLogServiceServer) GetLog(*GetLogRqst, LogService_GetLogServer) error {
	return status.Errorf(codes.Unimplemented, "method GetLog not implemented")
}
func (UnimplementedLogServiceServer) DeleteLog(context.Context, *DeleteLogRqst) (*DeleteLogRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteLog not implemented")
}
func (UnimplementedLogServiceServer) ClearAllLog(context.Context, *ClearAllLogRqst) (*ClearAllLogRsp, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ClearAllLog not implemented")
}

// UnsafeLogServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to LogServiceServer will
// result in compilation errors.
type UnsafeLogServiceServer interface {
	mustEmbedUnimplementedLogServiceServer()
}

func RegisterLogServiceServer(s grpc.ServiceRegistrar, srv LogServiceServer) {
	s.RegisterService(&_LogService_serviceDesc, srv)
}

func _LogService_Log_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(LogRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LogServiceServer).Log(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/log.LogService/Log",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LogServiceServer).Log(ctx, req.(*LogRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _LogService_GetLog_Handler(srv interface{}, stream grpc.ServerStream) error {
	m := new(GetLogRqst)
	if err := stream.RecvMsg(m); err != nil {
		return err
	}
	return srv.(LogServiceServer).GetLog(m, &logServiceGetLogServer{stream})
}

type LogService_GetLogServer interface {
	Send(*GetLogRsp) error
	grpc.ServerStream
}

type logServiceGetLogServer struct {
	grpc.ServerStream
}

func (x *logServiceGetLogServer) Send(m *GetLogRsp) error {
	return x.ServerStream.SendMsg(m)
}

func _LogService_DeleteLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteLogRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LogServiceServer).DeleteLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/log.LogService/DeleteLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LogServiceServer).DeleteLog(ctx, req.(*DeleteLogRqst))
	}
	return interceptor(ctx, in, info, handler)
}

func _LogService_ClearAllLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ClearAllLogRqst)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(LogServiceServer).ClearAllLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/log.LogService/ClearAllLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(LogServiceServer).ClearAllLog(ctx, req.(*ClearAllLogRqst))
	}
	return interceptor(ctx, in, info, handler)
}

var _LogService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "log.LogService",
	HandlerType: (*LogServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Log",
			Handler:    _LogService_Log_Handler,
		},
		{
			MethodName: "DeleteLog",
			Handler:    _LogService_DeleteLog_Handler,
		},
		{
			MethodName: "ClearAllLog",
			Handler:    _LogService_ClearAllLog_Handler,
		},
	},
	Streams: []grpc.StreamDesc{
		{
			StreamName:    "GetLog",
			Handler:       _LogService_GetLog_Handler,
			ServerStreams: true,
		},
	},
	Metadata: "proto/log.proto",
}