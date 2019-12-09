import Notification from '../models/notification';
import Mail from '../../config/mail';
import renderMailContent from '../helpers/renderMailContent';
import axios from 'axios';

class MailJob {
  async getProducts(keyword) {
    const url = [
      process.env.EBAY_URL,
      '?OPERATION-NAME=findItemsByKeywords',
      '&SERVICE-VERSION=1.0.0',
      `&SECURITY-APPName=${process.env.EBAY_APP_KEY}`,
      `&keywords=${keyword}`,
      '&paginationInput.entriesPerPage=3',
      '&RESPONSE-DATA-FORMAT=JSON'
    ];

    const response = await axios.get(url.join(''));
    return response.data.findItemsByKeywordsResponse[0].searchResult[0].item || [];
  }

  async sendEmail({ frequency }) {
    const notificationFilteredByFrequency = await Notification.find({ frequency });

    notificationFilteredByFrequency.map(async currentNotification => {
      const products = await this.getProducts({ keyword: currentNotification.keyword });

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
