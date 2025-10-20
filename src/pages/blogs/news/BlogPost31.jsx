import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, User, ArrowLeft, Share2, BookOpen, Tag, Eye, CheckCircle, ArrowRight, Briefcase, FileText, Users, Target } from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost31 = () => {
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
        title: 'How to Prepare for Your First Nursing Job in Australia',
        text: 'Complete guide to preparing for your first nursing job interview in Australia after passing NCLEX or OSCE.',
        url: window.location.href,
      })
    } else {
      copyUrl()
    }
  }
  
  // Post data
  const post = {
    title: 'How to Prepare for Your First Nursing Job in Australia',
    date: '2025-10-04',
    author: 'NAI Career Team',
    category: 'Career Guidance',
    readTime: '8 min read',
    excerpt: 'You\'ve crossed some big milestones—passing your NCLEX or OSCE exam in Australia, completing the paperwork, and officially registering with AHPRA. That\'s no small achievement! Now, the next challenge begins: your very first nursing job interview in Australia.',
    featuredImage: '/blog-images/b31.webp',
    tags: ['Career', 'Job Interview', 'Australia', 'NCLEX', 'OSCE', 'First Job'],
    views: 1287,
    likes: 0,
    comments: 0
  }

  return (
    <>
      <SeoHead
        title={`${post.title} | Nurse Assist International`}
        description={post.excerpt}
        keywords={post.tags?.join(', ') || ''}
        canonicalUrl={`https://nurseassistinternational.com/blogs/news/how-to-prepare-for-your-first-nursing-job-in-australia`}
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
                <span className="text-nai-teal font-semibold">Career Guide</span>
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
                  <h2 className="text-xl sm:text-2xl font-bold text-nai-teal mb-4">Your First Nursing Interview in Australia</h2>
                  <p className="text-sm sm:text-base text-gray-700 leading-relaxed mb-6">
                    {post.excerpt}
                  </p>
                  <div className="space-y-3 mb-6">
                    {[
                      'Understanding what Australian employers value',
                      'Preparing essential documents and certificates',
                      'Mastering common interview questions',
                      'Presenting yourself professionally',
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

        {/* Content Section */}
        <main className="w-full py-10 sm:py-14 lg:py-20 bg-gradient-to-br from-white via-nai-soft/40 to-teal-50">
          <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
            <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-10 xl:gap-14">
              
              {/* Article Content */}
              <article className="lg:col-span-3 xl:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="space-y-8"
                >
                  {/* Introduction Card */}
                  <Card className="p-6 sm:p-8">
                    <div className="prose prose-sm sm:prose-base lg:prose-lg max-w-none">
                      <p className="text-gray-700 leading-relaxed text-lg">
                        For many internationally qualified nurses, this stage can feel unfamiliar. You've mastered patient care, but how do you show that in an interview? What do Australian employers expect? And how do you make sure your international nursing experience is valued in the Australian healthcare system?
                      </p>
                      <p className="text-gray-700 leading-relaxed mt-4">
                        Whether you trained overseas and came through the Outcome Based Assessment (OBA pathway), passed the NCLEX-RN exam in Australia, or cleared the OSCE training in Australia, your next step is crucial. Let's walk through it together.
                      </p>
                    </div>
                  </Card>

                  {/* Section 1: Understand the Role */}
                  <Section title="Understand the Role You're Applying For">
                    <Card className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-xl flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Before your interview, take time to study the job description carefully. Roles in aged care, acute care, community nursing, or mental health all come with their own pace and responsibilities.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            Pay close attention to the <strong className="text-nai-teal">selection criteria</strong>. These aren't just formalities — they highlight exactly what the employer values. Reflect on your clinical placements, OSCE preparation classes, or even your NCLEX coaching journey to show how your experience fits their needs.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Section>

                  {/* Section 2: What Employers Value */}
                  <Section title="What Employers Value in Australia">
                    <Card className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-4">
                        Australian nursing employers look for much more than clinical skills. Through the OSCE preparation course or NCLEX training in Australia, you've learned technical knowledge, but interviews also test how you:
                      </p>
                      <div className="grid sm:grid-cols-2 gap-4 mb-6">
                        {[
                          'Communicate effectively with patients, families, and colleagues',
                          'Manage time and heavy workloads',
                          'Handle stressful situations calmly',
                          'Respect cultural safety—especially with Aboriginal and Torres Strait Islander communities',
                          'Apply ethical and professional standards',
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start gap-3 bg-nai-soft/50 rounded-lg p-4 border border-nai-teal/20">
                            <CheckCircle className="w-5 h-5 text-nai-teal flex-shrink-0 mt-0.5" />
                            <span className="text-sm text-gray-700">{item}</span>
                          </div>
                        ))}
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 border border-nai-teal/20">
                        <h4 className="font-bold text-nai-teal mb-3">Expect interview questions like:</h4>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-2">
                            <span className="text-nai-teal font-bold">•</span>
                            <span>How do you ensure safe medication administration?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-nai-teal font-bold">•</span>
                            <span>How would you care for a patient from a culturally diverse background?</span>
                          </li>
                          <li className="flex items-start gap-2">
                            <span className="text-nai-teal font-bold">•</span>
                            <span>Tell us about a time you faced a challenge in your nursing role.</span>
                          </li>
                        </ul>
                      </div>
                    </Card>
                  </Section>

                  {/* Section 3: Practice Common Questions */}
                  <Section title="Practice Common Interview Questions">
                    <div className="space-y-4">
                      <QuestionCard
                        question='"Tell us about yourself."'
                        answer="Highlight your nursing education, your overseas experience, and your reason for choosing nursing in Australia from overseas."
                      />
                      <QuestionCard
                        question='"Describe a time you managed a difficult patient."'
                        answer="Use the STAR method (Situation, Task, Action, Result)—a structure taught in many OSCE review classes."
                      />
                      <QuestionCard
                        question='"What does cultural safety mean to you?"'
                        answer="Explain how your training (whether in NCLEX NGN review classes or OSCE review centres in Australia) taught you the importance of respecting diversity."
                      />
                    </div>
                  </Section>

                  {/* Section 4: Documents */}
                  <Section title="Prepare Your Documents">
                    <Card className="p-6">
                      <div className="flex items-start gap-4 mb-6">
                        <div className="w-12 h-12 bg-gradient-to-br from-nai-teal to-nai-blue rounded-xl flex items-center justify-center flex-shrink-0">
                          <FileText className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Employers in Australia expect your paperwork to be in order. Keep both printed and digital copies ready, including:
                          </p>
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-3">
                        {[
                          'AHPRA self-check results and registration',
                          'An updated, Australia-ready resume',
                          'CPD certificates, First Aid, and Manual Handling records',
                          'Police clearance, visa, and work rights',
                        ].map((doc, idx) => (
                          <div key={idx} className="bg-white rounded-lg p-4 border-2 border-nai-teal/20 hover:border-nai-teal/40 transition-colors">
                            <div className="flex items-center gap-3">
                              <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                              <span className="text-sm font-medium text-gray-700">{doc}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <div className="mt-6 bg-nai-soft/50 rounded-lg p-4 border border-nai-teal/20">
                        <p className="text-sm text-gray-700">
                          If you've trained through OSCE classes near me or NCLEX preparation classes near me, highlight your certifications clearly.
                        </p>
                      </div>
                    </Card>
                  </Section>

                  {/* Section 5: Present Yourself */}
                  <Section title="Present Yourself Professionally">
                    <Card className="p-6">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-nai-highlight to-nai-teal rounded-xl flex items-center justify-center flex-shrink-0">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <p className="text-gray-700 leading-relaxed mb-4">
                            Whether you're interviewing for OSCE RN pathway Australia roles or your first hospital position, professionalism is key. Dress appropriately, arrive early (or log in early for a virtual interview), and maintain good eye contact.
                          </p>
                          <p className="text-gray-700 leading-relaxed">
                            Australian workplaces value <strong className="text-nai-teal">humility, teamwork, and calm confidence</strong>. You don't need to be flawless—just prepared.
                          </p>
                        </div>
                      </div>
                    </Card>
                  </Section>

                  {/* Section 6: Ask Questions */}
                  <Section title="Ask Thoughtful Questions">
                    <Card className="p-6">
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Show genuine interest by asking things like:
                      </p>
                      <div className="space-y-3">
                        {[
                          'What does orientation look like for new nurses?',
                          'Does the hospital provide face-to-face live sessions for OSCE training or ongoing NCLEX review classes?',
                          'How does the team support ongoing learning and professional development?',
                        ].map((q, idx) => (
                          <div key={idx} className="bg-gradient-to-r from-teal-50 to-blue-50 rounded-lg p-4 border-l-4 border-nai-teal">
                            <div className="flex items-start gap-3">
                              <Target className="w-5 h-5 text-nai-teal flex-shrink-0 mt-0.5" />
                              <span className="text-gray-700 italic">{q}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                      <p className="text-gray-700 leading-relaxed mt-6 text-sm">
                        Asking these shows that you're not just looking for a job—you're building a career in Australia as a nurse.
                      </p>
                    </Card>
                  </Section>

                  {/* Conclusion */}
                  <Card className="p-8 bg-gradient-to-r from-nai-soft via-blue-50 to-nai-soft border border-nai-teal/30">
                    <h3 className="text-2xl font-bold text-nai-teal mb-4">A New Chapter Begins</h3>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6">
                      Your first nursing job interview in Australia is more than a checkpoint—it's a milestone. Whether you came through NCLEX RN Australia, the OBA prep course, or OSCE preparation training Melbourne, you've already proven your commitment.
                    </p>
                    <p className="text-gray-700 leading-relaxed mb-8">
                      And remember—<strong className="text-nai-teal">you don't have to do this alone</strong>. If you're preparing for the NCLEX NGN and OSCE, exploring the cost of NCLEX training in Australia, or searching for the best OSCE training near me, Nurse Assist International is here to guide you every step of the way.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <a
                        href="https://nurseassistinternational.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-nai-teal hover:bg-nai-blue text-white px-8 py-3 rounded-lg font-bold transition-colors shadow text-center"
                      >
                        Visit NAI Website
                      </a>
                      <a
                        href="mailto:admin@nurseassistinternational.com"
                        className="border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-8 py-3 rounded-lg font-bold transition-colors text-center"
                      >
                        Email Us
                      </a>
                    </div>
                  </Card>
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
                        alt="NAI Career Team" 
                        className="w-16 h-16 rounded-full object-cover mx-auto mb-3 border-2 border-nai-teal"
                      />
                      <div className="font-bold text-gray-900">{post.author}</div>
                      <div className="text-sm text-nai-teal font-medium">Career Guidance Specialists</div>
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
                        Connect with our expert team for personalized career guidance and interview preparation.
                      </p>
                    </div>
                    <div className="space-y-3">
                      <a 
                        href="https://wa.me/61478320397?text=Hi%2C%20I%27m%20interested%20in%20career%20guidance%20for%20nursing%20in%20Australia"
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
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">Ready to Start Your Nursing Career in Australia?</h2>
              <p className="text-white/95 mb-10 text-base sm:text-lg md:text-xl leading-relaxed max-w-4xl mx-auto px-4">
                Join thousands of international nurses who have successfully launched their Australian nursing careers with NAI's expert guidance and support.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12 px-4">
                <Link 
                  to="/pages/contact" 
                  className="bg-white text-nai-teal px-8 md:px-10 py-4 rounded-lg font-bold hover:bg-gray-100 shadow-lg text-base md:text-lg min-h-[44px] flex items-center justify-center"
                >
                  Get Career Guidance
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
                <SuccessStat value="Expert" label="Career Support" />
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

export default BlogPost31

