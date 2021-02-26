/**
 * @fileoverview gRPC-Web generated client stub for resource
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var google_protobuf_struct_pb = require('google-protobuf/google/protobuf/struct_pb.js')
const proto = {};
proto.resource = require('./resource_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.resource.ResourceServiceClient =
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
proto.resource.ResourceServicePromiseClient =
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
 *   !proto.resource.GetAllActionsRqst,
 *   !proto.resource.GetAllActionsRsp>}
 */
const methodDescriptor_ResourceService_GetAllActions = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/GetAllActions',
  grpc.web.MethodType.UNARY,
  proto.resource.GetAllActionsRqst,
  proto.resource.GetAllActionsRsp,
  /**
   * @param {!proto.resource.GetAllActionsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetAllActionsRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.GetAllActionsRqst,
 *   !proto.resource.GetAllActionsRsp>}
 */
const methodInfo_ResourceService_GetAllActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.GetAllActionsRsp,
  /**
   * @param {!proto.resource.GetAllActionsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetAllActionsRsp.deserializeBinary
);


/**
 * @param {!proto.resource.GetAllActionsRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.GetAllActionsRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetAllActionsRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.getAllActions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/GetAllActions',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetAllActions,
      callback);
};


/**
 * @param {!proto.resource.GetAllActionsRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.GetAllActionsRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.getAllActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/GetAllActions',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetAllActions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.ValidateTokenRqst,
 *   !proto.resource.ValidateTokenRsp>}
 */
const methodDescriptor_ResourceService_ValidateToken = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/ValidateToken',
  grpc.web.MethodType.UNARY,
  proto.resource.ValidateTokenRqst,
  proto.resource.ValidateTokenRsp,
  /**
   * @param {!proto.resource.ValidateTokenRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.ValidateTokenRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.ValidateTokenRqst,
 *   !proto.resource.ValidateTokenRsp>}
 */
const methodInfo_ResourceService_ValidateToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.ValidateTokenRsp,
  /**
   * @param {!proto.resource.ValidateTokenRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.ValidateTokenRsp.deserializeBinary
);


/**
 * @param {!proto.resource.ValidateTokenRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.ValidateTokenRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.ValidateTokenRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.validateToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/ValidateToken',
      request,
      metadata || {},
      methodDescriptor_ResourceService_ValidateToken,
      callback);
};


/**
 * @param {!proto.resource.ValidateTokenRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.ValidateTokenRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.validateToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/ValidateToken',
      request,
      metadata || {},
      methodDescriptor_ResourceService_ValidateToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RefreshTokenRqst,
 *   !proto.resource.RefreshTokenRsp>}
 */
const methodDescriptor_ResourceService_RefreshToken = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RefreshToken',
  grpc.web.MethodType.UNARY,
  proto.resource.RefreshTokenRqst,
  proto.resource.RefreshTokenRsp,
  /**
   * @param {!proto.resource.RefreshTokenRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RefreshTokenRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RefreshTokenRqst,
 *   !proto.resource.RefreshTokenRsp>}
 */
const methodInfo_ResourceService_RefreshToken = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RefreshTokenRsp,
  /**
   * @param {!proto.resource.RefreshTokenRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RefreshTokenRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RefreshTokenRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RefreshTokenRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RefreshTokenRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.refreshToken =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RefreshToken,
      callback);
};


/**
 * @param {!proto.resource.RefreshTokenRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RefreshTokenRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.refreshToken =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RefreshToken',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RefreshToken);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AuthenticateRqst,
 *   !proto.resource.AuthenticateRsp>}
 */
const methodDescriptor_ResourceService_Authenticate = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/Authenticate',
  grpc.web.MethodType.UNARY,
  proto.resource.AuthenticateRqst,
  proto.resource.AuthenticateRsp,
  /**
   * @param {!proto.resource.AuthenticateRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AuthenticateRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AuthenticateRqst,
 *   !proto.resource.AuthenticateRsp>}
 */
const methodInfo_ResourceService_Authenticate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AuthenticateRsp,
  /**
   * @param {!proto.resource.AuthenticateRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AuthenticateRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AuthenticateRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AuthenticateRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AuthenticateRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.authenticate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_ResourceService_Authenticate,
      callback);
};


/**
 * @param {!proto.resource.AuthenticateRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AuthenticateRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.authenticate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_ResourceService_Authenticate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.SynchronizeLdapRqst,
 *   !proto.resource.SynchronizeLdapRsp>}
 */
const methodDescriptor_ResourceService_SynchronizeLdap = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/SynchronizeLdap',
  grpc.web.MethodType.UNARY,
  proto.resource.SynchronizeLdapRqst,
  proto.resource.SynchronizeLdapRsp,
  /**
   * @param {!proto.resource.SynchronizeLdapRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.SynchronizeLdapRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.SynchronizeLdapRqst,
 *   !proto.resource.SynchronizeLdapRsp>}
 */
const methodInfo_ResourceService_SynchronizeLdap = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.SynchronizeLdapRsp,
  /**
   * @param {!proto.resource.SynchronizeLdapRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.SynchronizeLdapRsp.deserializeBinary
);


/**
 * @param {!proto.resource.SynchronizeLdapRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.SynchronizeLdapRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.SynchronizeLdapRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.synchronizeLdap =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/SynchronizeLdap',
      request,
      metadata || {},
      methodDescriptor_ResourceService_SynchronizeLdap,
      callback);
};


/**
 * @param {!proto.resource.SynchronizeLdapRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.SynchronizeLdapRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.synchronizeLdap =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/SynchronizeLdap',
      request,
      metadata || {},
      methodDescriptor_ResourceService_SynchronizeLdap);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.CreateOrganizationRqst,
 *   !proto.resource.CreateOrganizationRsp>}
 */
