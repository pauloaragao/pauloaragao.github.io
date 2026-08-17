import { ArrowUpRight, BookOpen, ChevronDown, Layers3, Sparkles } from 'lucide-react';
import Projects from './components/Projects';
import { architectureArticles, architectureArtifacts } from './data/architecture';

export default function ContentPage() {
  return (
    <>
      <section className="content-page-hero">
        <div className="container">
          <p className="home-kicker"><Sparkles size={15} /> Conteúdos de arquitetura</p>
          <h1>Artigos, artefatos e projetos</h1>
          <p>Um espaço para compartilhar decisões, modelos e trabalhos que ajudam a transformar arquitetura em execução.</p>
          <nav className="content-page-actions" aria-label="Navegar pelos conteúdos">
            <a href="#articles" className="btn btn-primary"><BookOpen size={17} /> Artigos</a>
            <a href="#artifacts" className="btn btn-outline"><Layers3 size={17} /> Artefatos</a>
            <a href="#projects" className="btn btn-outline">Projetos <ArrowUpRight size={17} /></a>
          </nav>
          <a href="#articles" className="content-scroll-cue" aria-label="Descer para artigos">
            <span>Explorar conteúdo</span>
            <ChevronDown size={19} />
          </a>
        </div>
      </section>

      <section id="articles" className="home-section">
        <div className="container">
          <div className="home-section-heading">
            <div>
              <p className="home-kicker"><BookOpen size={15} /> Leituras</p>
              <h2>Artigos para compartilhar contexto</h2>
            </div>
            <p>Notas sobre cloud, observabilidade e plataformas.</p>
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
            {architectureArtifacts.map((artifact, index) => (
              <article key={artifact.id} className="artifact-card">
                <div className="artifact-index">0{index + 1}</div>
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

      <Projects />
    </>
  );
}
