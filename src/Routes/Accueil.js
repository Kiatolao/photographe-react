import React from "react";
import '../index.css';
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';

export default function Accueil() {
  // Récupération de l'API
  const { fetchData, isLoading } = useFetch('https://directus-production-36e3.up.railway.app/items/background');

  return (
    <>
      <div className="fullscreen-bg">

      {isLoading ? (
        <p><Loading /></p>
      ) : (
        // Champs personnalisable de la page d'accueil
        fetchData && (
          <img src={`https://directus-production-36e3.up.railway.app/assets/${fetchData.image}`} alt={fetchData.title} className="charles" />
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

