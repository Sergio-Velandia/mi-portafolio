import "../App.css"

const skills = [
  { nombre: "JavaScript", color: "#f7df1e", texto: "#000" },
  { nombre: "React",      color: "#61dafb", texto: "#000" },
  { nombre: "Vite",       color: "#646cff" },
  { nombre: "HTML",       color: "#e34c26" },
  { nombre: "N8N",        color: "#ff6a00" },
  { nombre: "Agentes IA", color: "#7e22ce" },
  { nombre: "Git",        color: "#f1502f" },
  { nombre: "GitHub",     color: "#333"    },
]

export default function Habilidades() {
  return (
    <section className="habilidades" id="habilidades">
      <div className="habilidades-inner">

        <div className="habilidades-header reveal">
          <span className="section-label">Stack</span>
          <h2 className="section-title">Habilidades</h2>
        </div>

        <div className="habilidades-grid">
          {skills.map((skill) => (
            <div
              key={skill.nombre}
              className="habilidad-card"
              style={{
                "--card-accent": skill.color,
                color: skill.texto || "white",
              }}
            >
              {/* punto de color de la tecnología */}
              <span
                className="skill-dot"
                style={{ background: skill.color }}
              />
              {skill.nombre}
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}