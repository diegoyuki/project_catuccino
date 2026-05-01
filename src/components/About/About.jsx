import React from 'react';
import './About.css';

function About() {
  return (
    <section className="about">
      <div className="about__container">
        <h2 className="about__title">Sobre Catuccino</h2>
        <div className="about__content">
          <div className="about__text-container">
            <p className="about__paragraph">
              Catuccino es mucho más que una cafetería en Monterrey; es un refugio 
              donde el aroma del café recién hecho se mezcla con el ronroneo de 
              nuestros residentes felinos.
            </p>
            <p className="about__paragraph">
              Nuestra misión es proporcionar un espacio seguro y amoroso para gatos 
              rescatados mientras buscan su hogar definitivo. Cada taza de café 
              que disfrutas ayuda directamente al cuidado, salud y bienestar de 
              nuestros michis.
            </p>
            <p className="about__paragraph">
              Ven a relajarte, trabajar o simplemente a conocer a tu próximo mejor 
              amigo. Todos nuestros gatos están listos para ser adoptados por 
              personas responsables que quieran cambiar una vida.
            </p>
          </div>
          <div className="about__image-container">
            <img 
              src="../../images/about-cats.jpg" 
              alt="Gatos en Catuccino" 
              className="about__image" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;