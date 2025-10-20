import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost1 = () => {
  const [readingProgress, setReadingProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const { backToNewsUrl } = useBlogNavigation()
  
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
        title: 'AURN Pathway Explained: Step-by-Step Guide for International Nurses in Australia',
        text: 'Becoming an Australian Registered Nurse (AURN) is a life-changing achievement for internationally qualified nurses. Complete step-by-step guide covering all requirements.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'AURN Pathway Explained: Step-by-Step Guide for International Nurses in Australia',
    date: '2025-09-07',
    author: 'NAI Editorial Team',
    category: 'Registration Guide',
    readTime: '',
    excerpt: 'Becoming an Australian Registered Nurse (AURN) is a life-changing achievement for internationally qualified nurses. Not only does it open the door to world-class healthcare opportunities, but it also allows you to live and work in one of the most beautiful, safe and rewarding countries in the world.',
    featuredImage: getBlogImageUrl('b1.webp'),
    tags: ['AURN', 'AHPRA', 'NCLEX', 'OSCE', 'Australia', 'Registration',
    ],
    views: 2847,
    likes: 89,
    comments: 23
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/aurn-pathway-explained-step-by-step-guide-for-international-nurses-in-australia`}
      />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-nai-teal to-nai-highlight transition-all duration-300 shadow-sm"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Page Wrapper */}
      <div className="min-h-screen bg-gradient-to-br from-nai-soft via-white to-teal-50">
        
        {/* -------- HEADER (unchanged structure, slightly refined borders) -------- */}
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
                <span className="text-nai-teal font-semibold">Essential Guide</span>
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

        {/* -------- HERO (unchanged) -------- */}
        <section className="w-full bg-gradient-to-br from-nai-soft via-white to-blue-100 py-8 sm:py-12 lg:py-16">
          <motion.div
            className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
              {/* Content */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-4">Complete Registration Guide</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      'AHPRA self-check and document preparation',
                      'NCLEX-RN and OSCE examination success',
                      'Registration and visa pathway guidance',
                      'Expert support throughout your journey',
                    ].map((t,i)=>(
                      <div key={i} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                        <span className="text-sm text-gray-700">{t}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {post.tags?.slice(0,6).map((tag, i)=>(
                      <span key={i} className="bg-nai-soft text-nai-teal px-3 py-1.5 rounded-full text-xs font-medium border border-nai-teal/20">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className="order-1 lg:order-2">
                <div className="space-y-4">
                  <div className="relative">
                    <img
                      src={post.featuredImage}
                      alt={post.title}
                      className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nai-teal/10 via-transparent to-transparent rounded-2xl" />
                  </div>
                  <div className="bg-white rounded-xl p-5 shadow-xl border border-gray-100">
                    <div className="grid grid-cols-3 gap-4 text-center">
                      <Stat label="Guide" value="Complete" />
                      <Stat label="Support" value="Expert" />
                      <Stat label="Focus" value="Success" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* -------- MODERNISED CONTENT + TOC -------- */}
        <main className="w-full py-10 sm:py-14 lg:py-20 bg-gradient-to-br from-white via-nai-soft/40 to-teal-50">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
            <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-10 xl:gap-14">
              
              {/* Article with modern cards + scroll-spy TOC */}
              <ArticleWithToc post={post} />

              {/* -------- SIDEBAR (kept, light polish) -------- */}
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
                        src={getGeneralImageUrl('ALLTECHZONE.webp')} 
                        alt="NAI Editorial Team" 
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-nai-teal"
                      />
                      <div className="font-bold text-gray-900">{post.author}</div>
                      <div className="text-sm text-nai-teal font-medium">AURN Registration Specialists</div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      Expert team with over 10 years of experience helping international nurses achieve Australian registration success.
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
                        Connect with our expert team for personalized AURN registration guidance.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <a 
                        href="https://wa.me/61478320397?text=Hi%2C%20I%27m%20interested%20in%20AURN%20registration%20guidance"
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
                      <a href="#" className="block text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors">
                        → Success Stories
                      </a>
                    </div>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </main>

        {/* -------- CTA (unchanged) -------- */}
        <section className="w-full bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal py-12 sm:py-16 lg:py-20">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <CheckCircle className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 text-white mx-auto mb-8" />
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Begin Your AURN Journey?</h2>
              <p className="text-white/95 mb-10 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4">
                Join thousands of international nurses who have successfully achieved Australian registration with NAI's expert guidance and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-8 md:px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-lg text-base md:text-lg min-h-[44px] flex items-center justify-center"
                >
                  Start Your Journey Today
                </Link>
                <Link 
                  to="/pages/nclex-ngn" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-8 md:px-10 py-4 rounded-lg font-bold text-base md:text-lg min-h-[44px] flex items-center justify-center"
                >
                  Explore Our Programs
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
                <SuccessStat value="5000+" label="Successful Nurses" />
                <SuccessStat value="Expert" label="Training Programs" />
                <SuccessStat value="6+" label="Years of Excellence" />
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

/* =========================
   Subcomponents & Helpers
   ========================= */

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

/* ---- Polished card & callouts for article ---- */
const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/60 ${className}`}>
    {children}
  </div>
)

