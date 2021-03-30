/**
 * @fileoverview gRPC-Web generated client stub for storage
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.storage = require('./storage_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.storage.StorageServiceClient =
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
proto.storage.StorageServicePromiseClient =
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
 *   !proto.storage.StopRequest,
 *   !proto.storage.StopResponse>}
 */
const methodDescriptor_StorageService_Stop = new grpc.web.MethodDescriptor(
  '/storage.StorageService/Stop',
  grpc.web.MethodType.UNARY,
  proto.storage.StopRequest,
  proto.storage.StopResponse,
  /**
   * @param {!proto.storage.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.StopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.StopRequest,
 *   !proto.storage.StopResponse>}
 */
const methodInfo_StorageService_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.StopResponse,
  /**
   * @param {!proto.storage.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.StopResponse.deserializeBinary
);


/**
 * @param {!proto.storage.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.StorageService/Stop',
      request,
      metadata || {},
      methodDescriptor_StorageService_Stop,
      callback);
};


/**
 * @param {!proto.storage.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.StopResponse>}
 *     A native promise that resolves to the response
 */
proto.storage.StorageServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.StorageService/Stop',
      request,
      metadata || {},
      methodDescriptor_StorageService_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.storage.OpenRqst,
 *   !proto.storage.OpenRsp>}
 */
const methodDescriptor_StorageService_Open = new grpc.web.MethodDescriptor(
  '/storage.StorageService/Open',
  grpc.web.MethodType.UNARY,
  proto.storage.OpenRqst,
  proto.storage.OpenRsp,
  /**
   * @param {!proto.storage.OpenRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.OpenRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.OpenRqst,
 *   !proto.storage.OpenRsp>}
 */
const methodInfo_StorageService_Open = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.OpenRsp,
  /**
   * @param {!proto.storage.OpenRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.OpenRsp.deserializeBinary
);


/**
 * @param {!proto.storage.OpenRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.OpenRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.OpenRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.open =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.StorageService/Open',
      request,
      metadata || {},
      methodDescriptor_StorageService_Open,
      callback);
};


/**
 * @param {!proto.storage.OpenRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.OpenRsp>}
 *     A native promise that resolves to the response
 */
proto.storage.StorageServicePromiseClient.prototype.open =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.StorageService/Open',
      request,
      metadata || {},
      methodDescriptor_StorageService_Open);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.storage.CloseRqst,
 *   !proto.storage.CloseRsp>}
 */
const methodDescriptor_StorageService_Close = new grpc.web.MethodDescriptor(
  '/storage.StorageService/Close',
  grpc.web.MethodType.UNARY,
  proto.storage.CloseRqst,
  proto.storage.CloseRsp,
  /**
   * @param {!proto.storage.CloseRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.CloseRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.CloseRqst,
 *   !proto.storage.CloseRsp>}
 */
const methodInfo_StorageService_Close = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.CloseRsp,
  /**
   * @param {!proto.storage.CloseRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.CloseRsp.deserializeBinary
);


/**
 * @param {!proto.storage.CloseRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.CloseRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.CloseRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.close =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.StorageService/Close',
      request,
      metadata || {},
      methodDescriptor_StorageService_Close,
      callback);
};


/**
 * @param {!proto.storage.CloseRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.CloseRsp>}
 *     A native promise that resolves to the response
 */
proto.storage.StorageServicePromiseClient.prototype.close =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.StorageService/Close',
      request,
      metadata || {},
      methodDescriptor_StorageService_Close);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.storage.CreateConnectionRqst,
 *   !proto.storage.CreateConnectionRsp>}
 */
