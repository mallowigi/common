"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.authNatsClient = {
    transport: microservices_1.Transport.NATS,
    options: {
        url: process.env.NATS_URL || 'nats://localhost:4222',
        queue: 'auth',
        name: 'auth',
    },
};
exports.authorizationNatsClient = {
    transport: microservices_1.Transport.NATS,
    options: {
        url: process.env.NATS_URL || 'nats://localhost:4222',
        queue: 'authorization',
        name: 'authorization',
    },
};
exports.usersNatsClient = {
    transport: microservices_1.Transport.NATS,
    options: {
        url: process.env.NATS_URL || 'nats://localhost:4222',
        queue: 'users',
        name: 'users',
    },
};
exports.articlesNatsClient = {
    transport: microservices_1.Transport.NATS,
    options: {
        url: process.env.NATS_URL || 'nats://localhost:4222',
        queue: 'articles',
        name: 'articles',
    },
};
exports.commentsNatsClient = {
    transport: microservices_1.Transport.NATS,
    options: {
        url: process.env.NATS_URL || 'nats://localhost:4222',
        queue: 'comments',
        name: 'comments',
    },
};
exports.authGrpcClient = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:50051',
        package: 'service',
        protoPath: path_1.join(__dirname, '../../common/proto/auth/service.proto'),
    },
};
exports.usersGrpcClient = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:50053',
        package: 'service',
        protoPath: path_1.join(__dirname, '../../common/proto/users/service.proto'),
    },
};
exports.authorizationGrpcClient = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:50052',
        package: 'service',
        protoPath: path_1.join(__dirname, '../../common/proto/authorization/service.proto'),
    },
};
exports.articlesGrpcClient = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:50054',
        package: 'service',
        protoPath: path_1.join(__dirname, '../../common/proto/articles/service.proto'),
    },
};
exports.commentsGrpcClient = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:50055',
        package: 'service',
        protoPath: path_1.join(__dirname, '../../common/proto/comments/service.proto'),
    },
};
exports.clientsProviders = [
    {
        provide: 'AUTH_NATS_CLIENT',
        useValue: exports.authNatsClient,
    },
    {
        provide: 'AUTHORIZATION_NATS_CLIENT',
        useValue: exports.authorizationNatsClient,
    },
    {
        provide: 'USERS_NATS_CLIENT',
        useValue: exports.usersNatsClient,
    },
    {
        provide: 'ARTICLES_NATS_CLIENT',
        useValue: exports.articlesNatsClient,
    },
    {
        provide: 'COMMENTS_NATS_CLIENT',
        useValue: exports.commentsNatsClient,
    },
    {
        provide: 'AUTH_GRPC_CLIENT',
        useValue: exports.authGrpcClient,
    },
    {
        provide: 'USERS_GRPC_CLIENT',
        useValue: exports.usersGrpcClient,
    },
    {
        provide: 'AUTHORIZATION_GRPC_CLIENT',
        useValue: exports.authorizationGrpcClient,
    },
    {
        provide: 'ARTICLES_GRPC_CLIENT',
        useValue: exports.articlesGrpcClient,
    },
    {
        provide: 'COMMENTS_GRPC_CLIENT',
        useValue: exports.commentsGrpcClient,
    },
];
//# sourceMappingURL=clients.provider.js.map