import "../App.css"

const hitos = [
  {
    fecha: "Mes 1 – 2",
    titulo: "Diseño y arquitectura del juego",
    desc: "Definición del concepto, mecánicas de juego, sistema de fases y arquitectura de scripts en Lua con OOP. Configuración del entorno en Roblox Studio y estructura de carpetas del proyecto.",
  },
  {
    fecha: "Mes 2 – 3",
    titulo: "Desarrollo del ritual cooperativo",
    desc: "Implementación del sistema de 7 pasos del ritual usando RemoteEvents y estados compartidos entre servidor y cliente. Lógica de interacción con objetos, validaciones y mensajes globales en tiempo real.",
  },
  {
    fecha: "Mes 3 – 4",
    titulo: "NPC con Pathfinding avanzado",
    desc: "Desarrollo del sistema de pathfinding personalizado con detección de atascos, salto automático y seguimiento dinámico de jugadores. El NPC recalcula su ruta en tiempo real según la posición del objetivo.",
  },
  {
    fecha: "Mes 4 – 5",
    titulo: "Sistema de fases y sonido",
    desc: "Implementación de las fases progresivas con temporizadores sincronizados, efectos de luces, puertas automáticas y sistema de sonido ambiental dinámico por fase. Cada transición incluye efectos visuales y de audio.",
  },
  {
    fecha: "Cada 15 días",
    titulo: "Presentación de adelantos al canal",
    desc: "Durante todo el desarrollo se realizaron demostraciones quincenales del avance del juego para el canal ExplosionArt. El juego fue construido dentro de un universo cinematográfico con alto alcance de audiencia.",
    highlight: true,
  },
  {
    fecha: "Mes 6",
    titulo: "Lanzamiento y publicación",
    desc: "Testing final, optimización de rendimiento y publicación del juego en Roblox. El juego quedó funcional y jugable de forma pública, integrado al universo del canal ExplosionArt.",
  },
]

export default function Experiencia() {
  return (
    <section className="experiencia" id="experiencia">
      <div className="experiencia-inner">

        <div className="experiencia-header reveal">
          <span className="section-label">Experiencia</span>
          <h2 className="section-title">6 meses<br />de desarrollo</h2>
        </div>

        {/* Card de contexto */}
        <div className="exp-context-card reveal">
          <div className="exp-context-left">
            <p className="exp-context-label">Proyecto</p>
            <p className="exp-context-value">ExplosionArt Game</p>
          </div>
          <div className="exp-context-left">
            <p className="exp-context-label">Rol</p>
            <p className="exp-context-value">Desarrollador Lua / Roblox Studio</p>
          </div>
          <div className="exp-context-left">
            <p className="exp-context-label">Duración</p>
            <p className="exp-context-value">6 meses</p>
          </div>
          <div className="exp-context-left">
            <p className="exp-context-label">Canal</p>
            <a
              href="https://www.youtube.com/@Explosionart."
              target="_blank"
              rel="noopener noreferrer"
              className="exp-context-link"
            >
              @Explosionart →
            </a>
          </div>
        </div>

        {/* Timeline */}
        <div className="timeline">
          {hitos.map((hito, i) => (
            <div
              key={i}
              className={`timeline-item reveal${hito.highlight ? " timeline-item--highlight" : ""}`}
            >
              <div className="timeline-line">
                <div className="timeline-dot" />
              </div>
              <div className="timeline-content">
                <span className="timeline-fecha">{hito.fecha}</span>
                <h4 className="timeline-titulo">{hito.titulo}</h4>
                <p className="timeline-desc">{hito.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}