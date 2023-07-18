import React from 'react';
import '../index.css';
import Footer from '../components/Footer.js';
import useFetch from '../components/useFetch';

export default function Contact() {
  const { fetchData: detailData, isLoading } = useFetch('https://directus-production-36e3.up.railway.app/items/contact');

  return (
    <>
      <h1 className='title-page'>CONTACT</h1>
      <hr />
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        detailData && (
          <div key={detailData.id}>
            <p className='text-contact'>{detailData.description}</p>
            <div className='text-contact'>
              <p>
                {detailData.nom} <br />
                {detailData.adresse}<br />
                {detailData.ville}<br />
                {detailData.telephone}
              </p>
            </div>
            <hr />
            <div className='form-position'>
              <form name="contact" method="POST" data-netlify="true" onSubmit="submit">
                <p>
                <input type="hidden" name="form-name" value="contact" />
                  <label>Prénom: <input type="text" name="surname" /></label>
                </p>
                <p>
                  <label>Nom: <input type="text" name="name" /></label>
                </p>
                <p>
                  <label>Email: <input type="email" name="email" /></label>
                </p>
                <p>
                  <label>Objet: <input type="text" name="object" /></label>
                </p>
                <p>
                  <label>Message: <textarea name="message"></textarea></label>
                </p>
                <p>
                  <button type="submit" className='button-87'>Envoyer</button>
                </p>
              </form>
            </div>
          </div>
        )
      )}
      <Footer />
    </>
  );
}
