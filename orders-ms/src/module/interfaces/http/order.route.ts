import express, { Request, Response } from "express";
import OrderApplication from "../../application/order.application";
import ValidatorHelper from "../../helpers/validator.herpers";
import BrokerInfraestructure from "../../infraestructure/broker.infraestructure";
import OrderInfraestructure from "../../infraestructure/order.infraestructure";
import OrderController from "./order.controller";
import { ORDER_INSERT } from "./order.schema";

const infraestructure = new OrderInfraestructure();
const infraestructureBroker = new BrokerInfraestructure();
const application = new OrderApplication(infraestructure, infraestructureBroker)
const controller = new OrderController(application);

class RouterOrder {
  router: express.Router;

  constructor() {
    this.router = express.Router();
    this.mountRoutes();
  }

  mountRoutes() {
    this.router.post("/", ValidatorHelper.validate(ORDER_INSERT), controller.insert.bind(controller));
  }
}

export default new RouterOrder().router;