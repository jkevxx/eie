import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

import { compression } from 'vite-plugin-compression2';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    compression({
      threshold: 10240,
      algorithm: 'gzip',
    }),
  ],
  css: {
    preprocessorOptions: {
      less: {
        math: 'parens-division',
      },
      scss: {
        api: 'modern-compiler', // or "modern", "legacy"
        importers: [
          // ...
        ],
      },
    },
  },
});
