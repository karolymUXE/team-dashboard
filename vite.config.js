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
          '@pages'     : path.resolve(new URL(import.meta.url).pathname, '../src/pages'),
          '@styles'    : path.resolve(new URL(import.meta.url).pathname, '../src/assets/styles'),
          '@assets'    : path.resolve(new URL(import.meta.url).pathname, './src/assets'),
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
    config.base = '/team-dashboard/'
  }

  return config
})
