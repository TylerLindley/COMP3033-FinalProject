import mongoose from 'mongoose';
import shortid from 'shortid';

/**
 * Creating the mongoose Schema to add into MongoDB
 */
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

quoteSchema.statics.findByUserId = async function (userId) {
  return await this.find({ userId });
};

quoteSchema.statics.findByShortCode = async function (shortCode) {
  console.log(shortCode);
  const quote = await Quote.findOne({
    shortCode
  });
  console.log(quote);
  return await this.findOne({ shortCode });
};

quoteSchema.pre('save', function (next) {
  const quote = this;
  if (!quote.shortCode) {
    quote.shortCode = shortid.generate();
  }
  next();
});

const Quote = mongoose.model('Quote', quoteSchema);
export default Quote;

