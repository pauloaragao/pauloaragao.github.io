import { ArrowUpRight, BookOpen, Layers3, Sparkles } from 'lucide-react';
import { profile } from '../data/portfolio';
import { architectureArticles, architectureArtifacts } from '../data/architecture';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero-grid" />
        <div className="container home-hero-content">
          <p className="home-kicker"><Sparkles size={15} /> Arquitetura em público</p>
          <h1>Ideias que viram sistemas mais claros, resilientes e humanos.</h1>
          <p className="home-lead">
            Artigos, blueprints e decisões de arquitetura sobre cloud, observabilidade e plataformas,
            compartilhados para provocar boas conversas e registrar trabalho real.
          </p>
          <div className="home-actions">
            <a href="#articles" className="btn btn-primary">Ler artigos <ArrowUpRight size={17} /></a>
            <a href="#/portfolio" className="btn btn-outline">Conhecer o portfólio</a>
          </div>
          <div className="home-proof-row" aria-label="Áreas de atuação">
            <span>Cloud architecture</span>
            <span>Platform engineering</span>
            <span>Observability</span>
          </div>
        </div>
      </section>

      <section id="articles" className="home-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="home-kicker"><BookOpen size={15} /> Leituras</p>
              <h2>Artigos para compartilhar contexto</h2>
            </div>
            <p>Notas curtas para transformar experiência operacional em repertório útil.</p>
          </div>
          <div className="article-grid">
            {architectureArticles.map(article => (
              <article key={article.id} className="article-card">
                <div className="content-card-topline">
                  <span className="content-type">{article.category}</span>
                  <span className="content-read-time">{article.readTime}</span>
                </div>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <div className="tag-row">
                  {article.topics.map(topic => <span key={topic}>{topic}</span>)}
                </div>
                <button className="text-action" type="button" aria-label={`Artigo ${article.title} em breve`}>
                  Em breve <ArrowUpRight size={16} />
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="artifacts" className="home-section home-section-dark">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="home-kicker"><Layers3 size={15} /> Artefatos</p>
              <h2>Arquiteturas feitas para sair do quadro</h2>
            </div>
            <p>Modelos visuais e decisões estruturadas para comunicar, construir e evoluir.</p>
          </div>
          <div className="artifact-grid">
            {architectureArtifacts.map(artifact => (
              <article key={artifact.id} className="artifact-card">
                <div className="artifact-index">0{architectureArtifacts.indexOf(artifact) + 1}</div>
                <div>
                  <span className="content-type">{artifact.category}</span>
                  <h3>{artifact.title}</h3>
                  <p>{artifact.description}</p>
                  <strong>{artifact.outcome}</strong>
                  <div className="tag-row">
                    {artifact.stack.map(item => <span key={item}>{item}</span>)}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="home-bridge">
        <div className="container home-bridge-inner">
          <div>
            <p className="home-kicker">Do conceito à execução</p>
            <h2>Veja o contexto por trás das ideias.</h2>
            <p>Experiência, projetos e formação reunidos em uma página para consulta rápida.</p>
          </div>
          <a href="#/portfolio" className="btn btn-primary">Abrir portfólio de {profile.name.split(' ')[0]} <ArrowUpRight size={17} /></a>
        </div>
      </section>
    </>
  );
}
