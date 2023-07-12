// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var hello_pb = require('./hello_pb.js');

function serialize_helloworld_HelloReq(arg) {
  if (!(arg instanceof hello_pb.HelloReq)) {
    throw new Error('Expected argument of type helloworld.HelloReq');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloReq(buffer_arg) {
  return hello_pb.HelloReq.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_helloworld_HelloResp(arg) {
  if (!(arg instanceof hello_pb.HelloResp)) {
    throw new Error('Expected argument of type helloworld.HelloResp');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_helloworld_HelloResp(buffer_arg) {
  return hello_pb.HelloResp.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloService = exports.HelloService = {
  sayHello: {
    path: '/helloworld.Hello/sayHello',
    requestStream: false,
    responseStream: false,
    requestType: hello_pb.HelloReq,
    responseType: hello_pb.HelloResp,
    requestSerialize: serialize_helloworld_HelloReq,
    requestDeserialize: deserialize_helloworld_HelloReq,
    responseSerialize: serialize_helloworld_HelloResp,
    responseDeserialize: deserialize_helloworld_HelloResp,
  },
};

exports.HelloClient = grpc.makeGenericClientConstructor(HelloService);
