import { ArrowLeft, ArrowRight, Database, Gauge, GitBranch, Layers3, ShieldCheck } from 'lucide-react';

const flow = [
  { label: 'Pega', detail: 'Eventos de negócio', tone: 'source' },
  { label: 'Kinesis', detail: 'Ingestão em streaming', tone: 'stream' },
  { label: 'Firehose', detail: 'Buffer e entrega', tone: 'stream' },
  { label: 'OpenSearch', detail: 'Busca e indexação', tone: 'data' },
  { label: 'ECS Consumer', detail: 'Normalização e enriquecimento', tone: 'process' },
];

const outcomes = [
  { icon: Gauge, title: 'Tempo real', text: 'Eventos de negócio ficam disponíveis para análise operacional com baixa latência.' },
  { icon: GitBranch, title: 'Correlação', text: 'Sinais de negócio podem ser relacionados a logs, métricas e traces técnicos.' },
  { icon: ShieldCheck, title: 'Governança', text: 'Catálogo, retenção, acesso e auditoria entram como capacidades nativas.' },
];

export default function PegaObservabilityArtifactPage() {
  return (
    <article className="architecture-article">
      <header className="article-hero">
        <div className="container article-hero-inner">
          <a href="#/content" className="back-link"><ArrowLeft size={16} /> Voltar para conteúdos</a>
          <p className="home-kicker"><Layers3 size={15} /> Artefato de observabilidade</p>
          <h1>Real-Time Monitoring Architecture para o sistema Pega</h1>
          <p className="article-intro">Uma esteira de eventos para monitoramento operacional, dashboards executivos e correlação entre impacto de negócio e performance técnica.</p>
          <div className="article-meta"><span>Pega</span><span>Streaming</span><span>Observabilidade</span><span>Retenção Hot, Warm e Cold</span></div>
        </div>
      </header>

      <section className="article-section">
        <div className="container artifact-detail-layout">
          <div className="article-copy">
            <p className="home-kicker">Visão geral</p>
            <h2>O mesmo evento pode servir à operação, à liderança e à evolução da plataforma.</h2>
            <p>O Pega produz eventos de negócio como criação e atualização de casos, SLAs, filas, erros, exceções e métricas de processo. A arquitetura coleta esses sinais, preserva seu contexto e os distribui para experiências de observabilidade e análise.</p>
            <div className="tag-row"><span>Monitoramento em tempo real</span><span>Multi-vendor</span><span>Base histórica para ML/AI</span></div>
          </div>
          <figure className="artifact-diagram">
            <img src="https://raw.githubusercontent.com/pauloaragao/arch-libary/main/observability-stream-log-bizdevops/image.png" alt="Diagrama da arquitetura de monitoramento em tempo real para Pega" />
            <figcaption>Fluxo de eventos, processamento, governança e consumo analítico.</figcaption>
          </figure>
        </div>
      </section>

      <section className="article-section article-section-alt">
        <div className="container">
          <div className="article-section-heading"><p className="home-kicker"><Layers3 size={15} /> Desenho da solução</p><h2>Uma esteira de sinais, do caso ao insight</h2></div>
          <div className="article-flow" aria-label="Fluxo da arquitetura">
            {flow.map((step, index) => <div className="flow-step-group" key={step.label}><div className={`flow-step flow-step--${step.tone}`}><span className="flow-step-index">0{index + 1}</span><strong>{step.label}</strong><small>{step.detail}</small></div>{index < flow.length - 1 && <ArrowRight className="flow-arrow" size={20} />}</div>)}
          </div>
          <div className="article-branches"><div className="branch-line" /><div className="branch-card"><Database size={18} /><strong>Active Gateway Dynamics</strong><span>Exposição segura e integração</span></div><div className="branch-card"><ShieldCheck size={18} /><strong>GaaS</strong><span>Catálogo, acesso e auditoria</span></div><div className="branch-card"><Gauge size={18} /><strong>Dynatrace</strong><span>APM e correlação técnica</span></div><div className="branch-card"><Layers3 size={18} /><strong>Grafana + Power BI</strong><span>Operação e visão executiva</span></div></div>
        </div>
      </section>

      <section className="article-section">
        <div className="container">
          <div className="article-section-heading"><p className="home-kicker">Decisões de arquitetura</p><h2>O que cada camada resolve</h2></div>
          <div className="outcome-grid">{outcomes.map(({ icon: Icon, title, text }) => <div className="outcome-card" key={title}><Icon size={20} /><h3>{title}</h3><p>{text}</p></div>)}</div>
          <div className="retention-panel"><div><span className="content-type">Retenção por temperatura</span><h3>O dado certo no lugar certo</h3></div><div className="retention-items"><span><b>Hot</b> 0–3 meses · OpenSearch, Grafana, Dynatrace</span><span><b>Warm</b> 3–12 meses · S3 Standard-IA, Athena</span><span><b>Cold</b> 1+ ano · Glacier, Glue, Athena, SageMaker</span></div></div>
        </div>
      </section>

      <footer className="article-footer"><div className="container article-footer-inner"><div><p className="home-kicker">Próximo passo</p><h2>Explore o catálogo e acompanhe os próximos artefatos.</h2></div><a href="#/content" className="btn btn-primary">Voltar para conteúdos <ArrowRight size={17} /></a></div></footer>
    </article>
  );
}
