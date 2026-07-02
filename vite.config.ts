import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { visualizer } from 'rollup-plugin-visualizer'


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true,
      gzipSize: true,
      brotliSize: true,
    }),
  ],
  resolve:{
    alias:{
      '@pages':'/src/pages/',
      '@components':'/src/components/',
      '@components/modules':'/src/components/modules/',
      '@components/templates':'/src/components/templates/',
      '@components/UI':'/src/components/UI/',
      '@layouts':'/src/layouts/',
      '@models':'/src/models/',
      '@providers':'/src/providers/',
      '@services':'/src/services/',
      '@store':'/src/store/',
      '@validation':'/src/validations/',
      '@utils':'/src/utils/',
    }
  },
  build:{
    target:'es2022',
    sourcemap:false,
    chunkSizeWarningLimit:800,
  rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('node_modules')) return
 
          if (
            id.includes('/react/') ||
            id.includes('/react-dom/') ||
            id.includes('/react-router-dom/')
          ) {
            return 'react-vendor'
          }
          if (id.includes('@radix-ui')) {
            return 'radix-vendor'
          }
          if (id.includes('/formik/') || id.includes('/yup/')) {
            return 'form-vendor'
          }
          if (
            id.includes('/sonner/') ||
            id.includes('/sweetalert2/') ||
            id.includes('/lucide-react/')
          ) {
            return 'ui-vendor'
          }
          if (id.includes('@tanstack/react-query')) {
            return 'query-vendor'
          }
        },
      },
    }
  }
})
