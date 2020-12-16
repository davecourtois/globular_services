/**
 * @fileoverview gRPC-Web generated client stub for ca
 * @enhanceable
 * @public
 */

// GENERATED CODE -- DO NOT EDIT!


/* eslint-disable */
// @ts-nocheck



const grpc = {};
grpc.web = require('grpc-web');

const proto = {};
proto.ca = require('./ca_pb.js');

/**
 * @param {string} hostname
 * @param {?Object} credentials
 * @param {?Object} options
 * @constructor
 * @struct
 * @final
 */
proto.ca.CertificateAuthorityClient =
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
proto.ca.CertificateAuthorityPromiseClient =
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
 *   !proto.ca.SignCertificateRequest,
 *   !proto.ca.SignCertificateResponse>}
 */
const methodDescriptor_CertificateAuthority_SignCertificate = new grpc.web.MethodDescriptor(
  '/ca.CertificateAuthority/SignCertificate',
  grpc.web.MethodType.UNARY,
  proto.ca.SignCertificateRequest,
  proto.ca.SignCertificateResponse,
  /**
   * @param {!proto.ca.SignCertificateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ca.SignCertificateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ca.SignCertificateRequest,
 *   !proto.ca.SignCertificateResponse>}
 */
const methodInfo_CertificateAuthority_SignCertificate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ca.SignCertificateResponse,
  /**
   * @param {!proto.ca.SignCertificateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ca.SignCertificateResponse.deserializeBinary
);


/**
 * @param {!proto.ca.SignCertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ca.SignCertificateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ca.SignCertificateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ca.CertificateAuthorityClient.prototype.signCertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ca.CertificateAuthority/SignCertificate',
      request,
      metadata || {},
      methodDescriptor_CertificateAuthority_SignCertificate,
      callback);
};


/**
 * @param {!proto.ca.SignCertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ca.SignCertificateResponse>}
 *     Promise that resolves to the response
 */
proto.ca.CertificateAuthorityPromiseClient.prototype.signCertificate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ca.CertificateAuthority/SignCertificate',
      request,
      metadata || {},
      methodDescriptor_CertificateAuthority_SignCertificate);
};


/**
 * @const
 * @type {!grpc.web.MethodDescriptor<
 *   !proto.ca.GetCaCertificateRequest,
 *   !proto.ca.GetCaCertificateResponse>}
 */
const methodDescriptor_CertificateAuthority_GetCaCertificate = new grpc.web.MethodDescriptor(
  '/ca.CertificateAuthority/GetCaCertificate',
  grpc.web.MethodType.UNARY,
  proto.ca.GetCaCertificateRequest,
  proto.ca.GetCaCertificateResponse,
  /**
   * @param {!proto.ca.GetCaCertificateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ca.GetCaCertificateResponse.deserializeBinary
);


/**
 * @const
 * @type {!grpc.web.AbstractClientBase.MethodInfo<
 *   !proto.ca.GetCaCertificateRequest,
 *   !proto.ca.GetCaCertificateResponse>}
 */
const methodInfo_CertificateAuthority_GetCaCertificate = new grpc.web.AbstractClientBase.MethodInfo(
  proto.ca.GetCaCertificateResponse,
  /**
   * @param {!proto.ca.GetCaCertificateRequest} request
   * @return {!Uint8Array}
   */
  function(request) {
    return request.serializeBinary();
  },
  proto.ca.GetCaCertificateResponse.deserializeBinary
);


/**
 * @param {!proto.ca.GetCaCertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @param {function(?grpc.web.Error, ?proto.ca.GetCaCertificateResponse)}
 *     callback The callback function(error, response)
 * @return {!grpc.web.ClientReadableStream<!proto.ca.GetCaCertificateResponse>|undefined}
 *     The XHR Node Readable Stream
 */
proto.ca.CertificateAuthorityClient.prototype.getCaCertificate =
    function(request, metadata, callback) {
  return this.client_.rpcCall(this.hostname_ +
      '/ca.CertificateAuthority/GetCaCertificate',
      request,
      metadata || {},
      methodDescriptor_CertificateAuthority_GetCaCertificate,
      callback);
};


/**
 * @param {!proto.ca.GetCaCertificateRequest} request The
 *     request proto
 * @param {?Object<string, string>} metadata User defined
 *     call metadata
 * @return {!Promise<!proto.ca.GetCaCertificateResponse>}
 *     Promise that resolves to the response
 */
proto.ca.CertificateAuthorityPromiseClient.prototype.getCaCertificate =
    function(request, metadata) {
  return this.client_.unaryCall(this.hostname_ +
      '/ca.CertificateAuthority/GetCaCertificate',
      request,
      metadata || {},
      methodDescriptor_CertificateAuthority_GetCaCertificate);
};


module.exports = proto.ca;

