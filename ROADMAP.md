# Hoja de ruta

Pendientes del portafolio, ordenados por prioridad. Lo hecho se registra en el [CHANGELOG](./CHANGELOG.md).

## Pendiente del dueño (fuera del código)

- **Repositorios que ya no son públicos.** `Test-N8N`, `YuGiOhApi` y `DigimonAPI-Firebase` responden 404, y el sitio aún los enlaza (`N8nProyecto.jsx` y `Proyectos.jsx`). Decidir: volverlos públicos o quitar esos botones. El README ya no los enlaza.
- **Verificar EmailJS.** En el panel: que `sergio-velandia.dev` esté en los dominios permitidos y que la plantilla del portafolio tenga como *To Email* `contacto@sergio-velandia.dev` (puede ser una plantilla antigua, distinta de la de Moss Nexus). Después, enviar un mensaje de prueba desde el sitio en vivo en español y en inglés.

- **Probar la pantalla de entrada en un teléfono real.** Se verificó en Chrome con tamaños de teléfono, no en un dispositivo.
- **Actualizar el CV.** No menciona Moss Taste.

## Prioridad media

- **Versiones de los proyectos en el sitio.** `src/data/*.js` muestra Moss Nexus v1.0.0, Moss v1.14.0 y Moss Taste v1.1.0; hoy son v1.1.0, v1.16.1 y v1.1.1. `proyectos.test.js` fija las versiones antiguas, así que pasa aunque ya no sean reales. Revisar también sus cifras.
- **Hallazgos de axe anteriores a la pantalla de entrada.** Los íconos flotantes (`svg-img-alt`, 5 nodos) y los bloques de código en móvil (`scrollable-region-focusable`, 2 nodos).
- **Página 404 propia** para `/mi-portafolio/*`. Hoy se ve la 404 genérica de GitHub; una propia, con enlace al inicio, en los dos idiomas.
- **Hero en pantallas bajas.** Con unos 630 px de alto, «Hola, bienvenido» se monta sobre «Portafolio 2026». No pasa a 900 px; revisar el posicionamiento del saludo.
- **Botón flotante «volver arriba»** se superpone al botón «Arriba» del pie al final de la página. Dejar uno solo.

## Prioridad baja

- **Versión en inglés indexable.** `?lang=en` funciona, pero comparte canonical y Open Graph con la versión en español. Opción: una página estática `/en/` con `hreflang` en ambas.
- **`public/avatar.png` sin usar.** Es una ilustración genérica, probablemente de terceros; retirarla.
- **Aviso de oxlint en `Header.jsx`** (`set-state-in-effect`): derivar ese estado en el render en lugar de fijarlo en un efecto.

## Decisiones tomadas (no son pendientes)

- Los certificados del SENA se publican tal como se emitieron, aunque muestran el número de documento.
- El historial de git no se reescribe: el teléfono y el CV anteriores siguen en commits antiguos.
