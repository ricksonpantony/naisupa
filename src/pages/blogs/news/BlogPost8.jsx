import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Zap, Activity, AlertTriangle, Timer } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost8 = () => {
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
        title: 'Excelling in OSCE: A Guide to Clinical Decision-Making Under Pressure',
        text: 'Clinical decision-making is tested rigorously in the OSCE. This article explains how to approach complex scenarios calmly and methodically using structured frameworks.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Excelling in OSCE: A Guide to Clinical Decision-Making Under Pressure',
    date: '2025-02-19',
    author: 'NAI Clinical Decision Team',
    category: 'Clinical Reasoning',
    excerpt: 'Clinical decision-making is tested rigorously in the OSCE. This article explains how to approach complex scenarios calmly and methodically using structured frameworks.',
    featuredImage: getBlogImageUrl('b8.webp'),
    tags: ['OSCE', 'Clinical Decision Making', 'ABCDE', 'Sepsis', 'Patient Prioritization'],
    views: 3654,
    likes: 145,
    comments: 37
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/excelling-in-osce-a-guide-to-clinical-decision-making-under-pressure`}
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
                <span className="text-gray-900">Clinical Decision Making</span>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-3 sm:mb-4 break-words">Clinical Decision Excellence</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    {post.excerpt}
                  </p>
                  
                  {/* Key Points - Mobile Optimized */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">ABCDE framework for deteriorating patients</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">SEPSIS SIX rapid response protocol</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">SBAR communication structure</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Pressure management techniques</span>
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
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Critical</div>
                        <div className="text-xs sm:text-sm text-gray-600">Thinking</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Pressure</div>
                        <div className="text-xs sm:text-sm text-gray-600">Management</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Expert</div>
                        <div className="text-xs sm:text-sm text-gray-600">Skills</div>
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
                    <h3 className="text-xl font-bold text-nai-teal/900 mb-4 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-nai-teal/600" />
                      Clinical Decision Framework
                    </h3>
                    <nav className="space-y-2">
                      <a href="#deteriorating-patient" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        1. Manage a Deteriorating Patient
                      </a>
                      <a href="#sepsis-recognition" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        2. Recognize and Escalate Sepsis
                      </a>
                      <a href="#multiple-patients" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        3. Prioritize Multiple Patients
                      </a>
                      <a href="#pressure-management" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        4. Stay Calm Under Pressure
                      </a>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal/900 prose-p:text-gray-700 prose-a:text-nai-teal/600 prose-strong:text-nai-teal/600">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 border-l-4 border-nai-teal/500 rounded-r-xl p-8 mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/700 mb-6 flex items-center gap-3">
                        <Zap className="w-8 h-8" />
                        Clinical Decision-Making Under Pressure
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Clinical decision-making is tested rigorously in the OSCE through complex scenarios that require quick thinking, systematic approaches, and calm execution under time pressure. This guide provides proven frameworks to excel in high-stakes clinical situations.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border border-nai-teal/200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Critical Skills:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Rapid patient assessment and prioritization</li>
                              <li>• Structured communication and escalation</li>
                              <li>• Evidence-based intervention selection</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Success Factors:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Systematic framework application</li>
                              <li>• Clear reasoning and documentation</li>
                              <li>• Calm, professional demeanor</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 1: Deteriorating Patient */}
                    <h2 id="deteriorating-patient" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-nai-teal/500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">1</span>
                      Manage a Deteriorating Patient
                    </h2>
                    <div className="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Use the <strong className="text-nai-teal/600">ABCDE (Airway, Breathing, Circulation, Disability, Exposure) framework</strong>. Recognize signs of deterioration early, initiate basic interventions and call for help.
                      </p>
                      
                      <div className="space-y-6">
                        <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-xl p-6 border border-red-200">
                          <h4 className="text-xl font-bold text-red-800 mb-4">Early Warning Signs</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h5 className="font-bold text-red-700 mb-3">Respiratory Changes:</h5>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-red-600" />
                                    <span>Increased respiratory rate (&gt;20/min)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-red-600" />
                                  <span>Decreased oxygen saturation (&lt;95%)</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-red-600" />
                                  <span>Use of accessory muscles</span>
                                </li>
                              </ul>
                            </div>
                            <div>
                              <h5 className="font-bold text-red-700 mb-3">Cardiovascular Changes:</h5>
                              <ul className="space-y-2 text-gray-700 text-sm">
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-red-600" />
                                  <span>Heart rate &gt;100 or &lt;60 bpm</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-red-600" />
                                  <span>Systolic BP &lt;90 or &gt;180 mmHg</span>
                                </li>
                                <li className="flex items-center gap-2">
                                  <AlertTriangle className="w-4 h-4 text-red-600" />
                                    <span>Prolonged capillary refill (&gt;2 sec)</span>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                          <h4 className="text-xl font-bold text-green-800 mb-4">ABCDE Response Protocol</h4>
                          <div className="space-y-4">
                            <div className="flex items-start gap-4">
                              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">A</div>
                              <div>
                                <h5 className="font-semibold text-green-800">Airway</h5>
                                <p className="text-sm text-gray-700">Ensure patent airway, position patient, suction if needed</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">B</div>
                              <div>
                                <h5 className="font-semibold text-green-800">Breathing</h5>
                                <p className="text-sm text-gray-700">Assess respiratory effort, administer oxygen, assist ventilation</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">C</div>
                              <div>
                                <h5 className="font-semibold text-green-800">Circulation</h5>
                                <p className="text-sm text-gray-700">Check pulse, blood pressure, establish IV access</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">D</div>
                              <div>
                                <h5 className="font-semibold text-green-800">Disability</h5>
                                <p className="text-sm text-gray-700">Assess neurological status, check blood glucose</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-4">
                              <div className="bg-green-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">E</div>
                              <div>
                                <h5 className="font-semibold text-green-800">Exposure</h5>
                                <p className="text-sm text-gray-700">Full body examination, maintain dignity and warmth</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Sepsis Recognition */}
                    <h2 id="sepsis-recognition" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">2</span>
                      Recognize and Escalate Sepsis
                    </h2>
                    <div className="bg-white border-2 border-red-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Know the <strong className="text-red-600">SEPSIS SIX</strong>: oxygen, blood cultures, IV antibiotics, IV fluids, lactate measurement and urine output monitoring. Acting quickly can save lives.
                      </p>
                      
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-200">
                        <h4 className="text-2xl font-bold text-red-800 mb-6">SEPSIS SIX Protocol</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h5 className="font-bold text-red-700 mb-4">Within 1 Hour - Give 3:</h5>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-red-100">
                                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">1</span>
                                <span className="text-gray-700">High-flow oxygen</span>
                              </div>
                              <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-red-100">
                                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">2</span>
                                <span className="text-gray-700">IV antibiotics</span>
                              </div>
                              <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-red-100">
                                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">3</span>
                                <span className="text-gray-700">IV fluid resuscitation</span>
                              </div>
                            </div>
                          </div>
                          <div>
                            <h5 className="font-bold text-red-700 mb-4">Within 1 Hour - Take 3:</h5>
                            <div className="space-y-3">
                              <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-red-100">
                                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">4</span>
                                <span className="text-gray-700">Blood cultures</span>
                              </div>
                              <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-red-100">
                                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">5</span>
                                <span className="text-gray-700">Lactate measurement</span>
                              </div>
                              <div className="flex items-center gap-3 bg-white rounded-lg p-3 border border-red-100">
                                <span className="bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold">6</span>
                                <span className="text-gray-700">Urine output monitoring</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 3: Multiple Patients */}
                    <h2 id="multiple-patients" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">3</span>
                      Prioritize Multiple Patients
                    </h2>
                    <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        When presented with several patients, use <strong className="text-blue-600">SBAR (Situation, Background, Assessment, Recommendation)</strong> and triage principles. Focus first on airway and breathing issues, then circulation and pain.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                          <h4 className="text-2xl font-bold text-blue-800 mb-6">SBAR Communication Framework</h4>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-700 mb-2">S - Situation</h5>
                                <p className="text-sm text-gray-700">What is happening right now?</p>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-700 mb-2">B - Background</h5>
                                <p className="text-sm text-gray-700">What led up to this situation?</p>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-700 mb-2">A - Assessment</h5>
                                <p className="text-sm text-gray-700">What do you think the problem is?</p>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-blue-100">
                                <h5 className="font-bold text-blue-700 mb-2">R - Recommendation</h5>
                                <p className="text-sm text-gray-700">What do you want to happen?</p>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-xl p-8 border border-purple-200">
                          <h4 className="text-2xl font-bold text-purple-800 mb-6">Triage Priority Framework</h4>
                          <div className="space-y-4">
                            <div className="flex items-center gap-4 bg-red-50 rounded-lg p-4 border border-red-200">
                              <span className="bg-red-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</span>
                              <div>
                                <h5 className="font-semibold text-red-800">Life-Threatening (Red)</h5>
                                <p className="text-sm text-gray-700">Airway obstruction, respiratory failure, cardiac arrest</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 bg-orange-50 rounded-lg p-4 border border-orange-200">
                              <span className="bg-orange-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</span>
                              <div>
                                <h5 className="font-semibold text-orange-800">Urgent (Orange)</h5>
                                <p className="text-sm text-gray-700">Severe pain, significant bleeding, altered consciousness</p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 bg-nai-teal/50 rounded-lg p-4 border border-nai-teal/200">
                              <span className="bg-nai-teal/500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</span>
                              <div>
                                <h5 className="font-semibold text-nai-teal/800">Semi-Urgent (Yellow)</h5>
                                <p className="text-sm text-gray-700">Moderate pain, stable vital signs, minor injuries</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* NAI Success Section */}
                    <div className="bg-gradient-to-r from-nai-teal/100 via-nai-deep-teal50 to-nai-teal/100 border-2 border-nai-teal/300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-nai-teal/900 mb-8">Excel in Clinical Decision-Making with NAI</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                        Practice using structured frameworks, justify your actions out loud and always consider patient safety. NAI's OSCE program offers simulation and feedback to build confidence.
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">⚡</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Rapid Assessment</h4>
                          <p className="text-sm text-gray-600">Quick, systematic patient evaluation</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🎯</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Priority Setting</h4>
                          <p className="text-sm text-gray-600">Evidence-based triage decisions</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🗣️</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Clear Communication</h4>
                          <p className="text-sm text-gray-600">Structured SBAR reporting</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🧘</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Pressure Management</h4>
                          <p className="text-sm text-gray-600">Calm, methodical approach</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Master Clinical Decisions
                        </Link>
                        <Link to="/pages/osce-preparation" className="border-2 border-nai-teal/600 text-nai-teal/600 hover:bg-nai-teal/600 hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                          OSCE Training Program
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
              <Zap className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-6 sm:mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">Master Clinical Decision-Making Under Pressure</h2>
              <p className="text-white/95 mb-8 sm:mb-10 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
                Build confidence in high-stakes clinical scenarios with NAI's comprehensive OSCE training and decision-making frameworks.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all hover:bg-gray-100 shadow-lg text-base sm:text-lg hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  Master Clinical Decisions
                </Link>
                <Link 
                  to="/pages/osce-preparation" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all text-base sm:text-lg hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  OSCE Training Program
                </Link>
              </div>
              
              {/* Success Stats */}
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 max-w-4xl mx-auto px-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Critical</div>
                  <div className="text-white/90">Thinking Skills</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Pressure</div>
                  <div className="text-white/90">Management Training</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Expert</div>
                  <div className="text-white/90">Clinical Guidance</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost8
