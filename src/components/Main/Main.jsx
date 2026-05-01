import React from 'react';
import './Main.css';

function Main() {
  return (
    <section className="main">
      <div className="main__container">
        <h1 className="main__title">¿Buscas un café y un nuevo amigo?</h1>
        <p className="main__subtitle">
          Encuentra a tu compañero felino ideal en el mejor cat café de Monterrey.
        </p>
        <form className="main__search-form">
          <input 
            type="text" 
            className="main__search-input" 
            placeholder="Introduce una palabra clave..." 
            required 
          />
          <button type="submit" className="main__search-button">
            Buscar
          </button>
        </form>
      </div>
    </section>
  );
}

export default Main;