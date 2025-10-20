import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Target, Users, TrendingUp, Zap } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost9 = () => {
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
        title: 'Acing NCLEX Prioritization and Delegation Questions: A Nurse\'s Guide',
        text: 'Many NCLEX questions require you to decide which patient to see first or which tasks to delegate. Here\'s how to tackle them with proven strategies.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Acing NCLEX Prioritization and Delegation Questions: A Nurse\'s Guide',
    date: '2025-02-17',
    author: 'NAI NCLEX Strategy Team',
    category: 'NCLEX Strategy',
    excerpt: 'Many NCLEX questions require you to decide which patient to see first or which tasks to delegate. Here\'s how to tackle them with proven strategies and frameworks.',
    featuredImage: getBlogImageUrl('b9.webp'),
    tags: ['NCLEX', 'Prioritization', 'Delegation', 'ABC Framework', 'Maslow\'s Hierarchy'],
    views: 4567,
    likes: 178,
    comments: 45
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/acing-nclex-prioritization-and-delegation-questions-a-nurses-guide`}
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
                <span className="text-gray-900">NCLEX Prioritization</span>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-3 sm:mb-4 break-words">Prioritization & Delegation Mastery</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    {post.excerpt}
                  </p>
                  
                  {/* Key Points - Mobile Optimized */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">ABC prioritization framework</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Maslow's hierarchy application</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Delegation scope of practice</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Strategic elimination techniques</span>
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
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Strategy</div>
                        <div className="text-xs sm:text-sm text-gray-600">Focus</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Expert</div>
                        <div className="text-xs sm:text-sm text-gray-600">Guidance</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Success</div>
                        <div className="text-xs sm:text-sm text-gray-600">Guide</div>
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
                  <div className="bg-white border-2 border-blue-200 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12 shadow-md">
                    <h3 className="text-lg sm:text-xl font-bold text-nai-teal mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                      <span className="break-words">Prioritization & Delegation Guide</span>
                    </h3>
                    <nav className="space-y-2">
                      <a href="#prioritization-framework" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-1 text-sm font-medium text-gray-800">
                        1. Prioritization Framework
                      </a>
                      <a href="#delegation-principles" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-1 text-sm font-medium text-gray-800">
                        2. Delegation Principles
                      </a>
                      <a href="#success-strategies" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-1 text-sm font-medium text-gray-800">
                        3. Success Strategies
                      </a>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal/900 prose-p:text-gray-700 prose-a:text-nai-teal/600 prose-strong:text-nai-teal/600">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 border-l-4 border-nai-teal/500 rounded-r-xl p-8 mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/700 mb-6 flex items-center gap-3">
                        <Target className="w-8 h-8" />
                        NCLEX Prioritization & Delegation Success
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Many NCLEX questions require you to decide which patient to see first or which tasks to delegate. These questions test your clinical judgment, understanding of scope of practice, and ability to prioritize care based on patient acuity and safety considerations.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border border-nai-teal/200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Key Concepts:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• ABC (Airway, Breathing, Circulation) priority</li>
                              <li>• Maslow's hierarchy of needs</li>
                              <li>• Actual vs. potential problems</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Success Factors:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Understanding scope of practice</li>
                              <li>• Patient safety prioritization</li>
                              <li>• Systematic elimination process</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 1: Prioritization Framework */}
                    <h2 id="prioritization-framework" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-nai-teal/500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">1</span>
                      Prioritization Framework
                    </h2>
                    <div className="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Use the <strong className="text-nai-teal/600">ABCs and Maslow's hierarchy</strong>. Address airway and breathing problems before circulation; attend to physiological needs before psychosocial concerns. Compare acute vs chronic conditions and actual vs potential problems when deciding priority.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-8 border border-red-200">
                          <h4 className="text-2xl font-bold text-red-800 mb-6">ABC Priority Framework</h4>
                          <div className="space-y-4">
                            <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-red-100">
                              <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</span>
                              <div>
                                <h5 className="font-bold text-red-800 mb-2">Airway - Highest Priority</h5>
                                <p className="text-gray-700 text-sm">Airway obstruction, choking, severe allergic reactions</p>
                                <p className="text-red-600 text-xs font-medium mt-1">Always see first - life-threatening</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-red-100">
                              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">B</span>
                              <div>
                                <h5 className="font-bold text-orange-800 mb-2">Breathing - Second Priority</h5>
                                <p className="text-gray-700 text-sm">Respiratory distress, pneumothorax, severe asthma</p>
                                <p className="text-orange-600 text-xs font-medium mt-1">See after airway issues</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4 bg-white rounded-lg p-4 border border-red-100">
                              <span className="bg-yellow-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">C</span>
                              <div>
                                <h5 className="font-bold text-yellow-800 mb-2">Circulation - Third Priority</h5>
                                <p className="text-gray-700 text-sm">Hemorrhage, cardiac arrhythmias, shock</p>
                                <p className="text-yellow-600 text-xs font-medium mt-1">Address after airway and breathing</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-nai-teal/50 rounded-xl p-8 border border-blue-200">
                          <h4 className="text-2xl font-bold text-blue-800 mb-6">Maslow's Hierarchy Application</h4>
                          <div className="space-y-3">
                            <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-blue-100">
                              <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                              <span className="font-semibold text-red-800">Physiological Needs</span>
                              <span className="text-gray-600 text-sm">Oxygen, food, water, elimination</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-blue-100">
                              <span className="bg-orange-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                              <span className="font-semibold text-orange-800">Safety & Security</span>
                              <span className="text-gray-600 text-sm">Physical safety, infection prevention</span>
                            </div>
                            <div className="flex items-center gap-4 bg-white rounded-lg p-4 border border-blue-100">
                              <span className="bg-green-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                              <span className="font-semibold text-green-800">Psychosocial Needs</span>
                              <span className="text-gray-600 text-sm">Emotional support, education</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Delegation Principles */}
                    <h2 id="delegation-principles" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-nai-deep-teal500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">2</span>
                      Delegation Principles
                    </h2>
                    <div className="bg-white border-2 border-nai-deep-teal100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Know the <strong className="text-nai-deep-teal600">scope of practice</strong> for Registered Nurses, Licensed/Enrolled Nurses and Assistants in Nursing. Delegating appropriately protects patient safety and ensures tasks are completed efficiently.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-nai-deep-teal50 to-nai-teal/50 rounded-xl p-8 border border-nai-deep-teal200">
                          <h4 className="text-2xl font-bold text-nai-deep-teal800 mb-6">Scope of Practice Guidelines</h4>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg p-6 border border-nai-deep-teal100 shadow-sm">
                              <h5 className="font-bold text-nai-deep-teal800 mb-4">Registered Nurse (RN)</h5>
                              <ul className="text-sm text-gray-700 space-y-2">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Assessment and nursing diagnosis</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Medication administration</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Patient teaching and discharge planning</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Complex wound care</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg p-6 border border-nai-deep-teal100 shadow-sm">
                              <h5 className="font-bold text-nai-deep-teal800 mb-4">Licensed Practical Nurse (LPN)</h5>
                              <ul className="text-sm text-gray-700 space-y-2">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Basic medication administration</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Routine wound care</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Data collection</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Reinforcement of teaching</span>
                                </li>
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg p-6 border border-nai-deep-teal100 shadow-sm">
                              <h5 className="font-bold text-nai-deep-teal800 mb-4">Assistant in Nursing (AIN)</h5>
                              <ul className="text-sm text-gray-700 space-y-2">
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Activities of daily living</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Vital signs (stable patients)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Ambulation assistance</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <CheckCircle className="w-4 h-4 text-nai-deep-teal600" />
                                  <span>Basic comfort measures</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-yellow-50 to-amber-50 rounded-xl p-8 border border-yellow-200">
                          <h4 className="text-2xl font-bold text-yellow-800 mb-6">Delegation Decision Framework</h4>
                          <div className="space-y-4">
                            <div className="bg-white rounded-lg p-4 border border-yellow-100">
                              <h5 className="font-bold text-yellow-800 mb-2">Can Delegate:</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Stable patients with predictable outcomes</li>
                                <li>• Routine, standardized procedures</li>
                                <li>• Tasks within delegatee's scope of practice</li>
                                <li>• Non-complex patient care activities</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-yellow-100">
                              <h5 className="font-bold text-red-800 mb-2">Cannot Delegate:</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Initial patient assessments</li>
                                <li>• Nursing diagnosis and care planning</li>
                                <li>• Patient education and discharge teaching</li>
                                <li>• Unstable patients requiring clinical judgment</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* NAI Success Section */}
                    <div className="bg-gradient-to-r from-nai-teal/100 via-nai-deep-teal50 to-nai-teal/100 border-2 border-nai-teal/300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-nai-teal/900 mb-8">Master Prioritization & Delegation with NAI</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                        Follow the nursing process (ADPIE), eliminate clearly incorrect answers, think about patient safety and use common sense. Practicing these scenarios will improve your ability to prioritize and delegate effectively.
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🎯</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">ABC Framework</h4>
                          <p className="text-sm text-gray-600">Systematic priority assessment</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">👥</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Scope Mastery</h4>
                          <p className="text-sm text-gray-600">Safe delegation practices</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">⚡</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Quick Decision</h4>
                          <p className="text-sm text-gray-600">Efficient elimination strategies</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🏆</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">NCLEX Success</h4>
                          <p className="text-sm text-gray-600">Proven question strategies</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Master NCLEX Strategy
                        </Link>
                        <Link to="/pages/nclex-ngn" className="border-2 border-nai-teal/600 text-nai-teal/600 hover:bg-nai-teal/600 hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                          NCLEX Preparation
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
        <section className="w-full bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal py-16 sm:py-20 md:py-24">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="max-w-7xl mx-auto text-center"
            >
              <Target className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-6 sm:mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">Master NCLEX Prioritization & Delegation</h2>
              <p className="text-white/95 mb-8 sm:mb-10 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
                Build confidence in clinical decision-making with NAI's proven prioritization frameworks and delegation strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all hover:bg-gray-100 shadow-lg text-base sm:text-lg hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  Master NCLEX Strategy
                </Link>
                <Link 
                  to="/pages/nclex-ngn" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all text-base sm:text-lg hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  NCLEX Preparation
                </Link>
              </div>
              
              {/* Success Stats */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">ABC</div>
                  <div className="text-white/90">Priority Framework</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Strategy</div>
                  <div className="text-white/90">Success Focus</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Expert</div>
                  <div className="text-white/90">NCLEX Coaching</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost9
