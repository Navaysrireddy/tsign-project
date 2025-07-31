import React, { useState } from 'react';
import './Header.css';
import logo from '../../assests/TG-SIGN (2).png';
import { NavLink } from 'react-router-dom';

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="nav-div">
      <header className="navbar">
        <a href="/">
          <img src={logo} alt="Logo" className="header-logo" />
        </a>

        <div className="menu-toggle" onClick={toggleMenu}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <nav className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <div className="nav-item"><NavLink to="/" className="nav-link">Home</NavLink></div>
          <div className="nav-item"><NavLink to="/about" className="nav-link">About</NavLink></div>
          <div className="nav-item"><NavLink to="/contact" className="nav-link">Contact</NavLink></div>
          <div className="nav-item"><NavLink to="/services" className="nav-link">Services</NavLink></div>
          <div className="nav-item"><NavLink to="/login" className="nav-link">Login/Enroll</NavLink></div>
          {/* <div className="nav-item"><NavLink to="/h-resume" className="nav-link">resume</NavLink></div> */}
        </nav>
      </header>
    </div>
  );
}

export default Header;
