import "../App.css"

const proyectos = [
  {
    num: "001",
    titulo: "YuGiOhApi",
    descripcion:
      "Aplicación web interactiva para explorar una vasta base de datos de cartas Yu-Gi-Oh! consumiendo una API externa, con funcionalidades dinámicas e interfaz personalizada.",
    tecnologias: "React · CSS · JavaScript · API externa",
    link: "https://github.com/Sergio-Velandia/YuGiOhApi",
  },
  {
    num: "002",
    titulo: "DigimonAPI + Firebase",
    descripcion:
      "App multiplataforma para gestionar una colección de Digimons con autenticación segura. Arquitectura basada en Capacitor, lista para compilar como APK en Android Studio.",
    tecnologias: "HTML · JS · Node · Capacitor · Firebase · API externa",
    link: "https://github.com/Sergio-Velandia/DigimonAPI-Firebase",
  },
  {
    num: "003",
    titulo: "Mi Portafolio Web",
    descripcion:
      "Portafolio personal desarrollado con React y Vite. Muestra proyectos, habilidades, certificaciones y automatizaciones de forma moderna y optimizada.",
    tecnologias: "React · Vite · CSS · JavaScript",
    link: "https://github.com/Sergio-Velandia/mi-portafolio",
  },
]

export default function Proyectos() {
  return (
    <section className="proyectos" id="proyectos">
      <div className="proyectos-inner">

        <div className="proyectos-header reveal">
          <span className="section-label">Work</span>
          <h2 className="section-title">Projects</h2>
        </div>

        <div className="proyectos-grid">
          {proyectos.map((p) => (
            <article key={p.num} className="proyecto-card reveal">
              <p className="proyecto-num">{p.num}</p>
              <h3>{p.titulo}</h3>
              <p>{p.descripcion}</p>
              <div className="proyecto-footer">
                <span className="tec">{p.tecnologias}</span>
                <a
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-proyecto"
                >
                  GitHub →
                </a>
              </div>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}