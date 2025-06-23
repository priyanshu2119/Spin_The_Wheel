import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    chunkSizeWarningLimit: 1000, // Increase warning limit to 1000kB
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-custom-roulette')) return 'roulette';
            if (id.includes('firebase')) return 'firebase';
            if (id.includes('react-hot-toast')) return 'toast';
            if (id.includes('lucide-react')) return 'lucide';
            return 'vendor';
          }
        },
      },
    },
  },
});
