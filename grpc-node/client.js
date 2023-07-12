const grpc = require('@grpc/grpc-js')
const helloMessages = require("./hello_pb");
const helloServices = require("./hello_grpc_pb");

function main() {
  const client = new helloServices.HelloClient('localhost:55555', grpc.credentials.createInsecure());
  const payload = new helloMessages.HelloReq();
  payload.setName('Martin');
  payload.setAge(65);

  client.sayHello(payload, function(err, response) {
    if (err) {
      console.error('Error: ', err);
    } else {
      console.log(response.getMessage());
    }
  })
}

main()