const Callout = ({ tone="info", title, children, className="" }) => {
  const tones = {
    info:  { ring: "ring-cyan-200", grad: "from-cyan-50 to-teal-50", dot:"bg-cyan-500" },
    good:  { ring: "ring-emerald-200", grad: "from-emerald-50 to-teal-50", dot:"bg-emerald-500" },
    warn:  { ring: "ring-amber-200", grad: "from-amber-50 to-orange-50", dot:"bg-amber-500" },
    bad:   { ring: "ring-rose-200", grad: "from-rose-50 to-orange-50", dot:"bg-rose-500" },
  }[tone]
  return (
    <div className={`rounded-xl p-5 sm:p-6 ring-1 ${tones.ring} bg-gradient-to-br ${tones.grad} ${className}`}>
      <div className="flex items-start gap-3">
        <span className={`mt-1 inline-block w-2 h-2 rounded-full ${tones.dot}`} />
        <div>
          {title && <h4 className="font-semibold text-gray-900 mb-1">{title}</h4>}
          <div className="text-gray-700">{children}</div>
        </div>
      </div>
    </div>
  )
}

/* ---- Scroll-spy TOC + Article body ---- */
const headings = [
  { id: "what-is-aurn", label: "What Does AURN Mean?" },
  { id: "step1", label: "Step 1: Self-Check & Eligibility" },
  { id: "step2", label: "Step 2: Qualification Assessment" },
  { id: "step3", label: "Step 3: English Proficiency" },
  { id: "step4", label: "Step 4: NCLEX-RN" },
  { id: "step5", label: "Step 5: OSCE" },
  { id: "step6", label: "Step 6: AHPRA Registration" },
]

