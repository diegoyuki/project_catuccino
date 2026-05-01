import React from 'react';
import './CatCard.css';

function CatCard({ cat }) {
  return (
    <article className="cat-card">
      <img 
        src={cat.url} 
        alt={cat.breeds?.[0]?.name || "Gato de Catuccino"} 
        className="cat-card__image" 
      />
      <div className="cat-card__info">
        <p className="cat-card__date">Residente desde 2026</p>
        <h3 className="cat-card__title">
          {cat.breeds?.[0]?.name || "Gato Amistoso"}
        </h3>
        <p className="cat-card__description">
          {cat.breeds?.[0]?.description || "Este pequeño busca un hogar lleno de amor en Monterrey. Es juguetón, saludable y está listo para conocerte."}
        </p>
        <p className="cat-card__source">Catuccino Café</p>
      </div>
      <button 
        type="button" 
        className="cat-card__save-button" 
        aria-label="Guardar gato"
      />
    </article>
  );
}

export default CatCard;