const methodDescriptor_ResourceService_CreateOrganization = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/CreateOrganization',
  grpc.web.MethodType.UNARY,
  proto.resource.CreateOrganizationRqst,
  proto.resource.CreateOrganizationRsp,
  /**
   * @param {!proto.resource.CreateOrganizationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.CreateOrganizationRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.CreateOrganizationRqst,
 *   !proto.resource.CreateOrganizationRsp>}
 */
const methodInfo_ResourceService_CreateOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.CreateOrganizationRsp,
  /**
   * @param {!proto.resource.CreateOrganizationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.CreateOrganizationRsp.deserializeBinary
);


/**
 * @param {!proto.resource.CreateOrganizationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.CreateOrganizationRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.CreateOrganizationRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.createOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_ResourceService_CreateOrganization,
      callback);
};


/**
 * @param {!proto.resource.CreateOrganizationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.CreateOrganizationRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.createOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/CreateOrganization',
      request,
      metadata || {},
      methodDescriptor_ResourceService_CreateOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.GetOrganizationsRqst,
 *   !proto.resource.GetOrganizationsRsp>}
 */
const methodDescriptor_ResourceService_GetOrganizations = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/GetOrganizations',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.resource.GetOrganizationsRqst,
  proto.resource.GetOrganizationsRsp,
  /**
   * @param {!proto.resource.GetOrganizationsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetOrganizationsRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.GetOrganizationsRqst,
 *   !proto.resource.GetOrganizationsRsp>}
 */
const methodInfo_ResourceService_GetOrganizations = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.GetOrganizationsRsp,
  /**
   * @param {!proto.resource.GetOrganizationsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetOrganizationsRsp.deserializeBinary
);


/**
 * @param {!proto.resource.GetOrganizationsRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetOrganizationsRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.getOrganizations =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetOrganizations',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetOrganizations);
};


/**
 * @param {!proto.resource.GetOrganizationsRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetOrganizationsRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServicePromiseClient.prototype.getOrganizations =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetOrganizations',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetOrganizations);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.DeleteOrganizationRqst,
 *   !proto.resource.DeleteOrganizationRsp>}
 */
const methodDescriptor_ResourceService_DeleteOrganization = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/DeleteOrganization',
  grpc.web.MethodType.UNARY,
  proto.resource.DeleteOrganizationRqst,
  proto.resource.DeleteOrganizationRsp,
  /**
   * @param {!proto.resource.DeleteOrganizationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteOrganizationRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.DeleteOrganizationRqst,
 *   !proto.resource.DeleteOrganizationRsp>}
 */
const methodInfo_ResourceService_DeleteOrganization = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.DeleteOrganizationRsp,
  /**
   * @param {!proto.resource.DeleteOrganizationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteOrganizationRsp.deserializeBinary
);


/**
 * @param {!proto.resource.DeleteOrganizationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.DeleteOrganizationRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.DeleteOrganizationRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.deleteOrganization =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/DeleteOrganization',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteOrganization,
      callback);
};


/**
 * @param {!proto.resource.DeleteOrganizationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.DeleteOrganizationRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.deleteOrganization =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/DeleteOrganization',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteOrganization);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddOrganizationAccountRqst,
 *   !proto.resource.AddOrganizationAccountRsp>}
 */
const methodDescriptor_ResourceService_AddOrganizationAccount = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddOrganizationAccount',
  grpc.web.MethodType.UNARY,
  proto.resource.AddOrganizationAccountRqst,
  proto.resource.AddOrganizationAccountRsp,
  /**
   * @param {!proto.resource.AddOrganizationAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddOrganizationAccountRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddOrganizationAccountRqst,
 *   !proto.resource.AddOrganizationAccountRsp>}
 */
const methodInfo_ResourceService_AddOrganizationAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddOrganizationAccountRsp,
  /**
   * @param {!proto.resource.AddOrganizationAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddOrganizationAccountRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddOrganizationAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddOrganizationAccountRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddOrganizationAccountRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addOrganizationAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddOrganizationAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddOrganizationAccount,
      callback);
};


/**
 * @param {!proto.resource.AddOrganizationAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddOrganizationAccountRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addOrganizationAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddOrganizationAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddOrganizationAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddOrganizationGroupRqst,
 *   !proto.resource.AddOrganizationGroupRsp>}
 */
const methodDescriptor_ResourceService_AddOrganizationGroup = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddOrganizationGroup',
  grpc.web.MethodType.UNARY,
  proto.resource.AddOrganizationGroupRqst,
  proto.resource.AddOrganizationGroupRsp,
  /**
   * @param {!proto.resource.AddOrganizationGroupRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddOrganizationGroupRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddOrganizationGroupRqst,
 *   !proto.resource.AddOrganizationGroupRsp>}
 */
const methodInfo_ResourceService_AddOrganizationGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddOrganizationGroupRsp,
  /**
   * @param {!proto.resource.AddOrganizationGroupRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddOrganizationGroupRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddOrganizationGroupRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddOrganizationGroupRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddOrganizationGroupRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addOrganizationGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddOrganizationGroup',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddOrganizationGroup,
      callback);
};


/**
 * @param {!proto.resource.AddOrganizationGroupRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddOrganizationGroupRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addOrganizationGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddOrganizationGroup',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddOrganizationGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddOrganizationRoleRqst,
 *   !proto.resource.AddOrganizationRoleRsp>}
 */
