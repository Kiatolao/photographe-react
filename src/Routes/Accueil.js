import React from 'react';
import Image from 'react-bootstrap/Image';
import './style.css';

export default function Accueil() {
  return (
    <>
    <div className="fullscreen-bg">
      <Image className="charles" src="/charles-cantin-brazil.jpg" fluid />
      <div className="centered-text">
        <h1 className='gradient-text'>Charles Cantin</h1>
        <h1 className='gradient-text'>Photographe</h1>
      </div>
    </div>
    </>
  );
}

