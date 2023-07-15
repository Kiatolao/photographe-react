import React from 'react';
import Footer from '../components/Footer.js';
import { Card, Row, Col } from 'react-bootstrap';
import '../index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Tarifs() {
  const [cardData, setCardData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:8055/items/tarif');
        const { data } = response.data;
        setCardData(data);
        setIsLoading(false);
      } catch (error) {
        console.error('Error:', error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <h1 className="title-page">TARIFS ET PRESTATIONS</h1>
      <hr />
      <div className="container">
        {isLoading ? (
          <p>Loading...</p>
        ) : (
          <Row>
            {cardData.map((card) => (
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
