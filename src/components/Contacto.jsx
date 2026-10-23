import { useRef, useState } from "react"
import emailjs from "@emailjs/browser"
import "../App.css"
import { FaEnvelope, FaGithub } from "react-icons/fa"
import { useLang } from "../i18n"

// ─── Credenciales públicas de EmailJS (restringir el dominio en emailjs.com) ───
const EMAILJS_SERVICE  = "service_acbdvei"
const EMAILJS_TEMPLATE = "template_b6fhjlt"
const EMAILJS_KEY      = "0arvWc2vnvpI6rFgd"
// ──────────────────────────────────────────────────────────────────

// Correos públicos del dominio propio (Cloudflare Email Routing): uno por idioma
const EMAIL = { es: "contacto@sergio-velandia.dev", en: "contact@sergio-velandia.dev" }

const contactItems = [
  {
    id: "email",
    icon: <FaEnvelope aria-hidden="true" />,
    label: { es: "Correo", en: "Email" },
    display: EMAIL,
    href: { es: `mailto:${EMAIL.es}`, en: `mailto:${EMAIL.en}` },
  },
  {
    id: "github",
    icon: <FaGithub aria-hidden="true" />,
    label: { es: "GitHub", en: "GitHub" },
    display: "github.com/Sergio-Velandia",
    href: "https://github.com/Sergio-Velandia",
  },
]

const TEXT = {
  es: {
    title: "Hablemos",
    formLabel: "O envíame un mensaje directamente",
    name: "Nombre",
    namePh: "Tu nombre…",
    email: "Correo",
    emailPh: "tu@correo.com",
    message: "Mensaje",
    messagePh: "Cuéntame sobre tu proyecto o propuesta…",
    send: "Enviar mensaje",
    sending: "Enviando…",
    ok: "Mensaje enviado. Te responderé pronto.",
    error: `No se pudo enviar el mensaje. Inténtalo de nuevo o escríbeme a ${EMAIL.es}.`,
    errName: "Escribe tu nombre.",
    errEmail: "Escribe un correo válido, por ejemplo nombre@dominio.com.",
    errMessage: "Escribe tu mensaje.",
  },
  en: {
    title: "Let's talk",
    formLabel: "Or send me a message directly",
    name: "Name",
    namePh: "Your name…",
    email: "Email",
    emailPh: "you@email.com",
    message: "Message",
    messagePh: "Tell me about your project or proposal…",
    send: "Send message",
    sending: "Sending…",
    ok: "Message sent. I'll get back to you soon.",
    error: `The message couldn't be sent. Try again or email me at ${EMAIL.en}.`,
    errName: "Enter your name.",
    errEmail: "Enter a valid email, for example name@domain.com.",
    errMessage: "Enter your message.",
  },
}

// Texto fijo o { es, en } según el idioma
const pick = (value, lang) => (typeof value === "string" ? value : value[lang])

// Valida los tres campos y devuelve { campo: claveDeError }
function validate(form) {
  const errors = {}
  if (!form.from_name.value.trim()) errors.from_name = "errName"
  if (!/^\S+@\S+\.\S+$/.test(form.reply_to.value.trim())) errors.reply_to = "errEmail"
  if (!form.message.value.trim()) errors.message = "errMessage"
  return errors
}

export default function Contacto() {
  const formRef = useRef()
  const [estado, setEstado] = useState("idle") // idle | sending | ok | error
  const [errors, setErrors] = useState({})
  const { lang } = useLang()
  const t = TEXT[lang]
  const locked = estado === "sending" || estado === "ok"

  function handleSubmit(e) {
    e.preventDefault()
    const form = formRef.current
    const found = validate(form)
    setErrors(found)

    // Lleva el foco al primer campo con error
    const first = Object.keys(found)[0]
    if (first) {
      form[first].focus()
      return
    }

    setEstado("sending")
    emailjs
      .sendForm(EMAILJS_SERVICE, EMAILJS_TEMPLATE, form, EMAILJS_KEY)
      .then(() => {
        setEstado("ok")
        setTimeout(() => {
          setEstado("idle")
          form.reset()   // limpia los campos
        }, 3500)         // 3.5 s para que el usuario lea el mensaje
      })
      .catch(() => {
        setEstado("error")  // el error se queda visible hasta el siguiente intento
      })
  }

  // Quita el error de un campo en cuanto el usuario lo corrige
  function clearError(e) {
    const { name } = e.target
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }))
  }

  const fieldError = (name) =>
    errors[name] && (
      <p className="form-error" id={`${name}-error`}>{t[errors[name]]}</p>
    )

  return (
    <section className="contacto" id="contacto">
      <div className="contacto-inner">

        <div className="contacto-header reveal">
          <h2 className="section-title">{t.title}</h2>
        </div>

        {/* Cards de contacto directo */}
        <div className="contacto-cards">
          {contactItems.map((item) => {
            const href = pick(item.href, lang)
            // Solo las webs abren pestaña nueva; un mailto: dejaría una pestaña vacía
            const external = href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {}
            return (
              <div key={item.id} className="card">
                <div className="contacto-icon">{item.icon}</div>
                <h3>{item.label[lang]}</h3>
                <a href={href} {...external} translate="no">
                  {pick(item.display, lang)}
                </a>
              </div>
            )
          })}
        </div>

        {/* Formulario */}
        <div className="contacto-form-wrap">
          <p className="contacto-form-label">{t.formLabel}</p>

          <form ref={formRef} onSubmit={handleSubmit} className="contacto-form" noValidate>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="from_name">{t.name}</label>
                <input
                  id="from_name"
                  name="from_name"
                  type="text"
                  autoComplete="name"
                  placeholder={t.namePh}
                  required
                  aria-invalid={!!errors.from_name}
                  aria-describedby={errors.from_name ? "from_name-error" : undefined}
                  onInput={clearError}
                  disabled={locked}
                />
                {fieldError("from_name")}
              </div>
              <div className="form-group">
                <label htmlFor="reply_to">{t.email}</label>
                <input
                  id="reply_to"
                  name="reply_to"
                  type="email"
                  inputMode="email"
                  autoComplete="email"
                  spellCheck={false}
                  placeholder={t.emailPh}
                  required
                  aria-invalid={!!errors.reply_to}
                  aria-describedby={errors.reply_to ? "reply_to-error" : undefined}
                  onInput={clearError}
                  disabled={locked}
                />
                {fieldError("reply_to")}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="message">{t.message}</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder={t.messagePh}
                required
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                onInput={clearError}
                disabled={locked}
              />
              {fieldError("message")}
            </div>

            <div className="form-footer">
              {/* Región anunciada por lectores de pantalla sin mover el foco */}
              <div aria-live="polite" role="status">
                {estado === "ok" && (
                  <p className="form-feedback form-feedback--ok">{t.ok}</p>
                )}
                {estado === "error" && (
                  <p className="form-feedback form-feedback--error">{t.error}</p>
                )}
              </div>

              <button type="submit" className="btn-primary" disabled={locked}>
                {estado === "sending" ? t.sending : t.send}
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  )
}
