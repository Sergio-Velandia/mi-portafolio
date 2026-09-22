// ============================================================
// skillsFloat.js — Lógica exclusiva de la sección Habilidades
// ============================================================
// Cambios v3:
//  - Bug de drift corregido: el parallax ahora se calcula POR
//    ICONO, no por contenedor. Se captura baseY (offsetTop del
//    icono relativo a la sección) UNA sola vez al montar. En cada
//    frame: posY = baseY + (scrollRelativo * velocidad). Se aplica
//    con translate3d reescribiendo el valor COMPLETO cada vez —
//    nunca sumando sobre el transform anterior.
//  - Tooltip por icono flotante: se crea un <div class="fi-tooltip">
//    por icono, posicionado con CSS (position:absolute en el wrapper),
//    se muestra/oculta vía clase .fi-tooltip--show en mouseenter/leave
//    del WRAPPER del icono (no del svg, que tiene pointer-events:none).
//  - Tamaños de iconos variados: 42–56px definidos en FLOAT_SIZES.
// ============================================================

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Velocidades de parallax por icono dentro de cada columna (índice 0..3)
// Cada columna tiene su propia velocidad base, y cada icono dentro
// de la columna comparte la velocidad de esa columna.
const COLUMN_SPEEDS = [0.05, 0.08, 0.11, 0.14]

// Tamaños variados por posición (índice 0..3) para dar profundidad
export const FLOAT_SIZES = [56, 46, 52, 42]

// Mapa de colores de marca por tech key — fuente única de verdad.
// Se inyecta como CSS custom property --tech-color por JS.
export const TECH_COLORS = {
  javascript: '#f7df1e',
  react:      '#61dafb',
  vite:       '#646cff',
  htmlcss:    '#e34c26',
  nodejs:     '#3c873a',
  supabase:   '#3ECF8E',
  postgresql: '#336791',
  mongodb:    '#47A248',
  n8n:        '#ff6a00',
  agentesia:  '#7e22ce',
  apisrest:   '#00a2ff',
  postman:    '#FF6C37',
  git:        '#f1502f',
  github:     '#e6e6e6',
  docker:     '#2496ED',
  lua:        '#00007C',
}

// Nombres de display para el tooltip
const TECH_NAMES = {
  javascript: 'JavaScript',
  react:      'React',
  vite:       'Vite',
  htmlcss:    'HTML & CSS',
  nodejs:     'Node.js',
  supabase:   'Supabase',
  postgresql: 'PostgreSQL',
  mongodb:    'MongoDB',
  n8n:        'n8n',
  agentesia:  'Agentes IA',
  apisrest:   'APIs REST',
  postman:    'Postman',
  git:        'Git',
  github:     'GitHub',
  docker:     'Docker',
  lua:        'Lua',
}

// ── 1. PARALLAX POR ICONO (Bug fix: posición absoluta) ────────
// Captura baseY de cada icono UNA vez, luego en cada frame calcula:
//   translateY = scrollRelativo * velocidadDeColumna
// y reescribe el transform COMPLETO (nunca acumula sobre anterior).
export function initSkillsParallax() {
  if (reduced()) return

  const section = document.querySelector('.habilidades')
  if (!section) return

  // Recopilar todos los iconos flotantes con su velocidad de columna
  const iconEntries = []
  const bgColumns = section.querySelectorAll('.habilidades-bg-column')

  bgColumns.forEach((bgCol, colIdx) => {
    const speed = COLUMN_SPEEDS[colIdx] ?? 0.05
    const icons = bgCol.querySelectorAll('.skills-float-icon')
    icons.forEach((icon) => {
      // baseX y baseY: posición del icono relativa a la sección,
      // calculada UNA sola vez antes de cualquier transform.
      // Como los iconos tienen top/left en % sobre el bgCol que
      // está position:absolute inset:0, sus coordenadas base son
      // las que ya tiene por CSS — las leemos en coordenadas de
      // viewport y las convertimos a relativas a la sección.
      const sectionRect = section.getBoundingClientRect()
      const iconRect = icon.getBoundingClientRect()
      const baseX = iconRect.left - sectionRect.left + window.scrollX
      const baseY = iconRect.top  - sectionRect.top  + window.scrollY

      iconEntries.push({ el: icon, baseX, baseY, speed })
    })
  })

  if (!iconEntries.length) return

  let ticking = false
  let raf = null

  const update = () => {
    const rect = section.getBoundingClientRect()

    // Detener cálculo cuando la sección no está en viewport
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
      ticking = false
      return
    }

    // scrollY relativo al punto de entrada de la sección en viewport
    const relY = window.scrollY - section.offsetTop

    iconEntries.forEach(({ el, baseX, baseY, speed }) => {
      // Posición nueva = base + desplazamiento de parallax
      // Reescribe el transform COMPLETO — nunca += sobre valor anterior
      const dy = relY * speed
      el.style.transform = `translate3d(${baseX}px, ${baseY + dy}px, 0)`
    })

    ticking = false
  }

  // Posicionar iconos con transform desde el inicio
  // (quitamos top/left de la lógica visual — el transform lo maneja todo)
  // Ejecutar un primer frame inmediatamente
  const initialRelY = window.scrollY - section.offsetTop
  iconEntries.forEach(({ el, baseX, baseY, speed }) => {
    el.style.top  = '0'
    el.style.left = '0'
    el.style.transform = `translate3d(${baseX}px, ${baseY + initialRelY * speed}px, 0)`
  })

  const onScroll = () => {
    if (ticking) return
    ticking = true
    raf = requestAnimationFrame(update)
  }

  window.addEventListener('scroll', onScroll, { passive: true })

  return () => {
    window.removeEventListener('scroll', onScroll)
    if (raf) cancelAnimationFrame(raf)
  }
}

