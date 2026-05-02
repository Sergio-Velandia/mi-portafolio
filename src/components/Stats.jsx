import { useEffect, useRef } from "react"
import "../App.css"

const stats = [
  {
    id: "stat-meses",
    label: "Meses de experiencia",
    valor: 6,
    sufijo: "",
    porcentaje: 60,
    desc: "Desarrollo profesional del videojuego ExplosionArt",
  },
  {
    id: "stat-proyectos",
    label: "Proyectos completados",
    valor: 5,
    sufijo: "+",
    porcentaje: 75,
    desc: "Web apps, automatizaciones, videojuego y portafolio",
  },
  {
    id: "stat-certs",
    label: "Certificaciones",
    valor: 3,
    sufijo: "",
    porcentaje: 45,
    desc: "Python · Java · MySQL — emitidas por el SENA",
  },
  {
    id: "stat-flujos",
    label: "Flujos n8n en producción",
    valor: 4,
    sufijo: "+",
    porcentaje: 55,
    desc: "Automatizaciones con APIs, webhooks y Google Drive",
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
  const sectionRef = useRef(null)
  const animated = useRef(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated.current) {
          animated.current = true
          stats.forEach((s) => {
            // counter
            const el = document.getElementById(s.id)
            if (el) animateCounter(el, s.valor, s.sufijo)
            // barra
            const bar = document.getElementById(s.id + "-bar")
            if (bar) {
              setTimeout(() => {
                bar.style.width = s.porcentaje + "%"
              }, 200)
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
          <span className="section-label">En números</span>
          <h2 className="section-title">Lo que he construido</h2>
        </div>

        <div className="stats-grid">
          {stats.map((s) => (
            <div key={s.id} className="stat-card reveal">
              <div className="stat-top">
                <span className="stat-number" id={s.id}>0{s.sufijo}</span>
                <span className="stat-label">{s.label}</span>
              </div>
              <div className="stat-bar-track">
                <div
                  className="stat-bar-fill"
                  id={s.id + "-bar"}
                  style={{ width: "0%" }}
                />
              </div>
              <p className="stat-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}