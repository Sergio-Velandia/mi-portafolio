import "../App.css"
import { useLang } from "../i18n"

const herramientas = [
  {
    id: "frontend",
    categoria: { es: "Frontend", en: "Frontend" },
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
    id: "backend",
    categoria: { es: "Backend y bases de datos", en: "Backend & databases" },
    skills: [
      { nombre: "Node.js",    color: "#339933" },
      { nombre: "Supabase",   color: "#3ECF8E" },
      { nombre: "PostgreSQL", color: "#336791" },
      { nombre: "MySQL",      color: "#4479A1" },
      { nombre: "MongoDB",    color: "#47A248" }
    ]
  },
  {
    id: "ia",
    categoria: { es: "IA y APIs", en: "AI & APIs" },
    skills: [
      { nombre: "n8n",        color: "#ff6a00" },
      { nombre: { es: "Agentes IA", en: "AI Agents" }, color: "#7e22ce" },
      { nombre: "APIs REST",  color: "#00a2ff" },
      { nombre: "Webhooks",   color: "#00b4d8" },
      { nombre: "Postman",    color: "#FF6C37" }
    ]
  },
  {
    id: "tools",
    categoria: { es: "Herramientas", en: "Tools" },
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
    id: "agents",
    nivel: 75,
    tech: { es: "Agentes de IA y flujos RAG", en: "AI Agents & RAG Workflows" },
    desc: {
      es: "Integraciones avanzadas con LLMs (OpenAI, Gemini) conectadas a bases de conocimiento y flujos de n8n, para construir agentes autónomos y pipelines de datos inteligentes.",
      en: "Implementing advanced LLM integrations (OpenAI, Gemini) with knowledge bases and automated n8n workflows to build autonomous reasoning agents and intelligent data pipelines.",
    },
  },
  {
    id: "n8n",
    nivel: 85,
    tech: { es: "Automatización avanzada de flujos (n8n)", en: "Advanced Workflow Automation (n8n)" },
    desc: {
      es: "Arquitecturas de integración complejas: procesamiento masivo de datos vía webhooks, transformación automática de CSV/XLSX, sincronización en la nube y lógica serverless.",
      en: "Designing complex integration architectures: mass data processing via webhooks, automated CSV/XLSX transformation, cloud synchronization, and serverless logic.",
    },
  },
  {
    id: "fullstack",
    nivel: 65,
    tech: { es: "Full-Stack y bases de datos escalables", en: "Full-Stack & Scalable Databases" },
    desc: {
      es: "Backends más sólidos con Node.js y Express, modelado de datos NoSQL en MongoDB y esquemas relacionales robustos con Supabase y PostgreSQL.",
      en: "Strengthening backend systems with Node.js, Express, NoSQL data modeling in MongoDB, and robust relational schemas using Supabase and PostgreSQL.",
    },
  },
];

const TEXT = {
  es: { title: "Stack de trabajo", learning: "Lo que estoy aprendiendo y experimentando ahora." },
  en: { title: "Working stack", learning: "What I'm currently learning and experimenting with." },
};

// Nombre visible: texto fijo o { es, en } cuando se traduce
const label = (value, lang) => (typeof value === "string" ? value : value[lang]);

export default function StackActual() {
  const { lang } = useLang();
  const t = TEXT[lang];

  return (
    <section className="stack-section" id="stack">
      <div className="stack-inner">

        {/* Stack del día a día */}
        <div className="stack-header reveal">
          <h2 className="section-title">{t.title}</h2>
        </div>

        <div className="stack-grid">
          {herramientas.map((h) => (
            <div key={h.id} className="stack-card">
              <p className="stack-categoria">{label(h.categoria, lang)}</p>
              <div className="stack-items">
                {h.skills.map((s) => (
                  <span
                    key={label(s.nombre, "es")}
                    className="stack-tag"
                    style={{ "--skill-color": s.color }}
                  >
                    {label(s.nombre, lang)}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Actualmente aprendiendo */}
        <div className="aprendiendo-header reveal">
          <h3 className="section-title" style={{ fontSize: "clamp(1.6rem, 3vw, 2.4rem)" }}>
            {t.learning}
          </h3>
        </div>

        <div className="aprendiendo-list">
          {aprendiendo.map((a) => (
            <div key={a.id} className="aprendiendo-card">
              <div className="aprendiendo-top">
                <span className="aprendiendo-tech">{a.tech[lang]}</span>
                <span className="aprendiendo-nivel">{a.nivel}%</span>
              </div>
              <div className="aprendiendo-track">
                <div
                  className="aprendiendo-fill"
                  style={{ "--target-scale": a.nivel / 100 }}
                />
              </div>
              <p className="aprendiendo-desc">{a.desc[lang]}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
