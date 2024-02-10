import { Routes } from './routers/v1';
import { config, startExpressServer } from './plattform';

export const app = startExpressServer([Routes], {
  port: config.port,
  host: config.host,
  basePath: '',
});