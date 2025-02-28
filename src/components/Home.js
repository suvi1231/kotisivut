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
        {/* <img src={heroImage} alt="Hero" />
        <h1>Hermoratahierontaa
        — terveytesi tueksi</h1> */}
        <TextAndImage />
      <section className="about-content">
        {/* <div className="about-text">
          <h2>Lisää minusta</h2>
          <p>
            Minua on lapsesta asti kiehtonut kokonaisvaltainen hyvinvointi ja ravinnon sekä liikunnan merkitys osana sitä. Olen kiertänyt eri puolilla maailmaa saaden oppia lukuisilta huippuosaajilta ja kasvattanut omaa tietämystäni siitä, miten kokonaisvaltaista hyvinvointia voi edistää luontaisilla menetelmillä.
          </p>
          <p>
            Ensimmäiset oppini kokonaisvaltaiseen hyvinvointiin liittyen sain jo vuonna 2014, kun valmistuin SKY opistosta, jossa suoritin opintojen lisäksi kansainvälisesti arvostetun Cidesco tutkinnon. Tämän jälkeen olen suorittanut lukuisia opintoja eripuolilla maailmaa ja viimeisin opintoreissuni oli 2024 Balilla, josta sain valtavasti oppia itämaisiin menetelmiin.
          </p>
          <p>
            Yhdistelemällä saamiani oppeja osana hermoratahierontaa voin tarjota apua moniin sairauksiin ja ennalta ehkäistä niiden syntyä ja kehittymistä.
          </p>
        </div>
        <div className="about-image">
          <img src={suvi} alt="About Us" />
        </div> */}
      </section>
      <Services />
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
