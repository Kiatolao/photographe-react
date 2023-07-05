import React, { useState } from "react";
import Menu from "./gallery.js";
import { Col, Row, Image, Button } from 'react-bootstrap';
import './portfolio.css'
import Footer from './Footer.js'

export default function Portfolio() {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  
  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };
  
  return (
    <>
        <h1 className='title-page'>PORTFOLIO</h1>
    <hr></hr>
      <div className="container">
        <div className="d-flex justify-content-center">
          <Button variant="outline-light" className={active === "Bébé" ? "active" : ""} onClick={() => filterItem("Bébé")}>
            Bébé
          </Button>
          <Button variant="outline-light" className={active === "Mariage" ? "active" : ""} onClick={() => filterItem("Mariage")}>
            Mariage
          </Button>
          <Button variant="outline-light" className={active === "Grossesse" ? "active" : ""} onClick={() => filterItem("Grossesse")}>
            Grossesse
          </Button>
          <Button variant="outline-light" className={active === "Baptême" ? "active" : ""} onClick={() => filterItem("Baptême")}>
            Baptême
          </Button>
          <Button variant="outline-light" className={active === "Couple" ? "active" : ""} onClick={() => filterItem("Couple")}>
            Couple
          </Button>
          <Button variant="outline-light" className={active === "Famille" ? "active" : ""} onClick={() => filterItem("Famille")}>
            Famille
          </Button>
          <Button variant="outline-light" className={active === "All" ? "active" : ""} onClick={() => setItems(Menu)}>
            All
          </Button>
        </div>
      </div>

      <div className="container-fluid mt-4">
        <Row>
          {items.map((elem) => {
            const { id, image } = elem;

            return (
              <Col sm={4} className="d-flex justify-content-center align-items-center" key={id}>
                <div className="custom-image-container">
                  <div className="custom-image" style={{ backgroundImage: `url(${image})` }}></div>
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      <div className="container-fluid mt-4">
        <Row>
          {items.map((elem) => {
            const { id, name, image } = elem;

            return (
              <Col sm={4} className="d-flex justify-content-center align-items-center" key={id}>
                <div style={{ margin: '20px' }}>
                  <Image src={image} alt={name} fluid style={{ marginRight: '20px' }} className="custom-image" />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>
      <Footer/>
    </>
  )
}