const methodDescriptor_StorageService_CreateConnection = new grpc.web.MethodDescriptor(
  '/storage.StorageService/CreateConnection',
  grpc.web.MethodType.UNARY,
  proto.storage.CreateConnectionRqst,
  proto.storage.CreateConnectionRsp,
  /**
   * @param {!proto.storage.CreateConnectionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.CreateConnectionRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.CreateConnectionRqst,
 *   !proto.storage.CreateConnectionRsp>}
 */
const methodInfo_StorageService_CreateConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.CreateConnectionRsp,
  /**
   * @param {!proto.storage.CreateConnectionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.CreateConnectionRsp.deserializeBinary
);


/**
 * @param {!proto.storage.CreateConnectionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.CreateConnectionRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.CreateConnectionRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.createConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.StorageService/CreateConnection',
      request,
      metadata || {},
      methodDescriptor_StorageService_CreateConnection,
      callback);
};


/**
 * @param {!proto.storage.CreateConnectionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.CreateConnectionRsp>}
 *     A native promise that resolves to the response
 */
proto.storage.StorageServicePromiseClient.prototype.createConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.StorageService/CreateConnection',
      request,
      metadata || {},
      methodDescriptor_StorageService_CreateConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.storage.DeleteConnectionRqst,
 *   !proto.storage.DeleteConnectionRsp>}
 */
const methodDescriptor_StorageService_DeleteConnection = new grpc.web.MethodDescriptor(
  '/storage.StorageService/DeleteConnection',
  grpc.web.MethodType.UNARY,
  proto.storage.DeleteConnectionRqst,
  proto.storage.DeleteConnectionRsp,
  /**
   * @param {!proto.storage.DeleteConnectionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.DeleteConnectionRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.DeleteConnectionRqst,
 *   !proto.storage.DeleteConnectionRsp>}
 */
const methodInfo_StorageService_DeleteConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.DeleteConnectionRsp,
  /**
   * @param {!proto.storage.DeleteConnectionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.DeleteConnectionRsp.deserializeBinary
);


/**
 * @param {!proto.storage.DeleteConnectionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.DeleteConnectionRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.DeleteConnectionRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.deleteConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.StorageService/DeleteConnection',
      request,
      metadata || {},
      methodDescriptor_StorageService_DeleteConnection,
      callback);
};


/**
 * @param {!proto.storage.DeleteConnectionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.DeleteConnectionRsp>}
 *     A native promise that resolves to the response
 */
proto.storage.StorageServicePromiseClient.prototype.deleteConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.StorageService/DeleteConnection',
      request,
      metadata || {},
      methodDescriptor_StorageService_DeleteConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.storage.SetItemRequest,
 *   !proto.storage.SetItemResponse>}
 */
const methodDescriptor_StorageService_SetItem = new grpc.web.MethodDescriptor(
  '/storage.StorageService/SetItem',
  grpc.web.MethodType.UNARY,
  proto.storage.SetItemRequest,
  proto.storage.SetItemResponse,
  /**
   * @param {!proto.storage.SetItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.SetItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.SetItemRequest,
 *   !proto.storage.SetItemResponse>}
 */
const methodInfo_StorageService_SetItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.SetItemResponse,
  /**
   * @param {!proto.storage.SetItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.SetItemResponse.deserializeBinary
);


/**
 * @param {!proto.storage.SetItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.SetItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.SetItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.setItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.StorageService/SetItem',
      request,
      metadata || {},
      methodDescriptor_StorageService_SetItem,
      callback);
};


/**
 * @param {!proto.storage.SetItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.SetItemResponse>}
 *     A native promise that resolves to the response
 */
proto.storage.StorageServicePromiseClient.prototype.setItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.StorageService/SetItem',
      request,
      metadata || {},
      methodDescriptor_StorageService_SetItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.storage.GetItemRequest,
 *   !proto.storage.GetItemResponse>}
 */
