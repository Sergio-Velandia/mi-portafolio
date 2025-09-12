// animations.js

// 👇 Hace que los elementos con la clase .reveal se animen al hacer scroll
export function revealOnScroll() {
  const reveals = document.querySelectorAll(".reveal")

  for (let i = 0; i < reveals.length; i++) {
    const windowHeight = window.innerHeight
    const elementTop = reveals[i].getBoundingClientRect().top
    const elementVisible = 100

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active")
    } else {
      reveals[i].classList.remove("active")
    }
  }
}

// Inicia el listener automáticamente
export function initScrollReveal() {
  window.addEventListener("scroll", revealOnScroll)
  revealOnScroll() // ejecuta en la primera carga
}
