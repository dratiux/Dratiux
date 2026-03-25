import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-top">
          <h2 className="display-lg">DRATIUX</h2>
          <p className="on-surface-variant body-lg">JUST CREATE WITH ACCURACY.</p>
        </div>
        
        <div className="footer-bottom">
          <p className="label-sm on-surface-variant">© {new Date().getFullYear()} DRATIUX. ALL RIGHTS RESERVED.</p>
          <div className="footer-links">
            <a href="mailto:dratiux@gmail.com" className="hover-white">Email</a>
            <a href="https://wa.me/201080568334" target="_blank" rel="noreferrer" className="hover-white">WhatsApp</a>
            <a href="https://t.me/dratiux" target="_blank" rel="noreferrer" className="hover-white">Telegram</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
