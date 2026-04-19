import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  base: '/shoutbox-react/',
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Shoutbox',
        short_name: 'Shoutbox',
        start_url: '/shoutbox-react/',
        display: 'standalone',
        theme_color: '#ffffff',
        icons: [
          {
            src: '/public/pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/public/pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    })
  ]
})