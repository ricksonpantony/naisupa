import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, AlertTriangle, Target, TrendingUp, Zap } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost5 = () => {
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
        title: 'Top NCLEX Mistakes and How to Avoid Them: A Guide to Success',
        text: 'Preparing for the NCLEX can be daunting. Many candidates make avoidable mistakes that impact their scores. Here are common pitfalls and strategies to steer clear of them.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Top NCLEX Mistakes and How to Avoid Them: A Guide to Success',
    date: '2025-03-20',
    author: 'NAI NCLEX Specialists',
    category: 'Exam Strategy',
    excerpt: 'Preparing for the NCLEX can be daunting. Many candidates make avoidable mistakes that impact their scores. Here are common pitfalls and strategies to steer clear of them.',
    featuredImage: getBlogImageUrl('b5.webp'),
    tags: ['NCLEX', 'Mistakes', 'Exam Strategy', 'Success Tips', 'Test Preparation', 'Study Guide'],
    views: 5234,
    likes: 156,
    comments: 42
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/top-nclex-mistakes-and-how-to-avoid-them-a-guide-to-success`}
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
                <span className="text-gray-900">NCLEX Success Strategy</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nai-teal/500 to-nai-deep-teal600 text-white rounded-full px-4 py-2 text-sm font-bold mb-6 shadow-lg">
                <Tag className="w-4 h-4" />
                {post.category}
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
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-3 sm:mb-4 break-words">Avoid These Critical Mistakes</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    {post.excerpt}
                  </p>
                  
                  {/* Key Points - Mobile Optimized */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Not understanding exam format</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Memorizing instead of understanding</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Poor time management strategies</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Test anxiety and overthinking</span>
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
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Complete</div>
                        <div className="text-xs sm:text-sm text-gray-600">Guide</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Expert</div>
                        <div className="text-xs sm:text-sm text-gray-600">Support</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Success</div>
                        <div className="text-xs sm:text-sm text-gray-600">Focused</div>
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
                    <h3 className="text-xl sm:text-2xl font-bold text-nai-teal mb-4 sm:mb-6 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 sm:w-7 sm:h-7 flex-shrink-0" />
                      <span className="break-words">Common NCLEX Mistakes</span>
                    </h3>
                    <nav className="space-y-2 sm:space-y-3">
                      <a href="#exam-format" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        1. Not Understanding the NCLEX Format
                      </a>
                      <a href="#memorizing" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        2. Memorizing Instead of Understanding Concepts
                      </a>
                      <a href="#misinterpreting" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        3. Misinterpreting the Question
                      </a>
                      <a href="#prioritization" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        4. Ignoring Prioritization & Delegation Strategies
                      </a>
                      <a href="#overthinking" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        5. Overthinking or Changing Answers
                      </a>
                      <a href="#time-management" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        6. Poor Time Management
                      </a>
                      <a href="#practice" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        7. Not Practicing Enough NCLEX-Style Questions
                      </a>
                      <a href="#anxiety" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        8. Letting Test Anxiety Take Over
                      </a>
                      <a href="#selfcare" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        9. Neglecting Self-Care Before the Exam
                      </a>
                      <a href="#guidance" className="block text-nai-teal hover:text-teal-800 transition-colors py-2 text-sm sm:text-base font-medium hover:bg-teal-50 rounded px-2 sm:px-3">
                        10. Not Seeking Help or Guidance
                      </a>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal/900 prose-p:text-gray-700 prose-a:text-nai-teal/600 prose-strong:text-nai-teal/600">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal50 to-nai-deep-teal50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:border-l-4 sm:border-nai-teal500">
                      <h3 className="text-2xl sm:text-3xl font-bold text-nai-teal700 mb-5 sm:mb-6 flex items-center gap-3">
                        <AlertTriangle className="w-8 h-8 sm:w-9 sm:h-9" />
                        Critical Success Strategies
                      </h3>
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-5 sm:mb-6">
                        Preparing for the NCLEX can be overwhelming, and even the most well-prepared candidates make mistakes that cost them valuable points. The key to success is recognizing these pitfalls early and adopting strategies to avoid them.
                      </p>
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-5 sm:mb-6">
                        In this comprehensive guide, we'll explore the most common NCLEX mistakes and how you can steer clear of them to increase your chances of passing on your first attempt.
                      </p>
                      
                      <div className="bg-white/80 rounded-lg sm:rounded-xl p-5 sm:p-6 sm:border sm:border-nai-teal200 sm:shadow-sm">
                        <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal800 mb-3 text-lg sm:text-base">Success Factors:</h4>
                            <ul className="text-base sm:text-sm text-gray-700 space-y-2 sm:space-y-1">
                              <li>• Understanding exam structure and format</li>
                              <li>• Focusing on concepts over memorization</li>
                              <li>• Developing critical thinking skills</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal800 mb-3 text-lg sm:text-base">Avoid These Traps:</h4>
                            <ul className="text-base sm:text-sm text-gray-700 space-y-2 sm:space-y-1">
                              <li>• Test anxiety and overthinking</li>
                              <li>• Poor time management</li>
                              <li>• Inadequate preparation strategies</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mistake 1: Exam Format */}
                    <h2 id="exam-format" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-nai-teal text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">1</span>
                      <span className="leading-tight">Not Understanding the NCLEX Format</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-nai-teal50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-nai-teal/20">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        One of the biggest mistakes candidates make is underestimating the unique structure of the NCLEX. Unlike traditional nursing school exams, <strong className="text-nai-teal">NCLEX questions are application-based</strong> and adapt to your performance.
                      </p>
                      
                      <div className="bg-red-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-red-200">
                        <h4 className="text-lg sm:text-xl font-bold text-red-800 mb-4">How to Avoid It:</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Familiarize yourself with Computerized Adaptive Testing (CAT)</p>
                              <p className="text-sm text-gray-600">Understand how the exam adjusts its difficulty based on your answers</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Practice with NCLEX-style questions</p>
                              <p className="text-sm text-gray-600">Rather than relying solely on nursing school notes</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mistake 2: Memorizing */}
                    <h2 id="memorizing" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-orange-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">2</span>
                      <span className="leading-tight">Memorizing Instead of Understanding</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-orange-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-orange-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        <strong className="text-orange-600">Memorization alone won't help</strong> you answer application-level questions. The NCLEX tests your ability to apply knowledge in clinical scenarios.
                      </p>
                      
                      <div className="bg-gradient-to-r from-orange-50 to-yellow-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-orange-200">
                        <h4 className="text-lg sm:text-xl font-bold text-orange-800 mb-4">Focus on Understanding</h4>
                        <div className="grid sm:grid-cols-2 gap-5 sm:gap-8">
                          <div>
                            <h5 className="font-bold text-orange-700 mb-3 sm:mb-4 text-base sm:text-lg">Instead of Memorizing:</h5>
                            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                                Drug names and dosages
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                                Lab values without context
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                                Isolated facts and figures
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-bold text-orange-700 mb-3 sm:mb-4 text-base sm:text-lg">Focus on Understanding:</h5>
                            <ul className="space-y-2 text-gray-700 text-sm sm:text-base">
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                                Why interventions work
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                                Clinical reasoning and rationales
                              </li>
                              <li className="flex items-center gap-2">
                                <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0"></span>
                                Cause and effect relationships
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Mistake 3: Misinterpreting */}
                    <h2 id="misinterpreting" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-blue-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">3</span>
                      <span className="leading-tight">Misinterpreting the Question</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-blue-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-blue-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        Misreading NCLEX questions can lead to incorrect answers, especially in Select-All-That-Apply (SATA) and prioritization questions.
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-blue-200">
                        <h4 className="text-lg sm:text-xl font-bold text-blue-800 mb-4">How to Avoid It:</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Read the question carefully</p>
                              <p className="text-sm text-gray-600">Identify keywords like first, best, most appropriate, or needs further teaching</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-blue-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Rephrase the question</p>
                              <p className="text-sm text-gray-600">Put it in your own words to ensure you understand it</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mistake 4: Prioritization */}
                    <h2 id="prioritization" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-purple-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">4</span>
                      <span className="leading-tight">Ignoring Prioritization and Delegation Strategies</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-purple-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-purple-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        NCLEX heavily tests prioritization skills using frameworks like Maslow's Hierarchy of Needs and the ABC (Airway, Breathing, Circulation) Rule.
                      </p>
                      
                      <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-purple-200">
                        <h4 className="text-lg sm:text-xl font-bold text-purple-800 mb-4">How to Avoid It:</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Always prioritize life-threatening conditions</p>
                              <p className="text-sm text-gray-600">Over non-urgent issues</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">For delegation questions</p>
                              <p className="text-sm text-gray-600">Assign tasks appropriately based on scope of practice (e.g., LPNs vs. RNs)</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mistake 5: Overthinking */}
                    <h2 id="overthinking" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-pink-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">5</span>
                      <span className="leading-tight">Overthinking or Changing Answers</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-pink-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-pink-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        Second-guessing yourself can lead to incorrect responses. Often, your first instinct is correct.
                      </p>
                      
                      <div className="bg-gradient-to-r from-pink-50 to-rose-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-pink-200">
                        <h4 className="text-lg sm:text-xl font-bold text-pink-800 mb-4">How to Avoid It:</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-pink-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Stick with your initial answer</p>
                              <p className="text-sm text-gray-600">Unless you find a clear reason to change it</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-pink-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Avoid reading too much into the question</p>
                              <p className="text-sm text-gray-600">Don't assume additional details that aren't provided</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mistake 6: Time Management */}
                    <h2 id="time-management" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-indigo-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">6</span>
                      <span className="leading-tight">Poor Time Management</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-indigo-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-indigo-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        While the NCLEX doesn't have strict time limits per question, running out of time can affect your performance.
                      </p>
                      
                      <div className="bg-gradient-to-r from-indigo-50 to-blue-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-indigo-200">
                        <h4 className="text-lg sm:text-xl font-bold text-indigo-800 mb-4">How to Avoid It:</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Don't spend too much time on one question</p>
                              <p className="text-sm text-gray-600">If you're unsure, make an educated guess and move on</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-indigo-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Take timed practice tests</p>
                              <p className="text-sm text-gray-600">To simulate exam conditions</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mistake 7: Practice */}
                    <h2 id="practice" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-cyan-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">7</span>
                      <span className="leading-tight">Not Practicing Enough NCLEX-Style Questions</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-cyan-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-cyan-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        Some candidates rely too much on study guides and fail to expose themselves to real NCLEX-style questions.
                      </p>
                      
                      <div className="bg-gradient-to-r from-cyan-50 to-teal-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-cyan-200">
                        <h4 className="text-lg sm:text-xl font-bold text-cyan-800 mb-4">How to Avoid It:</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Daily practice with NCLEX-style questions</p>
                              <p className="text-sm text-gray-600">Helps improve your test-taking skills</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Review rationales</p>
                              <p className="text-sm text-gray-600">For both correct and incorrect answers to understand the reasoning</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mistake 8: Anxiety */}
                    <h2 id="anxiety" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-red-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">8</span>
                      <span className="leading-tight">Letting Test Anxiety Take Over</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-red-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-red-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        Many candidates fail not because they lack knowledge, but because anxiety affects their performance.
                      </p>
                      
                      <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-red-200">
                        <h4 className="text-lg sm:text-xl font-bold text-red-800 mb-4">How to Avoid It:</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Develop relaxation techniques</p>
                              <p className="text-sm text-gray-600">Such as deep breathing and visualization</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-red-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Take practice tests in a quiet environment</p>
                              <p className="text-sm text-gray-600">To build confidence in test-like conditions</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mistake 9: Self-Care */}
                    <h2 id="selfcare" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-green-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">9</span>
                      <span className="leading-tight">Neglecting Self-Care Before the Exam</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-green-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-green-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        Studying non-stop before the exam can lead to burnout and fatigue, making it harder to focus on test day.
                      </p>
                      
                      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-green-200">
                        <h4 className="text-lg sm:text-xl font-bold text-green-800 mb-4">How to Avoid It:</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Get plenty of rest the night before</p>
                              <p className="text-sm text-gray-600">The exam - avoid cramming</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Eat a balanced meal and stay hydrated</p>
                              <p className="text-sm text-gray-600">On test day to maintain energy and focus</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-green-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Arrive at the testing center early</p>
                              <p className="text-sm text-gray-600">To avoid unnecessary stress</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* Mistake 10: Guidance */}
                    <h2 id="guidance" className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8 flex items-center gap-3 sm:gap-4">
                      <span className="bg-amber-500 text-white rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center text-xl sm:text-2xl font-bold shadow-lg flex-shrink-0">10</span>
                      <span className="leading-tight">Not Seeking Help or Guidance</span>
                    </h2>
                    <div className="bg-gradient-to-br from-white to-amber-50/30 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:shadow-lg sm:border sm:border-amber-100">
                      <p className="text-base sm:text-lg leading-relaxed text-gray-700 mb-6 sm:mb-8">
                        Some candidates try to study on their own without the right guidance, which can lead to gaps in understanding.
                      </p>
                      
                      <div className="bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl p-5 sm:p-6 mb-6 sm:mb-8 sm:border sm:border-amber-200">
                        <h4 className="text-lg sm:text-xl font-bold text-amber-800 mb-4">How to Avoid It:</h4>
                        <ul className="space-y-3 sm:space-y-4 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Join an NCLEX prep course</p>
                              <p className="text-sm text-gray-600">Like NAI's comprehensive review program to get expert guidance</p>
                            </div>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-6 h-6 sm:w-7 sm:h-7 text-amber-600 flex-shrink-0 mt-1" />
                            <div>
                              <p className="text-base sm:text-sm font-semibold">Connect with study groups or mentors</p>
                              <p className="text-sm text-gray-600">To clarify difficult topics</p>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>

                    {/* NAI Success Section */}
                    <div className="bg-gradient-to-r from-nai-teal100 via-nai-deep-teal50 to-nai-teal100 rounded-xl sm:rounded-2xl p-8 sm:p-12 text-center mb-10 sm:mb-12 shadow-xl sm:border-2 sm:border-nai-teal300">
                      <h3 className="text-2xl sm:text-3xl font-bold text-nai-teal900 mb-6 sm:mb-8">How NAI Helps You Avoid These Mistakes</h3>
                      <p className="text-base sm:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto">
                        At Nurse Assist International (NAI), we understand the challenges that come with NCLEX preparation. That's why we offer:
                      </p>
                      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 mb-8 sm:mb-10">
                        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg sm:border sm:border-nai-teal200">
                          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✔️</div>
                          <h4 className="font-bold text-nai-teal900 mb-2 text-base sm:text-lg">Personalized Coaching</h4>
                          <p className="text-sm text-gray-600">To help you understand complex topics</p>
                        </div>
                        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg sm:border sm:border-nai-teal200">
                          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✔️</div>
                          <h4 className="font-bold text-nai-teal900 mb-2 text-base sm:text-lg">Thousands of Practice Questions</h4>
                          <p className="text-sm text-gray-600">To build your test-taking skills</p>
                        </div>
                        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg sm:border sm:border-nai-teal200">
                          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✔️</div>
                          <h4 className="font-bold text-nai-teal900 mb-2 text-base sm:text-lg">Comprehensive Review</h4>
                          <p className="text-sm text-gray-600">Covering prioritization, delegation, pharmacology, and more</p>
                        </div>
                        <div className="bg-white rounded-xl p-5 sm:p-6 shadow-lg sm:border sm:border-nai-teal200">
                          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">✔️</div>
                          <h4 className="font-bold text-nai-teal900 mb-2 text-base sm:text-lg">Simulated Exams</h4>
                          <p className="text-sm text-gray-600">That mirror the real NCLEX experience</p>
                        </div>
                      </div>
                      <p className="text-base sm:text-lg text-gray-700 font-semibold mb-6 sm:mb-8 italic">
                        With NAI, you're not just preparing for an exam—you're preparing for a successful nursing career!
                      </p>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal600 hover:bg-nai-teal700 text-white px-6 sm:px-8 py-3 rounded-lg font-bold transition-colors shadow-lg text-base sm:text-lg">
                          Get NCLEX Success Strategy
                        </Link>
                        <Link to="/pages/nclex-ngn" className="border-2 border-nai-teal600 text-nai-teal hover:bg-nai-teal600 hover:text-white px-6 sm:px-8 py-3 rounded-lg font-bold transition-colors text-base sm:text-lg">
                          View NCLEX Programs
                        </Link>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div className="bg-gradient-to-r from-teal-50 via-cyan-50 to-blue-50 rounded-xl sm:rounded-2xl p-6 sm:p-8 mb-10 sm:mb-12 sm:border-2 sm:border-teal-300 shadow-xl">
                      <h3 className="text-2xl sm:text-3xl font-bold text-teal-900 mb-5 sm:mb-6 text-center">Your NCLEX Success Starts Here</h3>
                      <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-5 sm:mb-6 text-center max-w-4xl mx-auto">
                        By avoiding these common NCLEX mistakes and following a strategic study plan, you can walk into the exam with confidence. The NCLEX is a challenging but conquerable test—with the right preparation and support, your dream of becoming a registered nurse is within reach!
                      </p>
                      <p className="text-lg sm:text-xl text-teal-800 font-bold text-center">
                        Ready to pass your NCLEX? Let NAI guide you every step of the way!
                      </p>
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
                        className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-6 py-2 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl"
                      >
                        Share Article
                      </button>
                    </div>
                  </div>
                </motion.div>
              </article>

              {/* Enhanced Sidebar */}
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
        <section className="w-full bg-gradient-to-r from-nai-teal/600 via-nai-deep-teal600 to-nai-teal/700 py-20">
          <div className="container-full-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <AlertTriangle className="w-16 h-16 text-white mx-auto mb-8" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Don't Let Mistakes Derail Your NCLEX Success</h2>
              <p className="text-white/95 mb-10 text-xl leading-relaxed max-w-4xl mx-auto">
                Learn from the expertise of NAI's NCLEX specialists and avoid the common pitfalls that prevent success. Start your strategic preparation today.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal/600 px-10 py-4 rounded-lg font-bold transition-colors hover:bg-gray-100 shadow-lg text-lg"
                >
                  Get Success Strategy
                </Link>
                <Link 
                  to="/pages/nclex-ngn" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal/600 px-10 py-4 rounded-lg font-bold transition-colors text-lg"
                >
                  Start NCLEX Prep
                </Link>
              </div>
              
              {/* Success Stats */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">10</div>
                  <div className="text-white/90">Common Mistakes Identified</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">96%</div>
                  <div className="text-white/90">First-Time Pass Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Expert</div>
                  <div className="text-white/90">Strategy Guidance</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost5
