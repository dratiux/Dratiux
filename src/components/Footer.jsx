import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer section-void-large">
      <div className="container footer-content">
        <div className="footer-brand">
          <h2 className="display-md">DRATIUX</h2>
          <p className="on-surface-variant body-lg">Precise architectural design for the digital avant-garde.</p>
        </div>
        <div className="footer-info">
          <div className="footer-column">
            <span className="label-sm">Location</span>
            <p>Remote / Global</p>
          </div>
          <div className="footer-column">
            <span className="label-sm">Contact</span>
            <p>hello@dratiux.com</p>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="label-sm">© {new Date().getFullYear()} DRATIUX. ALL RIGHTS RESERVED.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
