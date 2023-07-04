import React from 'react';
import Image from 'react-bootstrap/Image';
import './accueil.css';

export default function Accueil() {
  return (
    <>
    <div className="fullscreen-bg">
      <Image className="charles" src="/charles-cantin-brazil.jpg" fluid />
      <div className="centered-text">
        <h1 className='title-splash'>Charles Cantin</h1>
        <h1 className='title-splash'>Photographe</h1>
      </div>
    </div>
    </>
  );
}

