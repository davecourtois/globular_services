// <auto-generated>
//     Generated by the protocol buffer compiler.  DO NOT EDIT!
//     source: proto/event.proto
// </auto-generated>
// Original file comments:
// *
// You can use echo as starter project.
#pragma warning disable 0414, 1591
#region Designer generated code

using grpc = global::Grpc.Core;

namespace Event {
  /// <summary>
  ///*
  /// A gRpc event bus.
  /// </summary>
  public static partial class EventService
  {
    static readonly string __ServiceName = "event.EventService";

    static void __Helper_SerializeMessage(global::Google.Protobuf.IMessage message, grpc::SerializationContext context)
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (message is global::Google.Protobuf.IBufferMessage)
      {
        context.SetPayloadLength(message.CalculateSize());
        global::Google.Protobuf.MessageExtensions.WriteTo(message, context.GetBufferWriter());
        context.Complete();
        return;
      }
      #endif
      context.Complete(global::Google.Protobuf.MessageExtensions.ToByteArray(message));
    }

    static class __Helper_MessageCache<T>
    {
      public static readonly bool IsBufferMessage = global::System.Reflection.IntrospectionExtensions.GetTypeInfo(typeof(global::Google.Protobuf.IBufferMessage)).IsAssignableFrom(typeof(T));
    }

    static T __Helper_DeserializeMessage<T>(grpc::DeserializationContext context, global::Google.Protobuf.MessageParser<T> parser) where T : global::Google.Protobuf.IMessage<T>
    {
      #if !GRPC_DISABLE_PROTOBUF_BUFFER_SERIALIZATION
      if (__Helper_MessageCache<T>.IsBufferMessage)
      {
        return parser.ParseFrom(context.PayloadAsReadOnlySequence());
      }
      #endif
      return parser.ParseFrom(context.PayloadAsNewBuffer());
    }

