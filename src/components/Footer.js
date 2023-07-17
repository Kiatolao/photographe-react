import React from 'react'
import '../index.css';
import useFetch from './useFetch';

export default function footer() {
  const { fetchData, isLoading } = useFetch('https://directus-production-36e3.up.railway.app/items/piedpage');

  return (
  <>
  {isLoading ? (
    <p></p>
  ) : (
    fetchData &&  (
    <footer className="footer mt-auto py-3" key={fetchData.id}>
      <div className="container">
      <hr></hr>
        <span className="text-footer">{fetchData.adresse} <br></br>
        {fetchData.numero} <br></br>
        </span>
        <span className="text-footer">© Kiato -</span>
        <span className="text-footer">{fetchData.trademark} </span>
      </div>
    </footer>
    ))
  }
  
  </>

  )
}