const methodDescriptor_ResourceService_AddOrganizationRole = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddOrganizationRole',
  grpc.web.MethodType.UNARY,
  proto.resource.AddOrganizationRoleRqst,
  proto.resource.AddOrganizationRoleRsp,
  /**
   * @param {!proto.resource.AddOrganizationRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddOrganizationRoleRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddOrganizationRoleRqst,
 *   !proto.resource.AddOrganizationRoleRsp>}
 */
const methodInfo_ResourceService_AddOrganizationRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddOrganizationRoleRsp,
  /**
   * @param {!proto.resource.AddOrganizationRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddOrganizationRoleRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddOrganizationRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddOrganizationRoleRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddOrganizationRoleRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addOrganizationRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddOrganizationRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddOrganizationRole,
      callback);
};


/**
 * @param {!proto.resource.AddOrganizationRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddOrganizationRoleRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addOrganizationRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddOrganizationRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddOrganizationRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddOrganizationApplicationRqst,
 *   !proto.resource.AddOrganizationApplicationRsp>}
 */
const methodDescriptor_ResourceService_AddOrganizationApplication = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddOrganizationApplication',
  grpc.web.MethodType.UNARY,
  proto.resource.AddOrganizationApplicationRqst,
  proto.resource.AddOrganizationApplicationRsp,
  /**
   * @param {!proto.resource.AddOrganizationApplicationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddOrganizationApplicationRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddOrganizationApplicationRqst,
 *   !proto.resource.AddOrganizationApplicationRsp>}
 */
const methodInfo_ResourceService_AddOrganizationApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddOrganizationApplicationRsp,
  /**
   * @param {!proto.resource.AddOrganizationApplicationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddOrganizationApplicationRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddOrganizationApplicationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddOrganizationApplicationRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddOrganizationApplicationRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addOrganizationApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddOrganizationApplication',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddOrganizationApplication,
      callback);
};


/**
 * @param {!proto.resource.AddOrganizationApplicationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddOrganizationApplicationRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addOrganizationApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddOrganizationApplication',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddOrganizationApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemoveOrganizationAccountRqst,
 *   !proto.resource.RemoveOrganizationAccountRsp>}
 */
const methodDescriptor_ResourceService_RemoveOrganizationAccount = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemoveOrganizationAccount',
  grpc.web.MethodType.UNARY,
  proto.resource.RemoveOrganizationAccountRqst,
  proto.resource.RemoveOrganizationAccountRsp,
  /**
   * @param {!proto.resource.RemoveOrganizationAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveOrganizationAccountRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemoveOrganizationAccountRqst,
 *   !proto.resource.RemoveOrganizationAccountRsp>}
 */
const methodInfo_ResourceService_RemoveOrganizationAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemoveOrganizationAccountRsp,
  /**
   * @param {!proto.resource.RemoveOrganizationAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveOrganizationAccountRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemoveOrganizationAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemoveOrganizationAccountRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemoveOrganizationAccountRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removeOrganizationAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemoveOrganizationAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveOrganizationAccount,
      callback);
};


/**
 * @param {!proto.resource.RemoveOrganizationAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemoveOrganizationAccountRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removeOrganizationAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemoveOrganizationAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveOrganizationAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemoveOrganizationGroupRqst,
 *   !proto.resource.RemoveOrganizationGroupRsp>}
 */
const methodDescriptor_ResourceService_RemoveOrganizationGroup = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemoveOrganizationGroup',
  grpc.web.MethodType.UNARY,
  proto.resource.RemoveOrganizationGroupRqst,
  proto.resource.RemoveOrganizationGroupRsp,
  /**
   * @param {!proto.resource.RemoveOrganizationGroupRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveOrganizationGroupRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemoveOrganizationGroupRqst,
 *   !proto.resource.RemoveOrganizationGroupRsp>}
 */
const methodInfo_ResourceService_RemoveOrganizationGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemoveOrganizationGroupRsp,
  /**
   * @param {!proto.resource.RemoveOrganizationGroupRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveOrganizationGroupRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemoveOrganizationGroupRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemoveOrganizationGroupRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemoveOrganizationGroupRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removeOrganizationGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemoveOrganizationGroup',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveOrganizationGroup,
      callback);
};


/**
 * @param {!proto.resource.RemoveOrganizationGroupRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemoveOrganizationGroupRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removeOrganizationGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemoveOrganizationGroup',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveOrganizationGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemoveOrganizationRoleRqst,
 *   !proto.resource.RemoveOrganizationRoleRsp>}
 */
const methodDescriptor_ResourceService_RemoveOrganizationRole = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemoveOrganizationRole',
  grpc.web.MethodType.UNARY,
  proto.resource.RemoveOrganizationRoleRqst,
  proto.resource.RemoveOrganizationRoleRsp,
  /**
   * @param {!proto.resource.RemoveOrganizationRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveOrganizationRoleRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemoveOrganizationRoleRqst,
 *   !proto.resource.RemoveOrganizationRoleRsp>}
 */
const methodInfo_ResourceService_RemoveOrganizationRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemoveOrganizationRoleRsp,
  /**
   * @param {!proto.resource.RemoveOrganizationRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveOrganizationRoleRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemoveOrganizationRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemoveOrganizationRoleRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemoveOrganizationRoleRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removeOrganizationRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemoveOrganizationRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveOrganizationRole,
      callback);
};


/**
 * @param {!proto.resource.RemoveOrganizationRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemoveOrganizationRoleRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removeOrganizationRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemoveOrganizationRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveOrganizationRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemoveOrganizationApplicationRqst,
 *   !proto.resource.RemoveOrganizationApplicationRsp>}
 */
