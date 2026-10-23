import { useEffect } from "react"
import Header from "./components/Header"
import SobreMi from "./components/SobreMi"
import Habilidades from "./components/Habilidades"
import Proyectos from "./components/Proyectos"
import RobloxProyecto from "./components/RobloxProyecto"
import Stats from "./components/Stats"
import StackActual from "./components/Stackactual"
import N8nProyecto from "./components/N8nProyecto"
import MossProject from "./components/MossProject"
import MossNexusProject from "./components/MossNexusProject"
import Certificaciones from "./components/Certificaciones"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"
import FloatingIcons from "./components/FloatingIcons"
import { initAllAnimations } from "./animation"
import { initExtras, typeWriterLoop } from "./extras"
import { useLang } from "./i18n"
import "./App.css"

// Frases del typewriter del hero (ver Header.jsx id="hero-subtitle")
const HERO_PHRASES = {
  es: [
    "Desarrollador Web Full Stack",
    "Automatización con n8n e IA",
    "React, Node.js, bases de datos y n8n",
    "Automatización inteligente para tu negocio.",
  ],
  en: [
    "Full Stack Web Developer",
    "Automation with n8n and AI",
    "React, Node.js, databases and n8n",
    "Smart automation for your business.",
  ],
}

export default function App() {
  const { lang } = useLang()

  useEffect(() => {
    initAllAnimations()
    initExtras()
  }, [])

  // Se reinicia con las frases del idioma activo
  useEffect(() => typeWriterLoop("hero-subtitle", HERO_PHRASES[lang], 75, 2200), [lang])

  return (
    <>
      <div className="scroll-progress" aria-hidden="true" />
      <FloatingIcons />
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
        
        {/* 5. PROYECTOS DESTACADOS: primero Moss Nexus (el más fuerte hoy), luego Moss,
            su proyecto hermano, y al final el flujo de n8n. */}
        <MossNexusProject />
        <MossProject />
        <N8nProyecto />

        {/* 6. EL RESTO DE PROYECTOS: Tu gestor DevAsset, este mismo portafolio, etc. */}
        <Proyectos />
        
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