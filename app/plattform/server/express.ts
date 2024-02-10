import express, {Application, RequestHandler} from 'express';
import helmet from 'helmet';
import cors from 'cors';
import compression from 'compression';
import { IStartOptions } from '../types';
//import { errorHandlerMiddleWare } from '../middlewares/error-handler';
  

export const startExpressServer = (handlers: RequestHandler | RequestHandler[], options: IStartOptions) => {
    const { basePath, port, host } = options;
    const app: Application = express();

    app.use(express.json({ limit: '10mb' }));
    app.use(express.urlencoded({ extended: false }));
    app.use(cors());
    app.use(helmet());
    app.use(compression());

    app.use(basePath, handlers);

    /* app.use((err: Error, req: CustomRequest, res: Response, next: NextFunction) => {
        errorHandlerMiddleWare(err, req, res, next);
    }); */

    app.listen(port, host, async () => {

        //Conectar clientes de BD si los hay...

        console.info(
            `⚡️ [server]: Server is running at http://${host}:${port}`,
            "app"
        );
    });

    return app;
};