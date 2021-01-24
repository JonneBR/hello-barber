import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { IconContext } from 'react-icons/lib';
import { IoLocationSharp } from 'react-icons/io5';
import { AiOutlinePhone, AiOutlineMail } from 'react-icons/ai';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="footer-container">
          <div className="footer-container-wrap">
            <div className="footer-info-items">
              <div className="item-address">
                <IoLocationSharp className="location-icon" />
                <p className="footer-item-description">
                  Rua: Arlindo Flores <br /> Jardim Vitória N: 136
                </p>
              </div>
              <div className="item-address">
                <AiOutlinePhone className="location-icon" />
                <p className="footer-item-description">011981222544</p>
              </div>
              <div className="item-address">
                <AiOutlineMail className="location-icon" />
                <p className="footer-item-description">hellobarber@gmail.com</p>
              </div>
            </div>
            <div className="website-rights">
              <small>JONNE SOLUÇÕES | TODOS OS DIREITOS RESERVADOS</small>
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Footer;
