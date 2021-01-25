import React from 'react';
import './HeroSection.css';
import { Link } from 'react-scroll';
import { Button } from './Button';

let button = true;

function HeroSection() {
  return (
    <>
      <div className="home__hero-section" id="heroSection">
        <div className="container">
          <div className="row home__hero-row">
            <div className="home__hero-text-wrapper">
              <h1 className="heading">
                Sempre a procura do <br /> seu melhor estilo
              </h1>
            </div>
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
                    Contato
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

export default HeroSection;
