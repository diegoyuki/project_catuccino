import { Link } from 'react-router-dom';
import logo from '../../images/logo.png';
import './Header.css';

function Header({ onSupportClick, isDark }) {
  const linkClass = `header__link ${isDark ? 'header__link_dark' : ''}`;

  return (
    <header className={`header ${isDark ? 'header_dark-mode' : ''}`}>
      <div className="header__container">
        <Link to="/" className="header__logo-container">
          <img src={logo} alt="Catuccino Logo" className="header__logo-image" />
          <span className={`header__logo-text ${isDark ? 'header__link_dark' : ''}`}>
            Catuccino
          </span>
        </Link>
        
        <nav className="header__nav">
          <Link to="/" className={linkClass}>
            Inicio
          </Link>
          <Link to="/menu" className={linkClass}>
            Menú
          </Link>
          <Link to="/cats" className={linkClass}>
            Nuestros Gatos
          </Link>
          <Link to="/reservaciones" className={linkClass}>
            Reservaciones
          </Link>
          <Link to="/contacto" className={linkClass}>
            Contacto
          </Link>
          <button className="header__support-button" onClick={onSupportClick}>
            Apóyanos
          </button>
        </nav>
      </div>
    </header>
  );
}

export default Header;