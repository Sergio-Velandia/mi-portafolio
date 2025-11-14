import "../App.css"
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contacto() {
  return (
    <section className="contacto">
      <h2>Contacto</h2>
      <p>Puedes encontrarme en estas plataformas:</p>

      <div className="contacto-cards">
        <div className="card">
          <FaEnvelope className="icono" />
          <h3>Correo</h3>
          <a href="mailto:sergio.velandiar.z@gmail.com">
            sergio.velandiar.z@gmail.com
          </a>
        </div>

        <div className="card">
          <FaGithub className="icono" />
          <h3>GitHub</h3>
          <a
            href="https://github.com/Sergio-Velandia"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/Sergio-Velandia
          </a>
        </div>

        <div className="card">
          <FaLinkedin className="icono" />
          <h3>LinkedIn</h3>
          <a>
            Sergio Andres Ramirez Velandia
          </a>
        </div>
      </div>
    </section>
  )
}
