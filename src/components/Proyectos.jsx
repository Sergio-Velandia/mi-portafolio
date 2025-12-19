import "../App.css"

export default function Proyectos() {
  const proyectos = [
    {
      titulo: "YuGiOhApi",
      descripcion: "YuGiOhAPI es una aplicación web interactiva diseñada para los entusiastas del juego de cartas Yu-Gi-Oh! La plataforma permite explorar una vasta base de datos de cartas consumiendo una API externa, ofreciendo funcionalidades dinámicas y una interfaz personalizada.",
      tecnologias: "React, HTML, CSS, JavaScript, Api externa",
      link: "https://github.com/Sergio-Velandia/YuGiOhApi" 
    },
    {
      titulo: "DigimonAPI-Firebase",
      descripcion: "DigimonAPI es una aplicación multiplataforma que permite gestionar una colección de Digimons con autenticación segura. Gracias a su arquitectura basada en Capacitor, el proyecto está listo para ser compilado en Android Studio y generado como una APK.",
      tecnologias: "HTML, CSS, JavaScript, Node, Capacitor, Api externa, Firebase",
      link: "https://github.com/Sergio-Velandia/DigimonAPI-Firebase" 
    },
    {
      titulo: " Mi Portafolio Desarrollador Web",
      descripcion: "Este es mi portafolio personal desarrollado con React, Vite, HTML, CSS y JavaScript. Aquí presento mis proyectos, habilidades, certificaciones y formas de contacto de una manera moderna y optimizada.",
      tecnologias: "React, HTML, CSS, JavaScript",
      link: "https://github.com/Sergio-Velandia/mi-portafolio" 
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