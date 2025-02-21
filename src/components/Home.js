import React from 'react';
import heroImage from '../images/hero-image.png';
import massage1 from '../images/massage1.jpg';
import massage2 from '../images/massage2.jpg';
import Footer from './Footer';
import './Home.css';
import ContactUs from './ContactUs';
import suvi from '../images/suviturunen.jpg';
import kotivideo from '../images/kotivideo.mp4';

const Home = () => {
  return (
    <>
      <section className="hero">
        <img src={heroImage} alt="Hero" />
        <h1>Hermoratahierontaa
        — terveytesi tueksi</h1>
      </section>
      <section className="about-content">
        <div className="about-text">
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
        </div>
      </section>
      <h1 className='services-header'>Hoidot ja hinnasto</h1>
      <section className="services">
        <div className="service">
          <div className="service-description">
            <h2>Kertakäynti</h2>
            <p className="price">135€</p>
            <p>Mahdollisuus tutustua hoitomuotoon ja menetelmiin ilman suurempaa sitoutumista.</p>
          </div>
        </div>
        <div className="service">
          <div className="service-description">
            <h2>Sarjahoito (5 kertaa)</h2>
            <p className="price">650€</p>
            <p>Suositellaan pitkään jatkuneisiin kiputiloihin ja sairauksiin viiden (5) käyntikerran pakettina.</p>
          </div>
        </div>
        <div className="service">
          <div className="service-description">
            <h2>Sarjahoito (10 kertaa)</h2>
            <p className="price">1250€</p>
            <p>Suositellaan pitkään jatkuneisiin kiputiloihin ja sairauksiin 10 käyntikerran pakettina.</p>
          </div>
        </div>
      </section>
      <section className="service-info">
        <p>
          Hoidot kestävät noin kaksi (2) tuntia. Ensimmäisen hoidon yhteydessä kartoitetaan sinun vaivasi ja suunnitellaan yhdessä niihin sopiva ratkaisu. Jokainen vaiva ja oire on yksilöllinen ja on tärkeää rakentaa juuri sinun kehosi kannalta oikea hoitopaketti sekä hoitosuunnitelma lyhyellä ja pitkällä aikavälillä. Oikein mitoitetulla hoitosuunnitelmalla ja tiiviillä hoitosyklillä saadaan merkittävää hyötyä kehon toiminnan kannalta. Kysyy lisää hoidoista, vastaan mielelläni!
        </p>
      </section>
      <ContactUs />
      <Footer />
    </>
  );
};

export default Home;
