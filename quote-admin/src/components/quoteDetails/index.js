import React, { useState } from 'react';
import { useParams } from 'react-router-dom';

import { fetchById } from '../../api';

const QuoteDetails = (props) => {
  const { quoteId } = useParams();
  const [quote, setQuote] = useState(null);
  if(!quote){
    fetchById(quoteId).then(data => {
      setQuote(data);
    });
  }
  /**
   * Displays detials for the current quotes.
   */
  return (
    quote ? 
    <div>
     Details for: { quote.content } 
    </div> : null
  )
}

export default QuoteDetails;