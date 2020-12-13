import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import models,
{
	connectDb
}
from './models';
import Quote from './models/quote';
import quoteRoutes from './routes/quote';

const app = express();
const PORT = process.env.PORT;

//Adding Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded(
{
	extended: true
}));
app.use('/quotes', quoteRoutes);

const eraseDataOnConnect = process.env.NODE_ENV !== 'production';

app.get('/', (req, res) =>
{
	res.send('<style> body {background-color: lightpink;} h1 {font-weight: bold;} </style> <h1>Welcome to the Onika Maraj Quote generator. If youd like to see the quotes we have in our database, please navigate to <a href="/quotes">Quotes</a></h1>');
})

/*
 * When ran, this will delete anything in the database so we never have duplicates.
 */
connectDb().then(async () =>
{
	if (eraseDataOnConnect)
	{
		console.log('Adding two quotes to the database with content.');
		await Promise.all([
			models.Quote.deleteMany(
			{})
		]);

		createQuotewithContent();
	}
	app.listen(PORT, () =>
	{
		console.log(`Quotes have been saved to the database at: https://cloud.mongodb.com/v2/5fa7914e153a855cd8ba2800#metrics/replicaSet/5fa7939414376f7c79b4d138/explorer/OnikaQuotes, running on port: ${PORT}!`);
	});
}).catch(err =>
{
	console.error(err.message);
});

/**
 * Creating quotes to add to my database on MongoDB.
 */
const createQuotewithContent = async () =>
{
	const ifYouDontLikeMeThatsFine = new models.Quote(
	{
		content: 'If you dont like me. Thats fine... but you know... watch your mouth',
		videoLink: 'https://www.youtube.com/watch?v=3092MoRFSFY',
		dateOfQuote: 'May 12th 2012',
	});
	await ifYouDontLikeMeThatsFine.save();

	const ummChileAnywaysSo = new models.Quote(
	{
		content: 'What...? Umm Chile anyways so.....',
		videoLink: 'https://www.youtube.com/watch?v=CrPUvC7q6AY',
		dateOfQuote: 'February 24th, 2020'
	});
	await ummChileAnywaysSo.save();
};