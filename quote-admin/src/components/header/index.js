import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';

const Header = () => {
  const [cookies, setCookie, removeCookie] = useCookies();
  const history = useHistory();
  return(
    /**
     * Creates a header for my web application. Can be used to navigate around the website.
     */
<header>
      <Navbar className="justify-content-between">
        <Navbar.Brand href="#">Quote Admin</Navbar.Brand>
        <Navbar.Toggle aria-controls="earl-navbar" />
        {cookies.jwt ? (
          <>
              <Navbar.Collapse id="quote-navbar">
                <Nav>
                  <LinkContainer to="/home">
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer to="/quotes">
                    <Nav.Link>Quotes</Nav.Link>
                  </LinkContainer>
              </Nav>
            </Navbar.Collapse>
            <Nav>
              <Nav.Link
                onClick={() => {
                  removeCookie('jwt');
                  history.push('/login');
                }}
              >
                Logout
              </Nav.Link>
            </Nav>
          </>
        ) : null}
      </Navbar>
    </header>
  );
};

export default Header;