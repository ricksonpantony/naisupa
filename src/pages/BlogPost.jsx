import React, { useState, useEffect, Suspense, lazy } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, Share2, BookOpen, Tag, Eye, ThumbsUp, MessageCircle, CheckCircle, ArrowRight } from 'lucide-react'
import SeoHead from '../components/SeoHead'
import newsArticlesData from '../data/newsArticles.json'
import LoadingSpinner from '../components/LoadingSpinner'
import { useBlogNavigation } from '../hooks/useBlogNavigation'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../utils/imageStorage'

// Lazy load all blog post components
const BlogPost21 = lazy(() => import('./blogs/news/BlogPost21'))
const BlogPost22 = lazy(() => import('./blogs/news/BlogPost22'))
const BlogPost23 = lazy(() => import('./blogs/news/BlogPost23'))
const BlogPost24 = lazy(() => import('./blogs/news/BlogPost24'))
const BlogPost25 = lazy(() => import('./blogs/news/BlogPost25'))
const BlogPost26 = lazy(() => import('./blogs/news/BlogPost26'))
const BlogPost27 = lazy(() => import('./blogs/news/BlogPost27'))
const BlogPost28 = lazy(() => import('./blogs/news/BlogPost28'))
const BlogPost29 = lazy(() => import('./blogs/news/BlogPost29'))
const BlogPost30 = lazy(() => import('./blogs/news/BlogPost30'))

