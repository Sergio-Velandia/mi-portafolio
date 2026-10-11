import "../App.css"
import { useLang } from "../i18n"

const proyectos = [
  {
    id: "yugioh",
    titulo: "YuGiOhApi",
    descripcion: {
      es: "Aplicación web interactiva para explorar una vasta base de datos de cartas Yu-Gi-Oh! consumiendo una API externa, con funcionalidades dinámicas e interfaz personalizada.",
      en: "Interactive web app to explore a large Yu-Gi-Oh! card database from an external API, with dynamic features and a custom interface.",
    },
    tecnologias: ["React", "CSS", "JavaScript", "API externa|External API"],
    link: "https://github.com/Sergio-Velandia/YuGiOhApi",
  },
  {
    id: "digimon",
    titulo: "DigimonAPI + Firebase",
    descripcion: {
      es: "App multiplataforma para gestionar una colección de Digimons con autenticación segura. Arquitectura basada en Capacitor, lista para compilar como APK en Android Studio.",
      en: "Cross-platform app to manage a Digimon collection with secure authentication. Built on Capacitor and ready to compile as an APK in Android Studio.",
    },
    tecnologias: ["HTML", "JavaScript", "Node.js", "Capacitor", "Firebase", "API externa|External API"],
    link: "https://github.com/Sergio-Velandia/DigimonAPI-Firebase",
  },
  {
    id: "portafolio",
    titulo: { es: "Mi portafolio web", en: "My portfolio website" },
    descripcion: {
      es: "Este mismo sitio, desarrollado con React y Vite. Muestra proyectos, habilidades, certificaciones y automatizaciones, en español e inglés.",
      en: "This very site, built with React and Vite. It showcases projects, skills, certifications and automations, in Spanish and English.",
    },
    tecnologias: ["React", "Vite", "CSS", "JavaScript"],
    link: "https://github.com/Sergio-Velandia/mi-portafolio",
  },
]

const TEXT = {
  es: { title: "Otros proyectos", github: "Ver en GitHub" },
  en: { title: "Other projects", github: "View on GitHub" },
}

// "API externa|External API" → texto según idioma; el resto no se traduce
const tr = (value, lang) => {
  if (typeof value === "object") return value[lang]
  const [es, en] = value.split("|")
  return lang === "en" && en ? en : es
}

export default function Proyectos() {
  const { lang } = useLang()
  const t = TEXT[lang]

  return (
    <section className="proyectos" id="proyectos">
      <div className="proyectos-inner">

        <div className="proyectos-header reveal">
          <h2 className="section-title">{t.title}</h2>
        </div>

        <div className="proyectos-grid">
          {proyectos.map((p) => (
            <article key={p.id} className="proyecto-card">
              <h3>{tr(p.titulo, lang)}</h3>
              <p>{p.descripcion[lang]}</p>
              <div className="proyecto-footer">
                <ul className="chips">
                  {p.tecnologias.map((s) => <li key={s}>{tr(s, lang)}</li>)}
                </ul>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-proyecto"
                  aria-label={`${t.github}: ${tr(p.titulo, lang)}`}
                >
                  {t.github}
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}
