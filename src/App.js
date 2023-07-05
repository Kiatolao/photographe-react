import './App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Outlet } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
  <>
    <Navbar collapseOnSelect expand="lg" className="navbar-color">
      <Container className="">
      <img
          src="CCminit.png"
          height="70"
          className="d-inline-block align-top charles-logo"
          alt="React Bootstrap logo"
          href="/accueil"
      />

        <Navbar.Toggle aria-controls="responsive-navbar-nav" className="media-collapse" data-bs-theme="dark" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto mx-auto typo">
            <Nav.Link  href="/accueil">Accueil</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/tarifs">Tarifs</Nav.Link>
            <Nav.Link href="/contact">Contact</Nav.Link>
          </Nav>
          <div className="social-position">
            <a href='https://fr-fr.facebook.com/'>
            <img
          src="Facebook_logo.png"
          height="45"
          className="d-inline-block align-top fb-logo"
          alt="React Bootstrap logo"
      />
            </a>
        <a href='https://www.instagram.com'>
        <img
          src="Instagram_logo.webp"
          height="45"
          className="d-inline-block align-top insta-logo"
          alt="React Bootstrap logo"
      />
        </a>

        </div>
        </Navbar.Collapse>

      </Container>
    </Navbar>
    <Outlet/>
  </>
  );
}

export default App;
