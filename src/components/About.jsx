import { about } from '../data/portfolio';

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <h2 className="section-title">Sobre mim</h2>
        <div className="about-card">
          <p className="about-text">{about}</p>
        </div>
      </div>
    </section>
  );
}
