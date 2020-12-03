/**
 * @fileoverview gRPC-Web generated client stub for admin
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.admin = require('./admin_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.admin.AdminServiceClient =
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
proto.admin.AdminServicePromiseClient =
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
 *   !proto.admin.SetRootPasswordRequest,
 *   !proto.admin.SetRootPasswordResponse>}
 */
const methodDescriptor_AdminService_SetRootPassword = new grpc.web.MethodDescriptor(
  '/admin.AdminService/SetRootPassword',
  grpc.web.MethodType.UNARY,
  proto.admin.SetRootPasswordRequest,
  proto.admin.SetRootPasswordResponse,
  /**
   * @param {!proto.admin.SetRootPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SetRootPasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.SetRootPasswordRequest,
 *   !proto.admin.SetRootPasswordResponse>}
 */
const methodInfo_AdminService_SetRootPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.SetRootPasswordResponse,
  /**
   * @param {!proto.admin.SetRootPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SetRootPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.admin.SetRootPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.SetRootPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.SetRootPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.setRootPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/SetRootPassword',
      request,
      metadata || {},
      methodDescriptor_AdminService_SetRootPassword,
      callback);
};


/**
 * @param {!proto.admin.SetRootPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.SetRootPasswordResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.setRootPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/SetRootPassword',
      request,
      metadata || {},
      methodDescriptor_AdminService_SetRootPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.SetRootEmailRequest,
 *   !proto.admin.SetRootEmailResponse>}
 */
const methodDescriptor_AdminService_SetRootEmail = new grpc.web.MethodDescriptor(
  '/admin.AdminService/SetRootEmail',
  grpc.web.MethodType.UNARY,
  proto.admin.SetRootEmailRequest,
  proto.admin.SetRootEmailResponse,
  /**
   * @param {!proto.admin.SetRootEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SetRootEmailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.SetRootEmailRequest,
 *   !proto.admin.SetRootEmailResponse>}
 */
const methodInfo_AdminService_SetRootEmail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.SetRootEmailResponse,
  /**
   * @param {!proto.admin.SetRootEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SetRootEmailResponse.deserializeBinary
);


/**
 * @param {!proto.admin.SetRootEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.SetRootEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.SetRootEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.setRootEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/SetRootEmail',
      request,
      metadata || {},
      methodDescriptor_AdminService_SetRootEmail,
      callback);
};


/**
 * @param {!proto.admin.SetRootEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.SetRootEmailResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.setRootEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/SetRootEmail',
      request,
      metadata || {},
      methodDescriptor_AdminService_SetRootEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.SetPasswordRequest,
 *   !proto.admin.SetPasswordResponse>}
 */
const methodDescriptor_AdminService_SetPassword = new grpc.web.MethodDescriptor(
  '/admin.AdminService/SetPassword',
  grpc.web.MethodType.UNARY,
  proto.admin.SetPasswordRequest,
  proto.admin.SetPasswordResponse,
  /**
   * @param {!proto.admin.SetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SetPasswordResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.SetPasswordRequest,
 *   !proto.admin.SetPasswordResponse>}
 */
const methodInfo_AdminService_SetPassword = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.SetPasswordResponse,
  /**
   * @param {!proto.admin.SetPasswordRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SetPasswordResponse.deserializeBinary
);


/**
 * @param {!proto.admin.SetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.SetPasswordResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.SetPasswordResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.setPassword =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/SetPassword',
      request,
      metadata || {},
      methodDescriptor_AdminService_SetPassword,
      callback);
};


/**
 * @param {!proto.admin.SetPasswordRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.SetPasswordResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.setPassword =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/SetPassword',
      request,
      metadata || {},
      methodDescriptor_AdminService_SetPassword);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.SetEmailRequest,
 *   !proto.admin.SetEmailResponse>}
 */
const methodDescriptor_AdminService_SetEmail = new grpc.web.MethodDescriptor(
  '/admin.AdminService/SetEmail',
  grpc.web.MethodType.UNARY,
  proto.admin.SetEmailRequest,
  proto.admin.SetEmailResponse,
  /**
   * @param {!proto.admin.SetEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SetEmailResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.SetEmailRequest,
 *   !proto.admin.SetEmailResponse>}
 */
const methodInfo_AdminService_SetEmail = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.SetEmailResponse,
  /**
   * @param {!proto.admin.SetEmailRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SetEmailResponse.deserializeBinary
);


/**
 * @param {!proto.admin.SetEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.SetEmailResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.SetEmailResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.setEmail =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/SetEmail',
      request,
      metadata || {},
      methodDescriptor_AdminService_SetEmail,
      callback);
};


/**
 * @param {!proto.admin.SetEmailRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.SetEmailResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.setEmail =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/SetEmail',
      request,
      metadata || {},
      methodDescriptor_AdminService_SetEmail);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.GetConfigRequest,
 *   !proto.admin.GetConfigResponse>}
 */
const methodDescriptor_AdminService_GetConfig = new grpc.web.MethodDescriptor(
  '/admin.AdminService/GetConfig',
  grpc.web.MethodType.UNARY,
  proto.admin.GetConfigRequest,
  proto.admin.GetConfigResponse,
  /**
   * @param {!proto.admin.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.GetConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.GetConfigRequest,
 *   !proto.admin.GetConfigResponse>}
 */
const methodInfo_AdminService_GetConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.GetConfigResponse,
  /**
   * @param {!proto.admin.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.GetConfigResponse.deserializeBinary
);


/**
 * @param {!proto.admin.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.GetConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.GetConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.getConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/GetConfig',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetConfig,
      callback);
};


/**
 * @param {!proto.admin.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.GetConfigResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.getConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/GetConfig',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.GetConfigRequest,
 *   !proto.admin.GetConfigResponse>}
 */
const methodDescriptor_AdminService_GetFullConfig = new grpc.web.MethodDescriptor(
  '/admin.AdminService/GetFullConfig',
  grpc.web.MethodType.UNARY,
  proto.admin.GetConfigRequest,
  proto.admin.GetConfigResponse,
  /**
   * @param {!proto.admin.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.GetConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.GetConfigRequest,
 *   !proto.admin.GetConfigResponse>}
 */
const methodInfo_AdminService_GetFullConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.GetConfigResponse,
  /**
   * @param {!proto.admin.GetConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.GetConfigResponse.deserializeBinary
);


/**
 * @param {!proto.admin.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.GetConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.GetConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.getFullConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/GetFullConfig',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetFullConfig,
      callback);
};


/**
 * @param {!proto.admin.GetConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.GetConfigResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.getFullConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/GetFullConfig',
      request,
      metadata || {},
      methodDescriptor_AdminService_GetFullConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.SaveConfigRequest,
 *   !proto.admin.SaveConfigResponse>}
 */
const methodDescriptor_AdminService_SaveConfig = new grpc.web.MethodDescriptor(
  '/admin.AdminService/SaveConfig',
  grpc.web.MethodType.UNARY,
  proto.admin.SaveConfigRequest,
  proto.admin.SaveConfigResponse,
  /**
   * @param {!proto.admin.SaveConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SaveConfigResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.SaveConfigRequest,
 *   !proto.admin.SaveConfigResponse>}
 */
const methodInfo_AdminService_SaveConfig = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.SaveConfigResponse,
  /**
   * @param {!proto.admin.SaveConfigRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.SaveConfigResponse.deserializeBinary
);


/**
 * @param {!proto.admin.SaveConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.SaveConfigResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.SaveConfigResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.saveConfig =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/SaveConfig',
      request,
      metadata || {},
      methodDescriptor_AdminService_SaveConfig,
      callback);
};


/**
 * @param {!proto.admin.SaveConfigRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.SaveConfigResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.saveConfig =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/SaveConfig',
      request,
      metadata || {},
      methodDescriptor_AdminService_SaveConfig);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.StopServiceRequest,
 *   !proto.admin.StopServiceResponse>}
 */
const methodDescriptor_AdminService_StopService = new grpc.web.MethodDescriptor(
  '/admin.AdminService/StopService',
  grpc.web.MethodType.UNARY,
  proto.admin.StopServiceRequest,
  proto.admin.StopServiceResponse,
  /**
   * @param {!proto.admin.StopServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.StopServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.StopServiceRequest,
 *   !proto.admin.StopServiceResponse>}
 */
const methodInfo_AdminService_StopService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.StopServiceResponse,
  /**
   * @param {!proto.admin.StopServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.StopServiceResponse.deserializeBinary
);


/**
 * @param {!proto.admin.StopServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.StopServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.StopServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.stopService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/StopService',
      request,
      metadata || {},
      methodDescriptor_AdminService_StopService,
      callback);
};


/**
 * @param {!proto.admin.StopServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.StopServiceResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.stopService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/StopService',
      request,
      metadata || {},
      methodDescriptor_AdminService_StopService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.StartServiceRequest,
 *   !proto.admin.StartServiceResponse>}
 */
const methodDescriptor_AdminService_StartService = new grpc.web.MethodDescriptor(
  '/admin.AdminService/StartService',
  grpc.web.MethodType.UNARY,
  proto.admin.StartServiceRequest,
  proto.admin.StartServiceResponse,
  /**
   * @param {!proto.admin.StartServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.StartServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.StartServiceRequest,
 *   !proto.admin.StartServiceResponse>}
 */
const methodInfo_AdminService_StartService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.StartServiceResponse,
  /**
   * @param {!proto.admin.StartServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.StartServiceResponse.deserializeBinary
);


/**
 * @param {!proto.admin.StartServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.StartServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.StartServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.startService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/StartService',
      request,
      metadata || {},
      methodDescriptor_AdminService_StartService,
      callback);
};


/**
 * @param {!proto.admin.StartServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.StartServiceResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.startService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/StartService',
      request,
      metadata || {},
      methodDescriptor_AdminService_StartService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.RestartServicesRequest,
 *   !proto.admin.RestartServicesResponse>}
 */
const methodDescriptor_AdminService_RestartServices = new grpc.web.MethodDescriptor(
  '/admin.AdminService/RestartServices',
  grpc.web.MethodType.UNARY,
  proto.admin.RestartServicesRequest,
  proto.admin.RestartServicesResponse,
  /**
   * @param {!proto.admin.RestartServicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.RestartServicesResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.RestartServicesRequest,
 *   !proto.admin.RestartServicesResponse>}
 */
const methodInfo_AdminService_RestartServices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.RestartServicesResponse,
  /**
   * @param {!proto.admin.RestartServicesRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.RestartServicesResponse.deserializeBinary
);


/**
 * @param {!proto.admin.RestartServicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.RestartServicesResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.RestartServicesResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.restartServices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/RestartServices',
      request,
      metadata || {},
      methodDescriptor_AdminService_RestartServices,
      callback);
};


/**
 * @param {!proto.admin.RestartServicesRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.RestartServicesResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.restartServices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/RestartServices',
      request,
      metadata || {},
      methodDescriptor_AdminService_RestartServices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.PublishServiceRequest,
 *   !proto.admin.PublishServiceResponse>}
 */
const methodDescriptor_AdminService_PublishService = new grpc.web.MethodDescriptor(
  '/admin.AdminService/PublishService',
  grpc.web.MethodType.UNARY,
  proto.admin.PublishServiceRequest,
  proto.admin.PublishServiceResponse,
  /**
   * @param {!proto.admin.PublishServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.PublishServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.PublishServiceRequest,
 *   !proto.admin.PublishServiceResponse>}
 */
const methodInfo_AdminService_PublishService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.PublishServiceResponse,
  /**
   * @param {!proto.admin.PublishServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.PublishServiceResponse.deserializeBinary
);


/**
 * @param {!proto.admin.PublishServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.PublishServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.PublishServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.publishService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/PublishService',
      request,
      metadata || {},
      methodDescriptor_AdminService_PublishService,
      callback);
};


/**
 * @param {!proto.admin.PublishServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.PublishServiceResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.publishService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/PublishService',
      request,
      metadata || {},
      methodDescriptor_AdminService_PublishService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.InstallServiceRequest,
 *   !proto.admin.InstallServiceResponse>}
 */
const methodDescriptor_AdminService_InstallService = new grpc.web.MethodDescriptor(
  '/admin.AdminService/InstallService',
  grpc.web.MethodType.UNARY,
  proto.admin.InstallServiceRequest,
  proto.admin.InstallServiceResponse,
  /**
   * @param {!proto.admin.InstallServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.InstallServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.InstallServiceRequest,
 *   !proto.admin.InstallServiceResponse>}
 */
const methodInfo_AdminService_InstallService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.InstallServiceResponse,
  /**
   * @param {!proto.admin.InstallServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.InstallServiceResponse.deserializeBinary
);


/**
 * @param {!proto.admin.InstallServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.InstallServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.InstallServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.installService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/InstallService',
      request,
      metadata || {},
      methodDescriptor_AdminService_InstallService,
      callback);
};


/**
 * @param {!proto.admin.InstallServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.InstallServiceResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.installService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/InstallService',
      request,
      metadata || {},
      methodDescriptor_AdminService_InstallService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.UninstallServiceRequest,
 *   !proto.admin.UninstallServiceResponse>}
 */
const methodDescriptor_AdminService_UninstallService = new grpc.web.MethodDescriptor(
  '/admin.AdminService/UninstallService',
  grpc.web.MethodType.UNARY,
  proto.admin.UninstallServiceRequest,
  proto.admin.UninstallServiceResponse,
  /**
   * @param {!proto.admin.UninstallServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.UninstallServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.UninstallServiceRequest,
 *   !proto.admin.UninstallServiceResponse>}
 */
const methodInfo_AdminService_UninstallService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.UninstallServiceResponse,
  /**
   * @param {!proto.admin.UninstallServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.UninstallServiceResponse.deserializeBinary
);


/**
 * @param {!proto.admin.UninstallServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.UninstallServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.UninstallServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.uninstallService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/UninstallService',
      request,
      metadata || {},
      methodDescriptor_AdminService_UninstallService,
      callback);
};


/**
 * @param {!proto.admin.UninstallServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.UninstallServiceResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.uninstallService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/UninstallService',
      request,
      metadata || {},
      methodDescriptor_AdminService_UninstallService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.RegisterExternalApplicationRequest,
 *   !proto.admin.RegisterExternalApplicationResponse>}
 */
const methodDescriptor_AdminService_RegisterExternalApplication = new grpc.web.MethodDescriptor(
  '/admin.AdminService/RegisterExternalApplication',
  grpc.web.MethodType.UNARY,
  proto.admin.RegisterExternalApplicationRequest,
  proto.admin.RegisterExternalApplicationResponse,
  /**
   * @param {!proto.admin.RegisterExternalApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.RegisterExternalApplicationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.RegisterExternalApplicationRequest,
 *   !proto.admin.RegisterExternalApplicationResponse>}
 */
const methodInfo_AdminService_RegisterExternalApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.RegisterExternalApplicationResponse,
  /**
   * @param {!proto.admin.RegisterExternalApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.RegisterExternalApplicationResponse.deserializeBinary
);


/**
 * @param {!proto.admin.RegisterExternalApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.RegisterExternalApplicationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.RegisterExternalApplicationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.registerExternalApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/RegisterExternalApplication',
      request,
      metadata || {},
      methodDescriptor_AdminService_RegisterExternalApplication,
      callback);
};


/**
 * @param {!proto.admin.RegisterExternalApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.RegisterExternalApplicationResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.registerExternalApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/RegisterExternalApplication',
      request,
      metadata || {},
      methodDescriptor_AdminService_RegisterExternalApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.admin.HasRunningProcessRequest,
 *   !proto.admin.HasRunningProcessResponse>}
 */
const methodDescriptor_AdminService_HasRunningProcess = new grpc.web.MethodDescriptor(
  '/admin.AdminService/HasRunningProcess',
  grpc.web.MethodType.UNARY,
  proto.admin.HasRunningProcessRequest,
  proto.admin.HasRunningProcessResponse,
  /**
   * @param {!proto.admin.HasRunningProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.HasRunningProcessResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.admin.HasRunningProcessRequest,
 *   !proto.admin.HasRunningProcessResponse>}
 */
const methodInfo_AdminService_HasRunningProcess = new grpc.web.AbstractClientBase.MethodInfo(
  proto.admin.HasRunningProcessResponse,
  /**
   * @param {!proto.admin.HasRunningProcessRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.admin.HasRunningProcessResponse.deserializeBinary
);


/**
 * @param {!proto.admin.HasRunningProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.admin.HasRunningProcessResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.admin.HasRunningProcessResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.admin.AdminServiceClient.prototype.hasRunningProcess =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/admin.AdminService/HasRunningProcess',
      request,
      metadata || {},
      methodDescriptor_AdminService_HasRunningProcess,
      callback);
};


/**
 * @param {!proto.admin.HasRunningProcessRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.admin.HasRunningProcessResponse>}
 *     Promise that resolves to the response
 */
proto.admin.AdminServicePromiseClient.prototype.hasRunningProcess =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/admin.AdminService/HasRunningProcess',
      request,
      metadata || {},
      methodDescriptor_AdminService_HasRunningProcess);
};


module.exports = proto.admin;

