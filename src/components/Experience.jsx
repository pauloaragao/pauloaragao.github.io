import { useState } from 'react';
import { Briefcase, MapPin, ChevronDown } from 'lucide-react';
import { experiences } from '../data/portfolio';

export default function Experience() {
  const [open, setOpen] = useState(null);

  return (
    <section id="experience" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Experiência</h2>
        <div className="timeline">
          {experiences.map((exp, idx) => {
            const isOpen = open === exp.id;
            return (
              <div key={exp.id} className="timeline-item">
                <div className="timeline-dot">
                  <Briefcase size={14} />
                </div>
                {idx < experiences.length - 1 && <div className="timeline-line" />}
                <div className="timeline-card">
                  <button
                    className="timeline-header exp-toggle"
                    onClick={() => setOpen(isOpen ? null : exp.id)}
                    aria-expanded={isOpen}
                  >
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
                    <ChevronDown
                      size={18}
                      className={`exp-chevron ${isOpen ? 'exp-chevron--open' : ''}`}
                    />
                  </button>
                  {isOpen && (
                    <ul className="exp-list exp-list--animated">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
