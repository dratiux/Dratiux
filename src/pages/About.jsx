import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about-page container section-void-large">
      <header className="section-header">
        <span className="label-sm">Philosophy</span>
        <h1 className="display-lg">ARCHITECTURAL<br/>THINKING</h1>
      </header>

      <div className="about-content section-void">
        <div className="about-main">
          <p className="display-md">Precision is the heartbeat of our design philosophy.</p>
          <div className="about-blocks section-void">
            <div className="about-block">
              <h3 className="title-lg">THE METHOD</h3>
              <p className="on-surface-variant body-lg">
                We don't just "design" — we build systems. Every element is aligned to a rigid 8px grid, ensuring mathematical harmony and visual authority.
              </p>
            </div>
            <div className="about-block">
              <h3 className="title-lg">THE AESTHETIC</h3>
              <p className="on-surface-variant body-lg">
                Monolith Architect is our signature language. No rounded corners. No gradients. No shadows. Only tonal layering and pure geometric form.
              </p>
            </div>
          </div>
        </div>
        
        <aside className="about-sidebar">
          <div className="sidebar-meta">
            <span className="label-sm">Studio</span>
            <p>Dratiux Digital</p>
          </div>
          <div className="sidebar-meta">
            <span className="label-sm">Principles</span>
            <ul className="principles-list">
              <li>01. Rigidity</li>
              <li>02. Clarity</li>
              <li>03. Authority</li>
              <li>04. Precision</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default About;
