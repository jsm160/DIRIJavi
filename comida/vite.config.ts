import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { defineConfig as vitestDefineConfig } from 'vitest/config'; // Importar configuración de Vitest

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true, // habilitar los globals (como los métodos `describe`, `it`, etc.)
    environment: 'jsdom', // entorno para pruebas
    include: ['**/*.test.tsx', '**/*.test.ts'], // especifica qué archivos de prueba deben ejecutarse
  },
});
