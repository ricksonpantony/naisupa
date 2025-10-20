import React from 'react'
import { Helmet } from 'react-helmet-async'

const PerformanceOptimizer = () => {
  return (
    <Helmet>
      {/* DNS prefetch for external resources */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//wa.me" />
      
      {/* Preconnect to critical origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Resource hints for performance - favicon only, other images handled by performance.js */}
      <link rel="preload" as="image" href="/image.png" fetchPriority="high" />
      
      {/* Critical CSS inline for above-the-fold content */}
      <style>{`
        /* Critical CSS for immediate rendering */
        .preload-critical {
          font-display: swap;
        }
        
        /* Optimize CLS by reserving space for images */
        .hero-image {
          aspect-ratio: 16 / 9;
          background-color: #f3f4f6;
        }
        
        .team-image {
          aspect-ratio: 1 / 1;
          background-color: #f3f4f6;
        }
        
        /* Reduce layout shifts - avoid overriding full-width layouts */
        .performance-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        @media (min-width: 640px) {
          .performance-container {
            padding: 0 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .performance-container {
            padding: 0 2rem;
          }
        }
        
        /* Optimize font loading */
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local('Inter Regular'), local('Inter-Regular');
        }
      `}</style>
      
      {/* Meta tags for performance */}
      <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
      <meta httpEquiv="x-ua-compatible" content="ie=edge" />
      
      {/* Optimize rendering */}
      <meta name="color-scheme" content="light" />
      <meta name="theme-color" content="#0891b2" />
      
      {/* Prefetch critical routes */}
      <link rel="prefetch" href="/pages/osce-preparation" />
      <link rel="prefetch" href="/pages/nclex-ngn" />
      <link rel="prefetch" href="/pages/oba" />
    </Helmet>
  )
}

export default PerformanceOptimizer
