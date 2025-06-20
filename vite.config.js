import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Для Vercel краще залишити базовий шлях як '/'
  base: '/',
  plugins: [
    react(),
    tailwindcss()
  ],
  // Додаткові налаштування для SPA на Vercel
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})