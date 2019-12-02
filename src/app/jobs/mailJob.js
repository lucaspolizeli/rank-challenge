import Notification from '../models/notification';
import Mail from '../../config/mail';
import renderMailContent from '../helpers/renderMailContent';
import searchApi from '../requests/search-api';

class MailJob {
  async sendEmail({ frequency }) {
    const notificationFilteredByFrequency = await Notification.find({ frequency });

    notificationFilteredByFrequency.map(async currentNotification => {
      const products = await searchApi.getProducts({ keyword: currentNotification.keyword });

      await Mail.sendMail({
        from: `${process.env.HOST_MAIL_NAME_TO_SHOW} <${process.env.HOST_MAIL_EMAIL_TO_SHOW}>`,
        to: notificationFilteredByFrequency.email,
        subject: `Seu alerta para busca: ${notificationFilteredByFrequency.keyword}`,
        html: renderMailContent({ products })
      });
    });
  }
}

export default MailJob;
