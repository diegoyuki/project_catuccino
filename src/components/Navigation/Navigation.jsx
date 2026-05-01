import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <nav className="nav">
      <ul className="nav__list">
        <li className="nav__item">
          <NavLink 
            to="/" 
            className={({ isActive }) => 
              `nav__link ${isActive ? "nav__link_active" : ""}`
            }
          >
            Inicio
          </NavLink>
        </li>
        <li className="nav__item">
          <NavLink 
            to="/cats" 
            className={({ isActive }) => 
              `nav__link ${isActive ? "nav__link_active" : ""}`
            }
          >
            Nuestros Gatos
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;