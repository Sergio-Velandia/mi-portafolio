import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "../App.css"
import { FaEnvelope, FaGithub, FaPhone } from "react-icons/fa"

// ─── Reemplaza estos 3 valores con los de tu cuenta emailjs.com ───
const EMAILJS_SERVICE  = "service_acbdvei"
const EMAILJS_TEMPLATE = "template_b6fhjlt"
const EMAILJS_KEY      = "0arvWc2vnvpI6rFgd"
// ──────────────────────────────────────────────────────────────────

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Correo",
    display: "sergio.velandiar.z@gmail.com",
    href: "mailto:sergio.velandiar.z@gmail.com",
  },
  {
    icon: <FaGithub />,
    label: "GitHub",
    display: "github.com/Sergio-Velandia",
    href: "https://github.com/Sergio-Velandia",
  },
  {
    icon: <FaPhone />,
    label: "Teléfono",
    display: "+57 321 938 2844",
    href: "tel:+573219382844",
  },
]

export default function Contacto() {
  const formRef = useRef()
  const [estado, setEstado] = useState("idle") // idle | sending | ok | error

  function handleSubmit(e) {
  e.preventDefault()
  setEstado("sending")

  emailjs
    .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, formRef.current, EMAILJS_KEY)
    .then(() => {
      setEstado("ok")
      setTimeout(() => {
        setEstado("idle")
        formRef.current.reset()   // limpia los campos
      }, 3500)                    // 3.5 s para que el usuario lea el mensaje
    })
    .catch(() => {
      setEstado("error")
      setTimeout(() => setEstado("idle"), 4000)  // también resetea en error
    })
}

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-inner">

        <div className="contacto-header reveal">
          <span className="section-label">Contacto</span>
          <h2 className="section-title">Hablemos</h2>
        </div>

        {/* Cards de contacto directo */}
        <div className="contacto-cards">
          {contactItems.map((item) => (
            <div key={item.label} className="card reveal">
              <div className="contacto-icon">{item.icon}</div>
              <h3>{item.label}</h3>
              <a href={item.href} target="_blank" rel="noopener noreferrer">
                {item.display}
              </a>
            </div>
          ))}
        </div>

        {/* Formulario */}
        <div className="contacto-form-wrap reveal">
          <p className="contacto-form-label">O escríbeme directamente</p>

          <form ref={formRef} onSubmit={handleSubmit} className="contacto-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from_name">Nombre</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Tu nombre"
                  required
                  disabled={estado === "sending" || estado === "ok"}
                />
              </div>
              <div className="form-group">
                <label htmlFor="reply_to">Email</label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  placeholder="tu@email.com"
                  required
                  disabled={estado === "sending" || estado === "ok"}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Cuéntame sobre tu proyecto o propuesta..."
                required
                disabled={estado === "sending" || estado === "ok"}
              />
            </div>

            <div className="form-footer">
              {estado === "ok" && (
                <p className="form-feedback form-feedback--ok">
                  ✓ Mensaje enviado — te respondo pronto.
                </p>
              )}
              {estado === "error" && (
                <p className="form-feedback form-feedback--error">
                  Algo salió mal. Escríbeme directo al correo.
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={estado === "sending" || estado === "ok"}
              >
                {estado === "sending" ? "Enviando..." : "Enviar mensaje →"}
              </button>
            </div>
          </form>

          {/* Instrucciones rápidas para configurar EmailJS */}
          <p className="emailjs-hint">
            Para activar el formulario:{" "}
            <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">
              emailjs.com
            </a>{" "}
            → crea cuenta gratis → reemplaza los 3 IDs al inicio del archivo.
          </p>
        </div>

      </div>
    </section>
  )
}