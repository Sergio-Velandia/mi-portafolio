import React, { useEffect, useRef, useState } from 'react';
import "../App.css"
import { initHeroNetwork } from '../heroNetwork';

export default function Header() {
  const headerRef = useRef(null);
  const canvasRef = useRef(null);
  const [reducedMotion, setReducedMotion] = useState(false);

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

  return (
    <>
      {/* NAV */}
      <nav>
        <a href="#hero" className="nav-logo">SV</a>
        <ul className="nav-links">
          <li><a href="#sobre-mi">About me</a></li>
          <li><a href="#habilidades">Skills</a></li>
          <li><a href="#proyectos">Projects</a></li>
          <li><a href="#contacto">Contact</a></li>
        </ul>
      </nav>

      {/* HERO */}
      <header id="hero" ref={headerRef}>
        
        {/* CANVAS DE FONDO (Grafo) */}
        {!reducedMotion && (
          <canvas
            ref={canvasRef}
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
          <p className="hero-eyebrow">Portfolio 2026</p>

          <h1 className="hero-title">
            <span>Sergio</span>
            <span className="accent-word">Ramirez</span>
            <span className="outline-word">Dev</span>
          </h1>

          {/* Typewriter */}
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
          <div className="hero-right-rotated">Available for freelance · 2026</div>

          <div>
            <p className="hero-right-label">Ubicación</p>
            <p className="hero-right-info">Bogotá, Colombia</p>
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