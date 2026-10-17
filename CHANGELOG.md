# Changelog

Todos los cambios visibles de este proyecto se registran aquí.

El formato sigue [Keep a Changelog](https://keepachangelog.com/es-ES/1.1.0/) y el proyecto usa [versionado semántico](https://semver.org/lang/es/).

## [Sin publicar]

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

[Sin publicar]: https://github.com/Sergio-Velandia/mi-portafolio/compare/v1.0.1...HEAD
[1.0.1]: https://github.com/Sergio-Velandia/mi-portafolio/releases/tag/v1.0.1