const methodDescriptor_ResourceService_RemoveOrganizationApplication = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemoveOrganizationApplication',
  grpc.web.MethodType.UNARY,
  proto.resource.RemoveOrganizationApplicationRqst,
  proto.resource.RemoveOrganizationApplicationRsp,
  /**
   * @param {!proto.resource.RemoveOrganizationApplicationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveOrganizationApplicationRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemoveOrganizationApplicationRqst,
 *   !proto.resource.RemoveOrganizationApplicationRsp>}
 */
const methodInfo_ResourceService_RemoveOrganizationApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemoveOrganizationApplicationRsp,
  /**
   * @param {!proto.resource.RemoveOrganizationApplicationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveOrganizationApplicationRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemoveOrganizationApplicationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemoveOrganizationApplicationRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemoveOrganizationApplicationRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removeOrganizationApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemoveOrganizationApplication',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveOrganizationApplication,
      callback);
};


/**
 * @param {!proto.resource.RemoveOrganizationApplicationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemoveOrganizationApplicationRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removeOrganizationApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemoveOrganizationApplication',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveOrganizationApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.CreateGroupRqst,
 *   !proto.resource.CreateGroupRsp>}
 */
const methodDescriptor_ResourceService_CreateGroup = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/CreateGroup',
  grpc.web.MethodType.UNARY,
  proto.resource.CreateGroupRqst,
  proto.resource.CreateGroupRsp,
  /**
   * @param {!proto.resource.CreateGroupRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.CreateGroupRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.CreateGroupRqst,
 *   !proto.resource.CreateGroupRsp>}
 */
const methodInfo_ResourceService_CreateGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.CreateGroupRsp,
  /**
   * @param {!proto.resource.CreateGroupRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.CreateGroupRsp.deserializeBinary
);


/**
 * @param {!proto.resource.CreateGroupRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.CreateGroupRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.CreateGroupRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.createGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_ResourceService_CreateGroup,
      callback);
};


/**
 * @param {!proto.resource.CreateGroupRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.CreateGroupRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.createGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/CreateGroup',
      request,
      metadata || {},
      methodDescriptor_ResourceService_CreateGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.GetGroupsRqst,
 *   !proto.resource.GetGroupsRsp>}
 */
const methodDescriptor_ResourceService_GetGroups = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/GetGroups',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.resource.GetGroupsRqst,
  proto.resource.GetGroupsRsp,
  /**
   * @param {!proto.resource.GetGroupsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetGroupsRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.GetGroupsRqst,
 *   !proto.resource.GetGroupsRsp>}
 */
const methodInfo_ResourceService_GetGroups = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.GetGroupsRsp,
  /**
   * @param {!proto.resource.GetGroupsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetGroupsRsp.deserializeBinary
);


/**
 * @param {!proto.resource.GetGroupsRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetGroupsRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.getGroups =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetGroups',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetGroups);
};


/**
 * @param {!proto.resource.GetGroupsRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetGroupsRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServicePromiseClient.prototype.getGroups =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetGroups',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetGroups);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.DeleteGroupRqst,
 *   !proto.resource.DeleteGroupRsp>}
 */
const methodDescriptor_ResourceService_DeleteGroup = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/DeleteGroup',
  grpc.web.MethodType.UNARY,
  proto.resource.DeleteGroupRqst,
  proto.resource.DeleteGroupRsp,
  /**
   * @param {!proto.resource.DeleteGroupRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteGroupRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.DeleteGroupRqst,
 *   !proto.resource.DeleteGroupRsp>}
 */
const methodInfo_ResourceService_DeleteGroup = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.DeleteGroupRsp,
  /**
   * @param {!proto.resource.DeleteGroupRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteGroupRsp.deserializeBinary
);


/**
 * @param {!proto.resource.DeleteGroupRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.DeleteGroupRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.DeleteGroupRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.deleteGroup =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/DeleteGroup',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteGroup,
      callback);
};


/**
 * @param {!proto.resource.DeleteGroupRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.DeleteGroupRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.deleteGroup =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/DeleteGroup',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteGroup);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddGroupMemberAccountRqst,
 *   !proto.resource.AddGroupMemberAccountRsp>}
 */
const methodDescriptor_ResourceService_AddGroupMemberAccount = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddGroupMemberAccount',
  grpc.web.MethodType.UNARY,
  proto.resource.AddGroupMemberAccountRqst,
  proto.resource.AddGroupMemberAccountRsp,
  /**
   * @param {!proto.resource.AddGroupMemberAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddGroupMemberAccountRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddGroupMemberAccountRqst,
 *   !proto.resource.AddGroupMemberAccountRsp>}
 */
const methodInfo_ResourceService_AddGroupMemberAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddGroupMemberAccountRsp,
  /**
   * @param {!proto.resource.AddGroupMemberAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddGroupMemberAccountRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddGroupMemberAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddGroupMemberAccountRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddGroupMemberAccountRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addGroupMemberAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddGroupMemberAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddGroupMemberAccount,
      callback);
};


/**
 * @param {!proto.resource.AddGroupMemberAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddGroupMemberAccountRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addGroupMemberAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddGroupMemberAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddGroupMemberAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemoveGroupMemberAccountRqst,
 *   !proto.resource.RemoveGroupMemberAccountRsp>}
 */
const methodDescriptor_ResourceService_RemoveGroupMemberAccount = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemoveGroupMemberAccount',
  grpc.web.MethodType.UNARY,
  proto.resource.RemoveGroupMemberAccountRqst,
  proto.resource.RemoveGroupMemberAccountRsp,
  /**
   * @param {!proto.resource.RemoveGroupMemberAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveGroupMemberAccountRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemoveGroupMemberAccountRqst,
 *   !proto.resource.RemoveGroupMemberAccountRsp>}
 */
