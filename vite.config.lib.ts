import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), cssInjectedByJsPlugin()],
  build: {
    lib: {
      entry: 'src/lib/index.ts',
      name: 'FlitUI',
      fileName: 'lib/flit-ui',
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
