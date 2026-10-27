import { existsSync, readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { CV_FILE } from "../config/sites"

const url = (path) => new URL(`../../${path}`, import.meta.url)

describe("CV", () => {
  it("el botón del hero apunta al CV de public/", () => {
    const header = readFileSync(url("src/components/Header.jsx"), "utf8")
    expect(header).toContain("${CV_FILE}")
    expect(existsSync(url(`public/${CV_FILE}`))).toBe(true)
  })

  it("es un PDF y sus metadatos no traen correos ajenos al dominio ni teléfonos", () => {
    // El texto del PDF va comprimido; esto revisa lo legible (metadatos,
    // autor, enlaces). El contenido visible se revisa a mano al cambiarlo.
    const raw = readFileSync(url(`public/${CV_FILE}`)).toString("latin1")
    expect(raw.startsWith("%PDF")).toBe(true)
    const emails = raw.match(/[\w.+-]+@[\w-]+\.[a-z]{2,}/gi) ?? []
    expect(emails.filter((email) => !email.toLowerCase().endsWith("@sergio-velandia.dev"))).toEqual([])
    expect(raw).not.toMatch(/\+57|wa\.me\/|gmail/i)
  })
})
