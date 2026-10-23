import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const css = readFileSync(new URL("../App.css", import.meta.url), "utf8")
const token = (name) => css.match(new RegExp(`--${name}:\\s*(#[0-9a-fA-F]{6})`))?.[1]

// Contraste WCAG 2.1 entre dos colores #rrggbb
function luminance(hex) {
  const [r, g, b] = [1, 3, 5].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255)
    .map((v) => (v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4))
  return 0.2126 * r + 0.7152 * g + 0.0722 * b
}
const contrast = (a, b) => {
  const [hi, lo] = [luminance(a), luminance(b)].sort((x, y) => y - x)
  return (hi + 0.05) / (lo + 0.05)
}

const BACKGROUNDS = ["bg-base", "bg-raised", "bg-card"].map(token).concat("#060605") // #060605: pie

describe("contraste AA", () => {
  it.each(["text-primary", "text-secondary", "text-muted", "accent"])("--%s alcanza 4,5:1 en todos los fondos", (name) => {
    for (const bg of BACKGROUNDS) expect(contrast(token(name), bg)).toBeGreaterThanOrEqual(4.5)
  })

  it("--text-outline (solo texto grande) alcanza 3:1 sobre el fondo del hero", () => {
    expect(contrast(token("text-outline"), token("bg-base"))).toBeGreaterThanOrEqual(3)
  })

  it("no queda ningún color por debajo de AA usado como texto", () => {
    expect(css).not.toContain("--text-disabled")
  })
})
