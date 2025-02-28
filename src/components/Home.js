import React from 'react';
import heroImage from '../images/hero-image.png';
import massage1 from '../images/massage1.jpg';
import massage2 from '../images/massage2.jpg';
import Footer from './Footer';
import './Home.css';
import ContactUs from './ContactUs';
import suvi from '../images/suviturunen.jpg';
import kotivideo from '../images/kotivideo.mp4';
import TextAndImage from './TextAndImage';
import About from './About';
import Services from './Services';

const Home = () => {
  return (
    <>
        <TextAndImage />
      <section className="about-content">
      </section>
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
