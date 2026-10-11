import { useEffect, useRef } from "react"
import "../App.css"
import { useLang } from "../i18n"

const TITLE = { es: "Mi trayectoria en números", en: "My track record in numbers" }

const stats = [
  {
    id: "stat-meses",
    label: { es: "Meses de experiencia", en: "Months of experience" },
    valor: 6,
    sufijo: "",
    porcentaje: 100,
    desc: { es: "Desarrollador de videojuegos en Roblox Studio, con entregas periódicas y feedback del cliente.", en: "Game developer in Roblox Studio, with regular releases and client feedback." },
  },
  {
    id: "stat-proyectos",
    label: { es: "Proyectos completados", en: "Projects completed" },
    valor: 5,
    sufijo: "+",
    porcentaje: 85,
    desc: { es: "Aplicaciones web, automatizaciones, un videojuego y este portafolio.", en: "Web apps, automations, a video game and this portfolio." },
  },
  {
    id: "stat-certs",
    label: { es: "Certificaciones", en: "Certifications" },
    valor: 10,
    sufijo: "",
    porcentaje: 100,
    desc: { es: "n8n, JavaScript, bases de datos, IA, React y Node.js.", en: "n8n, JavaScript, databases, AI, React and Node.js." },
  },
  {
    id: "stat-flujs",
    label: { es: "Habilidades", en: "Skills" },
    valor: 12,
    sufijo: "+",
    porcentaje: 100,
    desc: { es: "Habilidades técnicas y herramientas que domino, como React, Node.js e IA.", en: "Technical skills and tools I master, such as React, Node.js and AI." },
  },
]

function animateCounter(el, to, suffix) {
  let start = null
  const duration = 1400
  function step(ts) {
    if (!start) start = ts
    const progress = Math.min((ts - start) / duration, 1)
    const eased = 1 - Math.pow(2, -10 * progress)
    el.textContent = Math.round(to * eased) + suffix
    if (progress < 1) requestAnimationFrame(step)
  }
  requestAnimationFrame(step)
}

export default function Stats() {
  const { lang } = useLang()
  const sectionRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
          stats.forEach((s) => {
            // counter
            const el = document.getElementById(s.id)
            if (el) {
              if (reduced) el.textContent = s.valor + s.sufijo
              else animateCounter(el, s.valor, s.sufijo)
            }
            // barra (scaleX: no recalcula layout mientras se llena)
            const bar = document.getElementById(s.id + "-bar")
            if (bar) {
              setTimeout(() => {
                bar.style.transform = `scaleX(${s.porcentaje / 100})`
              }, reduced ? 0 : 200)
            }
          })
        }
      },
      { threshold: 0.3 }
    )
    if (sectionRef.current) observer.observe(sectionRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="stats-section" id="stats" ref={sectionRef}>
      <div className="stats-inner">
        <div className="stats-header reveal">
          <h2 className="section-title">{TITLE[lang]}</h2>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.id} className="stat-card">
              <div className="stat-top">
                <span className="stat-number" id={s.id}>0{s.sufijo}</span>
                <span className="stat-label">{s.label[lang]}</span>
              </div>
              <div className="stat-bar-track">
                <div className="stat-bar-fill" id={s.id + "-bar"} />
              </div>
              <p className="stat-desc">{s.desc[lang]}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}