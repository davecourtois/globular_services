/**
 * @fileoverview gRPC-Web generated client stub for services
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.services = require('./services_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.services.ServiceDiscoveryClient =
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
proto.services.ServiceDiscoveryPromiseClient =
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
 *   !proto.services.FindServicesDescriptorRequest,
 *   !proto.services.FindServicesDescriptorResponse>}
 */
const methodDescriptor_ServiceDiscovery_FindServices = new grpc.web.MethodDescriptor(
  '/services.ServiceDiscovery/FindServices',
  grpc.web.MethodType.UNARY,
  proto.services.FindServicesDescriptorRequest,
  proto.services.FindServicesDescriptorResponse,
  /**
   * @param {!proto.services.FindServicesDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.FindServicesDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.services.FindServicesDescriptorRequest,
 *   !proto.services.FindServicesDescriptorResponse>}
 */
const methodInfo_ServiceDiscovery_FindServices = new grpc.web.AbstractClientBase.MethodInfo(
  proto.services.FindServicesDescriptorResponse,
  /**
   * @param {!proto.services.FindServicesDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.FindServicesDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.services.FindServicesDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.services.FindServicesDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.FindServicesDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ServiceDiscoveryClient.prototype.findServices =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ServiceDiscovery/FindServices',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_FindServices,
      callback);
};


/**
 * @param {!proto.services.FindServicesDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.FindServicesDescriptorResponse>}
 *     A native promise that resolves to the response
 */
proto.services.ServiceDiscoveryPromiseClient.prototype.findServices =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ServiceDiscovery/FindServices',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_FindServices);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.GetServiceDescriptorRequest,
 *   !proto.services.GetServiceDescriptorResponse>}
 */
const methodDescriptor_ServiceDiscovery_GetServiceDescriptor = new grpc.web.MethodDescriptor(
  '/services.ServiceDiscovery/GetServiceDescriptor',
  grpc.web.MethodType.UNARY,
  proto.services.GetServiceDescriptorRequest,
  proto.services.GetServiceDescriptorResponse,
  /**
   * @param {!proto.services.GetServiceDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.GetServiceDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.services.GetServiceDescriptorRequest,
 *   !proto.services.GetServiceDescriptorResponse>}
 */
const methodInfo_ServiceDiscovery_GetServiceDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.services.GetServiceDescriptorResponse,
  /**
   * @param {!proto.services.GetServiceDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.GetServiceDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.services.GetServiceDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.services.GetServiceDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.GetServiceDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ServiceDiscoveryClient.prototype.getServiceDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ServiceDiscovery/GetServiceDescriptor',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_GetServiceDescriptor,
      callback);
};


/**
 * @param {!proto.services.GetServiceDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.GetServiceDescriptorResponse>}
 *     A native promise that resolves to the response
 */
proto.services.ServiceDiscoveryPromiseClient.prototype.getServiceDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ServiceDiscovery/GetServiceDescriptor',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_GetServiceDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.GetServicesDescriptorRequest,
 *   !proto.services.GetServicesDescriptorResponse>}
 */
const methodDescriptor_ServiceDiscovery_GetServicesDescriptor = new grpc.web.MethodDescriptor(
  '/services.ServiceDiscovery/GetServicesDescriptor',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.services.GetServicesDescriptorRequest,
  proto.services.GetServicesDescriptorResponse,
  /**
   * @param {!proto.services.GetServicesDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.GetServicesDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.services.GetServicesDescriptorRequest,
 *   !proto.services.GetServicesDescriptorResponse>}
 */
const methodInfo_ServiceDiscovery_GetServicesDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.services.GetServicesDescriptorResponse,
  /**
   * @param {!proto.services.GetServicesDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.GetServicesDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.services.GetServicesDescriptorRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.services.GetServicesDescriptorResponse>}
 *     The XHR Node Readable Stream
 */
proto.services.ServiceDiscoveryClient.prototype.getServicesDescriptor =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/services.ServiceDiscovery/GetServicesDescriptor',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_GetServicesDescriptor);
};


/**
 * @param {!proto.services.GetServicesDescriptorRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.services.GetServicesDescriptorResponse>}
 *     The XHR Node Readable Stream
 */
proto.services.ServiceDiscoveryPromiseClient.prototype.getServicesDescriptor =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/services.ServiceDiscovery/GetServicesDescriptor',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_GetServicesDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.SetServiceDescriptorRequest,
 *   !proto.services.SetServiceDescriptorResponse>}
 */