const BlogPost = () => {
  const { slug } = useParams()
  const [readingProgress, setReadingProgress] = useState(0)
  const [copied, setCopied] = useState(false)
  const { backToNewsUrl } = useBlogNavigation()
  
  // Find the blog post by slug
  const post = newsArticlesData.find(article => article.slug === slug)
  
  // Blog post routing - render specific components for new blog posts
  const renderBlogComponent = () => {
    switch(slug) {
      case 'silent-station-osce-challenge-guide':
        return <BlogPost21 />
      case 'nclex-international-gateway-nursing-careers':
        return <BlogPost22 />
      case 'osce-soft-skills-mastery-guide':
        return <BlogPost23 />
      case 'first-aid-importance-australian-nursing':
        return <BlogPost24 />
      case 'nai-osce-training-excellence':
        return <BlogPost25 />
      case 'nursing-career-diversity-beyond-bedside':
        return <BlogPost26 />
      case 'crucial-elements-for-mastering-online-osce-review':
        return <BlogPost27 />
      case 'nclex-test-taking-strategies-for-success':
        return <BlogPost28 />
      case 'nclex-question-analysis-and-comprehension-techniques':
        return <BlogPost29 />
      case 'nclex-ngn-preparation-balancing-school-and-exam-success':
        return <BlogPost30 />
      default:
        return null
    }
  }

  // If this is one of the new blog posts, render the component directly
  const blogComponent = renderBlogComponent()
  if (blogComponent) {
    return (
      <Suspense fallback={<LoadingSpinner />}>
        {blogComponent}
      </Suspense>
    )
  }
  
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
        title: post.title,
        text: post.excerpt,
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Blog post content data
  const blogContent = {
    'aurn-pathway-explained-step-by-step-guide-for-international-nurses-in-australia': {
      title: 'AURN Pathway Explained: Step-by-Step Guide for International Nurses in Australia',
      date: '2025-09-07',
      author: 'NAI Editorial Team',
      category: 'Registration Guide',
      readTime: '8 min read',
      excerpt: 'Becoming an Australian Registered Nurse (AURN) is a life-changing achievement for internationally qualified nurses.',
      featuredImage: getGeneralImageUrl('australia-nursing.webp'),
      tags: ['AURN', 'AHPRA', 'NCLEX', 'OSCE', 'Australia', 'Registration'],
      content: `
        <div class="prose prose-lg max-w-none">
          <div class="bg-gradient-to-r from-nai-teal/10 to-nai-soft/10 border-l-4 border-nai-teal rounded-r-xl p-8 mb-12">
            <h3 class="text-2xl font-bold text-nai-teal mb-6 flex items-center gap-3">
              <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              Article Overview
            </h3>
            <p class="text-lg leading-relaxed text-gray-700 mb-6">
              Becoming an Australian Registered Nurse (AURN) is a <strong class="text-nai-teal">life-changing achievement</strong> for internationally qualified nurses. Not only does it open the door to world-class healthcare opportunities, but it also allows you to live and work in one of the most beautiful, safe and rewarding countries in the world.
            </p>
            <p class="text-lg leading-relaxed text-gray-700 mb-6">
              However, the AURN pathway can feel overwhelming without a clear guide. In this article, we break it down <strong class="text-nai-teal">step-by-step</strong> so you know exactly what to expect – and show how <strong class="text-nai-teal">Nurse Assist International (NAI)</strong> can make the process simpler, smoother and more successful.
            </p>
            
            <div class="grid md:grid-cols-2 gap-6 mt-8">
              <div class="bg-white rounded-lg p-4 border border-nai-teal/20">
                <h4 class="font-bold text-nai-dark mb-3">What You'll Learn:</h4>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-nai-teal rounded-full"></span>
                    Complete AURN pathway breakdown
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-nai-teal rounded-full"></span>
                    AHPRA registration requirements
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-nai-teal rounded-full"></span>
                    NCLEX-RN and OSCE preparation
                  </li>
                </ul>
              </div>
              <div class="bg-white rounded-lg p-4 border border-nai-teal/20">
                <h4 class="font-bold text-nai-dark mb-3">Key Benefits:</h4>
                <ul class="space-y-2 text-sm text-gray-700">
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-nai-teal rounded-full"></span>
                    Expert NAI guidance
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-nai-teal rounded-full"></span>
                    Proven success strategies
                  </li>
                  <li class="flex items-center gap-2">
                    <span class="w-2 h-2 bg-nai-teal rounded-full"></span>
                    Step-by-step roadmap
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h2 id="what-is-aurn" class="text-3xl font-bold text-nai-dark mb-6 flex items-center gap-3">
            <span class="bg-nai-teal text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">1</span>
            What Does AURN Mean?
          </h2>
          <div class="bg-white border border-gray-200 rounded-xl p-8 mb-12 shadow-lg">
            <p class="text-lg leading-relaxed text-gray-700 mb-6">
              <strong class="text-nai-teal">AURN</strong> stands for <strong>Australian Registered Nurse</strong>. To earn this qualification you must meet the national standards set by the <strong class="text-nai-teal">Nursing and Midwifery Board of Australia (NMBA)</strong> and the <strong class="text-nai-teal">Australian Health Practitioner Regulation Agency (AHPRA)</strong>. 
            </p>
            <p class="text-lg leading-relaxed text-gray-700 mb-6">
              Internationally educated nurses must follow a <strong class="text-nai-teal">specific pathway</strong> to prove they meet these standards.
            </p>
            
            <div class="bg-nai-teal/5 rounded-lg p-6">
              <h4 class="font-bold text-nai-dark mb-4">Key Regulatory Bodies:</h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="flex items-start gap-3">
                  <div class="w-3 h-3 bg-nai-teal rounded-full mt-2"></div>
                  <div>
                    <h5 class="font-semibold text-nai-dark">NMBA</h5>
                    <p class="text-sm text-gray-600">Sets nursing standards and competencies</p>
                  </div>
                </div>
                <div class="flex items-start gap-3">
                  <div class="w-3 h-3 bg-nai-teal rounded-full mt-2"></div>
                  <div>
                    <h5 class="font-semibold text-nai-dark">AHPRA</h5>
                    <p class="text-sm text-gray-600">Manages registration and compliance</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 id="step-by-step" class="text-3xl font-bold text-nai-dark mb-8 flex items-center gap-3">
            <span class="bg-nai-teal text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">2</span>
            Step-by-Step AURN Pathway
          </h2>

          <div class="space-y-8 mb-12">
            <div class="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="flex items-start gap-6 mb-6">
                <div class="bg-gradient-to-r from-nai-teal to-nai-highlight text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">1</div>
                <div>
                  <h3 class="text-2xl font-bold text-nai-dark mb-2">Self-Check Assessment</h3>
                  <p class="text-nai-teal font-medium">Determine your qualification equivalency</p>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6 text-lg">
                Before you do anything else, complete the <strong class="text-nai-teal">AHPRA self-check</strong> to determine whether your nursing qualifications are considered "substantially equivalent" to the Australian Bachelor of Nursing.
              </p>
              <div class="bg-gradient-to-r from-gray-50 to-nai-teal/5 rounded-xl p-6">
                <p class="text-gray-700 font-semibold mb-4">You'll be classified into one of three streams:</p>
                <div class="grid md:grid-cols-3 gap-4">
                  <div class="bg-green-50 border border-green-200 rounded-lg p-4 text-center">
                    <div class="font-bold text-green-700 text-lg mb-2">Stream A</div>
                    <div class="text-sm text-green-600">Qualifications equivalent to Australian standards</div>
                  </div>
                  <div class="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
                    <div class="font-bold text-yellow-700 text-lg mb-2">Stream B</div>
                    <div class="text-sm text-yellow-600">Similar but requires additional assessment</div>
                  </div>
                  <div class="bg-red-50 border border-red-200 rounded-lg p-4 text-center">
                    <div class="font-bold text-red-700 text-lg mb-2">Stream C</div>
                    <div class="text-sm text-red-600">Not equivalent, needs bridging programs</div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="flex items-start gap-6 mb-6">
                <div class="bg-gradient-to-r from-nai-teal to-nai-highlight text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">2</div>
                <div>
                  <h3 class="text-2xl font-bold text-nai-dark mb-2">Qualification Assessment</h3>
                  <p class="text-nai-teal font-medium">Detailed credential evaluation</p>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6 text-lg">
                If you fall into <strong class="text-nai-teal">Streams B or C</strong>, AHPRA will perform a more detailed assessment of your qualification.
              </p>
              <div class="bg-gradient-to-r from-gray-50 to-nai-teal/5 rounded-xl p-6">
                <p class="text-gray-700 font-semibold mb-4">Required Documentation:</p>
                <div class="grid md:grid-cols-2 gap-6">
                  <ul class="space-y-3">
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-nai-teal rounded-full"></div>
                      <span class="text-gray-700">Academic transcripts (certified)</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-nai-teal rounded-full"></div>
                      <span class="text-gray-700">Course syllabi and curriculum</span>
                    </li>
                  </ul>
                  <ul class="space-y-3">
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-nai-teal rounded-full"></div>
                      <span class="text-gray-700">Evidence of clinical hours</span>
                    </li>
                    <li class="flex items-center gap-3">
                      <div class="w-2 h-2 bg-nai-teal rounded-full"></div>
                      <span class="text-gray-700">Work experience documentation</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="flex items-start gap-6 mb-6">
                <div class="bg-gradient-to-r from-nai-teal to-nai-highlight text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">3</div>
                <div>
                  <h3 class="text-2xl font-bold text-nai-dark mb-2">English Language Proficiency</h3>
                  <p class="text-nai-teal font-medium">Demonstrate communication skills</p>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6 text-lg">
                All international nurses must prove they can <strong class="text-nai-teal">communicate safely and effectively</strong> in English.
              </p>
              <div class="bg-gradient-to-r from-gray-50 to-nai-teal/5 rounded-xl p-6">
                <p class="text-gray-700 font-semibold mb-4">Accepted English Tests:</p>
                <div class="grid md:grid-cols-2 gap-4">
                  <div class="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 class="font-bold text-nai-dark mb-2">IELTS Academic</h5>
                    <p class="text-sm text-gray-600">Overall 7.0, no band less than 7.0</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 class="font-bold text-nai-dark mb-2">OET Nursing</h5>
                    <p class="text-sm text-gray-600">Grade B in all sub-tests</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 class="font-bold text-nai-dark mb-2">PTE Academic</h5>
                    <p class="text-sm text-gray-600">Overall 65, no section less than 65</p>
                  </div>
                  <div class="bg-white rounded-lg p-4 border border-gray-200">
                    <h5 class="font-bold text-nai-dark mb-2">TOEFL iBT</h5>
                    <p class="text-sm text-gray-600">Overall 94, specific section minimums</p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="flex items-start gap-6 mb-6">
                <div class="bg-gradient-to-r from-nai-teal to-nai-highlight text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">4</div>
                <div>
                  <h3 class="text-2xl font-bold text-nai-dark mb-2">NCLEX-RN and OSCE Examinations</h3>
                  <p class="text-nai-teal font-medium">Demonstrate nursing competency</p>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6 text-lg">
                Candidates in <strong class="text-nai-teal">Stream A</strong> must pass both examinations to demonstrate theoretical knowledge and practical competency.
              </p>
              <div class="grid md:grid-cols-2 gap-6">
                <div class="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 border border-blue-200">
                  <h4 class="font-bold text-blue-800 mb-4 text-xl">NCLEX-RN Exam</h4>
                  <ul class="space-y-3 text-blue-700">
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span>Tests theoretical knowledge and clinical reasoning</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span>Computer-adaptive testing format</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                      <span>75-265 questions, 5 hours maximum</span>
                    </li>
                  </ul>
                </div>
                <div class="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 border border-green-200">
                  <h4 class="font-bold text-green-800 mb-4 text-xl">OSCE Exam</h4>
                  <ul class="space-y-3 text-green-700">
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span>Assesses clinical skills and communication</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span>Hands-on practical examination</span>
                    </li>
                    <li class="flex items-start gap-2">
                      <div class="w-2 h-2 bg-green-600 rounded-full mt-2"></div>
                      <span>Multiple stations with real scenarios</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div class="bg-white border-2 border-nai-teal/20 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div class="flex items-start gap-6 mb-6">
                <div class="bg-gradient-to-r from-nai-teal to-nai-highlight text-white rounded-full w-12 h-12 flex items-center justify-center font-bold text-lg shadow-lg">5</div>
                <div>
                  <h3 class="text-2xl font-bold text-nai-dark mb-2">Registration and Visa Application</h3>
                  <p class="text-nai-teal font-medium">Final steps to work in Australia</p>
                </div>
              </div>
              <p class="text-gray-700 leading-relaxed mb-6 text-lg">
                After passing the <strong class="text-nai-teal">NCLEX-RN and OSCE</strong> and providing all required documents, you can apply for AHPRA registration.
              </p>
              <div class="bg-gradient-to-r from-gray-50 to-nai-teal/5 rounded-xl p-6">
                <p class="text-gray-700 font-semibold mb-4">Final Steps to Success:</p>
                <div class="space-y-4">
                  <div class="flex items-start gap-4">
                    <div class="bg-nai-teal text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">1</div>
                    <div>
                      <h5 class="font-semibold text-nai-dark">Submit AHPRA Registration Application</h5>
                      <p class="text-sm text-gray-600">Complete all required forms and pay fees</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div class="bg-nai-teal text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">2</div>
                    <div>
                      <h5 class="font-semibold text-nai-dark">Explore Visa Options</h5>
                      <p class="text-sm text-gray-600">Working Holiday Visa, employer-sponsored visas, or skilled migration</p>
                    </div>
                  </div>
                  <div class="flex items-start gap-4">
                    <div class="bg-nai-teal text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold">3</div>
                    <div>
                      <h5 class="font-semibold text-nai-dark">Begin Your Australian Nursing Career!</h5>
                      <p class="text-sm text-gray-600">Start working as a registered nurse in Australia</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div id="nai-support" class="bg-gradient-to-r from-nai-teal/10 via-nai-soft/10 to-nai-teal/10 border-2 border-nai-teal/30 rounded-2xl p-12 text-center mb-12 shadow-xl">
            <h3 class="text-3xl font-bold text-nai-dark mb-8 flex items-center justify-center gap-3">
              <span class="bg-nai-teal text-white rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">3</span>
              How NAI Helps You Succeed
            </h3>
            <p class="text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
              <strong class="text-nai-teal">Nurse Assist International</strong> provides comprehensive NCLEX and OSCE review courses, unlimited hands-on lab practice and experienced educators who know exactly what Australian regulators expect.
            </p>
            <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-r from-nai-teal to-nai-highlight rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-nai-dark mb-2">Comprehensive Review Courses</h4>
                <p class="text-sm text-gray-600">Complete NCLEX-RN and OSCE preparation programs</p>
              </div>
              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-r from-nai-teal to-nai-highlight rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-nai-dark mb-2">Experienced Educators</h4>
                <p class="text-sm text-gray-600">Learn from Australian-qualified nursing experts</p>
              </div>
              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-r from-nai-teal to-nai-highlight rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-nai-dark mb-2">Unlimited Lab Practice</h4>
                <p class="text-sm text-gray-600">Hands-on clinical skills training and practice</p>
              </div>
              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-r from-nai-teal to-nai-highlight rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h4 class="text-lg font-bold text-nai-dark mb-2">Visa Support</h4>
                <p class="text-sm text-gray-600">Complete guidance from exam to employment</p>
              </div>
            </div>
            <div class="bg-white rounded-xl p-6 max-w-3xl mx-auto shadow-lg border border-nai-teal/20">
              <p class="text-lg text-gray-700 leading-relaxed mb-6">
                From enrollment through to visa support, <strong class="text-nai-teal">NAI guides you at every step</strong> so you can focus on learning and achieving your Australian nursing dreams.
              </p>
              <div class="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/pages/contact" class="bg-nai-teal hover:bg-nai-deep-teal text-white px-8 py-3 rounded-lg font-bold transition-colors shadow-lg hover:shadow-xl">
                  Get Expert Guidance
                </a>
                <a href="/pages/nclex-ngn" class="border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-8 py-3 rounded-lg font-bold transition-colors">
                  View Our Courses
                </a>
              </div>
            </div>
          </div>

          <div id="conclusion" class="bg-gradient-to-r from-nai-teal to-nai-highlight rounded-2xl p-12 text-white text-center shadow-2xl">
            <h3 class="text-3xl font-bold mb-6 flex items-center justify-center gap-3">
              <span class="bg-white text-nai-teal rounded-full w-10 h-10 flex items-center justify-center text-lg font-bold">4</span>
              Ready to Begin Your AURN Journey?
            </h3>
            <p class="text-xl mb-8 text-white/95 max-w-4xl mx-auto leading-relaxed">
              Becoming an AURN may seem daunting, but with the right guidance and preparation it's completely achievable. Whether you're at the beginning of your journey or ready to register, Nurse Assist International can help you reach your goal.
            </p>
            <div class="grid md:grid-cols-3 gap-6 mb-8">
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div class="text-3xl font-bold mb-2">500+</div>
                <div class="text-white/90">Nurses Successfully Registered</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div class="text-3xl font-bold mb-2">95%</div>
                <div class="text-white/90">Success Rate</div>
              </div>
              <div class="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div class="text-3xl font-bold mb-2">24/7</div>
                <div class="text-white/90">Support Available</div>
              </div>
            </div>
            <div class="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/pages/contact" class="bg-white text-nai-teal px-8 py-4 rounded-lg font-bold hover:bg-gray-100 transition-colors shadow-lg text-lg">
                Start Your Journey Today
              </a>
              <a href="/pages/nclex-ngn" class="border-2 border-white text-white px-8 py-4 rounded-lg font-bold hover:bg-white hover:text-nai-teal transition-colors text-lg">
                Explore Courses
              </a>
            </div>
          </div>
        </div>
      `
    }
  }

  const postContent = blogContent[slug]

  // For new blog posts (BlogPost21-30), we don't need postContent since they're complete components
  // Only check postContent for legacy blog posts that use the old format
  if (!post) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nai-dark mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to={backToNewsUrl} className="bg-nai-teal hover:bg-nai-deep-teal text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Back to News
          </Link>
        </div>
      </div>
    )
  }
  
  // For legacy blog posts, check if postContent exists
  if (!blogComponent && !postContent) {
    return (
      <div className="min-h-screen bg-white flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-nai-dark mb-4">Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist.</p>
          <Link to={backToNewsUrl} className="bg-nai-teal hover:bg-nai-deep-teal text-white px-6 py-3 rounded-lg font-semibold transition-colors">
            Back to News
          </Link>
        </div>
      </div>
    )
  }

  // Prepare SEO data with unique content for each blog post
  const seoData = {
    title: postContent ? `${postContent.title} | NAI` : `${post.title} | Nurse Assist International`,
    description: postContent ? postContent.excerpt : post.excerpt,
    keywords: post.tags?.join(', ') || 'NCLEX, OSCE, nursing Australia, AHPRA, nursing registration',
    canonical: `https://nurseassistinternational.com/blogs/news/${slug}`,
    og: {
      title: postContent ? postContent.title : post.title,
      description: postContent ? postContent.excerpt : post.excerpt,
      url: `https://nurseassistinternational.com/blogs/news/${slug}`,
      type: 'article',
      image: postContent?.featuredImage ? `https://nurseassistinternational.com${postContent.featuredImage}` : 'https://nurseassistinternational.com/og-image.png',
      publishedTime: post.date,
      modifiedTime: post.date,
      section: post.category || 'Nursing Education',
      tags: post.tags || []
    },
    twitter: {
      card: 'summary_large_image',
      title: postContent ? postContent.title : post.title,
      description: postContent ? postContent.excerpt : post.excerpt
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": postContent ? postContent.title : post.title,
        "description": postContent ? postContent.excerpt : post.excerpt,
        "image": postContent?.featuredImage ? `https://nurseassistinternational.com${postContent.featuredImage}` : 'https://nurseassistinternational.com/og-image.png',
        "author": {
          "@type": "Organization",
          "name": post.author || "NAI Editorial Team",
          "url": "https://nurseassistinternational.com"
        },
        "publisher": {
          "@type": "Organization",
          "name": "Nurse Assist International",
          "logo": {
            "@type": "ImageObject",
            "url": "https://nurseassistinternational.com/Images/NAI-LOGO.webp"
          }
        },
        "datePublished": post.date,
        "dateModified": post.date,
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `https://nurseassistinternational.com/blogs/news/${slug}`
        },
        "keywords": post.tags?.join(', ') || 'NCLEX, OSCE, nursing Australia',
        "articleSection": post.category || "Nursing Education",
        "wordCount": postContent?.content ? postContent.content.split(' ').length : 2000
      },
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://nurseassistinternational.com"
          },
          {
            "@type": "ListItem",
            "position": 2,
            "name": "News",
            "item": "https://nurseassistinternational.com/blogs/news"
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": postContent ? postContent.title : post.title,
            "item": `https://nurseassistinternational.com/blogs/news/${slug}`
          }
        ]
      }
    ]
  }

  return (
    <>
      <SeoHead {...seoData} />

      {/* Reading Progress Bar */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
        <div 
          className="h-full bg-gradient-to-r from-nai-teal to-nai-highlight transition-all duration-300 shadow-sm"
          style={{ width: `${readingProgress}%` }}
        />
      </div>

      {/* Professional Blog Layout */}
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-nai-soft/10">
        
        {/* Enhanced Header */}
        <header className="w-full pt-20 pb-8 bg-white border-b border-gray-100 shadow-sm">
          <div className="container-full-width">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Breadcrumb */}
              <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
                <Link to="/" className="hover:text-nai-teal transition-colors">Home</Link>
                <span>/</span>
                <Link to={backToNewsUrl} className="hover:text-nai-teal transition-colors">News</Link>
                <span>/</span>
                <span className="text-gray-900">AURN Pathway Guide</span>
              </nav>

              {/* Category Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nai-teal to-nai-highlight text-white rounded-full px-4 py-2 text-sm font-bold mb-6 shadow-lg">
                <Tag className="w-4 h-4" />
                {post.category}
              </div>

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-6 leading-tight max-w-5xl">
                {post.title}
              </h1>

              {/* Enhanced Meta Info */}
              <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <User className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-medium">{post.author}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <Calendar className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-medium">{formatDate(post.date)}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <Clock className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-medium">{post.readTime}</span>
                </div>
                <div className="flex items-center gap-2 bg-gray-50 rounded-lg px-3 py-2">
                  <Eye className="w-4 h-4 text-nai-teal" />
                  <span className="text-sm font-medium">{post.views?.toLocaleString() || '2,847'} views</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-4">
                <Link 
                  to={backToNewsUrl}
                  className="flex items-center gap-2 text-gray-600 hover:text-nai-teal transition-colors bg-gray-50 hover:bg-nai-teal/10 px-4 py-2 rounded-lg"
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Back to News</span>
                </Link>
                <button 
                  onClick={handleShare}
                  className="flex items-center gap-2 text-gray-600 hover:text-nai-teal transition-colors bg-gray-50 hover:bg-nai-teal/10 px-4 py-2 rounded-lg"
                >
                  <Share2 className="w-4 h-4" />
                  <span>{copied ? 'Copied!' : 'Share Article'}</span>
                </button>
              </div>
            </motion.div>
          </div>
        </header>

        {/* Professional Hero Image Section */}
        <section className="w-full bg-gradient-to-br from-nai-teal/5 via-white to-nai-soft/10 py-16">
          <motion.div
            className="container-full-width"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Content Side */}
              <div className="order-2 lg:order-1">
                <div className="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100">
                  <h2 className="text-2xl font-bold text-nai-dark mb-4">Article Overview</h2>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  
                  {/* Key Highlights */}
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-nai-teal rounded-full"></div>
                      <span className="text-sm text-gray-600">Complete step-by-step AURN pathway guide</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-nai-teal rounded-full"></div>
                      <span className="text-sm text-gray-600">AHPRA registration requirements explained</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-nai-teal rounded-full"></div>
                      <span className="text-sm text-gray-600">NCLEX-RN and OSCE preparation insights</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-nai-teal rounded-full"></div>
                      <span className="text-sm text-gray-600">Expert guidance from NAI team</span>
                    </div>
                  </div>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2">
                    {post.tags && post.tags.slice(0, 6).map((tag, index) => (
                      <span
                        key={index}
                        className="bg-nai-teal/10 text-nai-teal px-3 py-1 rounded-full text-xs font-medium border border-nai-teal/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Image Side */}
              <div className="order-1 lg:order-2">
                <div className="relative">
                  <img
                    src={postContent.featuredImage}
                    alt={post.title}
                    className="w-full h-80 lg:h-96 object-cover rounded-2xl shadow-2xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nai-teal/20 via-transparent to-transparent rounded-2xl"></div>
                  
                  {/* Floating Stats */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-4 shadow-lg border border-white/20">
                      <div className="grid grid-cols-3 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-nai-teal">5</div>
                          <div className="text-xs text-gray-600">Steps</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal">{post.readTime}</div>
                          <div className="text-xs text-gray-600">Read</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal">Expert</div>
                          <div className="text-xs text-gray-600">Guide</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Enhanced Content Area */}
        <main className="w-full py-16 bg-gray-50">
          <div className="container-full-width">
            <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-12 xl:gap-16">
              
              {/* Article Content */}
              <article className="lg:col-span-3 xl:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="bg-white rounded-2xl shadow-xl p-8 lg:p-12 border border-gray-100"
                >
                  {/* Table of Contents */}
                  <div className="bg-nai-teal/5 border border-nai-teal/20 rounded-xl p-6 mb-12">
                    <h3 className="text-xl font-bold text-nai-dark mb-4 flex items-center gap-3">
                      <BookOpen className="w-6 h-6 text-nai-teal" />
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      <a href="#what-is-aurn" className="block text-nai-teal hover:text-nai-dark transition-colors py-1 text-sm font-medium">
                        1. What Does AURN Mean?
                      </a>
                      <a href="#step-by-step" className="block text-nai-teal hover:text-nai-dark transition-colors py-1 text-sm font-medium">
                        2. Step-by-Step AURN Pathway
                      </a>
                      <a href="#nai-support" className="block text-nai-teal hover:text-nai-dark transition-colors py-1 text-sm font-medium">
                        3. How NAI Can Help
                      </a>
                      <a href="#conclusion" className="block text-nai-teal hover:text-nai-dark transition-colors py-1 text-sm font-medium">
                        4. Conclusion & Next Steps
                      </a>
                    </nav>
                  </div>

                  {/* Main Content with Enhanced Styling */}
                  <div 
                    className="prose prose-lg max-w-none prose-headings:text-nai-dark prose-p:text-gray-700 prose-a:text-nai-teal prose-strong:text-nai-teal prose-ul:text-gray-700 prose-li:text-gray-700"
                    dangerouslySetInnerHTML={{ __html: postContent.content }}
                  />

                  {/* Engagement Section */}
                  <div className="mt-12 pt-8 border-t border-gray-200">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <button className="flex items-center gap-2 text-gray-600 hover:text-nai-teal bg-gray-50 hover:bg-nai-teal/10 px-4 py-2 rounded-lg transition-all">
                          <ThumbsUp className="w-4 h-4" />
                          <span>Like ({post.likes || 47})</span>
                        </button>
                        <button className="flex items-center gap-2 text-gray-600 hover:text-nai-teal bg-gray-50 hover:bg-nai-teal/10 px-4 py-2 rounded-lg transition-all">
                          <MessageCircle className="w-4 h-4" />
                          <span>Comment ({post.comments || 12})</span>
                        </button>
                      </div>
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
              <aside className="lg:col-span-1 xl:col-span-1 mt-12 lg:mt-0">
                <motion.div
                  className="lg:sticky lg:top-28 space-y-6"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {/* Enhanced Reading Progress */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-bold text-gray-900 flex items-center gap-2">
                        <Eye className="w-4 h-4 text-nai-teal" />
                        Reading Progress
                      </h3>
                      <span className="text-sm text-nai-teal font-bold bg-nai-teal/10 px-2 py-1 rounded-full">
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
                      {readingProgress < 25 ? "Just getting started..." : 
                       readingProgress < 50 ? "Making good progress!" :
                       readingProgress < 75 ? "Almost there!" : "Great job reading!"}
                    </p>
                  </div>

                  {/* Enhanced Author Section */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <User className="w-4 h-4 text-nai-teal" />
                      About the Author
                    </h3>
                    <div className="text-center mb-4">
                      <img 
                        src={getGeneralImageUrl('ALLTECHZONE.webp')} 
                        alt="NAI Team" 
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-nai-teal/20"
                      />
                      <div className="font-bold text-gray-900">{post.author}</div>
                      <div className="text-sm text-nai-teal font-medium">Expert Nursing Educators</div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      Experienced nursing education specialists helping international nurses achieve their Australian registration dreams.
                    </p>
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="grid grid-cols-2 gap-4 text-center">
                        <div>
                          <div className="text-lg font-bold text-nai-teal">500+</div>
                          <div className="text-xs text-gray-600">Students Helped</div>
                        </div>
                        <div>
                          <div className="text-lg font-bold text-nai-teal">95%</div>
                          <div className="text-xs text-gray-600">Success Rate</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Enhanced Newsletter */}
                  <div className="bg-gradient-to-br from-nai-teal to-nai-highlight text-white rounded-xl p-6 shadow-lg">
                    <div className="text-center mb-4">
                      <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3">
                        <BookOpen className="w-6 h-6" />
                      </div>
                      <h3 className="font-bold mb-2">Stay Updated with NAI</h3>
                      <p className="text-sm text-white/90">
                        Get weekly nursing insights, exam tips, and career guidance delivered to your inbox.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full px-4 py-3 rounded-lg text-gray-900 text-sm border-0 focus:ring-2 focus:ring-white/50"
                      />
                      <button className="w-full bg-white text-nai-teal px-4 py-3 rounded-lg font-bold text-sm hover:bg-gray-50 transition-colors shadow-md">
                        Subscribe Now
                      </button>
                    </div>
                    <p className="text-xs text-white/70 text-center mt-3">
                      Join 5,000+ nursing professionals worldwide
                    </p>
                  </div>
                  
                  {/* Quick Links */}
                  <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-lg">
                    <h3 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <ArrowRight className="w-4 h-4 text-nai-teal" />
                      Quick Links
                    </h3>
                    <div className="space-y-3">
                      <a href="/pages/nclex-ngn" className="block text-sm text-nai-teal hover:text-nai-dark font-medium transition-colors">
                        → NCLEX-RN Preparation
                      </a>
                      <a href="/pages/osce-preparation" className="block text-sm text-nai-teal hover:text-nai-dark font-medium transition-colors">
                        → OSCE Training
                      </a>
                      <a href="/pages/oba" className="block text-sm text-nai-teal hover:text-nai-dark font-medium transition-colors">
                        → OBA Pathway
                      </a>
                      <a href="/pages/contact" className="block text-sm text-nai-teal hover:text-nai-dark font-medium transition-colors">
                        → Contact NAI
                      </a>
                    </div>
                  </div>
                </motion.div>
              </aside>
            </div>
          </div>
        </main>

        {/* Enhanced CTA Section */}
        <section className="w-full bg-gradient-to-r from-nai-teal via-nai-highlight to-nai-teal py-20">
          <div className="container-full-width text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <BookOpen className="w-16 h-16 text-white mx-auto mb-8" />
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your AURN Journey?</h2>
              <p className="text-white/95 mb-10 text-xl leading-relaxed max-w-4xl mx-auto">
                Join thousands of international nurses who have successfully registered in Australia with NAI's expert guidance and proven success strategies.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-10 py-4 rounded-lg font-bold transition-colors hover:bg-gray-100 shadow-lg text-lg"
                >
                  Contact Us Today
                </Link>
                <Link 
                  to="/pages/nclex-ngn" 
                  className="border-2 border-white text-white hover:bg-white hover:text-nai-teal px-10 py-4 rounded-lg font-bold transition-colors text-lg"
                >
                  View Our Courses
                </Link>
              </div>
              
              {/* Success Stats */}
              <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">500+</div>
                  <div className="text-white/90">Nurses Successfully Registered</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">95%</div>
                  <div className="text-white/90">Success Rate</div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <div className="text-4xl font-bold mb-2">24/7</div>
                  <div className="text-white/90">Expert Support</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </>
  )
}

export default BlogPost