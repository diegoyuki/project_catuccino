import React, { useEffect } from 'react';
import './PopupWithForm.css';

function PopupWithForm({ 
  name, 
  title, 
  children, 
  isOpen, 
  onClose, 
  buttonText = "Guardar", 
  onSubmit 
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleEscClose = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscClose);
    return () => document.removeEventListener('keydown', handleEscClose);
  }, [isOpen, onClose]);

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className={`popup popup_type_${name} ${isOpen ? 'popup_opened' : ''}`} 
      onClick={handleOverlayClick}
    >
      <div className="popup__container">
        <button 
          type="button" 
          className="popup__close-button" 
          onClick={onClose} 
          aria-label="Cerrar"
        />
        <form className="popup__form" name={name} onSubmit={onSubmit}>
          <h2 className="popup__title">{title}</h2>
          {children}
          <button type="submit" className="popup__submit-button">
            {buttonText}
          </button>
        </form>
      </div>
    </div>
  );
}

export default PopupWithForm;