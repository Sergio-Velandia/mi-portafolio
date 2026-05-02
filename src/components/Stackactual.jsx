import "../App.css"

const herramientas = [
  { categoria: "Editor", items: ["VS Code", "Roblox Studio"] },
  { categoria: "Control de versiones", items: ["Git", "GitHub"] },
  { categoria: "Automatización", items: ["n8n", "Webhooks", "APIs REST"] },
  { categoria: "Base de datos", items: ["MySQL", "Supabase (PostgreSQL)"] },
  { categoria: "Entorno", items: ["Windows 11", "Terminal PowerShell"] },
  { categoria: "Deploy", items: ["Vercel", "GitHub Pages"] },
]

const aprendiendo = [
  {
    tech: "Lua & OOP Avanzado",
    nivel: 65,
    desc: "Profundizando en patrones de diseño orientado a objetos dentro de Roblox Studio: herencia, metatables, módulos reutilizables y arquitecturas cliente-servidor robustas para videojuegos a escala.",
  },
  {
    tech: "Supabase",
    nivel: 40,
    desc: "Explorando el ecosistema completo: autenticación, Row Level Security, Edge Functions en TypeScript y sincronización en tiempo real como alternativa serverless a backends tradicionales.",
  },
  {
    tech: "Apps móviles con React + Capacitor",
    nivel: 35,
    desc: "Convirtiendo proyectos React/Vite en APKs nativas para Android usando Capacitor y Android Studio. El objetivo es poder entregar apps móviles sin salir del ecosistema web que ya domino.",
  },
]

export default function StackActual() {
  return (
    <section className="stack-section" id="stack">
      <div className="stack-inner">

        {/* Stack del día a día */}
        <div className="stack-header reveal">
          <span className="section-label">Flujo de trabajo</span>
          <h2 className="section-title">Stack actual</h2>
        </div>

        <div className="stack-grid reveal">
          {herramientas.map((h) => (
            <div key={h.categoria} className="stack-card">
              <p className="stack-categoria">{h.categoria}</p>
              <div className="stack-items">
                {h.items.map((item) => (
                  <span key={item} className="stack-tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Actualmente aprendiendo */}
        <div className="aprendiendo-header reveal">
          <span className="section-label">En progreso</span>
          <h3 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Actualmente aprendiendo
          </h3>
        </div>

        <div className="aprendiendo-list">
          {aprendiendo.map((a) => (
            <div key={a.tech} className="aprendiendo-card reveal">
              <div className="aprendiendo-top">
                <span className="aprendiendo-tech">{a.tech}</span>
                <span className="aprendiendo-nivel">{a.nivel}%</span>
              </div>
              <div className="aprendiendo-track">
                <div
                  className="aprendiendo-fill"
                  style={{ "--target-width": a.nivel + "%" }}
                />
              </div>
              <p className="aprendiendo-desc">{a.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}