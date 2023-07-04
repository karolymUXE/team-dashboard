import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sass from 'sass'
import path from "path"

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    server: {
      port: 3000,
    },
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass,
        },
      }
    },
    resolve: {
      alias     : {
          '@'          : path.resolve(new URL(import.meta.url).pathname, './src'),
          '@talent'    : path.resolve(new URL(import.meta.url).pathname, '../src/modules/talent'),
          '@styles'    : path.resolve(new URL(import.meta.url).pathname, '../src/assets/styles'),
          '@modules'   : path.resolve(new URL(import.meta.url).pathname, '../src/modules'),
          '@develop'   : path.resolve(new URL(import.meta.url).pathname, '../src/modules/develop'),
          '@perform'   : path.resolve(new URL(import.meta.url).pathname, '../src/modules/perform'),
          '@reward'   : path.resolve(new URL(import.meta.url).pathname, '../src/modules/reward'),
          '@engagement': path.resolve(new URL(import.meta.url).pathname, '../src/modules/engagement'),
          '@components': path.resolve(new URL(import.meta.url).pathname, '../src/components')
      },
      extensions: ['.js', '.jsx', 'scss'],
    },
    define: {
      'process.env': {}
    },
    base: './',
    baseUrl: './'
  }
  if (command !== 'serve') {
    config.base = '/'
  }

  return config
})
