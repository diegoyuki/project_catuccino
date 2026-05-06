import React from 'react';
import './Location.css';

function Location({ isContactPage }) {
  const mapUrl = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3596.0125744865187!2d-100.30691762410313!3d25.66611597741348!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662be2ff64c5757%3A0x6e9f60f69a5330a8!2sC.%20de%20Morelos%20939%2C%20Barrio%20Antiguo%2C%20Centro%2C%2064000%20Monterrey%2C%20N.L.!5e0!3m2!1ses-419!2smx!4v1714761000000!5m2!1ses-419!2smx";
  const title = isContactPage ? "Contáctanos" : "Visítanos";

  return (
    <section className="location">
      <div className="location__container">
        <div className="location__info location__info_contact-mix">
          <h2 className="location__title">{title}</h2>
          {isContactPage && <p className="location__intro-text">Estamos aquí para ayudarte con cualquier consulta.</p>}
          
          <div className="location__contact-grid">
            <div className="location__contact-item">
              <span className="location__icon-wrapper"></span>
              <div className="location__contact-details">
                <h3 className="location__contact-label">Correo</h3>
                <p className="location__contact-desc">Puedes enviarnos un correo para más información.</p>
                <a href="mailto:monminoumx@gmail.com" className="location__contact-link">monminoumx@gmail.com</a>
              </div>
            </div>

            <div className="location__contact-item">
              <span className="location__icon-wrapper"></span>
              <div className="location__contact-details">
                <h3 className="location__contact-label">Teléfono</h3>
                <p className="location__contact-desc">Llámanos para hacer reservas o preguntar sobre nuestros gatitos.</p>
                <a href="tel:+528129183550" className="location__contact-link">+52 81 29 18 35 50</a>
              </div>
            </div>

            <div className="location__contact-item">
              <span className="location__icon-wrapper"></span>
              <div className="location__contact-details">
                <h3 className="location__contact-label">Dirección</h3>
                <p className="location__contact-desc">Visítanos para disfrutar de un café y conocer a nuestros gatos.</p>
                <p className="location__contact-address">C. de Morelos 939, Barrio Antiguo, Centro, 64000 Monterrey, N.L.</p>
              </div>
            </div>
          </div>

          <div className="location__details-footer">
            <p className="location__detail"><strong>Horario:</strong> Mar - Dom: 11:00 AM - 8:00 PM</p>
          </div>
        </div>
        <div className="location__map-wrapper">
          <iframe
            src={mapUrl}
            className="location__map"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Catuccino"
          ></iframe>
        </div>
      </div>
    </section>
  );
}

export default Location;