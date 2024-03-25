import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      name: 'FlitUI',
      fileName: 'flit-ui',
      formats: ['umd']
    },
    rollupOptions: {
      external: ['vue'],
      input: 'src/lib/index.ts',
      output: {
        globals: {
          vue: 'Vue'
        }
      }
    }
  }
})
