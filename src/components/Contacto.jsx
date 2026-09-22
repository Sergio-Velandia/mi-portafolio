import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "../App.css"
import { FaEnvelope, FaGithub, FaWhatsapp } from "react-icons/fa"

// ─── Reemplaza estos 3 valores con los de tu cuenta emailjs.com ───
const EMAILJS_SERVICE  = "service_acbdvei"
const EMAILJS_TEMPLATE = "template_b6fhjlt"
const EMAILJS_KEY      = "0arvWc2vnvpI6rFgd"
// ──────────────────────────────────────────────────────────────────

const contactItems = [
  {
    icon: <FaEnvelope />,
    label: "Email",
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
    icon: <FaWhatsapp />,
    label: "WhatsApp",
    display: (
      <span className="whatsapp-display">
        <span className="flag-icon" role="img" aria-label="Colombia"> 🇨🇴 </span>
        <span>+57 321 938 2844</span>
      </span>
    ),
    href: "https://wa.me/573219382844",
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
          <span className="section-label">Contact</span>
          <h2 className="section-title">Let&apos;s talk</h2>
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
          <p className="contacto-form-label">Or send a message directly</p>

          <form ref={formRef} onSubmit={handleSubmit} className="contacto-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from_name">Name</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  placeholder="Your name"
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
                  placeholder="your@email.com"
                  required
                  disabled={estado === "sending" || estado === "ok"}
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell me about your project or proposal..."
                required
                disabled={estado === "sending" || estado === "ok"}
              />
            </div>

            <div className="form-footer">
              {estado === "ok" && (
                <p className="form-feedback form-feedback--ok">
                  ✓ Message sent — I will reply soon.
                </p>
              )}
              {estado === "error" && (
                <p className="form-feedback form-feedback--error">
                  Something went wrong. Please write directly to my email.
                </p>
              )}

              <button
                type="submit"
                className="btn-primary"
                disabled={estado === "sending" || estado === "ok"}
              >
                {estado === "sending" ? "Sending..." : "Send message →"}
              </button>
            </div>
          </form>

          {/* Instrucciones rápidas para configurar EmailJS */}
          <p className="emailjs-hint">
            To configure EmailJS:{" "}
            <a href="https://www.emailjs.com/" target="_blank" rel="noopener noreferrer">
              emailjs.com
            </a>{" "}
            → create free account → replace the 3 IDs at the top of the file.
          </p>
        </div>

      </div>
    </section>
  )
}