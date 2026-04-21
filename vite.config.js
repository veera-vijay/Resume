import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: './',  // இதை './' ஆக மாத்துங்க
  server: {
    port: 3000
  }
})