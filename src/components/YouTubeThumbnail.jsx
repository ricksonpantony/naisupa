import React, { useState } from 'react'
import { Play } from 'lucide-react'

const YouTubeThumbnail = ({ videoId, title, className, showPlayButton = true }) => {
  const [imageError, setImageError] = useState(false)
  const [currentQuality, setCurrentQuality] = useState(0)
  
  // YouTube thumbnail qualities in order of preference
  const thumbnailQualities = [
    'hqdefault',     // 480x360 - most reliable
    'mqdefault',     // 320x180 - fallback
    'default'        // 120x90 - last resort
  ]
  
  const getThumbnailUrl = (quality) => {
    return `https://img.youtube.com/vi/${videoId}/${quality}.jpg`
  }
  
  const handleImageError = () => {
    if (currentQuality < thumbnailQualities.length - 1) {
      setCurrentQuality(currentQuality + 1)
    } else {
      setImageError(true)
    }
  }
  
  const handleImageLoad = () => {
    setImageError(false)
  }
  
  if (imageError) {
    // Fallback to a nice placeholder with NAI branding
    return (
      <div className={`relative bg-gradient-to-br from-nai-highlight to-nai-deep-teal flex items-center justify-center ${className}`}>
        <div className="text-center text-white p-4">
          <div className="bg-white/20 rounded-full p-4 mx-auto mb-3 w-16 h-16 flex items-center justify-center">
            <Play className="w-8 h-8 text-white" />
          </div>
          <p className="text-white text-sm font-medium px-2 line-clamp-2">{title}</p>
          <p className="text-white/80 text-xs mt-1">NAI Video</p>
        </div>
        {showPlayButton && (
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
            <div className="bg-white/90 rounded-full p-3">
              <Play className="w-6 h-6 text-red-500" />
            </div>
          </div>
        )}
      </div>
    )
  }
  
  return (
    <div className="relative">
      <img
        src={getThumbnailUrl(thumbnailQualities[currentQuality])}
        alt={title}
        className={className}
        loading="lazy"
        decoding="async"
        onError={handleImageError}
        onLoad={handleImageLoad}
      />
      {showPlayButton && (
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
          <div className="bg-white/90 rounded-full p-3">
            <Play className="w-6 h-6 text-red-500" />
          </div>
        </div>
      )}
    </div>
  )
}

export default YouTubeThumbnail
