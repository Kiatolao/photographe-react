import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../index.css';
import useFetch from '../components/useFetch';


export default function Header() {
    const { fetchData: logoData} = useFetch('https://directus-production-36e3.up.railway.app/items/logo');
    const { fetchData: socialData} = useFetch('https://directus-production-36e3.up.railway.app/items/social');
  return (
    <>
    <Navbar collapseOnSelect expand="lg" className="navbar-color">
    <Container className="">
      <Link to="/accueil">
        {logoData &&  (   <img
          src= {`https://directus-production-36e3.up.railway.app/assets/${logoData.image}`}

          className="d-inline-block align-top charles-logo"
          alt={logoData.title}
        />)} 
      </Link>

      <Navbar.Toggle aria-controls="responsive-navbar-nav" className="media-collapse" data-bs-theme="dark" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto mx-auto typo">
          <Link to="/accueil" className="nav-link">Accueil</Link>
          <Link to="/portfolio" className="nav-link">Portfolio</Link>
          <Link to="/tarifs" className="nav-link">Tarifs</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
        </Nav>
        <div className="social-icons-container">
        {socialData && socialData.map((social) => (
        <div className="social-position" key={social.id}>
          <a href={social.url}>
            <img
              src={`https://directus-production-36e3.up.railway.app/assets/${social.image}`}
              className="d-inline-block align-top social-logo"
              alt={social.title}
            />
          </a>
        </div>
        ))}
        </div>
      </Navbar.Collapse>
    </Container>
  </Navbar>
    </>

  )
}   
