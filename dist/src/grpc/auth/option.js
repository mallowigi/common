"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.authGrpcClientOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:50051',
        package: 'service',
        protoPath: path_1.join(__dirname, '../../../proto/auth/service.proto'),
    },
};
//# sourceMappingURL=option.js.map