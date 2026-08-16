import { Mail, Github, Linkedin } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Contact() {
  return (
    <section id="contact" className="section">
      <div className="container contact-container">
        <h2 className="section-title">Contato</h2>
        <p className="contact-subtitle">
          Quer conversar sobre projetos, oportunidades ou apenas trocar uma ideia? Fique à vontade!
        </p>
        <div className="contact-links">
          <a href={`mailto:${profile.email}`} className="contact-link">
            <Mail size={22} />
            <span>{profile.email}</span>
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Linkedin size={22} />
            <span>LinkedIn</span>
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="contact-link">
            <Github size={22} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </section>
  );
}
