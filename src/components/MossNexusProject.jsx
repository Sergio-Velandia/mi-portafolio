import ProjectShowcase from "./ProjectShowcase"
import NexusInicio from "../assets/nexus-inicio.webp"
import NexusPlantillas from "../assets/nexus-plantillas.webp"
import NexusAcerca from "../assets/nexus-acerca.webp"
import NexusEjemplo from "../assets/nexus-ejemplo.webp"

// Proyecto hermano de Moss. Las plantillas aún no están probadas en una
// instancia real de n8n: aquí se describen como "listas para copiar".
const NEXUS = {
  id: "moss-nexus",
  variant: "nexus",
  images: [NexusInicio, NexusPlantillas, NexusAcerca, NexusEjemplo],
  width: 1600,
  height: 730,
  stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "React Router", "Motion", "Vitest", "n8n"],
  liveUrl: "https://sergio-velandia.github.io/Moss-Nexus/",
  repoUrl: "https://github.com/Sergio-Velandia/Moss-Nexus",
  text: {
    es: {
      label: "Proyecto personal",
      title: "Moss Nexus, librería de flujos para n8n",
      intro: "Proyecto hermano de Moss: en Moss se aprende el porqué; en Nexus se copia el flujo y se usa.",
      heading: "Del problema al flujo en minutos",
      p1: "Una librería de flujos de automatización para n8n, ya armados, explicados paso a paso y listos para copiar. Pensada para quien sabe qué quiere automatizar pero no quiere pelearse con webhooks, JSON ni tokens.",
      p2: ["Sin backend:", " las 14 plantillas viven en el repositorio como datos (metadatos, diagrama y flujo de n8n) y el sitio se publica solo con cada push."],
      live: "Ver Moss Nexus en vivo",
      github: "Ver código en GitHub",
      gallery: "Capturas de Moss Nexus",
      view: "Ver captura",
      capturas: [
        { label: "Inicio",     alt: "Inicio de Moss Nexus: buscador y lienzo con un flujo animado" },
        { label: "Plantillas", alt: "Galería de plantillas de Moss Nexus con búsqueda y filtros por herramienta, categoría y dificultad" },
        { label: "Acerca",     alt: "Página Acerca de Moss Nexus: qué es y su relación con Moss" },
        { label: "Ejemplo",    alt: "Detalle de una plantilla de Moss Nexus con el mapa del flujo y el botón para copiarlo" },
      ],
      pilares: [
        { nombre: "Galería de plantillas", desc: "14 flujos con búsqueda y filtros por herramienta, categoría y dificultad." },
        { nombre: "Mapa del flujo",        desc: "El diagrama de cada plantilla se dibuja solo a partir de un JSON, sin coordenadas." },
        { nombre: "Copiar en un clic",     desc: "Botón «Copiar flujo» para pegarlo en n8n, o descarga del archivo .json." },
        { nombre: "Plantillas como datos", desc: "Añadir una es crear una carpeta; las pruebas validan cada flujo y bloquean credenciales." },
      ],
    },
    en: {
      label: "Personal project",
      title: "Moss Nexus, an n8n workflow library",
      intro: "Moss's sibling project: Moss is where you learn the why; Nexus is where you copy the workflow and use it.",
      heading: "From problem to workflow in minutes",
      p1: "A library of n8n automation workflows, already built, explained step by step and ready to copy. Made for people who know what they want to automate but don't want to wrestle with webhooks, JSON or tokens.",
      p2: ["No backend:", " the 14 templates live in the repository as data (metadata, diagram and n8n workflow), and the site redeploys on every push."],
      live: "Open Moss Nexus live",
      github: "View code on GitHub",
      gallery: "Moss Nexus screenshots",
      view: "Show screenshot",
      capturas: [
        { label: "Home",      alt: "Moss Nexus home: search bar and canvas with an animated workflow" },
        { label: "Templates", alt: "Moss Nexus template gallery with search and filters by tool, category and difficulty" },
        { label: "About",     alt: "Moss Nexus About page: what it is and how it relates to Moss" },
        { label: "Example",   alt: "Moss Nexus template detail with the workflow map and the copy button" },
      ],
      pilares: [
        { nombre: "Template gallery", desc: "14 workflows with search and filters by tool, category and difficulty." },
        { nombre: "Workflow map",     desc: "Each template's diagram is drawn automatically from JSON, no coordinates needed." },
        { nombre: "One-click copy",   desc: "A “Copy workflow” button to paste it into n8n, or download the .json file." },
        { nombre: "Templates as data", desc: "Adding one means creating a folder; tests validate every workflow and block leaked credentials." },
      ],
    },
  },
}

export default function MossNexusProject() {
  return <ProjectShowcase project={NEXUS} />
}
