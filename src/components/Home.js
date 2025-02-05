import React from 'react';
import heroImage from '../images/hero-image.png';
import massage1 from '../images/massage1.jpg';
import massage2 from '../images/massage2.jpg';
import hands1 from '../images/hands1.jpg';
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
          <h2>About Us</h2>
          <p>
            At Naturally Healing by Suvi, we are dedicated to providing holistic healing services to help you achieve optimal health and well-being. Our experienced practitioners offer a range of natural therapies tailored to your individual needs.
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
          <img src={massage1} alt="Service 1" />
          <div className="service-description">
            <h2>Service 1</h2>
            <p className="price">$50</p>
            <p>Indulge in a relaxing and rejuvenating massage experience that will melt away your stress and leave you feeling refreshed.</p>
          </div>
        </div>
        <div className="service">
          <img src={massage2} alt="Service 2" />
          <div className="service-description">
            <h2>Service 2</h2>
            <p className="price">$75</p>
            <p>Treat yourself to a luxurious massage that combines various techniques to target your specific needs and promote overall well-being.</p>
          </div>
        </div>
        <div className="service">
          <img src={hands1} alt="Service 3" />
          <div className="service-description">
            <h2>Service 3</h2>
            <p className="price">$100</p>
            <p>Experience the ultimate in relaxation with our signature massage that incorporates soothing aromatherapy and hot stone therapy for a truly indulgent experience.</p>
          </div>
        </div>
      </section>
      {/* <section className="contact">
        <h2>Contact Us</h2>
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" required></textarea>
          <button type="submit">Send</button>
        </form>
      </section> */}
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
