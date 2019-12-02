import nodemailer from 'nodemailer';
import mailConfig from '../../config/mail';

class Mail {
  constructor() {
    nodemailer.createTransport(mailConfig);
  }
}

export default new Mail();
