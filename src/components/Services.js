import React from 'react';
import './Services.css';
import treatmentImage from '../images/Suvikukka.png'; // Add your image path here
import kotivideo from '../images/kotivideo.mp4'; 

const Services = () => {
    return (
        <div className="services-container">
            <section className="services-header">
                <div className="header-content">
                    <h1>Hoidot</h1>
                    <p>Mahdollisuus tutustua hoitomuotoon ja menetelmiin ilman suurempaa sitoutumista. Hoidot kestävät noin kaksi (2) tuntia. Ensimmäisen hoidon yhteydessä kartoitetaan sinun vaivasi ja suunnitellaan yhdessä niihin sopiva ratkaisu. Jokainen vaiva ja oire on yksilöllinen ja on tärkeää rakentaa juuri sinun kehosi kannalta oikea hoitopaketti sekä hoitosuunnitelma lyhyellä ja pitkällä aikavälillä. Oikein mitoitetulla hoitosuunnitelmalla ja tiiviillä hoitosyklillä saadaan merkittävää hyötyä kehon toiminnan kannalta. Kysyy lisää hoidoista, vastaan mielelläni!</p>
                </div>
                <div className="header-image">
                    <img src={treatmentImage} alt="Treatment" />
                </div>
            </section>

            <section className="services-pricing">
                <h2>Hinnasto</h2>
                <h3 className='services-pricing-h3'>Hermoratahieronta (hinnat sis. alv 25,5%)</h3>
                <div className="services-oneline">
                <div className="service">
                    <div className="service-description">
                        <h3>Kertakäynti</h3>
                        <p className="price">135€</p>
                        <p>Mahdollisuus tutustua hoitomuotoon ja menetelmiin ilman suurempaa sitoutumista.</p>
                    </div>
                </div>
                <div className="service">
                    <div className="service-description">
                        <h3>Sarjahoito</h3>
                        <p className="price"> 595€ (1krt 119€)</p>
                        <p>Suositellaan pitkään jatkuneisiin kiputiloihin ja sairauksiin viiden (5) käyntikerran pakettina.</p>
                    </div>
                </div>
                <div className="service">
                    <div className="service-description">
                        <h3>Sarjahoito</h3>
                        <p className="price">1090€ (1krt 109€) </p>
                        <p>Suositellaan pitkään jatkuneisiin kiputiloihin ja sairauksiin 10 käyntikerran pakettina.</p>
                    </div>
                </div>
                </div>
            </section>

            <section className="services-video">
                <video autoPlay loop muted>
                    <source src={kotivideo} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </section>

            <h1 className='services-header-h1'>Ajanvaraus ja maksutavat</h1>
            <section className="services-booking">
                <div className="booking-left">
                    <h2>Ajanvaraus</h2>
                    <p className='booksalon-link' ><a href="https://booksalon.fi/salon/healing-naturally-by-suvi?booking-state=N4IgpgtgDgNg9gTzGAkgExALhANgOwCMAxnmgMwBMAhkVQKw4AsADMxY3WAEaNFkgBfIA" target="_blank" rel="noopener noreferrer">Booksalon</a></p>
                    <p>Sähköposti: info@healingbysuvi.fi</p>
                    <p>Puhelinnumero: +358503527209</p>
                </div>
                <div className="booking-right">
                    <h2>Maksutavat</h2>
                    <p>Käteinen</p>
                    <p>Pankkikortti</p>
                    <p>E-Passi</p>
                    <p>Edenred</p>
                    <p>Smartum</p>
                </div>
            </section>
        </div>
    );
}

export default Services;