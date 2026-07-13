import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' hace que los assets sean relativos, así funciona en GitHub Pages
// sin importar el nombre del repo (usuario.github.io/<repo>/)
export default defineConfig({
  plugins: [react()],
  base: './',
})
