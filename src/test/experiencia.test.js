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

  it("la animación 3D fue independiente, de enero a julio de 2026, con los mismos campos en los dos idiomas", () => {
    const anim = read("components/Animacion3D.jsx")
    expect(anim).toContain("Animador 3D independiente (ene–jul 2026)")
    expect(anim).toContain("Freelance 3D animator (Jan–Jul 2026)")
    expect(anim.match(/features: \[/g)).toHaveLength(2)
  })

  it("Meses de experiencia suma las dos: 7 + 7", () => {
    expect(read("components/Stats.jsx")).toMatch(/Meses de experiencia", en: "Months of experience" \},\s*valor: 14,/)
  })
})
