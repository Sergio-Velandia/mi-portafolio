import { readFileSync } from "node:fs"
import vm from "node:vm"
import { describe, expect, it } from "vitest"

const read = (path) => readFileSync(new URL(`../../${path}`, import.meta.url), "utf8")
const html = read("index.html")
const css = read("src/entrada.css")
const template = html.match(/<template id="plantilla-entrada">([\s\S]*?)<\/template>/)[1]
const script = html.match(/<\/template>\s*<script>([\s\S]*?)<\/script>/)[1].replaceAll("%BASE_URL%", "/mi-portafolio/")

const ORIGIN = "https://sergio-velandia.dev"

// Ejecuta el script en línea con un DOM mínimo, sin dependencias
function run({ type = "navigate", referrer = "", reduced = false } = {}) {
  const listeners = {}
  const timers = []
  const state = { mounted: false, removed: false, entradaListeners: {}, htmlClasses: [] }
  const entrada = {
    remove: () => {
      state.removed = true
    },
    addEventListener: (name, fn) => {
      state.entradaListeners[name] = fn
    },
  }
  const context = {
    performance: { getEntriesByType: () => [{ type }] },
    location: { origin: ORIGIN },
    matchMedia: () => ({ matches: reduced }),
    setTimeout: (fn, ms) => timers.push({ fn, ms }),
    addEventListener: (name, fn) => {
      listeners[name] = fn
    },
    removeEventListener: (name) => {
      delete listeners[name]
    },
    document: {
      referrer,
      getElementById: () => ({ content: { firstElementChild: { cloneNode: () => entrada } } }),
      documentElement: { classList: { add: (name) => state.htmlClasses.push(name) } },
      body: {
        prepend: () => {
          state.mounted = true
        },
      },
    },
  }
  vm.runInNewContext(script, context)
  return { state, listeners, timers, entrada }
}

describe("pantalla de entrada: cuándo aparece", () => {
  it("aparece al llegar de afuera, sin referente o desde otro sitio", () => {
    expect(run().state.mounted).toBe(true)
    expect(run({ referrer: "https://www.linkedin.com/" }).state.mounted).toBe(true)
  })

  it("venir de un proyecto hermano cuenta como llegar de afuera", () => {
    expect(run({ referrer: `${ORIGIN}/Moss-Nexus/` }).state.mounted).toBe(true)
  })

  it("no aparece al recargar ni al volver atrás", () => {
    expect(run({ type: "reload" }).state.mounted).toBe(false)
    expect(run({ type: "back_forward" }).state.mounted).toBe(false)
  })

  it("no aparece al llegar desde otra página del portafolio", () => {
    expect(run({ referrer: `${ORIGIN}/mi-portafolio/privacidad/` }).state.mounted).toBe(false)
  })

  it("no aparece con movimiento reducido", () => {
    expect(run({ reduced: true }).state.mounted).toBe(false)
  })
})

describe("pantalla de entrada: cuándo se va", () => {
  it("un toque o una tecla la quitan", () => {
    for (const event of ["pointerdown", "keydown"]) {
      const { state, listeners } = run()
      listeners[event]()
      expect(state.removed).toBe(true)
      expect(listeners).toEqual({})
    }
  })

  it("se quita al terminar su propia animación, no la de sus hijos", () => {
    const { state, entrada } = run()
    state.entradaListeners.animationend({ target: {} })
    expect(state.removed).toBe(false)
    state.entradaListeners.animationend({ target: entrada })
    expect(state.removed).toBe(true)
  })

  it("nunca dura más de 3 s: animación y seguro", () => {
    const { state, timers } = run()
    expect(timers).toHaveLength(1)
    expect(timers[0].ms).toBeLessThanOrEqual(3000)
    timers[0].fn()
    expect(state.removed).toBe(true)
    expect(Number(css.match(/--entrada-duracion:\s*(\d+)ms/)[1])).toBeLessThanOrEqual(timers[0].ms)
  })

  it("el contenido se va antes que el fondo", () => {
    const salida = Number(css.match(/@keyframes entrada-salida \{\s*0%,\s*(\d+)%/)[1])
    const firmaFin = Number(css.match(/@keyframes entrada-firma \{[\s\S]*?(\d+)%,\s*100%/)[1])
    expect(firmaFin - salida).toBeLessThanOrEqual(2) // el fondo empieza cuando el nombre ya casi no se ve
  })
})

describe("pantalla de entrada: reglas", () => {
  it("solo anima transform y opacity", () => {
    const blocks = [...css.matchAll(/@keyframes [\w-]+ \{([\s\S]*?)\n\}/g)].map(([, body]) => body)
    expect(blocks.length).toBeGreaterThan(0)
    const props = blocks.flatMap((body) => [...body.matchAll(/^\s*([a-z-]+):/gm)].map(([, prop]) => prop))
    expect(new Set(props)).toEqual(new Set(["opacity", "transform", "animation-timing-function"]))
  })

  it("no guarda nada en el navegador", () => {
    expect(script).not.toMatch(/localStorage|sessionStorage|cookie/)
  })

  it("no tiene lema, encabezados, enlaces ni botones, y se oculta a lectores de pantalla", () => {
    expect(template).toContain('aria-hidden="true"')
    expect(template).not.toMatch(/<(h1|h2|a|button)\b/)
    expect(template.replace(/<[^>]+>/g, " ").trim().split(/\s+/)).toEqual(["Sergio", "Velandia"])
  })

  it("los colores son tokens: no hay hex sueltos en su CSS", () => {
    expect(css).not.toMatch(/#[0-9a-f]{3,8}\b/i)
  })

  it("el hero muestra el mismo nombre y no repite su animación detrás de la capa", () => {
    expect(read("src/components/Header.jsx")).toContain('data-hero-step="3">Velandia<')
    expect(read("src/animation.js")).toContain('document.querySelector(".entrada")')
  })
})
