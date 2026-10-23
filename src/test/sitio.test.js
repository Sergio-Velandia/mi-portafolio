import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"
import { DOMAIN, SITES } from "../config/sites"
import { LANGS, META } from "../i18n"

const read = (path) => readFileSync(new URL(`../../${path}`, import.meta.url), "utf8")

describe("idiomas", () => {
  it("META tiene las mismas claves en español e inglés", () => {
    expect(LANGS).toEqual(["es", "en"])
    expect(Object.keys(META.en)).toEqual(Object.keys(META.es))
  })
})

describe("URLs del ecosistema", () => {
  it("todas viven en el dominio propio", () => {
    expect(DOMAIN).toBe("https://sergio-velandia.dev")
    for (const url of Object.values(SITES)) expect(url.startsWith(`${DOMAIN}/`)).toBe(true)
  })

  it("index.html y el sitemap usan la URL canónica del portafolio", () => {
    // Se normalizan los espacios: index.html alinea los atributos con varios
    const html = read("index.html").replace(/\s+/g, " ")
    expect(html).toContain(`<link rel="canonical" href="${SITES.portfolio}" />`)
    expect(html).toContain(`property="og:url" content="${SITES.portfolio}"`)
    expect(read("public/sitemap.xml")).toContain(`<loc>${SITES.portfolio}</loc>`)
  })
})
