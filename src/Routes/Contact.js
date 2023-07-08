import React from 'react'
import '../index.css'
import Footer from './Footer.js'


export default function Contact() {
  return (
    <>
    <h1 className='title-page'>CONTACT</h1>
    <hr></hr>
    <div>
      <p className='text-contact'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus mollis, odio varius venenatis eleifend, libero nibh pellentesque diam, id consequat urna est at ante. Morbi bibendum laoreet viverra. Morbi mattis, ligula sit amet facilisis consectetur, ligula lectus pulvinar nibh, ac lobortis erat justo eu erat. Morbi in lobortis massa, vitae.
      </p>
      <div className='text-contact'>
        <p>Charles Cantin <br></br>
        17 rue Nowhere<br></br>
        Nonecity 77777<br></br>
        02 03 04 05 06</p>
      </div>
      <hr></hr>
      <div className='form-position'>
        <form name="contact" method="POST" data-netlify="true">
          <p>
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
    <Footer />
    </>
  )
}
