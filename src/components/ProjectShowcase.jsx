import { useState } from "react"
import "../App.css"
import { useLang } from "../i18n"

// Sección de proyecto con galería de capturas, texto, chips, enlaces y
// cuatro tarjetas de "pilares". La usan Moss y Moss Nexus: cada uno pasa
// sus propios datos (textos en { es, en }, imágenes y proporción).
//
// project = {
//   id, variant?,                      // id de la sección y modificador de estilo
//   images: [src…], width, height,     // capturas (todas con el mismo tamaño)
//   stack: [...], liveUrl, repoUrl,
//   text: { es: {...}, en: {...} }     // label, status?, title, intro?, heading, p1, p2, live,
// }                                    // github, gallery, view, capturas[], pilares[]
export default function ProjectShowcase({ project }) {
  const [activa, setActiva] = useState(0)
  const { lang } = useLang()
  const t = project.text[lang]
  const { images, width, height } = project

  return (
    <section
      className={`moss${project.variant ? ` moss--${project.variant}` : ""}`}
      id={project.id}
      style={{ "--shot-ratio": `${width} / ${height}` }}
    >
      <div className="moss-inner">

        <div className="moss-header reveal">
          <span className="section-label">
            {t.label}
            {t.status && <span className="moss-status">{t.status}</span>}
          </span>
          <h2 className="section-title">{t.title}</h2>
          {t.intro && <p className="moss-intro">{t.intro}</p>}
        </div>

        <div className="moss-card">

          <div className="moss-galeria">
            <div className="moss-captura">
              <img
                key={activa}
                className="moss-fade"
                src={images[activa]}
                alt={t.capturas[activa].alt}
                width={width}
                height={height}
                decoding="async"
              />
            </div>

            <div className="moss-thumbs" role="group" aria-label={t.gallery}>
              {t.capturas.map((cap, i) => (
                <button
                  key={i}
                  type="button"
                  className={`moss-thumb${i === activa ? " is-active" : ""}`}
                  onClick={() => setActiva(i)}
                  aria-pressed={i === activa}
                  aria-label={`${t.view}: ${cap.label}`}
                >
                  <img src={images[i]} alt="" width={width} height={height} loading="lazy" decoding="async" />
                  <span>{cap.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="moss-info">
            <div className="moss-texto">
              <h3>{t.heading}</h3>
              <p>{t.p1}</p>
              <p>
                <strong>{t.p2[0]}</strong>{t.p2[1]}
              </p>

              <ul className="chips">
                {project.stack.map((s) => <li key={s}>{s}</li>)}
              </ul>

              <div className="moss-links">
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn-proyecto">
                  {t.live}
                </a>
                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" className="btn-proyecto">
                  {t.github}
                </a>
              </div>
            </div>

            <ul className="moss-pilares">
              {t.pilares.map((p, i) => (
                <li key={i}>
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
