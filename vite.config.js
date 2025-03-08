import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build',  // Sortie du build dans le dossier 'build'
  },
  base: '/PTF/',  // Définit la base pour GitHub Pages
})
