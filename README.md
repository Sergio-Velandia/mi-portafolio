<div align="center">

# ✦ Sergio Velandia — Portafolio Personal

**Desarrollador Web Full Stack · Automatización con n8n & IA — Colombia 🇨🇴**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Idiomas](https://img.shields.io/badge/Idiomas-ES%20%7C%20EN-C9A96E?style=flat-square)](https://sergio-velandia.github.io/mi-portafolio/?lang=en)
[![EmailJS](https://img.shields.io/badge/EmailJS-integrado-C9A96E?style=flat-square)](https://www.emailjs.com/)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Actions-222?style=flat-square&logo=githubactions&logoColor=white)](https://github.com/Sergio-Velandia/mi-portafolio/actions)
[![License](https://img.shields.io/badge/Uso-Personal-lightgrey?style=flat-square)](#-licencia)

[🌐 Ver en vivo](https://sergio-velandia.github.io/mi-portafolio/) · [🇬🇧 English version](https://sergio-velandia.github.io/mi-portafolio/?lang=en) · [📬 Contacto](mailto:sergio.velandiar.z@gmail.com) · [📄 CV](./public/CV.pdf)

</div>

---

## ✨ Sobre el proyecto

Portafolio personal construido desde cero con **React + Vite**, pensado como una sola página fluida (*single-page*) que cuenta una historia: quién soy, qué sé hacer, y la prueba de que ya lo hice en producción. Sin templates genéricos: cada sección, animación y color fue decidido a propósito.

Incluye, entre otras cosas:
- **Bilingüe (español / inglés).** Español por defecto, botón **ES / EN** en el menú, idioma recordado en el navegador y enlace directo en inglés con `?lang=en` para reclutadores extranjeros.
- **Flujo de n8n animado.** Recreación del flujo real que "se ejecuta" al llegar a la sección: los nodos se encienden en orden, las conexiones se trazan y aparecen los items que pasan (1 → 15 → 4 → 1). La captura real queda debajo como prueba.
- **Entrada orquestada del hero.** El nombre sube línea a línea desde detrás de una máscara; es el único momento de animación "grande" del sitio.
- **Movimiento con propósito.** Solo los títulos de sección aparecen al hacer scroll (una sola vez), barra de progreso de lectura, respuesta al pulsar botones y contadores animados.
- **Menú móvil** accesible (`aria-expanded`, cierre con Escape, áreas táctiles de 44 px).
- **Formulario de contacto sin backend** vía EmailJS, con validación junto a cada campo y mensajes de estado anunciados a lectores de pantalla.
- **Galería de capturas** del proyecto Moss y certificaciones con PDFs descargables.
- **Typewriter** en el hero, cursor personalizado e íconos flotantes por categoría de skill.

---

## 🗂 Estructura del proyecto

```
mi-portafolio/
├── .github/workflows/
│   └── deploy.yml                # Build + publicación automática en cada push a main
├── public/
│   ├── favicon.ico / favicon-*.png / apple-touch-icon.png / android-chrome-*.png
│   ├── site.webmanifest
│   ├── avatar.png
│   ├── Preview.png               # Imagen para redes sociales (Open Graph)
│   ├── CV.pdf
│   └── *.pdf                     # Certificaciones descargables (IBM, Google, Postman, SENA...)
├── src/
│   ├── assets/
│   │   ├── flujo-n8n.webp        # Captura real del flujo de automatización
│   │   └── moss-*.webp           # Capturas del proyecto Moss
│   ├── components/
│   │   ├── Header.jsx            # Menú (con ES/EN y menú móvil) + hero
│   │   ├── SobreMi.jsx           # Presentación y enfoque profesional
│   │   ├── Certificaciones.jsx   # Certificados con PDF y fechas según el idioma
│   │   ├── Habilidades.jsx       # Skills por categoría, con iconografía real
│   │   ├── RobloxProyecto.jsx    # Experiencia profesional: videojuego multijugador en Roblox
│   │   ├── N8nProyecto.jsx       # Proyecto de automatización con n8n
│   │   ├── N8nFlow.jsx           # Diagrama animado del flujo de n8n
│   │   ├── MossProject.jsx       # Proyecto personal: Moss, jardín digital (galería)
│   │   ├── Proyectos.jsx         # Otros proyectos (YuGiOhApi, DigimonAPI+Firebase, este portafolio)
│   │   ├── Stats.jsx             # Estadísticas animadas con contadores
│   │   ├── Stackactual.jsx       # Stack del día a día + lo que estoy aprendiendo ahora
│   │   ├── Contacto.jsx          # Formulario con EmailJS y validación
│   │   ├── Footer.jsx
│   │   ├── FloatingIcons.jsx     # Íconos decorativos flotantes en el fondo
│   │   └── Experiencia.jsx       # Timeline de experiencia (disponible, actualmente sin montar)
│   ├── i18n.js                   # Contexto de idioma, useLang() y formato de fechas
│   ├── LanguageProvider.jsx      # Estado del idioma: URL, navegador, <html lang> y título
│   ├── App.jsx                   # Composición y orden de secciones
│   ├── App.css                   # Sistema de diseño completo (tokens, componentes, responsive)
│   ├── animation.js              # Reveal, stagger, hero intro, progreso de scroll, cursor
│   ├── extras.js                 # Typewriter, scroll-to-top, smooth scroll, toasts
│   ├── heroNetwork.js            # Red de partículas del hero (canvas)
│   ├── skillsFloat.js            # Lógica de los íconos flotantes por categoría
│   └── main.jsx
├── eslint.config.js
└── vite.config.js                # base: '/mi-portafolio/' para GitHub Pages
```

---

## 🧭 Recorrido de la página

El orden de las secciones en `App.jsx` está pensado como un argumento, no como una lista al azar:

1. **Sobre mí**: quién soy y qué busco.
2. **Certificaciones**: credenciales (IBM, Google, Postman, SENA) para generar confianza rápido.
3. **Habilidades**: el stack técnico completo, en un vistazo.
4. **Experiencia profesional (Roblox)**: el trabajo más grande, un videojuego multijugador de 12 niveles.
5. **Flujo con n8n**: automatización de datos, con el flujo animado y la captura real.
6. **Moss**: mi "segundo cerebro" técnico, con galería de capturas.
7. **Otros proyectos**: YuGiOhApi, DigimonAPI + Firebase y este mismo portafolio.
8. **Stats** y **Stack actual**: números y lo que estoy aprendiendo ahora mismo.
9. **Contacto**: formulario directo, sin backend propio.

> El componente `Experiencia.jsx` (timeline cronológico) ya está construido pero actualmente no se monta en `App.jsx`; queda disponible para reactivarse cuando se necesite.

---

## 🚀 Proyectos destacados

### 🎮 Videojuego Multijugador en Roblox
Desarrollo completo de una experiencia de **12 niveles** jugables en Roblox Studio (Lua/Luau), bajo entregas incrementales para un cliente real. Incluye:
- Pathfinding inteligente de NPCs con detección de obstáculos.
- Sistema de fases con temporizadores sincronizados en servidor.
- Ritual multijugador cooperativo de 7 pasos con estado compartido vía `RemoteEvent`.
- Rigging y animaciones avanzadas, físicas interactivas y control anti-exploits.

### ⚙️ Automatización de Procesamiento de Datos (n8n)
Flujo que reemplaza la carga manual de datos por un pipeline automatizado: recibe archivos CSV desde un webhook, valida y filtra la información, la convierte a XLSX y la sube directo a Google Drive.
[Ver repo](https://github.com/Sergio-Velandia/Test-N8N)

### 🌱 Moss: jardín digital
Mi "segundo cerebro" técnico: una biblioteca visual de snippets, guías y artículos organizada en cuatro pilares (Laboratorio, Manual, Bitácora y Herbario), **sin base de datos ni backend**.
[Ver en vivo](https://sergio-velandia.github.io/Moss/) · [Ver repo](https://github.com/Sergio-Velandia/Moss)

### 🃏 YuGiOhApi
App interactiva que consume una API externa para explorar la base de datos de cartas Yu-Gi-Oh!.
[Ver repo](https://github.com/Sergio-Velandia/YuGiOhApi)

### 🔥 DigimonAPI + Firebase
App multiplataforma (Capacitor) con autenticación, lista para compilar como APK en Android Studio.
[Ver repo](https://github.com/Sergio-Velandia/DigimonAPI-Firebase)

---

## ⚡ Tech Stack

### Frontend
| Tecnología | Uso |
|---|---|
| **React 19** | Componentes y lógica de UI |
| **Vite 7** | Bundler y dev server |
| **CSS Variables** | Sistema de diseño con tokens de color, tipografía y movimiento |
| **Google Fonts** | Syne (display) + DM Sans (body) |
| **React Icons** | Íconos de contacto, skills, nodos de n8n y UI |
| **Context API** | Idioma español / inglés sin librerías externas |

### Integraciones
| Servicio | Uso |
|---|---|
| **EmailJS** | Formulario de contacto sin backend |
| **GitHub Pages** | Hosting estático gratuito |
| **GitHub Actions** | Deploy automático en cada push a `main` |

### Herramientas de desarrollo
| Herramienta | Uso |
|---|---|
| **VS Code** | Editor principal |
| **Git + GitHub** | Control de versiones |
| **ESLint** | Revisión de código (`npm run lint`) |
| **n8n** | Automatizaciones en producción |

---

## 🎨 Sistema de diseño

Todos los valores viven como variables en `src/App.css`:

```css
--bg-base:     #0a0a09   /* fondo principal: negro grafito cálido */
--bg-raised:   #131311   /* secciones alternas */
--bg-card:     #101009   /* tarjetas */
--accent:      #c9a96e   /* acento único: oro mate */
--status-live: #3ad389   /* estado "ok" (flujo de n8n, envíos correctos) */
```

**Tipografía:** `Syne` para títulos y display; `DM Sans` para el cuerpo de texto. Los títulos usan `clamp()` para escalar sin desbordarse en móvil y `text-wrap: balance` para cortes de línea equilibrados.

**Movimiento:** un solo vocabulario de easing y duraciones (`--ease-out`, `--dur-fast`, `--dur-base`, `--dur-slow`). Se animan solo `transform` y `opacity`, nada se repite al volver a hacer scroll y todo respeta `prefers-reduced-motion`.

---

## 🌍 Idiomas

- El sitio carga en **español**. El botón **ES / EN** del menú cambia todo el contenido, el `lang` del documento, el título de la pestaña y la descripción.
- La elección se guarda en el navegador y se refleja en la URL: [`?lang=en`](https://sergio-velandia.github.io/mi-portafolio/?lang=en) abre directamente la versión en inglés.
- Cada componente guarda sus textos en un objeto `TEXT = { es: {...}, en: {...} }` y elige el suyo con `useLang()`:

```jsx
import { useLang } from "../i18n"

const TEXT = {
  es: { title: "Otros proyectos" },
  en: { title: "Other projects" },
}

export default function Proyectos() {
  const { lang } = useLang()
  return <h2 className="section-title">{TEXT[lang].title}</h2>
}
```

> ⚠️ Las `key` de las listas deben ser identificadores fijos (`id`, `tech`...), nunca el texto traducido. Si la `key` cambia con el idioma, React vuelve a crear el elemento y se pierden las clases de animación que añade `animation.js`, así que quedaría invisible.

---

## ♿ Accesibilidad y rendimiento

- Foco visible con `:focus-visible`, menú y formulario navegables con teclado.
- Íconos decorativos ocultos a lectores de pantalla (`aria-hidden`); botones de solo ícono con `aria-label`.
- Errores del formulario junto a cada campo (`aria-describedby`) y foco en el primer campo inválido.
- Sin desplazamiento horizontal en móvil (comprobado a 375 px) e inputs de 16 px para evitar el zoom de iOS.
- Imágenes en **WebP** con dimensiones explícitas y carga diferida; fuentes con `preconnect`.

---

## 🚀 Correr localmente

```bash
# 1. Clona el repositorio
git clone https://github.com/Sergio-Velandia/mi-portafolio.git
cd mi-portafolio

# 2. Instala dependencias
npm install

# 3. Corre el servidor de desarrollo
npm run dev
```

Abre [http://localhost:5173/mi-portafolio/](http://localhost:5173/mi-portafolio/) en tu navegador.

### Otros comandos disponibles

```bash
npm run build     # Genera el build de producción en /dist
npm run preview   # Sirve localmente el build de producción
npm run lint      # Revisa el código con ESLint
npm run deploy    # Publicación manual en GitHub Pages (normalmente no hace falta)
```

---

## ☁️ Despliegue

El despliegue es **automático**: cada push a `main` ejecuta `.github/workflows/deploy.yml`, que instala dependencias, genera el build y publica `dist/` en la rama `gh-pages`. También se puede lanzar a mano desde la pestaña **Actions** (*Run workflow*).

---

## 📬 Configurar el formulario de contacto

El formulario usa [EmailJS](https://www.emailjs.com/) (plan gratuito: 200 emails/mes). Para activarlo:

1. Crea una cuenta en [emailjs.com](https://www.emailjs.com/).
2. Conecta tu cuenta de Gmail como servicio.
3. Crea un template con las variables `{{from_name}}`, `{{reply_to}}` y `{{message}}`.
4. Reemplaza las constantes en `src/components/Contacto.jsx`:

```js
const EMAILJS_SERVICE  = "service_xxxxxxx"
const EMAILJS_TEMPLATE = "template_xxxxxxx"
const EMAILJS_KEY      = "xxxxxxxxxxxxxxxxx"
```

> ⚠️ Estas claves quedan visibles en el bundle del cliente (es normal en EmailJS). Restringe el servicio a tu dominio desde el panel de EmailJS y nunca subas credenciales de otros servicios (bases de datos, APIs privadas, etc.) directamente al código.

---

## 📄 Licencia

Este proyecto es de uso personal. Puedes inspirarte en el código, pero no redistribuirlo como propio.

---

<div align="center">
  Hecho con mucho café ☕ por <strong>Sergio Velandia</strong> — Colombia 🇨🇴
</div>
