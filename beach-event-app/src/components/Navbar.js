// src/components/Navbar.js

import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Events', path: '/events' },
    { name: 'Registration', path: '/registration' },
    { name: 'Reviews', path: '/reviews' },
    { name: 'Calendar', path: '/calendar' },
    { name: 'Beaches', path: '/beaches' },
    { name: 'Login', path: '/login' },
    { name: 'Signup', path: '/signup' },
  ];

  return (
    <header className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <p id='mypara'>🌴 BeachFest </p>
        </Link>
        <nav className="nav-links">
          {navItems.map((item) => (
            <Link
              key={item.name}
              to={item.path}
              className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
            >
              {item.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
