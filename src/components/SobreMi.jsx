import "../App.css"

export default function SobreMi() {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="sobre-mi-inner">

        <div className="sobre-mi-heading reveal">
          <span className="section-label">About me</span>
          <h2 className="section-title">
            Ingeniería de software<br />aplicada al flujo de trabajo.
          </h2>
        </div>

        <div className="sobre-mi-card reveal">
          <p>
            ¡Hola! Soy Sergio, desarrollador Full-Stack en formación. Construyo aplicaciones web completas con React, Node.js y bases de datos modernas, y me especializo en conectar el desarrollo tradicional con la automatización e integración de Inteligencia Artificial.          </p>
          <br />
          <p>
           Explorando el mundo de la automatización de flujos con <strong>n8n</strong> y la integración de IA en aplicaciones reales.
          </p>
        </div>

      </div>
    </section>
  )
}