import { fileURLToPath, URL } from 'node:url'
import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

export default defineConfig({
  plugins: [vue(), vueJsx()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
      '@docs': fileURLToPath(new URL('./src/docs', import.meta.url)),
      '@lib': fileURLToPath(new URL('./src/lib', import.meta.url)),
    }
  }
  // 库模式
  // build: {
  //   lib: {
  //     entry: resolve(__dirname, 'src/lib/main.ts'),
  //     name: '',
  //     fileName: '',
  //   },
  //   rollupOptions: {
  //     external: ['vue'],
  //     output: {
  //       globals: {
  //         vue: 'Vue',
  //       },
  //     },
  //   },
  // }
})