const methodDescriptor_ServiceDiscovery_SetServiceDescriptor = new grpc.web.MethodDescriptor(
  '/services.ServiceDiscovery/SetServiceDescriptor',
  grpc.web.MethodType.UNARY,
  proto.services.SetServiceDescriptorRequest,
  proto.services.SetServiceDescriptorResponse,
  /**
   * @param {!proto.services.SetServiceDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.SetServiceDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.services.SetServiceDescriptorRequest,
 *   !proto.services.SetServiceDescriptorResponse>}
 */
const methodInfo_ServiceDiscovery_SetServiceDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.services.SetServiceDescriptorResponse,
  /**
   * @param {!proto.services.SetServiceDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.SetServiceDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.services.SetServiceDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.services.SetServiceDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.SetServiceDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ServiceDiscoveryClient.prototype.setServiceDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ServiceDiscovery/SetServiceDescriptor',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_SetServiceDescriptor,
      callback);
};


/**
 * @param {!proto.services.SetServiceDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.SetServiceDescriptorResponse>}
 *     A native promise that resolves to the response
 */
proto.services.ServiceDiscoveryPromiseClient.prototype.setServiceDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ServiceDiscovery/SetServiceDescriptor',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_SetServiceDescriptor);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.services.PublishServiceDescriptorRequest,
 *   !proto.services.PublishServiceDescriptorResponse>}
 */
const methodDescriptor_ServiceDiscovery_PublishServiceDescriptor = new grpc.web.MethodDescriptor(
  '/services.ServiceDiscovery/PublishServiceDescriptor',
  grpc.web.MethodType.UNARY,
  proto.services.PublishServiceDescriptorRequest,
  proto.services.PublishServiceDescriptorResponse,
  /**
   * @param {!proto.services.PublishServiceDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.PublishServiceDescriptorResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.services.PublishServiceDescriptorRequest,
 *   !proto.services.PublishServiceDescriptorResponse>}
 */
const methodInfo_ServiceDiscovery_PublishServiceDescriptor = new grpc.web.AbstractClientBase.MethodInfo(
  proto.services.PublishServiceDescriptorResponse,
  /**
   * @param {!proto.services.PublishServiceDescriptorRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.PublishServiceDescriptorResponse.deserializeBinary
);


/**
 * @param {!proto.services.PublishServiceDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.services.PublishServiceDescriptorResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.services.PublishServiceDescriptorResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.services.ServiceDiscoveryClient.prototype.publishServiceDescriptor =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/services.ServiceDiscovery/PublishServiceDescriptor',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_PublishServiceDescriptor,
      callback);
};


/**
 * @param {!proto.services.PublishServiceDescriptorRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.services.PublishServiceDescriptorResponse>}
 *     A native promise that resolves to the response
 */
proto.services.ServiceDiscoveryPromiseClient.prototype.publishServiceDescriptor =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/services.ServiceDiscovery/PublishServiceDescriptor',
      request,
      metadata || {},
      methodDescriptor_ServiceDiscovery_PublishServiceDescriptor);
};


/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.services.ServiceRepositoryClient =
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
proto.services.ServiceRepositoryPromiseClient =
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
 *   !proto.services.DownloadBundleRequest,
 *   !proto.services.DownloadBundleResponse>}
 */
const methodDescriptor_ServiceRepository_DownloadBundle = new grpc.web.MethodDescriptor(
  '/services.ServiceRepository/DownloadBundle',
  grpc.web.MethodType.SERVER_STREAMING,
  proto.services.DownloadBundleRequest,
  proto.services.DownloadBundleResponse,
  /**
   * @param {!proto.services.DownloadBundleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.DownloadBundleResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.services.DownloadBundleRequest,
 *   !proto.services.DownloadBundleResponse>}
 */
const methodInfo_ServiceRepository_DownloadBundle = new grpc.web.AbstractClientBase.MethodInfo(
  proto.services.DownloadBundleResponse,
  /**
   * @param {!proto.services.DownloadBundleRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.services.DownloadBundleResponse.deserializeBinary
);


/**
 * @param {!proto.services.DownloadBundleRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.services.DownloadBundleResponse>}
 *     The XHR Node Readable Stream
 */
proto.services.ServiceRepositoryClient.prototype.downloadBundle =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/services.ServiceRepository/DownloadBundle',
      request,
      metadata || {},
      methodDescriptor_ServiceRepository_DownloadBundle);
};


/**
 * @param {!proto.services.DownloadBundleRequest} request The request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!grpc.web.ClientReadableStream<!proto.services.DownloadBundleResponse>}
 *     The XHR Node Readable Stream
 */
proto.services.ServiceRepositoryPromiseClient.prototype.downloadBundle =
    function(request, metadata) {
  return this.client_.serverStreaming(this.hostname_ +
      '/services.ServiceRepository/DownloadBundle',
      request,
      metadata || {},
      methodDescriptor_ServiceRepository_DownloadBundle);
};


module.exports = proto.services;

