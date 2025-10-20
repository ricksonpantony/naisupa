import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Heart, Trophy, Users, Star, Award, Target, TrendingUp, Lightbulb } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost13 = () => {
  const { backToNewsUrl } = useBlogNavigation()
  const [readingProgress, setReadingProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  
  // Handle scroll for reading progress
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const progress = (window.scrollY / totalHeight) * 100
      setReadingProgress(Math.min(progress, 100))
    }

    const listenerOptions = { passive: true }
    window.addEventListener('scroll', handleScroll, listenerOptions)
    return () => window.removeEventListener('scroll', handleScroll, listenerOptions)
  }, [])
  
  // Helper function to format dates
  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-AU', {
      year: 'numeric',
      month: 'long', 
      day: 'numeric'
    })
  }

  // Copy URL to clipboard
  const copyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch (err) {
      console.error('Failed to copy URL:', err)
    }
  }

  // Handle share
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'NAI: Pioneering Success in OSCE Training and Inspiring a Generation of Nurses',
        text: 'NAI has earned a reputation for producing outstanding OSCE results with 99% pass rate, unlimited training access, and expert instructors.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'NAI: Pioneering Success in OSCE Training and Inspiring a Generation of Nurses',
    date: '2025-01-03',
    author: 'NAI Leadership Team',
    category: 'NAI Excellence',
    excerpt: 'NAI has earned a reputation for producing outstanding OSCE results with 99% pass rate, unlimited training access, expert instructors, and personalized feedback that empowers nurses beyond the classroom.',
    featuredImage: getGeneralImageUrl('nursing-education.webp'),
    tags: ['NAI', 'OSCE Training', 'Nursing Education', 'Success Stories', 'Professional Development', 'Excellence'],
    views: 5128,
    likes: 243,
    comments: 67
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/nai-pioneering-success-in-osce-training-and-inspiring-a-generation-of-nurses`}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-nai-teal to-nai-highlight transition-all duration-300 shadow-sm"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Professional Blog Layout with Teal Theme */}
      <div className="min-h-screen bg-gradient-to-br from-nai-soft via-white to-teal-50">
        
        {/* Enhanced Header */}
        <header className="w-full pt-20 pb-8 bg-white border-b border-nai-teal/20 shadow-sm">
          <div className="container-full-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link to="/" className="hover:text-nai-teal/600 transition-colors">Home</Link>
                <span>/</span>
                <Link to={backToNewsUrl} className="hover:text-nai-teal/600 transition-colors">News</Link>
                <span>/</span>
                <span className="text-gray-900">NAI Excellence</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nai-teal to-nai-highlight text-white rounded-full px-4 py-2 text-sm font-bold mb-6 shadow-lg">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>

              {/* Professional Black Title - Full Width */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight break-words tracking-tight">
                {post.title}
              </h1>

              {/* Enhanced Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2 bg-nai-teal/50 rounded-lg px-3 py-2">
                  <User className="w-4 h-4 text-nai-teal/600" />
                  <span className="text-sm font-medium text-gray-800">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-nai-teal/50 rounded-lg px-3 py-2">
                  <Calendar className="w-4 h-4 text-nai-teal/600" />
                  <span className="text-sm font-medium text-gray-800">{formatDate(post.date)}</span>
                </div>                <div className="flex items-center gap-2 bg-nai-teal/50 rounded-lg px-3 py-2">
                  <Eye className="w-4 h-4 text-nai-teal/600" />
                  <span className="text-sm font-medium text-gray-800">{post.views?.toLocaleString()} views</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Link 
                  to={backToNewsUrl}
                  className="flex items-center gap-2 text-gray-600 hover:text-nai-teal/600 transition-colors bg-nai-teal/50 hover:bg-nai-teal/200 px-4 py-2 rounded-lg"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to News</span>
                </Link>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-600 hover:text-nai-teal/600 transition-colors bg-nai-teal/50 hover:bg-nai-teal/200 px-4 py-2 rounded-lg"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? 'Copied!' : 'Share Article'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Professional Hero Image Section - Mobile Optimized */}
        <section className="w-full bg-gradient-to-br from-nai-soft via-white to-blue-100 py-8 sm:py-12 lg:py-16">
          <motion.div
            className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Content Side - Mobile First */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-3 sm:mb-4 break-words">NAI OSCE Training Excellence</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    {post.excerpt}
                  </p>
                  
                  {/* Key Points - Mobile Optimized */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">99% OSCE pass rate achievement</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Expert instructors and mentorship</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Unlimited training and lab access</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Holistic community support</span>
                    </div>
                  </div>
                  
                  {/* Tags - Mobile Scrollable */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags && post.tags.slice(0, 6).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-nai-soft text-nai-teal px-2 sm:px-3 py-1 rounded-full text-xs font-medium border border-nai-teal/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Image Side - Mobile Optimized */}
              <div className="order-1 lg:order-2">
                <div className="space-y-4">
                  {/* Image Container */}
                  <div className="relative">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nai-teal/10 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>
                  </div>
                  
                  {/* Stats Bar - Below Image */}
                  <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-5 shadow-xl border border-gray-100">
                    <div className="grid grid-cols-3 gap-3 sm:gap-4 text-center">
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">99%</div>
                        <div className="text-xs sm:text-sm text-gray-600">Pass Rate</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Expert</div>
                        <div className="text-xs sm:text-sm text-gray-600">Training</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Success</div>
                        <div className="text-xs sm:text-sm text-gray-600">Stories</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Content Area */}
        <main className="w-full py-8 sm:py-12 lg:py-16 bg-nai-soft">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
            <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-12 xl:gap-16">
              
              {/* Article Content */}
              <article className="lg:col-span-3 xl:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-nai-teal/20"
                >
                  {/* Table of Contents */}
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-md">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-nai-teal flex-shrink-0" />
                      NAI Excellence Story
                    </h3>
                    <nav className="space-y-1.5 sm:space-y-2">
                      <a href="#pass-rate-success" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-sm font-medium">
                        1. 99% Pass Rate Achievement
                      </a>
                      <a href="#unlimited-training" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-sm font-medium">
                        2. Unlimited Training & Lab Access
                      </a>
                      <a href="#expert-instruction" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-sm font-medium">
                        3. Expert Instructors & Curriculum
                      </a>
                      <a href="#beyond-classroom" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-sm font-medium">
                        4. Empowering Beyond the Classroom
                      </a>
                      <a href="#success-stories" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-sm font-medium">
                        5. Alumni Success Stories
                      </a>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal/900 prose-p:text-gray-700 prose-a:text-nai-teal/600 prose-strong:text-nai-teal/600">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 border-l-4 border-nai-teal/500 rounded-r-xl p-8 mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/700 mb-6 flex items-center gap-3">
                        <Trophy className="w-8 h-8" />
                        A Pioneer in Nursing Excellence
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        NAI has earned a reputation for producing outstanding OSCE results and inspiring a generation of nurses. What makes NAI a pioneer in nursing education is not just the impressive statistics, but the commitment to holistic development and community building.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border border-nai-teal/200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Core Achievements:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 99% OSCE pass rate consistency</li>
                              <li>• Unlimited simulation lab access</li>
                              <li>• Personalized learning approach</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Impact Areas:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Professional skill development</li>
                              <li>• Career guidance and mentorship</li>
                              <li>• Supportive learning community</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 1: 99% Pass Rate */}
                    <h2 id="pass-rate-success" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-nai-teal/500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">1</span>
                      99% Pass Rate Success
                    </h2>
                    <div className="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong className="text-nai-teal/600">NAI students consistently achieve a 99% pass rate in the OSCE</strong> thanks to comprehensive training methodologies, unlimited access to simulation labs, and personalized attention to each student's learning needs.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 rounded-xl p-8 border border-nai-teal/200">
                          <h4 className="text-2xl font-bold text-nai-teal/800 mb-6">Success Factors</h4>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h5 className="font-bold text-nai-teal/700 mb-4">Training Excellence:</h5>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4 border border-nai-teal/20">
                                  <h6 className="font-semibold text-nai-teal/800 mb-2">Comprehensive Curriculum</h6>
                                  <p className="text-sm text-gray-700">Structured learning covering all OSCE stations</p>
                                  <p className="text-xs text-nai-teal/600 mt-1">Evidence-based training methods</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-nai-teal/20">
                                  <h6 className="font-semibold text-nai-teal/800 mb-2">Realistic Simulations</h6>
                                  <p className="text-sm text-gray-700">State-of-the-art simulation laboratories</p>
                                  <p className="text-xs text-nai-teal/600 mt-1">Real-world scenario practice</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h5 className="font-bold text-nai-teal/700 mb-4">Student Support:</h5>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4 border border-nai-teal/20">
                                  <h6 className="font-semibold text-nai-teal/800 mb-2">Individual Assessment</h6>
                                  <p className="text-sm text-gray-700">Personalized skill evaluation and feedback</p>
                                  <p className="text-xs text-nai-teal/600 mt-1">Targeted improvement plans</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-nai-teal/20">
                                  <h6 className="font-semibold text-nai-teal/800 mb-2">Continuous Monitoring</h6>
                                  <p className="text-sm text-gray-700">Progress tracking and adjustment</p>
                                  <p className="text-xs text-nai-teal/600 mt-1">Ensuring readiness for success</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                          <h4 className="text-2xl font-bold text-green-800 mb-6">Pass Rate Breakdown</h4>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100 text-center">
                              <div className="text-4xl font-bold text-green-600 mb-2">99%</div>
                              <div className="text-lg font-semibold text-green-700 mb-2">Overall Pass Rate</div>
                              <p className="text-sm text-gray-600">Consistent excellence across all cohorts</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100 text-center">
                              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
                              <div className="text-lg font-semibold text-green-700 mb-2">First Attempt</div>
                              <p className="text-sm text-gray-600">Students passing on their first try</p>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-green-100 text-center">
                              <div className="text-4xl font-bold text-green-600 mb-2">100%</div>
                              <div className="text-lg font-semibold text-green-700 mb-2">Satisfaction</div>
                              <p className="text-sm text-gray-600">Student satisfaction with training</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Unlimited Training */}
                    <h2 id="unlimited-training" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">2</span>
                      Unlimited Training & Lab Access
                    </h2>
                    <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong className="text-blue-600">Students can practice as often as needed</strong>, honing their skills in realistic scenarios until they achieve mastery. This unlimited access philosophy ensures no student is left behind.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-8 border border-blue-200">
                          <h4 className="text-2xl font-bold text-blue-800 mb-6">Training Facilities & Resources</h4>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">Simulation Labs</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• High-fidelity patient simulators</li>
                                  <li>• Realistic hospital environments</li>
                                  <li>• Latest medical equipment</li>
                                  <li>• Scenario-based learning</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">Practice Sessions</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• 24/7 facility availability</li>
                                  <li>• Individual and group practice</li>
                                  <li>• Instructor supervision available</li>
                                  <li>• Self-directed learning options</li>
                                </ul>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">Skills Stations</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Clinical assessment areas</li>
                                  <li>• Medication administration</li>
                                  <li>• Wound care and procedures</li>
                                  <li>• Communication scenarios</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">Resource Library</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Comprehensive study materials</li>
                                  <li>• Video learning resources</li>
                                  <li>• Practice examination banks</li>
                                  <li>• Reference materials access</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* NAI Success Section */}
                    <div className="bg-gradient-to-r from-nai-teal/100 via-nai-deep-teal50 to-nai-teal/100 border-2 border-nai-teal/300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-nai-teal/900 mb-8">Join the NAI Success Story</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                        NAI's commitment to excellence and community makes it more than just a review center – it's a catalyst for professional growth and inspiration in the nursing profession.
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🏆</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">99% Pass Rate</h4>
                          <p className="text-sm text-gray-600">Proven excellence in OSCE</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🔄</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Unlimited Access</h4>
                          <p className="text-sm text-gray-600">Practice until you master</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">👨‍🏫</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Expert Instruction</h4>
                          <p className="text-sm text-gray-600">World-class educators</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">💝</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Community Support</h4>
                          <p className="text-sm text-gray-600">Holistic development approach</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Join NAI Excellence
                        </Link>
                        <Link to="/pages/osce-preparation" className="border-2 border-nai-teal/600 text-nai-teal/600 hover:bg-nai-teal/600 hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                          Explore Training Programs
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-gray-600 text-sm sm:text-base">
                        Found this helpful? Share it with fellow nurses and aspiring professionals.
                      </p>
                      <button 
                        onClick={handleShare}
                        className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-6 py-2 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl"
                      >
                        Share Article
                      </button>
                    </div>
                  </div>
                </motion.div>
              </article>

              {/* Enhanced Sidebar */}
              <aside className="lg:col-span-1 xl:col-span-1 mt-8 lg:mt-0">
                <motion.div
                  className="lg:sticky lg:top-28 space-y-4 sm:space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 flex items-center gap-1.5 sm:gap-2">
                        <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-nai-teal flex-shrink-0" />
                        <span className="break-words">Reading Progress</span>
                      </h3>
                      <span className="text-xs sm:text-sm text-nai-teal font-bold bg-nai-soft px-2 py-0.5 sm:py-1 rounded-full flex-shrink-0">
                        {Math.round(readingProgress)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-2 sm:mb-3">
                      <div 
                        className="bg-gradient-to-r from-nai-teal to-nai-blue h-2 sm:h-3 rounded-full transition-all duration-300"
                        style={{ width: `${readingProgress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center break-words">
                      {readingProgress < 25 ? "Just getting started..." : 
                       readingProgress < 50 ? "Making great progress!" :
                       readingProgress < 75 ? "More than halfway there!" : "Almost finished!"}
                    </p>
                  </div>

                  <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                      <User className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-nai-teal flex-shrink-0" />
                      <span className="break-words">About the Author</span>
                    </h3>
                    <div className="text-center mb-3 sm:mb-4">
                      <img 
                        src={getGeneralImageUrl('ALLTECHZONE.webp')} 
                        alt="NAI Editorial Team" 
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto mb-2 sm:mb-3 border-2 border-gray-200"
                      />
                      <div className="text-sm sm:text-base font-bold text-gray-900 break-words">NAI Editorial Team</div>
                      <div className="text-xs sm:text-sm text-nai-teal font-medium break-words">AURN Registration Specialists</div>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed text-center break-words mb-3 sm:mb-4">
                      Expert team dedicated to helping international nurses achieve AHPRA registration and succeed in their Australian nursing careers.
                    </p>
                    <div className="pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                        <div>
                          <div className="text-base sm:text-lg font-bold text-nai-teal break-words">5000+</div>
                          <div className="text-xs text-gray-600 break-words">Success Stories</div>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-bold text-nai-teal break-words">6+ Years</div>
                          <div className="text-xs text-gray-600 break-words">Experience</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 border-2 border-cyan-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="mb-3 sm:mb-4">
                        <img 
                          src={post.featuredImage}
                          alt="Newsletter" 
                          className="w-full h-32 sm:h-40 object-cover rounded-lg sm:rounded-xl"
                        />
                      </div>
                      <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5 sm:mb-2 break-words">Stay Updated</h3>
                      <p className="text-xs sm:text-sm text-gray-600 break-words leading-relaxed">
                        Join 5000+ International Nurses Worldwide
                      </p>
                    </div>
                    <a
                      href="https://wa.me/61478320397?text=Hi,%20I%20would%20like%20to%20learn%20more%20about%20AURN%20registration"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-700 hover:to-teal-700 text-white text-center px-4 py-2.5 sm:py-3 rounded-lg font-bold text-xs sm:text-sm transition-all shadow-md hover:shadow-lg"
                    >
                      Chat With Us
                    </a>
                    <p className="text-xs text-gray-500 text-center mt-2 sm:mt-3 break-words">
                      Get expert guidance for your nursing journey
                    </p>
                  </div>
                  
                  <div className="bg-white border border-gray-200 rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg">
                    <h3 className="text-sm sm:text-base font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-1.5 sm:gap-2">
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-nai-teal flex-shrink-0" />
                      <span className="break-words">Resources</span>
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <a href="/pages/nclex-ngn" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors break-words">
                        → NCLEX-RN Preparation
                      </a>
                      <a href="/pages/osce-preparation" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors break-words">
                        → OSCE Clinical Assessment
                      </a>
                      <a href="/pages/contact" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors break-words">
                        → Free Consultation
                      </a>
                      <a href="/pages/success-stories" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors break-words">
                        → Success Stories
                      </a>
                    </div>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </main>

        {/* Enhanced CTA Section */}
        <section className="w-full bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal py-16 sm:py-20 md:py-24">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-7xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-4 sm:mb-6 break-words leading-tight">Ready to Start Your AURN Registration Journey?</h2>
              <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/95 mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto break-words px-4">
                Join thousands of international nurses who have successfully achieved AHPRA registration with NAI's comprehensive training and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold transition-all hover:bg-gray-100 shadow-lg text-sm sm:text-base lg:text-lg min-h-[44px] flex items-center justify-center break-words"
                >
                  Get Free Consultation
                </Link>
                <Link 
                  to="/pages/osce-preparation" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-lg font-bold transition-all text-sm sm:text-base lg:text-lg min-h-[44px] flex items-center justify-center break-words"
                >
                  Explore OSCE Training
                </Link>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 break-words">5000+</div>
                  <div className="text-xs sm:text-sm lg:text-base text-white/90 break-words">Success Stories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 break-words">95%</div>
                  <div className="text-xs sm:text-sm lg:text-base text-white/90 break-words">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20 sm:col-span-2 md:col-span-1">
                  <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2 break-words">Expert</div>
                  <div className="text-xs sm:text-sm lg:text-base text-white/90 break-words">Guidance & Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal py-16 sm:py-20 md:py-24">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Trophy className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-6 sm:mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-2">
                Ready to Start Your Nursing Journey?
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/95 mb-8 sm:mb-10 leading-relaxed max-w-4xl mx-auto px-4">
                Join thousands of successful nurses who transformed their careers with NAI's expert guidance and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-8 sm:mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold transition-all hover:bg-gray-100 hover:scale-105 shadow-lg text-base sm:text-lg"
                >
                  Get Started Today
                </Link>
                <Link 
                  to="/pages/courses" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-6 sm:px-8 md:px-10 py-3 sm:py-4 rounded-lg font-bold transition-all hover:scale-105 text-base sm:text-lg"
                >
                  Explore Programs
                </Link>
              </div>
              
              {/* Success Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-4xl mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">5000+</div>
                  <div className="text-sm sm:text-base text-white/90">Success Stories</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">6+ Years</div>
                  <div className="text-sm sm:text-base text-white/90">Excellence</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-lg sm:rounded-xl p-4 sm:p-6 border border-white/20">
                  <div className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2">Expert</div>
                  <div className="text-sm sm:text-base text-white/90">Support Team</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost13