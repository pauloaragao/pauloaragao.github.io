import { useState, useEffect } from 'react';
import {
  BookOpen,
  BriefcaseBusiness,
  GraduationCap,
  Home,
  Info,
  Mail,
  Moon,
  ServerCog,
  Sun,
  Wrench,
} from 'lucide-react';
import { profile } from '../data/portfolio';

const homeLinks = [
  { href: '#/content', label: 'Conteúdos', icon: BookOpen },
  { href: '#/portfolio', label: 'Portfólio', icon: BriefcaseBusiness },
];

const portfolioLinks = [
  { href: '#/', label: 'Home', icon: Home },
  { href: '#/content', label: 'Conteúdos', icon: BookOpen },
  { href: '#about', label: 'Sobre', icon: Info },
  { href: '#skills', label: 'Habilidades', icon: Wrench },
  { href: '#experience', label: 'Experiência', icon: ServerCog },
  { href: '#education', label: 'Formação', icon: GraduationCap },
  { href: '#contact', label: 'Contato', icon: Mail },
];

export default function Navbar({ page }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(() => localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('theme-dark', darkMode);
    localStorage.setItem('theme', darkMode ? 'dark' : 'light');
  }, [darkMode]);

  return (
    <nav className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
      <div className="container navbar-inner">
        <a href="#/" className="navbar-brand">
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

        <button
          className="theme-toggle"
          type="button"
          onClick={() => setDarkMode(value => !value)}
          aria-label={darkMode ? 'Ativar tema claro' : 'Ativar tema escuro'}
          title={darkMode ? 'Tema claro' : 'Tema escuro'}
        >
          {darkMode ? <Sun size={17} /> : <Moon size={17} />}
        </button>
      </div>
    </nav>
  );
}
