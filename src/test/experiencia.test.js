import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const read = (path) => readFileSync(new URL(`../${path}`, import.meta.url), "utf8")

// Las fechas y el tipo de vinculación deben coincidir con el CV publicado
describe("experiencia", () => {
  it("Roblox fue prestación de servicios, de enero a julio de 2025", () => {
    const roblox = read("components/RobloxProyecto.jsx")
    expect(roblox).toContain("prestación de servicios, ene–jul 2025")
    expect(roblox).toContain("contract work, Jan–Jul 2025")
    expect(roblox).not.toMatch(/aprendizaje|apprenticeship|6 meses|6 months/)
  })
})
