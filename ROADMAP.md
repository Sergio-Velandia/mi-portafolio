# Hoja de ruta

Pendientes del portafolio, ordenados por prioridad. Lo hecho se registra en el [CHANGELOG](./CHANGELOG.md).

## Pendiente del dueño (fuera del código)

- **Verificar EmailJS.** En el panel: que `sergio-velandia.dev` esté en los dominios permitidos y que la plantilla del portafolio tenga como *To Email* `contacto@sergio-velandia.dev` (puede ser una plantilla antigua, distinta de la de Moss Nexus). Después, enviar un mensaje de prueba desde el sitio en vivo en español y en inglés.

## Prioridad media

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
