import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

const page = (path) => fileURLToPath(new URL(path, import.meta.url));

export default defineConfig({
  plugins: [react()],
  base: '/mi-portafolio/',
  build: {
    // Cada página es un HTML real en el build: responde 200 en GitHub Pages
    // y los buscadores la indexan (no son rutas de una SPA).
    rollupOptions: {
      input: {
        main: page('./index.html'),
        privacidad: page('./privacidad/index.html'),
        terminos: page('./terminos/index.html'),
      },
    },
  },
  test: {
    environment: 'node',
  },
});
