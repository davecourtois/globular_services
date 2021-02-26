/**
 * @fileoverview gRPC-Web generated client stub for conversation
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.conversation = require('./conversation_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.conversation.ConversationServiceClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.conversation.ConversationServicePromiseClient =
    function(hostname, credentials, options) {
  if (!options) options = {};
  options['format'] = 'text';

  /**
   * @private @const {!grpc.web.GrpcWebClientBase} The client
   */
  this.client_ = new grpc.web.GrpcWebClientBase(options);

  /**
   * @private @const {string} The hostname
   */
  this.hostname_ = hostname;

};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.StopRequest,
 *   !proto.conversation.StopResponse>}
 */
const methodDescriptor_ConversationService_Stop = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/Stop',
  grpc.web.MethodType.UNARY,
  proto.conversation.StopRequest,
  proto.conversation.StopResponse,
  /**
   * @param {!proto.conversation.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.StopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.StopRequest,
 *   !proto.conversation.StopResponse>}
 */
const methodInfo_ConversationService_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.StopResponse,
  /**
   * @param {!proto.conversation.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.StopResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/Stop',
      request,
      metadata || {},
      methodDescriptor_ConversationService_Stop,
      callback);
};


/**
 * @param {!proto.conversation.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.StopResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/Stop',
      request,
      metadata || {},
      methodDescriptor_ConversationService_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.CreateConversationRequest,
 *   !proto.conversation.CreateConversationResponse>}
 */
const methodDescriptor_ConversationService_CreateConversation = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/CreateConversation',
  grpc.web.MethodType.UNARY,
  proto.conversation.CreateConversationRequest,
  proto.conversation.CreateConversationResponse,
  /**
   * @param {!proto.conversation.CreateConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.CreateConversationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.CreateConversationRequest,
 *   !proto.conversation.CreateConversationResponse>}
 */
const methodInfo_ConversationService_CreateConversation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.CreateConversationResponse,
  /**
   * @param {!proto.conversation.CreateConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.CreateConversationResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.CreateConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.CreateConversationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.CreateConversationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.createConversation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/CreateConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_CreateConversation,
      callback);
};


/**
 * @param {!proto.conversation.CreateConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.CreateConversationResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.createConversation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/CreateConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_CreateConversation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.SuspendConversationRequest,
 *   !proto.conversation.SuspendConversationResponse>}
 */
const methodDescriptor_ConversationService_SuspendConversation = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/SuspendConversation',
  grpc.web.MethodType.UNARY,
  proto.conversation.SuspendConversationRequest,
  proto.conversation.SuspendConversationResponse,
  /**
   * @param {!proto.conversation.SuspendConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.SuspendConversationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.SuspendConversationRequest,
 *   !proto.conversation.SuspendConversationResponse>}
 */
const methodInfo_ConversationService_SuspendConversation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.SuspendConversationResponse,
  /**
   * @param {!proto.conversation.SuspendConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.SuspendConversationResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.SuspendConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.SuspendConversationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.SuspendConversationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.suspendConversation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/SuspendConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_SuspendConversation,
      callback);
};


/**
 * @param {!proto.conversation.SuspendConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.SuspendConversationResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.suspendConversation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/SuspendConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_SuspendConversation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.ResumeConversationRequest,
 *   !proto.conversation.ResumeConversationResponse>}
 */
const methodDescriptor_ConversationService_ResumeConversation = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/ResumeConversation',
  grpc.web.MethodType.UNARY,
  proto.conversation.ResumeConversationRequest,
  proto.conversation.ResumeConversationResponse,
  /**
   * @param {!proto.conversation.ResumeConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.ResumeConversationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.ResumeConversationRequest,
 *   !proto.conversation.ResumeConversationResponse>}
 */
const methodInfo_ConversationService_ResumeConversation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.ResumeConversationResponse,
  /**
   * @param {!proto.conversation.ResumeConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.ResumeConversationResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.ResumeConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.ResumeConversationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.ResumeConversationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.resumeConversation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/ResumeConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_ResumeConversation,
      callback);
};


/**
 * @param {!proto.conversation.ResumeConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.ResumeConversationResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.resumeConversation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/ResumeConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_ResumeConversation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.DeleteConversationRequest,
 *   !proto.conversation.DeleteConversationResponse>}
 */
