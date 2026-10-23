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

describe("privacidad", () => {
  it("index.html no carga recursos de terceros (fuentes, scripts ni estilos)", () => {
    const html = read("index.html")
    const external = [...html.matchAll(/<(?:link|script)[^>]+(?:href|src)="(https?:\/\/[^"]+)"/g)]
      .map(([, url]) => url)
      .filter((url) => !url.startsWith(DOMAIN))
    expect(external).toEqual([])
  })
})

describe("metadatos para compartir", () => {
  const html = read("index.html").replace(/\s+/g, " ")
  const meta = (attr, name) => html.match(new RegExp(`${attr}="${name}" content="([^"]+)"`))?.[1]

  it("la imagen de vista previa existe y mide lo que se declara", () => {
    const image = meta("property", "og:image")
    expect(image).toBe(`${SITES.portfolio}og-image.png`)
    expect(meta("name", "twitter:image")).toBe(image)
    const png = readFileSync(new URL("../../public/og-image.png", import.meta.url))
    expect([png.readUInt32BE(16), png.readUInt32BE(20)]).toEqual([
      Number(meta("property", "og:image:width")),
      Number(meta("property", "og:image:height")),
    ])
    expect(meta("property", "og:image:alt")).toBeTruthy()
  })

  it("la descripción de index.html es la misma que usa el sitio en español", () => {
    expect(meta("name", "description")).toBe(META.es.description)
    expect(meta("property", "og:description")).toBe(META.es.description)
    expect(META.es.description).toMatch(/Moss Nexus/)
    expect(META.en.description).toMatch(/Moss Nexus/)
  })
})

describe("versión", () => {
  it("package.json, el CHANGELOG y el README dicen la misma versión", () => {
    const { version } = JSON.parse(read("package.json"))
    const changelog = read("CHANGELOG.md").match(/^## \[(\d+\.\d+\.\d+)\]/m)?.[1]
    expect(changelog).toBe(version)
    expect(read("README.md")).toContain(`| **${version}** |`)
  })
})
