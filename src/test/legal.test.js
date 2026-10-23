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
