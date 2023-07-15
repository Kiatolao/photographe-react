import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';


export default function Header() {
  const [logoData, setImageData] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8055/items/logo');
        const { data } = response.data;
        setImageData(data);
      } 
      catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);
  return (
    <Navbar collapseOnSelect expand="lg" className="navbar-color">
    <Container className="">
      <Link to="/accueil">
        {logoData &&  (   <img
          src= {`http://localhost:8055/assets/${logoData.image}`}
          height="70"
          className="d-inline-block align-top charles-logo"
          alt="React Bootstrap logo"
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
  )
}
