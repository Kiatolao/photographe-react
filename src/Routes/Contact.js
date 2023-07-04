import React from 'react'
import './contact.css'

export default function Contact() {
  return (
    <>
    <h1 className='title-page'>CONTACT</h1>

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
          <button type="submit">Envoyer</button>
        </p>
      </form>
    </div>

    </>
  )
}
