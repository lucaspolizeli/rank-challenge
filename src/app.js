import 'dotenv/config';
import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';

class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.server.use(
      bodyParser.urlencoded({
        extended: true
      })
    );
    this.server.use(bodyParser.json());
  }

  routes() {
    this.server.use(routes);
  }
}

export default new App().server;
