import React from 'react'
import Footer from './Footer.js'
import { Card, Row, Col } from 'react-bootstrap';
import './tarifs.css'

export default function Tarifs() {
  return (
    <>
    <h1 className='title-page'>TARIFS ET PRESTATIONS</h1>
    <hr></hr>
    <div className="card-position">
    <Row >
      <Col sm={4}>
        <Card style={{ width: '18rem' }} className='card-style'>
          <Card.Img variant="top" src="baby-hat.jpg" className='card-image' />
          <Card.Body>
            <Card.Title className='card-title'>Mon bébé</Card.Title>
            <Card.Text className='card-text'>
              Photo d’enfant jusqu’à 3 ans (photo à domicile) <br></br>
              <span className='card-price'>
          <strong>100€</strong>
        </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card style={{ width: '18rem' }} className='card-style'>
          <Card.Img variant="top" src="femme.jpg" className='card-image' />
          <Card.Body>
            <Card.Title className='card-title'>Juste moi</Card.Title>
            <Card.Text className='card-text'>
              Séance pour une personne, en extérieur ou en studio <br></br>
              <span className='card-price'>
          <strong>130€</strong>
        </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card style={{ width: '18rem' }} className='card-style'>
          <Card.Img variant="top" src="couple.jpg" className='card-image'  />
          <Card.Body>
            <Card.Title className='card-title'>Pour deux</Card.Title>
            <Card.Text className='card-text'>
            Pour deux personnes, en extérieur ou en studio<br></br>
            <span className='card-price'>
          <strong>195€</strong>
        </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>
    <div className="card-position">
    <Row >
      <Col sm={4}>
        <Card style={{ width: '18rem' }} className='card-style'>
          <Card.Img variant="top" src="family.jpg" className='card-image'  />
          <Card.Body>
            <Card.Title className='card-title'>Famille</Card.Title>
            <Card.Text className='card-text'>
            Pour la famille ou les amis jusqu’à 4 personnes, en extérieur ou ... <br></br>
            <span className='card-price'>
          <strong>220€</strong>
        </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card style={{ width: '18rem' }} className='card-style'>
          <Card.Img variant="top" src="enceinte.jpg" className='card-image'  />
          <Card.Body>
            <Card.Title className='card-title'>Il était une fois</Card.Title>
            <Card.Text className='card-text'>
            Photo de grossesse (À votre domicile, en extérieur ou en studio)<br></br>
            <span className='card-price'>
          <strong>160€</strong>
        </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
      <Col sm={4}>
        <Card style={{ width: '18rem' }} className='card-style'>
          <Card.Img variant="top" src="mariage.jpg" className='card-image'  />
          <Card.Body>
            <Card.Title className='card-title'>J immortalise l événement</Card.Title>
            <Card.Text className='card-text'>
            Prestation de mariage ou baptême sur devis<br></br>
            <span className='card-price'>
          <strong>Prix sur mesure</strong>
        </span>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
    </div>

        <Footer />
    </>
  )
}
