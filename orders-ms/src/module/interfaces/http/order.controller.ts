import OrderApplication from "../../application/order.application";
import { OrderBuilder, OrderEntity } from "../../domain/models/entities/order.entity";
import { Request, Response } from "express";

export default class OrderController {
  constructor(private orderApplication: OrderApplication) {

  }

  async insert(req: Request, res: Response) {
    const { name, itemCount, transaction } = req.body;

    const entity: OrderEntity = new OrderBuilder()
      .addName(name)
      .addItemCount(itemCount)
      .addTransaction(transaction)
      .addStatus("PENDING")
      .build();

    const orderInserted = await this.orderApplication.create(entity);

    res.json(orderInserted);
  }
}