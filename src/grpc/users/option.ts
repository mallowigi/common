import { ClientOptions, Transport } from '@nestjs/microservices';
import { join }                     from 'path';

export const usersGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options:   {
    url:       '0.0.0.0:50053',
    package:   'service',
    protoPath: join(__dirname, '../../../proto/users/service.proto'),
  },
};
