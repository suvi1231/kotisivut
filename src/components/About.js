import React from 'react';
import personImage from '../images/suviturunen.jpg'; // Add your image path here
import './About.css';
import Footer from './Footer';

const About = () => {
  return (
    <div className="about">
      <section className="about-content">
        <div className="about-text">
          <h1>Kuka minä olen?</h1>
          <div className="mobile-image-about">
            <img src={personImage} alt="Person" />
          </div>
          <h3>Yhdistelemällä saamiani oppeja osana hermoratahierontaa voin tarjota apua moniin sairauksiin ja ennalta ehkäistä niiden syntyä ja kehittymistä.</h3>
          <p>
            Minua on lapsesta asti kiehtonut kokonaisvaltainen hyvinvointi ja ravinnon sekä liikunnan merkitys osana sitä. Olen kiertänyt eri puolilla maailmaa saaden oppia lukuisilta huippuosaajilta ja kasvattanut omaa tietämystäni siitä, miten kokonaisvaltaista hyvinvointia voi edistää luontaisilla menetelmillä.
          </p>
          <p>
            Ensimmäiset oppini kokonaisvaltaiseen hyvinvointiin liittyen sain jo vuonna <span className="highlight-year">2014</span>, kun valmistuin SKY opistosta, jossa suoritin opintojen lisäksi kansainvälisesti arvostetun Cidesco tutkinnon. Tämän jälkeen olen suorittanut lukuisia opintoja eripuolilla maailmaa ja viimeisin opintoreissuni oli 2024 Balilla, josta sain valtavasti oppia itämaisiin menetelmiin.
          </p>
        </div>
        <div className="about-image">
          <img src={personImage} alt="Person" />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;