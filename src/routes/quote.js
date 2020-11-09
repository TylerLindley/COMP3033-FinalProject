import
{
	Router
}
from 'express';
import Quote from '../models/quote';

const router = Router();

// Create
router.post('/', async (req, res) =>
{
	const quote = new Quote(req.body);
	await quote.save();
	return res.send(quote);
});

// Read/Retrieve
router.get('/', async (req, res) =>
{
	const quotes = await Quote.find(
    {});
    //adding some CSS Styling directly into the HTMl, I will add a stylesheet for assignment three's front end.
	return res.send('<style> body { background-color: lightpink} </style> <h1> here are the quotes requested: </h1>' + '<h3>' + quotes + '</h3>');
});

router.get('/:quoteId', async (req, res) =>
{
	const quote = await Quote.findById(req.params.quoteId);
	return res.send(quote);
});

// Update
router.put('/:quoteId', async (req, res) =>
{
	const quote = await Quote.updateOne(
	{
		_id: req.params.quoteId
	},
	{
		...req.body
	});
	return res.send(`Received PUT requests. ${req.params.quoteId}`);
});

// Delete
router.delete('/:quoteId', (req, res) =>
{
	return res.send(`Received DELETE requests. /${req.params.Id}`);
});

export default router;