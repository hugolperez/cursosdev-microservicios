import BrokerBootstrap from "./bootstrap/broker.bootstrap";
import DataBaseBootstrap from "./bootstrap/database.bootstrap";
import ServerBootstrap from "./bootstrap/server.bootstrap";

const server = new ServerBootstrap();
const database = new DataBaseBootstrap();
const broker = new BrokerBootstrap();

async function start() {
  try {
    await server.initialize();
    await database.initialize();
    await broker.initialize();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

start();