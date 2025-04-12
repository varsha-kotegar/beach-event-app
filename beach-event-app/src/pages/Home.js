// src/pages/Home.js

import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero-section">
        <div className="overlay">
          <h1 className="hero-title">Welcome to 🌴 BeachFest 2025!</h1>
          <p className="hero-subtitle">Celebrate the waves, sun, and fun like never before.</p>
          <Link to="/events" className="cta-button">Explore Events</Link>
        </div>
      </section>

      <section className="features-section">
        <h2 className="section-title">🌟 Why Join BeachFest?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>🎶 Live Music</h3>
            <p>Groove to performances by top DJs and local artists.</p>
          </div>
          <div className="feature-card">
            <h3>🏄 Beach Games</h3>
            <p>Take part in volleyball, surf competitions & more!</p>
          </div>
          <div className="feature-card">
            <h3>🍴 Food & Drinks</h3>
            <p>Enjoy the best beachside bites and beverages.</p>
          </div>
        </div>
        <Link to="/registration" className="register-now-button">Register Now</Link>
      </section>
    </div>
  );
};

export default Home;
