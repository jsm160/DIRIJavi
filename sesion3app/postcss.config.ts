import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    require('@tailwindcss/postcss')(), // Usa el paquete correcto
    require('autoprefixer'),
  ],
});
