import React, { useState } from 'react';
import './SupportModal.css';

function SupportModal({ isOpen, onClose }) {
  const [amount, setAmount] = useState(1);

  if (!isOpen) return null;

  return (
    <div className="modal">
      <div className="modal__container">
        <button className="modal__close" onClick={onClose}>&times;</button>
        
        <div className="modal__header">
          <h2 className="modal__title">Apoya a Catuccino</h2>
          <p className="modal__subtitle">Tu donación nos ayuda a cuidar a los michis.</p>
        </div>

        <div className="modal__content">
          <div className="modal__payment-box">
            <div className="modal__amount-selector">
              <span className="modal__coffee-icon">☕</span>
              <span className="modal__multiplier">x</span>
              <div className="modal__chips">
                {[1, 3, 5].map((num) => (
                  <button 
                    key={num}
                    className={`modal__chip ${amount === num ? 'modal__chip_active' : ''}`}
                    onClick={() => setAmount(num)}
                  >
                    {num}
                  </button>
                ))}
              </div>
            </div>

            <form className="modal__form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Correo electrónico" className="modal__input" required />
              
              <div className="modal__card-info">
                <input type="text" placeholder="Número de tarjeta" className="modal__input" />
                <div className="modal__input-group">
                  <input type="text" placeholder="MM / YY" className="modal__input" />
                  <input type="text" placeholder="CVC" className="modal__input" />
                </div>
              </div>

              <button type="submit" className="modal__submit-button">
                Donar ${amount}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SupportModal;