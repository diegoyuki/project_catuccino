import React from 'react';
import { Link } from 'react-router-dom';
import './About.css';
import aboutImg from '../../images/about-cat.webp';

function About() {
  return (
    <section className="about" id="about">
      <div className="about__container">
        <div className="about__content">
          <h2 className="about__title">Nuestra Misión</h2>
          <p className="about__text">
            Catuccino es un refugio diseñado para gatos y para que quienes nos visiten por primera vez se sientan como en casa.
          </p>
          <p className="about__text">
            Nuestra misión principal es proporcionar un espacio relajante y de curación donde las personas y los gatos puedan pasar un tiempo feliz juntos, ofreciendo un escape sereno del bullicio de la vida urbana.
          </p>
          <Link to="/moreabout" className="about__button">Conocer más</Link>
        </div>
        <img src={aboutImg} alt="Gato en Catuccino" className="about__image" />
      </div>
    </section>
  );
}

export default About;