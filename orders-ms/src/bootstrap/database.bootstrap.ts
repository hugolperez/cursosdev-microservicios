import mongoose from "mongoose";
import { Bootstrap } from "./bootstrap";

export default class DataBaseBootstrap extends Bootstrap {
  initialize(): Promise<boolean | Error> {
    return new Promise((resolve, reject) => {
      const username = "root";
      const password = "12345";
      const host = "localhost";
      const port = 27017;
      const database = "order";
      const authSource = "admin";

      const connectionString = `mongodb://${username}:${password}@${host}:` +
        `${port}/${database}?authSource=${authSource}`;

      const options = {
        maxPoolSize: 10,
        minPoolSize: 5
      };

      // Callback
      const cb = (error: Error) => {
        if(error) {
          return reject(error);
        }
        console.log("Connectado a MongoDB");
        resolve(true);
      }

      mongoose.connect(connectionString, options, cb);
    });
  }
}
