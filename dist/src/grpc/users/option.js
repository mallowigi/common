"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const microservices_1 = require("@nestjs/microservices");
const path_1 = require("path");
exports.usersGrpcClientOptions = {
    transport: microservices_1.Transport.GRPC,
    options: {
        url: '0.0.0.0:50050',
        package: 'service',
        protoPath: path_1.join(__dirname, '../../../proto/users/service.proto'),
    },
};
//# sourceMappingURL=option.js.map