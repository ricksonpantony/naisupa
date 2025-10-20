import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, MapPin, DollarSign, Users, Shield, Star } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost3 = () => {
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
        title: 'Top 5 Reasons to Choose Australia for Your RN Journey',
        text: 'Why should you pick Australia as the destination for your registered-nurse journey? Here are five compelling reasons.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Top 5 Reasons to Choose Australia for Your RN Journey',
    date: '2025-05-16',
    author: 'NAI Career Team',
    category: 'Career Guidance',
    excerpt: 'Why should you pick Australia as the destination for your registered-nurse journey? Here are five compelling reasons.',
    featuredImage: getBlogImageUrl('b3.webp'),
    tags: ['Australia', 'Career', 'Benefits', 'Salary', 'Lifestyle', 'Immigration'],
    views: 4521,
    likes: 127,
    comments: 34,
    readTime: 'Complete Guide'
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/top-5-reasons-to-choose-australia-for-your-rn-journey`}
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
        <header className="w-full pt-20 pb-8 bg-gradient-to-br from-white via-nai-soft/30 to-blue-50 border-b-2 border-nai-teal/30 shadow-lg">
          <div className="container-full-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-600 mb-6">
                <Link to="/" className="hover:text-nai-teal transition-colors font-medium">Home</Link>
                <span className="text-nai-teal">→</span>
                <Link to={backToNewsUrl} className="hover:text-nai-teal transition-colors font-medium">News</Link>
                <span className="text-nai-teal">→</span>
                <span className="text-nai-teal font-semibold">Career Guide</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-nai-teal text-white rounded-full px-4 py-2 text-sm font-bold mb-6 shadow-xl hover:shadow-2xl transition-all hover:scale-105">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 leading-tight break-words tracking-tight">
                {post.title}
              </h1>

              {/* Enhanced Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md border border-nai-teal/20">
                  <User className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-semibold text-gray-700">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md border border-nai-teal/20">
                  <Calendar className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-semibold text-gray-700">{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-3 py-2 shadow-md border border-nai-teal/20">
                  <Eye className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-semibold text-gray-700">{post.views?.toLocaleString()} views</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Link 
                  to={backToNewsUrl}
                  className="flex items-center gap-2 bg-white hover:bg-nai-teal text-nai-teal hover:text-white transition-all duration-300 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl border-2 border-nai-teal"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to News</span>
                </Link>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 bg-gradient-to-r from-nai-teal to-nai-highlight hover:from-nai-blue hover:to-nai-teal text-white transition-all duration-300 px-6 py-3 rounded-xl font-bold shadow-lg hover:shadow-xl"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? 'Copied!' : 'Share Article'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Professional Hero Image Section with Green Theme */}
        <section className="w-full bg-gradient-to-br from-nai-soft via-white to-blue-100 py-8 sm:py-12 lg:py-16">
          <motion.div
            className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Content Side */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-3 sm:mb-4 break-words">Why Australia?</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                    {post.excerpt}
                  </p>
                  
                  {/* Top 5 Reasons Preview */}
                  <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Users className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">High demand for qualified nurses</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <DollarSign className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Competitive salary and benefits</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Pathway to permanent residency</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">Safe, multicultural lifestyle</span>
                    </div>
                    <div className="flex items-start gap-2 sm:gap-3">
                      <Star className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm text-gray-600 break-words">World-class registration system</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
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
              
              {/* Image Side */}
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
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">5</div>
                        <div className="text-xs sm:text-sm text-gray-600">Top Reasons</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">{post.readTime}</div>
                        <div className="text-xs sm:text-sm text-gray-600">Read</div>
                      </div>
                      <div>
                        <div className="text-base sm:text-lg md:text-xl font-bold text-nai-teal mb-1">Career</div>
                        <div className="text-xs sm:text-sm text-gray-600">Focus</div>
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
            <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-8 xl:gap-12">
              
              {/* Article Content */}
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
                      <span className="break-words">Top 5 Reasons</span>
                    </h3>
                    <nav className="space-y-1.5 sm:space-y-2">
                      <a href="#high-demand" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-xs sm:text-sm font-medium break-words">
                        1. High Demand for Nurses
                      </a>
                      <a href="#competitive-salary" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-xs sm:text-sm font-medium break-words">
                        2. Competitive Salary and Benefits
                      </a>
                      <a href="#permanent-residency" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-xs sm:text-sm font-medium break-words">
                        3. Pathway to Permanent Residency
                      </a>
                      <a href="#lifestyle" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-xs sm:text-sm font-medium break-words">
                        4. Safe, Multicultural Lifestyle
                      </a>
                      <a href="#registration-system" className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-xs sm:text-sm font-medium break-words">
                        5. World-Class Registration System
                      </a>
                    </nav>
                  </div>

                  {/* Main Content */}
                  <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none prose-headings:text-nai-teal prose-p:text-gray-700 prose-a:text-nai-teal prose-strong:text-nai-teal">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-soft to-blue-50 border-l-4 border-nai-teal rounded-r-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
                      <h3 className="text-xl sm:text-2xl font-bold text-nai-teal mb-4 sm:mb-6 break-words flex items-center gap-3">
                        <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
                        Australia: Your Nursing Destination
                      </h3>
                      <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-700 mb-4 sm:mb-6 break-words">
                        Australia stands out as one of the world's premier destinations for international nurses seeking career advancement, professional growth, and an exceptional quality of life. Here's why thousands of nurses choose Australia every year.
                      </p>
                      
                      <div className="bg-white rounded-lg p-4 sm:p-6 border border-blue-200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-4 sm:gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal mb-2 sm:mb-3">Career Benefits:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• High demand across all healthcare sectors</li>
                              <li>• Excellent salary packages and benefits</li>
                              <li>• Clear pathways for specialization</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal mb-2 sm:mb-3">Lifestyle Advantages:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Safe, welcoming multicultural society</li>
                              <li>• World-class healthcare and education</li>
                              <li>• Beautiful natural environment</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reason 1: High Demand */}
                    <h2 id="high-demand" className="text-3xl font-bold text-nai-dark mb-8 flex items-center gap-3">
                      <span className="bg-nai-teal/200 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">1</span>
                      High Demand for Nurses
                    </h2>
                    <div className="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Australia faces a <strong className="text-nai-teal">nursing shortage</strong> across both metropolitan and rural areas. Hospitals and aged-care facilities actively recruit internationally qualified nurses, offering stable employment and sponsorship pathways.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-nai-teal/20 rounded-xl p-6 border border-emerald-200">
                          <h4 className="text-xl font-bold text-emerald-800 mb-4">Employment Opportunities</h4>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-start gap-3">
                              <div className="w-3 h-3 bg-nai-teal/200 rounded-full mt-2"></div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Hospitals & Health Systems</h5>
                                <p className="text-sm text-gray-600">Public and private hospitals actively recruiting</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-3 h-3 bg-nai-teal/200 rounded-full mt-2"></div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Aged Care Facilities</h5>
                                <p className="text-sm text-gray-600">Growing sector with excellent opportunities</p>
                              </div>
                            </li>
                            <li className="flex items-start gap-3">
                              <div className="w-3 h-3 bg-nai-teal/200 rounded-full mt-2"></div>
                              <div>
                                <h5 className="font-semibold text-gray-900">Rural & Remote Areas</h5>
                                <p className="text-sm text-gray-600">Higher pay rates and unique experiences</p>
                              </div>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 rounded-xl p-6 border border-green-200">
                          <h4 className="text-xl font-bold text-green-800 mb-4">Job Security Benefits</h4>
                          <ul className="space-y-3 text-gray-700">
                            <li className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span>Guaranteed job placement assistance</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span>Employer sponsorship opportunities</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span>Long-term career stability</span>
                            </li>
                            <li className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600" />
                              <span>Professional development support</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Reason 2: Competitive Salary */}
                    <h2 id="competitive-salary" className="text-3xl font-bold text-nai-dark mb-8 flex items-center gap-3">
                      <span className="bg-yellow-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">2</span>
                      Competitive Salary and Benefits
                    </h2>
                    <div className="bg-white border-2 border-yellow-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Australian nurses enjoy <strong className="text-yellow-600">attractive remuneration packages</strong>, generous overtime rates, and allowances. Salaries are often higher than in many other countries, and nurses can also access salary packaging schemes to boost take-home pay.
                      </p>
                      
                      <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-xl p-8 border border-yellow-200">
                        <h4 className="text-2xl font-bold text-yellow-800 mb-6">Salary & Benefits Overview</h4>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="bg-white rounded-lg p-6 shadow-sm border border-yellow-100">
                            <DollarSign className="w-8 h-8 text-yellow-600 mb-3" />
                            <h5 className="font-bold text-yellow-700 mb-2">Base Salary</h5>
                            <p className="text-sm text-gray-700">$70,000 - $120,000+ AUD annually</p>
                          </div>
                          <div className="bg-white rounded-lg p-6 shadow-sm border border-yellow-100">
                            <Clock className="w-8 h-8 text-yellow-600 mb-3" />
                            <h5 className="font-bold text-yellow-700 mb-2">Overtime Rates</h5>
                            <p className="text-sm text-gray-700">Time-and-a-half, double-time options</p>
                          </div>
                          <div className="bg-white rounded-lg p-6 shadow-sm border border-yellow-100">
                            <Star className="w-8 h-8 text-yellow-600 mb-3" />
                            <h5 className="font-bold text-yellow-700 mb-2">Additional Benefits</h5>
                            <p className="text-sm text-gray-700">Superannuation, leave loading, allowances</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reason 3: Permanent Residency */}
                    <h2 id="permanent-residency" className="text-3xl font-bold text-nai-dark mb-8 flex items-center gap-3">
                      <span className="bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">3</span>
                      Pathway to Permanent Residency
                    </h2>
                    <div className="bg-white border-2 border-blue-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Nurses are on <strong className="text-blue-600">Australia's skilled occupation lists</strong>. Completing the NCLEX-RN and OSCE provides a pathway to temporary and then permanent visas, enabling you to settle long-term with your family.
                      </p>
                      
                      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-200">
                        <h4 className="text-2xl font-bold text-blue-800 mb-6">Immigration Pathways</h4>
                        <div className="space-y-6">
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                            <div>
                              <h5 className="font-semibold text-blue-800 mb-2">Temporary Skills Shortage (TSS) Visa</h5>
                              <p className="text-sm text-gray-700">2-4 year work visa with employer sponsorship</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                            <div>
                              <h5 className="font-semibold text-blue-800 mb-2">Employer Nomination Scheme (ENS)</h5>
                              <p className="text-sm text-gray-700">Direct pathway to permanent residency</p>
                            </div>
                          </div>
                          <div className="flex items-start gap-4">
                            <div className="bg-blue-500 text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                            <div>
                              <h5 className="font-semibold text-blue-800 mb-2">Skilled Independent Visa</h5>
                              <p className="text-sm text-gray-700">Points-based system for skilled professionals</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Reason 4: Lifestyle */}
                    <h2 id="lifestyle" className="text-3xl font-bold text-nai-dark mb-8 flex items-center gap-3">
                      <span className="bg-purple-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">4</span>
                      Safe, Multicultural Lifestyle
                    </h2>
                    <div className="bg-white border-2 border-purple-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Australia offers a <strong className="text-purple-600">high quality of life</strong> with world-class healthcare, education and infrastructure. Its multicultural society makes it easier for international nurses to integrate and feel at home.
                      </p>
                      
                      <div className="grid md:grid-cols-2 gap-8">
                        <div className="bg-purple-50 rounded-xl p-6 border border-purple-200">
                          <Shield className="w-8 h-8 text-purple-600 mb-4" />
                          <h4 className="text-xl font-bold text-purple-800 mb-4">Safety & Security</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Low crime rates nationwide</li>
                            <li>• Stable political environment</li>
                            <li>• Excellent emergency services</li>
                            <li>• Safe working conditions</li>
                          </ul>
                        </div>
                        
                        <div className="bg-indigo-50 rounded-xl p-6 border border-indigo-200">
                          <Users className="w-8 h-8 text-indigo-600 mb-4" />
                          <h4 className="text-xl font-bold text-indigo-800 mb-4">Cultural Diversity</h4>
                          <ul className="space-y-2 text-gray-700 text-sm">
                            <li>• Welcoming multicultural communities</li>
                            <li>• Diverse food and cultural experiences</li>
                            <li>• Strong support networks</li>
                            <li>• English-speaking environment</li>
                          </ul>
                        </div>
                      </div>
                    </div>

                    {/* Reason 5: Registration System */}
                    <h2 id="registration-system" className="text-3xl font-bold text-nai-dark mb-8 flex items-center gap-3">
                      <span className="bg-red-500 text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">5</span>
                      World-Class Registration System
                    </h2>
                    <div className="bg-white border-2 border-red-100 rounded-2xl p-8 mb-12 shadow-lg">
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Australia's <strong className="text-red-600">Outcome Based Assessment pathway</strong> ensures that only competent practitioners are registered. While rigorous, it means you'll join a profession recognized for excellence. Training providers like NAI help you prepare so you can meet these standards confidently.
                      </p>
                      
                      <div className="bg-gradient-to-r from-red-50 to-pink-50 rounded-xl p-8 border border-red-200">
                        <h4 className="text-2xl font-bold text-red-800 mb-6">Registration Excellence</h4>
                        <div className="grid md:grid-cols-2 gap-8">
                          <div>
                            <h5 className="font-bold text-red-700 mb-4">Quality Assurance:</h5>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-red-600" />
                                <span>Rigorous competency standards</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-red-600" />
                                <span>Internationally recognized qualifications</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <CheckCircle className="w-4 h-4 text-red-600" />
                                <span>Continuous professional development</span>
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h5 className="font-bold text-red-700 mb-4">NAI Support:</h5>
                            <ul className="space-y-2 text-gray-700">
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-red-600" />
                                <span>Expert NCLEX-RN preparation</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-red-600" />
                                <span>Comprehensive OSCE training</span>
                              </li>
                              <li className="flex items-center gap-2">
                                <Star className="w-4 h-4 text-red-600" />
                                <span>High success rates</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Conclusion */}
                    <div id="conclusion" className="bg-gradient-to-r from-nai-soft to-blue-50 border-2 border-blue-200 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-12 text-center mb-8 sm:mb-12 shadow-xl">
                      <h3 className="text-2xl sm:text-3xl font-bold text-nai-teal mb-4 sm:mb-8 break-words">Your Australian Nursing Journey Starts Here</h3>
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-6 sm:mb-8 max-w-4xl mx-auto break-words">
                        With high demand, competitive pay and a clear route to permanent residency, Australia is an ideal destination for nurses seeking new horizons and professional growth.
                      </p>
                      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-6 sm:mb-10">
                        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-blue-200">
                          <div className="text-2xl sm:text-3xl mb-2 sm:mb-4">🏥</div>
                          <h4 className="font-bold text-nai-teal mb-1 sm:mb-2 text-sm sm:text-base">Career Growth</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Unlimited opportunities in diverse healthcare settings</p>
                        </div>
                        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-blue-200">
                          <div className="text-2xl sm:text-3xl mb-2 sm:mb-4">🏡</div>
                          <h4 className="font-bold text-nai-teal mb-1 sm:mb-2 text-sm sm:text-base">Quality Life</h4>
                          <p className="text-xs sm:text-sm text-gray-600">Safe, multicultural environment for you and your family</p>
                        </div>
                        <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-lg border border-blue-200">
                          <div className="text-2xl sm:text-3xl mb-2 sm:mb-4">🎯</div>
                          <h4 className="font-bold text-nai-teal mb-1 sm:mb-2 text-sm sm:text-base">Expert Support</h4>
                          <p className="text-xs sm:text-sm text-gray-600">NAI's proven pathway to Australian registration</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal hover:bg-nai-blue text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold transition-colors shadow-lg text-sm sm:text-base min-h-[44px] flex items-center justify-center">
                          Start Your Journey
                        </Link>
                        <Link to="/pages/nclex-ngn" className="border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg font-bold transition-colors text-sm sm:text-base min-h-[44px] flex items-center justify-center">
                          Explore Programs
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
                        className="bg-nai-teal hover:bg-nai-deep-teal text-white px-6 py-2 rounded-lg transition-all font-medium shadow-lg hover:shadow-xl"
                      >
                        Share Article
                      </button>
                    </div>
                  </div>
                </motion.div>
              </article>

              {/* Enhanced Sidebar */}
              <aside className="lg:col-span-1 xl:col-span-1 mt-8 lg:mt-0">
                <motion.div
                  className="lg:sticky lg:top-28 space-y-4 sm:space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Enhanced Reading Progress */}
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
                      {readingProgress < 25 ? "Exploring reasons..." : 
                       readingProgress < 50 ? "Discovering benefits!" :
                       readingProgress < 75 ? "Almost convinced!" : "Ready for Australia!"}
                    </p>
                  </div>

                  {/* Enhanced Author Section */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <User className="w-4 h-4 text-nai-teal flex-shrink-0" />
                      <span className="break-words">About the Team</span>
                    </h3>
                    <div className="text-center mb-3 sm:mb-4">
                      <img 
                        src={getGeneralImageUrl('ALLTECHZONE.webp')} 
                        alt="NAI Career Team" 
                        className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto mb-2 sm:mb-3 border-2 border-nai-teal"
                      />
                      <div className="font-bold text-gray-900 text-sm sm:text-base break-words">{post.author}</div>
                      <div className="text-xs sm:text-sm text-nai-teal font-medium break-words">Career Guidance Specialists</div>
                    </div>
                    <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center break-words">
                      Dedicated team helping international nurses navigate their career journey to Australia.
                    </p>
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
                        <div>
                          <div className="text-base sm:text-lg font-bold text-nai-teal">2000+</div>
                          <div className="text-xs text-gray-600">Nurses Placed</div>
                        </div>
                        <div>
                          <div className="text-base sm:text-lg font-bold text-nai-teal">5★</div>
                          <div className="text-xs text-gray-600">Rating</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Newsletter */}
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
                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                      </div>
                      <h3 className="font-bold mb-2 text-lg sm:text-xl break-words text-cyan-900">Get Free Guidance</h3>
                      <p className="text-sm sm:text-base text-gray-700 break-words leading-relaxed">
                        Connect with our expert team for personalized career guidance to Australia.
                      </p>
                    </div>
                    <div className="space-y-2 sm:space-y-3">
                      <a 
                        href="https://wa.me/61478320397?text=Hi%2C%20I%27m%20interested%20in%20Australian%20nursing%20career%20guidance"
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
                  
                  {/* Quick Links */}
                  <div className="bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
                      <ArrowRight className="w-4 h-4 text-nai-teal flex-shrink-0" />
                      <span className="break-words">Career Resources</span>
                    </h3>
                    <div className="space-y-2 sm:space-y-3">
                      <a href="/pages/contact" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors break-words">
                        → Career Consultation
                      </a>
                      <a href="/pages/nclex-ngn" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors break-words">
                        → NCLEX-RN Preparation
                      </a>
                      <a href="/pages/osce-preparation" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors break-words">
                        → OSCE Training
                      </a>
                      <a href="/pages/oba" className="block text-xs sm:text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors break-words">
                        → Immigration Support
                      </a>
                    </div>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </main>

        {/* Enhanced CTA Section */}
        <section className="w-full bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal py-20">
          <div className="container-full-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <MapPin className="w-16 h-16 text-white mx-auto mb-8" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Make Australia Your Home?</h2>
              <p className="text-white/95 mb-10 text-xl leading-relaxed max-w-4xl mx-auto">
                Join thousands of international nurses who have built successful careers and fulfilling lives in Australia with NAI's expert guidance.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-10 py-4 rounded-lg font-bold transition-colors hover:bg-gray-100 shadow-lg text-lg"
                >
                  Plan Your Journey
                </Link>
                <Link 
                  to="/pages/nclex-ngn" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-10 py-4 rounded-lg font-bold transition-colors text-lg"
                >
                  Start Preparation
                </Link>
              </div>
              
              {/* Success Stats */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black mb-2 text-white drop-shadow-lg">5</div>
                  <div className="text-white/95">Compelling Reasons</div>
                </div>
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black mb-2 text-white drop-shadow-lg">$120K+</div>
                  <div className="text-white/95">Potential Annual Salary</div>
                </div>
                <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-6 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
                  <div className="text-4xl font-black mb-2 text-white drop-shadow-lg">Permanent</div>
                  <div className="text-white/95">Residency Pathway</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost3
