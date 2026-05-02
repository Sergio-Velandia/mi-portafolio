// ============================================================
// animation.js — Portfolio animation system
// ============================================================

// ── 1. SCROLL REVEAL con stagger para grupos de cards ────────
export function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal")
  const windowHeight = window.innerHeight

  reveals.forEach((el) => {
    const top = el.getBoundingClientRect().top
    if (top < windowHeight - 90) {
      el.classList.add("active")
    } else {
      el.classList.remove("active")
    }
  })
}

export function initScrollReveal() {
  window.addEventListener("scroll", revealOnScroll, { passive: true })
  revealOnScroll()
}

// ── 2. STAGGER — anima hijos con delay incremental ───────────
// Uso: initStagger(".habilidades-grid", ".habilidad-card")
export function initStagger(parentSelector, childSelector, delayStep = 60) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const children = entry.target.querySelectorAll(childSelector)
          children.forEach((child, i) => {
            child.style.transitionDelay = `${i * delayStep}ms`
            child.classList.add("stagger-visible")
          })
          observer.unobserve(entry.target)
        }
      })
    },
    { threshold: 0.1 }
  )

  document.querySelectorAll(parentSelector).forEach((el) => {
    const children = el.querySelectorAll(childSelector)
    children.forEach((child) => child.classList.add("stagger-hidden"))
    observer.observe(el)
  })
}

// ── 3. PARALLAX suave en el hero ─────────────────────────────
// Uso: initParallax(".hero-title", 0.3)
export function initParallax(selector, speed = 0.25) {
  const el = document.querySelector(selector)
  if (!el) return

  window.addEventListener(
    "scroll",
    () => {
      const y = window.scrollY
      el.style.transform = `translateY(${y * speed}px)`
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
      if (window.scrollY > 40) {
        nav.classList.add("scrolled")
      } else {
        nav.classList.remove("scrolled")
      }
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
export function initMagnetic(selector, strength = 0.35) {
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
  const dot = document.createElement("div")
  dot.className = "cursor-dot"
  const ring = document.createElement("div")
  ring.className = "cursor-ring"
  document.body.appendChild(dot)
  document.body.appendChild(ring)

  let rx = 0,
    ry = 0

  document.addEventListener("mousemove", (e) => {
    dot.style.left = e.clientX + "px"
    dot.style.top = e.clientY + "px"

    // ring sigue con lerp
    rx += (e.clientX - rx) * 0.12
    ry += (e.clientY - ry) * 0.12
  })

  // ring con rAF para suavidad
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

  // Agrandar ring sobre elementos interactivos
  document.querySelectorAll("a, button, .proyecto-card, .habilidad-card").forEach(
    (el) => {
      el.addEventListener("mouseenter", () => ring.classList.add("cursor-hover"))
      el.addEventListener("mouseleave", () => ring.classList.remove("cursor-hover"))
    }
  )
}

// ── 8. COUNTER animado (para métricas/stats) ─────────────────
// Uso: animateCounter("mi-id", 0, 100, 1200)
export function animateCounter(elementId, from, to, duration = 1400) {
  const el = document.getElementById(elementId)
  if (!el) return

  const startTime = performance.now()

  function update(currentTime) {
    const elapsed = currentTime - startTime
    const progress = Math.min(elapsed / duration, 1)
    // ease out expo
    const eased = 1 - Math.pow(2, -10 * progress)
    el.textContent = Math.round(from + (to - from) * eased)
    if (progress < 1) requestAnimationFrame(update)
  }

  requestAnimationFrame(update)
}

// ── 9. INIT ALL — llama esto desde main.jsx ───────────────────
export function initAllAnimations() {
  initScrollReveal()
  initNavScroll()
  initActiveNav()
  initStagger(".habilidades-grid", ".habilidad-card", 55)
  initStagger(".proyectos-grid", ".proyecto-card", 80)
  initStagger(".cert-grid", ".cert-card", 70)
  initStagger(".contacto-cards", ".card", 70)
  initParallax(".hero-title", 0.18)
  initMagnetic(".btn-primary", 0.3)
  initMagnetic(".btn-ghost", 0.25)

  // cursor solo en desktop
  if (window.matchMedia("(pointer: fine)").matches) {
    initCustomCursor()
  }
}