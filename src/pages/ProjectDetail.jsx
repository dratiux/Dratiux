import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';
import Button from '../components/Button';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const [project, setProject] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProject = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('slug', slug)
        .single();

      if (error) {
        console.error('Error fetching project:', error);
      } else {
        setProject(data);
      }
      setLoading(false);
    };

    fetchProject();
  }, [slug]);

  if (loading) return <div className="loading-state container label-sm">Analyzing Project Architecture...</div>;
  if (!project) return <div className="container section-void label-sm">Project Not Found.</div>;

  const pageTitle = `${project.title} — Dratiux`;
  const pageDescription = project.short_summary || "Brand identity or interactive document project focused on usability and structured design.";

  return (
    <div className="project-detail">
      <Helmet>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        {project.cover_image && <meta property="og:image" content={project.cover_image} />}
        <meta name="twitter:title" content={pageTitle} />
        <meta name="twitter:description" content={pageDescription} />
        <link rel="canonical" href={`https://dratiux.com/work/${slug}`} />
      </Helmet>

      <section className="project-hero">
        <img src={project.cover_image} alt={project.title} className="hero-img" />
        <div className="hero-overlay">
          <div className="container">
            <span className="label-sm">{project.category} — {project.year}</span>
            <h1 className="display-lg">{project.title}</h1>
          </div>
        </div>
      </section>

      <section className="project-body container section-void-large">
        <div className="project-info-layout">
          <div className="project-description">
            <h2 className="label-sm">Overview</h2>
            <p className="body-lg on-surface-variant">{project.description}</p>
          </div>
          <aside className="project-meta">
            <div className="meta-item">
              <span className="label-sm">Role</span>
              <p>Creative Lead</p>
            </div>
            <div className="meta-item">
              <span className="label-sm">Sector</span>
              <p>{project.category}</p>
            </div>
            <div className="meta-item">
              <span className="label-sm">Year</span>
              <p>{project.year}</p>
            </div>
          </aside>
        </div>
      </section>
      
      {project.gallery && project.gallery.length > 0 && (
        <section className="project-gallery container section-void">
          {project.gallery.map((img, i) => (
            <div key={i} className="gallery-item section-void">
              <img src={img} alt={`Gallery ${i}`} />
            </div>
          ))}
        </section>
      )}

      <section className="project-nav container section-void-large">
        <div className="nav-split">
          <Link to="/work" className="label-sm hover-white">← Back to Archive</Link>
          <div className="project-nav-actions">
            {project.behance_url && (
              <Button variant="secondary" onClick={() => window.open(project.behance_url, '_blank', 'noopener,noreferrer')}>More</Button>
            )}
            <Button onClick={() => window.location.href='/contact'}>Start Project</Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
