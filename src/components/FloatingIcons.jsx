import React, { useEffect, useRef } from 'react';
import { FaReact, FaNodeJs, FaHtml5, FaDatabase, FaJs, FaGithub, FaDocker } from 'react-icons/fa';
import { SiN8N, SiVite, SiSupabase, SiPostgresql } from 'react-icons/si';

// Configuración de los íconos por sección
const ICONS_CONFIG = [
  // Habilidades
  { id: 'h-1', Icon: FaReact, sectionId: 'habilidades', layer: 2, size: 60 },
  { id: 'h-2', Icon: FaNodeJs, sectionId: 'habilidades', layer: 1, size: 45 },
  { id: 'h-3', Icon: SiSupabase, sectionId: 'habilidades', layer: 0, size: 30 },
  { id: 'h-4', Icon: FaJs, sectionId: 'habilidades', layer: 2, size: 50 },
  { id: 'h-5', Icon: SiPostgresql, sectionId: 'habilidades', layer: 1, size: 40 },
  { id: 'h-6', Icon: FaDocker, sectionId: 'habilidades', layer: 0, size: 35 },
  { id: 'h-7', Icon: FaHtml5, sectionId: 'habilidades', layer: 1, size: 45 },
  
  // N8nProyecto
  { id: 'n-1', Icon: SiN8N, sectionId: 'n8n', layer: 2, size: 80 },
  { id: 'n-2', Icon: FaNodeJs, sectionId: 'n8n', layer: 1, size: 40 },
  { id: 'n-3', Icon: FaDatabase, sectionId: 'n8n', layer: 0, size: 30 },

  // RobloxProyecto
  { id: 'r-1', Icon: FaDocker, sectionId: 'roblox', layer: 1, size: 40 },

  // Proyectos
  { id: 'p-1', Icon: FaGithub, sectionId: 'proyectos', layer: 2, size: 55 },
  { id: 'p-2', Icon: SiVite, sectionId: 'proyectos', layer: 1, size: 45 },
  { id: 'p-3', Icon: FaReact, sectionId: 'proyectos', layer: 0, size: 30 },

  // Hero / Sobre Mi
  { id: 'he-1', Icon: FaReact, sectionId: 'sobre-mi', layer: 2, size: 65 },
  { id: 'he-2', Icon: FaNodeJs, sectionId: 'sobre-mi', layer: 1, size: 40 },
  { id: 'he-3', Icon: SiN8N, sectionId: 'sobre-mi', layer: 0, size: 30 },
];

const LAYER_STYLES = {
  0: { blur: 2, opacity: 0.35, repelStrength: 0.1, zIndex: 1 },
  1: { blur: 1, opacity: 0.6, repelStrength: 0.5, zIndex: 2 },
  2: { blur: 0, opacity: 1, repelStrength: 1, zIndex: 3 },
};

const randomRange = (min, max) => Math.random() * (max - min) + min;
const lerp = (start, end, factor) => start + (end - start) * factor;

