import path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './',
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    outDir: path.resolve(__dirname, '../assets/spline'),
    emptyOutDir: true,
    rollupOptions: {
      input: path.resolve(__dirname, 'src/hero/main.tsx'),
      output: {
        entryFileNames: 'hero-spline.js',
        chunkFileNames: 'chunks/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.css')) return 'hero-spline.css'
          return 'chunks/[name]-[hash][extname]'
        },
      },
    },
  },
  optimizeDeps: {
    include: ['@splinetool/runtime', '@splinetool/react-spline'],
  },
})
