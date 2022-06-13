import { OrderEntity, STATUS } from "../domain/models/entities/order.entity";
import Repository from "../domain/repositories/order.repository";

export default class OrderApplication {
  private repository: Repository;

  constructor(repository: Repository) {
    this.repository = repository;
  }

  async create(order: OrderEntity): Promise<OrderEntity> {
    return this.repository.insert(order);
  }

  async update(transaction: string, status: STATUS): Promise<string> {
    return this.repository.update(transaction, status);
  }
}
