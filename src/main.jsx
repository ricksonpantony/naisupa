import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializePerformanceOptimizations } from './utils/performance.js'

// Initialize performance optimizations
try {
  initializePerformanceOptimizations()
} catch (err) {
  console.warn('Performance optimizations unavailable:', err)
}

// Get root element
const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Root element not found')
}

// Create root and render app
const root = ReactDOM.createRoot(rootElement)

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Hide loading overlay after React mounts (prevents FOUC)
requestAnimationFrame(() => {
  const overlay = document.getElementById('loading-overlay')
  if (overlay) {
    overlay.classList.add('hidden')
    setTimeout(() => overlay.remove(), 300)
  }
})
