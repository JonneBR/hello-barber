import React, { useState, useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';
import { GiRazorBlade } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiTimesOutline } from 'react-icons/ti';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <div className="navbar">
          <div className="navbar-container container">
            <div
              className={!click ? 'menu-container ' : 'menu-container active '}
            >
              <ul className="nav-menu ">
                <li className="nav-item">
                  <Link
                    to="contact"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="about"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="services"
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="nav-links"
                    onClick={closeMobileMenu}
                  >
                    Services
                  </Link>
                </li>
              </ul>

              <div className="logo-container">
                <Link
                  to="heroSection"
                  spy={true}
                  smooth={true}
                  duration={500}
                  className="navbar-logo"
                  onClick={closeMobileMenu}
                >
                  <GiRazorBlade className="navbar-icon" />
                  Hello Barber
                </Link>
              </div>

              <div className="media-items">
                <Link to="/" className="nav-media">
                  <FaFacebook className="social-media-icons" />
                </Link>
                <Link to="/" className="nav-media">
                  <FaTwitter className="social-media-icons" />
                </Link>
                <Link to="/" className="nav-media">
                  <FaInstagram className="social-media-icons" />
                </Link>
                <li className="nav-btn">
                  {button ? (
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      className="btn-link"
                    >
                      <Button buttonStyle="btn--outline">Contact Us</Button>
                    </Link>
                  ) : (
                    <Link
                      to="contact"
                      spy={true}
                      smooth={true}
                      duration={500}
                      onClick={closeMobileMenu}
                      className="btn-link"
                    >
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                      >
                        Contact Us
                      </Button>
                    </Link>
                  )}
                </li>
              </div>
            </div>
            <div className="logo-container-mobile">
              <Link
                to="heroSection"
                spy={true}
                smooth={true}
                duration={500}
                className="navbar-logo-mobile"
                onClick={closeMobileMenu}
              >
                <GiRazorBlade className="navbar-icon-mobile" />
                Hello Barber
              </Link>
            </div>
            <div onClick={handleClick} className="menu-icon">
              {!click ? <GiHamburgerMenu /> : <TiTimesOutline />}
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
