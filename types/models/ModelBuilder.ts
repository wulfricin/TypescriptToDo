import { getModelForClass } from '@typegoose/typegoose';
import config from 'config';
import mongoose from 'mongoose';
const MongooseConnectedReadyState = 1;
export class ModelBuilder {
  public static ownMongoose: mongoose.Mongoose;
  public static async assignMongoose() {
    ModelBuilder.ownMongoose = mongoose;

    return Promise.resolve();
  }
  public static isConnected() {
    return (
      ModelBuilder.ownMongoose.connection?.readyState ===
      MongooseConnectedReadyState
    );
  }
  public static async connectToDb(): Promise<mongoose.Connection> {
    if (ModelBuilder.isConnected()) {
      return ModelBuilder.ownMongoose.connection;
    }
    await ModelBuilder.ownMongoose.connect(config.db);

    if (ModelBuilder.isConnected()) {
      return ModelBuilder.ownMongoose.connection;
    }
    throw new Error('mongoose sucks at connection');
  }
  public static async disconnect(): Promise<void> {
    return ModelBuilder.ownMongoose.disconnect();
  }
  public static build<T>(modelClass: new () => T) {
    return getModelForClass(modelClass);
  }
}
