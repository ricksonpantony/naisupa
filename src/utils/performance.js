// Performance monitoring utilities for Core Web Vitals

// Function to measure and report Core Web Vitals
export const measurePerformance = () => {
  // Only run in production and if Performance API is available
  if (import.meta.env.MODE !== 'production' || !window.performance) {
    return
  }

  // Measure First Contentful Paint (FCP)
  const measureFCP = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log('FCP:', entry.startTime)
          // You can send this to your analytics service
          // analytics.track('performance', { metric: 'FCP', value: entry.startTime })
        }
      }
    })
    observer.observe({ entryTypes: ['paint'] })
  }

  // Measure Largest Contentful Paint (LCP)
  const measureLCP = () => {
    const observer = new PerformanceObserver((list) => {
      const entries = list.getEntries()
      const lastEntry = entries[entries.length - 1]
      console.log('LCP:', lastEntry.startTime)
      // analytics.track('performance', { metric: 'LCP', value: lastEntry.startTime })
    })
    observer.observe({ entryTypes: ['largest-contentful-paint'] })
  }

  // Measure First Input Delay (FID)
  const measureFID = () => {
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        console.log('FID:', entry.processingStart - entry.startTime)
        // analytics.track('performance', { metric: 'FID', value: entry.processingStart - entry.startTime })
      }
    })
    observer.observe({ entryTypes: ['first-input'] })
  }

  // Measure Cumulative Layout Shift (CLS)
  const measureCLS = () => {
    let clsValue = 0
    const observer = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!entry.hadRecentInput) {
          clsValue += entry.value
        }
      }
      console.log('CLS:', clsValue)
      // analytics.track('performance', { metric: 'CLS', value: clsValue })
    })
    observer.observe({ entryTypes: ['layout-shift'] })
  }

  // Measure Time to Interactive (TTI)
  const measureTTI = () => {
    // Simplified TTI measurement
    window.addEventListener('load', () => {
      setTimeout(() => {
        const navigationStart = performance.timing.navigationStart
        const loadEventEnd = performance.timing.loadEventEnd
        const tti = loadEventEnd - navigationStart
        console.log('TTI:', tti)
        // analytics.track('performance', { metric: 'TTI', value: tti })
      }, 0)
    })
  }

  // Initialize measurements
  measureFCP()
  measureLCP()
  measureFID()
  measureCLS()
  measureTTI()
}

// Function to preload critical resources
export const preloadCriticalResources = () => {
  const criticalImages = [
    '/image.png'  // Only preload the favicon which is used immediately
  ]

  criticalImages.forEach(src => {
    const link = document.createElement('link')
    link.rel = 'preload'
    link.as = 'image'
    link.href = src
    link.fetchPriority = 'high'
    document.head.appendChild(link)
  })

  // Prefetch hero images for faster loading when needed
  const prefetchImages = [
    '/Images/A_group_of_professional_nurses_in_teal_scrubs_diverse_in_ethnicity_and_gender_standing_together_confidently_with_warm_smiles._Some_nurses_may_hold_clipboards_stethoscopes_or_tablets_t.webp'
  ]

  // Prefetch after a short delay to not interfere with critical resources
  setTimeout(() => {
    prefetchImages.forEach(src => {
      const link = document.createElement('link')
      link.rel = 'prefetch'
      link.as = 'image'
      link.href = src
      document.head.appendChild(link)
    })
  }, 1000) // Delay prefetch by 1 second
}

// Function to defer non-critical resources
export const deferNonCriticalResources = () => {
  // Defer non-critical CSS
  const deferCSS = (href) => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    link.media = 'print'
    link.onload = function() {
      this.media = 'all'
    }
    document.head.appendChild(link)
  }

  // Lazy load images that are not immediately visible
  const lazyLoadImages = () => {
    if ('IntersectionObserver' in window) {
      const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const img = entry.target
            img.src = img.dataset.src
            img.classList.remove('lazy')
            imageObserver.unobserve(img)
          }
        })
      })

      document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img)
      })
    }
  }

  // Initialize lazy loading after page load
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', lazyLoadImages)
  } else {
    lazyLoadImages()
  }
}

// Function to optimize animations for better performance
export const optimizeAnimations = () => {
  // Reduce motion for users who prefer it
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
  
  if (prefersReducedMotion.matches) {
    document.documentElement.style.setProperty('--animation-duration', '0.01ms')
    document.documentElement.style.setProperty('--transition-duration', '0.01ms')
  }

  // Optimize scroll-triggered animations
  const optimizeScrollAnimations = () => {
    let ticking = false

    const updateAnimations = () => {
      // Update scroll-triggered animations here
      ticking = false
    }

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateAnimations)
        ticking = true
      }
    }

    window.addEventListener('scroll', requestTick, { passive: true })
  }

  optimizeScrollAnimations()
}

// Handle browser extension errors gracefully
const handleBrowserExtensionErrors = () => {
  window.addEventListener('error', (event) => {
    // Suppress known browser extension errors that don't affect our app
    if (event.error && (
      event.error.name === 'RegisterClientLocalizationsError' ||
      event.error.message?.includes('Receiving end does not exist') ||
      event.error.message?.includes('Extension context invalidated')
    )) {
      event.preventDefault()
      console.warn('Browser extension error suppressed:', event.error.message)
      return false
    }
  })

  window.addEventListener('unhandledrejection', (event) => {
    // Suppress promise rejections from browser extensions
    if (event.reason && (
      event.reason.name === 'RegisterClientLocalizationsError' ||
      event.reason.message?.includes('Receiving end does not exist') ||
      event.reason.message?.includes('Extension context invalidated')
    )) {
      event.preventDefault()
      console.warn('Browser extension promise rejection suppressed:', event.reason.message)
      return false
    }
  })
}

// Initialize all performance optimizations
export const initializePerformanceOptimizations = () => {
  try {
    handleBrowserExtensionErrors()
    measurePerformance()
    preloadCriticalResources()
    deferNonCriticalResources()
    optimizeAnimations()
  } catch (error) {
    console.warn('Performance optimization initialization failed:', error)
  }
}


