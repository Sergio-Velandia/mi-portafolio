import "../App.css"
import { useLang } from "../i18n"

// Fragmentos reales del código Luau del juego
const codeSnippets = [
  {
    id: "pathfinding",
    label: { es: "Pathfinding de NPC", en: "NPC pathfinding" },
    lang: "Lua",
    code: `function Path:Run(target)
  self._path:ComputeAsync(
    self._agent.PrimaryPart.Position,
    target.Position
  )
  self._waypoints = self._path:GetWaypoints()
  self._humanoid:MoveTo(
    self._waypoints[2].Position
  )
end`,
  },
  {
    id: "fases",
    label: { es: "Sistema de fases", en: "Phase system" },
    lang: "Lua",
    code: `local function iniciarFase1()
  fase1Activa = true
  for i = fase1Duracion, 0, -1 do
    if not fase1Activa then break end
    local mins = math.floor(i / 60)
    local segs = i % 60
    actualizarContador(i)
    task.wait(1)
  end
  fase2Activa.Value = true
end`,
  },
  {
    id: "ritual",
    label: { es: "Ritual: lógica de pasos", en: "Ritual: step logic" },
    lang: "Lua",
    code: `if pasoActual == 1 then
  pasoActual = 2
  setVisual(pelucheMesa, false)
  setVisual(pelucheAbierto, true)
elseif pasoActual == 6 then
  tieneCuchillo:Destroy()
  setVisual(cuchilloPeluche, true)
  ritualHK.Value = true  -- activa el boss
end`,
  },
]

const TEXT = {
  es: {
    label: "Experiencia profesional",
    title: "Videojuego multijugador en Roblox",
    badges: ["Lua", "OOP avanzado", "Físicas"],
    live: "En vivo en Roblox",
    gameTitle: "ExplosionArt Game (contrato de aprendizaje)",
    desc: [
      "Como desarrollador de videojuegos, construí un universo multijugador de terror y aventura para una empresa privada. Durante ",
      "6 meses",
      " diseñé e implementé 12 niveles jugables con mecánicas de físicas, rigging de personajes y animaciones en Roblox Studio, con entregas periódicas que cumplieron las expectativas del cliente.",
    ],
    play: "Jugar en Roblox",
    youtube: "Ver canal de YouTube",
    featuresLabel: "Logros y sistemas implementados",
    codeLabel: "Un vistazo al código (Lua)",
    features: [
      "Desarrollo completo de 12 niveles jugables llenos de tensión y aventura.",
      "Rigging de personajes y animación avanzada (Animator:LoadAnimation) para movimientos fluidos.",
      "Integración de físicas (Physics Pipeline) y sistemas interactivos para los jugadores.",
      "Entregas incrementales, adaptándome al feedback continuo del cliente.",
      "Sistema de fases progresivas con temporizadores sincronizados para todos los jugadores del servidor.",
      "Pathfinding de NPCs con detección de obstáculos y salto automático para perseguir jugadores.",
      "Ritual multijugador cooperativo de 7 pasos con estados compartidos vía RemoteEvents.",
      "Gestión autónoma del tiempo, cumplimiento de plazos y control anti-exploits.",
    ],
  },
  en: {
    label: "Professional experience",
    title: "Multiplayer game in Roblox",
    badges: ["Lua", "Advanced OOP", "Physics"],
    live: "Live on Roblox",
    gameTitle: "ExplosionArt Game (apprenticeship contract)",
    desc: [
      "As a game developer, I built a multiplayer horror and adventure world for a private company. Over ",
      "6 months",
      " I designed and implemented 12 playable levels with physics mechanics, character rigging and animations in Roblox Studio, shipping regular releases that met the client's expectations.",
    ],
    play: "Play on Roblox",
    youtube: "Watch the YouTube channel",
    featuresLabel: "Achievements and systems built",
    codeLabel: "A look at the code (Lua)",
    features: [
      "Full development of 12 playable levels packed with tension and adventure.",
      "Character rigging and advanced animation (Animator:LoadAnimation) for smooth movement.",
      "Physics integration (Physics Pipeline) and interactive systems for players.",
      "Incremental deliveries, adapting to continuous client feedback.",
      "Progressive phase system with timers synchronized for every player on the server.",
      "NPC pathfinding with obstacle detection and automatic jumping to chase players.",
      "Cooperative 7-step multiplayer ritual with shared state via RemoteEvents.",
      "Self-managed schedule, on-time delivery and anti-exploit safeguards.",
    ],
  },
}

const STACK = ["Lua", "Roblox Studio", "OOP", "Physics Pipeline", "Rigging", "RemoteEvents"]

export default function RobloxProyecto() {
  const { lang } = useLang()
  const t = TEXT[lang]

  return (
    <section className="roblox-proyecto" id="roblox">
      <div className="roblox-inner">

        <div className="roblox-header reveal">
          <span className="section-label">{t.label}</span>
          <h2 className="section-title">{t.title}</h2>
        </div>

        {/* Card principal */}
        <div className="roblox-card">

          {/* Cabecera de la card */}
          <div className="roblox-card-top">
            <div className="roblox-meta">
              {t.badges.map((b) => (
                <span key={b} className="roblox-badge">{b}</span>
              ))}
              <span className="roblox-badge roblox-badge--live">
                <span className="live-dot" aria-hidden="true" /> {t.live}
              </span>
            </div>
            <h3 className="roblox-title">{t.gameTitle}</h3>
            <p className="roblox-desc">
              {t.desc[0]}<strong>{t.desc[1]}</strong>{t.desc[2]}
            </p>
            <div className="roblox-links">
              <a
                href="https://www.roblox.com/es/games/74839261620650/Explosionart"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                {t.play}
              </a>
              <a
                href="https://www.youtube.com/@Explosionart."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                {t.youtube}
              </a>
            </div>
          </div>

          {/* Grid: features + código */}
          <div className="roblox-body">

            {/* Lista de features */}
            <div className="roblox-features">
              <p className="roblox-sub-label">{t.featuresLabel}</p>
              <ul>
                {t.features.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Snippets de código */}
            <div className="roblox-code-col">
              <p className="roblox-sub-label">{t.codeLabel}</p>
              <div className="roblox-snippets">
                {codeSnippets.map((s) => (
                  <div key={s.id} className="code-block">
                    <div className="code-header">
                      <span className="code-label">{s.label[lang]}</span>
                      <span className="code-lang">{s.lang}</span>
                    </div>
                    <pre translate="no"><code>{s.code}</code></pre>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="roblox-footer">
            <ul className="chips">
              {STACK.map((s) => <li key={s}>{s}</li>)}
            </ul>
          </div>

        </div>

      </div>
    </section>
  )
}
