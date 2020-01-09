import { ClientOptions, Transport } from '@nestjs/microservices';
import { join }                     from 'path';

export const authGrpcClientOptions: ClientOptions = {
  transport: Transport.GRPC,
  options:   {
    url:       '0.0.0.0:50051',
    package:   'service',
    protoPath: join(__dirname, '../../../proto/auth/service.proto'),
  },
};
