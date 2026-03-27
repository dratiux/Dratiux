import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isOpen]);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav className={`navbar ${isOpen ? 'nav-open' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={closeMenu}>
          DRATIUX
        </Link>
        
        <div className="nav-actions">
          <button className="nav-toggle" onClick={toggleMenu} aria-label="Toggle menu">
            <span className="hamburger"></span>
          </button>
        </div>

        <div className={`navbar-links ${isOpen ? 'active' : ''}`}>
          <Link to="/work" className={`nav-link ${location.pathname === '/work' ? 'active' : ''}`}>
            WORK <span className="nav-arrow">→</span>
          </Link>
          <Link to="/services" className={`nav-link ${location.pathname === '/services' ? 'active' : ''}`}>
            SERVICES <span className="nav-arrow">→</span>
          </Link>
          <Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>
            ABOUT <span className="nav-arrow">→</span>
          </Link>
          <Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`}>
            CONTACT <span className="nav-arrow">→</span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
