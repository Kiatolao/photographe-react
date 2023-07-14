import React from "react";
import '../index.css';
import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Accueil() {

    const [imageData, setImageData] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await axios.get('http://localhost:8055/items/background');
          const { data } = response.data;
          setImageData(data);
        } catch (error) {
          console.error('Error:', error.message);
        }
      };
  
      fetchData();
    }, []);

  return (
    <>
      <div className="fullscreen-bg">

      {imageData && (
        <img src={`http://localhost:8055/assets/${imageData.image}`} alt={imageData.title} className="charles" />
      )}


      <div className="centered-text">
        <h1 className='title-splash'>Charles Cantin</h1>
        <h1 className='title-splash'>Photographe</h1>
      </div>
    </div>
    </>
  );
}

