import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <>
      <div className="teste home__hero-section">
        <div className="line-division"></div>
        <div className="items container">
          <div className="subject-container">
            <h1 className="subject heading">Horarios</h1>
            <h1 className="description heading">Ter-Sex: 09:00 às 17:00</h1>
            <h1 className="description heading">Sáb e Seg: Fechado</h1>
            <h1 className="description heading">Dom: 09:00 às 12:00</h1>
          </div>
          <div className="subject-container">
            <h1 className="subject heading">Contato</h1>
          </div>
          <div className="subject-container">
            <h1 className="subject heading">Endereço</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
