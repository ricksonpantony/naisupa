import React, { useState, useRef, useEffect } from 'react'

const LazyImage = ({ 
  src, 
  alt, 
  className = "", 
  placeholder = null,
  sizes = "",
  srcSet = "",
  loading = "lazy",
  fetchpriority = "auto",
  width,
  height,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false)
  const [isInView, setIsInView] = useState(false)
  const imgRef = useRef(null)

  useEffect(() => {
    // Use native lazy loading if supported, otherwise use IntersectionObserver
    if (loading === "lazy" && 'loading' in HTMLImageElement.prototype) {
      setIsInView(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true)
          observer.disconnect()
        }
      },
      {
        threshold: 0.01,
        rootMargin: '100px' // Increased for better UX
      }
    )

    if (imgRef.current) {
      observer.observe(imgRef.current)
    }

    return () => observer.disconnect()
  }, [loading])

  const handleLoad = () => {
    setIsLoaded(true)
  }

  const handleError = () => {
    console.warn(`Failed to load image: ${src}`)
  }

  return (
    <div 
      ref={imgRef} 
      className={`relative overflow-hidden ${className}`} 
      style={{ 
        ...(width && height && { aspectRatio: `${width}/${height}` }),
        contentVisibility: 'auto'
      }}
      {...props}
    >
      {/* Placeholder while loading */}
      {!isLoaded && placeholder && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse flex items-center justify-center">
          {placeholder}
        </div>
      )}
      
      {/* Actual image */}
      {isInView && (
        <img
          src={src}
          srcSet={srcSet}
          alt={alt}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          } ${className}`}
          onLoad={handleLoad}
          onError={handleError}
          loading={loading}
          fetchpriority={fetchpriority}
          sizes={sizes}
          width={width}
          height={height}
          decoding="async"
          style={{ contentVisibility: 'auto' }}
        />
      )}
    </div>
  )
}

export default LazyImage


