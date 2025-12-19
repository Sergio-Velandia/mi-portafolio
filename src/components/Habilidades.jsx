import "../App.css"

export default function Habilidades() {
  const skills = [
  { nombre: "JavaScript", color: "#f7df1e", texto: "#000" },
  { nombre: "React", color: "#61dafb", texto: "#000" },
  { nombre: "Vite", color: "#646cff", texto: "#000" },
  { nombre: "HTML", color: "#e34c26" },
  { nombre: "N8N", color: "#ff6a00" },
  { nombre: "Agentes IA", color: "#7e22ce" },
  { nombre: "Git", color: "#f1502f" },
  { nombre: "GitHub", color: "#333" }
];



  return (
    <section className="habilidades">
      <h2>Habilidades</h2>
      <div className="habilidades-grid">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="habilidad-card"
            style={{
              backgroundColor: skill.color,
              color: skill.texto || "white"
            }}
          >
            {skill.nombre}
          </div>
        ))}
      </div>
    </section>
  )
}
