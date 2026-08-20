import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <p className="hero-eyebrow">
          WEB DEVELOPER
        </p>

        <h1>
          Building things
          <span>for the web.</span>
        </h1>

        <div className="hero-actions">
          <a href="#projects" className="button button-primary">
            View my projects
          </a>

          <a href="#contact" className="button button-secondary">
            Get in touch
          </a>
        </div>
      </div>

      <div className="hero-tech">
        <div className="tech-orbit tech-1">
          React
        </div>

        <div className="tech-orbit tech-2">
          CSS
        </div>

        <div className="tech-orbit tech-3">
          Node.js
        </div>

        <div className="tech-orbit tech-4">
          JavaScript
        </div>

        <div className="tech-orbit tech-5">
          C#
        </div>

        <div className="tech-orbit tech-6">
          Express
        </div>

        <div className="tech-center">
          <span>&lt; / &gt;</span>
          <strong>WEB DEV</strong>
        </div>
      </div>
    </section>
  );
}

export default Hero;