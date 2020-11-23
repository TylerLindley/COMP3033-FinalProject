import mongoose from 'mongoose';
import Quote from './quote';

const connectDb = () =>
{
	return mongoose.connect(process.env.DATABASE_URL,
	{
		useUnifiedTopology: true,
		useNewUrlParser: true,
	});
}

const models = {
	Quote
};

export
{
	connectDb
};
export default models;