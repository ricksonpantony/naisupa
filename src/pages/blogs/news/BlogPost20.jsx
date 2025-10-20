import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Heart, FlaskConical, Users, FileText, Award, Target, Zap } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost20 = () => {
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
        title: 'Mastering Pharmacology on the NCLEX: Comprehensive Strategies for Medication Safety and Effective Learning',
        text: 'Master NCLEX pharmacology with comprehensive drug classifications, safety protocols, and effective learning strategies for nursing success.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'Mastering Pharmacology on the NCLEX: Comprehensive Strategies for Medication Safety and Effective Learning',
    date: '2024-12-08',
    author: 'Pharmacology Education Team',
    category: 'NCLEX Mastery',
    excerpt: 'Master NCLEX pharmacology with comprehensive drug classifications, safety protocols, and effective learning strategies. Build confidence in medication knowledge and clinical application.',
    featuredImage: '/Images/nursing-education.webp',
    tags: ['Pharmacology', 'NCLEX', 'Medication Safety', 'Drug Classifications', 'Nursing Education', 'Clinical Practice'],
    views: 11567,
    likes: 623,
    comments: 287
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/mastering-pharmacology-on-the-nclex`}
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
                <span className="text-gray-900">NCLEX Mastery</span>
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
                    <FlaskConical className="w-6 h-6 text-nai-teal/600" />
                    Pharmacology Excellence
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <FlaskConical className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Comprehensive drug classifications</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Target className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Medication safety protocols</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Zap className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">Effective learning strategies</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <Award className="w-5 h-5 text-nai-teal/600" />
                      <span className="text-sm text-gray-600">NCLEX success mastery</span>
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
                          <div className="text-lg font-bold text-nai-teal/600">Pharma</div>
                          <div className="text-xs text-gray-600">Mastery</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal/600">{post.readTime}</div>
                          <div className="text-xs text-gray-600">Read</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal/600">NCLEX</div>
                          <div className="text-xs text-gray-600">Success</div>
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
                      Pharmacology Mastery Guide
                    </h3>
                    <nav className="space-y-2">
                      <a href="#foundations" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        1. Pharmacology Foundations
                      </a>
                      <a href="#classifications" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        2. Major Drug Classifications
                      </a>
                      <a href="#safety" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        3. Medication Safety Protocols
                      </a>
                      <a href="#nclex-strategies" className="block text-nai-teal/600 hover:text-nai-teal/800 transition-colors py-1 text-sm font-medium text-gray-800">
                        4. NCLEX Success Strategies
                      </a>
                    </nav>
                  </div>

                  <div className="prose prose-lg max-w-none prose-headings:text-nai-teal/900 prose-p:text-gray-700">
                    
                    {/* Introduction */}
                    <div className="bg-gradient-to-r from-nai-teal/50 to-nai-deep-teal50 border-l-4 border-nai-teal/500 rounded-r-xl p-8 mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/700 mb-6 flex items-center gap-3">
                        <FlaskConical className="w-8 h-8" />
                        Master Pharmacology for NCLEX Success
                      </h3>
                      <p className="text-lg leading-relaxed text-gray-700 mb-6">
                        Pharmacology represents one of the most challenging yet crucial components of the NCLEX examination. Mastering medication knowledge, understanding drug interactions, and applying safety protocols are essential skills that extend far beyond exam success into professional nursing practice.
                      </p>
                      
                      <div className="bg-white rounded-lg p-6 border border-nai-teal/200 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">NCLEX Pharmacology Focus:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• 12-18% of total exam questions</li>
                              <li>• Drug classifications and actions</li>
                              <li>• Adverse effects and interactions</li>
                              <li>• Dosage calculations and safety</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-bold text-nai-teal/800 mb-3">Clinical Application:</h4>
                            <ul className="text-sm text-gray-700 space-y-1">
                              <li>• Patient assessment and monitoring</li>
                              <li>• Safe medication administration</li>
                              <li>• Patient education and compliance</li>
                              <li>• Emergency protocols and responses</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Major Drug Classifications */}
                    <section id="classifications" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <Target className="w-7 h-7 text-nai-teal/600" />
                        Essential Drug Classifications
                      </h3>
                      
                      <div className="grid md:grid-cols-2 gap-6 mb-8">
                        <div className="bg-gradient-to-br from-red-50 to-red-100 p-6 rounded-xl border border-red-200">
                          <h4 className="font-bold text-red-800 mb-4 flex items-center gap-2">
                            ❤️ Cardiovascular Medications
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <strong>ACE Inhibitors (ending in -pril):</strong>
                              <ul className="text-sm mt-1 space-y-1">
                                <li>• Lisinopril, enalapril, captopril</li>
                                <li>• Monitor: Hyperkalemia, dry cough</li>
                                <li>• Contraindications: Pregnancy, angioedema</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Beta Blockers (ending in -olol):</strong>
                              <ul className="text-sm mt-1 space-y-1">
                                <li>• Metoprolol, propranolol, atenolol</li>
                                <li>• Monitor: HR &lt;60, hypotension</li>
                                <li>• Never stop abruptly - taper dose</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200">
                          <h4 className="font-bold text-blue-800 mb-4 flex items-center gap-2">
                            🧠 Central Nervous System
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <strong>Opioid Analgesics:</strong>
                              <ul className="text-sm mt-1 space-y-1">
                                <li>• Morphine, fentanyl, oxycodone</li>
                                <li>• Monitor: Respiratory depression</li>
                                <li>• Antidote: Naloxone (Narcan)</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Benzodiazepines (ending in -pam, -lam):</strong>
                              <ul className="text-sm mt-1 space-y-1">
                                <li>• Lorazepam, diazepam, alprazolam</li>
                                <li>• Monitor: Sedation, falls risk</li>
                                <li>• Antidote: Flumazenil (Romazicon)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200">
                          <h4 className="font-bold text-green-800 mb-4 flex items-center gap-2">
                            🦠 Antimicrobial Agents
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <strong>Penicillins (ending in -cillin):</strong>
                              <ul className="text-sm mt-1 space-y-1">
                                <li>• Penicillin G, amoxicillin, ampicillin</li>
                                <li>• Monitor: Allergic reactions</li>
                                <li>• Take with food to reduce GI upset</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Fluoroquinolones (ending in -floxacin):</strong>
                              <ul className="text-sm mt-1 space-y-1">
                                <li>• Ciprofloxacin, levofloxacin</li>
                                <li>• Monitor: Tendon rupture, photosensitivity</li>
                                <li>• Avoid dairy, antacids, iron</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200">
                          <h4 className="font-bold text-purple-800 mb-4 flex items-center gap-2">
                            🩸 Endocrine Medications
                          </h4>
                          <div className="space-y-3">
                            <div>
                              <strong>Insulin Types:</strong>
                              <ul className="text-sm mt-1 space-y-1">
                                <li>• Rapid: Lispro (15 min onset)</li>
                                <li>• Short: Regular (30 min onset)</li>
                                <li>• Long: Glargine (1-2 hour onset)</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Oral Hypoglycemics:</strong>
                              <ul className="text-sm mt-1 space-y-1">
                                <li>• Metformin (first-line for T2DM)</li>
                                <li>• Monitor: Lactic acidosis, GI upset</li>
                                <li>• Hold before contrast dye procedures</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* Medication Safety */}
                    <section id="safety" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <CheckCircle className="w-7 h-7 text-nai-teal/600" />
                        Medication Safety Protocols
                      </h3>
                      
                      <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 mb-6">
                        <h4 className="font-bold text-yellow-800 mb-4">High-Alert Medications</h4>
                        <div className="grid md:grid-cols-3 gap-4">
                          <div className="bg-white p-4 rounded-lg">
                            <strong>Anticoagulants:</strong>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>• Heparin, warfarin</li>
                              <li>• Monitor: PT/INR, aPTT</li>
                              <li>• Bleeding precautions</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <strong>Insulin:</strong>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>• Double-check calculations</li>
                              <li>• Monitor blood glucose</li>
                              <li>• Hypoglycemia awareness</li>
                            </ul>
                          </div>
                          <div className="bg-white p-4 rounded-lg">
                            <strong>Chemotherapy:</strong>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>• Specialized training required</li>
                              <li>• Personal protective equipment</li>
                              <li>• Extravasation protocols</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                        <h4 className="font-bold text-red-800 mb-4">Drug Interaction Alerts</h4>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <strong>Warfarin Interactions:</strong>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>• Aspirin: Increased bleeding risk</li>
                              <li>• Vitamin K foods: Decreased effect</li>
                              <li>• Antibiotics: Increased INR</li>
                              <li>• Alcohol: Unpredictable effects</li>
                            </ul>
                          </div>
                          <div>
                            <strong>MAOIs Interactions:</strong>
                            <ul className="text-sm mt-2 space-y-1">
                              <li>• Tyramine-rich foods: Hypertensive crisis</li>
                              <li>• SSRIs: Serotonin syndrome</li>
                              <li>• Sympathomimetics: Severe hypertension</li>
                              <li>• 2-week washout period required</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* NCLEX Strategies */}
                    <section id="nclex-strategies" className="mb-12">
                      <h3 className="text-2xl font-bold text-nai-teal/900 mb-6 flex items-center gap-3">
                        <Zap className="w-7 h-7 text-nai-teal/600" />
                        NCLEX Pharmacology Success Strategies
                      </h3>
                      
                      <div className="space-y-6">
                        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                          <h4 className="font-bold text-blue-800 mb-4">Question Analysis Framework</h4>
                          <div className="grid md:grid-cols-4 gap-4">
                            <div className="bg-white p-4 rounded-lg text-center">
                              <div className="text-2xl mb-2">🎯</div>
                              <strong>Identify Drug</strong>
                              <p className="text-xs mt-1">Generic name, classification</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg text-center">
                              <div className="text-2xl mb-2">⚡</div>
                              <strong>Know Action</strong>
                              <p className="text-xs mt-1">Mechanism, therapeutic effect</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg text-center">
                              <div className="text-2xl mb-2">⚠️</div>
                              <strong>Assess Risks</strong>
                              <p className="text-xs mt-1">Side effects, contraindications</p>
                            </div>
                            <div className="bg-white p-4 rounded-lg text-center">
                              <div className="text-2xl mb-2">📋</div>
                              <strong>Monitor/Teach</strong>
                              <p className="text-xs mt-1">Assessment, patient education</p>
                            </div>
                          </div>
                        </div>

                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h4 className="font-bold text-green-800 mb-4">Memory Techniques for Drug Names</h4>
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <strong>Suffix Patterns:</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• -pril = ACE inhibitors</li>
                                <li>• -sartan = ARBs</li>
                                <li>• -olol = Beta blockers</li>
                                <li>• -dipine = Calcium channel blockers</li>
                                <li>• -statin = HMG-CoA reductase inhibitors</li>
                              </ul>
                            </div>
                            <div>
                              <strong>Acronyms & Mnemonics:</strong>
                              <ul className="text-sm mt-2 space-y-1">
                                <li>• SLUDGE (cholinergic effects)</li>
                                <li>• MAD COW (digitalis toxicity)</li>
                                <li>• RICE (anti-inflammatory treatment)</li>
                                <li>• CREATE (insulin administration)</li>
                                <li>• FAST (stroke assessment)</li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </section>

                    {/* NAI CTA */}
                    <div className="bg-gradient-to-r from-nai-teal/100 via-nai-deep-teal50 to-nai-teal/100 border-2 border-nai-teal/300 rounded-2xl p-12 text-center mb-12 shadow-xl">
                      <h3 className="text-3xl font-bold text-nai-teal/900 mb-8">Master Pharmacology with NAI Excellence</h3>
                      <p className="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                        Transform pharmacology from your biggest challenge into your greatest strength with NAI's comprehensive medication mastery program, featuring interactive drug databases, clinical simulations, and expert coaching.
                      </p>
                      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">💊</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Drug Database</h4>
                          <p className="text-sm text-gray-600">Comprehensive medication library</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🧮</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Calculation Practice</h4>
                          <p className="text-sm text-gray-600">Dosage and IV calculations</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🎯</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">NCLEX Questions</h4>
                          <p className="text-sm text-gray-600">Pharmacology-focused practice</p>
                        </div>
                        <div className="bg-white rounded-xl p-6 shadow-lg border border-nai-teal/200">
                          <div className="text-3xl mb-4">🏆</div>
                          <h4 className="font-bold text-nai-teal/900 mb-2">Expert Coaching</h4>
                          <p className="text-sm text-gray-600">Personalized learning paths</p>
                        </div>
                      </div>
                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link to="/pages/contact" className="bg-nai-teal/600 hover:bg-nai-teal/700 text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg">
                          Start Pharmacology Mastery
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
                        Help classmates master pharmacology by sharing these NCLEX-ready strategies.
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
                      {readingProgress < 25 ? "Learning foundations..." : 
                       readingProgress < 50 ? "Understanding classifications!" :
                       readingProgress < 75 ? "Mastering safety protocols!" : "Pharmacology expert!"}
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
                        alt="Pharmacology Education Team" 
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-nai-teal/200"
                      />
                      <div className="font-bold text-gray-900">{post.author}</div>
                      <div className="text-sm text-nai-teal/600 font-medium">Medication Safety Experts</div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      Specialized pharmacology educators with extensive experience in nursing education, medication safety, and NCLEX preparation.
                    </p>
                  </div>

                  <div className="bg-gradient-to-br from-nai-teal/600 to-nai-deep-teal700 text-white rounded-xl p-6 shadow-lg">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <FlaskConical className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">Pharmacology Toolkit</h3>
                      <p className="text-sm text-white/90">
                        Get comprehensive drug guides, calculation tools, and NCLEX pharmacology resources for medication mastery.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm border-0 focus:ring-2 focus:ring-white/50"
                      />
                      <button className="w-full bg-white text-nai-teal/600 px-4 py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors shadow-md">
                        Get Pharma Toolkit
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
              <FlaskConical className="w-16 h-16 text-white mx-auto mb-8" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Transform Your Pharmacology Knowledge</h2>
              <p className="text-white/95 mb-10 text-xl leading-relaxed max-w-4xl mx-auto">
                Master medication safety, drug classifications, and clinical applications with NAI's comprehensive pharmacology program designed for NCLEX success and nursing excellence.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal/600 px-10 py-4 rounded-lg font-bold transition-colors hover:bg-gray-100 shadow-lg text-lg"
                >
                  Start Pharmacology Journey
                </Link>
                <Link 
                  to="/pages/courses" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal/600 px-10 py-4 rounded-lg font-bold transition-colors text-lg"
                >
                  View All Programs
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

export default BlogPost20