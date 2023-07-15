import React, { useState } from "react";
import Menu from "./gallery.js";
import { Col, Row, Image, Button } from 'react-bootstrap';
import '../index.css';
import Footer from '../components/Footer.js'

export default function Portfolio() {
  const [items, setItems] = useState(Menu);
  const [active, setActive] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const filterItem = (categItem) => {
    const updateItems = Menu.filter((curElem) => {
      return curElem.category === categItem;
    });

    setItems(updateItems);
    setActive(true);
  };

  const openPopup = (image) => {
    setSelectedImage(image);
  };

  const closePopup = () => {
    setSelectedImage(null);
  };
  
  return (
    <>
      <h1 className='title-page'>PORTFOLIO</h1>
      <hr />
      <div className="container">
  <div className="d-flex flex-wrap justify-content-center button-style">
    <Button variant="outline-light" className={active === "Bébé" ? "active" : ""} onClick={() => filterItem("Bébé")} style={{margin: "5px"}}>
      Bébé
    </Button>
    <Button variant="outline-light" className={active === "Mariage" ? "active" : ""} onClick={() => filterItem("Mariage")} style={{margin: "5px"}}>
      Mariage
    </Button>
    <Button variant="outline-light" className={active === "Grossesse" ? "active" : ""} onClick={() => filterItem("Grossesse")} style={{margin: "5px"}}>
      Grossesse
    </Button>
    <Button variant="outline-light" className={active === "Baptême" ? "active" : ""} onClick={() => filterItem("Baptême")} style={{margin: "5px"}}>
      Baptême
    </Button>
    <Button variant="outline-light" className={active === "Couple" ? "active" : ""} onClick={() => filterItem("Couple")} style={{margin: "5px"}}>
      Couple
    </Button>
    <Button variant="outline-light" className={active === "Famille" ? "active" : ""} onClick={() => filterItem("Famille")} style={{margin: "5px"}}>
      Famille
    </Button>
    <Button variant="outline-light" className={active === "All" ? "active" : ""} onClick={() => setItems(Menu)} style={{margin: "5px"}}>
      Toutes
    </Button>
  </div>
</div>

      <div className="container-fluid mt-4 ">
        <Row>
          {items.map((elem) => {
            const { id, name, image } = elem;

            return (
              <Col sm={4} className="d-flex justify-content-center align-items-center" key={id}>
                <div style={{ marginBottom: '15px' }}>
                  <Image
                    src={image}
                    alt={name}
                    fluid
                    className="image-container"
                    onClick={() => openPopup(image)}
                  />
                </div>
              </Col>
            );
          })}
        </Row>
      </div>

      {selectedImage && (
        <div className="popup">
          <div className="popup-content">
            <Image src={selectedImage} alt="Popup" fluid  className="pop-container"/>
            <button className="close-button" onClick={closePopup}>
               X 
            </button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}