const ArticleWithToc = ({ post }) => {
  const [active, setActive] = React.useState(headings[0].id)

  React.useEffect(() => {
    const opts = { rootMargin: "0px 0px -65% 0px", threshold: 0 }
    const obs = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) setActive(e.target.id) })
    }, opts)
    headings.forEach(h => {
      const el = document.getElementById(h.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])

  return (
    <article className="lg:col-span-3 xl:col-span-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="space-y-8"
      >
        {/* Summary + TOC */}
        <Card className="p-6 sm:p-8">
          <div className="grid lg:grid-cols-3 gap-6">
            {/* Summary */}
            <div className="lg:col-span-2">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mb-2">
                Complete AURN Registration Guide
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {post.excerpt}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {post.tags?.slice(0,6).map((t,i)=>(
                  <span key={i} className="bg-nai-soft text-nai-teal px-3 py-1.5 rounded-full text-xs font-medium border border-nai-teal/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Scroll-spy TOC */}
            <nav className="lg:pl-4">
              <div className="rounded-xl border border-blue-200/70 bg-white/80 p-4 shadow-sm">
                <h4 className="text-nai-teal font-bold mb-3 flex items-center gap-2">
                  <BookOpen className="w-5 h-5" />
                  Contents
                </h4>
                <ul className="space-y-1.5">
                  {headings.map(h => (
                    <li key={h.id}>
                      <a
                        href={`#${h.id}`}
                        className={`block text-sm transition-colors ${
                          active === h.id ? 'text-nai-blue font-semibold' : 'text-nai-teal hover:text-nai-blue'
                        }`}
                      >
                        • {h.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </nav>
          </div>
        </Card>

        {/* Intro Callout */}
        <Callout tone="info" title="Your Journey to Australian Nursing Excellence">
          <p className="leading-relaxed">
            Becoming an Australian Registered Nurse (AURN) is a life-changing achievement for internationally qualified nurses. It opens doors to world-class healthcare opportunities in a safe, rewarding country.
          </p>
          <p className="leading-relaxed mt-3">
            The pathway can feel overwhelming without a clear guide. Below, we break it down step-by-step — and show how Nurse Assist International (NAI) makes the process simpler and more successful.
          </p>
          <div className="grid sm:grid-cols-2 gap-4 mt-5">
            <div className="bg-white rounded-lg p-4 border border-nai-teal/20 shadow-sm">
              <h5 className="font-semibold text-nai-teal mb-2">What You'll Achieve</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Full Australian nursing registration</li>
                <li>• Pathway to permanent residency</li>
                <li>• Competitive salary & benefits</li>
              </ul>
            </div>
            <div className="bg-white rounded-lg p-4 border border-nai-teal/20 shadow-sm">
              <h5 className="font-semibold text-nai-teal mb-2">Our Support Includes</h5>
              <ul className="text-sm text-gray-700 space-y-1">
                <li>• Expert NCLEX & OSCE preparation</li>
                <li>• Document verification assistance</li>
                <li>• Career placement support</li>
              </ul>
            </div>
          </div>
        </Callout>

        {/* Sections */}
        <Section id="what-is-aurn" title="What Does AURN Mean?">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              AURN stands for <strong className="text-nai-teal">Australian Registered Nurse</strong> — a nurse who has met all requirements set by the Australian Health Practitioner Regulation Agency (AHPRA) to legally practice in Australia. Internationally qualified nurses achieve AURN status via AHPRA’s <strong className="text-nai-teal">Outcome-Based Assessment (OBA) pathway</strong>.
            </p>
          </Card>
        </Section>

        <Section title="Step-by-Step Guide to the AURN Pathway">
          {[
            { id: 'step1', title: 'Self-Check and Eligibility', text: "Before starting, check your eligibility through AHPRA's online self-check portal. You'll answer questions about your nursing qualification, country of training, and experience.", tip: 'Keep your nursing license and transcripts handy for accurate answers.' },
            { id: 'step2', title: 'Qualification Assessment', text: 'AHPRA will assess your nursing education and practice experience to ensure they match Australian standards. Submit transcripts, license proof, and work experience letters.' },
            { id: 'step3', title: 'English Language Proficiency', text: 'If your education was not in English, prove proficiency via IELTS, OET, PTE, or TOEFL. Commonly: IELTS Academic overall 7.0 (no band < 7.0) or OET Nursing B in all sub-tests.' },
            { id: 'step4', title: 'NCLEX-RN Exam', text: 'Computer-based test of nursing theory, clinical reasoning, and decision-making. It is challenging and application-focused — structured preparation is key.' },
            { id: 'step5', title: 'OSCE Exam', text: 'Held in Adelaide; 10 clinical stations assess delivery of safe, effective nursing care in simulated scenarios.' },
            { id: 'step6', title: 'Registration with AHPRA', text: 'After passing OSCE, apply for registration. Once approved, you’re an AURN, ready to work across Australian healthcare settings.' },
          ].map((s, idx) => (
            <StepCard key={s.id} number={idx+1} id={s.id} title={s.title} text={s.text} tip={s.tip} />
          ))}
        </Section>

        <Section title="Why Many Nurses Struggle in the AURN Pathway">
          <Callout tone="bad" className="mt-2">
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-start gap-2"><span className="text-rose-600 font-bold">➢</span><span>Lack of guidance on the OBA process</span></li>
              <li className="flex items-start gap-2"><span className="text-rose-600 font-bold">➢</span><span>Insufficient preparation for NCLEX or OSCE</span></li>
              <li className="flex items-start gap-2"><span className="text-rose-600 font-bold">➢</span><span>Limited access to realistic practice environments</span></li>
              <li className="flex items-start gap-2"><span className="text-rose-600 font-bold">➢</span><span>Underestimating the complexity of the exams</span></li>
            </ul>
          </Callout>
        </Section>

        <Section title="How NAI Helps You Become an AURN">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <FeatureCard emoji="📚" title="Comprehensive NCLEX Review" text="All key concepts with practice tests and rationales." />
            <FeatureCard emoji="🏥" title="Unlimited OSCE Practice" text="Access to state-of-the-art labs and mock exams." />
            <FeatureCard emoji="👨‍🏫" title="Expert Trainers" text="Real-world clinical experience + proven methods." />
            <FeatureCard emoji="💻" title="Flexible Learning" text="Face-to-face, online, or hybrid options." />
          </div>
          <Card className="p-8 mt-6 text-center bg-gradient-to-r from-nai-soft via-blue-50 to-nai-soft border border-nai-teal/30">
            <h3 className="text-2xl font-bold text-nai-teal mb-4">How NAI Transforms Your AURN Journey</h3>
            <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
              With over 5,000 successful international nurses, NAI provides comprehensive support from initial assessment to final registration.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <MiniFeature emoji="📋" title="Document Support" text="Complete assistance with AHPRA documentation" />
              <MiniFeature emoji="📚" title="Expert Training" text="NCLEX & OSCE preparation by specialists" />
              <MiniFeature emoji="🎯" title="Success Focus" text="Proven track record of first-time passes" />
              <MiniFeature emoji="🤝" title="Ongoing Support" text="Career placement & migration assistance" />
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
              <Link to="/pages/contact" className="bg-nai-teal hover:bg-nai-blue text-white px-8 py-3 rounded-lg font-bold transition-colors shadow">
                Start Your AURN Journey
              </Link>
              <Link to="/pages/nclex-ngn" className="border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                Explore NCLEX Program
              </Link>
            </div>
          </Card>
        </Section>
      </motion.div>
    </article>
  )
}

/* ---- Article primitives ---- */
const Section = ({ id, title, children }) => (
  <section id={id} className="scroll-mt-28">
    {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
    {children}
  </section>
)

const StepCard = ({ number, id, title, text, tip }) => (
  <div id={id} className="bg-gradient-to-r from-nai-soft to-blue-50 rounded-2xl p-6 border border-nai-teal/20 shadow-sm mb-6">
    <div className="flex items-start gap-4 mb-3">
      <div className="bg-nai-teal text-white rounded-full w-10 h-10 flex items-center justify-center font-bold">{number}</div>
      <h3 className="text-xl sm:text-2xl font-bold text-nai-teal">{title}</h3>
    </div>
    <p className="text-sm sm:text-base leading-relaxed text-gray-700 mb-4">{text}</p>
    {tip && (
      <div className="bg-white rounded-lg p-4 border border-nai-teal/20">
        <p className="text-sm font-semibold text-nai-teal mb-1">💡 Tip</p>
        <p className="text-sm text-gray-700">{tip}</p>
      </div>
    )}
  </div>
)

const FeatureCard = ({ emoji, title, text }) => (
  <Card className="p-6 border-nai-teal/20 hover:shadow-lg transition-shadow">
    <div className="text-4xl mb-3">{emoji}</div>
    <h3 className="text-lg font-bold text-nai-teal mb-2">{title}</h3>
    <p className="text-sm text-gray-700">{text}</p>
  </Card>
)

const MiniFeature = ({ emoji, title, text }) => (
  <div className="bg-white rounded-xl p-5 shadow-md border border-nai-teal/20">
    <div className="text-3xl mb-2">{emoji}</div>
    <h4 className="font-bold text-nai-teal mb-2 text-sm sm:text-base">{title}</h4>
    <p className="text-xs sm:text-sm text-gray-600">{text}</p>
  </div>
)

export default BlogPost1
