import React, { useEffect, useRef, useState } from 'react';
import { TbMenu2, TbX } from 'react-icons/tb';
import "../App.css"
import { initHeroNetwork } from '../heroNetwork';
import { useLang } from '../i18n';

const TEXT = {
  es: {
    nav: [
      { href: "#sobre-mi", label: "Sobre mí" },
      { href: "#certificaciones", label: "Certificaciones" },
      { href: "#habilidades", label: "Habilidades" },
      { href: "#roblox", label: "Experiencia" },
      { href: "#moss-nexus", label: "Proyectos" },
      { href: "#contacto", label: "Contacto" },
    ],
    navLabel: "Navegación principal",
    menuOpen: "Abrir menú",
    menuClose: "Cerrar menú",
    langGroup: "Idioma",
    greeting: "Hola, bienvenido",
    eyebrow: "Portafolio 2026",
    contact: "Contáctame",
    github: "Ver mi GitHub",
    rotated: "Disponible para proyectos freelance en 2026",
    locationLabel: "Ubicación",
    location: "Bogotá, Colombia",
    locationSub: "Disponible para trabajo remoto",
    specialtyLabel: "Especialidad",
    specialty: "Web, IA y automatización",
    specialtySub: "React, n8n y agentes de IA",
    scroll: "Desliza",
  },
  en: {
    nav: [
      { href: "#sobre-mi", label: "About" },
      { href: "#certificaciones", label: "Certifications" },
      { href: "#habilidades", label: "Skills" },
      { href: "#roblox", label: "Experience" },
      { href: "#moss-nexus", label: "Projects" },
      { href: "#contacto", label: "Contact" },
    ],
    navLabel: "Main navigation",
    menuOpen: "Open menu",
    menuClose: "Close menu",
    langGroup: "Language",
    greeting: "Hi, welcome",
    eyebrow: "Portfolio 2026",
    contact: "Contact me",
    github: "View my GitHub",
    rotated: "Available for freelance projects in 2026",
    locationLabel: "Location",
    location: "Bogotá, Colombia",
    locationSub: "Open to remote work",
    specialtyLabel: "Focus",
    specialty: "Web, AI and automation",
    specialtySub: "React, n8n and AI agents",
    scroll: "Scroll",
  },
}

export default function Header() {
  const headerRef = useRef(null);
  const canvasRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang } = useLang();
  const t = TEXT[lang];

  // Detecta preferencias de sistema para animaciones
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);
    const handleChange = (e) => setReducedMotion(e.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, []);

  // Inicializa el sistema de red
  useEffect(() => {
    // Si prefiere reducción de movimiento o faltan refs, evitamos montar el loop enteramente
    if (reducedMotion || !canvasRef.current || !headerRef.current) return;
    const cleanupNetwork = initHeroNetwork(canvasRef.current, headerRef.current);
    return cleanupNetwork;
  }, [reducedMotion]);

  // El menú móvil se cierra con Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => e.key === 'Escape' && setMenuOpen(false);
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <>
      {/* NAV */}
      <nav aria-label={t.navLabel} className={menuOpen ? 'menu-open' : ''}>
        <a href="#hero" className="nav-logo" translate="no">SV</a>

        <ul className="nav-links" id="nav-links">
          {t.nav.map((item) => (
            <li key={item.href}>
              <a href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            </li>
          ))}
        </ul>

        <div className="nav-actions">
          <div className="lang-switch" role="group" aria-label={t.langGroup}>
            {['es', 'en'].map((code) => (
              <button
                key={code}
                type="button"
                className={lang === code ? 'is-active' : ''}
                aria-pressed={lang === code}
                lang={code}
                onClick={() => setLang(code)}
              >
                {code.toUpperCase()}
              </button>
            ))}
          </div>

          <button
            type="button"
            className="nav-toggle"
            aria-expanded={menuOpen}
            aria-controls="nav-links"
            aria-label={menuOpen ? t.menuClose : t.menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <TbX size={22} aria-hidden="true" /> : <TbMenu2 size={22} aria-hidden="true" />}
          </button>
        </div>
      </nav>

      {/* HERO */}
      <header id="hero" ref={headerRef}>

        {/* CANVAS DE FONDO (Grafo) */}
        {!reducedMotion && (
          <canvas
            ref={canvasRef}
            aria-hidden="true"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: 0,
              pointerEvents: 'none' /* No interfiere con el UI */
            }}
          />
        )}

        {/* Columna izquierda */}
        <div className="hero-left">
          <p className="hero-greeting">{t.greeting}</p>
          <p className="hero-eyebrow" data-hero-step="1">{t.eyebrow}</p>

          {/* Cada línea sube desde detrás de una máscara (initHeroIntro) */}
          <h1 className="hero-title" translate="no">
            <span className="line"><span data-hero-step="2">Sergio</span></span>
            <span className="line accent-word"><span data-hero-step="3">Ramirez</span></span>
            <span className="line outline-word"><span data-hero-step="4">Dev</span></span>
          </h1>

          {/* Typewriter */}
          <p className="hero-desc" data-hero-step="5">
            <span id="hero-subtitle"></span>
          </p>

          <div className="hero-cta" data-hero-step="6">
            <a href="#contacto" className="btn-primary">
              {t.contact}
            </a>
            <a
              href="https://github.com/Sergio-Velandia"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              {t.github}
            </a>
          </div>
        </div>

        {/* Columna derecha — panel asimétrico */}
        <div className="hero-right">
          <div className="dot-grid" aria-hidden="true" />
          <div className="hero-right-rotated">{t.rotated}</div>

          <div>
            <p className="hero-right-label">{t.locationLabel}</p>
            <p className="hero-right-info">{t.location}</p>
            <p className="hero-right-sub">{t.locationSub}</p>
          </div>

          <div>
            <p className="hero-right-label">{t.specialtyLabel}</p>
            <p className="hero-right-info">{t.specialty}</p>
            <p className="hero-right-sub">{t.specialtySub}</p>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-scroll-indicator" aria-hidden="true">
          <div className="scroll-line" />
          <span>{t.scroll}</span>
        </div>
      </header>
    </>
  )
}
