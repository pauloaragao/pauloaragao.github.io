import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import { profile } from '../data/portfolio';

const tagChips = profile.tagline.split(/[|•]/).map(s => s.trim()).filter(Boolean);

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid-overlay" />

      <div className="container hero-content">

        <div className="avatar-wrapper">
          <div className="avatar-glow" />
          {profile.avatar ? (
            <img src={profile.avatar} alt={profile.name} className="avatar-img" />
          ) : (
            <div className="avatar-initials">
              {profile.name.split(' ').map(n => n[0]).join('').slice(0, 2)}
            </div>
          )}
        </div>

        <h1 className="hero-name">{profile.name}</h1>
        <p className="hero-title">{profile.title}</p>

        <div className="hero-chips">
          {tagChips.map(chip => (
            <span key={chip} className="hero-chip">{chip}</span>
          ))}
        </div>

        <div className="hero-location">
          <MapPin size={14} />
          <span>{profile.location}</span>
        </div>

        <div className="hero-links">
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Github size={18} /> GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
            <Linkedin size={18} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="btn btn-primary">
            <Mail size={18} /> Contato
          </a>
        </div>

        <a href="#about" className="scroll-down">
          <ChevronDown size={28} />
        </a>
      </div>
    </section>
  );
}
