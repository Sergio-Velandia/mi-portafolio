import "../App.css"

export default function SobreMi() {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="sobre-mi-inner">

        <div className="sobre-mi-heading reveal">
          <span className="section-label">Sobre mí</span>
          <h2 className="section-title">
            Construyo ideas<br />que escalan.
          </h2>
        </div>

        <div className="sobre-mi-card reveal">
          <p>
            Desarrollador de Software en formación, especializado en <strong>React + Vite</strong> y
            arquitecturas serverless/BaaS con Supabase (PostgreSQL). Diseño esquemas relacionales,
            aplico RLS y desarrollo Edge Functions en TypeScript.
          </p>
          <br />
          <p>
            Experiencia en automatización avanzada con <strong>n8n</strong>, integrando APIs,
            workflows complejos y Agentes de IA para ejecutar tareas autónomas y procesamiento
            inteligente. Enfocado en construir soluciones rápidas, escalables y totalmente
            automatizadas.
          </p>
        </div>

      </div>
    </section>
  )
}