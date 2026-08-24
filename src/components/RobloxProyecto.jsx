import "../App.css"

// Fragmentos reales del código Luau del juego
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
  " Desarrollo completo de 12 niveles jugables y funcionales llenos de tensión y aventura.",
  " Rigging de personajes y mecánicas avanzadas de animación (Animator:LoadAnimation) para movimientos fluidos.",
  " Integración profunda de físicas (Physics Pipeline) y sistemas interactivos para los jugadores.",
  " Ejecución del proyecto bajo modelo de entregas incrementales, adaptándome al feedback continuo del cliente.",
  " Sistema de fases progresivas con temporizadores sincronizados para todos los jugadores en el servidor.",
  " Pathfinding inteligente de NPCs con detección de obstáculos y salto automático para perseguir jugadores.",
  " Ritual multijugador cooperativo de 7 pasos con estados compartidos vía RemoteEvents.",
  " Gestión autónoma del tiempo, asegurando calidad, cumplimiento de plazos y control anti-exploits."
]

export default function RobloxProyecto() {
  return (
    <section className="roblox-proyecto" id="roblox">
      <div className="roblox-inner">

        <div className="roblox-header reveal">
          <span className="section-label">Experiencia Profesional </span>
          <h2 className="section-title">Videojuego Multijugador en Roblox</h2>
        </div>

        {/* Card principal */}
        <div className="roblox-card reveal">

          {/* Cabecera de la card */}
          <div className="roblox-card-top">
            <div className="roblox-meta">
              <span className="roblox-badge">Lua · OOP Avanzado · Físicas</span>
              <span className="roblox-badge roblox-badge--live">
                <span className="live-dot" /> En vivo en Roblox
              </span>
            </div>
            <h3 className="roblox-title">ExplosionArt Game (Contrato de Aprendizaje)</h3>
            <p className="roblox-desc">
              ¡De la imaginación a la pantalla!  Como Desarrollador de Videojuegos, di vida a un inmersivo universo multijugador de terror y aventura para una empresa privada. Durante <strong>6 increíbles meses</strong>, diseñé e implementé 12 niveles completamente funcionales y jugables con complejas mecánicas de físicas, rigging de personajes y animaciones en el motor de Roblox Studio. ¿El resultado? Un juego atrapante con entregas periódicas impecables que superaron las expectativas del cliente. 👾
            </p>
            <div className="roblox-links">
              <a
                href="https://www.roblox.com/es/games/74839261620650/Explosionart"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                ¡Jugar en Roblox! 🎮
              </a>
              <a
                href="https://www.youtube.com/@Explosionart."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost"
              >
                Canal de YouTube 
              </a>
            </div>
          </div>

          {/* Grid: features + código */}
          <div className="roblox-body">

            {/* Lista de features */}
            <div className="roblox-features">
              <p className="roblox-sub-label">Logros y Sistemas Implementados</p>
              <ul>
                {features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            {/* Snippets de código */}
            <div className="roblox-code-col">
              <p className="roblox-sub-label">Un vistazo al código (Lua)</p>
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
            <span className="tec">Lua · Roblox Studio · OOP · Physics Pipeline · Rigging · RemoteEvents</span>
          </div>

        </div>

      </div>
    </section>
  )
}