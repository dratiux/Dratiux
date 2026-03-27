import React from 'react';
import './Footer.css';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-bottom">
          <p className="label-sm on-surface-variant">© {new Date().getFullYear()} DRATIUX. ALL RIGHTS RESERVED.</p>
          
          <div className="footer-right">
            <button className="theme-toggle-frame" onClick={toggleTheme}>
              {theme === 'light' ? 'SWITCH TO DARK MODE' : 'SWITCH TO LIGHT MODE'}
            </button>
            
            <div className="footer-links">
              <a href="mailto:dratiux@gmail.com" className="hover-white">Email</a>
              <a href="https://wa.me/201080568334" target="_blank" rel="noreferrer" className="hover-white">WhatsApp</a>
              <a href="https://t.me/dratiux" target="_blank" rel="noreferrer" className="hover-white">Telegram</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
