import React from 'react';
import { Helmet } from 'react-helmet-async';
import './Services.css';

const Services = () => {
  return (
    <div className="services-page container section-void-large">
      <Helmet>
        <title>Services — Dratiux</title>
        <meta name="description" content="Brand identity design and interactive document systems including interactive PDFs, form logic, and structured visual systems." />
        <meta property="og:title" content="Services — Dratiux" />
        <meta property="og:description" content="Brand identity design and interactive document systems including interactive PDFs, form logic, and structured visual systems." />
        <meta name="twitter:title" content="Services — Dratiux" />
        <meta name="twitter:description" content="Brand identity design and interactive document systems including interactive PDFs, form logic, and structured visual systems." />
        <link rel="canonical" href="https://dratiux.com/services" />
      </Helmet>

      <header className="section-header">
        <span className="label-sm">Expertise</span>
        <h1 className="display-lg">CORE SERVICES</h1>
      </header>

      <div className="services-list">
        <section className="service-detail">
          <div className="service-info">
            <h2 className="display-md">BRAND IDENTITY</h2>
            <p className="body-lg on-surface-variant">
              We design structured visual identities built on logic, consistency, and scalability.
            </p>
          </div>
          
          <div className="service-points">
            <div className="point-item">
              <span className="bullet">■</span>
              <p>Visual Identity Systems</p>
            </div>
            <div className="point-item">
              <span className="bullet">■</span>
              <p>Brand Architecture</p>
            </div>
            <div className="point-item">
              <span className="bullet">■</span>
              <p>Style Guidelines</p>
            </div>
          </div>
        </section>

        <section className="service-detail">
          <div className="service-info">
            <h2 className="display-md">INTERACTIVE DOCUMENTS</h2>
            <p className="body-lg on-surface-variant">
              We build interactive document systems with logic, usability, and precise data handling.
            </p>
          </div>
          
          <div className="service-points">
            <div className="point-item">
              <span className="bullet">■</span>
              <p>Interactive PDFs</p>
            </div>
            <div className="point-item">
              <span className="bullet">■</span>
              <p>Form Logic</p>
            </div>
            <div className="point-item">
              <span className="bullet">■</span>
              <p>Data Structuring</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Services;