const methodInfo_ResourceService_RemoveGroupMemberAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemoveGroupMemberAccountRsp,
  /**
   * @param {!proto.resource.RemoveGroupMemberAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveGroupMemberAccountRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemoveGroupMemberAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemoveGroupMemberAccountRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemoveGroupMemberAccountRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removeGroupMemberAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemoveGroupMemberAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveGroupMemberAccount,
      callback);
};


/**
 * @param {!proto.resource.RemoveGroupMemberAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemoveGroupMemberAccountRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removeGroupMemberAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemoveGroupMemberAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveGroupMemberAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RegisterAccountRqst,
 *   !proto.resource.RegisterAccountRsp>}
 */
const methodDescriptor_ResourceService_RegisterAccount = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RegisterAccount',
  grpc.web.MethodType.UNARY,
  proto.resource.RegisterAccountRqst,
  proto.resource.RegisterAccountRsp,
  /**
   * @param {!proto.resource.RegisterAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RegisterAccountRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RegisterAccountRqst,
 *   !proto.resource.RegisterAccountRsp>}
 */
const methodInfo_ResourceService_RegisterAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RegisterAccountRsp,
  /**
   * @param {!proto.resource.RegisterAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RegisterAccountRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RegisterAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RegisterAccountRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RegisterAccountRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.registerAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RegisterAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RegisterAccount,
      callback);
};


/**
 * @param {!proto.resource.RegisterAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RegisterAccountRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.registerAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RegisterAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RegisterAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.DeleteAccountRqst,
 *   !proto.resource.DeleteAccountRsp>}
 */
const methodDescriptor_ResourceService_DeleteAccount = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/DeleteAccount',
  grpc.web.MethodType.UNARY,
  proto.resource.DeleteAccountRqst,
  proto.resource.DeleteAccountRsp,
  /**
   * @param {!proto.resource.DeleteAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteAccountRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.DeleteAccountRqst,
 *   !proto.resource.DeleteAccountRsp>}
 */
const methodInfo_ResourceService_DeleteAccount = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.DeleteAccountRsp,
  /**
   * @param {!proto.resource.DeleteAccountRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteAccountRsp.deserializeBinary
);


/**
 * @param {!proto.resource.DeleteAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.DeleteAccountRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.DeleteAccountRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.deleteAccount =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteAccount,
      callback);
};


/**
 * @param {!proto.resource.DeleteAccountRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.DeleteAccountRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.deleteAccount =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/DeleteAccount',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteAccount);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.GetAccountsRqst,
 *   !proto.resource.GetAccountsRsp>}
 */
const methodDescriptor_ResourceService_GetAccounts = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/GetAccounts',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.resource.GetAccountsRqst,
  proto.resource.GetAccountsRsp,
  /**
   * @param {!proto.resource.GetAccountsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetAccountsRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.GetAccountsRqst,
 *   !proto.resource.GetAccountsRsp>}
 */
const methodInfo_ResourceService_GetAccounts = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.GetAccountsRsp,
  /**
   * @param {!proto.resource.GetAccountsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetAccountsRsp.deserializeBinary
);


/**
 * @param {!proto.resource.GetAccountsRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetAccountsRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.getAccounts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetAccounts',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetAccounts);
};


/**
 * @param {!proto.resource.GetAccountsRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetAccountsRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServicePromiseClient.prototype.getAccounts =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetAccounts',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetAccounts);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddAccountRoleRqst,
 *   !proto.resource.AddAccountRoleRsp>}
 */
const methodDescriptor_ResourceService_AddAccountRole = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddAccountRole',
  grpc.web.MethodType.UNARY,
  proto.resource.AddAccountRoleRqst,
  proto.resource.AddAccountRoleRsp,
  /**
   * @param {!proto.resource.AddAccountRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddAccountRoleRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddAccountRoleRqst,
 *   !proto.resource.AddAccountRoleRsp>}
 */
const methodInfo_ResourceService_AddAccountRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddAccountRoleRsp,
  /**
   * @param {!proto.resource.AddAccountRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddAccountRoleRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddAccountRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddAccountRoleRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddAccountRoleRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addAccountRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddAccountRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddAccountRole,
      callback);
};


/**
 * @param {!proto.resource.AddAccountRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddAccountRoleRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addAccountRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddAccountRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddAccountRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemoveAccountRoleRqst,
 *   !proto.resource.RemoveAccountRoleRsp>}
 */
const methodDescriptor_ResourceService_RemoveAccountRole = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemoveAccountRole',
  grpc.web.MethodType.UNARY,
  proto.resource.RemoveAccountRoleRqst,
  proto.resource.RemoveAccountRoleRsp,
  /**
   * @param {!proto.resource.RemoveAccountRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveAccountRoleRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemoveAccountRoleRqst,
 *   !proto.resource.RemoveAccountRoleRsp>}
 */
const methodInfo_ResourceService_RemoveAccountRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemoveAccountRoleRsp,
  /**
   * @param {!proto.resource.RemoveAccountRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveAccountRoleRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemoveAccountRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemoveAccountRoleRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemoveAccountRoleRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removeAccountRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemoveAccountRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveAccountRole,
      callback);
};


/**
 * @param {!proto.resource.RemoveAccountRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemoveAccountRoleRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removeAccountRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemoveAccountRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveAccountRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddAccountContactRqst,
 *   !proto.resource.AddAccountContactRsp>}
 */
