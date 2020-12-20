import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';

import { login, refresh } from './authentication';
import models,{	connectDb } from './models';
import Quote from './models/quote';
import quoteRoutes from './routes/quote';
import userRoutes from './routes/user';
const app = express();
const PORT = process.env.PORT;

//Adding Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.post('/login', login);
app.post('/refresh', refresh);

app.use('/quotes', quoteRoutes);
app.use('/users', userRoutes);

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
	app.listen(PORT, () =>
	{
		console.log(`Running on port: ${PORT}!`);
	});
}).catch(err =>
{
	console.error(err.message);
});

app.post('/', (req, res) => {
  return res.send('Received POST request');
});