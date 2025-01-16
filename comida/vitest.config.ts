// vitest.config.ts o vite.config.ts
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true, // Esto habilita las funciones globales como `describe`, `it`, `expect`
    environment: 'jsdom', // Para simular el navegador
    setupFiles: ['./src/setupTests.ts'], // Ruta al archivo setupTests.ts
  },
})
