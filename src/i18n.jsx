// ============================================================
// i18n.jsx — Idioma del portafolio (español por defecto, inglés opcional)
// ============================================================
// - El idioma se elige con el botón ES/EN del menú.
// - Se recuerda en el navegador y también se puede forzar por URL:
//   https://sergio-velandia.github.io/mi-portafolio/?lang=en
//   (útil para enviarle el enlace directo a un reclutador extranjero).
// - Cada componente guarda sus propios textos en un objeto { es, en }
//   y elige el suyo con useLang().
// ============================================================
import { createContext, useContext, useEffect, useState } from "react"

const LANGS = ["es", "en"]
const STORAGE_KEY = "portfolio-lang"

const META = {
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

function initialLang() {
  try {
    const fromUrl = new URLSearchParams(window.location.search).get("lang")
    if (LANGS.includes(fromUrl)) return fromUrl
    const stored = localStorage.getItem(STORAGE_KEY)
    if (LANGS.includes(stored)) return stored
  } catch {
    // localStorage puede no estar disponible (modo privado): seguimos en español
  }
  return "es"
}

const LangContext = createContext({ lang: "es", setLang: () => {} })

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(initialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    document.title = META[lang].title
    document.querySelector('meta[name="description"]')?.setAttribute("content", META[lang].description)
    // Botón flotante creado fuera de React (extras.js)
    document.querySelector(".scroll-top-btn")?.setAttribute("aria-label", META[lang].top)

    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // sin almacenamiento: el idioma solo dura esta visita
    }

    // Mantiene la URL compartible: ?lang=en en inglés, sin parámetro en español
    const url = new URL(window.location.href)
    if (lang === "es") url.searchParams.delete("lang")
    else url.searchParams.set("lang", lang)
    window.history.replaceState(null, "", url)
  }, [lang])

  return <LangContext.Provider value={{ lang, setLang }}>{children}</LangContext.Provider>
}

export function useLang() {
  return useContext(LangContext)
}

// Formatea "2026-08" como "agosto de 2026" / "August 2026" según el idioma
export function formatMonth(yyyyMm, lang) {
  const [y, m] = yyyyMm.split("-").map(Number)
  return new Intl.DateTimeFormat(lang, { month: "long", year: "numeric" }).format(new Date(y, m - 1, 1))
}
