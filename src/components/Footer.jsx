import "../App.css"
import { scrollToTop } from "../extras"
import { useLang } from "../i18n"

const TEXT = {
  es: { rights: "Todos los derechos reservados.", top: "Volver arriba", topShort: "Arriba" },
  en: { rights: "All rights reserved.", top: "Back to top", topShort: "Top" },
}

export default function Footer() {
  const { lang } = useLang()
  const t = TEXT[lang]

  return (
    <footer className="footer">
      <span className="footer-brand" translate="no">Sergio Velandia</span>
      <p>© {new Date().getFullYear()} Sergio Andrés Ramírez Velandia. {t.rights}</p>
      <button onClick={scrollToTop} className="btn-top" aria-label={t.top}>
        <span aria-hidden="true">↑</span> {t.topShort}
      </button>
    </footer>
  )
}
