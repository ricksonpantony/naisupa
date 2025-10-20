import React, { useState, useEffect } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Clock, Eye, ThumbsUp, Youtube, X } from 'lucide-react'
import { getAllVideos, YOUTUBE_CHANNEL_URL } from '../data/staticVideoData'
import YouTubeThumbnail from '../components/YouTubeThumbnail'

const VideosPage = () => {
  const [videos, setVideos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [playingVideoId, setPlayingVideoId] = useState(null)

  // Load videos from static data
  useEffect(() => {
    const loadVideos = () => {
      try {
        setLoading(true)
        setError(null)
        const fetchedVideos = getAllVideos()
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

  // Get featured video (first video from the list)
  const featuredVideo = videos.length > 0 ? videos[0] : null
  const otherVideos = videos.slice(1)

  return (
    <>
      <Helmet>
        <title>Videos</title>
        <meta name="description" content="NAI is the only NCLEX & OSCE coaching company helping nurses achieve their dream. Expert educators, proven success rates, and comprehensive OBA pathway support for internationally qualified nurses." />
        <link rel="canonical" href="https://nurseassistinternational.com/pages/videos" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Videos - Nurse Assist International" />
        <meta property="og:description" content="Watch educational videos, success stories, and training content from NAI's expert instructors." />
        <meta property="og:url" content="https://nurseassistinternational.com/pages/videos" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-nai-soft pt-20">
        <div className="container-responsive py-16">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nai-dark mb-6">
              Videos
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive library of educational videos, success stories, and expert guidance to support your nursing journey.
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

          {/* Featured Video */}
          {!loading && !error && featuredVideo && (
            <motion.div 
              className="bg-white rounded-xl p-8 shadow-lg mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-3xl font-bold text-nai-dark mb-4">Featured Video</h2>
                  <h3 className="text-xl font-semibold text-nai-highlight mb-3 line-clamp-2">{featuredVideo.title}</h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {featuredVideo.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{featuredVideo.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      <span>{featuredVideo.views} views</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      <span>{featuredVideo.likes} likes</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => toggleVideo(featuredVideo.videoId)}
                    className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 transition-colors"
                  >
                    <Play className="w-5 h-5" />
                    Watch Now
                  </button>
                </div>
                <div className="relative">
                  <div className="aspect-video bg-gray-200 rounded-xl overflow-hidden cursor-pointer" onClick={() => toggleVideo(featuredVideo.videoId)}>
                    {playingVideoId === featuredVideo.videoId ? (
                      // Show video player when featured video is selected
                      <div className="absolute inset-0 w-full h-full">
                        <iframe
                          src={`https://www.youtube.com/embed/${featuredVideo.videoId}?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1&playsinline=1`}
                          title={featuredVideo.title}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                          frameBorder="0"
                        />
                        <button
                          onClick={(e) => {
                            e.stopPropagation()
                            toggleVideo(featuredVideo.videoId)
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
                          src={featuredVideo.thumbnail}
                          alt={featuredVideo.title}
                          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                        />
                        <div className="absolute inset-0 bg-black/20 hover:bg-black/30 transition-colors flex items-center justify-center">
                          <div className="bg-white/90 rounded-full p-4 hover:scale-110 transition-transform">
                            <Play className="w-8 h-8 text-nai-highlight" />
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* All Videos Grid */}
          {!loading && !error && otherVideos.length > 0 && (
            <motion.div 
              className="space-y-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div>
                <h2 className="text-2xl font-bold text-nai-dark mb-6">All Videos</h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {otherVideos.map((video, videoIndex) => (
                    <motion.div
                      key={video.id}
                      className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.1 * videoIndex }}
                      onClick={() => toggleVideo(video.videoId)}
                    >
                      <div className="relative aspect-video bg-gray-200">
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
                              className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
                              <div className="bg-white/90 rounded-full p-3">
                                <Play className="w-6 h-6 text-nai-highlight" />
                              </div>
                            </div>
                            <div className="absolute bottom-2 right-2 bg-black/70 text-white px-2 py-1 rounded text-sm">
                              {video.duration}
                            </div>
                            <div className="absolute bottom-2 left-2 bg-black/70 text-white px-2 py-1 rounded text-xs">
                              {video.views} views
                            </div>
                          </>
                        )}
                      </div>
                      <div className="p-4">
                        <h3 className="font-semibold text-nai-dark mb-2 line-clamp-2">{video.title}</h3>
                        <div className="flex items-center justify-between text-sm text-gray-500">
                          <div className="flex items-center gap-1">
                            <Eye className="w-4 h-4" />
                            <span>{video.views}</span>
                          </div>
                          <span>{video.channelTitle}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
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

          {/* Show More Videos Button */}
          {!loading && !error && videos.length > 0 && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex justify-center items-center mb-4">
                  <Youtube className="w-16 h-16 text-red-500" />
                </div>
                <h3 className="text-2xl font-bold text-nai-dark mb-4">
                  Want to See More Videos?
                </h3>
                <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                  We have many more educational videos, success stories, and training content on our YouTube channel. 
                  Subscribe to stay updated with our latest content!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href={YOUTUBE_CHANNEL_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 justify-center transition-colors duration-300"
                  >
                    <Youtube className="w-6 h-6" />
                    Visit Our YouTube Channel
                  </a>
                  <a
                    href={`${YOUTUBE_CHANNEL_URL}?sub_confirmation=1`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-800 hover:bg-gray-900 text-white px-8 py-4 rounded-lg font-semibold text-lg flex items-center gap-3 justify-center transition-colors duration-300"
                  >
                    <Youtube className="w-6 h-6" />
                    Subscribe Now
                  </a>
                </div>
                <p className="text-sm text-gray-500 mt-4">
                  Showing {videos.length} latest long-form videos • More available on YouTube
                </p>
              </div>
            </motion.div>
          )}

          {/* CTA Section */}
          <motion.div 
            className="text-center mt-16 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-xl p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready for Personalized Guidance?</h2>
            <p className="text-xl mb-6 opacity-90">While our videos provide great insights, personalized coaching accelerates your success.</p>
            <a 
              href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20want%20to%20learn%20more%20about%20your%20personalized%20coaching"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-nai-highlight px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Get Personal Coaching
            </a>
          </motion.div>
        </div>

      </div>
    </>
  )
}

export default VideosPage
