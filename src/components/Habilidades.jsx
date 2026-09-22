import { useEffect } from "react"
import {
  FaJs, FaReact, FaHtml5, FaNodeJs, FaGithub, FaDocker
} from "react-icons/fa"
import {
  SiVite, SiSupabase, SiPostgresql, SiMongodb,
  SiN8N, SiPostman, SiGit, SiLua
} from "react-icons/si"
import { TbApi, TbRobot } from "react-icons/tb"
import { initSkillsFloat, FLOAT_SIZES } from "../skillsFloat"
import "../App.css"

// ── Mapa: tech key → componente de icono ──────────────────────
// Todos los imports verificados: SiN8n (n minúscula), SiLua real,
// TbRobot para Agentes IA (distinto a TbApi para APIs REST).
const TECH_ICONS = {
  javascript: FaJs,
  react:      FaReact,
  vite:       SiVite,
  htmlcss:    FaHtml5,
  nodejs:     FaNodeJs,
  supabase:   SiSupabase,
  postgresql: SiPostgresql,
  mongodb:    SiMongodb,
  n8n:        SiN8N,
  agentesia:  TbRobot,   // Bot/IA — diferente a apisrest
  apisrest:   TbApi,
  postman:    SiPostman,
  git:        SiGit,
  github:     FaGithub,
  docker:     FaDocker,
  lua:        SiLua,     // Icono real de Lua
}

// ── Datos de skills ────────────────────────────────────────────
const skillCategories = [
  {
    categoria: "Frontend",
    skills: [
      { nombre: "JavaScript", color: "#f7df1e", tech: "javascript" },
      { nombre: "React",      color: "#61dafb", tech: "react"      },
      { nombre: "Vite",       color: "#646cff", tech: "vite"       },
      { nombre: "HTML & CSS", color: "#e34c26", tech: "htmlcss"    },
    ],
    floatIcons: ["javascript", "react", "vite", "htmlcss"],
  },
  {
    categoria: "Backend & BD",
    skills: [
      { nombre: "Node.js",    color: "#3c873a", tech: "nodejs"     },
      { nombre: "Supabase",   color: "#3ECF8E", tech: "supabase"   },
      { nombre: "PostgreSQL", color: "#336791", tech: "postgresql" },
      { nombre: "MongoDB",    color: "#47A248", tech: "mongodb"    },
    ],
    floatIcons: ["nodejs", "supabase", "postgresql", "mongodb"],
  },
  {
    categoria: "IA & APIs",
    skills: [
      { nombre: "n8n",        color: "#ff6a00", tech: "n8n"        },
      { nombre: "Agentes IA", color: "#7e22ce", tech: "agentesia"  },
      { nombre: "APIs REST",  color: "#00a2ff", tech: "apisrest"   },
      { nombre: "Postman",    color: "#FF6C37", tech: "postman"    },
    ],
    floatIcons: ["n8n", "agentesia", "apisrest", "postman"],
  },
  {
    categoria: "Herramientas",
    skills: [
      { nombre: "Git",    color: "#f1502f", tech: "git"    },
      { nombre: "GitHub", color: "#e6e6e6", tech: "github" },
      { nombre: "Docker", color: "#2496ED", tech: "docker" },
      { nombre: "Lua",    color: "#00007C", tech: "lua"    },
    ],
    floatIcons: ["git", "github", "docker", "lua"],
  },
]

// Posiciones de los iconos flotantes dentro de cada columna (% relativo)
// size viene de FLOAT_SIZES exportado en skillsFloat.js
const FLOAT_POSITIONS = [
  { top: "10%", left: "68%", opacity: 0.12 },
  { top: "36%", left: "8%",  opacity: 0.10 },
  { top: "63%", left: "52%", opacity: 0.13 },
  { top: "80%", left: "20%", opacity: 0.10 },
]

export default function Habilidades() {
  useEffect(() => {
    const cleanup = initSkillsFloat()
    return () => {
      if (typeof cleanup === "function") cleanup()
    }
  }, [])

  return (
    <section className="habilidades" id="habilidades">
      <div className="habilidades-inner">

        <div className="habilidades-header reveal">
          <span className="section-label">Stack</span>
          <h2 className="section-title">Skills</h2>
        </div>

        {/* Grid de 4 columnas */}
        <div
          className="habilidades-columns reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
            marginTop: "2rem",
          }}
        >
          {skillCategories.map((columna) => (
            <div
              key={columna.categoria}
              className="skill-column"
              style={{ position: "relative", overflow: "visible" }}
            >
              {/* ── Capa de iconos flotantes de fondo ── */}
              <div
                className="habilidades-bg-column"
                aria-hidden="true"
                style={{
                  position: "absolute",
                  inset: 0,
                  pointerEvents: "none",
                  zIndex: 0,
                  willChange: "transform",
                  overflow: "hidden",
                }}
              >
                {columna.floatIcons.map((tech, i) => {
                  const IconComp = TECH_ICONS[tech]
                  if (!IconComp) return null
                  const pos = FLOAT_POSITIONS[i] ?? FLOAT_POSITIONS[0]
                  const size = FLOAT_SIZES[i] ?? 48
                  return (
                    <div
                      key={tech}
                      className="skills-float-icon"
                      data-tech={tech}
                      style={{
                        position: "absolute",
                        top: pos.top,
                        left: pos.left,
                        opacity: pos.opacity,
                        color: "var(--text-secondary)",
                        // position:relative necesario para el tooltip hijo absoluto
                        // (se combina con el absolute del contenedor vía inset:0)
                        transition:
                          "opacity 0.25s ease, color 0.25s ease",
                        transformOrigin: "top left",
                      }}
                    >
                      {/* El svg no debe bloquear pointer-events del wrapper */}
                      <IconComp size={size} style={{ pointerEvents: "none", display: "block" }} />
                    </div>
                  )
                })}
              </div>

              {/* ── Título de la columna ── */}
              <h3
                style={{
                  position: "relative",
                  zIndex: 1,
                  color: "#a1a1aa",
                  fontSize: "1.1rem",
                  marginBottom: "1.2rem",
                  borderBottom: "1px solid #333",
                  paddingBottom: "0.5rem",
                }}
              >
                {columna.categoria}
              </h3>

              {/* ── Cards apiladas ── */}
              <div
                style={{
                  position: "relative",
                  zIndex: 1,
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                {columna.skills.map((skill) => (
                  <div
                    key={skill.nombre}
                    className="habilidad-card stagger-hidden"
                    data-tech={skill.tech}
                    style={{ "--card-accent": skill.color }}
                  >
                    {/* Icono de la tecnología + dot de color */}
                    <span className="skill-icon-wrap" aria-hidden="true">
                      {(() => {
                        const I = TECH_ICONS[skill.tech]
                        return I ? (
                          <I
                            className="skill-tech-icon"
                            size={16}
                            style={{ color: "var(--text-muted)" }}
                          />
                        ) : (
                          <span
                            className="skill-dot"
                            style={{ background: skill.color }}
                          />
                        )
                      })()}
                    </span>
                    <span className="skill-name">{skill.nombre}</span>
                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  )
}