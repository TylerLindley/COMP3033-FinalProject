import mongoose from 'mongoose';

const quoteSchema = new mongoose.Schema(
{
	content:
	{
		type: String,
		//required: true, not sure if I want this required yet.
	},
	videoLink: String,
	dateOfQuote: String
},
{
	collection: 'OnikaQuoteDatabase',
});

quoteSchema.pre('save', function (next)
{
	const quote = this;
	next();
});

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;