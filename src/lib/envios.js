// ============================================================
// envios.js — Tope de envíos del formulario de contacto
// ============================================================
// Sin backend no hay forma de frenar a un bot en el servidor; esto
// frena el abuso desde la interfaz: como mucho MAX_ENVIOS mensajes
// por VENTANA_MS en este navegador. Solo se guarda la hora de cada
// envío (en localStorage), nunca el contenido del mensaje.
// ============================================================

export const MAX_ENVIOS = 3
export const VENTANA_MS = 60 * 60 * 1000 // 1 hora
export const STORAGE_KEY = "portfolio-contact-sends"

// Envíos que siguen dentro de la ventana
export function recientes(horas, ahora, ventana = VENTANA_MS) {
  return horas.filter((t) => Number.isFinite(t) && ahora - t < ventana && t <= ahora)
}

export function puedeEnviar(horas, ahora, max = MAX_ENVIOS, ventana = VENTANA_MS) {
  return recientes(horas, ahora, ventana).length < max
}

export function leerEnvios(storage = globalThis.localStorage) {
  try {
    const value = JSON.parse(storage?.getItem(STORAGE_KEY) ?? "[]")
    return Array.isArray(value) ? value : []
  } catch {
    return [] // sin almacenamiento o con datos corruptos: se empieza de cero
  }
}

export function registrarEnvio(ahora, storage = globalThis.localStorage) {
  const horas = [...recientes(leerEnvios(storage), ahora), ahora]
  try {
    storage?.setItem(STORAGE_KEY, JSON.stringify(horas))
  } catch {
    // modo privado sin almacenamiento: el tope solo dura esta visita
  }
  return horas
}
