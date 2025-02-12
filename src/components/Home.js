import React from 'react';
import heroImage from '../images/hero-image.png';
import massage1 from '../images/massage1.jpg';
import massage2 from '../images/massage2.jpg';
import Footer from './Footer';
import './Home.css';
import ContactUs from './ContactUs';

const Home = () => {
  return (
    <>
      <section className="hero">
        <img src={heroImage} alt="Hero" />
        <h1>Hermoratahieronta on ihmisen kokonaisvaltaista hoitoa</h1>
      </section>
      <section className="about-content">
        <div className="about-text">
          <h2>Lisää minusta</h2>
          <p>
            At Healing Naturally by Suvi, we are dedicated to providing holistic healing services to help you achieve optimal health and well-being. Our experienced practitioners offer a range of natural therapies tailored to your individual needs.
          </p>
          <p>
            We believe in the power of nature and the body's innate ability to heal itself. Through our personalized approach, we aim to address the root cause of your health concerns and guide you on a path towards balance and vitality.
          </p>
        </div>
        <div className="about-image">
          <img src={heroImage} alt="About Us" />
        </div>
      </section>
      <section className="services">
        <div className="service">
          <img src={massage1} alt="Hermoratahieronta" />
          <div className="service-description">
            <h2>Hermoratahieronta 1,5-2h (sis. alkukartoituksen)</h2>
            <p className="price">130€ (sis. alv 25.5%)</p>
            <p>Hermoratahieronta on ihmisen kokonaisvaltaista hoitoa, joka rentouttaa ja tasapainottaa kehoa ja mieltä.</p>
          </div>
        </div>
        <div className="service">
          <img src={massage2} alt="Hermoratahieronta" />
          <div className="service-description">
            <h2>Hermoratahieronta aloituspaketti 3-5krt (1,5-2h krt) voimassa 6kk</h2>
            <p className="price">115€ (sis. alv 25.5%)</p>
            <p>Hermoratahieronta on ihmisen kokonaisvaltaista hoitoa, joka rentouttaa ja tasapainottaa kehoa ja mieltä.</p>
          </div>
        </div>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
