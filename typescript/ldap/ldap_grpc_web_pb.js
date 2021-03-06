/**
 * @fileoverview gRPC-Web generated client stub for ldap
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ldap = require('./ldap_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ldap.LdapServiceClient =
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
proto.ldap.LdapServicePromiseClient =
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
 *   !proto.ldap.StopRequest,
 *   !proto.ldap.StopResponse>}
 */
const methodDescriptor_LdapService_Stop = new grpc.web.MethodDescriptor(
  '/ldap.LdapService/Stop',
  grpc.web.MethodType.UNARY,
  proto.ldap.StopRequest,
  proto.ldap.StopResponse,
  /**
   * @param {!proto.ldap.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.StopResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ldap.StopRequest,
 *   !proto.ldap.StopResponse>}
 */
const methodInfo_LdapService_Stop = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ldap.StopResponse,
  /**
   * @param {!proto.ldap.StopRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.StopResponse.deserializeBinary
);


/**
 * @param {!proto.ldap.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ldap.StopResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ldap.StopResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ldap.LdapServiceClient.prototype.stop =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ldap.LdapService/Stop',
      request,
      metadata || {},
      methodDescriptor_LdapService_Stop,
      callback);
};


/**
 * @param {!proto.ldap.StopRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ldap.StopResponse>}
 *     Promise that resolves to the response
 */
proto.ldap.LdapServicePromiseClient.prototype.stop =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ldap.LdapService/Stop',
      request,
      metadata || {},
      methodDescriptor_LdapService_Stop);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ldap.CreateConnectionRqst,
 *   !proto.ldap.CreateConnectionRsp>}
 */
const methodDescriptor_LdapService_CreateConnection = new grpc.web.MethodDescriptor(
  '/ldap.LdapService/CreateConnection',
  grpc.web.MethodType.UNARY,
  proto.ldap.CreateConnectionRqst,
  proto.ldap.CreateConnectionRsp,
  /**
   * @param {!proto.ldap.CreateConnectionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.CreateConnectionRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ldap.CreateConnectionRqst,
 *   !proto.ldap.CreateConnectionRsp>}
 */
const methodInfo_LdapService_CreateConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ldap.CreateConnectionRsp,
  /**
   * @param {!proto.ldap.CreateConnectionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.CreateConnectionRsp.deserializeBinary
);


/**
 * @param {!proto.ldap.CreateConnectionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ldap.CreateConnectionRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ldap.CreateConnectionRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ldap.LdapServiceClient.prototype.createConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ldap.LdapService/CreateConnection',
      request,
      metadata || {},
      methodDescriptor_LdapService_CreateConnection,
      callback);
};


/**
 * @param {!proto.ldap.CreateConnectionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ldap.CreateConnectionRsp>}
 *     Promise that resolves to the response
 */
proto.ldap.LdapServicePromiseClient.prototype.createConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ldap.LdapService/CreateConnection',
      request,
      metadata || {},
      methodDescriptor_LdapService_CreateConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ldap.DeleteConnectionRqst,
 *   !proto.ldap.DeleteConnectionRsp>}
 */
const methodDescriptor_LdapService_DeleteConnection = new grpc.web.MethodDescriptor(
  '/ldap.LdapService/DeleteConnection',
  grpc.web.MethodType.UNARY,
  proto.ldap.DeleteConnectionRqst,
  proto.ldap.DeleteConnectionRsp,
  /**
   * @param {!proto.ldap.DeleteConnectionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.DeleteConnectionRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ldap.DeleteConnectionRqst,
 *   !proto.ldap.DeleteConnectionRsp>}
 */
const methodInfo_LdapService_DeleteConnection = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ldap.DeleteConnectionRsp,
  /**
   * @param {!proto.ldap.DeleteConnectionRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.DeleteConnectionRsp.deserializeBinary
);


/**
 * @param {!proto.ldap.DeleteConnectionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ldap.DeleteConnectionRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ldap.DeleteConnectionRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ldap.LdapServiceClient.prototype.deleteConnection =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ldap.LdapService/DeleteConnection',
      request,
      metadata || {},
      methodDescriptor_LdapService_DeleteConnection,
      callback);
};


/**
 * @param {!proto.ldap.DeleteConnectionRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ldap.DeleteConnectionRsp>}
 *     Promise that resolves to the response
 */
proto.ldap.LdapServicePromiseClient.prototype.deleteConnection =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ldap.LdapService/DeleteConnection',
      request,
      metadata || {},
      methodDescriptor_LdapService_DeleteConnection);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ldap.CloseRqst,
 *   !proto.ldap.CloseRsp>}
 */
