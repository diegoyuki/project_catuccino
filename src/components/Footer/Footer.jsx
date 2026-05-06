import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Footer.css';

function Footer() {
  const location = useLocation();
  // Detectamos si estamos en la ruta de gatos para cambiar el estilo
  const isCatsPage = location.pathname === '/cats' || location.pathname === '/menu';

  return (
    <footer className={`footer ${isCatsPage ? 'footer_type_cats' : ''}`}>
      <div className="footer__container">
        <p className="footer__copyright">© 2026 Catuccino - Monterrey, NL.</p>
        <nav className="footer__nav">
          <Link to="/" className="footer__link">Inicio</Link>
          <a href="https://github.com" target="_blank" rel="noreferrer" className="footer__link">GitHub</a>
          <a href="https://facebook.com" target="_blank" rel="noreferrer" className="footer__link">Facebook</a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer__link">Instagram</a>
        </nav>
      </div>
    </footer>
  );
}

export default Footer;