import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/ibis-studio/',
  plugins: [react()],
  build: {
    outDir: '../docs',
    emptyOutDir: true,
  },
})
