import vue from '@vitejs/plugin-vue'
import windiCSS from 'vite-plugin-windicss'

/**
 * https://vitejs.dev/config/
 * @type {import('vite').UserConfig}
 */
export default {
  plugins: [vue(),windiCSS()],
  server: {
    host: '0.0.0.0',
    hmr: {
      port: 443,
    }
  }
}
