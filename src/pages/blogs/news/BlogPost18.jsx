import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Heart, MessageSquare, Users, FileText, Award, Target, Mic } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost18 = () => {
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
        title: 'Mastering Communication in High-Pressure Scenarios: Essential Skills for OSCE Success',
        text: 'Develop advanced communication techniques crucial for high-stakes clinical environments and OSCE exam success.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Mastering Communication in High-Pressure Scenarios: Essential Skills for OSCE Success',
    date: '2024-12-10',
    author: 'Communication Skills Institute',
    category: 'Clinical Skills',
    excerpt: 'Develop advanced communication techniques crucial for high-stakes clinical environments and OSCE exam success. Learn therapeutic communication, conflict resolution, and patient advocacy skills.',
    featuredImage: getGeneralImageUrl('nursing-communication.webp'),
    tags: ['Communication', 'OSCE', 'Clinical Skills', 'Patient Care', 'Therapeutic Communication', 'Interprofessional'],
    views: 8145,
    likes: 412,
    comments: 189
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/mastering-communication-in-high-pressure-scenarios`}
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
        
        {/* Header */}
        <header className="w-full pt-20 pb-8 sm:pb-10 md:pb-12 bg-gradient-to-br from-white via-nai-soft/30 to-blue-50 border-b border-nai-teal/20 shadow-sm">
          <div className="w-full px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="max-w-7xl mx-auto"
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 mb-6 overflow-x-auto whitespace-nowrap pb-2">
                <Link to="/" className="hover:text-nai-teal transition-colors font-medium">Home</Link>
                <span className="text-nai-teal">→</span>
                <Link to={backToNewsUrl} className="hover:text-nai-teal transition-colors font-medium">News</Link>
                <span className="text-nai-teal">→</span>
                <span className="text-nai-teal font-semibold">{post.category}</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-nai-teal text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-bold mb-6 sm:mb-8 shadow-lg hover:shadow-xl transition-all hover:scale-105">
                <Tag className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
                <span className="truncate">{post.category}</span>
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight tracking-tight">
                {post.title}
              </h1>

              {/* Meta */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-8 sm:mb-10">
                <MetaPill icon={<User className="w-5 h-5 text-nai-teal" />} label={post.author} />
                <MetaPill icon={<Calendar className="w-5 h-5 text-nai-teal" />} label={formatDate(post.date)} />
                <MetaPill icon={<Eye className="w-5 h-5 text-nai-teal" />} label={`${post.views?.toLocaleString()} views`} />
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-4">
                <Link 
                  to={backToNewsUrl}
                  className="flex items-center gap-2 bg-white hover:bg-nai-teal text-nai-teal hover:text-white transition-all duration-300 px-5 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg border-2 border-nai-teal min-h-[44px]"
                >
                  <ArrowLeft className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="whitespace-nowrap">Back to News</span>
                </Link>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-gradient-to-r from-nai-teal to-nai-highlight hover:from-nai-blue hover:to-nai-teal text-white transition-all duration-300 px-5 sm:px-6 py-3 rounded-xl font-bold text-sm sm:text-base shadow-lg min-h-[44px]"
                >
                  <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
                  <span className="whitespace-nowrap">{copied ? 'Copied!' : 'Share Article'}</span>
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
                    <MessageSquare className="w-6 h-6 text-nai-teal/600" />
                    Advanced Communication Mastery
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Mic className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Therapeutic communication techniques</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Users className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Conflict resolution strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">High-pressure scenarios</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">OSCE communication stations</span>
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
                          <div className="text-lg font-bold text-nai-teal/600">Expert</div>
                          <div className="text-xs text-gray-600">Communication</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal/600">{post.readTime}</div>
                          <div className="text-xs text-gray-600">Read</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal/600">High</div>
                          <div className="text-xs text-gray-600">Pressure</div>
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
                      Communication Excellence Guide
                    </h3>
                    <nav className="space-y-2">
                      <a href="#fundamentals" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        1. Communication Fundamentals
                      </a>
                      <a href="#therapeutic" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        2. Therapeutic Communication
                      </a>
                      <a href="#conflict" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        3. Conflict Resolution
                      </a>
                      <a href="#osce-scenarios" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        4. OSCE Communication Stations
                      </a>
                    </nav>
                  </div>

                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal/900 prose-p:text-gray-700">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 border-l-4 border-nai-teal/500 rounded-r-xl p-8 mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/700 mb-6 flex items-center gap-3">
                        <MessageSquare className="w-8 h-8" />
                        Excellence in Clinical Communication
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Effective communication is the cornerstone of safe, patient-centered nursing care. In high-pressure clinical environments and OSCE assessments, your ability to communicate clearly, empathetically, and professionally can make the difference between success and failure.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border border-nai-teal/200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Core Communication Elements:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Active listening and empathy</li>
                              <li>• Clear, concise expression</li>
                              <li>• Non-verbal awareness</li>
                              <li>• Cultural sensitivity</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">High-Pressure Skills:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Rapid rapport building</li>
                              <li>• Stress de-escalation</li>
                              <li>• Assertive communication</li>
                              <li>• Team coordination</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Therapeutic Communication */}
                    <section id="therapeutic" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <Heart className="w-7 h-7 text-nai-teal/600" />
                        Therapeutic Communication Techniques
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                          <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                            👂 Active Listening
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Maintain appropriate eye contact</li>
                            <li>• Use reflective statements</li>
                            <li>• Paraphrase and summarize</li>
                            <li>• Ask open-ended questions</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                          <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                            💝 Empathetic Responses
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• "I can see this is difficult for you"</li>
                            <li>• "That must be very frightening"</li>
                            <li>• "Tell me more about your concerns"</li>
                            <li>• "I'm here to support you"</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                          <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                            🔄 Clarification Techniques
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• "Let me make sure I understand..."</li>
                            <li>• "Can you help me understand?"</li>
                            <li>• "What I'm hearing is..."</li>
                            <li>• "Is there anything else?"</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                          <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                            🎯 Focused Questions
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• "On a scale of 1-10, how would you rate..."</li>
                            <li>• "When did you first notice..."</li>
                            <li>• "What makes it better or worse?"</li>
                            <li>• "How are you feeling about..."</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    {/* Conflict Resolution */}
                    <section id="conflict" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <Users className="w-7 h-7 text-nai-teal/600" />
                        Conflict Resolution Framework
                      </h3>
                      
                      <div className="bg-red-50 border border-red-200 rounded-xl p-6 mb-6">
                        <h4 className="font-bold text-red-800 mb-4">The LEAP Approach</h4>
                        <div className="grid md:grid-cols-4 gap-4">
                          <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl mb-2">👂</div>
                            <strong>L - Listen</strong>
                            <p className="text-xs mt-1">Give full attention without interrupting</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl mb-2">💝</div>
                            <strong>E - Empathize</strong>
                            <p className="text-xs mt-1">Acknowledge feelings and perspectives</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl mb-2">❓</div>
                            <strong>A - Ask</strong>
                            <p className="text-xs mt-1">Inquire about needs and solutions</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <div className="text-2xl mb-2">🤝</div>
                            <strong>P - Partner</strong>
                            <p className="text-xs mt-1">Work together toward resolution</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* OSCE Communication Stations */}
                    <section id="osce-scenarios" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <Award className="w-7 h-7 text-nai-teal/600" />
                        OSCE Communication Stations
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h4 className="font-bold text-blue-800 mb-3">🏥 Breaking Bad News Scenario</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <strong>Setup:</strong>
                              <ul className="text-sm mt-1">
                                <li>• Prepare private environment</li>
                                <li>• Ensure adequate time</li>
                                <li>• Have support person present</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Communication:</strong>
                              <ul className="text-sm mt-1">
                                <li>• Use clear, simple language</li>
                                <li>• Allow time for processing</li>
                                <li>• Provide emotional support</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Follow-up:</strong>
                              <ul className="text-sm mt-1">
                                <li>• Assess understanding</li>
                                <li>• Discuss next steps</li>
                                <li>• Arrange ongoing support</li>
                              </ul>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h4 className="font-bold text-green-800 mb-3">👨‍⚕️ Interprofessional Handover</h4>
                          <div className="grid md:grid-cols-3 gap-4">
                            <div>
                              <strong>SBAR Framework:</strong>
                              <ul className="text-sm mt-1">
                                <li>• Situation - Current status</li>
                                <li>• Background - Relevant history</li>
                                <li>• Assessment - Clinical findings</li>
                                <li>• Recommendation - Action needed</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Key Elements:</strong>
                              <ul className="text-sm mt-1">
                                <li>• Patient identification</li>
                                <li>• Priority concerns</li>
                                <li>• Recent changes</li>
                                <li>• Pending actions</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Safety Focus:</strong>
                              <ul className="text-sm mt-1">
                                <li>• Allergies and alerts</li>
                                <li>• Fall risk factors</li>
                                <li>• Medication changes</li>
                                <li>• Infection precautions</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* NAI CTA */}
                    <div className="bg-gradient-to-r from-nai-teal/100 via-nai-deep-teal50 to-nai-teal/100 border-2 border-nai-teal/300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-nai-teal/900 mb-8">Master Communication Excellence with NAI</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                        Develop advanced communication skills through our comprehensive training program, featuring role-play simulations, feedback sessions, and expert coaching for OSCE success.
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">💬</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Communication Training</h4>
                          <p className="text-sm text-gray-600">Expert-led skill development</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🎭</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Role-Play Practice</h4>
                          <p className="text-sm text-gray-600">Realistic scenario training</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">📹</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Video Analysis</h4>
                          <p className="text-sm text-gray-600">Performance feedback</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🏆</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">OSCE Excellence</h4>
                          <p className="text-sm text-gray-600">Proven success strategies</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Start Communication Training
                        </Link>
                        <Link to="/pages/courses" className="border-2 border-nai-teal/600 text-nai-teal/600 hover:bg-nai-teal/600 hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                          View All Programs
                        </Link>
                      </div>
                    </div>
                  </div>

                  {/* Share Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                      <p className="text-gray-600 text-sm sm:text-base">
                        Share these communication techniques with peers preparing for high-pressure scenarios.
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
                      {readingProgress < 25 ? "Learning basics..." : 
                       readingProgress < 50 ? "Building skills!" :
                       readingProgress < 75 ? "Mastering techniques!" : "Communication expert!"}
                    </p>
                  </div>

                  <div className="bg-white border border-nai-teal/200 rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="w-4 h-4 text-nai-teal/600" />
                      About the Team
                    </h3>
                    <div className="text-center mb-4">
                      <img 
                        src={getGeneralImageUrl('ALLTECHZONE.webp')} 
                        alt="Communication Skills Institute" 
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-nai-teal/200"
                      />
                      <div className="font-bold text-gray-900">{post.author}</div>
                      <div className="text-sm text-nai-teal/600 font-medium">Communication Experts</div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      Specialized team focused on developing advanced communication skills for healthcare professionals and nursing students.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-nai-teal/600 to-nai-deep-teal700 text-white rounded-xl p-6 shadow-lg">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <MessageSquare className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">Communication Toolkit</h3>
                      <p className="text-sm text-white/90">
                        Get advanced communication strategies and OSCE preparation resources for clinical success.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm border-0 focus:ring-2 focus:ring-white/50"
                      />
                      <button className="w-full bg-white text-nai-teal/600 px-4 py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors shadow-md">
                        Get Communication Kit
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
              <MessageSquare className="w-16 h-16 text-white mx-auto mb-8" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Excel in Clinical Communication</h2>
              <p className="text-white/95 mb-10 text-xl leading-relaxed max-w-4xl mx-auto">
                Master advanced communication techniques and build confidence for high-pressure clinical scenarios and OSCE success with NAI's expert training.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal/600 px-10 py-4 rounded-lg font-bold transition-colors hover:bg-gray-100 shadow-lg text-lg"
                >
                  Start Communication Training
                </Link>
                <Link 
                  to="/pages/courses" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal/600 px-10 py-4 rounded-lg font-bold transition-colors text-lg"
                >
                  View Training Programs
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

export default BlogPost18