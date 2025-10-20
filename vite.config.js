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
            // CRITICAL FIX: Bundle React, ReactDOM, router and Framer Motion together to prevent context issues
            if (id.includes('react') || id.includes('framer-motion')) {
              // Bundle React core with Framer Motion to share context
              return 'react-vendor'
            }
            // Lucide Icons - large icon set, separate chunk
            if (id.includes('lucide-react')) {
              return 'icons'
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
          
          // Blog posts - keep together but separate from main bundle
          if (id.includes('/src/pages/blogs/news/BlogPost') && !id.includes('/src/pages/blogs/news/BlogPost.jsx')) {
            return 'blog-posts'
          }
          
          // Blog layout components
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
    // Use esbuild minifier for safer ESM chunking in production
    minify: 'esbuild',
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
    include: ['react', 'react-dom', 'react-router-dom', 'react-helmet-async', 'framer-motion'],
    exclude: [],
    esbuildOptions: {
      preserveSymlinks: false
    }
  },
  // CRITICAL FIX: Ensure single instance of React to prevent createContext errors
  resolve: {
    dedupe: ['react', 'react-dom', 'framer-motion'],
    alias: {
      react: path.resolve(__dirname, 'node_modules/react'),
      'react-dom': path.resolve(__dirname, 'node_modules/react-dom'),
      'framer-motion': path.resolve(__dirname, 'node_modules/framer-motion')
    }
  }
})
