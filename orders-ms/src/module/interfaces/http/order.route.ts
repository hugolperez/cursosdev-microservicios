import express, { Request, Response } from "express";
import OrderApplication from "../../application/order.application";
import OrderInfraestructure from "../../infraestructure/models/order.infraestructure";
import OrderController from "./order.controller";

const infraestructure = new OrderInfraestructure();
const application = new OrderApplication(infraestructure)
const controller = new OrderController(application);

class RouterOrder {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post("/", controller.insert.bind(controller));
  }
}

export default new RouterOrder().router;