const methodDescriptor_StorageService_GetItem = new grpc.web.MethodDescriptor(
  '/storage.StorageService/GetItem',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.storage.GetItemRequest,
  proto.storage.GetItemResponse,
  /**
   * @param {!proto.storage.GetItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.GetItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.GetItemRequest,
 *   !proto.storage.GetItemResponse>}
 */
const methodInfo_StorageService_GetItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.GetItemResponse,
  /**
   * @param {!proto.storage.GetItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.GetItemResponse.deserializeBinary
);


/**
 * @param {!proto.storage.GetItemRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.storage.GetItemResponse>}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.getItem =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/storage.StorageService/GetItem',
      request,
      metadata || {},
      methodDescriptor_StorageService_GetItem);
};


/**
 * @param {!proto.storage.GetItemRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.storage.GetItemResponse>}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServicePromiseClient.prototype.getItem =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/storage.StorageService/GetItem',
      request,
      metadata || {},
      methodDescriptor_StorageService_GetItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.storage.RemoveItemRequest,
 *   !proto.storage.RemoveItemResponse>}
 */
const methodDescriptor_StorageService_RemoveItem = new grpc.web.MethodDescriptor(
  '/storage.StorageService/RemoveItem',
  grpc.web.MethodType.UNARY,
  proto.storage.RemoveItemRequest,
  proto.storage.RemoveItemResponse,
  /**
   * @param {!proto.storage.RemoveItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.RemoveItemResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.RemoveItemRequest,
 *   !proto.storage.RemoveItemResponse>}
 */
const methodInfo_StorageService_RemoveItem = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.RemoveItemResponse,
  /**
   * @param {!proto.storage.RemoveItemRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.RemoveItemResponse.deserializeBinary
);


/**
 * @param {!proto.storage.RemoveItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.RemoveItemResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.RemoveItemResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.removeItem =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.StorageService/RemoveItem',
      request,
      metadata || {},
      methodDescriptor_StorageService_RemoveItem,
      callback);
};


/**
 * @param {!proto.storage.RemoveItemRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.RemoveItemResponse>}
 *     A native promise that resolves to the response
 */
proto.storage.StorageServicePromiseClient.prototype.removeItem =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.StorageService/RemoveItem',
      request,
      metadata || {},
      methodDescriptor_StorageService_RemoveItem);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.storage.ClearRequest,
 *   !proto.storage.ClearResponse>}
 */
const methodDescriptor_StorageService_Clear = new grpc.web.MethodDescriptor(
  '/storage.StorageService/Clear',
  grpc.web.MethodType.UNARY,
  proto.storage.ClearRequest,
  proto.storage.ClearResponse,
  /**
   * @param {!proto.storage.ClearRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.ClearResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.ClearRequest,
 *   !proto.storage.ClearResponse>}
 */
const methodInfo_StorageService_Clear = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.ClearResponse,
  /**
   * @param {!proto.storage.ClearRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.ClearResponse.deserializeBinary
);


/**
 * @param {!proto.storage.ClearRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.ClearResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.ClearResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.clear =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.StorageService/Clear',
      request,
      metadata || {},
      methodDescriptor_StorageService_Clear,
      callback);
};


/**
 * @param {!proto.storage.ClearRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.ClearResponse>}
 *     A native promise that resolves to the response
 */
proto.storage.StorageServicePromiseClient.prototype.clear =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.StorageService/Clear',
      request,
      metadata || {},
      methodDescriptor_StorageService_Clear);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.storage.DropRequest,
 *   !proto.storage.DropResponse>}
 */
const methodDescriptor_StorageService_Drop = new grpc.web.MethodDescriptor(
  '/storage.StorageService/Drop',
  grpc.web.MethodType.UNARY,
  proto.storage.DropRequest,
  proto.storage.DropResponse,
  /**
   * @param {!proto.storage.DropRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.DropResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.storage.DropRequest,
 *   !proto.storage.DropResponse>}
 */
const methodInfo_StorageService_Drop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.storage.DropResponse,
  /**
   * @param {!proto.storage.DropRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.storage.DropResponse.deserializeBinary
);


/**
 * @param {!proto.storage.DropRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.storage.DropResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.storage.DropResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.storage.StorageServiceClient.prototype.drop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/storage.StorageService/Drop',
      request,
      metadata || {},
      methodDescriptor_StorageService_Drop,
      callback);
};


/**
 * @param {!proto.storage.DropRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.storage.DropResponse>}
 *     A native promise that resolves to the response
 */
proto.storage.StorageServicePromiseClient.prototype.drop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/storage.StorageService/Drop',
      request,
      metadata || {},
      methodDescriptor_StorageService_Drop);
};


module.exports = proto.storage;

