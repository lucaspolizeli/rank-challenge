import 'dotenv/config';
import express from 'express';
import routes from './routes';
import bodyParser from 'body-parser';
import cron from 'node-cron';
import MailJob from './app/jobs/mailJob';
class App {
  constructor() {
    this.server = express();

    this.middlewares();
    this.routes();
    this.jobs();
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

  jobs() {
    cron.schedule('*/2 * * * *', () => {
      const mailJob = new MailJob();
      mailJob.sendEmail({ frequency: 2 });
    });

    cron.schedule('*/5 * * * *', () => {
      const mailJob = new MailJob();
      mailJob.sendEmail({ frequency: 5 });
    });

    cron.schedule('*/30 * * * *', () => {
      const mailJob = new MailJob();
      mailJob.sendEmail({ frequency: 30 });
    });
  }
}

export default new App().server;
