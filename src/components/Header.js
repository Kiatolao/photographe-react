import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../index.css';
import useFetch from '../components/useFetch';

export default function Header() {
  const [expanded, setExpanded] = useState(false);

  // Recuperation de l'API
  const { fetchData: logoData } = useFetch('https://directus-production-36e3.up.railway.app/items/logo');
  const { fetchData: socialData } = useFetch('https://directus-production-36e3.up.railway.app/items/social');

  const handleNavToggle = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <Navbar collapseOnSelect expand="lg" className="navbar-color fixed-top">
        <Container className="">
          <Link to="/accueil">
            {/* Champs personnalisable du logo */}
            {logoData && (
              <img
                src={`https://directus-production-36e3.up.railway.app/assets/${logoData.image}`}
                className="d-inline-block align-top charles-logo"
                alt={logoData.title}
              />
            )}
          </Link>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="media-collapse"
            data-bs-theme="dark"
            onClick={handleNavToggle}
          />

          <Navbar.Collapse id="responsive-navbar-nav" in={expanded}>
            <Nav className="me-auto mx-auto typo">
              <Link to="/accueil" className="nav-link" onClick={handleNavToggle}>
                Accueil
              </Link>
              <Link to="/portfolio" className="nav-link" onClick={handleNavToggle}>
                Portfolio
              </Link>
              <Link to="/tarifs" className="nav-link" onClick={handleNavToggle}>
                Tarifs
              </Link>
              <Link to="/contact" className="nav-link" onClick={handleNavToggle}>
                Contact
              </Link>
            </Nav>

            <div className="social-icons-container">
              {/* Champs personnalisables des réseaux */}
              {socialData &&
                socialData.map((social) => (
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
  );
}
