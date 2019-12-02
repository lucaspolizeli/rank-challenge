import Notification from '../models/notification';
import { read } from 'fs';

class NotificationController {
  async getNotifications(req, res) {
    const notifications = await Notification.find({});
    res.status(200).json({ notifications });
  }

  async getNotificationById(req, res) {
    const { id } = req.params;

    const notification = await Notification.findById(id);
    res.json({ notification });
  }

  async createNotification(req, res) {
    const { frequency } = req.body;
    const minutesToSelect = [2, 5, 30];

    if (!minutesToSelect.includes(frequency)) {
      return res.status(406).json({ error: 'select 2, 5 or 30 minutes' });
    }

    try {
      const notificationCreated = await Notification.create({ ...req.body });
      res.status(200).json({ notificationCreated });
    } catch (error) {
      res.status(400).json({ error });
    }
  }

  async updateNotification(req, res) {
    const { id } = req.params;
    const { email, frequency, keyword } = req.body;

    const notification = await Notification.findById(id);

    if (!notification) {
      res.status(400).json({ error: 'notification not found' });
    }

    await Notification.findByIdAndUpdate(id, {
      email,
      frequency,
      keyword
    });
    return res.status(200);
  }

  async deleteNotification(req, res) {
    const { id } = req.params;

    await Notification.deleteOne({ _id: id });
    res.status(200);
  }
}

export default new NotificationController();
