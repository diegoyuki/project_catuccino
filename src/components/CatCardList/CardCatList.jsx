import React, { useState } from 'react';
import './CatCardList.css';
import CatCard from '../CatCard/CatCard';
import Preloader from '../Preloader/Preloader';

function CatCardList({ cats, isLoading }) {
  const [visibleCount, setVisibleCount] = useState(3);

  const handleShowMore = () => {
    setVisibleCount((prevCount) => prevCount + 3);
  };

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <section className="cat-cards">
      <div className="cat-cards__container">
        {cats.length > 0 ? (
          <>
            <h2 className="cat-cards__title">Resultados de búsqueda</h2>
            <div className="cat-cards__grid">
              {cats.slice(0, visibleCount).map((cat) => (
                <CatCard key={cat.id} cat={cat} />
              ))}
            </div>
            {visibleCount < cats.length && (
              <button 
                type="button" 
                className="cat-cards__more-button" 
                onClick={handleShowMore}
              >
                Mostrar más
              </button>
            )}
          </>
        ) : (
          <div className="cat-cards__no-results">
            <p className="cat-cards__no-results-text">No se ha encontrado nada</p>
          </div>
        )}
      </div>
    </section>
  );
}

export default CatCardList;