const methodDescriptor_ConversationService_DeleteConversation = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/DeleteConversation',
  grpc.web.MethodType.UNARY,
  proto.conversation.DeleteConversationRequest,
  proto.conversation.DeleteConversationResponse,
  /**
   * @param {!proto.conversation.DeleteConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.DeleteConversationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.DeleteConversationRequest,
 *   !proto.conversation.DeleteConversationResponse>}
 */
const methodInfo_ConversationService_DeleteConversation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.DeleteConversationResponse,
  /**
   * @param {!proto.conversation.DeleteConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.DeleteConversationResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.DeleteConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.DeleteConversationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.DeleteConversationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.deleteConversation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/DeleteConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_DeleteConversation,
      callback);
};


/**
 * @param {!proto.conversation.DeleteConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.DeleteConversationResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.deleteConversation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/DeleteConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_DeleteConversation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.FindConversationRequest,
 *   !proto.conversation.FindConversationResponse>}
 */
const methodDescriptor_ConversationService_FindConversation = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/FindConversation',
  grpc.web.MethodType.UNARY,
  proto.conversation.FindConversationRequest,
  proto.conversation.FindConversationResponse,
  /**
   * @param {!proto.conversation.FindConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.FindConversationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.FindConversationRequest,
 *   !proto.conversation.FindConversationResponse>}
 */
const methodInfo_ConversationService_FindConversation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.FindConversationResponse,
  /**
   * @param {!proto.conversation.FindConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.FindConversationResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.FindConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.FindConversationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.FindConversationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.findConversation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/FindConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_FindConversation,
      callback);
};


/**
 * @param {!proto.conversation.FindConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.FindConversationResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.findConversation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/FindConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_FindConversation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.JoinConversationRequest,
 *   !proto.conversation.JoinConversationResponse>}
 */
const methodDescriptor_ConversationService_JoinConversation = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/JoinConversation',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.conversation.JoinConversationRequest,
  proto.conversation.JoinConversationResponse,
  /**
   * @param {!proto.conversation.JoinConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.JoinConversationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.JoinConversationRequest,
 *   !proto.conversation.JoinConversationResponse>}
 */
const methodInfo_ConversationService_JoinConversation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.JoinConversationResponse,
  /**
   * @param {!proto.conversation.JoinConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.JoinConversationResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.JoinConversationRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.JoinConversationResponse>}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.joinConversation =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/conversation.ConversationService/JoinConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_JoinConversation);
};


/**
 * @param {!proto.conversation.JoinConversationRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.JoinConversationResponse>}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServicePromiseClient.prototype.joinConversation =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/conversation.ConversationService/JoinConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_JoinConversation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.LeaveConversationRequest,
 *   !proto.conversation.LeaveConversationResponse>}
 */
const methodDescriptor_ConversationService_LeaveConversation = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/LeaveConversation',
  grpc.web.MethodType.UNARY,
  proto.conversation.LeaveConversationRequest,
  proto.conversation.LeaveConversationResponse,
  /**
   * @param {!proto.conversation.LeaveConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.LeaveConversationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.LeaveConversationRequest,
 *   !proto.conversation.LeaveConversationResponse>}
 */
const methodInfo_ConversationService_LeaveConversation = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.LeaveConversationResponse,
  /**
   * @param {!proto.conversation.LeaveConversationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.LeaveConversationResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.LeaveConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.LeaveConversationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.LeaveConversationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.leaveConversation =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/LeaveConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_LeaveConversation,
      callback);
};


/**
 * @param {!proto.conversation.LeaveConversationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.LeaveConversationResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.leaveConversation =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/LeaveConversation',
      request,
      metadata || {},
      methodDescriptor_ConversationService_LeaveConversation);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.GetCreatedConversationsRequest,
 *   !proto.conversation.GetCreatedConversationsResponse>}
 */
const methodDescriptor_ConversationService_GetCreatedConversations = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/GetCreatedConversations',
  grpc.web.MethodType.UNARY,
  proto.conversation.GetCreatedConversationsRequest,
  proto.conversation.GetCreatedConversationsResponse,
  /**
   * @param {!proto.conversation.GetCreatedConversationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.GetCreatedConversationsResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.GetCreatedConversationsRequest,
 *   !proto.conversation.GetCreatedConversationsResponse>}
 */
