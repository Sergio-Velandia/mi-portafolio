import ProjectShowcase from "./ProjectShowcase"
import { SITES } from "../config/sites"
import MossCap1 from "../assets/moss-inicio.webp"
import MossCap2 from "../assets/moss-laboratorio.webp"
import MossCap3 from "../assets/moss-manual.webp"
import MossCap4 from "../assets/moss-herbario.webp"

const MOSS = {
  id: "moss",
  images: [MossCap1, MossCap2, MossCap3, MossCap4],
  width: 1600,
  height: 900,
  stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "React Router", "MiniSearch", "Shiki", "Vitest"],
  liveUrl: SITES.moss,
  repoUrl: "https://github.com/Sergio-Velandia/Moss",
  text: {
    es: {
      label: "Proyecto personal",
      title: "Moss, mi jardín digital",
      heading: "Mi “segundo cerebro” técnico",
      p1: "Una biblioteca personal y visual donde guardo, documento, pruebo y reutilizo snippets, componentes, guías y artículos. El conocimiento técnico no debería quedarse enterrado: debería ser fácil de encontrar, probar y conectar.",
      p2: ["Sin base de datos ni backend:", " todo el contenido vive en archivos Markdown y TSX versionados con Git, y la búsqueda se indexa directamente en el navegador."],
      live: "Ver Moss en vivo",
      github: "Ver código en GitHub",
      gallery: "Capturas de Moss",
      view: "Ver captura",
      capturas: [
        { label: "Inicio",      alt: "Página de inicio de Moss con buscador y acceso a los cuatro pilares" },
        { label: "Laboratorio", alt: "El Laboratorio de Moss: demos de componentes con vista previa en vivo" },
        { label: "Manual",      alt: "El Manual de Moss: guías técnicas filtradas por categoría" },
        { label: "Herbario",    alt: "El Herbario de Moss: búsqueda global con filtros por tipo, tecnología y etiqueta" },
      ],
      pilares: [
        { nombre: "El Laboratorio", desc: "Componentes y snippets con vista previa en vivo y código copiable." },
        { nombre: "El Manual",      desc: "Documentación, configuraciones y guías que cuesta reconstruir." },
        { nombre: "La Bitácora",    desc: "Blog técnico: aprendizajes, decisiones y errores." },
        { nombre: "El Herbario",    desc: "Búsqueda global, tolerante a erratas, sobre todo el contenido." },
      ],
    },
    en: {
      label: "Personal project",
      title: "Moss, my digital garden",
      heading: "My technical “second brain”",
      p1: "A personal, visual library where I store, document, test and reuse snippets, components, guides and articles. Technical knowledge shouldn't stay buried: it should be easy to find, try out and connect.",
      p2: ["No database, no backend:", " all content lives in Markdown and TSX files versioned with Git, and search is indexed right in the browser."],
      live: "Open Moss live",
      github: "View code on GitHub",
      gallery: "Moss screenshots",
      view: "Show screenshot",
      capturas: [
        { label: "Home",       alt: "Moss home page with search and access to the four pillars" },
        { label: "Laboratory", alt: "Moss Laboratory: component demos with live preview" },
        { label: "Manual",     alt: "Moss Manual: technical guides filtered by category" },
        { label: "Herbarium",  alt: "Moss Herbarium: global search with filters by type, technology and tag" },
      ],
      pilares: [
        { nombre: "The Laboratory", desc: "Components and snippets with live preview and copyable code." },
        { nombre: "The Manual",     desc: "Documentation, configs and guides that are hard to rebuild." },
        { nombre: "The Logbook",    desc: "Technical blog: lessons, decisions and mistakes." },
        { nombre: "The Herbarium",  desc: "Typo-tolerant global search across all content." },
      ],
    },
  },
}

export default function MossProject() {
  return <ProjectShowcase project={MOSS} />
}
