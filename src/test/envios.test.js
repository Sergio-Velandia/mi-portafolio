import { describe, expect, it } from "vitest"
import { MAX_ENVIOS, STORAGE_KEY, VENTANA_MS, leerEnvios, puedeEnviar, recientes, registrarEnvio } from "../lib/envios"

function memoryStorage(initial = {}) {
  const data = { ...initial }
  return { getItem: (k) => data[k] ?? null, setItem: (k, v) => { data[k] = v }, data }
}

const AHORA = 1_800_000_000_000

describe("tope de envíos", () => {
  it(`permite ${MAX_ENVIOS} envíos por hora y bloquea el siguiente`, () => {
    const horas = [AHORA - 1000, AHORA - 2000]
    expect(puedeEnviar(horas, AHORA)).toBe(true)
    expect(puedeEnviar([...horas, AHORA - 3000], AHORA)).toBe(false)
  })

  it("olvida los envíos de hace más de una hora", () => {
    const viejas = Array.from({ length: 5 }, (_, i) => AHORA - VENTANA_MS - i)
    expect(recientes(viejas, AHORA)).toEqual([])
    expect(puedeEnviar(viejas, AHORA)).toBe(true)
  })

  it("ignora horas inválidas o del futuro", () => {
    expect(recientes([NaN, "x", AHORA + 5000, AHORA - 1], AHORA)).toEqual([AHORA - 1])
  })

  it("guarda solo las horas y sobrevive a datos corruptos o sin almacenamiento", () => {
    const storage = memoryStorage({ [STORAGE_KEY]: "{no es json" })
    expect(leerEnvios(storage)).toEqual([])
    expect(registrarEnvio(AHORA, storage)).toEqual([AHORA])
    expect(JSON.parse(storage.data[STORAGE_KEY])).toEqual([AHORA])
    expect(leerEnvios(undefined)).toEqual([])
    const broken = { getItem: () => { throw new Error("bloqueado") }, setItem: () => { throw new Error("bloqueado") } }
    expect(registrarEnvio(AHORA, broken)).toEqual([AHORA])
  })
})
