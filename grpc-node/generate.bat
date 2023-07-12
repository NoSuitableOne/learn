protoc-gen-grpc \
--js_out=import_style=commonjs,binary: \
----grpc_out=grpc_js:.
--proto_path ./ \
./hello.proto