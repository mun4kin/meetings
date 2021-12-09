import dotenv from 'dotenv';
import log4js from 'log4js';
import express, { Express } from 'express';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controller/user-controller';
import bodyParser from 'body-parser';
import httpContext from 'express-http-context';
import { GlobalErrorHandler } from './middleware/ global-error-handler';
dotenv.config();
// const app = express();
const logger = log4js.getLogger();
logger.level = process.env.LOG_LEVEL;
const port = process.env.PORT;
import swaggerUi from 'swagger-ui-express';
import * as swaggerDocument from '../src/swagger/openapi.json';

const app: Express = express();
app.use(bodyParser.json());
app.use(httpContext.middleware);

useExpressServer(app, {
  controllers: [UserController],
  middlewares: [GlobalErrorHandler],
  defaultErrorHandler: false
});
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(port, () => console.log(`Running on port ${port}`));
// logger.info('log4js log info');
// logger.debug('log4js log debug');
// logger.error('log4js log error');
