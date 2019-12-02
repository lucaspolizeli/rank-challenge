import { Router } from 'express';
import NotificationController from './app/controllers/notificationController';

class Routes {
  constructor() {
    this.routes = new Router();
    this.notificationRoutes();
  }

  notificationRoutes() {
    this.routes.get('/notification', NotificationController.getNotifications);
    this.routes.post('/notification', NotificationController.createNotification);
    this.routes.get('/notification/:id', NotificationController.getNotificationById);
    this.routes.put('/notification/:id', NotificationController.updateNotification);
    this.routes.delete('/notification/:id', NotificationController.deleteNotification);
  }
}

export default new Routes().routes;
