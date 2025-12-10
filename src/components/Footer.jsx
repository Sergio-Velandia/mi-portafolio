import "../App.css"
import { scrollToTop } from "../extras"

export default function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Sergio Andrés Ramírez Velandia – Todos los derechos reservados</p>
      <button onClick={() => scrollToTop()} className="btn-top">
        Volver arriba
      </button>

    </footer>
  )
}
