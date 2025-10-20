import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Heart, Brain, Users, Lightbulb } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost10 = () => {
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
        title: 'The Art of Answering NCLEX Psychosocial Integrity Questions',
        text: 'Psychosocial integrity questions assess your ability to provide emotional support and maintain patient dignity. Learn therapeutic communication and patient-centered care strategies.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'The Art of Answering NCLEX Psychosocial Integrity Questions',
    date: '2025-01-24',
    author: 'NAI Psychosocial Care Team',
    category: 'NCLEX Psychosocial',
    excerpt: 'Psychosocial integrity questions assess your ability to provide emotional support and maintain patient dignity. They cover topics such as therapeutic communication, mental-health disorders, coping mechanisms, grief and loss.',
    featuredImage: '/blog-images/b10.webp',
    tags: ['NCLEX', 'Psychosocial Integrity', 'Therapeutic Communication', 'Mental Health', 'Patient Care'],
    views: 3298,
    likes: 127,
    comments: 33
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/the-art-of-answering-nclex-psychosocial-integrity-questions`}
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
                <span className="text-gray-900">Psychosocial Care</span>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-3 sm:mb-4 break-words">Psychosocial Care Excellence</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    {post.excerpt}
                  </p>
                  
                  {/* Key Points - Mobile Optimized */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Therapeutic communication techniques</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Mental health disorders understanding</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Grief and loss support strategies</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Patient-centered compassionate care</span>
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
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Care</div>
                        <div className="text-xs sm:text-sm text-gray-600">Focus</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Expert</div>
                        <div className="text-xs sm:text-sm text-gray-600">Guidance</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Support</div>
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
                    <h3 className="text-lg sm:text-xl font-bold text-nai-teal mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
                      <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
                      <span className="break-words">Psychosocial Care Guide</span>
                    </h3>
                    <nav className="space-y-2">
                      <a href="#communication-strategies" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-1 text-sm font-medium text-gray-800">
                        1. Therapeutic Communication Strategies
                      </a>
                      <a href="#mental-health-topics" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-1 text-sm font-medium text-gray-800">
                        2. Mental Health & Coping
                      </a>
                      <a href="#success-approach" className="block text-nai-teal hover:text-nai-teal800 transition-colors py-1 text-sm font-medium text-gray-800">
                        3. NCLEX Success Approach
                      </a>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="prose pnai-deep-teallg max-w-none pnai-deep-tealheadings:text-nai-teal/900 pnai-deep-tealp:text-gray-700 pnai-deep-teala:text-nai-teal/600 pnai-deep-tealstrong:text-nai-teal/600">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 border-l-4 border-nai-teal/500 rounded-r-xl p-8 mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/700 mb-6 flex items-center gap-3">
                        <Heart className="w-8 h-8" />
                        Mastering Psychosocial Integrity
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Psychosocial integrity questions assess your ability to provide emotional support and maintain patient dignity. They cover topics such as therapeutic communication, mental-health disorders, coping mechanisms, grief and loss, and require a compassionate, patient-centered approach.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border border-nai-teal/200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Core Topics:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Therapeutic communication techniques</li>
                              <li>• Mental health and psychiatric disorders</li>
                              <li>• Crisis intervention and suicide prevention</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Key Principles:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Patient safety and dignity</li>
                              <li>• Empathetic, non-judgmental care</li>
                              <li>• Cultural sensitivity and respect</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 1: Communication Strategies */}
                    <h2 id="communication-strategies" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-nai-teal/500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">1</span>
                      Therapeutic Communication Strategies
                    </h2>
                    <div className="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Think like a counsellor: use <strong className="text-nai-teal/600">open-ended questions, active listening and empathy</strong>. Always prioritize safety (e.g., suicide risk) and apply Maslow's hierarchy. When faced with similar options, pick the most compassionate choice.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 rounded-xl p-8 border border-nai-teal/200">
                          <h4 className="text-2xl font-bold text-nai-teal/800 mb-6">Therapeutic Communication Techniques</h4>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div>
                              <h5 className="font-bold text-nai-teal/700 mb-4">Effective Techniques:</h5>
                              <div className="space-y-3">
                                <div className="bg-white rounded-lg p-4 border border-nai-teal/20">
                                  <h6 className="font-semibold text-nai-teal/800 mb-2">Open-Ended Questions</h6>
                                  <p className="text-sm text-gray-700">"How are you feeling about your diagnosis?"</p>
                                  <p className="text-xs text-nai-teal/600 mt-1">Encourages patient expression</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-nai-teal/20">
                                  <h6 className="font-semibold text-nai-teal/800 mb-2">Active Listening</h6>
                                  <p className="text-sm text-gray-700">"I hear you saying that you're worried..."</p>
                                  <p className="text-xs text-nai-teal/600 mt-1">Shows understanding and validation</p>
                                </div>
                                <div className="bg-white rounded-lg p-4 border border-nai-teal/20">
                                  <h6 className="font-semibold text-nai-teal/800 mb-2">Reflection</h6>
                                  <p className="text-sm text-gray-700">"It sounds like you're feeling overwhelmed."</p>
                                  <p className="text-xs text-nai-teal/600 mt-1">Mirrors patient's emotions</p>
                                </div>
                              </div>
                            </div>
                            <div>
                              <h5 className="font-bold text-red-700 mb-4">Non-Therapeutic Responses:</h5>
                              <div className="space-y-3">
                                <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                                  <h6 className="font-semibold text-red-800 mb-2">Giving Advice</h6>
                                  <p className="text-sm text-gray-700">"You should just think positive thoughts."</p>
                                  <p className="text-xs text-red-600 mt-1">Blocks patient autonomy</p>
                                </div>
                                <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                                  <h6 className="font-semibold text-red-800 mb-2">False Reassurance</h6>
                                  <p className="text-sm text-gray-700">"Everything will be fine."</p>
                                  <p className="text-xs text-red-600 mt-1">Minimizes patient concerns</p>
                                </div>
                                <div className="bg-red-50 rounded-lg p-4 border border-red-100">
                                  <h6 className="font-semibold text-red-800 mb-2">Changing Subject</h6>
                                  <p className="text-sm text-gray-700">"Let's talk about something else."</p>
                                  <p className="text-xs text-red-600 mt-1">Avoids patient's concerns</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                          <h4 className="text-2xl font-bold text-blue-800 mb-6">Crisis Intervention & Safety</h4>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                              <Users className="w-8 h-8 text-blue-600 mb-3" />
                              <h5 className="font-bold text-blue-700 mb-2">Suicide Risk Assessment</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Direct questioning about suicidal thoughts</li>
                                <li>• Assess plan, means, and intent</li>
                                <li>• Immediate safety measures</li>
                                <li>• Never leave patient alone</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                              <Brain className="w-8 h-8 text-blue-600 mb-3" />
                              <h5 className="font-bold text-blue-700 mb-2">De-escalation Techniques</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Remain calm and non-threatening</li>
                                <li>• Use low, slow voice tone</li>
                                <li>• Maintain safe physical distance</li>
                                <li>• Acknowledge patient's feelings</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg p-6 shadow-sm border border-blue-100">
                              <Heart className="w-8 h-8 text-blue-600 mb-3" />
                              <h5 className="font-bold text-blue-700 mb-2">Grief Support</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Allow expression of emotions</li>
                                <li>• Normalize grief responses</li>
                                <li>• Provide presence and support</li>
                                <li>• Respect cultural practices</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Section 2: Mental Health Topics */}
                    <h2 id="mental-health-topics" className="text-3xl font-bold text-nai-teal/900 mb-8 flex items-center gap-3">
                      <span className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">2</span>
                      Mental Health & Coping Mechanisms
                    </h2>
                    <div className="bg-white border-2 border-purple-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Understanding <strong className="text-purple-600">mental health disorders and healthy coping mechanisms</strong> is essential for providing comprehensive psychosocial care and answering NCLEX questions correctly.
                      </p>
                      
                      <div className="space-y-8">
                        <div className="bg-gradient-to-r from-purple-50 to-indigo-50 rounded-xl p-8 border border-purple-200">
                          <h4 className="text-2xl font-bold text-purple-800 mb-6">Common Mental Health Conditions</h4>
                          <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-purple-100">
                                <h5 className="font-bold text-purple-800 mb-2">Depression</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Persistent sadness and hopelessness</li>
                                  <li>• Loss of interest in activities</li>
                                  <li>• Sleep and appetite changes</li>
                                  <li>• Suicide risk assessment crucial</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-purple-100">
                                <h5 className="font-bold text-purple-800 mb-2">Anxiety Disorders</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Excessive worry and fear</li>
                                  <li>• Physical symptoms (palpitations)</li>
                                  <li>• Avoidance behaviors</li>
                                  <li>• Panic attacks and phobias</li>
                                </ul>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="bg-white rounded-lg p-4 border border-purple-100">
                                <h5 className="font-bold text-purple-800 mb-2">Bipolar Disorder</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Alternating mood episodes</li>
                                  <li>• Manic and depressive phases</li>
                                  <li>• Medication compliance issues</li>
                                  <li>• Risk-taking behaviors during mania</li>
                                </ul>
                              </div>
                              <div className="bg-white rounded-lg p-4 border border-purple-100">
                                <h5 className="font-bold text-purple-800 mb-2">Schizophrenia</h5>
                                <ul className="text-sm text-gray-700 space-y-1">
                                  <li>• Positive symptoms (hallucinations)</li>
                                  <li>• Negative symptoms (flat affect)</li>
                                  <li>• Cognitive impairments</li>
                                  <li>• Antipsychotic medication effects</li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border border-green-200">
                          <h4 className="text-2xl font-bold text-green-800 mb-6">Healthy Coping Mechanisms</h4>
                          <div className="grid md:grid-cols-3 gap-6">
                            <div className="bg-white rounded-lg p-4 border border-green-100">
                              <h5 className="font-bold text-green-700 mb-3">Problem-Focused Coping</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Seeking information</li>
                                <li>• Problem-solving strategies</li>
                                <li>• Taking direct action</li>
                                <li>• Planning and organization</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-green-100">
                              <h5 className="font-bold text-green-700 mb-3">Emotion-Focused Coping</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Deep breathing exercises</li>
                                <li>• Meditation and mindfulness</li>
                                <li>• Progressive muscle relaxation</li>
                                <li>• Journaling and expression</li>
                              </ul>
                            </div>
                            <div className="bg-white rounded-lg p-4 border border-green-100">
                              <h5 className="font-bold text-green-700 mb-3">Social Support</h5>
                              <ul className="text-sm text-gray-700 space-y-1">
                                <li>• Family and friend networks</li>
                                <li>• Support groups</li>
                                <li>• Professional counseling</li>
                                <li>• Spiritual/religious practices</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* NAI Success Section */}
                    <div className="bg-gradient-to-r from-nai-teal/100 via-nai-deep-teal50 to-nai-teal/100 border-2 border-nai-teal/300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-nai-teal/900 mb-8">Excel in Psychosocial Care with NAI</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                        By focusing on therapeutic communication and patient-centred care, you can confidently answer these questions and provide holistic nursing care. NAI prepares students through role-playing, case studies and personalized feedback.
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">💬</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Therapeutic Communication</h4>
                          <p className="text-sm text-gray-600">Master empathetic dialogue techniques</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🧠</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Mental Health Knowledge</h4>
                          <p className="text-sm text-gray-600">Understand psychiatric conditions</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">❤️</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Compassionate Care</h4>
                          <p className="text-sm text-gray-600">Patient-centered approach</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🎯</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">NCLEX Success</h4>
                          <p className="text-sm text-gray-600">Strategic question approaches</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Master Psychosocial Care
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
                        src="/Images/ALLTECHZONE.webp" 
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
              <Heart className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-6 sm:mb-8" />
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">Master Psychosocial Integrity for NCLEX Success</h2>
              <p className="text-white/95 mb-8 sm:mb-10 text-base sm:text-lg md:text-xl leading-relaxed max-w-3xl mx-auto px-4">
                Build confidence in therapeutic communication and compassionate care with NAI's comprehensive psychosocial training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center mb-10 sm:mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-8 sm:px-10 py-3 sm:py-4 rounded-xl font-bold transition-all hover:bg-gray-100 shadow-lg text-base sm:text-lg hover:scale-105 min-h-[44px] flex items-center justify-center"
                >
                  Master Psychosocial Care
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
                  <div className="text-4xl font-bold mb-2">Care</div>
                  <div className="text-white/90">Compassionate Focus</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Expert</div>
                  <div className="text-white/90">Communication Skills</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">Success</div>
                  <div className="text-white/90">Therapeutic Training</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost10
