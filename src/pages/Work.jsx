import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { supabase } from '../lib/supabase';
import ProjectCard from '../components/ProjectCard';
import './Work.css';

const Work = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error fetching projects:', error);
      } else {
        setProjects(data);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="work-page container section-void-large">
      <Helmet>
        <title>Work — Dratiux</title>
        <meta name="description" content="Explore brand identity and interactive document projects by Dratiux, focused on clarity, structure, and execution quality." />
        <meta property="og:title" content="Work — Dratiux" />
        <meta property="og:description" content="Explore brand identity and interactive document projects by Dratiux, focused on clarity, structure, and execution quality." />
        <meta name="twitter:title" content="Work — Dratiux" />
        <meta name="twitter:description" content="Explore brand identity and interactive document projects by Dratiux, focused on clarity, structure, and execution quality." />
        <link rel="canonical" href="https://dratiux.com/work" />
      </Helmet>

      <header className="section-header">
        <span className="label-sm">Archive</span>
        <h1 className="display-lg">SELECTED WORKS</h1>
      </header>

      {loading ? (
        <div className="loading-state label-sm">Loading systems...</div>
      ) : projects.length > 0 ? (
        <div className="work-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="empty-state body-lg on-surface-variant">
          No projects revealed yet.
        </div>
      )}
    </div>
  );
};

export default Work;
