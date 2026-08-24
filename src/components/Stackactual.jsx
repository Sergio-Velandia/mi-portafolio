import "../App.css"

const herramientas = [
  {
    categoria: "Frontend",
    skills: [
      { nombre: "JavaScript", color: "#f7df1e" },
      { nombre: "React",      color: "#61dafb" },
      { nombre: "Vite",       color: "#646cff" },
      { nombre: "HTML & CSS", color: "#e34c26" },
      { nombre: "Vercel",     color: "#000000" },
      { nombre: "GitHub Pages", color: "#222222" }
    ]
  },
  {
    categoria: "Backend & BD",
    skills: [
      { nombre: "Node.js",    color: "#339933" },
      { nombre: "Supabase",   color: "#3ECF8E" },
      { nombre: "PostgreSQL", color: "#336791" },
      { nombre: "MySQL",      color: "#4479A1" },
      { nombre: "MongoDB",    color: "#47A248" }
    ]
  },
  {
    categoria: "IA & APIs",
    skills: [
      { nombre: "n8n",        color: "#ff6a00" },
      { nombre: "Agentes IA", color: "#7e22ce" },
      { nombre: "APIs REST",  color: "#00a2ff" },
      { nombre: "Webhooks",   color: "#00b4d8" },
      { nombre: "Postman",    color: "#FF6C37" }
    ]
  },
  {
    categoria: "Herramientas",
    skills: [
      { nombre: "VS Code",       color: "#007ACC" },
      { nombre: "Git",           color: "#f1502f" },
      { nombre: "GitHub",        color: "#ffffff" },
      { nombre: "Docker",        color: "#2496ED" },
      { nombre: "Lua",           color: "#000080" },
    ]
  }
];

const aprendiendo = [
  {
    tech: "AI Agents & RAG Workflows",
    nivel: 75,
    desc: "Implementing advanced LLM integrations (OpenAI, Gemini) with knowledge bases and automated n8n workflows to build autonomous reasoning agents and intelligent data pipelines.",
  },
  {
    tech: "Advanced Workflow Automation (n8n)",
    nivel: 85,
    desc: "Designing complex integration architectures: mass data processing via webhooks, automated CSV/XLSX transformation, cloud synchronization, and serverless logic.",
  },
  {
    tech: "Full-Stack & Scalable Databases",
    nivel: 65,
    desc: "Strengthening backend systems with Node.js, Express, NoSQL data modeling in MongoDB, and robust relational schemas using Supabase and PostgreSQL.",
  },
];

export default function StackActual() {
  return (
    <section className="stack-section" id="stack">
      <div className="stack-inner">

        {/* Stack del día a día */}
        <div className="stack-header reveal">
          <span className="section-label">Workflow</span>
          <h2 className="section-title">Stack</h2>
        </div>

        <div className="stack-grid reveal">
          {herramientas.map((h) => (
            <div key={h.categoria} className="stack-card">
              <p className="stack-categoria">{h.categoria}</p>
              <div className="stack-items">
                {h.skills.map((s) => (
                  <span 
                    key={s.nombre} 
                    className="stack-tag"
                    style={{ "--skill-color": s.color }}
                  >
                    {s.nombre}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Actualmente aprendiendo */}
        <div className="aprendiendo-header reveal">
          <span className="section-label">In progress</span>
          <h3 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            Currently learning and experimenting.
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
  );
}