const methodInfo_ConversationService_GetCreatedConversations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.GetCreatedConversationsResponse,
  /**
   * @param {!proto.conversation.GetCreatedConversationsRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.GetCreatedConversationsResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.GetCreatedConversationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.GetCreatedConversationsResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.GetCreatedConversationsResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.getCreatedConversations =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/GetCreatedConversations',
      request,
      metadata || {},
      methodDescriptor_ConversationService_GetCreatedConversations,
      callback);
};


/**
 * @param {!proto.conversation.GetCreatedConversationsRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.GetCreatedConversationsResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.getCreatedConversations =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/GetCreatedConversations',
      request,
      metadata || {},
      methodDescriptor_ConversationService_GetCreatedConversations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.SendMessageRequest,
 *   !proto.conversation.SendMessageResponse>}
 */
const methodDescriptor_ConversationService_SendMessage = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/SendMessage',
  grpc.web.MethodType.UNARY,
  proto.conversation.SendMessageRequest,
  proto.conversation.SendMessageResponse,
  /**
   * @param {!proto.conversation.SendMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.SendMessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.SendMessageRequest,
 *   !proto.conversation.SendMessageResponse>}
 */
const methodInfo_ConversationService_SendMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.SendMessageResponse,
  /**
   * @param {!proto.conversation.SendMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.SendMessageResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.SendMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.SendMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.sendMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/SendMessage',
      request,
      metadata || {},
      methodDescriptor_ConversationService_SendMessage,
      callback);
};


/**
 * @param {!proto.conversation.SendMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.SendMessageResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.sendMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/SendMessage',
      request,
      metadata || {},
      methodDescriptor_ConversationService_SendMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.RevokeMessageRequest,
 *   !proto.conversation.RevokeMessageResponse>}
 */
const methodDescriptor_ConversationService_RevokeMessage = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/RevokeMessage',
  grpc.web.MethodType.UNARY,
  proto.conversation.RevokeMessageRequest,
  proto.conversation.RevokeMessageResponse,
  /**
   * @param {!proto.conversation.RevokeMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.RevokeMessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.RevokeMessageRequest,
 *   !proto.conversation.RevokeMessageResponse>}
 */
const methodInfo_ConversationService_RevokeMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.RevokeMessageResponse,
  /**
   * @param {!proto.conversation.RevokeMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.RevokeMessageResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.RevokeMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.RevokeMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.RevokeMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.revokeMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/RevokeMessage',
      request,
      metadata || {},
      methodDescriptor_ConversationService_RevokeMessage,
      callback);
};


/**
 * @param {!proto.conversation.RevokeMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.RevokeMessageResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.revokeMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/RevokeMessage',
      request,
      metadata || {},
      methodDescriptor_ConversationService_RevokeMessage);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.conversation.FindMessageRequest,
 *   !proto.conversation.FindMessageResponse>}
 */
const methodDescriptor_ConversationService_FindMessage = new grpc.web.MethodDescriptor(
  '/conversation.ConversationService/FindMessage',
  grpc.web.MethodType.UNARY,
  proto.conversation.FindMessageRequest,
  proto.conversation.FindMessageResponse,
  /**
   * @param {!proto.conversation.FindMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.FindMessageResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.conversation.FindMessageRequest,
 *   !proto.conversation.FindMessageResponse>}
 */
const methodInfo_ConversationService_FindMessage = new grpc.web.AbstractClientBase.MethodInfo(
  proto.conversation.FindMessageResponse,
  /**
   * @param {!proto.conversation.FindMessageRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.conversation.FindMessageResponse.deserializeBinary
);


/**
 * @param {!proto.conversation.FindMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.conversation.FindMessageResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.conversation.FindMessageResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.conversation.ConversationServiceClient.prototype.findMessage =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/conversation.ConversationService/FindMessage',
      request,
      metadata || {},
      methodDescriptor_ConversationService_FindMessage,
      callback);
};


/**
 * @param {!proto.conversation.FindMessageRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.conversation.FindMessageResponse>}
 *     Promise that resolves to the response
 */
proto.conversation.ConversationServicePromiseClient.prototype.findMessage =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/conversation.ConversationService/FindMessage',
      request,
      metadata || {},
      methodDescriptor_ConversationService_FindMessage);
};


module.exports = proto.conversation;

