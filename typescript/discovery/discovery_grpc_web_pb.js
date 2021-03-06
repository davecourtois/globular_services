/**
 * @fileoverview gRPC-Web generated client stub for discovery
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');


var resource_pb = require('./resource_pb.js')
const proto = {};
proto.discovery = require('./discovery_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.discovery.PackageDiscoveryClient =
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
proto.discovery.PackageDiscoveryPromiseClient =
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
 *   !proto.discovery.PublishServiceRequest,
 *   !proto.discovery.PublishServiceResponse>}
 */
const methodDescriptor_PackageDiscovery_PublishService = new grpc.web.MethodDescriptor(
  '/discovery.PackageDiscovery/PublishService',
  grpc.web.MethodType.UNARY,
  proto.discovery.PublishServiceRequest,
  proto.discovery.PublishServiceResponse,
  /**
   * @param {!proto.discovery.PublishServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.discovery.PublishServiceResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.discovery.PublishServiceRequest,
 *   !proto.discovery.PublishServiceResponse>}
 */
const methodInfo_PackageDiscovery_PublishService = new grpc.web.AbstractClientBase.MethodInfo(
  proto.discovery.PublishServiceResponse,
  /**
   * @param {!proto.discovery.PublishServiceRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.discovery.PublishServiceResponse.deserializeBinary
);


/**
 * @param {!proto.discovery.PublishServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.discovery.PublishServiceResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.discovery.PublishServiceResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.discovery.PackageDiscoveryClient.prototype.publishService =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/discovery.PackageDiscovery/PublishService',
      request,
      metadata || {},
      methodDescriptor_PackageDiscovery_PublishService,
      callback);
};


/**
 * @param {!proto.discovery.PublishServiceRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.discovery.PublishServiceResponse>}
 *     Promise that resolves to the response
 */
proto.discovery.PackageDiscoveryPromiseClient.prototype.publishService =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/discovery.PackageDiscovery/PublishService',
      request,
      metadata || {},
      methodDescriptor_PackageDiscovery_PublishService);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.discovery.PublishApplicationRequest,
 *   !proto.discovery.PublishApplicationResponse>}
 */
const methodDescriptor_PackageDiscovery_PublishApplication = new grpc.web.MethodDescriptor(
  '/discovery.PackageDiscovery/PublishApplication',
  grpc.web.MethodType.UNARY,
  proto.discovery.PublishApplicationRequest,
  proto.discovery.PublishApplicationResponse,
  /**
   * @param {!proto.discovery.PublishApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.discovery.PublishApplicationResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.discovery.PublishApplicationRequest,
 *   !proto.discovery.PublishApplicationResponse>}
 */
const methodInfo_PackageDiscovery_PublishApplication = new grpc.web.AbstractClientBase.MethodInfo(
  proto.discovery.PublishApplicationResponse,
  /**
   * @param {!proto.discovery.PublishApplicationRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.discovery.PublishApplicationResponse.deserializeBinary
);


/**
 * @param {!proto.discovery.PublishApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.discovery.PublishApplicationResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.discovery.PublishApplicationResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.discovery.PackageDiscoveryClient.prototype.publishApplication =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/discovery.PackageDiscovery/PublishApplication',
      request,
      metadata || {},
      methodDescriptor_PackageDiscovery_PublishApplication,
      callback);
};


/**
 * @param {!proto.discovery.PublishApplicationRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.discovery.PublishApplicationResponse>}
 *     Promise that resolves to the response
 */
proto.discovery.PackageDiscoveryPromiseClient.prototype.publishApplication =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/discovery.PackageDiscovery/PublishApplication',
      request,
      metadata || {},
      methodDescriptor_PackageDiscovery_PublishApplication);
};


module.exports = proto.discovery;

