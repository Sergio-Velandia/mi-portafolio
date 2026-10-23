import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { MOSS } from "../data/moss"
import { NEXUS } from "../data/nexus"

const PROJECTS = { MOSS, NEXUS }

// Forma de un objeto: claves y longitud de los arreglos, sin los textos
function shape(value) {
  if (Array.isArray(value)) return value.map(shape)
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.keys(value).sort().map((key) => [key, shape(value[key])]))
  }
  return typeof value
}

const numbers = (value) => (JSON.stringify(value).match(/\d+(\.\d+)*/g) ?? []).sort()

describe.each(Object.entries(PROJECTS))("%s", (_, project) => {
  const { es, en } = project.text

  it("tiene los mismos campos en español e inglés", () => {
    expect(shape(en)).toEqual(shape(es))
  })

  it("dice las mismas cifras en los dos idiomas", () => {
    expect(numbers(en)).toEqual(numbers(es))
  })

  it("tiene una captura por cada texto alternativo", () => {
    expect(project.images).toHaveLength(es.capturas.length)
  })
})

describe("Moss Nexus", () => {
  it("usa las cifras de la v1.0.0: 13 plantillas, 9 probadas", () => {
    const text = JSON.stringify(NEXUS.text)
    expect(text).not.toMatch(/\b14\b/)
    expect(NEXUS.text.es.status).toBe("Estable · v1.0.0")
    expect(NEXUS.text.es.p2.join("")).toMatch(/9 de las 13 plantillas/)
    expect(NEXUS.text.en.p2.join("")).toMatch(/9 of the 13 templates/)
  })
})

describe("Moss", () => {
  it("es estable y presenta sus 5 rutas de aprendizaje", () => {
    expect(MOSS.text.es.status).toBe("Estable · v1.14.0")
    expect(MOSS.text.es.intro).toMatch(/5 rutas de aprendizaje/)
    expect(MOSS.text.es.pilares.map((p) => p.nombre)).toContain("Rutas")
  })
})

describe("certificaciones", () => {
  it("marcan el idioma real de cada título para los lectores de pantalla", () => {
    const source = readFileSync(new URL("../components/Certificaciones.jsx", import.meta.url), "utf8")
    expect(source).toContain('<h3 lang={cert.lang ?? "en"}>')
    expect(source.match(/lang: "es"/g)).toHaveLength(3)
  })
})
