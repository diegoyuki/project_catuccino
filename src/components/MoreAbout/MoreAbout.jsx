import React from 'react';
import './MoreAbout.css';
import ceoImg from '../../images/moreaboutcat2.webp'; 
import historyImg from '../../images/moreaboutcat1.webp';

function MoreAbout() {
  return (
    <section className="more-about">
      <div className="more-about__header">
        <h1 className="more-about__main-title">Nuestra Historia y Cultura</h1>
        <p className="more-about__subtitle">Desde 2015 creando vínculos entre humanos y felinos.</p>
      </div>

      <div className="more-about__section">
        <div className="more-about__container">
          <div className="more-about__content">
            <h2 className="more-about__title">El Origen</h2>
            <p className="more-about__text">
              Fundado en el año 2015, Catuccino nació de la visión de crear un santuario donde el aroma del café recién hecho se mezclara con el ronroneo terapéutico de los gatos. Lo que comenzó como un pequeño local se ha convertido en un referente de bienestar animal en la ciudad.
            </p>
            <p className="more-about__text">
              Aquí, el tiempo se detiene. Puedes disfrutar de un libro, trabajar en un ambiente tranquilo o simplemente conectar con nuestros residentes felinos, quienes han encontrado en este café un hogar temporal lleno de amor mientras esperan a su familia definitiva.
            </p>
          </div>
          <img src={historyImg} alt="Historia" className="more-about__image" />
        </div>
      </div>

      <div className="more-about__section more-about__section_reverse">
        <div className="more-about__container">
          <div className="more-about__content">
            <h2 className="more-about__title">Liderazgo Joven</h2>
            <p className="more-about__text">
              A la cabeza de este proyecto se encuentra Diego Prieto Cazares, nuestro CEO de 21 años. Con una pasión profunda por la tecnología y el bienestar animal, Diego ha logrado integrar sistemas modernos de gestión con la calidez humana que caracteriza a Catuccino.
            </p>
            <p className="more-about__text">
              "Mi objetivo es que cada taza de café servida se convierta en una mejor calidad de vida para nuestros gatos", menciona Diego. Bajo su dirección, el café ha implementado programas de adopción responsable y eventos de concientización.
            </p>
          </div>
          <img src={ceoImg} alt="CEO" className="more-about__image" />
        </div>
      </div>
    </section>
  );
}

export default MoreAbout;