import React from 'react';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page container section-void-large">
      <header className="section-header">
        <span className="label-sm">Expertise</span>
        <h1 className="display-lg">DESIGN<br/>SYSTEMS</h1>
      </header>

      <div className="services-list">
        <section className="service-detail section-void">
          <div className="service-info">
            <h2 className="display-md">BRANDING</h2>
            <p className="body-lg on-surface-variant">
              We define the visual DNA of brands through structural logic and architectural precision. Our branding is not just aesthetic—it is a system designed to endure.
            </p>
          </div>
          <div className="service-points">
            <div className="point-item">
              <span className="label-sm">01</span>
              <p>Visual Identity Systems</p>
            </div>
            <div className="point-item">
              <span className="label-sm">02</span>
              <p>Brand Architecture</p>
            </div>
            <div className="point-item">
              <span className="label-sm">03</span>
              <p>Style Guidelines</p>
            </div>
          </div>
        </section>

        <section className="service-detail section-void">
          <div className="service-info">
            <h2 className="display-md">UI/UX DESIGN</h2>
            <p className="body-lg on-surface-variant">
              Architecting high-performance digital interfaces for complex systems. We prioritize clarity, hierarchy, and precision in every pixel.
            </p>
          </div>
          <div className="service-points">
            <div className="point-item">
              <span className="label-sm">04</span>
              <p>Interface Systems</p>
            </div>
            <div className="point-item">
              <span className="label-sm">05</span>
              <p>User Flow Architecture</p>
            </div>
            <div className="point-item">
              <span className="label-sm">06</span>
              <p>Prototyping</p>
            </div>
          </div>
        </section>

        <section className="service-detail section-void">
          <div className="service-info">
            <h2 className="display-md">INTERACTIVE PDF</h2>
            <p className="body-lg on-surface-variant">
              Transforming traditional editorial layouts into dynamic digital documents. Precision typography meets digital accessibility.
            </p>
          </div>
          <div className="service-points">
            <div className="point-item">
              <span className="label-sm">07</span>
              <p>Digital Editorial</p>
            </div>
            <div className="point-item">
              <span className="label-sm">08</span>
              <p>Interactive Reports</p>
            </div>
            <div className="point-item">
              <span className="label-sm">09</span>
              <p>Sales Enablement</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
