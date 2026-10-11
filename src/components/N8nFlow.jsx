import { useEffect, useRef, useState } from "react"
import { TbWebhook, TbFileImport, TbFilter, TbFileSpreadsheet, TbCheck } from "react-icons/tb"
import { SiGoogledrive } from "react-icons/si"

// Recreación del flujo real de n8n (ver assets/flujo-n8n.webp). Al entrar en
// pantalla "se ejecuta" una vez: cada nodo se enciende en orden, la
// conexión se traza hasta el siguiente y aparece cuántos items pasan.
const NODES = [
  { id: "webhook", Icon: TbWebhook,         name: { es: "Recibir archivo desde la web", en: "Receive file from website" }, sub: "Webhook (POST)" },
  { id: "extract", Icon: TbFileImport,      name: { es: "Extracción de datos", en: "Data extraction" },                    sub: "Extract From CSV" },
  { id: "filter",  Icon: TbFilter,          name: { es: "Filtro", en: "Filter" },                                          sub: "Kept" },
  { id: "xlsx",    Icon: TbFileSpreadsheet, name: { es: "Convertir a XLSX", en: "Convert to XLSX" },                       sub: "Convert to XLSX" },
  { id: "drive",   Icon: SiGoogledrive,     name: { es: "Subir a Drive", en: "Upload to Drive" },                          sub: "upload: file" },
]

// Items que salen de cada nodo hacia el siguiente (igual que en la ejecución real)
const ITEMS = [1, 15, 4, 1]

const TEXT = {
  es: { label: "Ejecución del flujo de automatización en n8n", item: (n) => `${n} ${n === 1 ? "item" : "items"}`, done: "Ejecución completada" },
  en: { label: "n8n automation workflow run", item: (n) => `${n} ${n === 1 ? "item" : "items"}`, done: "Run completed" },
}

export default function N8nFlow({ lang }) {
  const ref = useRef(null)
  const [running, setRunning] = useState(false)
  const t = TEXT[lang]

  useEffect(() => {
    const el = ref.current
    if (!el) return
    // Con reduced-motion el CSS anula las transiciones: se ve el estado final
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setRunning(true)
        observer.disconnect()
      },
      { threshold: 0.45 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <figure className={`n8n-flow${running ? " is-running" : ""}`} ref={ref} aria-label={t.label}>
      <ol className="n8n-flow-track">
        {NODES.map(({ id, Icon, name, sub }, i) => (
          <li key={id} className="n8n-flow-step" style={{ "--i": i }}>
            <div className="n8n-node">
              <span className="n8n-node-box">
                <Icon aria-hidden="true" />
                <span className="n8n-node-check" aria-hidden="true"><TbCheck /></span>
              </span>
              <span className="n8n-node-name">{name[lang]}</span>
              <span className="n8n-node-sub" translate="no">{sub}</span>
            </div>

            {i < ITEMS.length && (
              <div className="n8n-edge" aria-hidden="true">
                <span className="n8n-edge-line" />
                <span className="n8n-edge-count">{t.item(ITEMS[i])}</span>
              </div>
            )}
          </li>
        ))}
      </ol>
      <figcaption className="n8n-flow-status">
        <span className="n8n-flow-dot" aria-hidden="true" /> {t.done}
      </figcaption>
    </figure>
  )
}
