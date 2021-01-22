import React from 'react';
import './Services.css';

function Services() {
  return (
    <>
      <div className="services-section">
        <div className="container">
          <h1 className="title heading">Nossos Cortes</h1>
          <div className="items container">
            <div className="subject-container">
              <h1 className="subject heading">Tradicional R$15,00</h1>
              <h1 className="description heading">
                Esse corte é ideal para <br /> quem procura manter <br /> sempre
                o padrão com <br /> estilo.
              </h1>
            </div>
            <div className="subject-container">
              <h1 className="subject heading">Desenhado R$20,00</h1>
              <h1 className="description heading">011981222544</h1>
              <h1 className="description heading">hellobarber@gmail.com</h1>
            </div>
            <div className="subject-container">
              <h1 className="subject heading">Barba R$15,00</h1>
              <h1 className="description heading">Rua: Arlindo Flores</h1>
              <h1 className="description heading">Jardim Vitória N: 136</h1>
              <h1 className="description heading">Campinas-SP</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
