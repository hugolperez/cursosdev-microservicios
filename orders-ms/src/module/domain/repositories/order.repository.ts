import { OrderEntity, STATUS } from "../models/entities/order.entity";

export default interface Repository {
  insert(order: OrderEntity): Promise<OrderEntity>;
  update(transaction: string, status: STATUS): Promise<string>;
}