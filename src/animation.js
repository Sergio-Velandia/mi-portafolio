// ============================================================
// animation.js — Portfolio animation system (v2)
// ============================================================
// Cambios clave vs. la versión anterior:
//  - revealOnScroll pasó de "scroll" listener a IntersectionObserver
//    (menos trabajo por frame, no recalcula getBoundingClientRect
//    en cada scroll de toda la página).
//  - Todo respeta prefers-reduced-motion: cursor, parallax y
//    magnetic buttons no se inicializan si el usuario lo pidió.
//  - Nueva initHeroIntro(): la ÚNICA secuencia de entrada
//    orquestada del sitio (eyebrow → título → desc → cta en cascada).
//  - Nueva initScrollProgress(): barra de progreso de lectura.
//  - Nueva initTimelineDraw(): la línea del timeline se dibuja
//    cuando la sección entra en viewport, en vez de existir
//    siempre completa.
// ============================================================

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches

// ── 1. SCROLL REVEAL (IntersectionObserver) ──────────────────
export function initScrollReveal() {
  const reveals = document.querySelectorAll(".reveal")
  if (!reveals.length) return

  if (prefersReducedMotion()) {
    reveals.forEach((el) => el.classList.add("active"))
    return
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        entry.target.classList.toggle("active", entry.isIntersecting)
      })
    },
    { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
  )

  reveals.forEach((el) => observer.observe(el))
}

// ── 2. STAGGER — anima hijos con delay incremental ───────────
// Uso: initStagger(".habilidades-grid", ".habilidad-card")
export function initStagger(parentSelector, childSelector, delayStep = 60) {
  const parents = document.querySelectorAll(parentSelector)
  if (!parents.length) return

  if (prefersReducedMotion()) {
    parents.forEach((el) => {
      el.querySelectorAll(childSelector).forEach((child) =>
        child.classList.add("stagger-visible")
      )
    })
    return
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        const children = entry.target.querySelectorAll(childSelector)
        children.forEach((child, i) => {
          child.style.transitionDelay = `${i * delayStep}ms`
          child.classList.add("stagger-visible")
        })
        obs.unobserve(entry.target)
      })
    },
    { threshold: 0.1 }
  )

  parents.forEach((el) => {
    el.querySelectorAll(childSelector).forEach((child) =>
      child.classList.add("stagger-hidden")
    )
    observer.observe(el)
  })
}

// ── 3. PARALLAX suave en el hero ─────────────────────────────
// Uso: initParallax(".hero-title", 0.18)
export function initParallax(selector, speed = 0.18) {
  if (prefersReducedMotion()) return
  const el = document.querySelector(selector)
  if (!el) return

  let ticking = false
  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(() => {
        el.style.transform = `translateY(${window.scrollY * speed}px)`
        ticking = false
      })
    },
    { passive: true }
  )
}

// ── 4. NAVBAR scroll effect ───────────────────────────────────
export function initNavScroll(navSelector = "nav") {
  const nav = document.querySelector(navSelector)
  if (!nav) return

  window.addEventListener(
    "scroll",
    () => {
      nav.classList.toggle("scrolled", window.scrollY > 40)
    },
    { passive: true }
  )
}

// ── 5. ACTIVE NAV LINK por sección visible ───────────────────
export function initActiveNav() {
  const sections = document.querySelectorAll("section[id], header[id]")
  const links = document.querySelectorAll(".nav-links a")
  if (!sections.length || !links.length) return

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          links.forEach((link) => {
            link.classList.toggle(
              "active",
              link.getAttribute("href") === `#${entry.target.id}`
            )
          })
        }
      })
    },
    { threshold: 0.4 }
  )

  sections.forEach((s) => observer.observe(s))
}

// ── 6. MAGNETIC BUTTON effect ────────────────────────────────
// Uso: initMagnetic(".btn-primary")
export function initMagnetic(selector, strength = 0.3) {
  if (prefersReducedMotion()) return

  document.querySelectorAll(selector).forEach((btn) => {
    btn.addEventListener("mousemove", (e) => {
      const rect = btn.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = (e.clientX - cx) * strength
      const dy = (e.clientY - cy) * strength
      btn.style.transform = `translate(${dx}px, ${dy}px)`
    })
    btn.addEventListener("mouseleave", () => {
      btn.style.transform = "translate(0, 0)"
      btn.style.transition = "transform 0.45s cubic-bezier(0.23, 1, 0.32, 1)"
    })
    btn.addEventListener("mouseenter", () => {
      btn.style.transition = "transform 0.1s linear"
    })
  })
}

