import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { Play, X, Youtube, ArrowRight, Clock, Eye, ThumbsUp } from 'lucide-react'
import { getHighlightVideos, YOUTUBE_CHANNEL_URL } from '../data/staticVideoData'
import YouTubeThumbnail from './YouTubeThumbnail'

const VideoHighlights = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [playingVideoId, setPlayingVideoId] = useState(null)
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const navigate = useNavigate()

  // Load videos from static data
  useEffect(() => {
    const loadVideos = () => {
      try {
        setLoading(true)
        setError(null)
        const fetchedVideos = getHighlightVideos()
        setVideos(fetchedVideos)
      } catch (err) {
        console.error('Error loading videos:', err)
        setError('Failed to load videos. Please try again later.')
      } finally {
        setLoading(false)
      }
    }

    loadVideos()
  }, [])

  const toggleVideo = (videoId) => {
    if (playingVideoId === videoId) {
      setPlayingVideoId(null) // Stop playing if same video clicked
    } else {
      setPlayingVideoId(videoId) // Start playing new video
    }
  }

  return (
    <section ref={ref} className="section-padding bg-nai-soft">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
            Video <span className="text-gradient">Highlights</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Watch our videos to learn more about NAI's programs and hear from our successful students.
          </p>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-16">
            <div className="text-center">
              <div className="w-12 h-12 text-nai-highlight mx-auto mb-4">
                <Youtube className="w-12 h-12 animate-pulse" />
              </div>
              <p className="text-gray-600">Loading videos...</p>
            </div>
          </div>
        )}

        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-16">
            <div className="bg-red-50 border border-red-200 rounded-lg p-6 max-w-md mx-auto">
              <p className="text-red-600 mb-4">{error}</p>
              <button 
                onClick={() => window.location.reload()}
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition-colors"
              >
                Try Again
              </button>
            </div>
          </div>
        )}

        {/* Videos Grid */}
        {!loading && !error && videos.length > 0 && (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <motion.div
                key={video.id}
                className="card overflow-hidden group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => toggleVideo(video.videoId)}
                whileHover={{ scale: 1.02 }}
              >
                 <div className="relative h-48">
                   {playingVideoId === video.videoId ? (
                     // Show video player when this video is selected
                     <div className="absolute inset-0 w-full h-full">
                            <iframe
                              src={`https://www.youtube.com/embed/${video.videoId}?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1&playsinline=1`}
                              title={video.title}
                              className="w-full h-full"
                              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                              allowFullScreen
                              frameBorder="0"
                            />
                       <button
                         onClick={(e) => {
                           e.stopPropagation()
                           toggleVideo(video.videoId)
                         }}
                         className="absolute top-2 right-2 bg-black/50 hover:bg-black/70 text-white rounded-full p-1 transition-colors z-20"
                       >
                         <X className="w-4 h-4" />
                       </button>
                     </div>
                   ) : (
                     // Show thumbnail when video is not playing
                     <>
                       <img
                         src={video.thumbnail}
                         alt={video.title}
                         className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                         loading="lazy"
                       />
                       <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-colors duration-300 flex items-center justify-center">
                         <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                           <Play className="w-8 h-8 text-white ml-1" />
                         </div>
                       </div>
                       <div className="absolute bottom-4 right-4 bg-black/80 text-white text-sm px-2 py-1 rounded">
                         {video.duration}
                       </div>
                       <div className="absolute bottom-4 left-4 bg-black/80 text-white text-xs px-2 py-1 rounded">
                         {video.views} views
                       </div>
                     </>
                   )}
                 </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-nai-dark mb-2 line-clamp-2">{video.title}</h3>
                  <p className="text-gray-600 text-sm line-clamp-3">{video.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* No Videos State */}
        {!loading && !error && videos.length === 0 && (
          <div className="text-center py-16">
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 max-w-md mx-auto">
              <Youtube className="w-12 h-12 text-gray-400 mx-auto mb-4" />
              <p className="text-gray-600">No videos available at the moment.</p>
            </div>
          </div>
        )}


        {/* Show More Videos CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <div className="flex justify-center items-center mb-4">
              <Play className="w-16 h-16 text-nai-highlight" />
            </div>
            <h3 className="text-2xl font-bold text-nai-dark mb-4">
              Explore Our Complete Video Library
            </h3>
            <p className="text-gray-600 mb-6">
              Access our full collection of educational videos, success stories, and expert guidance to accelerate your nursing journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => navigate('/pages/videos')}
                className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center transition-colors duration-300"
              >
                Watch All Videos
                <ArrowRight className="w-5 h-5" />
              </button>
              <a
                href={YOUTUBE_CHANNEL_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-red-500 hover:bg-red-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 justify-center transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
                Subscribe on YouTube
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default VideoHighlights
