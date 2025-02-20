import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx}" // Asegúrate de incluir tus archivos de TypeScript
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
