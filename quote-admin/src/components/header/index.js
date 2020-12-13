import { Navbar, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const Header = () => (
<header>
  <Navbar>
      <Navbar.Brand href="#">
        Quote Admin
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="quote-navbar" />
      <Navbar.Collapse id="quote-navbar">
        <Nav>
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
          <LinkContainer to="/quotes">
            <Nav.Link>Quotes</Nav.Link>
          </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
</header>
)

export default Header;