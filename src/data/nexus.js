import { SITES } from "../config/sites"
import NexusInicio from "../assets/nexus-inicio.webp"
import NexusPlantillas from "../assets/nexus-plantillas.webp"
import NexusAcerca from "../assets/nexus-acerca.webp"
import NexusEjemplo from "../assets/nexus-ejemplo.webp"

// Proyecto hermano de Moss. Cifras de Moss Nexus v1.0.0 (ver su CHANGELOG):
// 13 plantillas, 9 con el sello «Probado» en n8n 2.43.5 y 4 «Sin probar».
export const NEXUS = {
  id: "moss-nexus",
  variant: "nexus",
  images: [NexusInicio, NexusPlantillas, NexusAcerca, NexusEjemplo],
  width: 1600,
  height: 730,
  stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "React Router", "Motion", "Vitest", "n8n"],
  liveUrl: SITES.mossNexus,
  repoUrl: "https://github.com/Sergio-Velandia/Moss-Nexus",
  text: {
    es: {
      label: "Proyecto personal",
      status: "Estable · v1.0.0",
      title: "Moss Nexus, librería de flujos para n8n",
      intro: "Proyecto hermano de Moss, que viene justo después: en Moss se aprende el porqué; en Nexus se copia el flujo y se usa.",
      heading: "Del problema al flujo en minutos",
      p1: "Una librería de flujos de automatización para n8n, ya armados, explicados paso a paso y listos para copiar. Pensada para quien sabe qué quiere automatizar pero no quiere pelearse con webhooks, JSON ni tokens.",
      p2: ["Probado de verdad:", " 9 de las 13 plantillas tienen el sello «Probado» en una instancia real de n8n (2.43.5), con datos ficticios y casos trampa. Las otras 4 se marcan «Sin probar» a la vista."],
      live: "Ver Moss Nexus en vivo",
      github: "Ver código en GitHub",
      gallery: "Capturas de Moss Nexus",
      view: "Ver captura",
      capturas: [
        { label: "Inicio",     alt: "Inicio de Moss Nexus: buscador y lienzo con un flujo animado" },
        { label: "Plantillas", alt: "Galería de plantillas de Moss Nexus con búsqueda, filtros y el filtro «Solo probadas»" },
        { label: "Acerca",     alt: "Página Acerca de Moss Nexus: qué es, su relación con Moss y qué significa el sello «Probado»" },
        { label: "Ejemplo",    alt: "Detalle de una plantilla de Moss Nexus con el mapa del flujo y el botón para copiarlo" },
      ],
      pilares: [
        { nombre: "Galería de plantillas", desc: "13 flujos con búsqueda y filtros por herramienta, categoría, dificultad y «Solo probadas»." },
        { nombre: "Sello «Probado»",       desc: "9 plantillas probadas en n8n con datos ficticios; cada prueba dejó correcciones y limitaciones documentadas." },
        { nombre: "Copiar en un clic",     desc: "Botón «Copiar flujo» para pegarlo en n8n, o descarga del archivo .json." },
        { nombre: "Plantillas como datos", desc: "Añadir una es crear una carpeta; las pruebas validan cada flujo, bloquean credenciales y vigilan que nada se dé por probado sin sello." },
      ],
    },
    en: {
      label: "Personal project",
      status: "Stable · v1.0.0",
      title: "Moss Nexus, an n8n workflow library",
      intro: "Moss's sibling project, right below: Moss is where you learn the why; Nexus is where you copy the workflow and use it.",
      heading: "From problem to workflow in minutes",
      p1: "A library of n8n automation workflows, already built, explained step by step and ready to copy. Made for people who know what they want to automate but don't want to wrestle with webhooks, JSON or tokens.",
      p2: ["Actually tested:", " 9 of the 13 templates carry the “Tested” badge from a real n8n instance (2.43.5), with fictional data and edge cases. The other 4 are clearly marked “Untested”."],
      live: "Open Moss Nexus live",
      github: "View code on GitHub",
      gallery: "Moss Nexus screenshots",
      view: "Show screenshot",
      capturas: [
        { label: "Home",      alt: "Moss Nexus home: search bar and canvas with an animated workflow" },
        { label: "Templates", alt: "Moss Nexus template gallery with search, filters and the “Tested only” filter" },
        { label: "About",     alt: "Moss Nexus About page: what it is, how it relates to Moss and what the “Tested” badge means" },
        { label: "Example",   alt: "Moss Nexus template detail with the workflow map and the copy button" },
      ],
      pilares: [
        { nombre: "Template gallery",  desc: "13 workflows with search and filters by tool, category, difficulty and “Tested only”." },
        { nombre: "“Tested” badge",    desc: "9 templates tested in n8n with fictional data; every test led to documented fixes and limitations." },
        { nombre: "One-click copy",    desc: "A “Copy workflow” button to paste it into n8n, or download the .json file." },
        { nombre: "Templates as data", desc: "Adding one means creating a folder; tests validate every workflow, block leaked credentials and make sure nothing claims to be tested without a badge." },
      ],
    },
  },
}
