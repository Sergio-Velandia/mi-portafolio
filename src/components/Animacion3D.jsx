import "../App.css"
import { useLang } from "../i18n"

// Segunda experiencia profesional, justo después de Roblox. Sin capturas:
// es trabajo para un cliente. Fechas y textos iguales a los del CV.
const TEXT = {
  es: {
    label: "Experiencia profesional",
    title: "Animación 3D para un canal de YouTube infantil",
    badges: ["Blender", "Python", "MCP"],
    role: "Animador 3D independiente (ene–jul 2026)",
    desc: "Rendericé personajes y escenas para los videos de un canal de YouTube de contenido infantil de una empresa privada: modelado de terreno, iluminación, movimientos de cámara y transiciones.",
    featuresLabel: "Lo que hice",
    features: [
      "Automaticé con Python el armado de escenas en Blender, sobre todo los movimientos de cámara entre escenas, que era la parte que más tiempo consumía de cada video.",
      "Conecté Blender con asistentes de IA mediante MCP para ajustar escenas con scripts en lugar de hacerlo todo a mano.",
    ],
  },
  en: {
    label: "Professional experience",
    title: "3D animation for a children's YouTube channel",
    badges: ["Blender", "Python", "MCP"],
    role: "Freelance 3D animator (Jan–Jul 2026)",
    desc: "I rendered characters and scenes for the videos of a private company's children's YouTube channel: terrain modeling, lighting, camera moves and transitions.",
    featuresLabel: "What I did",
    features: [
      "I automated scene assembly in Blender with Python, especially the camera moves between scenes, which took the most time in each video.",
      "I connected Blender to AI assistants through MCP to adjust scenes with scripts instead of doing everything by hand.",
    ],
  },
}

export default function Animacion3D() {
  const { lang } = useLang()
  const t = TEXT[lang]

  return (
    <section className="roblox-proyecto experiencia-3d" id="animacion-3d">
      <div className="roblox-inner">

        <div className="roblox-header reveal">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
        </div>

        <div className="roblox-card">
          <div className="roblox-card-top">
            <div className="roblox-meta">
              {t.badges.map((b) => (
                <span key={b} className="roblox-badge" translate="no">{b}</span>
              ))}
            </div>
            <h3 className="roblox-title">{t.role}</h3>
            <p className="roblox-desc">{t.desc}</p>
          </div>

          <div className="roblox-features">
            <p className="roblox-sub-label">{t.featuresLabel}</p>
            <ul>
              {t.features.map((f, i) => (
                <li key={i}>{f}</li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </section>
  )
}
