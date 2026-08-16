import { Github, Linkedin, Mail, MapPin, ChevronDown } from 'lucide-react';
import { profile } from '../data/portfolio';

const tagChips = profile.tagline.split(/[|•]/).map(s => s.trim()).filter(Boolean);

// [x%, y%] positions across the hero background
const BG_TECH = [
  // Cloud
  { label: 'AWS',               x: 88, y: 12, delay: 1.2  },
  { label: 'Azure',             x: 14, y: 44, delay: 2.1  },
  { label: 'GCP',               x: 70, y: 88, delay: 0.9  },
  { label: 'EKS',               x: 55, y:  8, delay: 1.9  },
  // Infra & IaC
  { label: 'Kubernetes',        x:  6, y: 18, delay: 0    },
  { label: 'Terraform',         x: 78, y: 72, delay: 0.6  },
  { label: 'Ansible',           x: 92, y: 78, delay: 1.4  },
  { label: 'Docker',            x:  4, y: 88, delay: 2.7  },
  { label: 'Helm',              x: 62, y: 95, delay: 0.8  },
  // Observabilidade
  { label: 'Dynatrace',         x:  8, y: 75, delay: 1.8  },
  { label: 'OpenTelemetry',     x: 82, y: 38, delay: 0.3  },
  { label: 'Grafana',           x: 22, y: 88, delay: 1.5  },
  { label: 'Prometheus',        x: 90, y: 25, delay: 2.0  },
  { label: 'Elasticsearch',     x: 18, y: 30, delay: 1.3  },
  { label: 'Loki',              x: 76, y: 20, delay: 3.1  },
  { label: 'Jaeger',            x: 35, y: 96, delay: 2.5  },
  // DevOps & Platform
  { label: 'CI/CD',             x: 90, y: 55, delay: 2.4  },
  { label: 'Backstage',         x: 48, y: 92, delay: 0.4  },
  { label: 'ArgoCD',            x:  2, y: 62, delay: 1.7  },
  { label: 'GitHub Actions',    x: 60, y:  3, delay: 0.7  },
  // Dev & AI
  { label: 'Python',            x:  3, y: 55, delay: 1.1  },
  { label: 'AI Agents',         x: 85, y: 92, delay: 3.3  },
  { label: 'REST APIs',         x: 30, y: 14, delay: 2.8  },
  { label: 'AI Observability',  x: 42, y:  5, delay: 1.6  },
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-bg" />
      <div className="hero-grid-overlay" />

      {BG_TECH.map(({ label, x, y, delay }) => (
        <span
          key={label}
          className="hero-float-tag"
          style={{ left: `${x}%`, top: `${y}%`, animationDelay: `${delay}s` }}
        >
          {label}
        </span>
      ))}

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
