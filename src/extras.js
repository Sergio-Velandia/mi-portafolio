
// ⬆️ 2. Scroll To Top
export function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" })
}

// ✨ 3. TypeWriter effect
export function typeWriter(elementId, text, speed = 100) {
  let i = 0
  function typing() {
    if (i < text.length) {
      const el = document.getElementById(elementId)
      if (el) {
        el.innerHTML += text.charAt(i)
        i++
        setTimeout(typing, speed)
      }
    }
  }
  typing()
}
