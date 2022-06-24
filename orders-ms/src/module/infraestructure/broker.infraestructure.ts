import BrokerBootstrap from "../../bootstrap/broker.bootstrap";
import RepositoryBroker from "../domain/repositories/order-broker.repository";

export default class BrokerInfraestructure implements RepositoryBroker {
  async send(message: object): Promise<void> {
    const channel = BrokerBootstrap.getChannel();
    const queueName = "ORDER_CREATED_EVENT";

    await channel.assertQueue(queueName, { durable: true });
    await channel.sendToQueue(queueName, Buffer.from(JSON.stringify(message)));
  }

  async receive(): Promise<void> {
    console.log("Receive");
  }
}