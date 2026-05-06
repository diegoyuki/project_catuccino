import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Header from '../Header/Header';
import Main from '../Main/Main';
import Menu from '../Menu/Menu';
import About from '../About/About';
import Footer from '../Footer/Footer';
import CatCardList from '../CatCardList/CatCardList';
import Preloader from '../Preloader/Preloader';
import Location from '../Location/Location';
import SupportModal from '../SupportModal/SupportModal';
import FAQ from '../FAQ/FAQ';
import catApi from '../../utils/CatApi';
import MoreAbout from '../MoreAbout/MoreAbout';
import Reservaciones from '../Reservaciones/Reservaciones';
import ParallaxDivider from '../ParallaxDivider/ParallaxDivider';

import cat1 from '../../images/cat1.jpg';
import cat2 from '../../images/cat2.jpg';
import cat3 from '../../images/cat3.jpg';
import cat4 from '../../images/cat4.avif';
import cat5 from '../../images/cat5.jpg';
import cat6 from '../../images/cat6.jpg';
import cat7 from '../../images/cat7.jpg';
import cat8 from '../../images/cat8.jpg';
import cat9 from '../../images/cat9.jpg';
import cat10 from '../../images/cat10.jpg';
import cat11 from '../../images/cat11.webp';
import cat12 from '../../images/cat12.avif';

function App() {
  const { pathname } = useLocation();
  const [isAppLoading, setIsAppLoading] = useState(true);
  const [isSupportModalOpen, setIsSupportModalOpen] = useState(false);
  const [cats, setCats] = useState([
    { name: "Moka", image: cat1 },
    { name: "Pantera", image: cat2 },
    { name: "Copito", image: cat3 },
    { name: "Sombra", image: cat4 },
    { name: "Nube", image: cat5 },
    { name: "Bigotes", image: cat6 },
    { name: "Gordo", image: cat7 },
    { name: "Manchas", image: cat8 },
    { name: "Canela", image: cat9 },
    { name: "Simba", image: cat10 },
    { name: "Naranjo", image: cat11 },
    { name: "Oreo", image: cat12 }
  ]);

  const isDarkHeader = pathname === '/cats' || pathname === '/moreabout' || pathname === '/menu' || pathname === '/reservaciones' || pathname === '/contacto';

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAppLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleSupportClick = () => {
    setIsSupportModalOpen(true);
  };

  const closeSupportModal = () => {
    setIsSupportModalOpen(false);
  };

  if (isAppLoading) {
    return <Preloader />;
  }

  return (
    <div className="page">
      <div className="page__content">
        <Header onSupportClick={handleSupportClick} isDark={isDarkHeader} />
        <Routes>
          <Route 
            path="/" 
            element={
              <main className="content">
                <Main onSupportClick={handleSupportClick} />
                <About />
                <CatCardList cats={cats} />
                <Menu />
                <ParallaxDivider />
                <Reservaciones />
                <Location />
              </main>
            } 
          />
          <Route 
            path="/cats" 
            element={<main className="content"><CatCardList cats={cats} /></main>} 
          />
          <Route 
            path="/menu" 
            element={<main className="content"><Menu /></main>} 
          />
          <Route 
            path="/moreabout" 
            element={<main className="content"><MoreAbout /></main>} 
          />
          <Route 
            path="/reservaciones" 
            element={<main className="content"><Reservaciones /></main>} 
          />
          <Route 
            path="/contacto" 
            element={<main className="content"><Location isContactPage={true} /></main>} 
          />
        </Routes>
        <Footer />
        <SupportModal isOpen={isSupportModalOpen} onClose={closeSupportModal} />
        <FAQ />
      </div>
    </div>
  );
}

export default App;