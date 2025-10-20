import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Stethoscope, Activity, Heart, UserCheck } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost6 = () => {
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
        title: 'OSCE Success: Excelling in Patient Assessment Like a Pro',
        text: 'In the Objective Structured Clinical Examination (OSCE), patient assessment is a core competency. Examiners expect you to perform a comprehensive assessment quickly and methodically.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'OSCE Success: Excelling in Patient Assessment Like a Pro',
    date: '2025-03-05',
    author: 'NAI OSCE Experts',
    category: 'Clinical Skills',
    excerpt: 'In the Objective Structured Clinical Examination (OSCE), patient assessment is a core competency. Examiners expect you to perform a comprehensive assessment quickly and methodically. Here are the keys to success.',
    featuredImage: getBlogImageUrl('b6.webp'),
    tags: ['OSCE', 'Patient Assessment', 'Clinical Skills', 'A to E Assessment', 'Exam Success'],
    views: 3876,
    likes: 134,
    comments: 28
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
                <Link to="/" className="hover:text-nai-teal transition-colors">Home</Link>
                <span>/</span>
                <Link to={backToNewsUrl} className="hover:text-nai-teal transition-colors">News</Link>
                <span>/</span>
                <span className="text-gray-900">OSCE Clinical Skills</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nai-teal to-nai-highlight600 text-white rounded-full px-4 py-2 text-sm font-bold mb-6 shadow-lg">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>

              {/* Professional Black Title - Full Width */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight break-words tracking-tight">
                {post.title}
              </h1>

              {/* Enhanced Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <User className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-medium text-gray-800">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <Calendar className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-medium text-gray-800">{formatDate(post.date)}</span>
                </div>                <div className="flex items-center gap-2 bg-teal-50 rounded-lg px-3 py-2">
                  <Eye className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-medium text-gray-800">{post.views?.toLocaleString()} views</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Link 
                  to={backToNewsUrl}
                  className="flex items-center gap-2 text-gray-700 hover:text-white transition-colors bg-nai-teal/20 hover:bg-nai-teal px-4 py-2 rounded-lg font-medium"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to News</span>
                </Link>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-700 hover:text-white transition-colors bg-nai-teal/20 hover:bg-nai-teal px-4 py-2 rounded-lg font-medium"
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
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-3 sm:mb-4 break-words">Master Patient Assessment</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    {post.excerpt}
                  </p>
                  
                  {/* Key Points - Mobile Optimized */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">A to E systematic assessment approach</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Comprehensive vital signs evaluation</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Professional communication skills</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Time-efficient examination techniques</span>
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
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">A-E</div>
                        <div className="text-xs sm:text-sm text-gray-600">Framework</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Clinical</div>
                        <div className="text-xs sm:text-sm text-gray-600">Skills</div>
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
                  <div className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-blue-100">
                    <h3 className="text-lg sm:text-xl font-bold text-nai-teal mb-4 sm:mb-6 flex items-center gap-2 sm:gap-3">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                      <span className="break-words">Assessment Mastery Guide</span>
                    </h3>
                    <nav className="space-y-2 sm:space-y-3">
                      <a href="#why-matters" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        1. Why Patient Assessment Matters in OSCE
                      </a>
                      <a href="#a-to-e-approach" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        2. Mastering the A to E Assessment
                      </a>
                      <a href="#common-pitfalls" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        3. Common OSCE Pitfalls & How to Avoid Them
                      </a>
                      <a href="#success-tips" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        4. Final OSCE Success Tips
                      </a>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-teal-900 prose-p:text-gray-700 prose-a:text-nai-teal prose-strong:text-nai-teal">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-teal-50 to-nai-highlight50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:border sm:border-teal-200">
                      <h3 className="text-xl sm:text-2xl font-bold text-teal-700 mb-4 sm:mb-6 flex items-center gap-3">
                        <Stethoscope className="w-6 h-6 sm:w-8 sm:h-8 flex-shrink-0" />
                        <span className="leading-tight">OSCE Success: Excelling in Patient Assessment Like a Pro</span>
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6">
                        The Objective Structured Clinical Examination (OSCE) is a crucial milestone for internationally qualified nurses seeking Australian registration. One of the most fundamental skills tested in OSCE is patient assessment—your ability to systematically evaluate a patient's condition, recognize abnormalities, and respond appropriately.
                      </p>
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700">
                        In this blog, we'll break down essential assessment techniques, common challenges, and expert tips to help you ace this station with confidence!
                      </p>
                    </div>

                    {/* Section 1: Why Patient Assessment Matters */}
                    <h2 id="why-matters" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-nai-teal text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">1</span>
                      <span className="leading-tight">Why Patient Assessment Matters in OSCE?</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-teal-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-teal-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        The OSCE patient assessment station evaluates your ability to:
                      </p>
                      
                      <div className="bg-gradient-to-r from-teal-50 to-cyan-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-teal-200">
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-lg font-semibold">Perform a structured and systematic assessment</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-lg font-semibold">Use the A to E (Airway, Breathing, Circulation, Disability, Exposure) approach</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-lg font-semibold">Recognize abnormal findings and escalate appropriately</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-lg font-semibold">Communicate effectively with the patient</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-teal-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-lg font-semibold">Document findings accurately</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                      
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 font-semibold text-teal-800">
                        A strong patient assessment is the foundation of safe and effective nursing care, making it one of the most critical OSCE stations.
                      </p>
                    </div>

                    {/* Section 2: A to E Assessment */}
                    <h2 id="a-to-e-approach" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-blue-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">2</span>
                      <span className="leading-tight">Mastering the A to E Assessment</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-blue-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        The A to E (ABCDE) approach is the gold standard for assessing critically ill patients. Follow this structured method to ensure a thorough and systematic assessment during your OSCE:
                      </p>
                      
                      <div className="space-y-6">
                        {/* Airway */}
                        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-5 sm:p-6 sm:border sm:border-red-200">
                          <h4 className="text-lg sm:text-xl font-bold text-red-800 mb-4 flex items-center gap-3">
                            <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">A</span>
                            <span className="leading-tight">Airway (A) – Is the Airway Clear?</span>
                          </h4>
                          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base mb-4">
                            <li className="flex items-start gap-2">
                              <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                              <span>Check for airway obstruction (choking, swelling, foreign body)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                              <span>Look for signs of stridor, hoarseness, or difficulty speaking</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-red-600 mt-1 flex-shrink-0">•</span>
                              <span>If obstructed, perform airway maneuvers (head-tilt, jaw thrust, suctioning)</span>
                            </li>
                          </ul>
                          <div className="bg-white rounded-lg p-3 sm:p-4 sm:border sm:border-red-300">
                            <p className="text-sm sm:text-base text-red-800 font-semibold">💡 OSCE Tip: If the patient is speaking normally, the airway is likely clear!</p>
                          </div>
                        </div>

                        {/* Breathing */}
                        <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-5 sm:p-6 sm:border sm:border-blue-200">
                          <h4 className="text-lg sm:text-xl font-bold text-blue-800 mb-4 flex items-center gap-3">
                            <span className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">B</span>
                            <span className="leading-tight">Breathing (B) – Is the Patient Breathing Adequately?</span>
                          </h4>
                          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base mb-4">
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                              <span>Observe respiratory rate, depth, and effort</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                              <span>Check oxygen saturation (SpO₂) and auscultate lung sounds</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                              <span>Look for signs of cyanosis, use of accessory muscles, or asymmetrical chest movement</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-blue-600 mt-1 flex-shrink-0">•</span>
                              <span>Intervene if needed (oxygen therapy, nebulizers, positioning)</span>
                            </li>
                          </ul>
                          <div className="bg-white rounded-lg p-3 sm:p-4 sm:border sm:border-blue-300">
                            <p className="text-sm sm:text-base text-blue-800 font-semibold">💡 OSCE Tip: A normal respiratory rate is 12-20 breaths per minute—anything outside this range needs further assessment.</p>
                          </div>
                        </div>

                        {/* Circulation */}
                        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-5 sm:p-6 sm:border sm:border-green-200">
                          <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-4 flex items-center gap-3">
                            <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">C</span>
                            <span className="leading-tight">Circulation (C) – Is Perfusion Adequate?</span>
                          </h4>
                          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base mb-4">
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                              <span>Assess heart rate, blood pressure, and capillary refill time</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                              <span>Look for pallor, sweating, or cold extremities (signs of shock)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                              <span>Palpate peripheral pulses and check for signs of bleeding or fluid loss</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-green-600 mt-1 flex-shrink-0">•</span>
                              <span>Administer IV fluids if necessary (as per orders)</span>
                            </li>
                          </ul>
                          <div className="bg-white rounded-lg p-3 sm:p-4 sm:border sm:border-green-300">
                            <p className="text-sm sm:text-base text-green-800 font-semibold">💡 OSCE Tip: Capillary refill time {'>'} 2 seconds may indicate poor circulation.</p>
                          </div>
                        </div>

                        {/* Disability */}
                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-5 sm:p-6 sm:border sm:border-purple-200">
                          <h4 className="text-lg sm:text-xl font-bold text-purple-800 mb-4 flex items-center gap-3">
                            <span className="bg-purple-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">D</span>
                            <span className="leading-tight">Disability (D) – Assess Neurological Status</span>
                          </h4>
                          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base mb-4">
                            <li className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                              <span>Check level of consciousness using the AVPU scale (Alert, Voice, Pain, Unresponsive)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                              <span>Assess pupil size and reaction to light</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-purple-600 mt-1 flex-shrink-0">•</span>
                              <span>Perform a blood glucose check if altered consciousness is noted</span>
                            </li>
                          </ul>
                          <div className="bg-white rounded-lg p-3 sm:p-4 sm:border sm:border-purple-300">
                            <p className="text-sm sm:text-base text-purple-800 font-semibold">💡 OSCE Tip: Hypoglycemia can mimic neurological issues—always check blood glucose!</p>
                          </div>
                        </div>

                        {/* Exposure */}
                        <div className="bg-gradient-to-r from-orange-50 to-orange-100 rounded-xl p-5 sm:p-6 sm:border sm:border-orange-200">
                          <h4 className="text-lg sm:text-xl font-bold text-orange-800 mb-4 flex items-center gap-3">
                            <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold flex-shrink-0">E</span>
                            <span className="leading-tight">Exposure (E) – Check the Whole Body for Clues</span>
                          </h4>
                          <ul className="space-y-2 sm:space-y-3 text-gray-700 text-sm sm:text-base mb-4">
                            <li className="flex items-start gap-2">
                              <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                              <span>Inspect for rashes, wounds, or injuries</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                              <span>Measure temperature (signs of infection or hypothermia)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <span className="text-orange-600 mt-1 flex-shrink-0">•</span>
                              <span>Maintain patient dignity and warmth while assessing</span>
                            </li>
                          </ul>
                          <div className="bg-white rounded-lg p-3 sm:p-4 sm:border sm:border-orange-300">
                            <p className="text-sm sm:text-base text-orange-800 font-semibold">💡 OSCE Tip: Always verbalize your findings to the examiner!</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Common Pitfalls */}
                    <h2 id="common-pitfalls" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">3</span>
                      <span className="leading-tight">Common OSCE Pitfalls & How to Avoid Them</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-orange-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-orange-100">
                      <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-orange-200">
                        <h4 className="text-lg sm:text-xl font-bold text-orange-800 mb-4 sm:mb-6">Critical Mistakes to Avoid</h4>
                        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                          <div className="space-y-3">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <span className="text-red-500 mt-1 text-lg flex-shrink-0">✗</span>
                              <div>
                                <p className="text-base sm:text-lg font-semibold text-red-700">Skipping steps</p>
                                <p className="text-sm text-gray-600">Always follow a structured A to E approach</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                              <span className="text-red-500 mt-1 text-lg flex-shrink-0">✗</span>
                              <div>
                                <p className="text-base sm:text-lg font-semibold text-red-700">Ignoring abnormal findings</p>
                                <p className="text-sm text-gray-600">Identify abnormal values and state appropriate interventions</p>
                              </div>
                            </div>
                          </div>
                          <div className="space-y-3">
                            <div className="flex items-start gap-2 sm:gap-3">
                              <span className="text-red-500 mt-1 text-lg flex-shrink-0">✗</span>
                              <div>
                                <p className="text-base sm:text-lg font-semibold text-red-700">Poor communication</p>
                                <p className="text-sm text-gray-600">Always explain what you're doing to the patient and seek consent</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-2 sm:gap-3">
                              <span className="text-red-500 mt-1 text-lg flex-shrink-0">✗</span>
                              <div>
                                <p className="text-base sm:text-lg font-semibold text-red-700">Lack of documentation</p>
                                <p className="text-sm text-gray-600">Clearly record findings and escalate concerns when necessary</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 4: Success Tips */}
                    <h2 id="success-tips" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-green-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">4</span>
                      <span className="leading-tight">Final OSCE Success Tips</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-green-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-green-100">
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-green-200">
                        <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-4 sm:mb-6">Expert Success Strategies</h4>
                        <div className="space-y-4">
                          <div className="flex items-start gap-3">
                            <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-base font-bold flex-shrink-0">🔥</span>
                            <div>
                              <p className="text-base sm:text-lg font-semibold text-green-800">Practice the A to E assessment until it becomes second nature</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-base font-bold flex-shrink-0">🔥</span>
                            <div>
                              <p className="text-base sm:text-lg font-semibold text-green-800">Speak your thought process out loud to the examiner</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-base font-bold flex-shrink-0">🔥</span>
                            <div>
                              <p className="text-base sm:text-lg font-semibold text-green-800">Always check vital signs and escalate abnormal findings</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-base font-bold flex-shrink-0">🔥</span>
                            <div>
                              <p className="text-base sm:text-lg font-semibold text-green-800">Stay calm, confident, and professional throughout your assessment</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* NAI Success Section */}
                    <div className="bg-gradient-to-r from-nai-teal100 via-nai-deep-teal50 to-nai-teal100 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center mb-10 sm:mb-12 shadow-xl sm:border-2 sm:border-nai-teal300">
                      <h3 className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8">Ace Your OSCE with NAI!</h3>
                      <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto">
                        At Nurse Assist International (NAI), we provide expert OSCE training, unlimited practice sessions, and hands-on coaching to ensure you pass with flying colors.
                      </p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8 sm:mb-10">
                        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg sm:border sm:border-nai-teal200">
                          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">🏥</div>
                          <h4 className="font-bold text-nai-teal900 mb-2 text-base sm:text-lg">Clinical Simulation Labs</h4>
                          <p className="text-sm text-gray-600">Realistic OSCE station practice with actual equipment</p>
                        </div>
                        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg sm:border sm:border-nai-teal200">
                          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">👨‍⚕️</div>
                          <h4 className="font-bold text-nai-teal900 mb-2 text-base sm:text-lg">Expert Feedback</h4>
                          <p className="text-sm text-gray-600">Professional assessment from experienced OSCE trainers</p>
                        </div>
                        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg sm:border sm:border-nai-teal200">
                          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">📚</div>
                          <h4 className="font-bold text-nai-teal900 mb-2 text-base sm:text-lg">Unlimited Practice</h4>
                          <p className="text-sm text-gray-600">Practice as many times as you need to build confidence</p>
                        </div>
                        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg sm:border sm:border-nai-teal200">
                          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✅</div>
                          <h4 className="font-bold text-nai-teal900 mb-2 text-base sm:text-lg">99% Success Rate</h4>
                          <p className="text-sm text-gray-600">Proven track record of OSCE success</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-700 font-semibold mb-6 sm:mb-8 italic">
                        💡 Ready to take your OSCE preparation to the next level? Enroll with NAI today!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal600 hover:bg-nai-teal700 text-white px-6 sm:px-8 py-3 rounded-lg font-bold transition-colors shadow-lg text-base sm:text-lg">
                          Book OSCE Training
                        </Link>
                        <Link to="/pages/osce-preparation" className="border-2 border-nai-teal600 text-nai-teal hover:bg-nai-teal600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-bold transition-colors text-base sm:text-lg">
                          View OSCE Program
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
                        className="bg-nai-teal hover:bg-teal-700 text-white px-6 py-2 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl"
                      >
                        Share Article
                      </button>
                    </div>
                  </div>
                </motion.div>
              </article>

              {/* Enhanced Sidebar with Teal Theme */}
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
                      <div className="text-xs sm:text-sm text-nai-teal font-medium break-words">AURN Registration Specialists</div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center break-words">
                      Expert team with over 10 years of experience helping international nurses achieve Australian registration success.
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
                        Connect with our expert team for personalized AURN registration guidance.
                      </p>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <a 
                        href="https://wa.me/61478320397?text=Hi%2C%20I%27m%20interested%20in%20AURN%20registration%20guidance"
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
              <Stethoscope className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-6 sm:mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">Master OSCE Patient Assessment</h2>
              <p className="text-white/95 mb-8 sm:mb-10 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
                Build confidence in your clinical assessment skills with NAI's comprehensive OSCE training program and expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all hover:bg-gray-100 shadow-lg text-base sm:text-lg hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  Book OSCE Training
                </Link>
                <Link 
                  to="/pages/osce-preparation" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all text-base sm:text-lg hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  View Training Program
                </Link>
              </div>
              
              {/* Success Stats */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">A-E</div>
                  <div className="text-white/90">Systematic Framework</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Expert</div>
                  <div className="text-white/90">Clinical Training</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">2500+</div>
                  <div className="text-white/90">OSCE Success Stories</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost6
