import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  build: {
    // Ensures that dependencies in node_modules are treated as external
    rollupOptions: {
      external: ['node_modules']
    }
  },
  plugins: [react()],
})
