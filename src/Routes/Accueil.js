import React from 'react';
import Image from 'react-bootstrap/Image';
import './style.css';

export default function Accueil() {
  return (
    <>
      <div className="fullscreen-bg">
        <Image className="charles" src="/charles-cantin-brazil.jpg" fluid />
      </div>
    </>
  );
}

