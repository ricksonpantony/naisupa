import { useEffect } from 'react'

/**
 * Web Vitals Monitor Component
 * Tracks and reports Core Web Vitals to console (can be extended to analytics)
 */

const WebVitalsMonitor = () => {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== 'production') {
      return
    }

    // Performance Observer for LCP (Largest Contentful Paint)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log('LCP:', lastEntry.renderTime || lastEntry.loadTime)
      
      // Send to analytics (uncomment when ready)
      // sendToAnalytics({ name: 'LCP', value: lastEntry.renderTime || lastEntry.loadTime })
    })

    try {
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true })
    } catch (e) {
      // LCP not supported
    }

    // Performance Observer for FID (First Input Delay)
    const fidObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      entries.forEach((entry) => {
        const fid = entry.processingStart - entry.startTime
        console.log('FID:', fid)
        
        // Send to analytics
        // sendToAnalytics({ name: 'FID', value: fid })
      })
    })

    try {
      fidObserver.observe({ type: 'first-input', buffered: true })
    } catch (e) {
      // FID not supported
    }

    // CLS (Cumulative Layout Shift)
    let clsValue = 0
    let clsEntries = []

    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        // Only count layout shifts without recent user input
        if (!entry.hadRecentInput) {
          clsValue += entry.value
          clsEntries.push(entry)
        }
      }
      console.log('CLS:', clsValue)
      
      // Send to analytics
      // sendToAnalytics({ name: 'CLS', value: clsValue })
    })

    try {
      clsObserver.observe({ type: 'layout-shift', buffered: true })
    } catch (e) {
      // CLS not supported
    }

    // Navigation Timing for FCP (First Contentful Paint)
    if ('performance' in window) {
      window.addEventListener('load', () => {
        setTimeout(() => {
          const perfData = window.performance.getEntriesByType('navigation')[0]
          const paintEntries = window.performance.getEntriesByType('paint')
          
          const fcp = paintEntries.find(entry => entry.name === 'first-contentful-paint')
          if (fcp) {
            console.log('FCP:', fcp.startTime)
            // sendToAnalytics({ name: 'FCP', value: fcp.startTime })
          }

          const fp = paintEntries.find(entry => entry.name === 'first-paint')
          if (fp) {
            console.log('FP:', fp.startTime)
          }

          // TTI can be approximated
          if (perfData) {
            const tti = perfData.domInteractive
            console.log('TTI (approx):', tti)
            // sendToAnalytics({ name: 'TTI', value: tti })
          }

          // Log overall timing
          console.log('Performance Summary:', {
            dns: perfData?.domainLookupEnd - perfData?.domainLookupStart,
            tcp: perfData?.connectEnd - perfData?.connectStart,
            ttfb: perfData?.responseStart - perfData?.requestStart,
            download: perfData?.responseEnd - perfData?.responseStart,
            domParsing: perfData?.domInteractive - perfData?.domLoading,
            resourceLoading: perfData?.loadEventStart - perfData?.domContentLoadedEventEnd
          })
        }, 0)
      })
    }

    // Cleanup
    return () => {
      lcpObserver?.disconnect()
      fidObserver?.disconnect()
      clsObserver?.disconnect()
    }
  }, [])

  return null // This component doesn't render anything
}

// Helper function to send metrics to analytics (implement as needed)
function sendToAnalytics({ name, value }) {
  // Example: Google Analytics 4
  // if (window.gtag) {
  //   window.gtag('event', name, {
  //     value: Math.round(name === 'CLS' ? value * 1000 : value),
  //     event_category: 'Web Vitals',
  //     event_label: name,
  //     non_interaction: true
  //   })
  // }

  // Example: Custom endpoint
  // fetch('/api/analytics', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({ metric: name, value, timestamp: Date.now() })
  // })
  
  console.log(`Analytics: ${name} = ${value}`)
}

export default WebVitalsMonitor
