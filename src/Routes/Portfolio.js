import React, { useState } from "react";
import { Row, Col, Image, Button } from 'react-bootstrap';
import '../index.css';
import Footer from '../components/Footer.js'
import useFetch from '../components/useFetch';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState(''); 
  const { fetchData: buttonData, isLoading } = useFetch('http://localhost:8055/items/bouton');
  const { fetchData: galleryData } = useFetch('http://localhost:8055/items/gallerie');
  console.log(galleryData);

  return (
    <>
      <h1 className='title-page'>PORTFOLIO</h1>
      <hr />
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div className="container">
          <div className="d-flex flex-wrap justify-content-center button-style">
            {buttonData.map((button) => (
              <Button
                key={button.id}
                variant="outline-light"
                style={{ margin: "5px" }}
                onClick={() => setSelectedFilter(button.title)} 
              >
                {button.title}
              </Button>
            ))}
            <Button
              variant="outline-light"
              style={{ margin: "5px" }}
              onClick={() => setSelectedFilter('')} 
            >
              Toutes
            </Button>
          </div>
        </div>
      )}

      <div className="container-fluid mt-4">
        <Row>
          {galleryData &&
            galleryData
            .filter((gallery) => selectedFilter === '' || gallery.tag == selectedFilter) 
              .map((gallery) => (
                <Col sm={4} className="d-flex justify-content-center align-items-center" key={gallery.id}>
                  <div style={{ marginBottom: '15px' }}>
                    <Image
                      src={`http://localhost:8055/assets/${gallery.image}`}
                      alt={gallery.title}
                      fluid
                      className={`image-container ${gallery.tag}`}
                    />
                  </div>
                </Col>
              ))}
        </Row>
      </div>
      <Footer />
    </>
  );
}
