import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'
import { fileURLToPath } from 'url'
import prerenderPlugin from './vite-plugin-prerender.js'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [
    react(),
    prerenderPlugin() // Prerender blog posts for SEO
  ],
  server: {
    hmr: {
      overlay: true
    }
  },
  build: {
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: (id) => {
          if (id.includes('node_modules')) {
            // CRITICAL FIX: Keep React core together to avoid createContext issues
            if (id.includes('react') && !id.includes('react-router-dom') && !id.includes('react-helmet')) {
              return 'react-core'
            }
            // Keep React Router separate but ensure it uses the same React instance
            if (id.includes('react-router-dom')) {
              return 'react-router'
            }
            // Framer Motion - heavy animation library, separate chunk
            if (id.includes('framer-motion')) {
              return 'framer'
            }
            // Lucide Icons - large icon set, separate chunk
            if (id.includes('lucide-react')) {
              return 'icons'
            }
            // Helmet for SEO
            if (id.includes('react-helmet-async')) {
              return 'helmet'
            }
            // Other vendor libraries
            return 'vendor'
          }
          
          // Split critical components from non-critical
          if (id.includes('/src/components/Navigation.jsx') || 
              id.includes('/src/components/Footer.jsx') ||
              id.includes('/src/components/SeoHead.jsx')) {
            return 'core-ui'
          }
          
          // Lazy-loaded components (chat, animations, etc.)
          if (id.includes('/src/components/FloatingChat.jsx') ||
              id.includes('/src/components/VideoHighlights.jsx') ||
              id.includes('/src/components/MobileDock.jsx')) {
            return 'interactive'
          }
          
          // Blog-related components
          if (id.includes('/src/components/Blog') || 
              id.includes('/src/pages/blogs/')) {
            return 'blog'
          }
          
          // Other components
          if (id.includes('/src/components/')) {
            return 'components'
          }
          
          // Pages are automatically code-split by React.lazy()
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name.split('.')
          const ext = info[info.length - 1]
          if (/png|jpe?g|svg|gif|tiff|bmp|ico|webp|avif/i.test(ext)) {
            return `assets/images/[name]-[hash][extname]`
          } else if (/woff2?|ttf|otf|eot/i.test(ext)) {
            return `assets/fonts/[name]-[hash][extname]`
          }
          return `assets/[ext]/[name]-[hash][extname]`
        }
      }
    },
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        pure_funcs: ['console.log', 'console.info', 'console.debug', 'console.warn'],
        passes: 3,
        ecma: 2015
      },
      mangle: {
        safari10: true
      },
      format: {
        comments: false,
        ecma: 2015
      }
    },
    chunkSizeWarningLimit: 800,
    sourcemap: true, // Enable source maps for production debugging
    cssCodeSplit: true,
    assetsInlineLimit: 4096,
    target: ['es2015', 'edge88', 'firefox78', 'chrome87', 'safari14'],
    reportCompressedSize: false
  },
  css: {
    devSourcemap: false
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async'],
    exclude: []
  },
  // CRITICAL FIX: Ensure single instance of React to prevent createContext errors
  resolve: {
    dedupe: ['react', 'react-dom'],
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom')
    }
  }
})
