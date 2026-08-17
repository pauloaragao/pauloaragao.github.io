import { ArrowUpRight, BookOpen, BriefcaseBusiness, Linkedin, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';

export default function Home() {
  return (
    <section className="home-hero home-hero--standalone">
        <div className="home-hero-grid" />
        <div className="container home-hero-layout">
          <div className="home-hero-content">
          <p className="home-kicker"><Sparkles size={15} /> Senior Cloud Engineer &amp; Cloud Architect</p>
          <h1>Arquitetura que transforma complexidade em direção.</h1>
          <p className="home-lead">
            Sou {profile.name}, especialista em cloud, observabilidade e plataformas.
            Este espaço reúne minha trajetória profissional e os conteúdos que estou construindo.
          </p>
          <div className="home-actions">
            <a href="#/portfolio" className="btn btn-primary">
              <BriefcaseBusiness size={17} /> Ver portfólio <ArrowUpRight size={17} />
            </a>
            <a href="#/content" className="btn btn-outline">
              <BookOpen size={17} /> Conteúdos
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
              <Linkedin size={17} /> LinkedIn
            </a>
          </div>
          <div className="home-proof-row" aria-label="Áreas de atuação">
            <span>Cloud architecture</span>
            <span>Platform engineering</span>
            <span>Observability</span>
          </div>
          </div>

          <aside className="architecture-signal" aria-label="Áreas de atuação">
            <div className="signal-heading">
              <span className="signal-dot" />
              <span>Architecture practice</span>
              <span className="signal-status">ACTIVE</span>
            </div>
            <div className="signal-diagram" aria-hidden="true">
              <span className="diagram-node diagram-node--top">STRATEGY</span>
              <span className="diagram-node diagram-node--left">PLATFORM</span>
              <span className="diagram-node diagram-node--right">OBSERVABILITY</span>
              <span className="diagram-node diagram-node--middle">ARCHITECTURE</span>
              <span className="diagram-node diagram-node--center">VALUE</span>
              <span className="diagram-line diagram-line--top" />
              <span className="diagram-line diagram-line--left" />
              <span className="diagram-line diagram-line--right" />
              <span className="diagram-line diagram-line--bottom" />
            </div>
          </aside>
        </div>
      </section>
  );
}
