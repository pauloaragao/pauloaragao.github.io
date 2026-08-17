import { useState } from 'react';
import { Briefcase, MapPin, ChevronDown } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const [open, setOpen] = useState(false);

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <button
          className="section-title experience-toggle"
          onClick={() => setOpen(value => !value)}
          aria-expanded={open}
          aria-controls="experience-timeline"
        >
          Experiência
          <ChevronDown
            size={22}
            className={`exp-chevron ${open ? 'exp-chevron--open' : ''}`}
          />
        </button>

        {open && (
          <div id="experience-timeline" className="timeline exp-list--animated">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-dot">
                  <Briefcase size={14} />
                </div>
                {idx < experiences.length - 1 && <div className="timeline-line" />}
                <div className="timeline-card">
                  <div className="timeline-header">
                    <div>
                      <h3 className="exp-role">{exp.role}</h3>
                      <p className="exp-company">{exp.company}</p>
                    </div>
                    <div className="exp-meta">
                      <span className="badge">{exp.period}</span>
                      <span className="exp-location">
                        <MapPin size={12} /> {exp.location}
                      </span>
                    </div>
                  </div>
                  <ul className="exp-list">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
