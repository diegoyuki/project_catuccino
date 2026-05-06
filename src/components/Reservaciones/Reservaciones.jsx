import React, { useState } from 'react';
import './Reservaciones.css';

function Reservaciones() {
  const [formData, setFormData] = useState({
    nombre: '',
    fecha: '',
    hora: '',
    personas: '1'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`¡Reserva exitosa! Te esperamos en Catuccino.`);
  };

  return (
    <section className="reservations" id="reservations">
      <div className="reservations__background-decoration"></div>
      <div className="reservations__container">
        <div className="reservations__card">
          <div className="reservations__header">
            <span className="reservations__tag">Cat-Experience</span>
            <h2 className="reservations__title">Reserva tu lugar</h2>
            <p className="reservations__subtitle">
              Elige el mejor momento para disfrutar del café y la compañía felina.
            </p>
          </div>

          <form className="reservations__form" onSubmit={handleSubmit}>
            <div className="reservations__group">
              <div className="reservations__field">
                <label>🐾 Nombre completo</label>
                <input type="text" placeholder="Ej. Diego Prieto" required />
              </div>
              <div className="reservations__field">
                <label>🐾 Invitados</label>
                <select>
                  <option>1 Persona</option>
                  <option>2 Personas</option>
                  <option>3 Personas</option>
                  <option>4+ Personas</option>
                </select>
              </div>
            </div>

            <div className="reservations__group">
              <div className="reservations__field">
                <label>🐾 Fecha</label>
                <input type="date" required />
              </div>
              <div className="reservations__field">
                <label>🐾 Hora</label>
                <input type="time" required />
              </div>
            </div>

            <button type="submit" className="reservations__submit">
              Confirmar mi visita
              <span className="reservations__arrow">→</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Reservaciones;