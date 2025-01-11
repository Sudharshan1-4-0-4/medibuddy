import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',  // Allows connections from any network interface
    port: 3000,        // You can set this to 3000 or any other available port
  }
})
