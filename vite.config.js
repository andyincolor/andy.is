import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import { resolve } from 'path'

export default defineConfig({
  plugins: [tailwindcss()],
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index.html'),
        404: resolve(__dirname, '404.html'),
        tanium: resolve(__dirname, 'applying-to/tanium/index.html'),
        zoom: resolve(__dirname, 'applying-to/zoom/index.html'),
        housesitting: resolve(__dirname, 'housesitting/index.html'),
      },
    },
  },
})
