import { ClientOptions, Transport } from '@nestjs/microservices';
import { join }                     from 'path';

export const authorizationGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options:   {
    url:       'authorization:50050',
    package:   'service',
    protoPath: join(__dirname, '../../../proto/authorization/service.proto'),
  },
};

export const authorizationNatsClientOptions = {
  transport: Transport.NATS,
  options:   {
    url:   process.env.NATS_URL || 'nats://localhost:4222',
    queue: 'authorization',
    name:  'authorization',
  },
};
