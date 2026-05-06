import React from 'react';
import './CatCard.css';

function CatCard({ cat }) {
  return (
    <article className="cat-card">
      <div className="cat-card__image-container">
        <img 
          src={cat.image} 
          alt={cat.name} 
          className="cat-card__image" 
        />
        <div className="cat-card__overlay">
          <h3 className="cat-card__name">{cat.name}</h3>
          <div className="cat-card__arrow">→</div>
        </div>
      </div>
    </article>
  );
}

export default CatCard;