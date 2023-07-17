import React from "react";
import '../index.css';
import useFetch from '../components/useFetch';

export default function Accueil() {

  const { fetchData, isLoading } = useFetch('https://directus-production-890c.up.railway.app/items/background');
  console.log(fetchData);

  return (
    <>
      <div className="fullscreen-bg">

      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        fetchData && (
          <img src={`http://localhost:8055/assets/${fetchData.image}`} alt={fetchData.title} className="charles" />
        )
      )}

      <div className="centered-text">
        <h1 className='title-splash'>Charles Cantin</h1>
        <h1 className='title-splash'>Photographe</h1>
      </div>
    </div>
    </>
  );
}

