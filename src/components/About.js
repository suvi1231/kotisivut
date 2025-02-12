import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../images/hero-image.png';
import './About.css';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about">
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
      <div className="additional-info">
        <p>
          Hoito sopii kaiken ikäisille. Hoitoa ei voi tehdä, jos olet raskaana tai olet ollut leikkauksessa viimeisin 8 viikon aikana.
        </p>
        <p>
          Hoito voidaan tehdä vaatteet päällä. Mielellään aluskerrasto.
        </p>
        <p>
          Maksutavat: Käteinen, Kortti, E-passi, Edenred
        </p>
      </div>
      <section className="about-cta">
        <div className="cta-image">
          <img src={heroImage} alt="Call to Action" />
          <div className="cta-button">
            <Link to="/">Kotisivuille</Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
