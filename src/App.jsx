import { useEffect } from "react"
import Header from "./components/Header"
import SobreMi from "./components/SobreMi"
import Habilidades from "./components/Habilidades"
import Proyectos from "./components/Proyectos"
import RobloxProyecto from "./components/RobloxProyecto"
import Experiencia from "./components/Experiencia"
import Stats from "./components/Stats"
import StackActual from "./components/Stackactual"
import N8nProyecto from "./components/N8nProyecto"
import Certificaciones from "./components/Certificaciones"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import { initAllAnimations } from "./animation"
import { initExtras, typeWriterLoop } from "./extras"
import "./App.css"

export default function App() {
  useEffect(() => {
    initAllAnimations()
    initExtras()

    // TypeWriter en el subtítulo del hero (ver Header.jsx id="hero-subtitle")
    typeWriterLoop(
      "hero-subtitle",
      [
        "Desarrollador Web Full Stack",
        "Automatización con n8n & IA",
        "React · Node · Python",
        "Soluciones digitales a medida",
      ],
      75,
      2200
    )
  }, [])

  return (
    <>
      <Header />
      <main>
        <SobreMi />
        <Habilidades />
        <Experiencia/>
        <Stats/>
        <Proyectos />
        <N8nProyecto />
        <RobloxProyecto/>
        <Certificaciones/>
        <StackActual/>
        <Contacto/>
      </main>
      <Footer />
    </>
  )
}