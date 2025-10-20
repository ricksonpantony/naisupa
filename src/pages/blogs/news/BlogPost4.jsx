import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Briefcase, GraduationCap, Award, MapPin } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost4 = () => {
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
        title: 'Becoming an RN in Australia: Your Roadmap to a Rewarding Career with NAI',
        text: 'Becoming a registered nurse in Australia offers many benefits – from competitive salaries and job security to opportunities for permanent residency.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'OSCE Success: Excelling in Patient Assessment Like a Pro',
    date: '2025-04-17',
    author: 'NAI OSCE Experts',
    category: 'OSCE Preparation',
    excerpt: 'Master the A to E patient assessment approach and ace your OSCE with expert tips, practical techniques, and proven strategies from NAI.',
    featuredImage: getBlogImageUrl('b4.webp'),
    tags: ['OSCE', 'Patient Assessment', 'A to E Approach', 'Clinical Skills', 'AHPRA', 'NAI'],
    views: 2876,
    likes: 98,
    comments: 19
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/osce-success-excelling-in-patient-assessment-like-a-pro`}
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
        
        {/* Enhanced Full-Width Header */}
        <header className="w-full pt-20 pb-8 sm:pb-10 md:pb-12 bg-gradient-to-br from-white via-nai-soft/30 to-blue-50 border-b-2 border-nai-teal/30 shadow-lg">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              {/* Breadcrumb - Improved */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6 overflow-x-auto whitespace-nowrap pb-2">
                <Link to="/" className="hover:text-nai-teal transition-colors font-medium">Home</Link>
                <span className="text-nai-teal">→</span>
                <Link to={backToNewsUrl} className="hover:text-nai-teal transition-colors font-medium">News</Link>
                <span className="text-nai-teal">→</span>
                <span className="text-nai-teal font-semibold">{post.category}</span>
              </nav>

              {/* Category Badge - Enhanced Visibility */}
              <div className="inline-flex items-center gap-2 bg-nai-teal text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-bold mb-6 sm:mb-8 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Tag className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">{post.category}</span>
              </div>

              {/* Professional Black Title - Full Width */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight break-words tracking-tight">
                {post.title}
              </h1>

              {/* Enhanced Meta Info Grid */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-md border border-nai-teal/20 hover:shadow-lg transition-all">
                  <User className="w-4 h-4 sm:w-5 sm:h-5 text-nai-teal flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700 truncate">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-md border border-nai-teal/20 hover:shadow-lg transition-all">
                  <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-nai-teal flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700 truncate">{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-md border border-nai-teal/20 hover:shadow-lg transition-all">
                  <Eye className="w-4 h-4 sm:w-5 sm:h-5 text-nai-teal flex-shrink-0" />
                  <span className="text-sm sm:text-base font-semibold text-gray-700 truncate">{post.views?.toLocaleString()} views</span>
                </div>
              </div>

              {/* Action Buttons - Enhanced Design */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link 
                  to={backToNewsUrl}
                  className="flex items-center gap-2 bg-white hover:bg-nai-teal text-nai-teal hover:text-white transition-all duration-300 px-5 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl border-2 border-nai-teal min-h-[44px]">
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">Back to News</span>
                </Link>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-gradient-to-r from-nai-teal to-nai-highlight hover:from-nai-blue hover:to-nai-teal text-white transition-all duration-300 px-5 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg hover:shadow-xl min-h-[44px]">
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                  <span className="whitespace-nowrap">{copied ? 'Copied!' : 'Share Article'}</span>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-3 sm:mb-4 break-words">OSCE Patient Assessment Excellence</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    {post.excerpt}
                  </p>
                  
                  {/* Key Points - Mobile Optimized */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Master the A to E assessment approach</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Systematic patient evaluation techniques</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Recognize abnormalities and escalate</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Expert OSCE tips and strategies</span>
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
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">A to E</div>
                        <div className="text-xs sm:text-sm text-gray-600">Assessment</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">OSCE</div>
                        <div className="text-xs sm:text-sm text-gray-600">Excellence</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Expert</div>
                        <div className="text-xs sm:text-sm text-gray-600">Training</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Content Area - Mobile Optimized */}
        <main className="w-full py-8 sm:py-12 lg:py-16 bg-nai-soft">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
            <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-8 xl:gap-12">
              
              {/* Article Content - Mobile First */}
              <article className="lg:col-span-3 xl:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-100"
                >
                  {/* Table of Contents */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 mb-8 sm:mb-12 sm:shadow-md sm:border sm:border-blue-200">
                    <h3 className="text-xl sm:text-2xl font-bold text-nai-teal mb-4 sm:mb-5 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                      <span className="break-words">OSCE Success Guide</span>
                    </h3>
                    <nav className="space-y-3">
                      <a href="#why-patient-assessment" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-2 text-base sm:text-sm font-semibold">
                        1. Why Patient Assessment Matters in OSCE
                      </a>
                      <a href="#mastering-a-to-e" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-2 text-base sm:text-sm font-semibold">
                        2. Mastering the A to E Assessment
                      </a>
                      <a href="#common-pitfalls" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-2 text-base sm:text-sm font-semibold">
                        3. Common OSCE Pitfalls & How to Avoid Them
                      </a>
                      <a href="#success-tips" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-2 text-base sm:text-sm font-semibold">
                        4. Final OSCE Success Tips
                      </a>
                      <a href="#nai-training" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-2 text-base sm:text-sm font-semibold">
                        5. Ace Your OSCE with NAI
                      </a>
                    </nav>
                  </div>

                    {/* Main Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal900 prose-p:text-gray-700 prose-a:text-nai-teal prose-strong:text-nai-teal">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal50 to-nai-deep-teal50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:border-l-4 sm:border-nai-teal500">
                      <h3 className="text-2xl sm:text-3xl font-bold text-nai-teal700 mb-5 sm:mb-6 flex items-center gap-3">
                        <Briefcase className="w-8 h-8 sm:w-9 sm:h-9" />
                        OSCE Success Starts Here
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-5 sm:mb-6">
                        The Objective Structured Clinical Examination (OSCE) is a crucial milestone for internationally qualified nurses seeking Australian registration. One of the most fundamental skills tested in OSCE is patient assessment—your ability to systematically evaluate a patient's condition, recognize abnormalities, and respond appropriately.
                      </p>
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-5 sm:mb-6">
                        In this blog, we'll break down essential assessment techniques, common challenges, and expert tips to help you ace this station with confidence!
                      </p>
                    </div>

                    {/* Section 1: Why Patient Assessment Matters */}
                    <h2 id="why-patient-assessment" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-nai-teal text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">1</span>
                      <span className="leading-tight">Why Patient Assessment Matters in OSCE?</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-nai-teal50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-nai-teal/20">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-5 sm:mb-6">
                        The OSCE patient assessment station evaluates your ability to:
                      </p>
                      
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-6 sm:p-8 sm:border sm:border-green-200 mb-5 sm:mb-6">
                        <div className="space-y-4 sm:space-y-5">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-bold text-green-700 mb-2 text-base sm:text-lg">Perform a structured and systematic assessment</h5>
                              <p className="text-gray-700 text-base sm:text-sm">Demonstrate your ability to conduct thorough patient evaluations following established protocols</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 sm:gap-4">
                            <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-bold text-green-700 mb-2 text-base sm:text-lg">Use the A to E (Airway, Breathing, Circulation, Disability, Exposure) approach</h5>
                              <p className="text-gray-700 text-base sm:text-sm">Apply the gold standard systematic assessment framework</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 sm:gap-4">
                            <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-bold text-green-700 mb-2 text-base sm:text-lg">Recognize abnormal findings and escalate appropriately</h5>
                              <p className="text-gray-700 text-base sm:text-sm">Identify critical issues and take appropriate action</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 sm:gap-4">
                            <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-bold text-green-700 mb-2 text-base sm:text-lg">Communicate effectively with the patient</h5>
                              <p className="text-gray-700 text-base sm:text-sm">Maintain clear, compassionate communication throughout</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3 sm:gap-4">
                            <CheckCircle className="w-7 h-7 sm:w-8 sm:h-8 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <h5 className="font-bold text-green-700 mb-2 text-base sm:text-lg">Document findings accurately</h5>
                              <p className="text-gray-700 text-base sm:text-sm">Record all observations and interventions properly</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 italic bg-green-50 rounded-lg p-5 sm:p-6 sm:border-l-4 sm:border-green-500 font-semibold">
                        A strong patient assessment is the foundation of safe and effective nursing care, making it one of the most critical OSCE stations.
                      </p>
                    </div>

                    {/* Section 2: Mastering A to E */}
                    <h2 id="mastering-a-to-e" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-green-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">2</span>
                      <span className="leading-tight">Mastering the A to E Assessment</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-green-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-green-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8 font-semibold">
                        The A to E (ABCDE) approach is the gold standard for assessing critically ill patients. Follow this structured method to ensure a thorough and systematic assessment during your OSCE:
                      </p>
                      
                      {/* Airway */}
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-6 sm:p-8 mb-6 sm:border sm:border-red-200">
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                          <div className="bg-red-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">A</div>
                          <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-red-700 mb-2">Airway (A) – Is the Airway Clear?</h4>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-700 mb-4">
                          <li className="flex items-start gap-3">
                            <span className="text-red-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Check for airway obstruction (choking, swelling, foreign body)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Look for signs of stridor, hoarseness, or difficulty speaking</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-red-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">If obstructed, perform airway maneuvers (head-tilt, jaw thrust, suctioning)</span>
                          </li>
                        </ul>
                        <div className="bg-white/80 rounded-lg p-4 border-l-4 border-red-500">
                          <p className="text-sm font-semibold text-gray-800">💡 OSCE Tip: If the patient is speaking normally, the airway is likely clear!</p>
                        </div>
                      </div>

                      {/* Breathing */}
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 sm:p-8 mb-6 sm:border sm:border-blue-200">
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                          <div className="bg-blue-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">B</div>
                          <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-blue-700 mb-2">Breathing (B) – Is the Patient Breathing Adequately?</h4>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-700 mb-4">
                          <li className="flex items-start gap-3">
                            <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Observe respiratory rate, depth, and effort</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Check oxygen saturation (SpO₂) and auscultate lung sounds</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Look for signs of cyanosis, use of accessory muscles, or asymmetrical chest movement</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-blue-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Intervene if needed (oxygen therapy, nebulizers, positioning)</span>
                          </li>
                        </ul>
                        <div className="bg-white/80 rounded-lg p-4 border-l-4 border-blue-500">
                          <p className="text-sm font-semibold text-gray-800">💡 OSCE Tip: A normal respiratory rate is 12-20 breaths per minute—anything outside this range needs further assessment.</p>
                        </div>
                      </div>

                      {/* Circulation */}
                      <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 sm:p-8 mb-6 sm:border sm:border-purple-200">
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                          <div className="bg-purple-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">C</div>
                          <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-purple-700 mb-2">Circulation (C) – Is Perfusion Adequate?</h4>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-700 mb-4">
                          <li className="flex items-start gap-3">
                            <span className="text-purple-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Assess heart rate, blood pressure, and capillary refill time</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-purple-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Look for pallor, sweating, or cold extremities (signs of shock)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-purple-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Palpate peripheral pulses and check for signs of bleeding or fluid loss</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-purple-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Administer IV fluids if necessary (as per orders)</span>
                          </li>
                        </ul>
                        <div className="bg-white/80 rounded-lg p-4 border-l-4 border-purple-500">
                          <p className="text-sm font-semibold text-gray-800">💡 OSCE Tip: Capillary refill time {'>'} 2 seconds may indicate poor circulation.</p>
                        </div>
                      </div>

                      {/* Disability */}
                      <div className="bg-gradient-to-r from-orange-50 to-amber-50 rounded-xl p-6 sm:p-8 mb-6 sm:border sm:border-orange-200">
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                          <div className="bg-orange-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">D</div>
                          <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-orange-700 mb-2">Disability (D) – Assess Neurological Status</h4>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-700 mb-4">
                          <li className="flex items-start gap-3">
                            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Check level of consciousness using the AVPU scale (Alert, Voice, Pain, Unresponsive)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Assess pupil size and reaction to light</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-orange-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Perform a blood glucose check if altered consciousness is noted</span>
                          </li>
                        </ul>
                        <div className="bg-white/80 rounded-lg p-4 border-l-4 border-orange-500">
                          <p className="text-sm font-semibold text-gray-800">💡 OSCE Tip: Hypoglycemia can mimic neurological issues—always check blood glucose!</p>
                        </div>
                      </div>

                      {/* Exposure */}
                      <div className="bg-gradient-to-r from-teal-50 to-emerald-50 rounded-xl p-6 sm:p-8 mb-6 sm:border sm:border-teal-200">
                        <div className="flex items-start gap-3 sm:gap-4 mb-4">
                          <div className="bg-teal-500 text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-xl flex-shrink-0">E</div>
                          <div>
                            <h4 className="text-xl sm:text-2xl font-bold text-teal-700 mb-2">Exposure (E) – Check the Whole Body for Clues</h4>
                          </div>
                        </div>
                        <ul className="space-y-3 text-gray-700 mb-4">
                          <li className="flex items-start gap-3">
                            <span className="text-teal-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Inspect for rashes, wounds, or injuries</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-teal-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Measure temperature (signs of infection or hypothermia)</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <span className="text-teal-500 font-bold flex-shrink-0">•</span>
                            <span className="text-base sm:text-sm">Maintain patient dignity and warmth while assessing</span>
                          </li>
                        </ul>
                        <div className="bg-white/80 rounded-lg p-4 border-l-4 border-teal-500">
                          <p className="text-sm font-semibold text-gray-800">💡 OSCE Tip: Always verbalize your findings to the examiner!</p>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Common Pitfalls */}
                    <h2 id="common-pitfalls" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-blue-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">3</span>
                      <span className="leading-tight">Common OSCE Pitfalls & How to Avoid Them</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-blue-100">
                      <div className="space-y-6 sm:space-y-8">
                        <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 sm:p-8 sm:border-2 sm:border-red-200">
                          <div className="flex items-start gap-4 mb-3">
                            <span className="text-3xl">❌</span>
                            <div>
                              <h5 className="font-bold text-red-700 mb-2 text-lg">Skipping steps</h5>
                              <p className="text-gray-700 text-sm">Always follow a structured A to E approach without missing any component.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 sm:p-8 sm:border-2 sm:border-red-200">
                          <div className="flex items-start gap-4 mb-3">
                            <span className="text-3xl">❌</span>
                            <div>
                              <h5 className="font-bold text-red-700 mb-2 text-lg">Ignoring abnormal findings</h5>
                              <p className="text-gray-700 text-sm">Identify abnormal values and state appropriate interventions clearly.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 sm:p-8 sm:border-2 sm:border-red-200">
                          <div className="flex items-start gap-4 mb-3">
                            <span className="text-3xl">❌</span>
                            <div>
                              <h5 className="font-bold text-red-700 mb-2 text-lg">Poor communication</h5>
                              <p className="text-gray-700 text-sm">Always explain what you're doing to the patient and seek consent.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-red-50 to-rose-50 rounded-xl p-6 sm:p-8 sm:border-2 sm:border-red-200">
                          <div className="flex items-start gap-4 mb-3">
                            <span className="text-3xl">❌</span>
                            <div>
                              <h5 className="font-bold text-red-700 mb-2 text-lg">Lack of documentation</h5>
                              <p className="text-gray-700 text-sm">Clearly record findings and escalate concerns when necessary.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Success Tips */}
                    <h2 id="success-tips" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-purple-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">4</span>
                      <span className="leading-tight">Final OSCE Success Tips</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-purple-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-purple-100">
                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
                          <div className="text-4xl mb-4">🔥</div>
                          <h5 className="font-bold text-purple-800 mb-3 text-lg">Practice Until Perfect</h5>
                          <p className="text-gray-700 text-sm">Practice the A to E assessment until it becomes second nature.</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
                          <div className="text-4xl mb-4">🔥</div>
                          <h5 className="font-bold text-purple-800 mb-3 text-lg">Verbalize Your Process</h5>
                          <p className="text-gray-700 text-sm">Speak your thought process out loud to the examiner.</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
                          <div className="text-4xl mb-4">🔥</div>
                          <h5 className="font-bold text-purple-800 mb-3 text-lg">Check Vital Signs</h5>
                          <p className="text-gray-700 text-sm">Always check vital signs and escalate abnormal findings.</p>
                        </div>
                        
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-6 border-2 border-purple-200">
                          <div className="text-4xl mb-4">🔥</div>
                          <h5 className="font-bold text-purple-800 mb-3 text-lg">Stay Calm & Confident</h5>
                          <p className="text-gray-700 text-sm">Stay calm, confident, and professional throughout your assessment.</p>
                        </div>
                      </div>
                    </div>                    {/* Section 5: NAI Training */}
                    <h2 id="nai-training" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">5</span>
                      <span className="leading-tight">Ace Your OSCE with NAI!</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-orange-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-orange-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        At Nurse Assist International (NAI), we provide expert OSCE training, unlimited practice sessions, and hands-on coaching to ensure you pass with flying colors.
                      </p>
                      
                      <div className="space-y-5 sm:space-y-6 mb-8">
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 sm:p-6 rounded-xl sm:border sm:border-orange-200">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 text-2xl sm:text-3xl">👨‍🏫</div>
                            <div>
                              <h5 className="font-bold text-orange-700 mb-2 text-lg sm:text-xl">Expert-led OSCE Training</h5>
                              <p className="text-gray-700 text-base sm:text-sm">Our instructors are experienced, compassionate, and up-to-date with exam trends.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 sm:p-6 rounded-xl sm:border sm:border-orange-200">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 text-2xl sm:text-3xl">🔬</div>
                            <div>
                              <h5 className="font-bold text-orange-700 mb-2 text-lg sm:text-xl">Unlimited Lab Access</h5>
                              <p className="text-gray-700 text-base sm:text-sm">Practice until you perfect your clinical skills with hands-on experience.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 sm:p-6 rounded-xl sm:border sm:border-orange-200">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 text-2xl sm:text-3xl">🎯</div>
                            <div>
                              <h5 className="font-bold text-orange-700 mb-2 text-lg sm:text-xl">Simulation-based OSCE Prep</h5>
                              <p className="text-gray-700 text-base sm:text-sm">Experience the pressure of real exam settings before the big day.</p>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-5 sm:p-6 rounded-xl sm:border sm:border-orange-200">
                          <div className="flex items-start gap-3 sm:gap-4">
                            <div className="bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0 text-2xl sm:text-3xl">�</div>
                            <div>
                              <h5 className="font-bold text-orange-700 mb-2 text-lg sm:text-xl">Hands-on Coaching</h5>
                              <p className="text-gray-700 text-base sm:text-sm">Personal coaching to ensure you're exam-ready and confident.</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="bg-gradient-to-r from-nai-teal to-nai-blue rounded-xl p-8 text-center text-white">
                        <h4 className="text-2xl font-bold mb-4">💡 Ready to take your OSCE preparation to the next level?</h4>
                        <p className="text-lg mb-6">Enroll with NAI today and join thousands of successful nurses!</p>
                        <Link to="/pages/contact" className="inline-block bg-white text-nai-teal px-8 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg">
                          Get Started Now
                        </Link>
                      </div>
                    </div>

                    {/* Real Success Stories Section */}
                    <div className="bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 border-2 border-teal-300 rounded-2xl p-8 mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-teal-900 mb-6 text-center">Join Our Success Stories</h3>
                      <p className="text-lg text-gray-700 leading-relaxed mb-8 text-center max-w-4xl mx-auto">
                        Thousands of international nurses have successfully passed their OSCE with NAI's expert training and support. You can be next!
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-200">
                          <div className="text-4xl mb-4 text-center">�</div>
                          <h4 className="font-bold text-teal-900 mb-2 text-center">High Pass Rate</h4>
                          <p className="text-sm text-gray-600 text-center">Proven track record of OSCE success</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-200">
                          <div className="text-4xl mb-4 text-center">�</div>
                          <h4 className="font-bold text-teal-900 mb-2 text-center">Expert Trainers</h4>
                          <p className="text-sm text-gray-600 text-center">Experienced clinical instructors</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-teal-200">
                          <div className="text-4xl mb-4 text-center">�️</div>
                          <h4 className="font-bold text-teal-900 mb-2 text-center">Comprehensive</h4>
                          <p className="text-sm text-gray-600 text-center">Complete OSCE preparation program</p>
                        </div>
                      </div>
                    </div>

                    {/* Final CTA Section */}
                    <div className="bg-gradient-to-r from-nai-teal100 via-nai-deep-teal50 to-nai-teal100 border-2 border-nai-teal300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-4xl font-bold text-nai-teal900 mb-6">Your OSCE Success Starts with NAI</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-6 max-w-4xl mx-auto">
                        Don't leave your OSCE success to chance. With NAI's expert training, unlimited practice, and proven strategies, you'll walk into your exam with confidence and competence.
                      </p>
                      <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto italic font-semibold">
                        Join NAI today and take the first step toward acing your OSCE and achieving Australian nursing registration!
                      </p>
                      
                      <div className="bg-white rounded-xl p-8 max-w-3xl mx-auto mb-8 shadow-lg">
                        <h4 className="text-2xl font-bold text-nai-teal900 mb-4">Why Choose NAI for OSCE Preparation?</h4>
                        <div className="grid md:grid-cols-3 gap-4 mt-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-nai-teal mb-2">Expert</div>
                            <div className="text-sm text-gray-600">Training</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-nai-teal mb-2">Unlimited</div>
                            <div className="text-sm text-gray-600">Practice</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-nai-teal mb-2">High</div>
                            <div className="text-sm text-gray-600">Success Rate</div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal600 hover:bg-nai-teal700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Enroll in OSCE Training
                        </Link>
                        <Link to="/pages/osce-preparation" className="border-2 border-nai-teal600 text-nai-teal hover:bg-nai-teal600 hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                          Learn More About OSCE
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-gray-600 text-sm sm:text-base">
                        Found this helpful? Share it with your colleagues and friends.
                      </p>
                      <button 
                        onClick={handleShare}
                        className="bg-nai-teal600 hover:bg-nai-teal700 text-white px-6 py-2 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl"
                      >
                        Share Article
                      </button>
                    </div>
                  </div>
                </motion.div>
              </article>

              {/* Enhanced Sidebar with Orange Theme */}
              <aside className="lg:col-span-1 xl:col-span-1 mt-12 lg:mt-0">
                <motion.div
                  className="lg:sticky lg:top-28 space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Enhanced Reading Progress - Mobile Optimized */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-3 sm:mb-4">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2 text-sm sm:text-base">
                        <Eye className="w-4 h-4 text-nai-teal flex-shrink-0" />
                        <span className="break-words">Reading Progress</span>
                      </h3>
                      <span className="text-xs sm:text-sm text-nai-teal font-bold bg-nai-soft px-2 py-1 rounded-full">
                        {Math.round(readingProgress)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-2 sm:mb-3">
                      <div 
                        className="bg-gradient-to-r from-nai-teal to-nai-blue h-2 sm:h-3 rounded-full transition-all duration-300 shadow-sm"
                        style={{ width: `${readingProgress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center">
                      {readingProgress < 25 ? "Starting your journey..." : 
                       readingProgress < 50 ? "Learning the process!" :
                       readingProgress < 75 ? "Almost ready!" : "Journey complete!"}
                    </p>
                  </div>

                  {/* Enhanced Author Section - Mobile Optimized */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <User className="w-4 h-4 text-nai-teal flex-shrink-0" />
                      <span className="break-words">About the Author</span>
                    </h3>
                    <div className="text-center mb-3 sm:mb-4">
                      <img 
                        src={getGeneralImageUrl('ALLTECHZONE.webp')} 
                        alt="NAI Editorial Team" 
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto mb-2 sm:mb-3 border-2 border-nai-teal"
                      />
                      <div className="font-bold text-gray-900 text-sm sm:text-base break-words">NAI Editorial Team</div>
                      <div className="text-xs sm:text-sm text-nai-teal font-medium break-words">OSCE Training Specialists</div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center break-words">
                      Expert team with over 10 years of experience helping international nurses achieve OSCE success and Australian registration.
                    </p>
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                        <div>
                          <div className="text-base sm:text-lg font-bold text-nai-teal">5000+</div>
                          <div className="text-xs text-gray-600">Success Stories</div>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-bold text-nai-teal">6+</div>
                          <div className="text-xs text-gray-600">Years Experience</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Newsletter - Mobile Optimized */}
                  <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 rounded-xl p-4 sm:p-6 shadow-lg border-2 border-cyan-200">
                    {/* Thumbnail Image */}
                    <div className="mb-4">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-32 sm:h-40 object-cover rounded-lg shadow-md"
                      />
                    </div>
                    
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="w-10 h-10 sm:w-12 sm:h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-md">
                        <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg sm:text-xl break-words text-cyan-900">Get Free Guidance</h3>
                      <p className="text-sm sm:text-base text-gray-700 break-words leading-relaxed">
                        Connect with our expert team for personalized OSCE preparation guidance.
                      </p>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <a 
                        href="https://wa.me/61478320397?text=Hi%2C%20I%27m%20interested%20in%20OSCE%20preparation%20training"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-cyan-500 text-white px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-sm sm:text-base hover:bg-cyan-600 transition-all shadow-md min-h-[44px] text-center"
                      >
                        Chat With Us
                      </a>
                    </div>
                    <p className="text-sm sm:text-base text-cyan-800 text-center mt-2 sm:mt-3 font-medium">
                      Join 5000+ International Nurses Worldwide
                    </p>
                  </div>
                  
                  {/* Quick Links - Mobile Optimized */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <ArrowRight className="w-4 h-4 text-nai-teal flex-shrink-0" />
                      <span className="break-words">Related Resources</span>
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
                      <a href="#" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors break-words">
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
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-7xl mx-auto text-center"
            >
              <Briefcase className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-6 sm:mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">Ready to Ace Your OSCE with Confidence?</h2>
              <p className="text-white/95 mb-8 sm:mb-10 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
                NAI provides expert OSCE training, unlimited practice sessions, and comprehensive support to ensure you pass with flying colors and achieve Australian nursing registration.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all hover:bg-gray-100 shadow-lg text-base sm:text-lg hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  Start Your OSCE Training
                </Link>
                <Link 
                  to="/pages/osce-preparation" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all text-base sm:text-lg hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  Learn More About OSCE
                </Link>
              </div>
              
              {/* Success Stats */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Expert</div>
                  <div className="text-white/90">OSCE Training</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Unlimited</div>
                  <div className="text-white/90">Practice Sessions</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">High</div>
                  <div className="text-white/90">Success Rate</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost4
