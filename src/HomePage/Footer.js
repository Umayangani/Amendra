import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-brand-center">
          <div className="brand-name">AMENDRA</div>
        </div>

        <div className="footer-card">
          <div className="footer-grid">
          <div>
            <p className="panel-title">Navigation</p>
            <ul className="footer-list">
              <li><a href="#home">Home</a></li>
              <li><a href="#customize">Customize</a></li>
              <li><a href="#shop">Shop</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>

          <div>
            <p className="panel-title">Legal Info</p>
            <ul className="footer-list">
              <li><a href="#terms">Terms & Conditions</a></li>
              <li><a href="#privacy">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <p className="panel-title">Contact</p>
            <ul className="footer-list contact-list">
              <li className="contact-item">Phone: <a href="tel:+1234567890">+1 234 567 890</a></li>
              <li className="contact-item">WhatsApp: <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">+1 234 567 890</a></li>
              <li className="contact-item">Email: <a href="mailto:contact@amendra.com">contact@amendra.com</a></li>
            </ul>

            <div className="social-links" aria-label="Social links">
              <a className="social-link" href="https://facebook.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M22 12.07C22 6.52 17.5 2 12 2S2 6.52 2 12.07C2 17.09 5.66 21.17 10.44 21.95v-6.79H7.9v-2.96h2.54V9.83c0-2.5 1.49-3.89 3.77-3.89 1.09 0 2.23.2 2.23.2v2.45h-1.25c-1.23 0-1.61.77-1.61 1.56v1.87h2.74l-.44 2.96h-2.3v6.79C18.34 21.17 22 17.09 22 12.07z" fill="#B9975D"/></svg>
              </a>
              <a className="social-link" href="https://instagram.com/yourpage" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 6.5a4.5 4.5 0 100 9 4.5 4.5 0 000-9zm6.5-3a1.1 1.1 0 11-2.2 0 1.1 1.1 0 012.2 0zM12 9.5a2.5 2.5 0 110 5 2.5 2.5 0 010-5z" fill="#B9975D"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

        <div className="footer-tagline-row">
          <span className="footer-tagline">Elegance in Every Story</span>
        </div>

        <div className="footer-bottom">
          <p className="copy">© {new Date().getFullYear()} AMENDRA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
