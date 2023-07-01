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
          '@routes'    : path.resolve(new URL(import.meta.url).pathname, '../src/routes'),
          '@styles'    : path.resolve(new URL(import.meta.url).pathname, '../styles'),
          '@assets'    : path.resolve(new URL(import.meta.url).pathname, '../src/assets'),
          '@components': path.resolve(new URL(import.meta.url).pathname, '../src/components')
      },
      extensions: ['.js', '.jsx', 'scss'],
    },
  }
  if (command !== 'serve') {
    config.base = '/team-dashboard/'
  }

  return config
})
