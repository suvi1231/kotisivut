import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactUs.css';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b2y4eui', 'template_94yu919', form.current, 'N6dqWLl_5CEojFM04')
      .then((result) => {
          form.current.reset(); // Clear the form fields
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Ota yhteyttä</h2>
        <p>Kiinnostaako sinua kuulla lisää menetelmistä ja hoidoista?<br></br> <br></br> Ota rohkeasti yhteyttä niin palaan asiaan pian. </p>
      </div>
      <div className="contact-form">
        <form ref={form} onSubmit={sendEmail}>
          <label className='label-info' htmlFor="name">Nimi: (pakollinen)</label>
          <input type="text" id="name" name="from_name" required />
          
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