const methodDescriptor_ResourceService_AddAccountContact = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddAccountContact',
  grpc.web.MethodType.UNARY,
  proto.resource.AddAccountContactRqst,
  proto.resource.AddAccountContactRsp,
  /**
   * @param {!proto.resource.AddAccountContactRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddAccountContactRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddAccountContactRqst,
 *   !proto.resource.AddAccountContactRsp>}
 */
const methodInfo_ResourceService_AddAccountContact = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddAccountContactRsp,
  /**
   * @param {!proto.resource.AddAccountContactRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddAccountContactRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddAccountContactRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddAccountContactRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddAccountContactRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addAccountContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddAccountContact',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddAccountContact,
      callback);
};


/**
 * @param {!proto.resource.AddAccountContactRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddAccountContactRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addAccountContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddAccountContact',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddAccountContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemoveAccountContactRqst,
 *   !proto.resource.RemoveAccountContactRsp>}
 */
const methodDescriptor_ResourceService_RemoveAccountContact = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemoveAccountContact',
  grpc.web.MethodType.UNARY,
  proto.resource.RemoveAccountContactRqst,
  proto.resource.RemoveAccountContactRsp,
  /**
   * @param {!proto.resource.RemoveAccountContactRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveAccountContactRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemoveAccountContactRqst,
 *   !proto.resource.RemoveAccountContactRsp>}
 */
const methodInfo_ResourceService_RemoveAccountContact = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemoveAccountContactRsp,
  /**
   * @param {!proto.resource.RemoveAccountContactRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveAccountContactRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemoveAccountContactRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemoveAccountContactRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemoveAccountContactRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removeAccountContact =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemoveAccountContact',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveAccountContact,
      callback);
};


/**
 * @param {!proto.resource.RemoveAccountContactRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemoveAccountContactRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removeAccountContact =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemoveAccountContact',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveAccountContact);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.CreateRoleRqst,
 *   !proto.resource.CreateRoleRsp>}
 */
const methodDescriptor_ResourceService_CreateRole = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/CreateRole',
  grpc.web.MethodType.UNARY,
  proto.resource.CreateRoleRqst,
  proto.resource.CreateRoleRsp,
  /**
   * @param {!proto.resource.CreateRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.CreateRoleRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.CreateRoleRqst,
 *   !proto.resource.CreateRoleRsp>}
 */
const methodInfo_ResourceService_CreateRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.CreateRoleRsp,
  /**
   * @param {!proto.resource.CreateRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.CreateRoleRsp.deserializeBinary
);


/**
 * @param {!proto.resource.CreateRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.CreateRoleRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.CreateRoleRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.createRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/CreateRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_CreateRole,
      callback);
};


/**
 * @param {!proto.resource.CreateRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.CreateRoleRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.createRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/CreateRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_CreateRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.GetRolesRqst,
 *   !proto.resource.GetRolesRsp>}
 */
const methodDescriptor_ResourceService_GetRoles = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/GetRoles',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.resource.GetRolesRqst,
  proto.resource.GetRolesRsp,
  /**
   * @param {!proto.resource.GetRolesRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetRolesRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.GetRolesRqst,
 *   !proto.resource.GetRolesRsp>}
 */
const methodInfo_ResourceService_GetRoles = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.GetRolesRsp,
  /**
   * @param {!proto.resource.GetRolesRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetRolesRsp.deserializeBinary
);


/**
 * @param {!proto.resource.GetRolesRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetRolesRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.getRoles =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetRoles',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetRoles);
};


/**
 * @param {!proto.resource.GetRolesRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetRolesRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServicePromiseClient.prototype.getRoles =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetRoles',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetRoles);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.DeleteRoleRqst,
 *   !proto.resource.DeleteRoleRsp>}
 */
const methodDescriptor_ResourceService_DeleteRole = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/DeleteRole',
  grpc.web.MethodType.UNARY,
  proto.resource.DeleteRoleRqst,
  proto.resource.DeleteRoleRsp,
  /**
   * @param {!proto.resource.DeleteRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteRoleRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.DeleteRoleRqst,
 *   !proto.resource.DeleteRoleRsp>}
 */
const methodInfo_ResourceService_DeleteRole = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.DeleteRoleRsp,
  /**
   * @param {!proto.resource.DeleteRoleRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteRoleRsp.deserializeBinary
);


/**
 * @param {!proto.resource.DeleteRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.DeleteRoleRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.DeleteRoleRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.deleteRole =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteRole,
      callback);
};


/**
 * @param {!proto.resource.DeleteRoleRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.DeleteRoleRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.deleteRole =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/DeleteRole',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteRole);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddRoleActionsRqst,
 *   !proto.resource.AddRoleActionsRsp>}
 */
const methodDescriptor_ResourceService_AddRoleActions = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddRoleActions',
  grpc.web.MethodType.UNARY,
  proto.resource.AddRoleActionsRqst,
  proto.resource.AddRoleActionsRsp,
  /**
   * @param {!proto.resource.AddRoleActionsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddRoleActionsRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddRoleActionsRqst,
 *   !proto.resource.AddRoleActionsRsp>}
 */
const methodInfo_ResourceService_AddRoleActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddRoleActionsRsp,
  /**
   * @param {!proto.resource.AddRoleActionsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddRoleActionsRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddRoleActionsRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddRoleActionsRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddRoleActionsRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addRoleActions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddRoleActions',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddRoleActions,
      callback);
};


/**
 * @param {!proto.resource.AddRoleActionsRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddRoleActionsRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addRoleActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddRoleActions',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddRoleActions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemoveRoleActionRqst,
 *   !proto.resource.RemoveRoleActionRsp>}
 */
