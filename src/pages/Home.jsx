import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';
import Button from '../components/Button';
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
      <section className="hero container section-void-large">
        <div className="hero-content">
          <span className="label-sm">Creative Direction & Design</span>
          <h1 className="display-lg">THE MONOLITH<br/>ARCHITECT</h1>
          <p className="body-lg on-surface-variant max-w-600">
            Crafting precise, uncompromising digital experiences for elite brands that demand architectural clarity and editorial sophistication.
          </p>
          <div className="hero-actions">
            <Button onClick={() => window.location.href='/work'}>View Portfolio</Button>
            <Button variant="tertiary" onClick={() => window.location.href='/services'}>Our Services</Button>
          </div>
        </div>
      </section>

      <section className="services container section-void-large">
        <div className="section-header">
          <span className="label-sm">Expertise</span>
          <h2 className="display-md">SERVICES</h2>
        </div>
        <div className="services-grid">
          <div className="service-block">
            <h3 className="title-lg">BRANDING</h3>
            <p className="on-surface-variant">Defining visual identities with structural integrity.</p>
          </div>
          <div className="service-block">
            <h3 className="title-lg">UI/UX DESIGN</h3>
            <p className="on-surface-variant">Architecting intuitive interfaces for complex systems.</p>
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
          <Button variant="tertiary" onClick={() => window.location.href='/work'}>View Archive</Button>
        </div>
        <div className="work-grid">
          {featuredProjects.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </section>
      
      <section className="cta container section-void-large">
        <div className="cta-content">
          <h2 className="display-md">READY TO SYSTEMIZE?</h2>
          <Button onClick={() => window.location.href='/contact'}>Start Project</Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
