import React from 'react';
import { Helmet } from 'react-helmet-async';
import './About.css';

const About = () => {
  return (
    <div className="about-page container section-void-large">
      <Helmet>
        <title>About — Dratiux</title>
        <meta name="description" content="Dratiux focuses on brand identity systems and interactive documents, combining structured design thinking with precise execution." />
        <meta property="og:title" content="About — Dratiux" />
        <meta property="og:description" content="Dratiux focuses on brand identity systems and interactive documents, combining structured design thinking with precise execution." />
        <meta name="twitter:title" content="About — Dratiux" />
        <meta name="twitter:description" content="Dratiux focuses on brand identity systems and interactive documents, combining structured design thinking with precise execution." />
        <link rel="canonical" href="https://dratiux.com/about" />
      </Helmet>

      <header className="section-header">
        <span className="label-sm">Designer Portfolio</span>
        <h1 className="display-lg">ABDULLAH K.</h1>
      </header>

      <div className="about-content section-void">
        <div className="about-main">
          <p className="display-md">
            The intersection of precision and creativity.
          </p>
          <div className="about-blocks section-void">
            <div className="about-block">
              <p className="on-surface-variant body-lg">
                I am Abdullah Khaled, a multidisciplinary designer specializing in branding, high-end 3D abstract artistry, and functional interactive document systems. My design foundation was built on a deep passion for photography, which naturally evolved into a sophisticated mastery of visual narratives and spatial visualization.
              </p>
            </div>
            <div className="about-block">
              <p className="on-surface-variant body-lg">
                By bridging technical expertise in Blender and Photoshop with a keen eye for modern aesthetics, I create high-impact visual identities that resonate with clarity and purpose. Having collaborated with distinguished individuals and global enterprises, I am dedicated to pushing the boundaries of design, ensuring each project stands as a unique synthesis of current trends and timeless innovation.
              </p>
            </div>
          </div>
        </div>

        <aside className="about-sidebar">
          <div className="sidebar-meta">
            <span className="label-sm">Expertise</span>
            <ul className="principles-list">
              <li>BRAND IDENTITY</li>
              <li>3D ABSTRACT DESIGN</li>
              <li>INTERACTIVE PDFS</li>
              <li>PHOTOGRAPHY</li>
            </ul>
          </div>
          <div className="sidebar-meta">
            <span className="label-sm">Primary Tools</span>
            <ul className="principles-list">
              <li>AFFINITY</li>
              <li>PHOTOSHOP</li>
              <li>ILLUSTRATOR</li>
              <li>INDESIGN</li>
              <li>BLENDER</li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default About;
