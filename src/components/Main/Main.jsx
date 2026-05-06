import React from 'react';
import './Main.css';
import videoSource from '../../images/hero-video.mp4';

function Main({ onSupportClick }) {
  return (
    <section className="main">
      <video className="main__video" autoPlay loop muted playsInline>
        <source src={videoSource} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      <div className="main__container">
        <h1 className="main__title">Descubre la experiencia Catuccino</h1>
        <p className="main__subtitle">
          Donde el aroma del café recién hecho se mezcla con el ronroneo de nuestros residentes felinos.
        </p>
        <button 
          type="button" 
          className="main__support-button"
          onClick={onSupportClick}
        >
          Apóyanos
        </button>
      </div>
    </section>
  );
}

export default Main;