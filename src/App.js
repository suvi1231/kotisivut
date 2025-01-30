import React from 'react';
import './App.css';
import Header from './components/Header';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
      <section className="hero">
        <img src="hero-image.jpg" alt="Hero" />
      </section>
      <section className="services">
        <div className="service">
          <img src="service1.jpg" alt="Service 1" />
          <div className="service-description">
            <h2>Service 1</h2>
            <p>Description of Service 1</p>
          </div>
        </div>
        <div className="service">
          <img src="service2.jpg" alt="Service 2" />
          <div className="service-description">
            <h2>Service 2</h2>
            <p>Description of Service 2</p>
          </div>
        </div>
        <div className="service">
          <img src="service3.jpg" alt="Service 3" />
          <div className="service-description">
            <h2>Service 3</h2>
            <p>Description of Service 3</p>
          </div>
        </div>
      </section>
      <section className="contact">
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
      </section>
      <footer>
        <p>&copy; 2025 Naturally Healing by Suvi. All rights reserved.</p>
      </footer>
    </div>
    </BrowserRouter>
  );
}

export default App;
