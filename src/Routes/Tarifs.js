import React from 'react';
import Footer from '../components/Footer.js';
import { Card, Row, Col } from 'react-bootstrap';
import '../index.css';
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';

export default function Tarifs() {
  //recuperation de l'API
  const { fetchData, isLoading } = useFetch('https://directus-production-36e3.up.railway.app/items/tarif');

  return (
    <>
      <h1 className="title-page">TARIFS ET PRESTATIONS</h1>
      <hr />
      <div className="container">
        {isLoading ? (
          <p><Loading /></p>
        ) : (
          // Champs personnalisable de la page d'accueil
          <Row>
            {fetchData.map((card) => (
              <Col key={card.id} sm={12} md={6} lg={4}>
                <Card className="card-style">
                  <Card.Img
                    src={`https://directus-production-36e3.up.railway.app/assets/${card.image}`}
                    alt={card.title}
                    className="card-image"
                  />
                  <Card.Body>
                    <Card.Title>{card.title}</Card.Title>
                    <Card.Text>{card.description}</Card.Text>
                    <Card.Text className='card-price'>{card.price}</Card.Text>
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
