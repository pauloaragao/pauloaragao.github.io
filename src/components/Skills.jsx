import { Cloud, Eye, GitBranch, Code2 } from 'lucide-react';
import { skills } from '../data/portfolio';

const CATEGORY_META = {
  'Cloud & Infra':      { icon: Cloud,      color: '#58a6ff' },
  'Observabilidade':    { icon: Eye,        color: '#3fb950' },
  'DevOps & Platform':  { icon: GitBranch,  color: '#d2a8ff' },
  'Desenvolvimento':    { icon: Code2,      color: '#ffa657' },
};

const DEFAULT_COLOR = '#58a6ff';

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <h2 className="section-title">Habilidades</h2>
        <div className="skills-grid">
          {Object.entries(skills).map(([category, items]) => {
            const meta = CATEGORY_META[category] ?? { icon: Code2, color: DEFAULT_COLOR };
            const Icon = meta.icon;
            return (
              <div key={category} className="skill-group" style={{ '--cat-color': meta.color }}>
                <div className="skill-category-header">
                  <span className="skill-category-icon">
                    <Icon size={16} />
                  </span>
                  <h3 className="skill-category">{category}</h3>
                </div>
                <div className="skill-tags">
                  {items.map(skill => (
                    <span key={skill} className="skill-tag">{skill}</span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
