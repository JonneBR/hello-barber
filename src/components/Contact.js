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
            <h1 className="description heading">011981222544</h1>
            <h1 className="description heading">hellobarber@gmail.com</h1>
          </div>
          <div className="subject-container">
            <h1 className="subject heading">Endereço</h1>
            <h1 className="description heading">Rua: Arlindo Flores</h1>
            <h1 className="description heading">Jardim Vitória N: 136</h1>
            <h1 className="description heading">Campinas-SP</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
