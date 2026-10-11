import "../App.css"
import FlujoN8N from "../assets/flujo-n8n.webp"
import N8nFlow from "./N8nFlow"
import { useLang } from "../i18n"

const TEXT = {
  es: {
    title: "Flujo de automatización con n8n",
    heading: "Automatización del procesamiento de datos",
    desc: "Convierte la carga manual de datos en un flujo automático. Recibe archivos CSV desde una página web, los procesa con lógica de negocio en n8n y genera el reporte final en Google Drive.",
    steps: [
      "Recibe el archivo CSV mediante un webhook desde una página web",
      "Extrae y valida los datos del CSV",
      "Filtra y clasifica los registros por categoría",
      "Convierte el resultado a formato XLSX",
      "Sube el archivo final a una carpeta de Google Drive",
    ],
    shotCaption: "Captura real del flujo en n8n",
    shotAlt: "Captura del editor de n8n con los cinco nodos del flujo ejecutados correctamente",
    shotOpen: "Ver captura completa",
    github: "Ver código en GitHub",
  },
  en: {
    title: "Automation workflow with n8n",
    heading: "Automated data processing",
    desc: "Turns manual data entry into an automated workflow. It receives CSV files from a web page, processes them with business logic in n8n and delivers the final report to Google Drive.",
    steps: [
      "Receives the CSV file through a webhook from a web page",
      "Extracts and validates the CSV data",
      "Filters and groups the records by category",
      "Converts the result to XLSX",
      "Uploads the final file to a Google Drive folder",
    ],
    shotCaption: "Real screenshot of the workflow in n8n",
    shotAlt: "Screenshot of the n8n editor showing the five workflow nodes executed successfully",
    shotOpen: "Open full screenshot",
    github: "View code on GitHub",
  },
}

const STACK = ["n8n", "React", "JavaScript", "APIs", "Webhooks", "SQL"]

export default function N8nProyecto() {
  const { lang } = useLang()
  const t = TEXT[lang]

  return (
    <section className="n8n" id="n8n">
      <div className="n8n-inner">

        <div className="n8n-header reveal">
          <h2 className="section-title">{t.title}</h2>
        </div>

        {/* El momento del sitio: el flujo se ejecuta al llegar a él */}
        <N8nFlow lang={lang} />

        <div className="n8n-card">

          <div className="n8n-info">
            <h3>{t.heading}</h3>
            <p>{t.desc}</p>

            <ul className="n8n-steps">
              {t.steps.map((s, i) => <li key={i}>{s}</li>)}
            </ul>

            <ul className="chips">
              {STACK.map((s) => <li key={s}>{s}</li>)}
            </ul>

            <a
              href="https://github.com/Sergio-Velandia/Test-N8N"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-proyecto"
            >
              {t.github}
            </a>
          </div>

          {/* La captura real queda como prueba de que el flujo existe */}
          <figure className="n8n-imagen">
            <a href={FlujoN8N} target="_blank" rel="noopener noreferrer" aria-label={t.shotOpen}>
              <img src={FlujoN8N} alt={t.shotAlt} width="1069" height="243" loading="lazy" decoding="async" />
            </a>
            <figcaption>{t.shotCaption}</figcaption>
          </figure>

        </div>

      </div>
    </section>
  )
}
