import { useState } from 'react';
import { ExternalLink, Github, ChevronDown, Layers } from 'lucide-react';
import { projects } from '../data/portfolio';

export default function Projects() {
  const [open, setOpen] = useState(null);
  if (!projects?.length) return null;

  return (
    <section id="projects" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Projetos</h2>
        <div className="projects-list">
          {projects.map((proj, idx) => {
            const isOpen = open === proj.id;
            return (
              <div key={proj.id} className={`project-accordion ${isOpen ? 'project-accordion--open' : ''}`}>
                <button
                  className="project-accordion-header"
                  onClick={() => setOpen(isOpen ? null : proj.id)}
                  aria-expanded={isOpen}
                >
                  <span className="project-index">0{idx + 1}</span>
                  <span className="project-accordion-title">{proj.title}</span>
                  <div className="project-accordion-meta">
                    <div className="project-tag-row">
                      {proj.tags.map(tag => (
                        <span key={tag} className="project-tag">{tag}</span>
                      ))}
                    </div>
                    <ChevronDown
                      size={18}
                      className={`exp-chevron ${isOpen ? 'exp-chevron--open' : ''}`}
                    />
                  </div>
                </button>

                {isOpen && (
                  <div className="project-accordion-body exp-list--animated">
                    <p className="project-description">{proj.description}</p>
                    <div className="project-links">
                      {proj.github && (
                        <a href={proj.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                          <Github size={15} /> Repositório
                        </a>
                      )}
                      {proj.url && (
                        <a href={proj.url} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-sm">
                          <ExternalLink size={15} /> Ver projeto
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
