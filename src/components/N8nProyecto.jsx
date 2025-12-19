import "../App.css";
import FlujoN8N from "../assets/FlujoN8N.png"
export default function N8nProyecto() {
  return (
    <section className="n8n">
      <h2>Automatización con n8n</h2>

      <div className="n8n-card">
        
        {}
        <div className="n8n-imagen">
          <img src={FlujoN8N} alt="Flujo de análisis de datos en n8n" />
        </div>

        {/* Explicación */}
        <div className="n8n-info">
          <h3>Automatización de Procesamiento de Datos</h3>

          <p>
            Este proyecto es una solución integral de automatización diseñada para transformar la carga manual de datos en un flujo de trabajo optimizado y profesional. Permite recibir archivos CSV masivos a través de una interfaz web, procesarlos mediante lógica de negocio en n8n y generar reportes automáticos en Google Drive.
          </p>

          <ul>
            <li>Recepción del archivo CSV mediante un WebHook desde una pagina web</li>
            <li>Extraccion de datos del archivo CSV</li>
            <li>Filtro que separa las categorias</li>
            <li>Conversion de archivo a XLSX</li>
            <li>Subir archivo XLSX a carpeta de Drive</li>
          </ul>

          <span className="tec">
            N8N · REACT · HTML · CSS · JavaScript · APIs · Webhooks · SQL 
          </span>

          <br />

          <a
            href="https://github.com/Sergio-Velandia/Test-N8N"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-proyecto"
          >
             Ver en GitHub
          </a>
        </div>

      </div>
    </section>
  );
}
