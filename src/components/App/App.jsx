import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import About from '../About/About';
import Footer from '../Footer/Footer';
import CatCardList from '../CatCardList/CardCatList';
import catApi from '../../utils/CatApi';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [activeModal, setActiveModal] = useState("");
  const [cats, setCats] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [serverError, setServerError] = useState(false);

  const handleOpenPopup = (modalName) => {
    setIsPopupOpen(true);
    setActiveModal(modalName);
  };

  const handleClosePopup = () => {
    setIsPopupOpen(false);
    setActiveModal("");
  };

  const handleSearchSubmit = (keyword) => {
    setIsLoading(true);
    setServerError(false);
    
    catApi.getInitialCats()
      .then((data) => {
        setCats(data);
      })
      .catch((err) => {
        console.error(err);
        setServerError(true);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  useEffect(() => {
    const savedCats = localStorage.getItem('cats');
    if (savedCats) {
      setCats(JSON.parse(savedCats));
    }
  }, []);

  useEffect(() => {
    if (cats.length > 0) {
      localStorage.setItem('cats', JSON.stringify(cats));
    }
  }, [cats]);

  return (
    <div className="page">
      <div className="page__content">
        <Header onLoginClick={() => handleOpenPopup("login")} />
        
        <Routes>
          <Route 
            path="/" 
            element={
              <main className="content">
                <Main onSearch={handleSearchSubmit} />
                {(cats.length > 0 || isLoading) && (
                  <CatCardList 
                    cats={cats} 
                    isLoading={isLoading} 
                    error={serverError} 
                  />
                )}
                <About />
              </main>
            } 
          />
          <Route 
            path="/cats" 
            element={
              <main className="content">
                <CatCardList 
                  cats={cats} 
                  isLoading={isLoading} 
                  error={serverError} 
                />
              </main>
            } 
          />
        </Routes>

        <Footer />
      </div>
    </div>
  );
}

export default App;