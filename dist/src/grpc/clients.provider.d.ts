import { Transport } from '@nestjs/microservices';
interface Client {
    transport: Transport;
    options: any;
}
export declare const authNatsClient: Client;
export declare const authorizationNatsClient: Client;
export declare const usersNatsClient: Client;
export declare const articlesNatsClient: Client;
export declare const commentsNatsClient: Client;
export declare const authGrpcClient: Client;
export declare const usersGrpcClient: Client;
export declare const authorizationGrpcClient: Client;
export declare const articlesGrpcClient: Client;
export declare const commentsGrpcClient: Client;
export declare const clientsProviders: {
    provide: string;
    useValue: Client;
}[];
export {};
