import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';
import Button from '../components/Button';
import { ArrowUpRight } from 'lucide-react';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

const Home = () => {
  const [featuredProjects, setFeaturedProjects] = useState([]);

  useEffect(() => {
    const fetchFeatured = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .limit(2)
        .order('created_at', { ascending: false });

      if (!error) setFeaturedProjects(data);
    };
    fetchFeatured();
  }, []);

  return (
    <div className="home-page">
      <Helmet>
        <title>Dratiux — JUST CREATE.</title>
        <meta name="description" content="Dratiux is a design studio specializing in brand identity, UI/UX, and interactive document systems. Structured, precise, and scalable design solutions." />
        <meta property="og:title" content="Dratiux — JUST CREATE." />
        <meta property="og:description" content="Dratiux is a design studio specializing in brand identity, UI/UX, and interactive document systems. Structured, precise, and scalable design solutions." />
        <meta name="twitter:title" content="Dratiux — JUST CREATE." />
        <meta name="twitter:description" content="Dratiux is a design studio specializing in brand identity, UI/UX, and interactive document systems. Structured, precise, and scalable design solutions." />
        <link rel="canonical" href="https://dratiux.com/" />
      </Helmet>

      <section className="hero container section-void-large">
        <div className="hero-content">
          <h1 className="display-lg">JUST CREATE.<br /></h1>
          <p className="body-lg on-surface-variant max-w-600">
            I help you achieve your goals, and through my vision and expertise, I ensure success for your brand identity.
          </p>
          <div className="hero-actions">
            <Button onClick={() => window.location.href = '/work'}>View Portfolio</Button>
            <Button variant="tertiary" onClick={() => window.location.href = '/services'}>Our Services</Button>
          </div>
        </div>
      </section>

      <section className="services container section-void-large">
        <div className="section-header split-header">
          <div>
            <span className="label-sm">Expertise</span>
            <h2 className="display-md">SERVICES</h2>
          </div>
          <Button 
            variant="tertiary" 
            onClick={() => window.location.href = '/services'}
            className="btn-responsive"
          >
            <span className="btn-text">View Services</span>
            <ArrowUpRight size={24} className="btn-icon" />
          </Button>
        </div>
        <div className="services-grid">
          <div className="service-block">
            <h3 className="title-lg">BRANDING</h3>
            <p className="on-surface-variant">Defining visual identities with structural integrity.</p>
          </div>
          <div className="service-block">
            <h3 className="title-lg">INTERACTIVE PDF</h3>
            <p className="on-surface-variant">Editorial precision meets digital functionality.</p>
          </div>
        </div>
      </section>

      <section className="portfolio-preview container section-void-large">
        <div className="section-header split-header">
          <div>
            <span className="label-sm">Featured</span>
            <h2 className="display-md">PORTFOLIO</h2>
          </div>
          <Button 
            variant="tertiary" 
            onClick={() => window.location.href = '/work'}
            className="btn-responsive"
          >
            <span className="btn-text">View Archive</span>
            <ArrowUpRight size={24} className="btn-icon" />
          </Button>
        </div>
        <div className="work-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>

      <section className="cta container section-void-large">
        <div className="cta-content">
          <h2 className="display-md">READY TO START CREATING?</h2>
          <p className="body-lg on-surface-variant">For design services, feel free to contact me.</p>
          <Button onClick={() => window.location.href = '/contact'}>Start Project</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
