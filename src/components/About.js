import React from 'react';
import { Link } from 'react-scroll';
import { Button } from './Button';
import './About.css';

function About() {
  let button = true;

  return (
    <>
      <div className="about-section" id="about">
        <div className="container">
          <h1 className="title heading">Sobre</h1>
          <div className="description-container">
            <h1 className="description heading">
              A Hello Barber vem ao mercado para inovar, realçar e oferecer os
              melhores cortes para o público masculino. Nossa equipe de
              profissionais/melhores barbeiros tem por objetivo alcançar o seu
              melhor visual. Somos modernos no estilo e clássicos com a música.
              Criamos um ambiente descontraido, que te dará conforto e boas
              conversas enquanto você cuida melhor de si mesmo.
            </h1>
          </div>
          <div className="btn-container">
            <li className="nav-btn">
              {button ? (
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="btn-link"
                >
                  <Button buttonStyle="btn--outline">Contato</Button>
                </Link>
              ) : (
                <Link
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="btn-link"
                >
                  <Button buttonStyle="btn--outline" buttonSize="btn--mobile">
                    Contact Us
                  </Button>
                </Link>
              )}
            </li>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
