// ============================================================
// i18n.js — Idioma del portafolio (español por defecto, inglés opcional)
// ============================================================
// - El idioma se elige con el botón ES/EN del menú.
// - Se recuerda en el navegador y también se puede forzar por URL:
//   https://sergio-velandia.dev/mi-portafolio/?lang=en
//   (útil para enviarle el enlace directo a un reclutador extranjero).
// - Cada componente guarda sus propios textos en un objeto { es, en }
//   y elige el suyo con useLang().
// - El proveedor (estado + efectos) vive en LanguageProvider.jsx.
// ============================================================
import { createContext, useContext } from "react"

export const LANGS = ["es", "en"]
export const STORAGE_KEY = "portfolio-lang"

export const META = {
  es: {
    title: "Sergio Velandia — Desarrollador Web & Automatizaciones",
    description:
      "Desarrollador web y automatizaciones — Colombia. Proyectos con React, n8n, Roblox Studio y más.",
    top: "Volver arriba",
  },
  en: {
    title: "Sergio Velandia — Web Developer & Automation",
    description:
      "Web developer and automation specialist based in Colombia. Projects with React, n8n, Roblox Studio and more.",
    top: "Back to top",
  },
}

export const LangContext = createContext({ lang: "es", setLang: () => {} })

export function useLang() {
  return useContext(LangContext)
}

// Formatea "2026-08" como "agosto de 2026" / "August 2026" según el idioma
export function formatMonth(yyyyMm, lang) {
  const [y, m] = yyyyMm.split("-").map(Number)
  return new Intl.DateTimeFormat(lang, { month: "long", year: "numeric" }).format(new Date(y, m - 1, 1))
}
