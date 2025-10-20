import React, { lazy, Suspense } from 'react'
import SeoHead from '../components/SeoHead'
import PerformanceHead from '../components/PerformanceHead'
import { organizationJsonLd, educationalOrganizationJsonLd, websiteJsonLd, localBusinessJsonLd, BASE_DOMAIN } from '../seo/jsonld'
import Hero from '../components/Hero'
import { ComponentLoadingFallback } from '../components/LazyComponent'

// Lazy load below-the-fold components for better performance
const OurStory = lazy(() => import('../components/OurStory'))
const WhyChoose = lazy(() => import('../components/WhyChoose'))
const Courses = lazy(() => import('../components/Courses'))
const SuccessStories = lazy(() => import('../components/SuccessStories'))
const VideoHighlights = lazy(() => import('../components/VideoHighlights'))
const FAQ = lazy(() => import('../components/FAQ'))
const Contact = lazy(() => import('../components/Contact'))

const HomePage = () => {
  // SEO: Homepage metadata preserving old site keywords (55-60 chars title)
  const seoData = {
    title: "NCLEX Review & OSCE Training | NAI – Nurse Assist Intl", // Updated title
    description: "NCLEX Australia & OSCE preparation by NAI. Expert training for international nurses seeking Australian registration. 5000+ successful students.",
    canonical: BASE_DOMAIN,
    og: {
      title: "NCLEX & OSCE Preparation Australia | NAI",
      description: "Join Australia's leading nursing education institute. Expert NCLEX-RN, OSCE & OBA preparation for international nurses with proven success.",
      url: BASE_DOMAIN,
      image: `${BASE_DOMAIN}/og-image.png`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "NCLEX & OSCE Preparation Australia | NAI",
      description: "Australia's #1 nursing education institute for international nurses. Expert preparation with proven success rates.",
      image: `${BASE_DOMAIN}/og-image.png`
    },
    jsonLd: [
      organizationJsonLd(),
      educationalOrganizationJsonLd(),
      websiteJsonLd(),
      localBusinessJsonLd()
    ]
  };

  // Performance optimization for homepage critical resources
  const performanceConfig = {
    preloadImages: [
      // Logo is already preloaded in index.html
    ],
    preloadFonts: [
      // Fonts are loaded asynchronously in index.html
    ]
  };

  return (
    <>
      <SeoHead {...seoData} />
      <PerformanceHead {...performanceConfig} />
      
      {/* SEO: Noscript fallback content for crawlers that don't execute JavaScript */}
      <noscript>
        <div className="noscript-home-fallback">
          <h2>NCLEX Australia & OSCE Preparation | Expert Training for International Nurses with NAI</h2>
          <h3>Why Choose NAI for Your Nursing Career?</h3>
          <p>NCLEX Australia and OSCE preparation Australia by Nurse Assist International. Expert guidance and support for international nurses seeking Australian registration.</p>
          
          <h3>Our Training Programs</h3>
          <h4>NCLEX Preparation</h4>
          <p>Comprehensive NCLEX-RN preparation with Next Generation NGN question types and expert review classes.</p>
          
          <h4>OSCE Training</h4>
          <p>Intensive clinical skills training for the Objective Structured Clinical Examination with proven success rates.</p>
          
          <h4>OBA Pathway Support</h4>
          <p>Complete guidance through the Outcome Based Assessment pathway with AHPRA self-check assistance.</p>
          
          <h3>Student Success Stories</h3>
          <p>Join thousands of successful OSCE passers and NCLEX Australia graduates who achieved their goals with NAI.</p>
          
          <h3>Contact Information</h3>
          <p>Sydney: Suite 104, Level 1, 25 Grose St & 2/2 Sorrel St, Parramatta 2150</p>
          <p>Melbourne: Ground Floor, 47 Wellington St, St. Kilda, VIC 3182</p>
          <p>Adelaide: 1/453 Morphett St, Adelaide 5000 & Wagga Wagga, NSW 2650</p>
          <p>Phone: +61-478-320-397</p>
          <p>Email: admin@nurseassistinternational.com</p>
        </div>
      </noscript>
      
      
      <section id="hero">
        <Hero />
      </section>
      
      <Suspense fallback={<ComponentLoadingFallback />}>
        <OurStory />
      </Suspense>
      
      <Suspense fallback={<ComponentLoadingFallback />}>
        <WhyChoose />
      </Suspense>
      
      <section id="courses">
        <Suspense fallback={<ComponentLoadingFallback />}>
          <Courses />
        </Suspense>
      </section>
      
      <section id="success-stories">
        <Suspense fallback={<ComponentLoadingFallback />}>
          <SuccessStories />
        </Suspense>
      </section>
      
      <Suspense fallback={<ComponentLoadingFallback />}>
        <VideoHighlights />
      </Suspense>
      
      <section id="faq">
        <Suspense fallback={<ComponentLoadingFallback />}>
          <FAQ />
        </Suspense>
      </section>
      
      <section id="contact">
        <Suspense fallback={<ComponentLoadingFallback />}>
          <Contact />
        </Suspense>
      </section>
    </>
  )
}

export default HomePage
