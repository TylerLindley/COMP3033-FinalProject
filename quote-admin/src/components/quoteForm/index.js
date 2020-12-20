import { Form, Button } from 'react-bootstrap';
import {useState} from 'react';

import { createQuote } from '../../api';

const QuoteForm = () => {
  const[content, setContent] = useState('');
  const[videoLink, setVideoLink] = useState('');
  const[dateOfQuote, setDateOfQuote] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    createQuote(content, videoLink, dateOfQuote).then(quote => {
    });
  }
/**
 * Handles the input fields for the form.
 * @param  e 
 */
  const handlecontentChange = (e) => {
      setContent(e.target.value);
  }

  const handleVideoLinkChange = (e) => {
    setVideoLink(e.target.value);
}

const handleDateOfQuoteChange = (e) => {
  setDateOfQuote(e.target.value);
}
/**
 * Form to create a new quote and input it into the database.
 */
  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="content">
          <Form.Label> Enter your favourite Onika Quote </Form.Label>
          <Form.Control 
          type="text" 
          placeholder="What did she say?"
          value={ content }
          onChange={handlecontentChange}
          />
      </Form.Group>
       <Form.Group controlId="videoLink">
        <Form.Control 
          type="text" 
          placeholder="Any videos?"
          value={ videoLink }
          onChange={handleVideoLinkChange}
          />
      </Form.Group>
      <Form.Group controlId="dateOfQuote">
        <Form.Control 
          type="text" 
          placeholder="When did Onika say this?"
          value={ dateOfQuote }
          onChange={handleDateOfQuoteChange}
          />
        </Form.Group>

        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
} 

export default QuoteForm;