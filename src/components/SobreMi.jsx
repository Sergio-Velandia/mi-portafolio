import "../App.css"
import { useLang } from "../i18n"

const TEXT = {
  es: {
    title: ["Ingeniería de software", "aplicada al flujo de trabajo."],
    p1: "¡Hola! Soy Sergio, desarrollador Full-Stack en formación. Construyo aplicaciones web completas con React, Node.js y bases de datos modernas, y me especializo en conectar el desarrollo tradicional con la automatización e integración de Inteligencia Artificial.",
    p2: ["Explorando el mundo de la automatización de flujos con ", " y la integración de IA en aplicaciones reales."],
  },
  en: {
    title: ["Software engineering", "applied to real workflows."],
    p1: "Hi! I'm Sergio, a Full-Stack developer in training. I build complete web applications with React, Node.js and modern databases, and I focus on connecting traditional development with automation and Artificial Intelligence integration.",
    p2: ["Currently exploring workflow automation with ", " and bringing AI into real-world applications."],
  },
}

export default function SobreMi() {
  const { lang } = useLang()
  const t = TEXT[lang]

  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="sobre-mi-inner">

        <div className="sobre-mi-heading reveal">
          <h2 className="section-title">
            {t.title[0]}<br />{t.title[1]}
          </h2>
        </div>

        <div className="sobre-mi-card">
          <p>{t.p1}</p>
          <br />
          <p>
            {t.p2[0]}<strong translate="no">n8n</strong>{t.p2[1]}
          </p>
        </div>

      </div>
    </section>
  )
}
