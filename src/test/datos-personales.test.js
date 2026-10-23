import { readdirSync, readFileSync, statSync } from "node:fs"
import { join } from "node:path"
import { fileURLToPath } from "node:url"
import { describe, expect, it } from "vitest"

const ROOT = fileURLToPath(new URL("../../", import.meta.url))
const TEXT_FILES = /\.(jsx?|css|html|md|json|xml|txt|webmanifest)$/

// Archivos de texto del sitio y del repo (sin dependencias ni build)
function listFiles(dir) {
  return readdirSync(dir).flatMap((name) => {
    if (["node_modules", "dist", ".git", "package-lock.json"].includes(name)) return []
    const path = join(dir, name)
    if (statSync(path).isDirectory()) return listFiles(path)
    return TEXT_FILES.test(name) ? [path] : []
  })
}

const files = listFiles(ROOT).filter((path) => !path.includes(join("src", "test")))

describe("datos personales", () => {
  it("no hay teléfonos ni enlaces de WhatsApp", () => {
    const phone = /(\+57[\s-]?)?\b3\d{2}[\s-]?\d{3}[\s-]?\d{4}\b|wa\.me\//
    const offenders = files.filter((path) => phone.test(readFileSync(path, "utf8")))
    expect(offenders).toEqual([])
  })

  it("los únicos correos visibles son los del dominio propio", () => {
    const emails = files.flatMap((path) =>
      (readFileSync(path, "utf8").match(/[\w.+-]+@[\w-]+\.[\w.]+/g) ?? []).map((email) => email.toLowerCase()),
    )
    const foreign = emails.filter(
      (email) => !email.endsWith("@sergio-velandia.dev") && !/^(tu|you|nombre|name)@/.test(email),
    )
    expect(foreign).toEqual([])
  })
})
