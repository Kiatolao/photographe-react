import React, { useState } from "react";
import {Image, Button } from 'react-bootstrap';
import '../index.css';
import Footer from '../components/Footer.js'
import useFetch from '../components/useFetch';
import Masonry from 'react-masonry-css';

export default function Portfolio() {
  const [selectedFilter, setSelectedFilter] = useState(''); 
  const { fetchData: buttonData, isLoading } = useFetch('https://directus-production-36e3.up.railway.app/items/bouton');
  const { fetchData: galleryData } = useFetch('https://directus-production-36e3.up.railway.app/items/portfolio');

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
      <div className="separator">
        <hr />
      </div>

<Masonry
  breakpointCols={{
    default: 3,
    1200: 2,
    992: 2,
    768: 1
  }}
  className="my-masonry-grid pt-4"
  columnClassName="my-masonry-grid_column"
>
{/* //à voir, ne peut pas filtrer si le tag ne commence pas par une majuscule - erreur avec toLowerCase() */}
  {galleryData &&
    galleryData
      .filter((gallery) => selectedFilter === '' || gallery.tag == selectedFilter) 
      .map((gallery) => (
        <div key={gallery.id} className="my-masonry-grid_item">
          <Image
            src={`https://directus-production-36e3.up.railway.app/assets/${gallery.image}`}
            alt={gallery.title}
            fluid
            className={`image-container ${gallery.tag}`}
          />
        </div>
      ))}
</Masonry>

      <Footer />
    </>
  );
}
