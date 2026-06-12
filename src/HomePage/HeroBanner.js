import React from 'react';
import './HeroBanner.css';

export default function HeroBanner() {
  return (
    <section className="hero-banner">
      <div className="hero-overlay">
        <div className="hero-content">
          <p className="hero-eyebrow">Custom t-shirt experience</p>
          <h1>Wear Your World</h1>
          <p className="hero-copy">
            Build premium matte black, white, and deep gold tees with a striking design-first experience tailored for your brand.
          </p>
          <div className="hero-actions">
            <a className="hero-btn hero-btn-primary" href="#customize">Customize Now</a>
            <a className="hero-btn hero-btn-secondary" href="#shop">Shop Collection</a>
          </div>
        </div>
      </div>
    </section>
  );
}
