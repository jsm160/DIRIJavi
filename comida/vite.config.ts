import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
// https://vite.dev/cong/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
   return {
   base: env.VITE_APP_BASE_URL || '/', // Ajusta la base según la variable
   //base: '/', // La base para el entorno local
   //base: '/DIRIJavi/comida/', // Ruta base para GitHub Pages
   build: {
   outDir: 'dist',
   },
   plugins: [react()],
   }
  })