import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Camera, X, ChevronLeft, ChevronRight, ZoomIn, Heart, Users, Share2, ArrowLeft, ArrowRight } from 'lucide-react'

const GalleryPage = () => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0) // GLOBAL index (0..269)
  const [currentPage, setCurrentPage] = useState(1)
  const [imagesLoaded, setImagesLoaded] = useState({})
  const [visibleRows, setVisibleRows] = useState(new Set())

  const galleryRef = useRef(null)
  const observerRef = useRef(null)

  // jump-free scroll lock support
  const scrollYRef = useRef(0)
  const lastFocusedRef = useRef(null)
  const closeBtnRef = useRef(null)

  const imagesPerPage = 25
  const imagesPerRow = 5

  // Generate all 270 gallery images - all are JPG files
  const allGalleryImages = Array.from({ length: 270 }, (_, index) => {
    const imageNumber = String(index + 1).padStart(3, '0')
    return {
      id: index + 1,
      src: `/Gallery/NAI GALLERY/nurseassistinternational${imageNumber}.jpg`,
      title: `NAI Moment ${index + 1}`,
      alt: `NAI Moment ${index + 1} - Capturing precious memories from our nursing journey`,
      thumbnail: `/Gallery/NAI GALLERY/nurseassistinternational${imageNumber}.jpg`,
    }
  })

  // Calculate pagination
  const totalPages = Math.ceil(allGalleryImages.length / imagesPerPage)
  const startIndex = (currentPage - 1) * imagesPerPage
  const currentImages = allGalleryImages.slice(startIndex, startIndex + imagesPerPage)

  // Organize images into rows (for the current page)
  const imageRows = []
  for (let i = 0; i < currentImages.length; i += imagesPerRow) {
    imageRows.push(currentImages.slice(i, i + imagesPerRow))
  }

  // Intersection Observer for row animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const rowIndex = parseInt(entry.target.dataset.rowIndex, 10)
            setVisibleRows((prev) => new Set([...prev, rowIndex]))
          }
        })
      },
      { threshold: 0.1, rootMargin: '100px' }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  // Observe row elements (only when page changes)
  useEffect(() => {
    const rowElements = document.querySelectorAll('.gallery-row')
    rowElements.forEach((row) => {
      if (observerRef.current) {
        observerRef.current.observe(row)
      }
    })
    return () => {
      if (observerRef.current) {
        rowElements.forEach((row) => {
          observerRef.current.unobserve(row)
        })
      }
    }
  }, [currentPage])

  // Reset visible rows & loaded map when page changes
  useEffect(() => {
    setVisibleRows(new Set())
    setImagesLoaded({})
  }, [currentPage])

  // Jump-free body scroll lock when lightbox opens
  useEffect(() => {
    const body = document.body
    const html = document.documentElement

    if (selectedImage) {
      // Save scroll position
      scrollYRef.current = window.scrollY || window.pageYOffset || 0

      // Lock without reflow shift
      body.style.position = 'fixed'
      body.style.top = `-${scrollYRef.current}px`
      body.style.left = '0'
      body.style.right = '0'
      body.style.width = '100%'

      // Prevent overscroll bounce (iOS)
      html.style.overscrollBehavior = 'contain'

      // Move focus inside modal without scrolling page
      setTimeout(() => {
        closeBtnRef.current?.focus({ preventScroll: true })
      }, 0)
    } else {
      // Unlock
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      document.documentElement.style.overscrollBehavior = ''

      // Restore scroll
      window.scrollTo({ top: scrollYRef.current, left: 0, behavior: 'instant' })

      // Restore focus to last trigger if we tracked it
      lastFocusedRef.current?.focus?.({ preventScroll: true })
    }

    return () => {
      // Cleanup if component unmounts
      body.style.position = ''
      body.style.top = ''
      body.style.left = ''
      body.style.right = ''
      body.style.width = ''
      document.documentElement.style.overscrollBehavior = ''
    }
  }, [selectedImage])

  // Keyboard shortcuts inside lightbox
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (!selectedImage) return
      switch (e.key) {
        case 'Escape':
          closeLightbox()
          break
        case 'ArrowLeft':
          navigateImage('prev')
          break
        case 'ArrowRight':
          navigateImage('next')
          break
      }
    }
    window.addEventListener('keydown', handleKeyPress)
    return () => window.removeEventListener('keydown', handleKeyPress)
  }, [selectedImage, currentIndex])

  // OPEN / CLOSE / NAV
  const openLightbox = (image, globalIndex, triggerEl) => {
    // remember last focused trigger to restore later
    if (triggerEl) {
      lastFocusedRef.current = triggerEl
    }
    setSelectedImage(image)
    setCurrentIndex(globalIndex) // IMPORTANT: global, not page index
  }

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const navigateImage = (direction) => {
    const newIndex =
      direction === 'next'
        ? (currentIndex + 1) % allGalleryImages.length
        : currentIndex === 0
        ? allGalleryImages.length - 1
        : currentIndex - 1

    setCurrentIndex(newIndex)
    setSelectedImage(allGalleryImages[newIndex])
  }

  const handleImageLoad = (imageId) => {
    setImagesLoaded((prev) => ({ ...prev, [imageId]: true }))
  }

  const goToPage = (page) => {
    if (page < 1 || page > totalPages) return
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const generatePageNumbers = () => {
    const pages = []
    const maxVisiblePages = 7
    if (totalPages <= maxVisiblePages) {
      for (let i = 1; i <= totalPages; i++) pages.push(i)
    } else {
      const start = Math.max(1, currentPage - 3)
      const end = Math.min(totalPages, start + maxVisiblePages - 1)
      if (start > 1) pages.push(1, '...')
      for (let i = start; i <= end; i++) pages.push(i)
      if (end < totalPages) pages.push('...', totalPages)
    }
    return pages
  }

  return (
    <>
      <Helmet>
        <title>NAI Moments - Photo Gallery | Nursing Education Memories | NAI</title>
        <meta
          name="description"
          content="Explore our beautiful collection of 270 NAI moments capturing the journey of nursing education, student achievements, and memorable experiences at Nurse Assist International."
        />
        <link rel="canonical" href="https://nurseassistinternational.com/pages/gallery" />

        {/* Open Graph */}
        <meta property="og:title" content="NAI Moments - Photo Gallery | 270 Nursing Education Memories" />
        <meta
          property="og:description"
          content="Explore our beautiful collection of 270 NAI moments capturing the journey of nursing education and student achievements."
        />
        <meta property="og:url" content="https://nurseassistinternational.com/pages/gallery" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image"
          content="https://nurseassistinternational.com/Gallery/NAI GALLERY/nurseassistinternational001.png"
        />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'ImageGallery',
            name: 'NAI Moments Gallery',
            description:
              'Complete photo gallery showcasing 270 precious moments from nursing education journey at Nurse Assist International',
            url: 'https://nurseassistinternational.com/pages/gallery',
            numberOfItems: allGalleryImages.length,
            provider: {
              '@type': 'Organization',
              name: 'Nurse Assist International',
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Compact Hero */}
        <div className="relative min-h-[50vh] bg-gradient-to-br from-nai-highlight via-nai-deep-teal to-nai-teal overflow-hidden">
          {/* Animated BG */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
              transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px',
              }}
            />
          </div>

          {/* Floating previews */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <motion.div
                key={i}
                className="absolute w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-2xl border border-white/20"
                style={{
                  left: `${15 + (i % 3) * 25}%`,
                  top: `${20 + Math.floor((i - 1) / 3) * 40}%`,
                }}
                animate={{ y: [0, -15, 0], rotate: [0, 3, -3, 0], scale: [1, 1.05, 1] }}
                transition={{ duration: 6 + i, repeat: Infinity, ease: 'easeInOut', delay: i * 0.5 }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
              >
                <img
                  src={`/Gallery/NAI GALLERY/nurseassistinternational${String(i * 15).padStart(3, '0')}.jpg`}
                  alt={`Preview ${i}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Hero content */}
          <div className="relative z-20 flex items-center justify-center min-h-[50vh] px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-4xl">
              <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
                <motion.div
                  className="relative w-16 h-16 mx-auto mb-4"
                  animate={{ rotateY: [0, 360] }}
                  transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-3xl border border-white/30 shadow-2xl" />
                  <div className="relative w-full h-full flex items-center justify-center">
                    <Camera className="w-8 h-8 text-white drop-shadow-lg" />
                  </div>
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 bg-white/60 rounded-full"
                      animate={{ rotate: [0, 360] }}
                      transition={{ duration: 8, repeat: Infinity, ease: 'linear', delay: i * 2 }}
                      style={{ left: '50%', top: '50%', transformOrigin: `${40 + i * 6}px 0px` }}
                    />
                  ))}
                </motion.div>

                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="font-thin">NAI</span>
                  <br />
                  <span className="font-bold text-white">
                    Gallery
                  </span>
                </motion.h1>

                <motion.p
                  className="text-lg md:text-xl lg:text-2xl text-white/80 mb-6 font-light leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.8 }}
                >
                  Capturing the essence of nursing excellence
                  <br />
                  <span className="text-base md:text-lg text-white/60">Precious moments from our journey</span>
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
              <motion.div
                className="w-1 h-2 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
              />
            </div>
          </motion.div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
          {/* Page info */}
          <motion.section className="py-8 md:py-10" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
            <div className="text-center">
              <div className="inline-flex items-center gap-3 bg-white rounded-full px-6 py-2 shadow-sm border border-gray-100">
                <span className="text-gray-700 text-sm font-medium">
                  Page {currentPage} of {totalPages}
                </span>
              </div>
            </div>
          </motion.section>

          {/* Grid */}
          <motion.section
            ref={galleryRef}
            className="py-8 md:py-12 mb-8 md:mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="space-y-8 md:space-y-12">
              {imageRows.map((row, rowIndex) => (
                <motion.div
                  key={`row-${currentPage}-${rowIndex}`}
                  className="gallery-row grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 lg:gap-8"
                  data-row-index={rowIndex}
                  initial={{ opacity: 0, y: 50, rotateX: 15 }}
                  animate={{
                    opacity: visibleRows.has(rowIndex) ? 1 : 0,
                    y: visibleRows.has(rowIndex) ? 0 : 50,
                    rotateX: visibleRows.has(rowIndex) ? 0 : 15,
                  }}
                  transition={{ duration: 0.8, delay: visibleRows.has(rowIndex) ? rowIndex * 0.2 : 0, ease: 'easeOut' }}
                  style={{ transformStyle: 'preserve-3d', perspective: '1000px' }}
                >
                  {row.map((image, imageIndex) => {
                    const pageLocalIndex = rowIndex * imagesPerRow + imageIndex
                    const globalIndex = startIndex + pageLocalIndex // ✅ FIX: use global index
                    return (
                      <motion.button
                        key={`${currentPage}-${rowIndex}-${imageIndex}`}
                        type="button"
                        className="group relative cursor-pointer text-left"
                        onClick={(e) => openLightbox(image, globalIndex, e.currentTarget)}
                        whileHover={{ y: -12, rotateY: 8, rotateX: 5, scale: 1.05, z: 50 }}
                        initial={{ opacity: 0, scale: 0.8, rotateY: -20 }}
                        animate={{
                          opacity: visibleRows.has(rowIndex) ? 1 : 0,
                          scale: visibleRows.has(rowIndex) ? 1 : 0.8,
                          rotateY: visibleRows.has(rowIndex) ? 0 : -20,
                        }}
                        transition={{ duration: 0.6, delay: visibleRows.has(rowIndex) ? imageIndex * 0.1 : 0, type: 'spring', stiffness: 100, damping: 15 }}
                        style={{ transformStyle: 'preserve-3d' }}
                        aria-label={`Open ${image.title}`}
                      >
                        <div className="relative aspect-square transform-gpu">
                          {/* Frame shadow */}
                          <div className="absolute -inset-2 bg-gradient-to-br from-black/20 via-black/10 to-transparent rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-700" />

                          {/* Main frame */}
                          <div className="relative bg-white rounded-2xl p-3 md:p-4 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-200/50 backdrop-blur-sm">
                            {/* Inner shadow */}
                            <div className="absolute inset-3 md:inset-4 rounded-xl shadow-inner opacity-20 pointer-events-none" />

                            {/* Image */}
                            <div className="relative aspect-square rounded-xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner">
                              {!imagesLoaded[image.id] && (
                                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200">
                                  <motion.div
                                    className="relative"
                                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                                    transition={{
                                      rotate: { duration: 2, repeat: Infinity, ease: 'linear' },
                                      scale: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
                                    }}
                                  >
                                    <div className="w-8 h-8 border-2 border-nai-highlight border-t-transparent rounded-full" />
                                    <Camera className="absolute inset-0 w-4 h-4 text-nai-highlight m-auto" />
                                  </motion.div>
                                </div>
                              )}

                              <img
                                src={image.src}
                                alt={image.alt}
                                className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${imagesLoaded[image.id] ? 'opacity-100' : 'opacity-0'}`}
                                onLoad={() => handleImageLoad(image.id)}
                                onError={() => {
                                  console.log(`Failed to load image: ${image.src}`)
                                }}
                                loading="lazy"
                              />

                              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />

                              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                                <motion.div
                                  className="bg-white/95 backdrop-blur-md rounded-full p-3 shadow-2xl border border-white/30"
                                  whileHover={{ scale: 1.1, rotate: 360, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                                  transition={{ duration: 0.3 }}
                                >
                                  <ZoomIn className="w-5 h-5 text-nai-highlight" />
                                </motion.div>
                              </div>
                            </div>

                            {/* Frame highlights */}
                            <div className="absolute top-3 right-3 w-4 h-4 border-r-2 border-t-2 border-white/40 rounded-tr-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            <div className="absolute bottom-3 left-3 w-4 h-4 border-l-2 border-b-2 border-white/40 rounded-bl-lg opacity-0 group-hover:opacity-100 transition-all duration-300" />
                            <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl pointer-events-none opacity-0 group-hover:opacity-100 transition-all duration-500" />
                          </div>
                        </div>
                      </motion.button>
                    )
                  })}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Pagination */}
          <motion.section className="py-8 md:py-10 mb-8 md:mb-12" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}>
            <div className="flex items-center justify-center">
              <div className="bg-white rounded-full p-2 shadow-sm border border-gray-100">
                <div className="flex items-center gap-1">
                  <button
                    onClick={() => goToPage(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="p-2 rounded-full bg-nai-highlight hover:bg-nai-deep-teal disabled:bg-gray-300 disabled:opacity-50 text-white transition-all duration-300"
                    aria-label="Previous page"
                  >
                    <ArrowLeft className="w-4 h-4" />
                  </button>

                  <div className="flex items-center gap-1 px-2">
                    {generatePageNumbers().map((page, index) =>
                      page === '...' ? (
                        <span key={`dots-${index}`} className="px-2 text-gray-400 text-sm">
                          ...
                        </span>
                      ) : (
                        <button
                          key={page}
                          onClick={() => goToPage(page)}
                          className={`px-3 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                            currentPage === page ? 'bg-nai-highlight text-white' : 'text-gray-600 hover:bg-gray-100'
                          }`}
                          aria-current={currentPage === page ? 'page' : undefined}
                          aria-label={`Go to page ${page}`}
                        >
                          {page}
                        </button>
                      )
                    )}
                  </div>

                  <button
                    onClick={() => goToPage(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="p-2 rounded-full bg-nai-highlight hover:bg-nai-deep-teal disabled:bg-gray-300 disabled:opacity-50 text-white transition-all duration-300"
                    aria-label="Next page"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <div className="max-w-xs mx-auto">
                <div className="bg-gray-200 rounded-full h-1 mb-3">
                  <motion.div
                    className="bg-nai-highlight h-1 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${(currentPage / totalPages) * 100}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
                <p className="text-gray-600 text-sm">
                  {startIndex + 1}-{Math.min(startIndex + imagesPerPage, allGalleryImages.length)} of {allGalleryImages.length} photos
                </p>
              </div>
            </div>
          </motion.section>

          {/* CTA */}
          <motion.section className="py-12 md:py-16 mb-12 md:mb-16" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.8 }}>
            <div className="text-center">
              <div className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-2xl p-8 md:p-12 text-white shadow-lg">
                <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-2xl md:text-3xl font-bold mb-4">Create Your Own NAI Moment</h2>

                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Join thousands of international nurses who have created their own precious moments with NAI. Your journey to nursing excellence starts here.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20want%20to%20create%20my%20own%20NAI%20moment"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-nai-highlight px-8 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 flex items-center justify-center gap-2 shadow-lg"
                  >
                    <Users className="w-5 h-5" />
                    Start Your Journey
                  </a>

                  <a
                    href="/pages/contact"
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Share2 className="w-5 h-5" />
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </motion.section>
        </div>

        {/* Lightbox Modal */}
        {selectedImage && <div className="fixed inset-0 bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 z-[2000] backdrop-blur-xl">
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="sticky inset-0 z-[9999] items-center justify-center p-4 "
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
              role="dialog"
              aria-modal="true"
              aria-label="Image viewer"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5 pointer-events-none">
                <div
                  className="w-full h-full bg-repeat"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='40' cy='40' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    backgroundSize: '80px 80px',
                  }}
                />
              </div>

              {/* Close */}
              <motion.button
                ref={closeBtnRef}
                onClick={(e) => {
                  e.stopPropagation()
                  closeLightbox()
                }}
                className="absolute top-8 right-8 z-50 bg-gradient-to-r from-white to-gray-100 text-gray-800 p-3 rounded-full hover:from-gray-100 hover:to-white transition-all duration-300 shadow-2xl border border-gray-200"
                whileHover={{ scale: 1.1, rotate: 90, boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)' }}
                whileTap={{ scale: 0.9 }}
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                aria-label="Close viewer"
              >
                <X className="w-6 h-6" />
              </motion.button>

              {/* Prev / Next */}
              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('prev')
                }}
                className="absolute left-8 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md text-white p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-2xl border border-white/20"
                whileHover={{ scale: 1.1, x: -8 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                aria-label="Previous image"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={(e) => {
                  e.stopPropagation()
                  navigateImage('next')
                }}
                className="absolute right-8 top-1/2 -translate-y-1/2 z-40 bg-white/10 backdrop-blur-md text-white p-4 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-2xl border border-white/20"
                whileHover={{ scale: 1.1, x: 8 }}
                whileTap={{ scale: 0.9 }}
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                aria-label="Next image"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>

              {/* Lightbox content (scrolls only inside this box if needed) */}
              <motion.div
                className="relative max-w-7xl w-full max-h-[90vh] mx-auto"
                initial={{ scale: 0.7, opacity: 0, rotateY: -25, z: -100 }}
                animate={{ scale: 1, opacity: 1, rotateY: 0, z: 0 }}
                exit={{ scale: 0.7, opacity: 0, rotateY: 25, z: -100 }}
                onClick={(e) => e.stopPropagation()}
                transition={{ type: 'spring', stiffness: 200, damping: 25, duration: 0.6 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="relative bg-white rounded-3xl p-6 md:p-3 shadow-2xl border border-white/10 overflow-y-auto">
                  {/* Frame inner shadow */}
                  <div className="absolute inset-6 md:inset-8 rounded-2xl shadow-inner opacity-20 pointer-events-none" />

                  {/* Image Container - Fixed Centering */}
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-inner flex items-center justify-center min-h-[50vh] max-h-[75vh]">
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-full object-contain"
                      style={{ maxHeight: '75vh', maxWidth: '100%' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Info panel */}
                  <motion.div
                    className="mt-6 bg-gradient-to-r from-nai-highlight/95 to-nai-deep-teal/95 backdrop-blur-md text-white p-6 rounded-2xl border border-white/20 shadow-2xl"
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex-1">
                        <h3 className="text-xl md:text-2xl font-bold mb-1 flex items-center gap-3">
                          <Camera className="w-5 h-5" />
                          {selectedImage.title}
                        </h3>
                        <p className="text-white/90 font-light text-sm md:text-base">
                          A precious moment from our nursing education journey
                        </p>
                      </div>
                      <div className="flex items-center gap-4 ml-6">
                        <div className="text-right">
                          <div className="text-xl font-bold text-white/90">{currentIndex + 1}</div>
                          <div className="text-xs text-white/70">of {allGalleryImages.length}</div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
        </div>}
      </div>
    </>
  )
}

export default GalleryPage
