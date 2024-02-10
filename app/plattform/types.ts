export interface IStartOptions {
    basePath: string;
    port: number;
    host: string;
    requestId: string;
    corsOrigin?: string | string[];
}