    static readonly grpc::Marshaller<global::Event.StopRequest> __Marshaller_event_StopRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.StopRequest.Parser));
    static readonly grpc::Marshaller<global::Event.StopResponse> __Marshaller_event_StopResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.StopResponse.Parser));
    static readonly grpc::Marshaller<global::Event.OnEventRequest> __Marshaller_event_OnEventRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.OnEventRequest.Parser));
    static readonly grpc::Marshaller<global::Event.OnEventResponse> __Marshaller_event_OnEventResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.OnEventResponse.Parser));
    static readonly grpc::Marshaller<global::Event.QuitRequest> __Marshaller_event_QuitRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.QuitRequest.Parser));
    static readonly grpc::Marshaller<global::Event.QuitResponse> __Marshaller_event_QuitResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.QuitResponse.Parser));
    static readonly grpc::Marshaller<global::Event.SubscribeRequest> __Marshaller_event_SubscribeRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.SubscribeRequest.Parser));
    static readonly grpc::Marshaller<global::Event.SubscribeResponse> __Marshaller_event_SubscribeResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.SubscribeResponse.Parser));
    static readonly grpc::Marshaller<global::Event.UnSubscribeRequest> __Marshaller_event_UnSubscribeRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.UnSubscribeRequest.Parser));
    static readonly grpc::Marshaller<global::Event.UnSubscribeResponse> __Marshaller_event_UnSubscribeResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.UnSubscribeResponse.Parser));
    static readonly grpc::Marshaller<global::Event.PublishRequest> __Marshaller_event_PublishRequest = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.PublishRequest.Parser));
    static readonly grpc::Marshaller<global::Event.PublishResponse> __Marshaller_event_PublishResponse = grpc::Marshallers.Create(__Helper_SerializeMessage, context => __Helper_DeserializeMessage(context, global::Event.PublishResponse.Parser));

    static readonly grpc::Method<global::Event.StopRequest, global::Event.StopResponse> __Method_Stop = new grpc::Method<global::Event.StopRequest, global::Event.StopResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Stop",
        __Marshaller_event_StopRequest,
        __Marshaller_event_StopResponse);

    static readonly grpc::Method<global::Event.OnEventRequest, global::Event.OnEventResponse> __Method_OnEvent = new grpc::Method<global::Event.OnEventRequest, global::Event.OnEventResponse>(
        grpc::MethodType.ServerStreaming,
        __ServiceName,
        "OnEvent",
        __Marshaller_event_OnEventRequest,
        __Marshaller_event_OnEventResponse);

    static readonly grpc::Method<global::Event.QuitRequest, global::Event.QuitResponse> __Method_Quit = new grpc::Method<global::Event.QuitRequest, global::Event.QuitResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Quit",
        __Marshaller_event_QuitRequest,
        __Marshaller_event_QuitResponse);

    static readonly grpc::Method<global::Event.SubscribeRequest, global::Event.SubscribeResponse> __Method_Subscribe = new grpc::Method<global::Event.SubscribeRequest, global::Event.SubscribeResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Subscribe",
        __Marshaller_event_SubscribeRequest,
        __Marshaller_event_SubscribeResponse);

    static readonly grpc::Method<global::Event.UnSubscribeRequest, global::Event.UnSubscribeResponse> __Method_UnSubscribe = new grpc::Method<global::Event.UnSubscribeRequest, global::Event.UnSubscribeResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "UnSubscribe",
        __Marshaller_event_UnSubscribeRequest,
        __Marshaller_event_UnSubscribeResponse);

    static readonly grpc::Method<global::Event.PublishRequest, global::Event.PublishResponse> __Method_Publish = new grpc::Method<global::Event.PublishRequest, global::Event.PublishResponse>(
        grpc::MethodType.Unary,
        __ServiceName,
        "Publish",
        __Marshaller_event_PublishRequest,
        __Marshaller_event_PublishResponse);

    /// <summary>Service descriptor</summary>
    public static global::Google.Protobuf.Reflection.ServiceDescriptor Descriptor
    {
      get { return global::Event.EventReflection.Descriptor.Services[0]; }
    }

    /// <summary>Base class for server-side implementations of EventService</summary>
    [grpc::BindServiceMethod(typeof(EventService), "BindService")]
    public abstract partial class EventServiceBase
    {
      /// <summary>
      /// Stop the server.
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      public virtual global::System.Threading.Tasks.Task<global::Event.StopResponse> Stop(global::Event.StopRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      /// <summary>
      /// One stream by client.
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="responseStream">Used for sending responses back to the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>A task indicating completion of the handler.</returns>
      public virtual global::System.Threading.Tasks.Task OnEvent(global::Event.OnEventRequest request, grpc::IServerStreamWriter<global::Event.OnEventResponse> responseStream, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      /// <summary>
      /// Return from OnEvent.
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      public virtual global::System.Threading.Tasks.Task<global::Event.QuitResponse> Quit(global::Event.QuitRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      /// <summary>
      /// Connect to an event channel or create it if it not already exist
      /// and stay in that function until UnSubscribe is call.
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      public virtual global::System.Threading.Tasks.Task<global::Event.SubscribeResponse> Subscribe(global::Event.SubscribeRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      /// <summary>
      /// Disconnect to an event channel.(Return from Subscribe)
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      public virtual global::System.Threading.Tasks.Task<global::Event.UnSubscribeResponse> UnSubscribe(global::Event.UnSubscribeRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

      /// <summary>
      /// Publish event on channel.
      /// </summary>
      /// <param name="request">The request received from the client.</param>
      /// <param name="context">The context of the server-side call handler being invoked.</param>
      /// <returns>The response to send back to the client (wrapped by a task).</returns>
      public virtual global::System.Threading.Tasks.Task<global::Event.PublishResponse> Publish(global::Event.PublishRequest request, grpc::ServerCallContext context)
      {
        throw new grpc::RpcException(new grpc::Status(grpc::StatusCode.Unimplemented, ""));
      }

    }

    /// <summary>Client for EventService</summary>
    public partial class EventServiceClient : grpc::ClientBase<EventServiceClient>
    {
      /// <summary>Creates a new client for EventService</summary>
      /// <param name="channel">The channel to use to make remote calls.</param>
      public EventServiceClient(grpc::ChannelBase channel) : base(channel)
      {
      }
      /// <summary>Creates a new client for EventService that uses a custom <c>CallInvoker</c>.</summary>
      /// <param name="callInvoker">The callInvoker to use to make remote calls.</param>
      public EventServiceClient(grpc::CallInvoker callInvoker) : base(callInvoker)
      {
      }
      /// <summary>Protected parameterless constructor to allow creation of test doubles.</summary>
      protected EventServiceClient() : base()
      {
      }
      /// <summary>Protected constructor to allow creation of configured clients.</summary>
      /// <param name="configuration">The client configuration.</param>
      protected EventServiceClient(ClientBaseConfiguration configuration) : base(configuration)
      {
      }

      /// <summary>
      /// Stop the server.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.StopResponse Stop(global::Event.StopRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return Stop(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Stop the server.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.StopResponse Stop(global::Event.StopRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_Stop, null, options, request);
      }
      /// <summary>
      /// Stop the server.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.StopResponse> StopAsync(global::Event.StopRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return StopAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Stop the server.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.StopResponse> StopAsync(global::Event.StopRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_Stop, null, options, request);
      }
      /// <summary>
      /// One stream by client.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncServerStreamingCall<global::Event.OnEventResponse> OnEvent(global::Event.OnEventRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return OnEvent(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// One stream by client.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncServerStreamingCall<global::Event.OnEventResponse> OnEvent(global::Event.OnEventRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncServerStreamingCall(__Method_OnEvent, null, options, request);
      }
      /// <summary>
      /// Return from OnEvent.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.QuitResponse Quit(global::Event.QuitRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return Quit(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Return from OnEvent.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.QuitResponse Quit(global::Event.QuitRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_Quit, null, options, request);
      }
      /// <summary>
      /// Return from OnEvent.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.QuitResponse> QuitAsync(global::Event.QuitRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return QuitAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Return from OnEvent.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.QuitResponse> QuitAsync(global::Event.QuitRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_Quit, null, options, request);
      }
      /// <summary>
      /// Connect to an event channel or create it if it not already exist
      /// and stay in that function until UnSubscribe is call.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.SubscribeResponse Subscribe(global::Event.SubscribeRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return Subscribe(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Connect to an event channel or create it if it not already exist
      /// and stay in that function until UnSubscribe is call.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.SubscribeResponse Subscribe(global::Event.SubscribeRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_Subscribe, null, options, request);
      }
      /// <summary>
      /// Connect to an event channel or create it if it not already exist
      /// and stay in that function until UnSubscribe is call.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.SubscribeResponse> SubscribeAsync(global::Event.SubscribeRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return SubscribeAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Connect to an event channel or create it if it not already exist
      /// and stay in that function until UnSubscribe is call.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.SubscribeResponse> SubscribeAsync(global::Event.SubscribeRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_Subscribe, null, options, request);
      }
      /// <summary>
      /// Disconnect to an event channel.(Return from Subscribe)
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.UnSubscribeResponse UnSubscribe(global::Event.UnSubscribeRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return UnSubscribe(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Disconnect to an event channel.(Return from Subscribe)
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.UnSubscribeResponse UnSubscribe(global::Event.UnSubscribeRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_UnSubscribe, null, options, request);
      }
      /// <summary>
      /// Disconnect to an event channel.(Return from Subscribe)
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.UnSubscribeResponse> UnSubscribeAsync(global::Event.UnSubscribeRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return UnSubscribeAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Disconnect to an event channel.(Return from Subscribe)
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.UnSubscribeResponse> UnSubscribeAsync(global::Event.UnSubscribeRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_UnSubscribe, null, options, request);
      }
      /// <summary>
      /// Publish event on channel.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.PublishResponse Publish(global::Event.PublishRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return Publish(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Publish event on channel.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The response received from the server.</returns>
      public virtual global::Event.PublishResponse Publish(global::Event.PublishRequest request, grpc::CallOptions options)
      {
        return CallInvoker.BlockingUnaryCall(__Method_Publish, null, options, request);
      }
      /// <summary>
      /// Publish event on channel.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="headers">The initial metadata to send with the call. This parameter is optional.</param>
      /// <param name="deadline">An optional deadline for the call. The call will be cancelled if deadline is hit.</param>
      /// <param name="cancellationToken">An optional token for canceling the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.PublishResponse> PublishAsync(global::Event.PublishRequest request, grpc::Metadata headers = null, global::System.DateTime? deadline = null, global::System.Threading.CancellationToken cancellationToken = default(global::System.Threading.CancellationToken))
      {
        return PublishAsync(request, new grpc::CallOptions(headers, deadline, cancellationToken));
      }
      /// <summary>
      /// Publish event on channel.
      /// </summary>
      /// <param name="request">The request to send to the server.</param>
      /// <param name="options">The options for the call.</param>
      /// <returns>The call object.</returns>
      public virtual grpc::AsyncUnaryCall<global::Event.PublishResponse> PublishAsync(global::Event.PublishRequest request, grpc::CallOptions options)
      {
        return CallInvoker.AsyncUnaryCall(__Method_Publish, null, options, request);
      }
      /// <summary>Creates a new instance of client from given <c>ClientBaseConfiguration</c>.</summary>
      protected override EventServiceClient NewInstance(ClientBaseConfiguration configuration)
      {
        return new EventServiceClient(configuration);
      }
    }

    /// <summary>Creates service definition that can be registered with a server</summary>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static grpc::ServerServiceDefinition BindService(EventServiceBase serviceImpl)
    {
      return grpc::ServerServiceDefinition.CreateBuilder()
          .AddMethod(__Method_Stop, serviceImpl.Stop)
          .AddMethod(__Method_OnEvent, serviceImpl.OnEvent)
          .AddMethod(__Method_Quit, serviceImpl.Quit)
          .AddMethod(__Method_Subscribe, serviceImpl.Subscribe)
          .AddMethod(__Method_UnSubscribe, serviceImpl.UnSubscribe)
          .AddMethod(__Method_Publish, serviceImpl.Publish).Build();
    }

    /// <summary>Register service method with a service binder with or without implementation. Useful when customizing the  service binding logic.
    /// Note: this method is part of an experimental API that can change or be removed without any prior notice.</summary>
    /// <param name="serviceBinder">Service methods will be bound by calling <c>AddMethod</c> on this object.</param>
    /// <param name="serviceImpl">An object implementing the server-side handling logic.</param>
    public static void BindService(grpc::ServiceBinderBase serviceBinder, EventServiceBase serviceImpl)
    {
      serviceBinder.AddMethod(__Method_Stop, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Event.StopRequest, global::Event.StopResponse>(serviceImpl.Stop));
      serviceBinder.AddMethod(__Method_OnEvent, serviceImpl == null ? null : new grpc::ServerStreamingServerMethod<global::Event.OnEventRequest, global::Event.OnEventResponse>(serviceImpl.OnEvent));
      serviceBinder.AddMethod(__Method_Quit, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Event.QuitRequest, global::Event.QuitResponse>(serviceImpl.Quit));
      serviceBinder.AddMethod(__Method_Subscribe, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Event.SubscribeRequest, global::Event.SubscribeResponse>(serviceImpl.Subscribe));
      serviceBinder.AddMethod(__Method_UnSubscribe, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Event.UnSubscribeRequest, global::Event.UnSubscribeResponse>(serviceImpl.UnSubscribe));
      serviceBinder.AddMethod(__Method_Publish, serviceImpl == null ? null : new grpc::UnaryServerMethod<global::Event.PublishRequest, global::Event.PublishResponse>(serviceImpl.Publish));
    }

  }
}
#endregion
