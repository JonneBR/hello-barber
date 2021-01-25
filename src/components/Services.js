import React from 'react';
import './Services.css';

function Services() {
  return (
    <>
      <div className="services-section" id="services">
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
              <h1 className="description heading">
                Procura modernizar o <br /> seu visual, e tentar algo <br />{' '}
                novo? Esse corte é a sua <br /> opção ideal.
              </h1>
            </div>
            <div className="subject-container">
              <h1 className="subject heading">Barba R$15,00</h1>
              <h1 className="description heading">
                Mantenha a sua beleza <br /> masculina com o corte <br />{' '}
                navalhado mais estiloso <br /> e morderno.
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Services;
