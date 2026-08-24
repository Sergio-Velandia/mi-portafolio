import "../App.css"

// Agrupamos las habilidades en 4 categorías para crear las columnas
const skillCategories = [
  {
    categoria: "Frontend ",
    skills: [
      { nombre: "JavaScript", color: "#f7df1e" },
      { nombre: "React",      color: "#61dafb" },
      { nombre: "Vite",       color: "#646cff" },
      { nombre: "HTML & CSS", color: "#e34c26" },
    ]
  },
  {
    categoria: "Backend & BD ",
    skills: [
      { nombre: "Node.js",    color: "#339933" },
      { nombre: "Supabase",   color: "#3ECF8E" },
      { nombre: "PostgreSQL", color: "#336791" },
      { nombre: "MongoDB",    color: "#47A248" },
    ]
  },
  {
    categoria: "IA & APIs ",
    skills: [
      { nombre: "n8n",        color: "#ff6a00" },
      { nombre: "Agentes IA", color: "#7e22ce" },
      { nombre: "APIs REST",  color: "#00a2ff" },
      { nombre: "Postman",    color: "#FF6C37" },
    ]
  },
  {
    categoria: "Herramientas ",
    skills: [
      { nombre: "Git",        color: "#f1502f" },
      { nombre: "GitHub",     color: "#ffffff" },
      { nombre: "Docker",     color: "#2496ED" },
      { nombre: "Lua",       color: "#00A2FF" }
    ]
  }
];

export default function Habilidades() {
  return (
    <section className="habilidades" id="habilidades">
      <div className="habilidades-inner">

        <div className="habilidades-header reveal">
          <span className="section-label">Stack</span>
          <h2 className="section-title">Skills</h2>
        </div>

        {/* Contenedor principal con Grid para forzar las 4 columnas */}
        <div 
          className="habilidades-columns reveal" 
          style={{ 
            display: "grid", 
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", 
            gap: "2rem",
            marginTop: "2rem"
          }}
        >
          {skillCategories.map((columna) => (
            <div key={columna.categoria} className="skill-column">
              
              {/* Título de cada columna */}
              <h3 style={{ 
                color: "#a1a1aa", 
                fontSize: "1.1rem", 
                marginBottom: "1.2rem", 
                borderBottom: "1px solid #333", 
                paddingBottom: "0.5rem" 
              }}>
                {columna.categoria}
              </h3>

              {/* Tarjetas apiladas dentro de su respectiva columna */}
              <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
                {columna.skills.map((skill) => (
                  <div
                    key={skill.nombre}
                    className="habilidad-card"
                    style={{
                      "--card-accent": skill.color,
                      color: "white",
                    }}
                  >
                    <span
                      className="skill-dot"
                      style={{ background: skill.color }}
                    />
                    {skill.nombre}
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}