import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="brand">
          
          <div className="brand-text">
            <div className="brand-name">AMENDRA</div>
            <div className="tagline">Elegance in Every Story</div>
          </div>
        </div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#customize">Customize</a></li>
          <li><a href="#shop">Shop</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#contact">Loging</a></li>
        </ul>
      </div>
    </nav>
  );
}
