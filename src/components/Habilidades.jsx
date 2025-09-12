import "../App.css"

export default function Habilidades() {
  const skills = [
    { nombre: "HTML", color: "#e34c26" },
    { nombre: "CSS", color: "#264de4" },
    { nombre: "JavaScript", color: "#f7df1e", texto: "#000" },
    { nombre: "React", color: "#61dafb", texto: "#000" },
    { nombre: "PHP", color: "#8993be" },
    { nombre: "Python", color: "#3776ab" },
    { nombre: "Java", color: "#f89820" },
    { nombre: "SQL / MySQL", color: "#00618a" },
    { nombre: "GitHub", color: "#333" },
    { nombre: "WordPress", color: "#21759b" },
    { nombre: "Excel", color: "#217346" },
    { nombre: "Pandas", color: "#130654" },
    { nombre: "Matplotlib", color: "#11557c" }
  ]

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