const methodDescriptor_ResourceService_RemoveRoleAction = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemoveRoleAction',
  grpc.web.MethodType.UNARY,
  proto.resource.RemoveRoleActionRqst,
  proto.resource.RemoveRoleActionRsp,
  /**
   * @param {!proto.resource.RemoveRoleActionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveRoleActionRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemoveRoleActionRqst,
 *   !proto.resource.RemoveRoleActionRsp>}
 */
const methodInfo_ResourceService_RemoveRoleAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemoveRoleActionRsp,
  /**
   * @param {!proto.resource.RemoveRoleActionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveRoleActionRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemoveRoleActionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemoveRoleActionRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemoveRoleActionRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removeRoleAction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemoveRoleAction',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveRoleAction,
      callback);
};


/**
 * @param {!proto.resource.RemoveRoleActionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemoveRoleActionRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removeRoleAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemoveRoleAction',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveRoleAction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.GetAllApplicationsInfoRqst,
 *   !proto.resource.GetAllApplicationsInfoRsp>}
 */
const methodDescriptor_ResourceService_GetAllApplicationsInfo = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/GetAllApplicationsInfo',
  grpc.web.MethodType.UNARY,
  proto.resource.GetAllApplicationsInfoRqst,
  proto.resource.GetAllApplicationsInfoRsp,
  /**
   * @param {!proto.resource.GetAllApplicationsInfoRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetAllApplicationsInfoRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.GetAllApplicationsInfoRqst,
 *   !proto.resource.GetAllApplicationsInfoRsp>}
 */
const methodInfo_ResourceService_GetAllApplicationsInfo = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.GetAllApplicationsInfoRsp,
  /**
   * @param {!proto.resource.GetAllApplicationsInfoRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetAllApplicationsInfoRsp.deserializeBinary
);


/**
 * @param {!proto.resource.GetAllApplicationsInfoRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.GetAllApplicationsInfoRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetAllApplicationsInfoRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.getAllApplicationsInfo =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/GetAllApplicationsInfo',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetAllApplicationsInfo,
      callback);
};


/**
 * @param {!proto.resource.GetAllApplicationsInfoRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.GetAllApplicationsInfoRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.getAllApplicationsInfo =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/GetAllApplicationsInfo',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetAllApplicationsInfo);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.DeleteApplicationRqst,
 *   !proto.resource.DeleteApplicationRsp>}
 */
const methodDescriptor_ResourceService_DeleteApplication = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/DeleteApplication',
  grpc.web.MethodType.UNARY,
  proto.resource.DeleteApplicationRqst,
  proto.resource.DeleteApplicationRsp,
  /**
   * @param {!proto.resource.DeleteApplicationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteApplicationRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.DeleteApplicationRqst,
 *   !proto.resource.DeleteApplicationRsp>}
 */
const methodInfo_ResourceService_DeleteApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.DeleteApplicationRsp,
  /**
   * @param {!proto.resource.DeleteApplicationRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeleteApplicationRsp.deserializeBinary
);


/**
 * @param {!proto.resource.DeleteApplicationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.DeleteApplicationRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.DeleteApplicationRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.deleteApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/DeleteApplication',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteApplication,
      callback);
};


/**
 * @param {!proto.resource.DeleteApplicationRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.DeleteApplicationRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.deleteApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/DeleteApplication',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeleteApplication);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddApplicationActionsRqst,
 *   !proto.resource.AddApplicationActionsRsp>}
 */
const methodDescriptor_ResourceService_AddApplicationActions = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddApplicationActions',
  grpc.web.MethodType.UNARY,
  proto.resource.AddApplicationActionsRqst,
  proto.resource.AddApplicationActionsRsp,
  /**
   * @param {!proto.resource.AddApplicationActionsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddApplicationActionsRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddApplicationActionsRqst,
 *   !proto.resource.AddApplicationActionsRsp>}
 */
const methodInfo_ResourceService_AddApplicationActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddApplicationActionsRsp,
  /**
   * @param {!proto.resource.AddApplicationActionsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddApplicationActionsRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddApplicationActionsRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddApplicationActionsRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddApplicationActionsRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addApplicationActions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddApplicationActions',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddApplicationActions,
      callback);
};


/**
 * @param {!proto.resource.AddApplicationActionsRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddApplicationActionsRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addApplicationActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddApplicationActions',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddApplicationActions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemoveApplicationActionRqst,
 *   !proto.resource.RemoveApplicationActionRsp>}
 */
const methodDescriptor_ResourceService_RemoveApplicationAction = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemoveApplicationAction',
  grpc.web.MethodType.UNARY,
  proto.resource.RemoveApplicationActionRqst,
  proto.resource.RemoveApplicationActionRsp,
  /**
   * @param {!proto.resource.RemoveApplicationActionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveApplicationActionRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemoveApplicationActionRqst,
 *   !proto.resource.RemoveApplicationActionRsp>}
 */
const methodInfo_ResourceService_RemoveApplicationAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemoveApplicationActionRsp,
  /**
   * @param {!proto.resource.RemoveApplicationActionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemoveApplicationActionRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemoveApplicationActionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemoveApplicationActionRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemoveApplicationActionRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removeApplicationAction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemoveApplicationAction',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveApplicationAction,
      callback);
};


/**
 * @param {!proto.resource.RemoveApplicationActionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemoveApplicationActionRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removeApplicationAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemoveApplicationAction',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemoveApplicationAction);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RegisterPeerRqst,
 *   !proto.resource.RegisterPeerRsp>}
 */
