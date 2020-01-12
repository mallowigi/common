import { Transport } from '@nestjs/microservices';
import { join }      from 'path';

interface Client {
  transport: Transport;
  options: any;
}

export const authNatsClient: Client = {
  transport: Transport.NATS,
  options:   {
    url:   process.env.NATS_URL || 'nats://localhost:4222',
    queue: 'auth',
    name:  'auth',
  },
};

export const authorizationNatsClient: Client = {
  transport: Transport.NATS,
  options:   {
    url:   process.env.NATS_URL || 'nats://localhost:4222',
    queue: 'authorization',
    name:  'authorization',
  },
};

export const usersNatsClient: Client = {
  transport: Transport.NATS,
  options:   {
    url:   process.env.NATS_URL || 'nats://localhost:4222',
    queue: 'users',
    name:  'users',
  },
};

export const articlesNatsClient: Client = {
  transport: Transport.NATS,
  options:   {
    url:   process.env.NATS_URL || 'nats://localhost:4222',
    queue: 'articles',
    name:  'articles',
  },
};

export const commentsNatsClient: Client = {
  transport: Transport.NATS,
  options:   {
    url:   process.env.NATS_URL || 'nats://localhost:4222',
    queue: 'comments',
    name:  'comments',
  },
};

export const authGrpcClient: Client = {
  transport: Transport.GRPC,
  options:   {
    url:       '0.0.0.0:50051',
    package:   'service',
    protoPath: join(__dirname, '../../proto/auth/service.proto'),
  },
};

export const usersGrpcClient: Client = {
  transport: Transport.GRPC,
  options:   {
    url:       '0.0.0.0:50053',
    package:   'service',
    protoPath: join(__dirname, '../../proto/users/service.proto'),
  },
};

export const authorizationGrpcClient: Client = {
  transport: Transport.GRPC,
  options:   {
    url:       '0.0.0.0:50052',
    package:   'service',
    protoPath: join(__dirname, '../../proto/authorization/service.proto'),
  },
};

export const articlesGrpcClient: Client = {
  transport: Transport.GRPC,
  options:   {
    url:       '0.0.0.0:50054',
    package:   'service',
    protoPath: join(__dirname, '../../proto/articles/service.proto'),
  },
};

export const commentsGrpcClient: Client = {
  transport: Transport.GRPC,
  options:   {
    url:       '0.0.0.0:50055',
    package:   'service',
    protoPath: join(__dirname, '../../proto/comments/service.proto'),
  },
};

export const clientsProviders = [
  {
    provide:  'AUTH_NATS_CLIENT',
    useValue: authNatsClient,
  },
  {
    provide:  'AUTHORIZATION_NATS_CLIENT',
    useValue: authorizationNatsClient,
  },
  {
    provide:  'USERS_NATS_CLIENT',
    useValue: usersNatsClient,
  },
  {
    provide:  'ARTICLES_NATS_CLIENT',
    useValue: articlesNatsClient,
  },
  {
    provide:  'COMMENTS_NATS_CLIENT',
    useValue: commentsNatsClient,
  },
  {
    provide:  'AUTH_GRPC_CLIENT',
    useValue: authGrpcClient,
  },
  {
    provide:  'USERS_GRPC_CLIENT',
    useValue: usersGrpcClient,
  },
  {
    provide:  'AUTHORIZATION_GRPC_CLIENT',
    useValue: authorizationGrpcClient,
  },
  {
    provide:  'ARTICLES_GRPC_CLIENT',
    useValue: articlesGrpcClient,
  },
  {
    provide:  'COMMENTS_GRPC_CLIENT',
    useValue: commentsGrpcClient,
  },
];