// ── 2. HOVER CARD → ICONO FLOTANTE + TOOLTIP ─────────────────
// Para el tooltip: cada wrapper .skills-float-icon ya tiene
// position:relative. El tooltip es un hijo absoluto creado por JS
// con pointer-events:none para no robar eventos a las cards.
export function initSkillsHoverLink() {
  // Crear tooltips en cada icono flotante
  const floatIcons = document.querySelectorAll('.skills-float-icon[data-tech]')
  floatIcons.forEach((icon) => {
    const tech = icon.dataset.tech
    const brandColor = TECH_COLORS[tech] ?? '#fff'
    const name = TECH_NAMES[tech] ?? tech

    // Crear el elemento tooltip
    const tip = document.createElement('div')
    tip.className = 'fi-tooltip'
    tip.textContent = name
    tip.style.setProperty('--tip-color', brandColor)
    tip.setAttribute('aria-hidden', 'true')
    icon.appendChild(tip)

    // El wrapper del icono puede recibir pointer-events (no tiene none)
    // para detectar hover. El SVG interno sí tiene pointer-events:none.
    icon.style.pointerEvents = 'auto'

    icon.addEventListener('mouseenter', () => {
      icon.style.setProperty('--tech-color', brandColor)
      icon.classList.add('is-active')
      tip.classList.add('fi-tooltip--show')
    })
    icon.addEventListener('mouseleave', () => {
      icon.classList.remove('is-active')
      tip.classList.remove('fi-tooltip--show')
    })
  })

  // Vínculo card → icono flotante
  const cards = document.querySelectorAll('.habilidad-card[data-tech]')
  cards.forEach((card) => {
    const tech = card.dataset.tech
    const floatIcon = document.querySelector(`.skills-float-icon[data-tech="${tech}"]`)
    const brandColor = TECH_COLORS[tech] ?? 'var(--text-secondary)'

    card.addEventListener('mouseenter', () => {
      if (floatIcon) {
        floatIcon.style.setProperty('--tech-color', brandColor)
        floatIcon.classList.add('is-active')
        const tip = floatIcon.querySelector('.fi-tooltip')
        if (tip) tip.classList.add('fi-tooltip--show')
      }
      card.style.setProperty('--tech-color', brandColor)
      card.classList.add('habilidad-card--active')
    })

    card.addEventListener('mouseleave', () => {
      if (floatIcon) {
        floatIcon.classList.remove('is-active')
        const tip = floatIcon.querySelector('.fi-tooltip')
        if (tip) tip.classList.remove('fi-tooltip--show')
      }
      card.classList.remove('habilidad-card--active')
    })
  })
}

// ── 3. REVEAL DE CARDS + PULSO DEL DOT ───────────────────────
export function initSkillsDotPulse() {
  const cards = document.querySelectorAll('.habilidades .habilidad-card')
  if (!cards.length) return

  if (reduced()) {
    cards.forEach((card) => {
      card.classList.add('card-blur-in', 'stagger-visible', 'card-blur-visible')
      const dot = card.querySelector('.skill-dot')
      if (dot) dot.classList.add('dot-pulsed')
    })
    return
  }

  // Calculate index for each card within its column for stagger
  const columns = document.querySelectorAll('.habilidades .skill-column')
  const cardDelayMap = new Map()
  columns.forEach((col) => {
    col.querySelectorAll('.habilidad-card').forEach((card, idx) => {
      cardDelayMap.set(card, idx * 60) // 60ms delay between cards in same column
    })
  })

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const card = entry.target

        const delay = cardDelayMap.get(card) ?? 0
        card.classList.add('card-blur-in')

        setTimeout(() => {
          // Manually add stagger-visible since animation.js misses it
          card.classList.add('stagger-visible', 'card-blur-visible')

          const dot = card.querySelector('.skill-dot')
          if (dot) {
            dot.classList.add('dot-pulse')
            dot.addEventListener('animationend', () => {
              dot.classList.remove('dot-pulse')
              dot.classList.add('dot-pulsed')
            }, { once: true })
          }
        }, delay)

        obs.unobserve(card)
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
  )

  cards.forEach((card) => observer.observe(card))
}

// ── INIT ALL SKILLS ────────────────────────────────────────────
export function initSkillsFloat() {
  // El parallax debe inicializarse DESPUÉS de que el DOM esté pintado
  // para que getBoundingClientRect devuelva valores reales.
  // Usamos requestAnimationFrame para garantizarlo.
  let cleanupFn = null
  requestAnimationFrame(() => {
    cleanupFn = initSkillsParallax()
  })

  initSkillsHoverLink()
  initSkillsDotPulse()

  return () => {
    if (typeof cleanupFn === 'function') cleanupFn()
  }
}
