// SEO: Performance optimization component for Core Web Vitals improvement
import React from 'react';
import { Helmet } from 'react-helmet-async';

const PerformanceHead = ({ 
  preloadImages = [], 
  preloadFonts = [], 
  criticalCSS = null,
  deferScripts = []
}) => {
  return (
    <Helmet>
      {/* Preload critical images for LCP improvement */}
      {preloadImages.map((image, index) => (
        <link 
          key={index}
          rel="preload" 
          as="image" 
          href={image.src}
          type={image.type || "image/webp"}
          fetchPriority={image.priority || "high"}
        />
      ))}
      
      {/* Preload critical fonts for CLS prevention */}
      {preloadFonts.map((font, index) => (
        <link
          key={index}
          rel="preload"
          as="font"
          type={font.type || "font/woff2"}
          href={font.src}
          crossOrigin="anonymous"
          media="screen"
        />
      ))}
      
      {/* DNS prefetch for external domains */}
      <link rel="dns-prefetch" href="//fonts.googleapis.com" />
      <link rel="dns-prefetch" href="//fonts.gstatic.com" />
      <link rel="dns-prefetch" href="//www.facebook.com" />
      <link rel="dns-prefetch" href="//connect.facebook.net" />
      
      {/* Preconnect to critical third-party origins */}
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      
      {/* Critical CSS inline for above-the-fold content */}
      {criticalCSS && (
        <style dangerouslySetInnerHTML={{ __html: criticalCSS }} />
      )}
      
      {/* Defer non-critical scripts */}
      {deferScripts.map((script, index) => (
        <script 
          key={index}
          src={script.src}
          defer={script.defer !== false}
          async={script.async}
        />
      ))}
      
      {/* Resource hints for performance */}
      <meta name="format-detection" content="telephone=no" />
      <meta name="mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="apple-mobile-web-app-status-bar-style" content="default" />
      
    </Helmet>
  );
};

export default PerformanceHead;
