import React from 'react';
import Footer from '../components/Footer.js';
import { Card, Row, Col } from 'react-bootstrap';
import '../index.css';
import useFetch from '../components/useFetch';

export default function Tarifs() {

  const { fetchData, isLoading } = useFetch('http://localhost:8055/items/tarif');

  return (
    <>
      <h1 className="title-page">TARIFS ET PRESTATIONS</h1>
      <hr />
      <div className="container">
        {isLoading ? (
          <p>Chargement...</p>
        ) : (
          <Row>
            {fetchData.map((card) => (
              <Col key={card.id} sm={12} md={6} lg={4}>
                <Card className="card-style">
                  <Card.Img
                    src={`http://localhost:8055/assets/${card.image}`}
                    alt={card.title}
                    className="card-image"
                  />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <Card.Text className='card-price'>{card.prix}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </div>

      <Footer />
    </>
  );
}
