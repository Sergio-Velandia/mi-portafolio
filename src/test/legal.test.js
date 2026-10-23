import { readFileSync } from "node:fs"
import { describe, expect, it } from "vitest"

const read = (path) => readFileSync(new URL(`../../${path}`, import.meta.url), "utf8")

describe("licencia", () => {
  it("el código es MIT y el contenido tiene los derechos reservados", () => {
    expect(JSON.parse(read("package.json")).license).toBe("MIT")
    expect(read("LICENSE")).toMatch(/^MIT License/)
    expect(read("LICENSE")).toContain("LICENSE-CONTENT")
    expect(read("LICENSE-CONTENT")).toMatch(/Todos los derechos reservados/)
    expect(read("LICENSE-CONTENT")).toMatch(/All rights reserved/)
  })
})

describe.each(["privacidad", "terminos"])("página %s", (slug) => {
  const url = `https://sergio-velandia.dev/mi-portafolio/${slug}/`
  const html = read(`${slug}/index.html`).replace(/\s+/g, " ")

  it("es un HTML real con título, descripción y canonical propios", () => {
    expect(html).toMatch(/<title>[^<]+ · Sergio Velandia<\/title>/)
    expect(html).toMatch(/<meta name="description" content="[^"]{60,}"/)
    expect(html).toContain(`<link rel="canonical" href="${url}" />`)
    expect(html).toContain(`<meta property="og:url" content="${url}" />`)
  })

  it("tiene un solo h1, versión en inglés y fecha de actualización en los dos idiomas", () => {
    expect(html.match(/<h1[\s>]/g)).toHaveLength(1)
    expect(html).toContain('<section id="en" lang="en"')
    expect(html).toContain("Última actualización: 23 de octubre de 2026")
    expect(html).toContain("Last updated: October 23, 2026")
  })

  it("se construye en el build y está en el sitemap", () => {
    expect(read("vite.config.js")).toContain(`./${slug}/index.html`)
    expect(read("public/sitemap.xml")).toContain(`<loc>${url}</loc>`)
  })
})

describe("privacidad", () => {
  const html = read("privacidad/index.html")

  it("nombra cada dato que guarda el navegador", () => {
    const source = read("src/lib/envios.js") + read("src/i18n.js")
    for (const key of ["portfolio-lang", "portfolio-contact-sends"]) {
      expect(source).toContain(key)
      expect(html).toContain(`<code>${key}</code>`)
    }
  })

  it("explica EmailJS y cómo ejercer los derechos escribiendo a contacto@", () => {
    expect(html).toContain("EmailJS")
    expect(html).toContain("Ley 1581 de 2012")
    expect(html).toContain("mailto:contacto@sergio-velandia.dev")
    expect(html).toContain("mailto:contact@sergio-velandia.dev")
  })
})
