const grpc = require("@grpc/grpc-js");
const helloMessages = require("./hello_pb");
const helloServices = require("./hello_grpc_pb");

const server = new grpc.Server();

server.addService(helloServices.HelloService, {
  sayHello: (call, callback) => {
    try {
      const name = call.request.getName();
      const age = call.request.getAge();
      const res = new helloMessages.HelloResp();
      res.setMessage(`I am ${name} age ${age}.`);
      callback && callback(null, res);
    } catch (e) {
      console.log(e);
      callback && callback(error);
    }
  }
});

server.bindAsync('0.0.0.0:55555', grpc.ServerCredentials.createInsecure(), ()=>{
  server.start();
  console.log('server start at 127.0.0.1:55555...');
});