// ── 7. CURSOR personalizado (dot + ring) ─────────────────────
export function initCustomCursor() {
  if (prefersReducedMotion()) return
  if (!window.matchMedia("(pointer: fine)").matches) return

  const dot = document.createElement("div")
  dot.className = "cursor-dot"
  const ring = document.createElement("div")
  ring.className = "cursor-ring"
  document.body.appendChild(dot)
  document.body.appendChild(ring)

  let rx = 0
  let ry = 0

  document.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px"
    dot.style.top = e.clientY + "px"
  })

  function animateRing() {
    const mx = parseFloat(dot.style.left) || 0
    const my = parseFloat(dot.style.top) || 0
    rx += (mx - rx) * 0.14
    ry += (my - ry) * 0.14
    ring.style.left = rx + "px"
    ring.style.top = ry + "px"
    requestAnimationFrame(animateRing)
  }
  animateRing()

  document
    .querySelectorAll("a, button, .proyecto-card, .habilidad-card")
    .forEach((el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("cursor-hover"))
      el.addEventListener("mouseleave", () => ring.classList.remove("cursor-hover"))
    })
}

// ── 8. COUNTER animado (para métricas/stats) ─────────────────
// Uso: animateCounter("mi-id", 0, 100, 1200)
export function animateCounter(elementId, from, to, duration = 1400) {
  const el = document.getElementById(elementId)
  if (!el) return

  if (prefersReducedMotion()) {
    el.textContent = to
    return
  }

  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    const eased = 1 - Math.pow(2, -10 * progress)
    el.textContent = Math.round(from + (to - from) * eased)
    if (progress < 1) requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}

// ── 9. HERO INTRO — la única secuencia orquestada del sitio ──
// Marca en el JSX los elementos del hero con data-hero-step="1|2|3|4"
// (eyebrow, título, descripción, cta) y esta función los revela
// en cascada una sola vez al cargar, sin depender de scroll.
export function initHeroIntro(baseDelay = 120, step = 140) {
  const steps = document.querySelectorAll("[data-hero-step]")
  if (!steps.length) return

  if (prefersReducedMotion()) {
    steps.forEach((el) => el.classList.add("is-in"))
    return
  }

  steps.forEach((el) => {
    const order = Number(el.dataset.heroStep) || 1
    setTimeout(() => el.classList.add("is-in"), baseDelay + order * step)
  })
}

// ── 10. SCROLL PROGRESS — barra de progreso de lectura ───────
// Requiere un elemento <div class="scroll-progress"></div> fijo
// en el layout (por ejemplo en App.jsx, justo debajo de <nav>).
export function initScrollProgress(selector = ".scroll-progress") {
  const bar = document.querySelector(selector)
  if (!bar) return

  let ticking = false
  const update = () => {
    const scrollTop = window.scrollY
    const docHeight = document.documentElement.scrollHeight - window.innerHeight
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
    bar.style.width = `${progress}%`
    ticking = false
  }

  window.addEventListener(
    "scroll",
    () => {
      if (ticking) return
      ticking = true
      requestAnimationFrame(update)
    },
    { passive: true }
  )
  update()
}

// ── 11. TIMELINE DRAW — la línea se dibuja al entrar a vista ──
export function initTimelineDraw(selector = ".timeline") {
  const timelines = document.querySelectorAll(selector)
  if (!timelines.length) return

  if (prefersReducedMotion()) {
    timelines.forEach((el) => el.classList.add("is-drawn"))
    return
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return
        entry.target.classList.add("is-drawn")
        obs.unobserve(entry.target)
      })
    },
    { threshold: 0.3 }
  )

  timelines.forEach((el) => observer.observe(el))
}

// ── 12. INIT ALL — llama esto desde main.jsx / App.jsx ────────
export function initAllAnimations() {
  initHeroIntro()
  initScrollProgress()
  initScrollReveal()
  initNavScroll()
  initActiveNav()
  initTimelineDraw()

  initStagger(".habilidades-grid", ".habilidad-card", 55)
  initStagger(".proyectos-grid", ".proyecto-card", 80)
  initStagger(".cert-grid", ".cert-card", 70)
  initStagger(".contacto-cards", ".card", 70)
  initStagger(".stats-grid", ".stat-card", 70)
  initStagger(".stack-grid", ".stack-card", 60)

  initParallax(".hero-title", 0.18)
  initMagnetic(".btn-primary", 0.3)
  initMagnetic(".btn-ghost", 0.25)
  initCustomCursor()
}