import React from 'react';
import { Link } from 'react-router-dom';
import './ProjectCard.css';

const ProjectCard = ({ project }) => {
  return (
    <Link to={`/work/${project.slug}`} className="project-card">
      <div className="project-card-image">
        <img src={project.cover_image} alt={project.title} />
        <div className="project-card-meta-top label-sm">
          {project.year} — {project.category}
        </div>
      </div>
      <div className="project-card-info">
        <h3 className="title-lg">{project.title}</h3>
      </div>
    </Link>
  );
};

export default ProjectCard;
