import Mongoose, { ConnectOptions } from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

let database: Mongoose.Connection;
export const connect = () => {
  const uri = process.env.MONGO_URI as string;
  if (database) {
    return;
  }
  Mongoose.set('strictQuery', false);
  Mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  } as ConnectOptions);

  database = Mongoose.connection;
  database.once('open', async () => {
    console.log('Connected to database');
  });
  database.on('error', () => {
    console.log('Error connecting to database');
  });
};
export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};
