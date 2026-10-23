# Changelog

Todos los cambios visibles de este proyecto se registran aquí.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto usa [versionado semántico](https://semver.org/lang/es/).

## [Sin publicar]

## [1.1.0] - 2026-10-23

**Cierre de ciclo** tras Moss estable y Moss Nexus v1.0.0: proyectos al día, datos personales fuera del sitio, fase legal, accesibilidad AA y pruebas.

### Añadido
- Páginas de **privacidad** y **términos**, bilingües, como HTML estáticos generados en el build (responden 200 y se indexan). La privacidad describe solo lo que el sitio hace y cómo ejercer los derechos de la Ley 1581 escribiendo a `contacto@sergio-velandia.dev`.
- Enlaces a privacidad, términos y licencia en el pie, con aviso de que las marcas mencionadas pertenecen a sus titulares, y aviso de uso de datos junto al botón del formulario.
- Licencia **MIT** para el código (`LICENSE`) y **derechos reservados** para el contenido (`LICENSE-CONTENT`).
- Formulario: campo trampa para bots y tope de 3 envíos por hora.
- Estado y versión de cada proyecto destacado (Moss Nexus «Estable · v1.0.0», Moss «Estable · v1.14.0»).
- Imagen de vista previa propia de 1200×630 (`og-image.png`) y etiquetas `og:site_name`, `og:image:*`, `twitter:image:alt` y `og:locale:alternate`.
- Pruebas con Vitest (41): idiomas, cifras de los proyectos, orden de secciones, datos personales, metadatos, páginas legales, contraste y tope de envíos. El CI corre lint y pruebas antes de publicar.
- `ROADMAP.md` con los pendientes.

### Cambiado
- Orden de los proyectos: el videojuego (experiencia profesional), Moss Nexus, Moss y el flujo de n8n. El enlace «Proyectos» del menú lleva a Moss Nexus.
- **Moss Nexus:** 13 plantillas, 9 con el sello «Probado» en n8n 2.43.5 y 4 «Sin probar», con capturas nuevas del sitio en vivo.
- **Moss:** presenta sus 5 rutas de aprendizaje y sus seis secciones, con capturas nuevas.
- La descripción del sitio menciona Moss Nexus y Moss en los dos idiomas.
- El botón principal del hero lleva al contacto.
- Fuentes autoalojadas con @fontsource (solo los pesos que se usan): el sitio ya no contacta a Google Fonts.
- ESLint pasa a oxlint, como en Moss y Moss Nexus.

### Corregido
- El portafolio decía 14 plantillas de Moss Nexus y las daba por no probadas.
- Contraste AA: el texto atenuado, la etiqueta girada del hero, los placeholders y las etiquetas de la galería; anillo de foco visible en los campos del formulario.
- El enlace de correo ya no abre una pestaña vacía.
- Los estilos del menú fijo se aplicaban a cualquier `<nav>`.
- Los títulos de los certificados declaran su idioma real para los lectores de pantalla.
- Vite actualizado a 7.3.7: `npm audit` sin avisos.

### Eliminado
- La tarjeta de WhatsApp con el teléfono personal.
- El CV, que mostraba el correo personal y el teléfono.
- El componente `Experiencia.jsx`, que no se usaba, con sus estilos y su animación.

### Seguridad
- Una prueba falla si vuelve a aparecer un teléfono, un enlace `wa.me` o un correo fuera del dominio propio en el código o en el README.

## [1.0.1] - 2026-10-16

### Añadido
- `<link rel="canonical">` hacia `https://sergio-velandia.dev/mi-portafolio/` para que los buscadores no indexen la versión antigua de `github.io` como duplicada.
- `sitemap.xml` con la URL del dominio propio.
- `src/config/sites.js`: las URLs del portafolio, Moss y Moss Nexus en un solo lugar.

### Cambiado
- El sitio y sus proyectos hermanos (Moss y Moss Nexus) se enlazan en el dominio propio `sergio-velandia.dev`; las URLs de `github.io` redirigen solas.
- Metadatos de Open Graph y Twitter (`og:url`, `og:image`, `twitter:image`) y `homepage` de `package.json` apuntan al dominio propio.
- Correo de contacto visible: `contacto@sergio-velandia.dev` en español y `contact@sergio-velandia.dev` en inglés, en lugar del correo personal.
- README: enlaces en vivo, correo y notas de despliegue con el dominio propio.

> Las versiones anteriores a 1.0.1 no se registraron en este archivo; su detalle está en el historial de commits del repositorio.

[Sin publicar]: https://github.com/Sergio-Velandia/mi-portafolio/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/Sergio-Velandia/mi-portafolio/compare/v1.0.1...v1.1.0
[1.0.1]: https://github.com/Sergio-Velandia/mi-portafolio/releases/tag/v1.0.1
