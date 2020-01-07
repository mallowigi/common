"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.authorizationGrpcClientOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        package: 'service',
        protoPath: path_1.join(__dirname, '../../../proto/authorization/service.proto'),
    },
};
exports.authorizationNatsClientOptions = {
    transport: microservices_1.Transport.NATS,
    options: {
        url: process.env.NATS_URL || 'nats://localhost:4222',
        queue: 'authorization',
        name: 'authorization',
    },
};
//# sourceMappingURL=option.js.map