import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Heart, Brain, Users, FileText, Award, Target, Zap } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost17 = () => {
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
        title: 'Managing Anxiety During OSCE Exams: Proven Strategies for Peak Performance',
        text: 'Discover effective techniques to manage exam anxiety and perform at your best during OSCE assessments with confidence-building strategies.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Managing Anxiety During OSCE Exams: Proven Strategies for Peak Performance',
    date: '2024-12-11',
    author: 'Dr. Sarah Chen & NAI Psychology Team',
    category: 'Exam Performance',
    excerpt: 'Discover effective techniques to manage exam anxiety and perform at your best during OSCE assessments. Learn evidence-based strategies for stress reduction and confidence building.',
    featuredImage: '/Images/osce.webp',
    tags: ['Anxiety Management', 'OSCE', 'Exam Stress', 'Performance Psychology', 'Mindfulness', 'Study Strategies'],
    views: 5673,
    likes: 289,
    comments: 156
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/managing-anxiety-during-osce-exams`}
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
                    <Brain className="w-6 h-6 text-nai-teal/600" />
                    Peak Performance Mindset
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Stress reduction techniques</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Brain className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Confidence building strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Performance optimization</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">OSCE success techniques</span>
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
                          <div className="text-lg font-bold text-nai-teal/600">Calm</div>
                          <div className="text-xs text-gray-600">Mind</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal/600">{post.readTime}</div>
                          <div className="text-xs text-gray-600">Read</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal/600">Peak</div>
                          <div className="text-xs text-gray-600">Performance</div>
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
                      Anxiety Management Guide
                    </h3>
                    <nav className="space-y-2">
                      <a href="#understanding" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        1. Understanding Exam Anxiety
                      </a>
                      <a href="#pre-exam" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        2. Pre-Exam Preparation
                      </a>
                      <a href="#during-exam" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        3. During Exam Strategies
                      </a>
                      <a href="#recovery" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        4. Post-Station Recovery
                      </a>
                    </nav>
                  </div>

                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal/900 prose-p:text-gray-700">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 border-l-4 border-nai-teal/500 rounded-r-xl p-8 mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/700 mb-6 flex items-center gap-3">
                        <Brain className="w-8 h-8" />
                        Transform Anxiety Into Peak Performance
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Exam anxiety is a normal response to high-stakes assessments like the OSCE. However, with the right strategies, you can channel this energy into focused performance and confident execution of clinical skills.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border border-nai-teal/200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Anxiety Symptoms:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Racing heart and sweating</li>
                              <li>• Difficulty concentrating</li>
                              <li>• Negative self-talk</li>
                              <li>• Physical tension</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Performance Benefits:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Increased alertness and focus</li>
                              <li>• Enhanced memory recall</li>
                              <li>• Improved reaction times</li>
                              <li>• Higher motivation levels</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Pre-Exam Strategies */}
                    <section id="pre-exam" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <Target className="w-7 h-7 text-nai-teal/600" />
                        Pre-Exam Preparation Strategies
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                          <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                            🧘 Mindfulness & Relaxation
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Practice daily meditation (10-15 minutes)</li>
                            <li>• Deep breathing exercises (4-7-8 technique)</li>
                            <li>• Progressive muscle relaxation</li>
                            <li>• Visualization of successful performance</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                          <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                            📚 Strategic Preparation
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Structured study schedule</li>
                            <li>• Regular practice sessions</li>
                            <li>• Mock OSCE simulations</li>
                            <li>• Positive affirmations practice</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                          <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                            💪 Physical Wellness
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Regular exercise routine</li>
                            <li>• Adequate sleep (7-8 hours)</li>
                            <li>• Balanced nutrition</li>
                            <li>• Limit caffeine intake</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-orange-50 to-orange-100 p-6 rounded-xl border border-orange-200">
                          <h4 className="font-bold text-orange-800 mb-4 flex items-center gap-2">
                            🧠 Cognitive Strategies
                          </h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            <li>• Challenge negative thoughts</li>
                            <li>• Focus on preparation, not perfection</li>
                            <li>• Develop coping statements</li>
                            <li>• Practice self-compassion</li>
                          </ul>
                        </div>
                      </div>
                    </section>

                    {/* During Exam Techniques */}
                    <section id="during-exam" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <Zap className="w-7 h-7 text-nai-teal/600" />
                        In-The-Moment Techniques
                      </h3>
                      
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                        <h4 className="font-bold text-yellow-800 mb-4">The STOP Technique</h4>
                        <div className="grid md:grid-cols-4 gap-4">
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">✋</div>
                            <strong>S - Stop</strong>
                            <p className="text-xs mt-1">Pause what you're doing</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">👁️</div>
                            <strong>T - Take a breath</strong>
                            <p className="text-xs mt-1">Deep, slow breathing</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">👀</div>
                            <strong>O - Observe</strong>
                            <p className="text-xs mt-1">Notice your thoughts/feelings</p>
                          </div>
                          <div className="bg-white p-4 rounded-lg text-center">
                            <div className="text-2xl mb-2">▶️</div>
                            <strong>P - Proceed</strong>
                            <p className="text-xs mt-1">Continue with focus</p>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* NAI CTA */}
                    <div className="bg-gradient-to-r from-nai-teal/100 via-nai-deep-teal50 to-nai-teal/100 border-2 border-nai-teal/300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-nai-teal/900 mb-8">Build Unshakeable Confidence with NAI</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                        Our comprehensive anxiety management program combines evidence-based techniques with personalized coaching to help you perform at your peak during OSCE assessments.
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🧘</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Mindfulness Training</h4>
                          <p className="text-sm text-gray-600">Stress reduction techniques</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">💪</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Confidence Building</h4>
                          <p className="text-sm text-gray-600">Performance psychology</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🎯</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Mock OSCE Practice</h4>
                          <p className="text-sm text-gray-600">Realistic exam simulations</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🏆</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Success Coaching</h4>
                          <p className="text-sm text-gray-600">Personal mentorship</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Start Confidence Training
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
                        Know someone battling exam anxiety? Share these resilience strategies with them.
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
              <aside className="lg:col-span-1 xl:col-span-1 mt-8 lg:mt-0">
                <motion.div
                  className="lg:sticky lg:top-28 space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Reading Progress */}
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-md">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2 text-base">
                        <Eye className="w-4 h-4 text-nai-teal" />
                        <span>Reading Progress</span>
                      </h3>
                      <span className="text-sm text-nai-teal font-bold bg-nai-soft px-2 py-1 rounded-full">
                        {Math.round(readingProgress)}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200/60 rounded-full h-3">
                      <div 
                        className="bg-gradient-to-r from-nai-teal to-nai-blue h-3 rounded-full transition-all duration-300"
                        style={{ width: `${readingProgress}%` }}
                      />
                    </div>
                    <p className="text-xs text-gray-600 text-center mt-2">
                      {readingProgress < 25 ? "Starting your journey..." : 
                       readingProgress < 50 ? "Learning the process!" :
                       readingProgress < 75 ? "Almost ready!" : "Journey complete!"}
                    </p>
                  </div>

                  {/* Author */}
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-base">
                      <User className="w-4 h-4 text-nai-teal" />
                      <span>About the Author</span>
                    </h3>
                    <div className="text-center mb-4">
                      <img 
                        src="/Images/ALLTECHZONE.webp" 
                        alt={post.author} 
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-nai-teal"
                      />
                      <div className="font-bold text-gray-900">{post.author}</div>
                      <div className="text-sm text-nai-teal font-medium">Psychology Specialists</div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      Expert team dedicated to helping international nurses succeed in their Australian nursing careers.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-nai-teal">5000+</div>
                          <div className="text-xs text-gray-600">Success Stories</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal">6+</div>
                          <div className="text-xs text-gray-600">Years Experience</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Newsletter / CTA */}
                  <div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 rounded-xl p-6 shadow-md border border-cyan-200/60">
                    <div className="mb-4">
                      <img 
                        src={post.featuredImage} 
                        alt={post.title}
                        className="w-full h-40 object-cover rounded-lg shadow"
                      />
                    </div>
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-3 shadow">
                        <BookOpen className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-bold mb-2 text-xl text-cyan-900">Get Free Guidance</h3>
                      <p className="text-base text-gray-700 leading-relaxed">
                        Connect with our expert team for personalized anxiety management and exam preparation strategies.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <a 
                        href="https://wa.me/61478320397?text=Hi%2C%20I%27m%20interested%20in%20OSCE%20anxiety%20management%20strategies"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full bg-cyan-500 text-white px-4 py-3 rounded-lg font-bold text-base hover:bg-cyan-600 transition-all shadow min-h-[44px] text-center"
                      >
                        Chat With Us
                      </a>
                    </div>
                    <p className="text-base text-cyan-800 text-center mt-3 font-medium">
                      Join 5000+ International Nurses Worldwide
                    </p>
                  </div>
                  
                  {/* Quick Links */}
                  <div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-md">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2 text-base">
                      <ArrowRight className="w-4 h-4 text-nai-teal" />
                      <span>Related Resources</span>
                    </h3>
                    <div className="space-y-3">
                      <a href="/pages/nclex-ngn" className="block text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors">
                        → NCLEX-RN Preparation
                      </a>
                      <a href="/pages/osce-preparation" className="block text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors">
                        → OSCE Clinical Assessment
                      </a>
                      <a href="/pages/contact" className="block text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors">
                        → Free Consultation
                      </a>
                      <a href="/blogs/news" className="block text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors">
                        → More Career Articles
                      </a>
                    </div>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </main>

        {/* CTA Section */}
        <section className="w-full bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal py-12 sm:py-16 lg:py-20">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-8" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Transform Anxiety Into Confidence</h2>
              <p className="text-white/95 mb-10 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4">
                Master proven anxiety management techniques and perform at your peak during OSCE assessments with NAI's comprehensive support system.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-8 md:px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-lg text-base md:text-lg min-h-[44px] flex items-center justify-center"
                >
                  Start Confidence Journey
                </Link>
                <Link 
                  to="/pages/osce-preparation" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-8 md:px-10 py-4 rounded-lg font-bold text-base md:text-lg min-h-[44px] flex items-center justify-center"
                >
                  Learn More About OSCE
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
                <SuccessStat value="5000+" label="Successful Nurses" />
                <SuccessStat value="Expert" label="Psychology Support" />
                <SuccessStat value="6+" label="Years of Excellence" />
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

export default BlogPost17