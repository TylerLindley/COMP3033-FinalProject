import mongoose from 'mongoose';

import Quote from './quote';
import User from './user';

/**
 * Used to connect to my MongoDatabase.
 */
const connectDb = () => {
  return mongoose.connect(process.env.DATABASE_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
}

const models = { User, Quote };

export { connectDb };
export default models;
