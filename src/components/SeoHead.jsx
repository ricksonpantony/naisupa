// SEO: Centralized SEO head component for consistent meta tags across all pages
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SeoHead = ({ 
  title, 
  description, 
  canonical, 
  keywords,
  og = {}, 
  twitter = {}, 
  jsonLd = [],
  noindex = false 
}) => {
  // Default values for social media sharing
  const siteUrl = 'https://nurseassistinternational.com';
  const defaultImage = `${siteUrl}/og-image.png`; // Using proper 1200x630 social media image
  const siteName = 'Nurse Assist International';
  
  return (
    <>
      <Helmet>
        {/* Basic Meta Tags */}
        <title>{title}</title>
        {description && <meta name="description" content={description} />}
        {keywords && <meta name="keywords" content={keywords} />}
        {canonical && <link rel="canonical" href={canonical} />}
        
        {/* Robots Meta */}
        {noindex && <meta name="robots" content="noindex, nofollow" />}
        
        {/* Open Graph Meta Tags */}
        <meta property="og:type" content={og.type || "website"} />
        <meta property="og:title" content={og.title || title} />
        {(og.description || description) && (
          <meta property="og:description" content={og.description || description} />
        )}
        <meta property="og:url" content={og.url || canonical || siteUrl} />
        <meta property="og:image" content={og.image || defaultImage} />
        <meta property="og:image:secure_url" content={og.image || defaultImage} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content={og.imageAlt || `${siteName} - NCLEX & OSCE Preparation`} />
        <meta property="og:site_name" content={siteName} />
        <meta property="og:locale" content="en_AU" />
        
        {/* Article-specific Open Graph tags */}
        {og.type === 'article' && (
          <>
            {og.publishedTime && <meta property="article:published_time" content={og.publishedTime} />}
            {og.modifiedTime && <meta property="article:modified_time" content={og.modifiedTime} />}
            {og.section && <meta property="article:section" content={og.section} />}
            {og.tags && og.tags.map((tag, index) => (
              <meta key={index} property="article:tag" content={tag} />
            ))}
          </>
        )}
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content={twitter.card || "summary_large_image"} />
        <meta name="twitter:title" content={twitter.title || og.title || title} />
        {(twitter.description || og.description || description) && (
          <meta name="twitter:description" content={twitter.description || og.description || description} />
        )}
        <meta name="twitter:image" content={twitter.image || og.image || defaultImage} />
        <meta name="twitter:image:alt" content={twitter.imageAlt || og.imageAlt || `${siteName} - NCLEX & OSCE Preparation`} />
        <meta name="twitter:site" content="@nurseassistintl" />
        <meta name="twitter:creator" content="@nurseassistintl" />
        
        {/* Additional SEO Meta Tags */}
        <meta name="author" content="Nurse Assist International" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en-AU" />
        <meta name="geo.region" content="AU-NSW" />
        <meta name="geo.placename" content="Parramatta, Sydney" />
        <meta name="geo.position" content="-33.8150;151.0000" />
        <meta name="ICBM" content="-33.8150, 151.0000" />
        
        {/* Favicon and Icons */}
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        
        {/* Facebook Pixel */}
        <script dangerouslySetInnerHTML={{
          __html: `
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', 'YOUR_PIXEL_ID'); 
            fbq('track', 'PageView');
          `
        }} />
        <noscript dangerouslySetInnerHTML={{
          __html: `<img height="1" width="1" style="display:none" src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1" />`
        }} />
      </Helmet>
      
      {/* JSON-LD Structured Data */}
      {jsonLd.map((schema, index) => (
        <script 
          key={index} 
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
};

export default SeoHead;
