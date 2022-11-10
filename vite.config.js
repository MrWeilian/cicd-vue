import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3200/',
        changeOrigin: true,
        rewrite: path => {
          return path.replace(/^\/api/, '')
        }
      },
      '/jenkins': {
        target: 'http://localhost:3200',
        changeOrigin: true
      }
    }
  }
})
