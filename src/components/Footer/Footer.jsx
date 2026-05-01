import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__copyright">
          © 2026 Catuccino - Monterrey, NL.
        </p>
        <nav className="footer__nav">
          <ul className="footer__links">
            <li className="footer__list-item">
              <a href="/" className="footer__link">Inicio</a>
            </li>
            <li className="footer__list-item">
              <a 
                href="https://github.com" 
                className="footer__link" 
                target="_blank" 
                rel="noreferrer"
              >
                GitHub
              </a>
            </li>
            <li className="footer__list-item">
              <a 
                href="https://facebook.com" 
                className="footer__link" 
                target="_blank" 
                rel="noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="footer__list-item">
              <a 
                href="https://instagram.com" 
                className="footer__link" 
                target="_blank" 
                rel="noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;