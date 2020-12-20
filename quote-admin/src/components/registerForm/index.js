import { Form, Button } from 'react-bootstrap';
import {useState} from 'react';

import { createUser } from '../../api';

const RegisterForm = () => {
  const[email, setEmail] = useState('');
  const[username, setUsername] = useState('');
  const[password, setPassword] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(email, username, password).then(user => {
    });
  }
 /**
  * Used for handling the input fields for the Form. 
  */
  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
}

/**
 * Creating a form to create a new user, that way newcomers can login to the website.
 */
  return(
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="email">
          <Form.Label> Please enter your email, a username and a password! </Form.Label>
        <Form.Control 
          type="text" 
          placeholder="What is your email?"
          value={ email }
          onChange={handleEmailChange}
          />
          </Form.Group>
          <Form.Group controlId="username">
        <Form.Control
          type="text" 
          placeholder="What is your username?"
          value={ username }
          onChange={handleUsernameChange}
          />
      </Form.Group>
       <Form.Group controlId="password">
        <Form.Control 
          type="text" 
          placeholder="Please enter a password"
          value={ password }
          onChange={handlePasswordChange}
          />
      </Form.Group>
        <Button type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
} 

export default RegisterForm;