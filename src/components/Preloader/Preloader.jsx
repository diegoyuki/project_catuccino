import React from 'react';
import './Preloader.css';
import logo from '../../images/logo.png';

function Preloader() {
  return (
    <div className="preloader">
      <img src={logo} alt="Loading..." className="preloader__logo" />
    </div>
  );
}

export default Preloader;