import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, X, Clock, Eye, ThumbsUp } from 'lucide-react'
import { getAllVideos } from '../data/staticVideoData'

const YouTubeTestPage = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [debugInfo, setDebugInfo] = useState({})
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [videoError, setVideoError] = useState(false)

  useEffect(() => {
    const loadStaticVideos = () => {
      try {
        setLoading(true)
        setError(null)
        
        // Log static data info
        const staticInfo = {
          dataSource: "Static Video Data",
          totalVideos: "40+ videos",
          lastUpdated: "2024-01-15",
          NODE_ENV: import.meta.env.NODE_ENV,
          MODE: import.meta.env.MODE
        }
        setDebugInfo(staticInfo)
        console.log("Static Data Info:", staticInfo)
        
        const fetchedVideos = getAllVideos().slice(0, 5)
        setVideos(fetchedVideos)
        console.log("Loaded videos:", fetchedVideos)
        
      } catch (err) {
        console.error('Error loading static videos:', err)
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    loadStaticVideos()
  }, [])

  const openVideo = (video) => {
    setSelectedVideo(video)
    setVideoError(false)
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <Helmet>
        <title>YouTube API Test - NAI</title>
        <meta name="description" content="Test page for YouTube API integration" />
      </Helmet>

      <div className="max-w-4xl mx-auto px-4">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Video Gallery Test Page</h1>
          
          {/* Debug Information */}
          <div className="mb-8 p-4 bg-gray-100 rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Static Data Info:</h2>
            <div className="space-y-2">
              <p><strong>Data Source:</strong> {debugInfo.dataSource}</p>
              <p><strong>Total Videos:</strong> {debugInfo.totalVideos}</p>
              <p><strong>Last Updated:</strong> {debugInfo.lastUpdated}</p>
              <p><strong>NODE_ENV:</strong> {debugInfo.NODE_ENV}</p>
              <p><strong>MODE:</strong> {debugInfo.MODE}</p>
            </div>
          </div>

          {/* Loading State */}
          {loading && (
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              <p className="mt-2 text-gray-600">Loading static videos...</p>
            </div>
          )}

          {/* Error State */}
          {error && (
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6">
              <h3 className="font-bold">Error:</h3>
              <p>{error}</p>
            </div>
          )}

          {/* Videos Display */}
          {!loading && !error && (
            <div>
              <h2 className="text-2xl font-semibold mb-4">Videos Found: {videos.length}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map((video) => (
                  <div key={video.id} className="bg-white border rounded-lg overflow-hidden shadow-sm">
                    <img 
                      src={video.thumbnail} 
                      alt={video.title}
                      className="w-full h-48 object-cover"
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/320x180?text=Video+Thumbnail'
                      }}
                    />
                    <div className="p-4">
                      <h3 className="font-semibold text-sm mb-2 line-clamp-2">{video.title}</h3>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <span>{video.duration}</span>
                        <span>{video.views} views</span>
                      </div>
                      <button
                        onClick={() => openVideo(video)}
                        className="mt-3 w-full bg-nai-highlight text-white py-2 px-4 rounded hover:bg-nai-deep-teal transition-colors flex items-center justify-center gap-2"
                      >
                        <Play className="w-4 h-4" />
                        Watch Video
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Instructions */}
          <div className="mt-8 p-4 bg-green-50 rounded-lg">
            <h3 className="font-semibold text-green-900 mb-2">Static Video Data:</h3>
            <ul className="list-disc list-inside space-y-1 text-sm text-green-800">
              <li>All videos are now loaded from static data instead of YouTube API</li>
              <li>No API key or external dependencies required</li>
              <li>Faster loading times and more reliable performance</li>
              <li>All YouTube thumbnails are automatically generated</li>
              <li>Videos are curated and organized for better user experience</li>
            </ul>
          </div>
        </div>

        {/* Video Modal */}
        <AnimatePresence>
          {selectedVideo && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedVideo(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative bg-white rounded-xl overflow-hidden max-w-4xl w-full max-h-[90vh]"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Video Container */}
                <div className="aspect-video bg-gray-900">
                  {videoError ? (
                    <div className="w-full h-full flex items-center justify-center text-white">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Video Unavailable</h4>
                        <p className="text-sm text-gray-300 mb-4">Unable to load video. Please try again later.</p>
                        <button 
                          onClick={() => {
                            setVideoError(false)
                          }}
                          className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                          Retry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      src={`https://www.youtube-nocookie.com/embed/${selectedVideo.videoId}?controls=1&rel=0&showinfo=0&modestbranding=1&fs=1&origin=${window.location.origin}`}
                      title={selectedVideo.title}
                      className="w-full h-full"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      frameBorder="0"
                      onError={() => setVideoError(true)}
                      onLoad={() => console.log('Video iframe loaded')}
                    />
                  )}
                </div>

                {/* Video Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-nai-dark mb-2">{selectedVideo.title}</h3>
                  <p className="text-gray-600 mb-4">{selectedVideo.description}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{selectedVideo.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{selectedVideo.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{selectedVideo.likes} likes</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default YouTubeTestPage
