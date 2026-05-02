import "../App.css"
import FlujoN8N from "../assets/FlujoN8N.png"

export default function N8nProyecto() {
  return (
    <section className="n8n" id="n8n">
      <div className="n8n-inner">

        <div className="n8n-header reveal">
          <span className="section-label">Automatización</span>
          <h2 className="section-title">Flujo con n8n</h2>
        </div>

        <div className="n8n-card reveal">

          <div className="n8n-imagen">
            <img src={FlujoN8N} alt="Flujo de análisis de datos en n8n" />
          </div>

          <div className="n8n-info">
            <h3>Automatización de Procesamiento de Datos</h3>
            <p>
              Solución integral que transforma la carga manual de datos en un flujo de trabajo
              optimizado. Recibe archivos CSV masivos vía interfaz web, los procesa con lógica
              de negocio en n8n y genera reportes automáticos en Google Drive.
            </p>

            <ul>
              <li>Recepción del archivo CSV mediante WebHook desde una página web</li>
              <li>Extracción y validación de datos del CSV</li>
              <li>Filtro que separa y clasifica categorías</li>
              <li>Conversión automática a formato XLSX</li>
              <li>Subida del archivo final a carpeta de Google Drive</li>
            </ul>

            <span className="tec">
              N8N · React · JavaScript · APIs · Webhooks · SQL
            </span>

            <br />

            <a
              href="https://github.com/Sergio-Velandia/Test-N8N"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-proyecto"
            >
              Ver en GitHub →
            </a>
          </div>

        </div>

      </div>
    </section>
  )
}