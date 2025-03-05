import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Ota yhteyttä</h2>
        <p>Kiinnostaako sinua kuulla lisää menetelmistä ja hoidoista?<br></br> <br></br> Ota rohkeasti yhteyttä niin palaan asiaan pian. </p>
      </div>
      <div className="contact-form">
        <form>
          <label className='label-info' htmlFor="name">Nimi: (pakollinen)</label>
          <input type="text" id="name" name="name" required />
          
          <label className='label-info' htmlFor="email">Email: (pakollinen)</label>
          <input type="email" id="email" name="email" required />
          
          <label className='label-info' htmlFor="message">Viesti: (pakollinen)</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Lähetä</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;