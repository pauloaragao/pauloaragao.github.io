import { useState, useEffect } from 'react';
import { BookOpen, BriefcaseBusiness, Home, Layers3 } from 'lucide-react';
import { profile } from '../data/portfolio';

const homeLinks = [
  { href: '#articles', label: 'Artigos', icon: BookOpen },
  { href: '#artifacts', label: 'Artefatos', icon: Layers3 },
  { href: '#/portfolio', label: 'Portfólio', icon: BriefcaseBusiness },
];

const portfolioLinks = [
  { href: '#/', label: 'Home', icon: Home },
  { href: '#about', label: 'Sobre' },
  { href: '#experience', label: 'Experiência' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#education', label: 'Formação' },
  { href: '#contact', label: 'Contato' },
];

export default function Navbar({ page }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#/" className="navbar-brand">
          <span className="navbar-logo" aria-hidden="true">
            <img src={profile.avatar} alt="" className="navbar-logo-img" />
          </span>
          <span className="navbar-brand-name">{profile.name}</span>
        </a>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(o => !o)}
          aria-label="Menu"
        >
          <span /><span /><span />
        </button>

        <ul className={`navbar-links${menuOpen ? ' open' : ''}`}>
          {(page === 'portfolio' ? portfolioLinks : homeLinks).map(link => {
            const Icon = link.icon;
            return (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>
                {Icon && <Icon size={15} />}
                {link.label}
              </a>
            </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}
