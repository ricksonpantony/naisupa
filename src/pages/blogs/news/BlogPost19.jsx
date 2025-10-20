import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Heart, Cpu, Users, FileText, Award, Target, Zap } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost19 = () => {
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
        title: 'Decoding the NCLEX CAT Exam: Understanding Computer Adaptive Testing for Success',
        text: 'Master the NCLEX Computer Adaptive Testing system with proven strategies, adaptive algorithms understanding, and confidence-building techniques.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Decoding the NCLEX CAT Exam: Understanding Computer Adaptive Testing for Success',
    date: '2024-12-09',
    author: 'NCLEX Testing Specialists',
    category: 'NCLEX Preparation',
    excerpt: 'Master the NCLEX Computer Adaptive Testing system with proven strategies for understanding adaptive algorithms, question difficulty patterns, and optimal test-taking approaches.',
    featuredImage: '/Images/nclex-preparation.webp',
    tags: ['NCLEX', 'CAT Testing', 'Computer Adaptive', 'Test Strategy', 'Nursing Licensure', 'Exam Prep'],
    views: 9234,
    likes: 478,
    comments: 203
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/decoding-the-nclex-cat-exam`}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-nai-teal to-nai-highlight transition-all duration-300 shadow-sm"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Professional Blog Layout */}
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
                <span className="text-gray-900">NCLEX Preparation</span>
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

        {/* Hero Section */}
        <section className="w-full bg-gradient-to-br from-nai-teal/100 via-white to-nai-deep-teal100 py-16">
          <motion.div
            className="container-full-width"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-nai-teal/20">
                  <h2 className="text-2xl font-bold text-nai-teal/900 mb-4 flex items-center gap-3">
                    <Cpu className="w-6 h-6 text-nai-teal/600" />
                    CAT System Mastery
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Cpu className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Adaptive algorithm understanding</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Question difficulty patterns</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Optimal test strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Passing level achievement</span>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {post.tags && post.tags.slice(0, 6).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-nai-teal/200 text-nai-teal/700 px-3 py-1 rounded-full text-xs font-medium border border-nai-teal/200"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src={post.featuredImage}
                    alt={post.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nai-teal/600/20 via-transparent to-transparent rounded-2xl"></div>
                  
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-nai-teal/600">CAT</div>
                          <div className="text-xs text-gray-600">System</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal/600">{post.readTime}</div>
                          <div className="text-xs text-gray-600">Read</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal/600">Success</div>
                          <div className="text-xs text-gray-600">Strategy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Main Content */}
        <main className="w-full py-16 bg-nai-teal/50">
          <div className="container-full-width">
            <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-12 xl:gap-16">
              
              <article className="lg:col-span-3 xl:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-nai-teal/20"
                >
                  {/* Table of Contents */}
                  <div className="bg-nai-teal/50 border border-nai-teal/200 rounded-xl p-6 mb-12">
                    <h3 className="text-xl font-bold text-nai-teal/900 mb-4 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-nai-teal/600" />
                      CAT System Guide
                    </h3>
                    <nav className="space-y-2">
                      <a href="#understanding" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        1. Understanding CAT Technology
                      </a>
                      <a href="#algorithm" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        2. Adaptive Algorithm Mechanics
                      </a>
                      <a href="#strategies" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        3. Optimal Test Strategies
                      </a>
                      <a href="#success-factors" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        4. Success Factors
                      </a>
                    </nav>
                  </div>

                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal/900 prose-p:text-gray-700">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 border-l-4 border-nai-teal/500 rounded-r-xl p-8 mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/700 mb-6 flex items-center gap-3">
                        <Cpu className="w-8 h-8" />
                        Mastering Computer Adaptive Testing
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        The NCLEX Computer Adaptive Testing (CAT) system represents a sophisticated approach to nursing licensure examination. Unlike traditional linear tests, CAT adapts to your ability level in real-time, providing a personalized testing experience that determines your competency efficiently.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border border-nai-teal/200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">CAT Advantages:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Precise ability measurement</li>
                              <li>• Efficient testing process</li>
                              <li>• Reduced test anxiety</li>
                              <li>• Fair assessment for all levels</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Key Features:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 75-265 questions (NCLEX-RN)</li>
                              <li>• Variable question difficulty</li>
                              <li>• Real-time ability estimation</li>
                              <li>• Immediate pass/fail determination</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Algorithm Understanding */}
                    <section id="algorithm" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <Target className="w-7 h-7 text-nai-teal/600" />
                        How the Adaptive Algorithm Works
                      </h3>
                      
                      <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-8">
                        <h4 className="font-bold text-blue-800 mb-4">The CAT Process Flow</h4>
                        <div className="grid md:grid-cols-4 gap-4">
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">1️⃣</div>
                            <strong>Initial Question</strong>
                            <p className="text-xs mt-1">Medium difficulty level</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">📊</div>
                            <strong>Response Analysis</strong>
                            <p className="text-xs mt-1">Ability level estimation</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">🎯</div>
                            <strong>Next Question</strong>
                            <p className="text-xs mt-1">Difficulty adjustment</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">✅</div>
                            <strong>Determination</strong>
                            <p className="text-xs mt-1">Pass/fail decision</p>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h4 className="font-bold text-green-800 mb-4">When You Answer Correctly</h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Computer increases difficulty</li>
                            <li>• Ability estimate rises</li>
                            <li>• More challenging questions presented</li>
                            <li>• Confidence in ability grows</li>
                          </ul>
                        </div>
                        
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h4 className="font-bold text-red-800 mb-4">When You Answer Incorrectly</h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Computer decreases difficulty</li>
                            <li>• Ability estimate lowers</li>
                            <li>• Easier questions selected</li>
                            <li>• System recalibrates assessment</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    {/* Test Strategies */}
                    <section id="strategies" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <Zap className="w-7 h-7 text-nai-teal/600" />
                        Optimal CAT Test Strategies
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                          <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                            🎯 Question-by-Question Approach
                          </h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div className="bg-white p-4 rounded-lg">
                              <strong>Read Completely:</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• Every word matters</li>
                                <li>• Identify key terms</li>
                                <li>• Note client age/condition</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong>Analyze Options:</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• Eliminate obviously wrong</li>
                                <li>• Look for best answer</li>
                                <li>• Consider all possibilities</li>
                              </ul>
                            </div>
                            <div className="bg-white p-4 rounded-lg">
                              <strong>Select Confidently:</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• Trust your knowledge</li>
                                <li>• Don't second-guess</li>
                                <li>• Move forward positively</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                          <h4 className="font-bold text-orange-800 mb-4">Priority and Safety Framework</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <strong>ABC Priority (Airway, Breathing, Circulation):</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• Airway obstruction = highest priority</li>
                                <li>• Breathing difficulties = second priority</li>
                                <li>• Circulation issues = third priority</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Maslow's Hierarchy:</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• Physiological needs first</li>
                                <li>• Safety and security second</li>
                                <li>• Psychological needs follow</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* NAI CTA */}
                    <div className="bg-gradient-to-r from-nai-teal/100 via-nai-deep-teal50 to-nai-teal/100 border-2 border-nai-teal/300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-nai-teal/900 mb-8">Master NCLEX CAT with NAI</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                        Our advanced NCLEX preparation program includes CAT simulation technology, adaptive question banks, and personalized coaching to optimize your testing strategy and success rate.
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🖥️</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">CAT Simulation</h4>
                          <p className="text-sm text-gray-600">Realistic testing experience</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">📚</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Adaptive Questions</h4>
                          <p className="text-sm text-gray-600">Personalized difficulty levels</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">📊</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Performance Analytics</h4>
                          <p className="text-sm text-gray-600">Detailed progress tracking</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🎯</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Success Coaching</h4>
                          <p className="text-sm text-gray-600">Expert guidance and support</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Start NCLEX Prep
                        </Link>
                        <Link to="/pages/courses" className="border-2 border-nai-teal/600 text-nai-teal/600 hover:bg-nai-teal/600 hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                          Explore Programs
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-gray-600 text-sm sm:text-base">
                        Share this CAT exam roadmap with others preparing for the NCLEX journey.
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

              {/* Sidebar */}
              <aside className="lg:col-span-1 xl:col-span-1 mt-12 lg:mt-0">
                <motion.div
                  className="lg:sticky lg:top-28 space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="bg-white border border-nai-teal/200 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-nai-teal/600" />
                        Reading Progress
                      </h3>
                      <span className="text-sm text-nai-teal/600 font-bold bg-nai-teal/200 px-2 py-1 rounded-full">
                        {Math.round(readingProgress)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3 mb-3">
                      <div 
                        className="bg-gradient-to-r from-nai-teal to-nai-highlight h-3 rounded-full transition-all duration-300 shadow-sm"
                        style={{ width: `${readingProgress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center">
                      {readingProgress < 25 ? "Learning CAT basics..." : 
                       readingProgress < 50 ? "Understanding algorithms!" :
                       readingProgress < 75 ? "Mastering strategies!" : "CAT system expert!"}
                    </p>
                  </div>

                  <div className="bg-white border border-nai-teal/200 rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="w-4 h-4 text-nai-teal/600" />
                      About the Team
                    </h3>
                    <div className="text-center mb-4">
                      <img 
                        src="/Images/ALLTECHZONE.webp" 
                        alt="NCLEX Testing Specialists" 
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-nai-teal/200"
                      />
                      <div className="font-bold text-gray-900">{post.author}</div>
                      <div className="text-sm text-nai-teal/600 font-medium">CAT Testing Experts</div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      Specialized team with deep expertise in NCLEX CAT methodology, adaptive testing algorithms, and optimal test-taking strategies.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-nai-teal/600 to-nai-deep-teal700 text-white rounded-xl p-6 shadow-lg">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <Cpu className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">CAT Mastery Kit</h3>
                      <p className="text-sm text-white/90">
                        Get advanced CAT strategies, simulation access, and personalized coaching for NCLEX success.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm border-0 focus:ring-2 focus:ring-white/50"
                      />
                      <button className="w-full bg-white text-nai-teal/600 px-4 py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors shadow-md">
                        Get CAT Kit
                      </button>
                    </div>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </main>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-nai-teal/600 via-nai-deep-teal600 to-nai-teal/700 py-20">
          <div className="container-full-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <Cpu className="w-16 h-16 text-white mx-auto mb-8" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Master the NCLEX CAT System</h2>
              <p className="text-white/95 mb-10 text-xl leading-relaxed max-w-4xl mx-auto">
                Decode the computer adaptive testing system and build unshakeable confidence for NCLEX success with NAI's comprehensive preparation program.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal/600 px-10 py-4 rounded-lg font-bold transition-colors hover:bg-gray-100 shadow-lg text-lg"
                >
                  Start CAT Preparation
                </Link>
                <Link 
                  to="/pages/courses" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal/600 px-10 py-4 rounded-lg font-bold transition-colors text-lg"
                >
                  View NCLEX Programs
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}


/* Subcomponents */

const MetaPill = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm border border-nai-teal/20">
    {icon}
    <span className="text-sm sm:text-base font-semibold text-gray-700 truncate">{label}</span>
  </div>
)

const Stat = ({ value, label }) => (
  <div>
    <div className="text-lg sm:text-xl md:text-2xl font-bold text-nai-teal mb-1">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600">{label}</div>
  </div>
)

const SuccessStat = ({ value, label }) => (
  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-4 md:p-5 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className="text-xl sm:text-2xl md:text-3xl font-black mb-1 text-white drop-shadow-lg">{value}</div>
    <div className="text-white/95 text-xs sm:text-sm md:text-base font-semibold">{label}</div>
  </div>
)

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/60 ${className}`}>
    {children}
  </div>
)

const Section = ({ title, children }) => (
  <section className="scroll-mt-28">
    {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
    {children}
  </section>
)

const QuestionCard = ({ question, answer }) => (
  <Card className="p-6 border-l-4 border-nai-teal">
    <h4 className="text-lg font-bold text-nai-teal mb-3">{question}</h4>
    <p className="text-gray-700 leading-relaxed">{answer}</p>
  </Card>
)

export default BlogPost19