const methodDescriptor_LdapService_Close = new grpc.web.MethodDescriptor(
  '/ldap.LdapService/Close',
  grpc.web.MethodType.UNARY,
  proto.ldap.CloseRqst,
  proto.ldap.CloseRsp,
  /**
   * @param {!proto.ldap.CloseRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.CloseRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ldap.CloseRqst,
 *   !proto.ldap.CloseRsp>}
 */
const methodInfo_LdapService_Close = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ldap.CloseRsp,
  /**
   * @param {!proto.ldap.CloseRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.CloseRsp.deserializeBinary
);


/**
 * @param {!proto.ldap.CloseRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ldap.CloseRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ldap.CloseRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ldap.LdapServiceClient.prototype.close =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ldap.LdapService/Close',
      request,
      metadata || {},
      methodDescriptor_LdapService_Close,
      callback);
};


/**
 * @param {!proto.ldap.CloseRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ldap.CloseRsp>}
 *     Promise that resolves to the response
 */
proto.ldap.LdapServicePromiseClient.prototype.close =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ldap.LdapService/Close',
      request,
      metadata || {},
      methodDescriptor_LdapService_Close);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ldap.SearchRqst,
 *   !proto.ldap.SearchResp>}
 */
const methodDescriptor_LdapService_Search = new grpc.web.MethodDescriptor(
  '/ldap.LdapService/Search',
  grpc.web.MethodType.UNARY,
  proto.ldap.SearchRqst,
  proto.ldap.SearchResp,
  /**
   * @param {!proto.ldap.SearchRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.SearchResp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ldap.SearchRqst,
 *   !proto.ldap.SearchResp>}
 */
const methodInfo_LdapService_Search = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ldap.SearchResp,
  /**
   * @param {!proto.ldap.SearchRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.SearchResp.deserializeBinary
);


/**
 * @param {!proto.ldap.SearchRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ldap.SearchResp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ldap.SearchResp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ldap.LdapServiceClient.prototype.search =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ldap.LdapService/Search',
      request,
      metadata || {},
      methodDescriptor_LdapService_Search,
      callback);
};


/**
 * @param {!proto.ldap.SearchRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ldap.SearchResp>}
 *     Promise that resolves to the response
 */
proto.ldap.LdapServicePromiseClient.prototype.search =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ldap.LdapService/Search',
      request,
      metadata || {},
      methodDescriptor_LdapService_Search);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ldap.AuthenticateRqst,
 *   !proto.ldap.AuthenticateRsp>}
 */
const methodDescriptor_LdapService_Authenticate = new grpc.web.MethodDescriptor(
  '/ldap.LdapService/Authenticate',
  grpc.web.MethodType.UNARY,
  proto.ldap.AuthenticateRqst,
  proto.ldap.AuthenticateRsp,
  /**
   * @param {!proto.ldap.AuthenticateRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.AuthenticateRsp.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ldap.AuthenticateRqst,
 *   !proto.ldap.AuthenticateRsp>}
 */
const methodInfo_LdapService_Authenticate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ldap.AuthenticateRsp,
  /**
   * @param {!proto.ldap.AuthenticateRqst} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ldap.AuthenticateRsp.deserializeBinary
);


/**
 * @param {!proto.ldap.AuthenticateRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ldap.AuthenticateRsp)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ldap.AuthenticateRsp>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ldap.LdapServiceClient.prototype.authenticate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ldap.LdapService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_LdapService_Authenticate,
      callback);
};


/**
 * @param {!proto.ldap.AuthenticateRqst} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ldap.AuthenticateRsp>}
 *     Promise that resolves to the response
 */
proto.ldap.LdapServicePromiseClient.prototype.authenticate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ldap.LdapService/Authenticate',
      request,
      metadata || {},
      methodDescriptor_LdapService_Authenticate);
};


module.exports = proto.ldap;