export default function FloatingIcons() {
  const containerRef = useRef(null);
  const iconsRef = useRef([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const scrollRef = useRef(0);
  const sectionsState = useRef(new Map());

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Inicializar estado de íconos
    iconsRef.current = ICONS_CONFIG.map(config => {
      const layerStyle = LAYER_STYLES[config.layer];
      return {
        ...config,
        baseX: randomRange(5, 95), // vw
        baseY: randomRange(10, 90), // vh
        parallaxSpeed: config.layer === 2 ? randomRange(0.2, 0.4) : config.layer === 1 ? randomRange(0.1, 0.2) : randomRange(0.05, 0.1),
        rotSpeed: randomRange(-0.3, 0.3),
        driftPeriodX: randomRange(3000, 6000),
        driftPeriodY: randomRange(3000, 6000),
        driftAmpX: randomRange(15, 35),
        driftAmpY: randomRange(10, 25),
        
        angle: randomRange(0, 360),
        repelX: 0,
        repelY: 0,
        
        targetScale: 0.5, // Empieza un poco pequeño
        targetOpacity: 0,
        currentScale: 0.5,
        currentOpacity: 0,
        currentBlur: 6, // blur inicial para la transición
        
        baseOpacity: layerStyle.opacity,
        targetBlur: layerStyle.blur,
        repelStrength: layerStyle.repelStrength,
        
        delay: randomRange(50, 400), 
        activeTime: 0,
        isExitingUp: false,
      };
    });

    // Observer para rastrear las secciones en el viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          sectionsState.current.set(entry.target.id, {
            isIntersecting: entry.isIntersecting,
            boundingClientRect: entry.boundingClientRect
          });
        });
      },
      { threshold: 0, rootMargin: "0px 0px -10% 0px" } 
    );

    const sectionIds = [...new Set(ICONS_CONFIG.map(i => i.sectionId))];
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    const handleMouseMove = (e) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };
    
    const handleScroll = () => {
      scrollRef.current = window.scrollY;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    let animationFrameId;
    let lastTime = performance.now();

    const loop = (time) => {
      const dt = time - lastTime;
      lastTime = time;

      iconsRef.current.forEach(icon => {
        const sectionState = sectionsState.current.get(icon.sectionId);
        const isVisible = sectionState?.isIntersecting;
        
        // 1. Estado de Entrada/Salida
        if (isVisible) {
          icon.activeTime += dt;
          if (icon.activeTime >= icon.delay || prefersReducedMotion) {
            icon.targetScale = 1;
            icon.targetOpacity = icon.baseOpacity;
            icon.isExitingUp = false;
          }
        } else {
          icon.activeTime = 0;
          icon.targetScale = prefersReducedMotion ? 1 : 0.5;
          icon.targetOpacity = 0;
          
          // Si el bottom de la sección está en la mitad superior, significa que hicimos scroll hacia abajo
          // y la sección sale por arriba -> aceleramos la salida
          if (sectionState && sectionState.boundingClientRect.bottom < window.innerHeight / 2) {
             icon.isExitingUp = true;
          } else {
             icon.isExitingUp = false;
          }
        }

        // 2. Interpolación (Lerp) de opacidad y escala
        const lerpFactor = icon.isExitingUp ? 0.12 : 0.04; 
        icon.currentScale = lerp(icon.currentScale, icon.targetScale, lerpFactor);
        icon.currentOpacity = lerp(icon.currentOpacity, icon.targetOpacity, lerpFactor);
        
        const targetBlur = isVisible && (icon.activeTime >= icon.delay || prefersReducedMotion) ? icon.targetBlur : 6;
        icon.currentBlur = lerp(icon.currentBlur, targetBlur, lerpFactor);

        // 3. Física y Transformaciones (sólo si es mínimamente visible)
        if (icon.currentOpacity > 0.01) {
          let driftX = 0;
          let driftY = 0;
          let parallaxY = 0;
          
          if (!prefersReducedMotion) {
            icon.angle += icon.rotSpeed;
            driftX = Math.sin(time / icon.driftPeriodX) * icon.driftAmpX;
            driftY = Math.cos(time / icon.driftPeriodY) * icon.driftAmpY;
            parallaxY = -(scrollRef.current * icon.parallaxSpeed);

            // Calcular posición real aproximada para interacción del cursor
            const pxX = (icon.baseX / 100) * window.innerWidth + driftX + icon.repelX;
            const pxY = (icon.baseY / 100) * window.innerHeight + driftY + parallaxY + icon.repelY;

            const dx = pxX - mouseRef.current.x;
            const dy = pxY - mouseRef.current.y;
            const dist = Math.hypot(dx, dy);
            
            let targetRepelX = 0;
            let targetRepelY = 0;
            
            if (dist < 150) {
              const force = Math.pow((150 - dist) / 150, 1.5); // easing para suavizar el empuje
              targetRepelX = (dx / dist) * force * 100 * icon.repelStrength;
              targetRepelY = (dy / dist) * force * 100 * icon.repelStrength;
            }

            icon.repelX = lerp(icon.repelX, targetRepelX, 0.08);
            icon.repelY = lerp(icon.repelY, targetRepelY, 0.08);
          }

          const el = document.getElementById(`f-icon-${icon.id}`);
          if (el) {
            el.style.opacity = icon.currentOpacity;
            el.style.filter = `blur(${icon.currentBlur}px)`;
            el.style.transform = `
              translate3d(
                calc(${icon.baseX}vw + ${driftX + icon.repelX}px), 
                calc(${icon.baseY}vh + ${driftY + parallaxY + icon.repelY}px), 
                0
              )
              scale(${icon.currentScale})
              rotate(${prefersReducedMotion ? 0 : icon.angle}deg)
            `;
          }
        } else {
           const el = document.getElementById(`f-icon-${icon.id}`);
           if (el) el.style.opacity = 0;
        }
      });

      animationFrameId = requestAnimationFrame(loop);
    };

    animationFrameId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      className="floating-icons-container" 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        overflow: 'hidden'
      }}
    >
      {ICONS_CONFIG.map(icon => (
        <div
          key={icon.id}
          id={`f-icon-${icon.id}`}
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            color: 'rgba(255, 255, 255, 0.15)', // Color sutil de fondo
            opacity: 0, 
            zIndex: LAYER_STYLES[icon.layer].zIndex,
            willChange: 'transform, opacity, filter',
            transformOrigin: 'center center'
          }}
        >
          <icon.Icon size={icon.size} />
        </div>
      ))}
    </div>
  );
}

