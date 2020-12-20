import { useCookies } from 'react-cookie';
import { Alert, Row, Container, Col, Card, Form, Button, } from 'react-bootstrap';
import { useState } from 'react';
import { Route,  useHistory } from  "react-router-dom";

import { login } from '../../api';
import RegisterForm from '../../components/registerForm';

const Login = () => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [identity, setIdentity] = useState('');
  const [password, setPassword] = useState('');
  const [cookies, setCookie] = useCookies();
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(null);
    const { accessToken } = await login(identity, password);

    if (accessToken) {
      setCookie('jwt', accessToken);
      history.push('/quotes');
    } else {
      setErrorMessage('Invalid login details');
      setIdentity('');
      setPassword('');
    }
  };

/**
 * Creating the Login Page, adding in a link to the register page if users want to create an account.
 */
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md={5}>
          <Card>
            <Card.Body>
              <Card.Title>Login or <a href="/register">Register</a>
                    <Route path={'/register'}>
                    <RegisterForm />
                    </Route> </Card.Title>
              {errorMessage ? (
                <Alert variant="danger">{errorMessage}</Alert>
              ) : null}
              <Form onSubmit={handleSubmit}>
                <Form.Group controlId="identity">
                  <Form.Label>Username or Email (If you do not have an account, and do not want to make one. use username "guest" and password" </Form.Label>
                  <Form.Control
                    type="text"
                    value={identity}
                    onChange={(e) => setIdentity(e.target.value)}
                  />
                </Form.Group>
                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </Form.Group>
                <Button
                  type="submit"
                  disabled={identity.length === 0 || password.length === 0}
                >
                  Login
                </Button>
              </Form>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
