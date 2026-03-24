import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          DRATIUX
        </Link>
        <div className="navbar-links">
          <Link to="/work" className={`nav-link ${location.pathname === '/work' ? 'active' : ''}`}>WORK</Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>SERVICES</Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>ABOUT</Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
