import { useState } from 'react';
import { GraduationCap, Award, Calendar, ChevronDown } from 'lucide-react';
import { education, certifications } from '../data/portfolio';

export default function Education() {
  const [certsOpen, setCertsOpen] = useState(false);

  return (
    <section id="education" className="section section-alt">
      <div className="container">
        <h2 className="section-title">Formação &amp; Certificações</h2>

        <div className="edu-section">
          <h3 className="edu-group-title"><GraduationCap size={20} /> Educação</h3>
          <div className="edu-list">
            {education.map(edu => (
              <div key={edu.id} className="edu-card">
                <div className="edu-card-body">
                  <p className="edu-degree">{edu.degree}</p>
                  <p className="edu-institution">{edu.institution}</p>
                </div>
                <span className="edu-period">
                  <Calendar size={12} /> {edu.period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {certifications.length > 0 && (
          <div className="edu-section">
            <button
              className="edu-group-title edu-toggle"
              onClick={() => setCertsOpen(o => !o)}
              aria-expanded={certsOpen}
            >
              <Award size={20} /> Certificações
              <span className="cert-count">{certifications.length}</span>
              <ChevronDown
                size={18}
                className={`exp-chevron ${certsOpen ? 'exp-chevron--open' : ''}`}
                style={{ marginLeft: 'auto' }}
              />
            </button>
            {certsOpen && (
              <div className="cert-grid exp-list--animated">
                {certifications.map(cert => (
                  <div key={cert.id} className="cert-card">
                    <div className="cert-issuer-badge">{cert.issuer}</div>
                    <p className="cert-name">{cert.name}</p>
                    <span className="edu-period">
                      <Calendar size={12} /> {cert.year}
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
