import { useEffect } from "react"
import "./App.css"

// Importamos componentes
import Header from "./components/Header"
import SobreMi from "./components/SobreMi"
import Habilidades from "./components/Habilidades"
import Proyectos from "./components/Proyectos"
import N8nProyecto from "./components/N8nProyecto"
import Contacto from "./components/Contacto"
import Certificaciones from "./components/Certificaciones"
import Footer from "./components/footer"

// Importamos animación scroll
import { initScrollReveal } from "./animation"

function App() {
  useEffect(() => {
    // Activa la animación de aparición al hacer scroll
    initScrollReveal()
  }, [])

  return (
    <>
      <div className="reveal">
        <Header />
      </div>
      <div className="reveal">
        <SobreMi />
      </div>
      <div className="reveal">
        <Habilidades />
      </div>
      <div className="reveal">
        <Proyectos />
      </div>
      <div className="reveal">
        <N8nProyecto />
      </div>
      <div className="reveal">
        <Contacto />
      </div>
      <div className="reveal">
        <Certificaciones />
      </div>
      <div className="reveal">
        <Footer />
      </div>
    </>
  )
}

export default App
