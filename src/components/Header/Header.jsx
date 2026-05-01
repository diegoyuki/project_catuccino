import React from 'react';
import Navigation from '../Navigation/Navigation';
import './Header.css';

function Header({ onLoginClick }) {
  return (
    <header className="header">
      <div className="header__container">
        <a href="/" className="header__logo">Catuccino</a>
        <div className="header__menu">
          <Navigation />
          <button 
            type="button" 
            className="header__login-button" 
            onClick={onLoginClick}
          >
            Iniciar sesión
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;