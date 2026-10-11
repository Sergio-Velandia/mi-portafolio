<div align="center">

# ✦ Sergio Velandia — Portafolio Personal

**Desarrollador Web Full Stack · Automatización con n8n & IA — Colombia 🇨🇴**

[![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?style=flat-square&logo=vite&logoColor=white)](https://vitejs.dev/)
[![EmailJS](https://img.shields.io/badge/EmailJS-integrado-C9A96E?style=flat-square)](https://www.emailjs.com/)
[![GitHub Pages](https://img.shields.io/badge/Deploy-GitHub%20Pages-222?style=flat-square&logo=github)](https://sergio-velandia.github.io/mi-portafolio/)
[![License](https://img.shields.io/badge/Uso-Personal-lightgrey?style=flat-square)](#-licencia)

[🌐 Ver en vivo](https://sergio-velandia.github.io/mi-portafolio/) · [📬 Contacto](mailto:sergio.velandiar.z@gmail.com) · [📄 CV](./public/CV.pdf)

</div>

---

## 📸 Preview

![Preview del portafolio](./public/Preview.png)

---

## ✨ Sobre el proyecto

Portafolio personal construido desde cero con **React + Vite**, pensado como una sola página fluida (*single-page*) que cuenta una historia: quién soy, qué sé hacer, y la prueba de que ya lo hice en producción. Sin templates genéricos — cada sección, animación y color fue decidido a propósito.

Incluye, entre otras cosas:
- **Reveal animations** con `IntersectionObserver` al hacer scroll (sin librerías externas).
- **Typewriter** animado en el hero que rota entre distintos roles/skills.
- Cursor personalizado, botón de scroll-to-top y toasts propios (`extras.js`).
- Un sistema de íconos flotantes decorativos por categoría de skill (`skillsFloat.js`).
- Formulario de contacto **100% funcional sin backend**, vía EmailJS.
- Sección de certificaciones con PDFs descargables directamente desde el repo.

---

## 🗂 Estructura del proyecto

```
mi-portafolio/
├── public/
│   ├── favicon.ico / apple-touch-icon.png / android-chrome-*.png
│   ├── site.webmanifest
│   ├── avatar.png
│   ├── Preview.png
│   ├── CV.pdf
│   └── *.pdf                    # Certificaciones descargables (IBM, Google, Postman, SENA...)
└── src/
    ├── assets/
    │   └── FlujoN8N.png          # Captura del flujo de automatización
    ├── components/
    │   ├── FloatingIcons.jsx     # Íconos decorativos flotantes en el fondo
    │   ├── Header.jsx            # Hero con typewriter y cursor personalizado
    │   ├── SobreMi.jsx           # Sobre mí — presentación y enfoque profesional
    │   ├── Certificaciones.jsx   # Certificados (IBM, Google, Postman, SENA...) con PDF
    │   ├── Habilidades.jsx       # Grid de skills por categoría, con iconografía real
    │   ├── RobloxProyecto.jsx    # Proyecto profesional: videojuego multijugador en Roblox
    │   ├── N8nProyecto.jsx       # Proyecto de automatización de datos con n8n
    │   ├── Proyectos.jsx         # Otros proyectos (YuGiOhApi, DigimonAPI+Firebase, este portafolio)
    │   ├── Experiencia.jsx       # Timeline de experiencia (disponible, actualmente sin montar)
    │   ├── Stats.jsx             # Estadísticas animadas con contadores
    │   ├── Stackactual.jsx       # Stack del día a día + lo que estoy aprendiendo ahora
    │   ├── Contacto.jsx          # Formulario funcional con EmailJS
    │   └── Footer.jsx
    ├── App.jsx                   # Composición y orden de secciones
    ├── App.css                   # Sistema de diseño completo (variables, animaciones)
    ├── index.css
    ├── animation.js               # IntersectionObserver para reveal / stagger al hacer scroll
    ├── extras.js                  # Cursor personalizado, scroll-to-top, toasts
    ├── heroNetwork.js             # Efecto de red/partículas del hero
    ├── skillsFloat.js             # Lógica de los íconos flotantes por categoría
    └── main.jsx
```

---

## 🧭 Recorrido de la página

El orden de las secciones en `App.jsx` está pensado como un argumento, no como una lista al azar:

1. **Sobre mí** — quién soy y qué busco.
2. **Certificaciones** — credenciales (IBM, Google, Postman, SENA) para generar confianza rápido.
3. **Habilidades** — el stack técnico completo, en un vistazo.
4. **Proyecto Roblox** — el trabajo profesional más grande: un videojuego multijugador de 12 niveles.
5. **Proyecto n8n** — automatización de datos con IA, procesamiento de CSV → XLSX vía webhook.
6. **Otros proyectos** — YuGiOhApi, DigimonAPI + Firebase, y este mismo portafolio.
7. **Stats** y **Stack actual** — números y lo que estoy aprendiendo ahora mismo.
8. **Contacto** — formulario directo, sin backend propio.

> El componente `Experiencia.jsx` (timeline cronológico) ya está construido pero actualmente no se monta en `App.jsx` — queda disponible para reactivarse cuando se necesite.

---

## 🚀 Proyectos destacados

### 🎮 Videojuego Multijugador en Roblox
Desarrollo completo de una experiencia de **12 niveles** jugables en Roblox Studio (Lua/Luau), bajo entregas incrementales para un cliente real. Incluye:
- Pathfinding inteligente de NPCs con detección de obstáculos.
- Sistema de fases con temporizadores sincronizados en servidor.
- Ritual multijugador cooperativo de 7 pasos con estado compartido vía `RemoteEvent`.
- Rigging y animaciones avanzadas, físicas interactivas y control anti-exploits.

### ⚙️ Automatización de Procesamiento de Datos (n8n)
Flujo que reemplaza la carga manual de datos por un pipeline automatizado: recibe archivos CSV desde un WebHook, valida y filtra la información, la convierte a XLSX y la sube directo a Google Drive.
→ [Ver repo](https://github.com/Sergio-Velandia/Test-N8N)

### 🃏 YuGiOhApi
App interactiva que consume una API externa para explorar la base de datos de cartas Yu-Gi-Oh!.
→ [Ver repo](https://github.com/Sergio-Velandia/YuGiOhApi)

### 🔥 DigimonAPI + Firebase
App multiplataforma (Capacitor) con autenticación, lista para compilar como APK en Android Studio.
→ [Ver repo](https://github.com/Sergio-Velandia/DigimonAPI-Firebase)

---

## ⚡ Tech Stack

### Frontend
| Tecnología | Uso |
|---|---|
| **React 19** | Componentes y lógica de UI |
| **Vite 7** | Bundler y dev server |
| **CSS Variables** | Sistema de diseño con paleta 70-20-10 |
| **Google Fonts** | Syne (display) + DM Sans (body) |
| **React Icons** | Íconos de contacto, skills y UI |

### Integraciones
| Servicio | Uso |
|---|---|
| **EmailJS** | Formulario de contacto sin backend |
| **GitHub Pages** | Deploy estático gratuito |

### Herramientas de desarrollo
| Herramienta | Uso |
|---|---|
| **VS Code** | Editor principal |
| **Git + GitHub** | Control de versiones |
| **n8n** | Automatizaciones en producción |
| **gh-pages** | Deploy automatizado a GitHub Pages |

---

## 🎨 Sistema de diseño

El portafolio usa una paleta **70-20-10** definida en variables CSS:

```css
--bg-base:      #0d0f14   /* 70% — negro grafito cálido  */
--bg-surface:   #12263F   /* 20% — azul medianoche       */
--accent:       #C9A96E   /* 10% — oro bronce mate       */
```

**Tipografía:** `Syne` para títulos y display — `DM Sans` para cuerpo de texto.

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

Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

### Otros comandos disponibles

```bash
npm run build     # Genera el build de producción en /dist
npm run preview   # Sirve localmente el build de producción
npm run deploy    # Publica /dist en GitHub Pages (usa gh-pages)
```

---

## 📬 Configurar el formulario de contacto

El formulario usa [EmailJS](https://www.emailjs.com/) (plan gratuito — 200 emails/mes). Para activarlo:

1. Crea una cuenta en [emailjs.com](https://www.emailjs.com/).
2. Conecta tu cuenta de Gmail como servicio.
3. Crea un template con las variables `{{from_name}}`, `{{reply_to}}` y `{{message}}`.
4. Reemplaza las constantes en `src/components/Contacto.jsx`:

```js
const EMAILJS_SERVICE  = "service_xxxxxxx"
const EMAILJS_TEMPLATE = "template_xxxxxxx"
const EMAILJS_KEY      = "xxxxxxxxxxxxxxxxx"
```

> ⚠️ Estas claves quedan visibles en el bundle del cliente (es normal en EmailJS), pero nunca subas credenciales de otros servicios (bases de datos, APIs privadas, etc.) directamente al código.

---

## 📄 Licencia

Este proyecto es de uso personal. Puedes inspirarte en el código, pero no redistribuirlo como propio.

---

<div align="center">
  Hecho con mucho café ☕ por <strong>Sergio Velandia</strong> — Colombia 🇨🇴
</div>
