import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [
    react(),
    {
      name: 'full-reload',
      handleHotUpdate({ file, server }) {
        if (/\/(app|assets)\//.test(file) || file.endsWith('.html')) {
          server.ws.send({ type: 'full-reload' });
          return [];
        }
      },
    },
  ],
  server: {
    watch: {
      include: ['app/**', 'assets/**', '*.html'],
    },
  },
});
