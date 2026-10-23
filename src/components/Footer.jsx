import "../App.css"
import { scrollToTop } from "../extras"
import { useLang } from "../i18n"

const REPO = "https://github.com/Sergio-Velandia/mi-portafolio/blob/main"
const BASE = import.meta.env.BASE_URL
// Las páginas legales son bilingües: la versión en inglés está en #en
const legalHref = (slug, lang) => `${BASE}${slug}/${lang === "en" ? "#en" : ""}`

const TEXT = {
  es: {
    rights: "Código con licencia MIT; contenido con derechos reservados.",
    legal: "Enlaces legales",
    privacy: "Privacidad",
    terms: "Términos",
    license: "Licencia",
    brands: "Roblox, n8n y las demás marcas mencionadas pertenecen a sus titulares. Este sitio no está afiliado a ellas.",
    top: "Volver arriba",
    topShort: "Arriba",
  },
  en: {
    rights: "Code under the MIT license; content all rights reserved.",
    legal: "Legal links",
    privacy: "Privacy",
    terms: "Terms",
    license: "License",
    brands: "Roblox, n8n and the other brands mentioned belong to their owners. This site is not affiliated with them.",
    top: "Back to top",
    topShort: "Top",
  },
}

export default function Footer() {
  const { lang } = useLang()
  const t = TEXT[lang]

  return (
    <footer className="footer">
      <span className="footer-brand" translate="no">Sergio Velandia</span>
      <div className="footer-info">
        <p>© 2025-2026 Sergio Andrés Ramírez Velandia. {t.rights}</p>
        <p>{t.brands}</p>
      </div>
      <nav className="footer-legal" aria-label={t.legal}>
        <a href={legalHref("privacidad", lang)}>{t.privacy}</a>
        <a href={legalHref("terminos", lang)}>{t.terms}</a>
        <a href={`${REPO}/LICENSE`} target="_blank" rel="noopener noreferrer">{t.license}</a>
      </nav>
      <button onClick={scrollToTop} className="btn-top" aria-label={t.top}>
        <span aria-hidden="true">↑</span> {t.topShort}
      </button>
    </footer>
  )
}
