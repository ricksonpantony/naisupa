import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Heart, Brain, Users, Target, AlertTriangle, Lightbulb, CheckSquare, X } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost14 = () => {
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
        title: 'Breaking Down the "Select All That Apply" (SATA) Questions in NCLEX',
        text: 'Master SATA questions with proven strategies. Learn to treat each option as true/false, focus on keywords, and build confidence through practice.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Breaking Down the "Select All That Apply" (SATA) Questions in NCLEX',
    date: '2024-12-23',
    author: 'NAI NCLEX Strategy Team',
    category: 'NCLEX Strategy',
    excerpt: '"Select All That Apply" questions intimidate many NCLEX candidates because there is no partial credit. This article demystifies them and offers proven strategies for success.',
    featuredImage: '/Images/nclex-preparation.webp',
    tags: ['NCLEX', 'SATA Questions', 'Test Strategy', 'Critical Thinking', 'Exam Preparation', 'Nursing'],
    views: 4891,
    likes: 234,
    comments: 78
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/breaking-down-the-select-all-that-apply-sata-questions-in-nclex`}
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
                <span className="text-gray-900">NCLEX Strategy</span>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-3 sm:mb-4 break-words">SATA Questions Mastery</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    {post.excerpt}
                  </p>
                  
                  {/* Key Points - Mobile Optimized */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Strategic approach to SATA questions</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Critical thinking development</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Proven success methods</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Common mistake avoidance</span>
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
                        <div className="text-xs sm:text-sm text-gray-600">Focused</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Expert</div>
                        <div className="text-xs sm:text-sm text-gray-600">Guidance</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Success</div>
                        <div className="text-xs sm:text-sm text-gray-600">Methods</div>
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
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-nai-teal" />
                      SATA Success Guide
                    </h3>
                    <nav className="space-y-1 sm:space-y-2">
                      <a href="#why-challenging" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-sm font-medium">
                        1. Why SATA Questions Are Challenging
                      </a>
                      <a href="#purpose-topics" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-sm font-medium">
                        2. Purpose & Common Topics
                      </a>
                      <a href="#proven-strategies" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-sm font-medium">
                        3. Proven Success Strategies
                      </a>
                      <a href="#example-question" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-sm font-medium">
                        4. Example Question & Rationale
                      </a>
                      <a href="#common-mistakes" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        5. Common Mistakes to Avoid
                      </a>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal/900 prose-p:text-gray-700 prose-a:text-nai-teal/600 prose-strong:text-nai-teal/600">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 border-l-4 border-nai-teal/500 rounded-r-xl p-8 mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/700 mb-6 flex items-center gap-3">
                        <CheckSquare className="w-8 h-8" />
                        Conquering SATA Questions
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        "Select All That Apply" questions intimidate many NCLEX candidates because there is no partial credit - you must select all correct answers and no incorrect ones to earn points. This comprehensive guide demystifies SATA questions and provides proven strategies for success.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border border-nai-teal/200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">SATA Characteristics:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Multiple correct answers possible</li>
                              <li>• No partial credit given</li>
                              <li>• Requires critical thinking skills</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Success Keys:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Systematic approach to each option</li>
                              <li>• Keyword recognition skills</li>
                              <li>• Regular practice and review</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 1: Why Challenging */}
                    <h2 id="why-challenging" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">1</span>
                      Why SATA Questions Are Challenging
                    </h2>
                    <div className="bg-white border-2 border-red-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        SATA questions can cover <strong className="text-red-600">multiple correct answers, require advanced critical thinking</strong>, and often use tricky wording that can mislead even well-prepared candidates.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-red-50 to-orange-50 rounded-xl p-8 border border-red-200">
                          <h4 className="text-2xl font-bold text-red-800 mb-6">Challenge Factors</h4>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-red-100">
                              <AlertTriangle className="w-8 h-8 text-red-600 mb-3" />
                              <h5 className="font-bold text-red-700 mb-2">No Partial Credit</h5>
                              <p className="text-sm text-gray-700 mb-2">Must select ALL correct answers and NO incorrect ones</p>
                              <ul className="text-xs text-gray-600 space-y-1">
                                <li>• All or nothing scoring</li>
                                <li>• Increases pressure significantly</li>
                                <li>• Requires complete accuracy</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-red-100">
                              <Brain className="w-8 h-8 text-red-600 mb-3" />
                              <h5 className="font-bold text-red-700 mb-2">Critical Thinking</h5>
                              <p className="text-sm text-gray-700 mb-2">Requires higher-order thinking skills</p>
                              <ul className="text-xs text-gray-600 space-y-1">
                                <li>• Analysis and synthesis</li>
                                <li>• Application of knowledge</li>
                                <li>• Complex decision making</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-red-100">
                              <Target className="w-8 h-8 text-red-600 mb-3" />
                              <h5 className="font-bold text-red-700 mb-2">Tricky Wording</h5>
                              <p className="text-sm text-gray-700 mb-2">Subtle language can mislead candidates</p>
                              <ul className="text-xs text-gray-600 space-y-1">
                                <li>• Distracting language patterns</li>
                                <li>• Similar-sounding options</li>
                                <li>• Negative phrasing tricks</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Purpose & Topics */}
                    <h2 id="purpose-topics" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">2</span>
                      Purpose & Common Topics
                    </h2>
                    <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        These questions test your ability to <strong className="text-blue-600">recognize signs and symptoms, interventions, side effects and patient teaching</strong> for various conditions in realistic nursing scenarios.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                          <h4 className="text-2xl font-bold text-blue-800 mb-6">Common SATA Topics</h4>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">Clinical Assessment</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Signs and symptoms identification</li>
                                  <li>• Risk factors recognition</li>
                                  <li>• Priority assessment areas</li>
                                  <li>• Normal vs abnormal findings</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">Nursing Interventions</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Appropriate nursing actions</li>
                                  <li>• Priority interventions</li>
                                  <li>• Safety measures</li>
                                  <li>• Monitoring requirements</li>
                                </ul>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">Medication Knowledge</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Drug classifications and actions</li>
                                  <li>• Side effects and adverse reactions</li>
                                  <li>• Drug interactions</li>
                                  <li>• Administration considerations</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-800 mb-2">Patient Education</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Discharge teaching points</li>
                                  <li>• Lifestyle modifications</li>
                                  <li>• Warning signs to report</li>
                                  <li>• Follow-up requirements</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Strategies */}
                    <h2 id="proven-strategies" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-green-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">3</span>
                      Proven Success Strategies
                    </h2>
                    <div className="bg-white border-2 border-green-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        <strong className="text-green-600">Treat each option as true or false, pay attention to keywords, focus on the question stem</strong>, and use systematic elimination while avoiding overthinking.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                          <h4 className="text-2xl font-bold text-green-800 mb-6">Step-by-Step Strategy</h4>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-green-100 relative">
                                <div className="absolute -left-3 -top-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">1</div>
                                <h5 className="font-bold text-green-800 mb-2 ml-6">Read Question Stem Carefully</h5>
                                <ul className="text-sm text-gray-700 space-y-1 ml-6">
                                  <li>• Identify the patient situation</li>
                                  <li>• Note key clinical information</li>
                                  <li>• Understand what's being asked</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-green-100 relative">
                                <div className="absolute -left-3 -top-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">2</div>
                                <h5 className="font-bold text-green-800 mb-2 ml-6">Treat Each Option as T/F</h5>
                                <ul className="text-sm text-gray-700 space-y-1 ml-6">
                                  <li>• Consider each option independently</li>
                                  <li>• Ask: "Is this true for this situation?"</li>
                                  <li>• Don't compare options to each other</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-green-100 relative">
                                <div className="absolute -left-3 -top-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">3</div>
                                <h5 className="font-bold text-green-800 mb-2 ml-6">Identify Keywords</h5>
                                <ul className="text-sm text-gray-700 space-y-1 ml-6">
                                  <li>• "Priority," "First," "Most important"</li>
                                  <li>• "Should," "Would," "Could"</li>
                                  <li>• Negative words: "Not," "Except"</li>
                                </ul>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-green-100 relative">
                                <div className="absolute -left-3 -top-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">4</div>
                                <h5 className="font-bold text-green-800 mb-2 ml-6">Use Elimination</h5>
                                <ul className="text-sm text-gray-700 space-y-1 ml-6">
                                  <li>• Rule out clearly incorrect options</li>
                                  <li>• Focus on remaining choices</li>
                                  <li>• Apply nursing principles</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-green-100 relative">
                                <div className="absolute -left-3 -top-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">5</div>
                                <h5 className="font-bold text-green-800 mb-2 ml-6">Avoid Overthinking</h5>
                                <ul className="text-sm text-gray-700 space-y-1 ml-6">
                                  <li>• Trust your nursing knowledge</li>
                                  <li>• Don't second-guess excessively</li>
                                  <li>• Stick to fundamental principles</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-green-100 relative">
                                <div className="absolute -left-3 -top-3 w-8 h-8 bg-green-600 text-white rounded-full flex items-center justify-center text-sm font-bold">6</div>
                                <h5 className="font-bold text-green-800 mb-2 ml-6">Practice Regularly</h5>
                                <ul className="text-sm text-gray-700 space-y-1 ml-6">
                                  <li>• Use quality question banks</li>
                                  <li>• Review rationales thoroughly</li>
                                  <li>• Build confidence through repetition</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* NAI Success Section */}
                    <div className="bg-gradient-to-r from-nai-teal/100 via-nai-deep-teal50 to-nai-teal/100 border-2 border-nai-teal/300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-nai-teal/900 mb-8">Master SATA Questions with NAI</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                        Regular practice with rationales reinforces learning and builds the confidence needed to tackle SATA questions successfully. NAI provides comprehensive SATA question practice with detailed explanations.
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">✅</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Strategic Approach</h4>
                          <p className="text-sm text-gray-600">Systematic SATA methodology</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🧠</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Critical Thinking</h4>
                          <p className="text-sm text-gray-600">Enhanced analytical skills</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">📚</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Practice Banks</h4>
                          <p className="text-sm text-gray-600">Extensive SATA questions</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🎯</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Success Focus</h4>
                          <p className="text-sm text-gray-600">Confidence building approach</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Master SATA Questions
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
                        Found these strategies valuable? Pass them along to fellow NCLEX candidates.
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
              <aside className="lg:col-span-1 xl:col-span-1 mt-8 sm:mt-12 lg:mt-0">
                <motion.div
                  className="lg:sticky lg:top-28 space-y-4 sm:space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Author Section */}
                  <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <User className="w-4 h-4 text-nai-teal" />
                      About the Author
                    </h3>
                    <div className="text-center mb-3 sm:mb-4">
                      <div className="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-nai-teal to-nai-blue rounded-full flex items-center justify-center mx-auto mb-2 sm:mb-3 shadow-lg">
                        <User className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                      </div>
                      <div className="font-bold text-gray-900 text-sm sm:text-base">NAI Editorial Team</div>
                      <div className="text-xs sm:text-sm text-nai-teal font-medium">Nursing Excellence Experts</div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center mb-3 sm:mb-4">
                      Expert insights from NAI's team of nursing professionals and educators.
                    </p>
                    <div className="pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                        <div className="p-2">
                          <div className="text-base sm:text-lg font-bold text-nai-teal">5000+</div>
                          <div className="text-xs text-gray-600 break-words">Success Stories</div>
                        </div>
                        <div className="p-2">
                          <div className="text-base sm:text-lg font-bold text-nai-teal">6+ Years</div>
                          <div className="text-xs text-gray-600 break-words">Experience</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter Section */}
                  <div className="bg-gradient-to-br from-cyan-500 to-blue-600 text-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                    <div className="text-center mb-3 sm:mb-4">
                      <img 
                        src="/Images/ALLTECHZONE.webp" 
                        alt="NAI Newsletter" 
                        className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 object-cover mx-auto mb-3 sm:mb-4 rounded-lg shadow-lg"
                      />
                      <h3 className="font-bold mb-2 text-sm sm:text-base">Stay Updated</h3>
                      <p className="text-xs sm:text-sm text-white/90 leading-relaxed">
                        Get the latest nursing insights and opportunities delivered to your inbox.
                      </p>
                    </div>
                    <a
                      href="https://wa.me/61478320397"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full bg-white text-cyan-600 px-3 sm:px-4 py-2 sm:py-3 rounded-lg font-bold text-xs sm:text-sm hover:bg-gray-50 transition-colors shadow-md text-center"
                    >
                      Chat With Us
                    </a>
                    <p className="text-xs text-white/70 text-center mt-2 sm:mt-3">
                      Join our nursing community
                    </p>
                  </div>
                  
                  {/* Quick Links */}
                  <div className="bg-white border border-gray-200 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <ArrowRight className="w-4 h-4 text-nai-teal" />
                      Quick Links
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <a href="/pages/nclex-ngn" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors">
                        → NCLEX Preparation
                      </a>
                      <a href="/pages/osce-preparation" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors">
                        → OSCE Training
                      </a>
                      <a href="/pages/contact" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors">
                        → Contact Us
                      </a>
                      <a href="/pages/about#success-stories" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors">
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
        <section className="bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal py-16 sm:py-20 md:py-24">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CheckSquare className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-6 sm:mb-8" />
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

export default BlogPost14