const methodDescriptor_ResourceService_RegisterPeer = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RegisterPeer',
  grpc.web.MethodType.UNARY,
  proto.resource.RegisterPeerRqst,
  proto.resource.RegisterPeerRsp,
  /**
   * @param {!proto.resource.RegisterPeerRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RegisterPeerRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RegisterPeerRqst,
 *   !proto.resource.RegisterPeerRsp>}
 */
const methodInfo_ResourceService_RegisterPeer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RegisterPeerRsp,
  /**
   * @param {!proto.resource.RegisterPeerRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RegisterPeerRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RegisterPeerRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RegisterPeerRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RegisterPeerRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.registerPeer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RegisterPeer',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RegisterPeer,
      callback);
};


/**
 * @param {!proto.resource.RegisterPeerRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RegisterPeerRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.registerPeer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RegisterPeer',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RegisterPeer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.GetPeersRqst,
 *   !proto.resource.GetPeersRsp>}
 */
const methodDescriptor_ResourceService_GetPeers = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/GetPeers',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.resource.GetPeersRqst,
  proto.resource.GetPeersRsp,
  /**
   * @param {!proto.resource.GetPeersRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetPeersRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.GetPeersRqst,
 *   !proto.resource.GetPeersRsp>}
 */
const methodInfo_ResourceService_GetPeers = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.GetPeersRsp,
  /**
   * @param {!proto.resource.GetPeersRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.GetPeersRsp.deserializeBinary
);


/**
 * @param {!proto.resource.GetPeersRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetPeersRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.getPeers =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetPeers',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetPeers);
};


/**
 * @param {!proto.resource.GetPeersRqst} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.resource.GetPeersRsp>}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServicePromiseClient.prototype.getPeers =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/resource.ResourceService/GetPeers',
      request,
      metadata || {},
      methodDescriptor_ResourceService_GetPeers);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.DeletePeerRqst,
 *   !proto.resource.DeletePeerRsp>}
 */
const methodDescriptor_ResourceService_DeletePeer = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/DeletePeer',
  grpc.web.MethodType.UNARY,
  proto.resource.DeletePeerRqst,
  proto.resource.DeletePeerRsp,
  /**
   * @param {!proto.resource.DeletePeerRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeletePeerRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.DeletePeerRqst,
 *   !proto.resource.DeletePeerRsp>}
 */
const methodInfo_ResourceService_DeletePeer = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.DeletePeerRsp,
  /**
   * @param {!proto.resource.DeletePeerRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.DeletePeerRsp.deserializeBinary
);


/**
 * @param {!proto.resource.DeletePeerRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.DeletePeerRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.DeletePeerRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.deletePeer =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/DeletePeer',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeletePeer,
      callback);
};


/**
 * @param {!proto.resource.DeletePeerRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.DeletePeerRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.deletePeer =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/DeletePeer',
      request,
      metadata || {},
      methodDescriptor_ResourceService_DeletePeer);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.AddPeerActionsRqst,
 *   !proto.resource.AddPeerActionsRsp>}
 */
const methodDescriptor_ResourceService_AddPeerActions = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/AddPeerActions',
  grpc.web.MethodType.UNARY,
  proto.resource.AddPeerActionsRqst,
  proto.resource.AddPeerActionsRsp,
  /**
   * @param {!proto.resource.AddPeerActionsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddPeerActionsRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.AddPeerActionsRqst,
 *   !proto.resource.AddPeerActionsRsp>}
 */
const methodInfo_ResourceService_AddPeerActions = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.AddPeerActionsRsp,
  /**
   * @param {!proto.resource.AddPeerActionsRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.AddPeerActionsRsp.deserializeBinary
);


/**
 * @param {!proto.resource.AddPeerActionsRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.AddPeerActionsRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.AddPeerActionsRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.addPeerActions =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/AddPeerActions',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddPeerActions,
      callback);
};


/**
 * @param {!proto.resource.AddPeerActionsRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.AddPeerActionsRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.addPeerActions =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/AddPeerActions',
      request,
      metadata || {},
      methodDescriptor_ResourceService_AddPeerActions);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.resource.RemovePeerActionRqst,
 *   !proto.resource.RemovePeerActionRsp>}
 */
const methodDescriptor_ResourceService_RemovePeerAction = new grpc.web.MethodDescriptor(
  '/resource.ResourceService/RemovePeerAction',
  grpc.web.MethodType.UNARY,
  proto.resource.RemovePeerActionRqst,
  proto.resource.RemovePeerActionRsp,
  /**
   * @param {!proto.resource.RemovePeerActionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemovePeerActionRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.resource.RemovePeerActionRqst,
 *   !proto.resource.RemovePeerActionRsp>}
 */
const methodInfo_ResourceService_RemovePeerAction = new grpc.web.AbstractClientBase.MethodInfo(
  proto.resource.RemovePeerActionRsp,
  /**
   * @param {!proto.resource.RemovePeerActionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.resource.RemovePeerActionRsp.deserializeBinary
);


/**
 * @param {!proto.resource.RemovePeerActionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.resource.RemovePeerActionRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.resource.RemovePeerActionRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.resource.ResourceServiceClient.prototype.removePeerAction =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/resource.ResourceService/RemovePeerAction',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemovePeerAction,
      callback);
};


/**
 * @param {!proto.resource.RemovePeerActionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.resource.RemovePeerActionRsp>}
 *     Promise that resolves to the response
 */
proto.resource.ResourceServicePromiseClient.prototype.removePeerAction =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/resource.ResourceService/RemovePeerAction',
      request,
      metadata || {},
      methodDescriptor_ResourceService_RemovePeerAction);
};


module.exports = proto.resource;

