//* Defines config variables and it´s permissions

export type Config = {
    readonly environment: string;
    readonly port: number;
    readonly host: string;
    db: {
      readonly host: string;
      readonly port: string;
      readonly dbName: string;
      readonly userName: string;
      readonly password: string;
    }
};