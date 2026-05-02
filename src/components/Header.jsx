import "../App.css"

export default function Header() {
  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo">SV</a>
        <ul className="nav-links">
          <li><a href="#sobre-mi">Sobre mí</a></li>
          <li><a href="#habilidades">Skills</a></li>
          <li><a href="#proyectos">Proyectos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header id="hero">
        {/* Columna izquierda */}
        <div className="hero-left">
          <p className="hero-eyebrow">Portfolio 2025</p>

          <h1 className="hero-title">
            <span>Sergio</span>
            <span className="accent-word">Velandia</span>
            <span className="outline-word">Dev</span>
          </h1>

          {/* Typewriter — iniciado desde App.jsx con typeWriterLoop("hero-subtitle", [...]) */}
          <p className="hero-desc">
            <span id="hero-subtitle"></span>
          </p>

          <div className="hero-cta">
            <a href="CV.pdf" download className="btn-primary">
              Descargar CV
            </a>
            <a
              href="https://github.com/Sergio-Velandia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              Ver GitHub →
            </a>
          </div>
        </div>

        {/* Columna derecha — panel asimétrico */}
        <div className="hero-right">
          <div className="dot-grid" />
          <div className="hero-right-rotated">Available for freelance · 2025</div>

          <div>
            <p className="hero-right-label">Ubicación</p>
            <p className="hero-right-info">Colombia</p>
            <p className="hero-right-sub">Disponible para trabajo remoto</p>
          </div>

          <div>
            <p className="hero-right-label">Especialidad</p>
            <p className="hero-right-info">Web · IA · Automatización</p>
            <p className="hero-right-sub">React · N8N · Agentes IA</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator">
          <div className="scroll-line" />
          <span>Scroll</span>
        </div>
      </header>
    </>
  )
}