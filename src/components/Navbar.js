import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { GiRazorBlade } from 'react-icons/gi';
import { IconContext } from 'react-icons/lib';
import { GiHamburgerMenu } from 'react-icons/gi';
import { TiTimesOutline } from 'react-icons/ti';

function Navbar() {
  const [click, setClick] = useState(true);

  const handleClick = () => {
    setClick(!click);
  };

  return (
    <>
      <IconContext.Provider value={{ color: 'black' }}>
        <div className="narbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo">
              <GiRazorBlade className="navbar-icon" />
              Hello Barber
            </Link>
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
