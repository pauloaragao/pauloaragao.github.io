import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import ContentPage from './ContentPage';
import { PegaObservabilityArtifactPage } from './artifacts/pega';
import PortfolioPage from './PortfolioPage';
import './portfolio.css';

function getPage() {
  if (window.location.hash === '#/artifact/observability-stream-log-bizdevops') return 'artifact';
  if (window.location.hash === '#/portfolio') return 'portfolio';
  if (window.location.hash === '#/content') return 'content';
  return 'home';
}

function App() {
  const [page, setPage] = useState(getPage);

  useEffect(() => {
    const handleRouteChange = () => {
      if (window.location.hash.startsWith('#/')) setPage(getPage());
    };
    window.addEventListener('hashchange', handleRouteChange);
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  return (
    <>
      <Navbar page={page} />
      <main>
        {page === 'portfolio' && <PortfolioPage />}
        {page === 'content' && <ContentPage />}
        {page === 'artifact' && <PegaObservabilityArtifactPage />}
        {page === 'home' && <Home />}
      </main>
      <footer className="footer">
        <p>© {new Date().getFullYear()} Paulo Aragão — Feito com React</p>
      </footer>
    </>
  );
}

function _OldApp_UNUSED() {
  return (
    <>
      <section id="next-steps">
        <div id="docs">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#documentation-icon"></use>
          </svg>
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <ul>
            <li>
              <a href="https://vite.dev/" target="_blank">
                <img className="logo" src={viteLogo} alt="" />
                Explore Vite
              </a>
            </li>
            <li>
              <a href="https://react.dev/" target="_blank">
                <img className="button-icon" src={reactLogo} alt="" />
                Learn more
              </a>
            </li>
          </ul>
        </div>
        <div id="social">
          <svg className="icon" role="presentation" aria-hidden="true">
            <use href="/icons.svg#social-icon"></use>
          </svg>
          <h2>Connect with us</h2>
          <p>Join the Vite community</p>
          <ul>
            <li>
              <a href="https://github.com/vitejs/vite" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#github-icon"></use>
                </svg>
                GitHub
              </a>
            </li>
            <li>
              <a href="https://chat.vite.dev/" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#discord-icon"></use>
                </svg>
                Discord
              </a>
            </li>
            <li>
              <a href="https://x.com/vite_js" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#x-icon"></use>
                </svg>
                X.com
              </a>
            </li>
            <li>
              <a href="https://bsky.app/profile/vite.dev" target="_blank">
                <svg
                  className="button-icon"
                  role="presentation"
                  aria-hidden="true"
                >
                  <use href="/icons.svg#bluesky-icon"></use>
                </svg>
                Bluesky
              </a>
            </li>
          </ul>
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  );
}

export default App;
