import { useEffect, useState } from "react"
import { LANGS, STORAGE_KEY, META, LangContext } from "./i18n"

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
