import React from 'react'
import '../index.css';
import useFetch from './useFetch';

export default function footer() {
  const { fetchData, isLoading } = useFetch('http://localhost:8055/items/footer');

  return (
  <>
  {isLoading ? (
    <p></p>
  ) : (
    fetchData.map((footer) => (
    <footer className="footer mt-auto py-3" key={footer.id}>
      <div className="container">
      <hr></hr>
        <span className="text-footer">{footer.adresse} <br></br>
        {footer.numero} <br></br>
        </span>
        <span className="text-footer">{footer.trademark} </span>
        <span className="text-footer">- Charles Cantin®</span>
      </div>
    </footer>
    ))
  )}
  
  </>

  )
}
