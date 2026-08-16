import { useState, useEffect } from 'react';
import { profile } from '../data/portfolio';

const links = [
  { href: '#home', label: 'Início' },
  { href: '#about', label: 'Sobre' },
  { href: '#experience', label: 'Experiência' },
  { href: '#skills', label: 'Habilidades' },
  { href: '#projects', label: 'Projetos' },
  { href: '#education', label: 'Formação' },
  { href: '#contact', label: 'Contato' },
];

export default function Navbar() {
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
        <a href="#home" className="navbar-brand">
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
          {links.map(link => (
            <li key={link.href}>
              <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
