import { useState } from "react"
import "../App.css"
import MossCap1 from "../assets/MossCap1.png"
import MossCap2 from "../assets/MossCap2.png"
import MossCap3 from "../assets/MossCap3.png"
import MossCap4 from "../assets/Mosscap4.png"

const capturas = [
  { src: MossCap1, label: "Inicio",      alt: "Página de inicio de Moss con buscador y acceso a los cuatro pilares" },
  { src: MossCap2, label: "Laboratorio", alt: "El Laboratorio de Moss: demos de componentes con vista previa en vivo" },
  { src: MossCap3, label: "Manual",      alt: "El Manual de Moss: guías técnicas filtradas por categoría" },
  { src: MossCap4, label: "Herbario",    alt: "El Herbario de Moss: búsqueda global con filtros por tipo, tecnología y etiqueta" },
]

const pilares = [
  { nombre: "El Laboratorio", desc: "Componentes y snippets con vista previa en vivo y código copiable." },
  { nombre: "El Manual",      desc: "Documentación, configuraciones y guías que cuesta reconstruir." },
  { nombre: "La Bitácora",    desc: "Blog técnico: aprendizajes, decisiones y errores." },
  { nombre: "El Herbario",    desc: "Búsqueda global, tolerante a erratas, sobre todo el contenido." },
]

export default function MossProject() {
  const [activa, setActiva] = useState(0)

  return (
    <section className="moss" id="moss">
      <div className="moss-inner">

        <div className="moss-header reveal">
          <span className="section-label">Proyecto personal</span>
          <h2 className="section-title">Moss — Digital Garden</h2>
        </div>

        <div className="moss-card">

          <div className="moss-galeria">
            <div className="moss-captura">
              <img key={activa} className="moss-fade" src={capturas[activa].src} alt={capturas[activa].alt} />
            </div>

            <div className="moss-thumbs" role="group" aria-label="Capturas de Moss">
              {capturas.map((cap, i) => (
                <button
                  key={cap.label}
                  type="button"
                  className={`moss-thumb${i === activa ? " is-active" : ""}`}
                  onClick={() => setActiva(i)}
                  aria-pressed={i === activa}
                  aria-label={`Ver captura: ${cap.label}`}
                >
                  <img src={cap.src} alt="" loading="lazy" />
                  <span>{cap.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="moss-info">
            <div className="moss-texto">
              <h3>Mi "segundo cerebro" técnico</h3>
              <p>
                Una biblioteca personal y visual donde guardo, documento, pruebo y reutilizo
                snippets, componentes, guías y artículos. El conocimiento técnico no debería
                quedarse enterrado: debería ser fácil de encontrar, probar y conectar.
              </p>
              <p>
                <strong>Sin base de datos ni backend:</strong> todo el contenido vive en archivos
                Markdown y TSX versionados con Git, y la búsqueda se indexa directamente en el
                navegador.
              </p>

              <span className="tec">
                React 19 · TypeScript · Vite · Tailwind CSS 4 · React Router · MiniSearch · Shiki · Vitest
              </span>

              <div className="moss-links">
                <a
                  href="https://sergio-velandia.github.io/Moss/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-proyecto"
                >
                  Ver en vivo →
                </a>
                <a
                  href="https://github.com/Sergio-Velandia/Moss"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-proyecto"
                >
                  Ver en GitHub →
                </a>
              </div>
            </div>

            <ul className="moss-pilares">
              {pilares.map((p) => (
                <li key={p.nombre}>
                  <h4>{p.nombre}</h4>
                  <p>{p.desc}</p>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
