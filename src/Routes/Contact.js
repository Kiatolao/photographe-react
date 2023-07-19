import React from 'react';
import '../index.css';
import Footer from '../components/Footer.js';
import useFetch from '../components/useFetch';
import Loading from '../components/Loading';
import ReCAPTCHA from 'react-google-recaptcha';
import ScrollToTopButton from '../components/Scroll.js';

export default function Contact() {
  //Récuperation de l'API
  const { fetchData: detailData, isLoading } = useFetch('https://directus-production-36e3.up.railway.app/items/contact');

  return (
    <>
      <ScrollToTopButton />
      <h1 className='title-page'>CONTACT</h1>
      <hr />
      {isLoading ? (
        <p><Loading /></p>
      ) : (
        //Champs personnalisable de la page contact
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
            {/* Insertion des attributs netlify pour la detection de Netlify Form */}
            <div className='form-position'>
              <form name="contact" 
              method="POST" 
              data-netlify="true" 
              data-netlify-recaptcha="true"
              onSubmit="submit">
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
                <ReCAPTCHA sitekey="6Ld-1DQnAAAAAPyh__eCp_JwweTMOdHITNEI-j5V"  className='captcha'/>
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
