import React from "react";
import '../index.css';
import useFetch from '../components/useFetch';


export default function Accueil() {

  const { fetchData, isLoading } = useFetch('../../_background/2023-07-16-charles-cantin.md');
  console.log(fetchData);


  return (
    <>
      <div className="fullscreen-bg">

      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        fetchData && (
          <img src={fetchData.image} alt={fetchData.title} className="charles" />
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

