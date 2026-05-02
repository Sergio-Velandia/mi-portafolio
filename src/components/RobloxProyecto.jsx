import "../App.css"

// Fragmentos reales del código Lua del juego
const codeSnippets = [
  {
    label: "Pathfinding NPC",
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
    label: "Sistema de fases",
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
    label: "Ritual – lógica de pasos",
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

const features = [
  "Sistema de fases progresivas con temporizadores sincronizados a todos los jugadores",
  "Pathfinding avanzado de NPCs con detección de obstáculos y salto automático",
  "Ritual multijugador con 7 pasos cooperativos y estados compartidos vía RemoteEvents",
  "Sistema de sonido dinámico: música por fase, efectos de interacción y ambientación",
  "Puertas, luces y efectos visuales controlados por servidor para evitar exploits",
  "Checklist en tiempo real visible para todos los jugadores del lobby",
]

export default function RobloxProyecto() {
  return (
    <section className="roblox-proyecto" id="roblox">
      <div className="roblox-inner">

        <div className="roblox-header reveal">
          <span className="section-label">Proyecto destacado</span>
          <h2 className="section-title">Videojuego en Roblox</h2>
        </div>

        {/* Card principal */}
        <div className="roblox-card reveal">

          {/* Cabecera de la card */}
          <div className="roblox-card-top">
            <div className="roblox-meta">
              <span className="roblox-badge">Lua · OOP Avanzado</span>
              <span className="roblox-badge roblox-badge--live">
                <span className="live-dot" /> En vivo en Roblox
              </span>
            </div>
            <h3 className="roblox-title">ExplosionArt Game</h3>
            <p className="roblox-desc">
              Videojuego de terror cooperativo desarrollado íntegramente en Lua con programación
              orientada a objetos avanzada dentro del motor Roblox Studio. Los jugadores deben
              completar un ritual de 7 pasos de forma cooperativa para desencadenar las fases
              del juego, mientras un NPC con pathfinding inteligente los persigue.
              Desarrollado durante <strong>6 meses</strong> para el universo cinematográfico del
              canal <strong>ExplosionArt</strong>.
            </p>
            <div className="roblox-links">
              <a
                href="https://www.roblox.com/es/games/74839261620650/Explosionart"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Jugar en Roblox →
              </a>
              <a
                href="https://www.youtube.com/@Explosionart"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Canal de YouTube →
              </a>
            </div>
          </div>

          {/* Grid: features + código */}
          <div className="roblox-body">

            {/* Lista de features */}
            <div className="roblox-features">
              <p className="roblox-sub-label">Sistemas implementados</p>
              <ul>
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Snippets de código */}
            <div className="roblox-code-col">
              <p className="roblox-sub-label">Código real del juego</p>
              <div className="roblox-snippets">
                {codeSnippets.map((s) => (
                  <div key={s.label} className="code-block">
                    <div className="code-header">
                      <span className="code-label">{s.label}</span>
                      <span className="code-lang">{s.lang}</span>
                    </div>
                    <pre><code>{s.code}</code></pre>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Footer */}
          <div className="roblox-footer">
            <span className="tec">Lua · Roblox Studio · OOP · PathfindingService · RemoteEvents · ServerScripts</span>
          </div>

        </div>

      </div>
    </section>
  )
}