import React, { useState, useEffect, lazy, Suspense } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Navigation from './components/Navigation'
import Footer from './components/Footer'
import ScrollToTopOnRouteChange from './components/ScrollToTopOnRouteChange'
import PerformanceOptimizer from './components/PerformanceOptimizer'
import LazyComponent, { PageLoadingFallback } from './components/LazyComponent'

// Critical pages (loaded immediately)
import HomePage from './pages/HomePage'

// Lazy-load non-critical UI components (defer until after initial render)
const MobileDock = lazy(() => import('./components/MobileDock'))
const ScrollToTop = lazy(() => import('./components/ScrollToTop'))
const FloatingChat = lazy(() => import('./components/FloatingChat'))
const WebVitalsMonitor = lazy(() => import('./components/WebVitalsMonitor'))

// Lazy-loaded pages (loaded on demand)
const OSCEPreparationPage = lazy(() => import('./pages/OSCEPreparationPage'))
const OBAPage = lazy(() => import('./pages/OBAPage'))
const NCLEXPage = lazy(() => import('./pages/NCLEXPage'))
const NCLEXFAQPage = lazy(() => import('./pages/NCLEXFAQPage'))
const OSCEFAQPage = lazy(() => import('./pages/OSCEFAQPage'))
const AboutPage = lazy(() => import('./pages/AboutPage'))
const ContactPage = lazy(() => import('./pages/ContactPage'))
const TeamPage = lazy(() => import('./pages/TeamPage'))
const GalleryPage = lazy(() => import('./pages/GalleryPage'))
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage'))
const VideosPage = lazy(() => import('./pages/VideosPage'))
const BlogPage = lazy(() => import('./pages/BlogPage'))
const NewsPage = lazy(() => import('./pages/NewsPage'))
const BlogPost = lazy(() => import('./pages/blogs/news/BlogPost'))
const BlogPost2 = lazy(() => import('./pages/blogs/news/BlogPost2'))
const BlogPost3 = lazy(() => import('./pages/blogs/news/BlogPost3'))
const BlogPost4 = lazy(() => import('./pages/blogs/news/BlogPost4'))
const BlogPost5 = lazy(() => import('./pages/blogs/news/BlogPost5'))
const BlogPost6 = lazy(() => import('./pages/blogs/news/BlogPost6'))
const BlogPost7 = lazy(() => import('./pages/blogs/news/BlogPost7'))
const BlogPost8 = lazy(() => import('./pages/blogs/news/BlogPost8'))
const BlogPost9 = lazy(() => import('./pages/blogs/news/BlogPost9'))
const BlogPost10 = lazy(() => import('./pages/blogs/news/BlogPost10'))
const ReferralFormPage = lazy(() => import('./pages/ReferralFormPage'))
const YouTubeTestPage = lazy(() => import('./pages/YouTubeTestPage'))
const SupabaseTest = lazy(() => import('./components/SupabaseTest'))
const StorageSetup = lazy(() => import('./components/StorageSetup'))
const ImageUploader = lazy(() => import('./components/ImageUploader'))

function App() {
  const [showDeferredComponents, setShowDeferredComponents] = useState(false)
  
  // Defer loading of non-critical components until after initial paint
  useEffect(() => {
    // Wait for page to be interactive before loading non-critical components
    const timer = setTimeout(() => {
      setShowDeferredComponents(true)
    }, 100) // Short delay to prioritize LCP
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <HelmetProvider>
      <Router>
        <ScrollToTopOnRouteChange />
        <PerformanceOptimizer />
        {showDeferredComponents && (
          <Suspense fallback={null}>
            <WebVitalsMonitor />
          </Suspense>
        )}
        <div className="min-h-screen bg-nai-soft w-full">
          <Navigation />
          
          <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route 
              path="/pages/osce-preparation" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <OSCEPreparationPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/oba" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <OBAPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/nclex-ngn" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <NCLEXPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/nclex-ngn-faq" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <NCLEXFAQPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/osce-faqs" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <OSCEFAQPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/about" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <AboutPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/contact" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <ContactPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/team" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <TeamPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/gallery" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <GalleryPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/testimonials" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <TestimonialsPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/videos" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <VideosPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/blogs" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <BlogPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/blogs/news" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <NewsPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/blogs/news/:slug" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <BlogPost />
                </LazyComponent>
              } 
            />
            <Route 
              path="/pages/referral-form" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <ReferralFormPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/youtube-test" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <YouTubeTestPage />
                </LazyComponent>
              } 
            />
            <Route 
              path="/supabase-test" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <SupabaseTest />
                </LazyComponent>
              } 
            />
            <Route 
              path="/storage-setup" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <StorageSetup />
                </LazyComponent>
              } 
            />
            <Route 
              path="/upload-images" 
              element={
                <LazyComponent fallback={<PageLoadingFallback />}>
                  <ImageUploader />
                </LazyComponent>
              } 
            />
          </Routes>
          </main>
          
          <Footer />
          {showDeferredComponents && (
            <Suspense fallback={null}>
              <MobileDock />
              <ScrollToTop />
              <FloatingChat />
            </Suspense>
          )}
        </div>
      </Router>
    </HelmetProvider>
  )
}

export default App
