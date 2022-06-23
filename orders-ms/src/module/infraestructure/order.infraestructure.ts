import { OrderEntity, STATUS } from "../domain/models/entities/order.entity";
import Repository from "../domain/repositories/order.repository";
import Model from "./models/order.model";

export default class OrderInfraestructure implements Repository {
  async insert(order: OrderEntity): Promise<OrderEntity> {
    await Model.create(order);
    return order;
  }

  async update(transaction: string, status: STATUS): Promise<string> {
    await Model.findOneAndUpdate({ transaction }, { status });

    return status;
  }
}
