import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Brain, Heart } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../../../utils/imageStorage'

const BlogPost2 = () => {
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
        title: 'Essential Nursing Knowledge and Competencies for International Nurses',
        text: 'For internationally trained nurses seeking registration in Australia, success hinges on mastering a wide range of competencies.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Essential Nursing Knowledge and Competencies for International Nurses Seeking Registration in Australia: Preparing for NCLEX and OSCE Success',
    date: '2025-09-15',
    author: 'NAI Editorial Team',
    category: 'NCLEX Tips',
    readTime: '',
    excerpt: 'Master the essential nursing knowledge and competencies required for successful NCLEX and OSCE examinations in Australia. Comprehensive guide covering all critical areas for international nurses.',
    featuredImage: getBlogImageUrl('b2.webp'),
    tags: ['NCLEX', 'OSCE', 'Nursing Competencies', 'Australia', 'International Nurses', 'AHPRA'],
    views: 1850,
    likes: 67,
    comments: 18
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/essential-nursing-knowledge-and-competencies-for-international-nurses-seeking-registration-in-australia-preparing-for-nclex-and-osce-success`}
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
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-4">Essential Nursing Knowledge</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      'Core nursing knowledge and theory mastery',
                      'Clinical skills and patient care excellence',
                      'Critical thinking and decision making',
                      'Professional practice standards compliance',
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Master Essential Nursing Competencies</h2>
              <p className="text-white/95 mb-10 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4">
                Build the knowledge and skills needed for NCLEX-RN and OSCE success with NAI's comprehensive competency-based training programs.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-8 md:px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-lg text-base md:text-lg min-h-[44px] flex items-center justify-center"
                >
                  Start Learning Today
                </Link>
                <Link 
                  to="/pages/nclex-ngn" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-8 md:px-10 py-4 rounded-lg font-bold text-base md:text-lg min-h-[44px] flex items-center justify-center"
                >
                  Explore Our Programs
                </Link>
              </div>
              
              <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-3xl mx-auto px-4">
                <SuccessStat value="5000+" label="Students Trained" />
                <SuccessStat value="Expert" label="Training Programs" />
                <SuccessStat value="98%" label="Success Rate" />
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
  { id: "intro", label: "Your Pathway to RN Success" },
  { id: "nmba-requirements", label: "Understanding AHPRA Requirements" },
  { id: "core-knowledge", label: "Core Nursing Knowledge" },
  { id: "clinical-skills", label: "Clinical Skills & Competencies" },
  { id: "critical-thinking", label: "Critical Thinking" },
  { id: "cultural-competence", label: "Cultural Competence" },
  { id: "legal-ethics", label: "Legal & Ethical Frameworks" },
  { id: "patient-safety", label: "Patient Safety" },
  { id: "time-management", label: "Time Management" },
  { id: "lifelong-learning", label: "Lifelong Learning" },
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
                Essential Nursing Competencies Guide
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
        <Callout tone="info" title="Your Pathway to RN Success in Australia">
          <div id="intro" className="scroll-mt-28">
            <p className="leading-relaxed">
              For international nurses aiming to become Registered Nurses (RNs) in Australia, the journey involves more than just obtaining a visa and relocating. It requires mastering essential nursing knowledge and competencies that align with the standards set by the Australian health care system.
            </p>
            <p className="leading-relaxed mt-3">
              This comprehensive guide explores the critical skills needed to succeed in the NCLEX-RN and Objective Structured Clinical Examination (OSCE), which are crucial for nursing registration through the Australian Health Practitioner Regulation Agency (AHPRA).
            </p>
            <div className="grid sm:grid-cols-3 gap-4 mt-5">
              <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
                <h5 className="font-semibold text-nai-teal mb-2">Knowledge Base</h5>
                <p className="text-sm text-gray-700">Anatomy, physiology, pharmacology fundamentals</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
                <h5 className="font-semibold text-nai-teal mb-2">Clinical Skills</h5>
                <p className="text-sm text-gray-700">Assessment, procedures, critical thinking</p>
              </div>
              <div className="bg-white rounded-lg p-4 border border-blue-200 shadow-sm">
                <h5 className="font-semibold text-nai-teal mb-2">Professional Practice</h5>
                <p className="text-sm text-gray-700">Ethics, safety, cultural competence</p>
              </div>
            </div>
          </div>
        </Callout>

        {/* Sections */}
        <Section id="nmba-requirements" title="Understanding the AHPRA Requirements">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Before diving into the specifics of nursing knowledge and competencies, it's important to understand the registration process with AHPRA. International nurses must meet specific educational and professional standards to be eligible for registration. Familiarizing yourself with these requirements early on will help you tailor your preparation effectively.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-nai-soft rounded-lg p-5">
                <h4 className="font-bold text-nai-teal mb-3">Core Knowledge Areas</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Anatomy & Physiology</li>
                  <li>• Pharmacology</li>
                  <li>• Nursing Fundamentals</li>
                  <li>• Pathophysiology</li>
                </ul>
              </div>
              <div className="bg-nai-soft rounded-lg p-5">
                <h4 className="font-bold text-nai-teal mb-3">Regulatory Framework</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Australian healthcare laws</li>
                  <li>• Professional standards</li>
                  <li>• Quality & safety frameworks</li>
                  <li>• Evidence-based practice</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        <Section id="core-knowledge" title="Core Nursing Knowledge">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              A solid grasp of core nursing knowledge is essential. This includes understanding human anatomy, physiology, pharmacology, and pathophysiology. International nurses need to apply this knowledge to assess patient conditions, plan and implement care, and evaluate outcomes.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <FeatureCard emoji="❤️" title="Body Systems" text="Cardiovascular, respiratory, endocrine, neurological systems" />
              <FeatureCard emoji="💊" title="Pharmacology" text="Drug classifications, mechanisms, and safe administration" />
              <FeatureCard emoji="📋" title="Pathophysiology" text="Disease processes, symptoms, and treatments" />
            </div>
          </Card>
        </Section>

        <Section id="clinical-skills" title="Clinical Skills and Competencies">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed mb-6">
              Proficiency in clinical skills is non-negotiable for aspiring RNs. International nurses should be skilled in performing assessments, administering medications, and executing various procedures, such as wound care and intravenous therapy.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-teal-50 rounded-lg p-5">
                <h4 className="font-bold text-teal-800 mb-3">Assessment Skills</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Health history taking</li>
                  <li>• Physical examination</li>
                  <li>• Vital signs measurement</li>
                  <li>• Pain assessment</li>
                </ul>
              </div>
              <div className="bg-teal-50 rounded-lg p-5">
                <h4 className="font-bold text-teal-800 mb-3">Procedural Skills</h4>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li>• Medication administration</li>
                  <li>• Wound care</li>
                  <li>• Catheter insertion</li>
                  <li>• IV therapy</li>
                </ul>
              </div>
            </div>
          </Card>
        </Section>

        <Section id="critical-thinking" title="Critical Thinking and Clinical Judgment">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Strong critical thinking skills are vital in nursing practice. International nurses must be able to analyze patient data, identify potential complications, and make timely, informed decisions. The NCLEX-RN assesses your clinical judgment through complex scenarios that require applying knowledge to real-world situations.
            </p>
          </Card>
        </Section>

        <Section id="cultural-competence" title="Cultural Competence">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Australia is known for its multicultural society, making cultural competence a critical skill for nurses. International nurses should learn to recognize and respect diverse cultural backgrounds and their impact on health beliefs and practices. Effective communication and empathy are essential when interacting with patients from various cultures.
            </p>
          </Card>
        </Section>

        <Section id="legal-ethics" title="Legal and Ethical Frameworks">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Understanding the legal and ethical standards that govern nursing practice in Australia is crucial. Familiarize yourself with the Nursing and Midwifery Board of Australia's guidelines and the AHPRA registration standards. Knowledge of these frameworks ensures that you practice safely, ethically, and within the law.
            </p>
          </Card>
        </Section>

        <Section id="patient-safety" title="Patient Safety and Quality Care">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Providing safe and effective care is at the core of nursing. International nurses must be well-versed in infection control, safety protocols, and risk management strategies. Mastering these competencies is essential for passing the NCLEX-RN and will prepare you for the practical assessments in the OSCE.
            </p>
          </Card>
        </Section>

        <Section id="time-management" title="Time Management and Organizational Skills">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              The ability to manage time and organize tasks effectively is crucial in the fast-paced environment of healthcare. International nurses should practice prioritizing care, managing multiple responsibilities, and staying organized to ensure high-quality patient care.
            </p>
          </Card>
        </Section>

        <Section id="lifelong-learning" title="Commitment to Lifelong Learning">
          <Card className="p-6">
            <p className="text-gray-700 leading-relaxed">
              The field of nursing is constantly evolving, making continuous professional development essential. International nurses should stay updated on the latest research, clinical practices, and technological advancements. Engaging in ongoing education will not only prepare you for the NCLEX and OSCE but will also enhance your overall nursing practice.
            </p>
          </Card>
        </Section>

        {/* Conclusion */}
        <Callout tone="good" title="Conclusion">
          <p className="leading-relaxed mb-3">
            Becoming a Registered Nurse in Australia as an international nurse requires mastering a comprehensive set of knowledge and competencies. By focusing on the areas outlined in this guide, you can effectively prepare for the NCLEX-RN and OSCE, ensuring your readiness for AHPRA registration and your future career in Australian healthcare.
          </p>
          <p className="leading-relaxed">
            With dedication, practice, and the right guidance, your dream is within reach — and that's where <strong className="text-nai-teal">Nurse Assist International (NAI)</strong> comes in. From expert-led training to ongoing support, NAI is committed to helping you succeed every step of the way.
          </p>
        </Callout>

        {/* NAI Success Card */}
        <Card className="p-8 text-center bg-gradient-to-r from-nai-soft via-blue-50 to-nai-soft border border-nai-teal/30">
          <h3 className="text-2xl font-bold text-nai-teal mb-4">Master These Competencies with NAI</h3>
          <p className="text-lg text-gray-700 leading-relaxed mb-8 max-w-3xl mx-auto">
            Our comprehensive preparation programs ensure you master all essential competencies for NCLEX-RN and OSCE success.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            <MiniFeature emoji="📚" title="Structured Learning" text="Comprehensive curriculum covering all areas" />
            <MiniFeature emoji="🔬" title="Lab Practice" text="Unlimited hands-on clinical skills training" />
            <MiniFeature emoji="🧠" title="Critical Thinking" text="Case-based learning and clinical reasoning" />
            <MiniFeature emoji="🎯" title="Exam Focus" text="Targeted NCLEX and OSCE preparation" />
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/pages/contact" className="bg-nai-teal hover:bg-nai-blue text-white px-8 py-3 rounded-lg font-bold transition-colors shadow">
              Start Your Preparation
            </Link>
            <Link to="/pages/nclex-ngn" className="border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
              View Programs
            </Link>
          </div>
        </Card>
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

export default BlogPost2
