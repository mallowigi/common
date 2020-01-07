"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const winston_1 = require("winston");
const env = process.env.NODE_ENV || 'development';
let logger;
exports.logger = logger;
if (env === 'development') {
    exports.logger = logger = winston_1.createLogger({
        level: 'debug',
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json(), winston_1.format.prettyPrint(), winston_1.format.colorize({ all: true })),
        transports: [
            new winston_1.transports.Console(),
        ],
    });
}
else {
    exports.logger = logger = winston_1.createLogger({
        level: 'info',
        format: winston_1.format.combine(winston_1.format.timestamp(), winston_1.format.json()),
        transports: [
            new winston_1.transports.Console(),
        ],
    });
}
//# sourceMappingURL=logger.js.map