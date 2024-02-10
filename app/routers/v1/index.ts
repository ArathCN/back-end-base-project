import {Router} from 'express';
import { testRouter } from './test';

const Routes = Router();

//poner el nombre del recurso...
Routes.use('/api/v1/test', testRouter);

export { Routes }