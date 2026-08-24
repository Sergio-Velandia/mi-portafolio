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
        "React · BD · N8N · Node.js",
        "Automatización inteligente para tu negocio.",
      ],
      75,
      2200
    )
  }, [])

  return (
    <>
      <Header />
      <main>
        {/* 1. EL GANCHO: Quién eres y qué buscas (Contrato SENA) */}
        <SobreMi />
        
        {/* 2. LA AUTORIDAD: ¡Tus credenciales pesadas (IBM, Google, n8n)! 
            Esto genera confianza inmediata antes de ver tu código. */}
        <Certificaciones />
        
        {/* 3. EL ARSENAL: El panel de 4 columnas que armamos. 
            El reclutador hará "check" mental de los requisitos de la vacante. */}
        <Habilidades />
        
        {/* 4. EL PLATO FUERTE (Experiencia): Tu trabajo real de 6 meses. */}
        <RobloxProyecto />
        
        {/* 5. EL PROYECTO CLAVE (Automatización/IA): Ideal para los roles que buscas mañana. */}
        <N8nProyecto />
        
        {/* 6. EL RESTO DE PROYECTOS: Tu gestor DevAsset, este mismo portafolio, etc. */}
        <Proyectos />
        
        {/* 7. RESUMEN DE EXPERIENCIA: Si este componente es una línea de tiempo, 
            aquí queda perfecto como resumen cronológico (incluyendo la carpintería). */}
        {/*<Experiencia />*/}
        
        {/* 8. EXTRAS VISUALES: Para relajar la vista y mostrar constancia. */}
        <Stats />
        <StackActual />
        
        {/* 9. EL CIERRE: Llamado a la acción. ¡Contrátame! */}
        <Contacto />
      </main>
      <Footer />
    </>
  )
}