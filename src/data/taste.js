import { SITES } from "../config/sites"
import TasteInicio from "../assets/taste-inicio.webp"
import TasteReceta from "../assets/taste-receta.webp"
import TasteCocina from "../assets/taste-modo-cocina.webp"
import TasteAcceso from "../assets/taste-acceso.webp"

// Cifras de Moss Taste v1.1.0 (ver su CHANGELOG): 6 recetas, 390 pruebas de la
// aplicación y 63 de las reglas de Firestore. Es un proyecto familiar: nada de
// nombres de familiares ni datos personales.
export const TASTE = {
  id: "moss-taste",
  variant: "taste",
  images: [TasteInicio, TasteReceta, TasteCocina, TasteAcceso],
  width: 1600,
  height: 812,
  stack: ["React 19", "TypeScript", "Vite", "Tailwind CSS 4", "React Router", "Motion", "Firebase", "Vitest"],
  liveUrl: SITES.mossTaste,
  repoUrl: "https://github.com/Sergio-Velandia/Moss-Taste",
  text: {
    es: {
      label: "Proyecto personal",
      status: "Estable · v1.1.0",
      title: "Moss Taste, el recetario de la familia",
      intro: "Un proyecto aparte de Moss y Moss Nexus: comparte el apellido, no el tema. Reemplaza los Excel y los cuadernos de la casa.",
      heading: "Cuánto comprar y cuánto cuesta, para las porciones que vayas a servir",
      p1: "Eliges las porciones y la receta recalcula cantidades y costo en pesos: convierte tazas y libras, suma lo que se pierde al pelar, y muestra siempre la fecha del precio. Si un ingrediente no tiene precio, lo dice en vez de contarlo como cero.",
      p2: ["Probado a fondo:", " 6 recetas, 390 pruebas de la aplicación y 63 de las reglas de Firestore."],
      live: "Ver Moss Taste en vivo",
      github: "Ver código en GitHub",
      gallery: "Capturas de Moss Taste",
      view: "Ver captura",
      capturas: [
        { label: "Inicio",      alt: "Inicio de Moss Taste con recetas destacadas; las ilustraciones de los platos son generadas con IA y así se etiquetan" },
        { label: "Receta",      alt: "Ficha del ajiaco santafereño: selector de porciones, ingredientes con cantidad y precio, y pasos. Su ilustración es generada con IA" },
        { label: "Modo cocina", alt: "Modo cocina de Moss Taste: lo que se deja listo antes de empezar y los ingredientes para las porciones elegidas" },
        { label: "Acceso",      alt: "Formulario vacío para entrar a una cuenta de Moss Taste, que guarda favoritos, notas y recetas propias" },
      ],
      pilares: [
        { nombre: "Modo cocina",      desc: "Un paso a la vez, con temporizadores que suenan y pantalla que no se apaga." },
        { nombre: "Lista de compras", desc: "Junta varias recetas y separa lo que cuestan de lo que se paga hoy en caja." },
        { nombre: "Cuentas privadas", desc: "Favoritos, notas y recetas propias, con reglas de seguridad probadas." },
      ],
    },
    en: {
      label: "Personal project",
      status: "Stable · v1.1.0",
      title: "Moss Taste, the family cookbook",
      intro: "A separate project from Moss and Moss Nexus: it shares the family name, not the subject. It replaces the household's spreadsheets and notebooks.",
      heading: "How much to buy and what it costs, for the servings you plan to make",
      p1: "Pick the servings and the recipe recalculates quantities and cost in Colombian pesos: it converts cups and pounds, adds what is lost when peeling, and always shows the price date. If an ingredient has no price, it says so instead of counting it as zero.",
      p2: ["Thoroughly tested:", " 6 recipes, 390 application tests and 63 Firestore rule tests."],
      live: "Open Moss Taste live",
      github: "View code on GitHub",
      gallery: "Moss Taste screenshots",
      view: "Show screenshot",
      capturas: [
        { label: "Home",         alt: "Moss Taste home with featured recipes; the dish illustrations are AI-generated and labeled as such" },
        { label: "Recipe",       alt: "Ajiaco santafereño recipe page: servings selector, ingredients with quantity and price, and steps. Its illustration is AI-generated" },
        { label: "Cooking mode", alt: "Moss Taste cooking mode: what to prepare before starting and the ingredients for the chosen servings" },
        { label: "Sign-in",      alt: "Empty sign-in form for a Moss Taste account, which stores favorites, notes and personal recipes" },
      ],
      pilares: [
        { nombre: "Cooking mode",     desc: "One step at a time, with timers that ring and a screen that stays on." },
        { nombre: "Shopping list",    desc: "Combines several recipes and separates what they cost from what you pay at the register today." },
        { nombre: "Private accounts", desc: "Favorites, notes and personal recipes, with tested security rules." },
      ],
    },
  },
}
