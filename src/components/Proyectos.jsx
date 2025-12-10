import "../App.css"

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "Portafolio Web Personal",
      descripcion: "Página creada en React para presentar mi perfil profesional.",
      tecnologias: "React, HTML, CSS, JavaScript",
      link: "https://github.com/Sergio-Velandia/mi-portafolio" // tu repo o demo
    },
    {
      titulo: "Aplicación de Calendario PWA",
      descripcion: "Una aplicación de calendario progresiva (PWA) diseñada para ofrecer una experiencia fluida y accesible, permitiendo a los usuarios gestionar sus eventos y recordatorios de manera eficiente desde cualquier dispositivo, incluso sin conexión a internet.",
      tecnologias: "HTML, CSS, JavaScript",
      link: "https://github.com/Sergio-Velandia/Trabajo-PWA" // repo del proyecto
    },
    {
      titulo: "Análisis de Datos De Ventas",
      descripcion: "Exploración de dataset de ventas usando Python y librerías de análisis en este bloque se encuentra lo aprendido y ejecutado sobre el curso sobre ANALISIS EXPLORATORIO DE DATOS EN PYTHON.",
      tecnologias: "Python, Pandas, Matplotlib",
      link: "https://github.com/Sergio-Velandia/Analisis-de-Datos-De-Ventas" // notebook en GitHub
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