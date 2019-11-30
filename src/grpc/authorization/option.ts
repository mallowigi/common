import { ClientOptions, Transport } from '@nestjs/microservices';
import { join }                     from 'path';

export const authorizationGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options:   {
    url:       'users:50050',
    package:   'service',
    protoPath: join(__dirname, '../../../proto/authorization/service.proto'),
  },
};
