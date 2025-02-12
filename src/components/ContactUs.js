import React from 'react';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <section className="contact">
      <div className="contact-info">
        <h2>Ota yhteyttä</h2>
        <p>Hei, otathan yhteyttä jos sinulla on kysymyksiä tai jokin jäi mietityttämään</p>
      </div>
      <div className="contact-form">
        <form>
          <label htmlFor="name">Nimi:</label>
          <input type="text" id="name" name="name" required />
          
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          
          <label htmlFor="message">Viesti:</label>
          <textarea id="message" name="message" required></textarea>
          
          <button type="submit">Lähetä</button>
        </form>
      </div>
    </section>
  );
};

export default ContactUs;