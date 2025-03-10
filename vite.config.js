import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:3000",  // ✅ Ensure this matches your backend
        changeOrigin: true,
        secure: false
      }
    }
  }
});
