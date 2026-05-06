import React from 'react';
import './Menu.css';
import snackImg from '../../images/menu-snack.jpg';
import postreImg from '../../images/menu-postre.jpg';
import bebidaImg from '../../images/menu-bebida.jpg';

function Menu() {
  const menuPdf = "/menu-catuccino.pdf";

  const categories = [
    { title: "Snacks Artesanales", img: snackImg, desc: "Opciones saladas y frescas perfectas para acompañar tu tarde." },
    { title: "Postres Dulces", img: postreImg, desc: "Elaborados diariamente con ingredientes locales y mucho amor." },
    { title: "Bebidas Especiales", img: bebidaImg, desc: "Desde cafés de especialidad hasta infusiones relajantes." }
  ];

  return (
    <section className="menu" id="menu">
      <div className="menu__container">
        <div className="menu__header">
          <h2 className="menu__title">Nuestra Selección</h2>
          <p className="menu__subtitle">Sabores diseñados para consentirte mientras disfrutas de la mejor compañía felina.</p>
        </div>
        
        <div className="menu__grid">
          {categories.map((item, index) => (
            <div key={index} className="menu__card">
              <div className="menu__image-wrapper">
                <img src={item.img} alt={item.title} className="menu__card-image" />
                <div className="menu__card-badge">Nuevo</div>
              </div>
              <div className="menu__card-info">
                <h3 className="menu__card-name">{item.title}</h3>
                <p className="menu__card-description">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
        
        <a href={menuPdf} target="_blank" rel="noopener noreferrer" className="menu__main-button">
          Explorar Menú Completo
        </a>
      </div>
    </section>
  );
}

export default Menu;