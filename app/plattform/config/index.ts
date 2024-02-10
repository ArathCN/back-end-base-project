import type { Config } from './types';

//* Assign config variables 
const config: Config = {
  environment: process.env.ENVIRONMENT || "local",
  port: process.env.PORT || 8080,
  host: process.env.HOST || "0.0.0.0",
  db: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    userName: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    dbName: process.env.DB_NAME,
  }
};

export default config;