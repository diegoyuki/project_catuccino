import React, { useState } from 'react';
import './FAQ.css';

function FAQ() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqs = [
    {
      question: "¿Cuáles son las reglas?",
      answer: "Pedimos a nuestros visitantes que respeten a los gatos y su espacio. No está permitido alimentar a los gatos sin autorización. Además, se debe mantener un ambiente tranquilo. La lista completa está al principio del menú."
    },
    {
      question: "¿Puedo llevar a mi gato?",
      answer: "No se permite traer gatos ni otras mascotas de casa, ya que puede causar estrés a nuestros residentes."
    },
    {
      question: "¿Puedo llevar a niños?",
      answer: "Desde diciembre 2023 está prohibido el ingreso a menores de 10 años en la cafetería por el bienestar de los gatitos."
    }
  ];

  if (!isVisible) return null;

  return (
    <div className="faq-wrapper">
      {!isOpen && (
        <div className="faq-button-container">
          <button 
            className="faq-button" 
            onClick={() => setIsOpen(true)}
          >
            FAQ
          </button>
          <button 
            className="faq-button__close-trigger" 
            onClick={() => setIsVisible(false)}
            title="Cerrar"
          >
            &times;
          </button>
        </div>
      )}

      {isOpen && (
        <div className="faq-chat">
          <div className="faq-chat__header">
            <span>Preguntas Frecuentes</span>
            <button 
              className="faq-chat__close" 
              onClick={() => {setIsOpen(false); setActiveQuestion(null);}}
            >
              &times;
            </button>
          </div>
          <div className="faq-chat__body">
            <p className="faq-chat__welcome">¡Hola! ¿En qué podemos ayudarte?</p>
            <div className="faq-chat__options">
              {faqs.map((item, index) => (
                <button 
                  key={index} 
                  className="faq-chat__option-btn"
                  onClick={() => setActiveQuestion(index)}
                >
                  {item.question}
                </button>
              ))}
            </div>
            {activeQuestion !== null && (
              <div className="faq-chat__answer">
                <p>{faqs[activeQuestion].answer}</p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default FAQ;