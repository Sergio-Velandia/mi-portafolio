import "../App.css"

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Portafolio Web Personal",
      descripcion: "Página creada en React para presentar mi perfil profesional.",
      tecnologias: "React, HTML, CSS, JavaScript",
      link: "https://github.com/Sergio-Velandia" // tu repo o demo
    },
    {
      titulo: "Sistema de Gestión de Inventario",
      descripcion: "Aplicación en Java con conexión a MySQL para administrar productos.",
      tecnologias: "Java, MySQL",
      link: "https://github.com/Sergio-Velandia" // repo del proyecto
    },
    {
      titulo: "Análisis de Datos Académicos",
      descripcion: "Exploración de dataset académico usando Python y librerías de análisis.",
      tecnologias: "Python, Pandas, Matplotlib",
      link: "https://github.com/Sergio-Velandia" // notebook en GitHub
    }
  ]

  return (
    <section className="proyectos">
      <h2>Proyectos</h2>
      <div className="proyectos-grid">
        {proyectos.map((proyecto, index) => (
          <div key={index} className="proyecto-card">
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <span className="tec">{proyecto.tecnologias}</span>
            <br />
            <a
              href={proyecto.link}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-proyecto"
            >
              Ver en GitHub
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
