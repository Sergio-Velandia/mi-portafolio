import { SITES } from "../config/sites"
import MossInicio from "../assets/moss-inicio.webp"
import MossRutas from "../assets/moss-rutas.webp"
import MossLaboratorio from "../assets/moss-laboratorio.webp"
import MossHerbario from "../assets/moss-herbario.webp"

// Datos de Moss v1.14.0 (ver su CHANGELOG). Las secciones son las mismas
// que presenta su página de inicio.
export const MOSS = {
  id: "moss",
  images: [MossInicio, MossRutas, MossLaboratorio, MossHerbario],
  width: 1600,
  height: 900,
  stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "React Router", "Motion", "MiniSearch", "Shiki", "Vitest"],
  liveUrl: SITES.moss,
  repoUrl: "https://github.com/Sergio-Velandia/Moss",
  text: {
    es: {
      label: "Proyecto personal",
      status: "Estable · v1.14.0",
      title: "Moss, mi jardín digital",
      intro: "Lo que lo separa de un blog son sus 5 rutas de aprendizaje: recorridos ordenados que juntan guías, demos, retos y artículos para aprender un tema de principio a fin, de n8n a producción o de CSS a interfaces reales.",
      heading: "Mi “segundo cerebro” técnico",
      p1: "Una biblioteca personal y visual donde guardo, documento, pruebo y reutilizo snippets, componentes, guías y artículos. El conocimiento técnico no debería quedarse enterrado: debería ser fácil de encontrar, probar y conectar.",
      p2: ["Sin base de datos ni backend:", " todo el contenido vive en archivos Markdown y TSX versionados con Git, y la búsqueda se indexa directamente en el navegador."],
      live: "Ver Moss en vivo",
      github: "Ver código en GitHub",
      gallery: "Capturas de Moss",
      view: "Ver captura",
      capturas: [
        { label: "Inicio",      alt: "Inicio de Moss con buscador, acceso a sus secciones y gráficos de crecimiento del contenido" },
        { label: "Rutas",       alt: "Las rutas de aprendizaje de Moss, con nivel, número de pasos y tiempo estimado de cada una" },
        { label: "Laboratorio", alt: "El Laboratorio de Moss: demos de componentes con vista previa en vivo" },
        { label: "Herbario",    alt: "El Herbario de Moss: búsqueda global con filtros por tipo, tecnología y etiqueta" },
      ],
      pilares: [
        { nombre: "Rutas",          desc: "Recorridos de principio a fin: n8n, frontend, CSS y Tailwind, SQL y publicar un sitio." },
        { nombre: "El Laboratorio", desc: "Componentes y snippets con vista previa en vivo y código copiable." },
        { nombre: "El Manual",      desc: "Documentación, configuraciones y guías que cuesta reconstruir." },
        { nombre: "La Bitácora",    desc: "Blog técnico: aprendizajes, decisiones y errores." },
        { nombre: "Proyectos",      desc: "Cómo están hechos Moss, Moss Nexus y este portafolio." },
        { nombre: "El Herbario",    desc: "Búsqueda global, tolerante a erratas, sobre todo el contenido." },
      ],
    },
    en: {
      label: "Personal project",
      status: "Stable · v1.14.0",
      title: "Moss, my digital garden",
      intro: "What sets it apart from a blog are its 5 learning paths: ordered journeys that bring together guides, demos, challenges and articles to learn a topic end to end, from n8n to production or from CSS to real interfaces.",
      heading: "My technical “second brain”",
      p1: "A personal, visual library where I store, document, test and reuse snippets, components, guides and articles. Technical knowledge shouldn't stay buried: it should be easy to find, try out and connect.",
      p2: ["No database, no backend:", " all content lives in Markdown and TSX files versioned with Git, and search is indexed right in the browser."],
      live: "Open Moss live",
      github: "View code on GitHub",
      gallery: "Moss screenshots",
      view: "Show screenshot",
      capturas: [
        { label: "Home",       alt: "Moss home with search, links to its sections and content growth charts" },
        { label: "Paths",      alt: "Moss learning paths, each with its level, number of steps and estimated time" },
        { label: "Laboratory", alt: "Moss Laboratory: component demos with live preview" },
        { label: "Herbarium",  alt: "Moss Herbarium: global search with filters by type, technology and tag" },
      ],
      pilares: [
        { nombre: "Paths",          desc: "End-to-end journeys: n8n, frontend, CSS and Tailwind, SQL and shipping a site." },
        { nombre: "The Laboratory", desc: "Components and snippets with live preview and copyable code." },
        { nombre: "The Manual",     desc: "Documentation, configs and guides that are hard to rebuild." },
        { nombre: "The Logbook",    desc: "Technical blog: lessons, decisions and mistakes." },
        { nombre: "Projects",       desc: "How Moss, Moss Nexus and this portfolio are built." },
        { nombre: "The Herbarium",  desc: "Typo-tolerant global search across all content." },
      ],
    },
  },
}
