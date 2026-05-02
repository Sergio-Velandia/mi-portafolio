// ============================================================
// extras.js — Utilidades del portafolio
// ============================================================

// ── 1. SCROLL TO TOP ─────────────────────────────────────────
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// Botón flotante de scroll-to-top (se muestra al bajar 400px)
export function initScrollToTopBtn() {
  const btn = document.createElement("button")
  btn.className = "scroll-top-btn"
  btn.innerHTML = `<svg width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M8 12V4M4 8l4-4 4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>`
  btn.setAttribute("aria-label", "Volver arriba")
  document.body.appendChild(btn)

  btn.addEventListener("click", scrollToTop)

  window.addEventListener("scroll", () => {
    btn.classList.toggle("visible", window.scrollY > 400)
  }, { passive: true })
}

// ── 2. TYPEWRITER EFFECT ─────────────────────────────────────
// Versión mejorada: borra y reescribe lista de frases en loop
export function typeWriter(elementId, text, speed = 80) {
  let i = 0
  const el = document.getElementById(elementId)
  if (!el) return

  el.textContent = ""

  function typing() {
    if (i < text.length) {
      el.textContent += text.charAt(i)
      i++
      setTimeout(typing, speed)
    }
  }
  typing()
}

// Typewriter con loop de frases y cursor parpadeante
export function typeWriterLoop(elementId, phrases, speed = 80, pause = 2000) {
  const el = document.getElementById(elementId)
  if (!el) return

  let phraseIndex = 0
  let charIndex = 0
  let deleting = false

  el.classList.add("typewriter-cursor")

  function tick() {
    const current = phrases[phraseIndex]

    if (!deleting) {
      el.textContent = current.slice(0, charIndex + 1)
      charIndex++
      if (charIndex === current.length) {
        deleting = true
        setTimeout(tick, pause)
        return
      }
    } else {
      el.textContent = current.slice(0, charIndex - 1)
      charIndex--
      if (charIndex === 0) {
        deleting = false
        phraseIndex = (phraseIndex + 1) % phrases.length
      }
    }

    setTimeout(tick, deleting ? speed * 0.5 : speed)
  }

  tick()
}

// ── 3. SMOOTH SCROLL para links internos ─────────────────────
export function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener("click", (e) => {
      const target = document.querySelector(link.getAttribute("href"))
      if (!target) return
      e.preventDefault()
      target.scrollIntoView({ behavior: "smooth", block: "start" })
    })
  })
}

// ── 4. COPY TO CLIPBOARD (para sección contacto) ─────────────
export function copyToClipboard(text, feedbackEl) {
  navigator.clipboard.writeText(text).then(() => {
    if (feedbackEl) {
      const original = feedbackEl.textContent
      feedbackEl.textContent = "¡Copiado!"
      feedbackEl.style.color = "#C9A96E"
      setTimeout(() => {
        feedbackEl.textContent = original
        feedbackEl.style.color = ""
      }, 1800)
    }
  })
}

// ── 5. TOAST NOTIFICATION ────────────────────────────────────
export function showToast(message, type = "success", duration = 3000) {
  const existing = document.querySelector(".toast")
  if (existing) existing.remove()

  const toast = document.createElement("div")
  toast.className = `toast toast-${type}`
  toast.textContent = message
  document.body.appendChild(toast)

  requestAnimationFrame(() => {
    toast.classList.add("toast-visible")
  })

  setTimeout(() => {
    toast.classList.remove("toast-visible")
    setTimeout(() => toast.remove(), 400)
  }, duration)
}

// ── 6. INIT EXTRAS ───────────────────────────────────────────
export function initExtras() {
  initSmoothScroll()
  initScrollToTopBtn()
}