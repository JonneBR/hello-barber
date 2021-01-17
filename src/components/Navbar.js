import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { GiRazorBlade } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiTimesOutline } from 'react-icons/ti';
import { FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Button } from './Button';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(true);
  const [button, setButton] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  const showButton = () => {
    if (window.innerWidth <= 960) {
      console.log('pequeno');
      setButton(false);
    } else {
      console.log('grande');

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
              className={click ? 'menu-container ' : 'menu-container active '}
            >
              <ul className="nav-menu ">
                <li className="nav-item">
                  <Link to="/contact" className="nav-links">
                    Contact
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" className="nav-links">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to="/services" className="nav-links">
                    Services
                  </Link>
                </li>
              </ul>

              <div className="logo-container">
                <Link to="/" className="navbar-logo">
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
                    <Link to="/sign-up" className="btn-link">
                      <Button buttonStyle="btn--outline">SIGN UP</Button>
                    </Link>
                  ) : (
                    <Link to="/sign-up" className="btn-link">
                      <Button
                        buttonStyle="btn--outline"
                        buttonSize="btn--mobile"
                      >
                        SIGN UP
                      </Button>
                    </Link>
                  )}
                </li>
              </div>
            </div>
            <div onClick={handleClick} className="menu-icon">
              {click ? <GiHamburgerMenu /> : <TiTimesOutline />}
            </div>
          </div>
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;
