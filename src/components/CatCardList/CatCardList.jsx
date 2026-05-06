import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import CatCard from '../CatCard/CatCard';
import './CatCardList.css';

function CatCardList({ cats }) {
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const displayCats = isHomePage ? cats.slice(0, 6) : cats;

  return (
    <section className="cats">
      <div className="cats__container">
        <h2 className="cats__title">Nuestros gatos</h2>
        <div className="cats__grid">
          {displayCats.map((cat, index) => (
            <CatCard key={index} cat={cat} />
          ))}
        </div>
        {isHomePage && (
          <button 
            type="button" 
            className="cats__more-button" 
            onClick={() => navigate('/cats')}
          >
            Ver más
          </button>
        )}
      </div>
    </section>
  );
}

export default CatCardList;