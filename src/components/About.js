import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/hero-image.png';
import './About.css';

const About = () => {
  return (
    <div className="about">
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
      <section className="about-cta">
        <div className="cta-image">
          <img src={heroImage} alt="Call to Action" />
          <div className="cta-button">
            <Link to="/">Back to Home</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
