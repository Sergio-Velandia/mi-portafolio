import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const app = readFileSync(new URL("../App.jsx", import.meta.url), "utf8")
const header = readFileSync(new URL("../components/Header.jsx", import.meta.url), "utf8")

describe("orden de las secciones", () => {
  it("videojuego, luego Moss Nexus, Moss, el flujo de n8n y al final los otros proyectos", () => {
    const order = ["<RobloxProyecto />", "<MossNexusProject />", "<MossProject />", "<N8nProyecto />", "<Proyectos />"]
    const positions = order.map((tag) => app.indexOf(tag))
    expect(positions.every((p) => p > 0)).toBe(true)
    expect([...positions].sort((a, b) => a - b)).toEqual(positions)
  })

  it("el enlace «Proyectos» del menú lleva al primer proyecto destacado", () => {
    expect(header.match(/href: "#moss-nexus"/g)).toHaveLength(2)
  })
})
