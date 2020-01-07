import { ClientOptions, Transport } from '@nestjs/microservices';
export declare const authorizationGrpcClientOptions: ClientOptions;
export declare const authorizationNatsClientOptions: {
    transport: Transport;
    options: {
        url: string;
        queue: string;
        name: string;
    };
};
