import { Router } from 'express';
import ProductsController from './app/controllers/ProductsController';

class Routes {
  constructor() {
    this.routes = new Router();
    this.productsRoutes();
  }

  productsRoutes() {
    this.routes.post('/users', ProductsController.store);
  }
}

export default new Routes().routes;
