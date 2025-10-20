import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import SeoHead from '../components/SeoHead'
import { courseJsonLd, breadcrumbJsonLd, BASE_DOMAIN } from '../seo/jsonld'
import { CheckCircle, BookOpen, Target, Users, Award, Clock, Brain, Zap, Download, Plus, Minus, Star, Shield, Heart, TrendingUp, MessageCircle, Phone, Stethoscope, GraduationCap, ArrowRight, Globe, Building, UserCheck, Calendar } from 'lucide-react'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../utils/imageStorage'

const NCLEXPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  // Scroll to #hash taking the sticky header into account
  useEffect(() => {
    const HEADER_FALLBACK = 88; // px, tweak if your header is taller

    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.getElementById(hash.slice(1));
      if (!el) return;

      // Prefer scroll-margin-top via CSS; if not present, use a JS offset
      const hasScrollMargin = getComputedStyle(el).scrollMarginTop !== '0px';

      if (hasScrollMargin && el.scrollIntoView) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        const header = document.querySelector('header');
        const headerH = header?.offsetHeight ?? HEADER_FALLBACK;
        const top = el.getBoundingClientRect().top + window.pageYOffset - headerH - 8; // small extra gap
        window.scrollTo({ top, behavior: 'smooth' });
      }
    };

    // handle initial load after layout/Images settle
    const onLoad = () => requestAnimationFrame(scrollToHash);
    window.addEventListener('hashchange', scrollToHash);
    window.addEventListener('load', onLoad);

    // also try once shortly after mount (SPA navigations)
    const t = setTimeout(scrollToHash, 150);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
      window.removeEventListener('load', onLoad);
      clearTimeout(t);
    };
  }, []);

  const ngnQuestionTypes = [
    {
      title: 'Clinical Judgment Questions',
      description: 'Advanced scenarios testing critical thinking and clinical decision-making skills',
      icon: Brain,
      level: 'Advanced'
    },
    {
      title: 'Enhanced Hot Spot',
      description: 'Interactive questions requiring precise selection of anatomical or procedural areas',
      icon: Target,
      level: 'Interactive'
    },
    {
      title: 'Cloze (Drop-down)',
      description: 'Fill-in-the-blank questions with multiple dropdown selection options',
      icon: BookOpen,
      level: 'Selective'
    },
    {
      title: 'Extended Multiple Response',
      description: 'Complex multiple-choice questions with multiple correct answer selections',
      icon: Zap,
      level: 'Complex'
    }
  ]

  const clinicalJudgmentModel = [
    {
      step: 1,
      title: 'Recognize Cues',
      description: 'Identify relevant data and information from patient scenarios',
      color: 'bg-red-100 text-red-800'
    },
    {
      step: 2,
      title: 'Analyze Cues',
      description: 'Connect and organize information to understand patient condition',
      color: 'bg-orange-100 text-orange-800'
    },
    {
      step: 3,
      title: 'Prioritize Hypotheses',
      description: 'Rank potential client concerns based on urgency and importance',
      color: 'bg-yellow-100 text-yellow-800'
    },
    {
      step: 4,
      title: 'Generate Solutions',
      description: 'Develop appropriate interventions and nursing actions',
      color: 'bg-green-100 text-green-800'
    },
    {
      step: 5,
      title: 'Take Action',
      description: 'Implement selected interventions and nursing care plans',
      color: 'bg-blue-100 text-blue-800'
    },
    {
      step: 6,
      title: 'Evaluate Outcomes',
      description: 'Assess effectiveness of actions and modify care as needed',
      color: 'bg-purple-100 text-purple-800'
    }
  ]

  const courseFeatures = [
    {
      title: 'Comprehensive Content Review',
      description: 'Complete coverage of all NCLEX-RN test plan areas with updated NGN focus and latest nursing standards',
      icon: BookOpen
    },
    {
      title: 'NGN Practice Tests',
      description: 'Thousands of Next Generation NCLEX-style practice questions with detailed explanations',
      icon: Target
    },
    {
      title: 'Expert Instruction',
      description: 'Learn from experienced NCLEX instructors with proven track records and deep NGN expertise',
      icon: Users
    },
    {
      title: 'Clinical Judgment Training',
      description: 'Specialized training in the Clinical Judgment Measurement Model and critical thinking skills',
      icon: Brain
    },
    {
      title: 'Personalized Study Plans',
      description: 'Customized preparation programs tailored to your learning style and knowledge gaps',
      icon: Award
    },
    {
      title: 'Continuous Support',
      description: '24/7 access to instructors, study materials, and peer support throughout your journey',
      icon: Heart
    }
  ]

  const faqData = [
    {
      question: "What is the MCQ exam described in Outcome Based Assessment (OBA)?",
      answer: "The multiple‑choice question (MCQ) exam is designed to evaluate the professional knowledge and skills of the candidates. Exams are administered separately for IQNMs who are aspiring to be licensed in Australia as a registered nurse (RN), enrolled nurse (EN), or midwife. The MCQ exam intended for RNs is administered through the National Council Licensure Examination for Registered Nurses (Next Generation NCLEX‑NGN). This is developed by the National Council of State Boards of Nursing (NCSBN) and is conducted through the Pearson VUE test centers in most countries. After the completion of Orientation Part 1 and Portfolio stage, Stream B candidates should undergo the MCQ exam alternatively also referred as the Next Generation NCLEX‑NGN exam. A candidate must successfully pass the exam first before progressing to the Objective Structured Clinical Exam (OSCE)."
    },
    {
      question: "How much is Next Generation NCLEX (NGN) registration fee?",
      answer: "The registration fee for Next Generation NCLEX (NGN) for registered nurses is $200 USD plus an additional international scheduling fee of $150 USD. Total fee for the whole process will be $350 USD."
    },
    {
      question: "What is with ATT?",
      answer: "The ATT contains the authorization number, candidate identification number and an expiration date. You will need the ATT to schedule an appointment to take the Next Generation NCLEX (NGN)."
    },
    {
      question: "Can I take the Next Generation NCLEX (NGN) outside Australia?",
      answer: "Yes. You can take Next Generation NCLEX (NGN) at any Pearson Professional Testing locations worldwide. Aside from Australia, international locations where Next Generation NCLEX (NGN) is offered include USA, Brazil, Canada, UK, Hong Kong, India, Japan, Mexico, Philippines, Puerto Rico, South Africa and Taiwan."
    },
    {
      question: "When will I get my results?",
      answer: "Official exam results will be available and sent to candidates approximately six weeks after taking the exam."
    }
  ]

  // SEO: NCLEX page metadata preserving old site keywords (55-60 chars)
  const seoData = {
    title: "NCLEX RN Australia | NCLEX NGN Review Classes | NAI", // 56 chars
    description: "NCLEX Australia preparation with expert guidance and support. NCLEX review classes for international nurses seeking Australian registration. Join thousands of successful OSCE passers.",
    canonical: `${BASE_DOMAIN}/pages/nclex-ngn`,
    og: {
      title: "NCLEX-RN Preparation Course Australia | NGN Training | NAI",
      description: "Master NCLEX-RN with expert NGN training and clinical judgment skills. Join thousands of successful international nurses in Australia.",
      url: `${BASE_DOMAIN}/pages/nclex-ngn`,
      image: `${BASE_DOMAIN}/images/og/nclex-course.webp`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "NCLEX-RN Preparation Course Australia | NAI",
      description: "Master NCLEX-RN with Australia's #1 preparation course. Expert NGN training and proven success rates.",
      image: `${BASE_DOMAIN}/images/og/nclex-course.webp`
    },
    jsonLd: [
      courseJsonLd({
        name: "NCLEX-RN Preparation Course",
        description: "Comprehensive Next Generation NCLEX-RN preparation with expert instructors, clinical judgment training, and proven success rates for international nurses seeking Australian nursing registration.",
        courseCode: "NCLEX-RN-NGN",
        duration: "P6M",
        price: "1500",
        url: `${BASE_DOMAIN}/pages/nclex-ngn`,
        prerequisites: ["Nursing Degree", "English Proficiency"],
        skills: ["Clinical Judgment", "Patient Safety", "NGN Question Types", "Critical Thinking"]
      }),
      breadcrumbJsonLd([
        { name: "Home", url: BASE_DOMAIN },
        { name: "Courses", url: `${BASE_DOMAIN}/#courses` },
        { name: "NCLEX-RN Preparation", url: `${BASE_DOMAIN}/pages/nclex-ngn` }
      ])
    ]
  };

  return (
    <>
      <SeoHead {...seoData} />

      <div className="min-h-screen bg-gray-50 pt-20">
        {/* Hero Section with Background */}
        <div className="relative bg-gradient-to-br from-nai-highlight via-nai-deep-teal to-nai-teal overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="w-full h-full bg-repeat" style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
            }}></div>
          </div>
          
          {/* Hero Content */}
          <div className="relative w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-12 md:py-16 lg:py-20">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center">
              
              {/* Left Content */}
          <motion.div 
                className="text-white"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                {/* Badges */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center border border-white/20">
                    <Brain className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                      <span className="text-xs font-semibold text-white">Next Generation</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                      <span className="text-xs font-semibold text-white">Expert Training</span>
                    </div>
                  </div>
                </div>

                {/* Course Title */}
                <div className="mb-8">
                  <div className="text-sm text-white/80 font-semibold mb-2">NAI-NGN –</div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Next Generation NCLEX
            </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Master the Next Generation NCLEX-RN with our comprehensive preparation program 
                    designed specifically for international nurses seeking US licensure.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8 w-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">6 Steps</div>
                    <div className="text-sm text-white/80">Clinical Judgment</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">75-145</div>
                    <div className="text-sm text-white/80">Questions</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20NCLEX%20preparation%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-nai-highlight px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start Your Prep
                  </motion.a>
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    Download Guide
                  </motion.button>
                </div>
          </motion.div>

              {/* Right Content - Hero Image */}
          <motion.div 
                className="relative"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Main Image */}
                  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                    <img 
                      src={getGeneralImageUrl('A_group_of_professional_nurses_in_teal_scrubs_diverse_in_ethnicity_and_gender_standing_together_confidently_with_warm_smiles._Some_nurses_may_hold_clipboards_stethoscopes_or_tablets_t.webp')} 
                      alt="NCLEX Training - Professional Nurses Team"
                      className="w-full h-80 object-cover rounded-xl shadow-2xl"
                    />
                  </div>
                  
                  {/* Floating Stats Cards */}
                  <div className="absolute -bottom-6 -left-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">NGN</div>
                        <div className="text-sm text-gray-600">Ready</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-nai-highlight/10 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-nai-highlight" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">Expert</div>
                        <div className="text-sm text-gray-600">Training</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

          {/* What is NGN - Enhanced */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 bg-white rounded-2xl mb-8 md:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8 xl:px-12 shadow-sm relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            {/* Background Pattern */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-nai-highlight/5 to-transparent rounded-full -translate-y-32 translate-x-32"></div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16 items-center mb-12">
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-6">
                  <Brain className="w-4 h-4" />
                  Advanced Assessment
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is Next Generation NCLEX?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Next Generation NCLEX (NGN) represents a significant evolution in nursing licensure examinations, 
                  emphasizing clinical judgment and critical thinking through innovative question formats.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  NGN introduces new item types that better reflect the complexity of real-world nursing practice, 
                  requiring candidates to demonstrate higher-order thinking skills and clinical decision-making abilities.
                </p>
                
                {/* Key Features */}
                <div className="space-y-4">
                  {[
                    { icon: CheckCircle, text: "Enhanced clinical judgment measurement", color: "text-green-600" },
                    { icon: Star, text: "New innovative question types and formats", color: "text-yellow-500" },
                    { icon: Users, text: "Case study-based clinical scenarios", color: "text-blue-600" },
                    { icon: Award, text: "Real-world nursing practice reflection", color: "text-purple-600" }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                      <span className="text-gray-700">{benefit.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* NGN Features Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-nai-highlight/10 to-nai-deep-teal/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">NGN Question Types</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: Brain, label: "Clinical Judgment", color: "bg-purple-100 text-purple-600" },
                      { icon: Target, label: "Enhanced Hot Spot", color: "bg-green-100 text-green-600" },
                      { icon: BookOpen, label: "Cloze Drop-down", color: "bg-blue-100 text-blue-600" },
                      { icon: Zap, label: "Extended Multiple", color: "bg-orange-100 text-orange-600" }
                    ].map((type, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className={`w-12 h-12 ${type.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                          <type.icon className="w-6 h-6" />
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{type.label}</div>
                  </div>
                    ))}
                  </div>
                  </div>
                
                {/* Floating NGN Badge */}
                <div className="absolute -bottom-4 -right-4 bg-nai-highlight rounded-xl p-4 shadow-xl text-white">
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">NGN</div>
                    <div className="text-xs">Ready</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-nai-highlight/5 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Why Choose NAI for NGN Preparation?</h3>
              <p className="text-gray-700">
                NAI provides the best Next Generation NCLEX preparation course with expertly crafted materials, 
                experienced instructors, and comprehensive training in clinical judgment skills essential for NGN success.
              </p>
            </div>
          </motion.section>

          {/* Our NCLEX Training Programs Section Header */}
          <motion.section 
            id="nclex-courses"
            className="py-4 md:py-6 lg:py-8 scroll-mt-24 md:scroll-mt-28 lg:scroll-mt-32"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Award className="w-4 h-4" />
                Available Programs
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our NCLEX Training Programs</h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Choose the program that best fits your learning style and career goals. Both courses include comprehensive NGN preparation and expert support.
              </p>
            </div>
          </motion.section>

          {/* Available NCLEX Courses Cards */}
          <motion.section 
            className="mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {/* Course Cards Grid */}
            <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
              
              {/* NCLEX LIVE Review Course */}
              <motion.div
                className="group relative bg-white rounded-2xl p-6 border-2 border-nai-teal/40 hover:border-nai-teal/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                {/* Most Popular Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-nai-highlight text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    Most Popular
                  </div>
                </div>
                
                {/* Header Section */}
                <div className="text-center mb-6 pt-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-nai-highlight to-nai-teal rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-nai-teal transition-colors duration-300">
                    NCLEX LIVE Review
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Unlimited access - Join anytime!
                  </p>
                  <div className="text-3xl font-bold text-nai-highlight mb-1">$1,500</div>
                  <div className="text-xs text-gray-500">Unlimited access • Payment plans available</div>
                </div>
                
                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Most popular live interactive NCLEX preparation with expert educators, unlimited access to live sessions, and comprehensive support throughout your journey.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-nai-soft p-3 rounded-lg text-center border border-nai-teal/20">
                    <div className="text-sm font-bold text-nai-teal">Unlimited</div>
                    <div className="text-xs text-nai-deep-teal">Access</div>
                  </div>
                  <div className="bg-nai-soft p-3 rounded-lg text-center border border-nai-teal/20">
                    <div className="text-sm font-bold text-nai-teal">24 Weeks</div>
                    <div className="text-xs text-nai-deep-teal">Live Sessions</div>
                  </div>
                  <div className="bg-nai-soft p-3 rounded-lg text-center border border-nai-teal/20">
                    <div className="text-sm font-bold text-nai-teal">Small</div>
                    <div className="text-xs text-nai-deep-teal">Groups</div>
                  </div>
                </div>
                
                {/* Features Section */}
                <div className="flex-grow mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">What's Included:</h4>
                  <div className="bg-nai-soft/50 rounded-xl p-4 border border-nai-teal/20">
                    <ul className="space-y-2">
                      {[
                        "Unlimited online access to 24 weeks of LIVE sessions",
                        "8 weeks of NCLEX NGN coaching",
                        "Access to live NCLEX NGN question bank",
                        "Motivational and Polishing sessions x2",
                        "CAT Mock and readiness test x10",
                        "E book access",
                        "Support in booking NCLEX Exam",
                        "Pre reading NCLEX NGN materials",
                        "Live with our best educators",
                        "Weekly quizzes"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-nai-highlight flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="space-y-3">
                  <a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20enroll%20in%20the%20NCLEX%20LIVE%20Review%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 bg-gradient-to-r from-nai-highlight to-nai-teal hover:from-nai-teal hover:to-nai-deep-teal text-white rounded-xl font-semibold text-sm transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Enroll Now
                  </a>
                  <button
                    onClick={() => window.location.href = 'tel:+61478320397'}
                    className="w-full py-2 px-4 border-2 border-nai-teal text-nai-teal hover:bg-nai-soft rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </div>
              </motion.div>

              {/* Comprehensive NCLEX & OSCE Review Course */}
              <motion.div
                className="group relative bg-white rounded-2xl p-6 border-2 border-nai-teal/40 hover:border-nai-teal/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Premium Badge */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                  <div className="bg-nai-deep-teal text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                    Premium Package
                  </div>
                </div>
                
                {/* Header Section */}
                <div className="text-center mb-6 pt-2">
                  <div className="w-16 h-16 bg-gradient-to-br from-nai-teal to-nai-deep-teal rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-nai-teal transition-colors duration-300">
                    Comprehensive NCLEX & OSCE
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">
                    Unlimited access - Join anytime!
                  </p>
                  <div className="text-3xl font-bold text-nai-deep-teal mb-1">$4,200</div>
                  <div className="text-xs text-gray-500">Complete package • Best value</div>
                </div>
                
                {/* Description */}
                <div className="mb-6">
                  <p className="text-gray-700 leading-relaxed text-sm">
                    Our most comprehensive program combining live NCLEX sessions with extensive OSCE training, face-to-face sessions, and complete support for international nurses.
                  </p>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-3 gap-3 mb-6">
                  <div className="bg-nai-soft p-3 rounded-lg text-center border border-nai-teal/20">
                    <div className="text-sm font-bold text-nai-teal">Unlimited</div>
                    <div className="text-xs text-nai-deep-teal">Full Access</div>
                  </div>
                  <div className="bg-nai-soft p-3 rounded-lg text-center border border-nai-teal/20">
                    <div className="text-sm font-bold text-nai-teal">NCLEX+OSCE</div>
                    <div className="text-xs text-nai-deep-teal">Combined</div>
                  </div>
                  <div className="bg-nai-soft p-3 rounded-lg text-center border border-nai-teal/20">
                    <div className="text-sm font-bold text-nai-teal">Elite</div>
                    <div className="text-xs text-nai-deep-teal">Groups</div>
                  </div>
                </div>
                
                {/* Features Section */}
                <div className="flex-grow mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Complete Package Includes:</h4>
                  <div className="bg-nai-soft/50 rounded-xl p-4 border border-nai-teal/20">
                    <div className="mb-3">
                      <p className="text-xs font-semibold text-nai-deep-teal mb-2">✓ All NCLEX LIVE Features Plus:</p>
                    </div>
                    <ul className="space-y-2">
                      {[
                        "24×7 Free and unlimited lab access",
                        "Unlimited face-to-face training (Melbourne, Sydney, Adelaide, Brisbane)",
                        "Individual MOCK readings Practical OSCE assessment",
                        "Individual Personalised feedback for 10 Mock stations",
                        "PR pathway and Job sponsorship assistance",
                        "Visa and accommodation assistance for International nurses",
                        "Free exclusively designed OSCE RN handbook",
                        "Plus all NCLEX LIVE Review features"
                      ].map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <CheckCircle className="w-4 h-4 text-nai-deep-teal flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700 text-xs">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                {/* CTA Button */}
                <div className="space-y-3">
                  <a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20enroll%20in%20the%20Comprehensive%20NCLEX%20%26%20OSCE%20Review%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full py-3 px-4 bg-gradient-to-r from-nai-teal to-nai-deep-teal hover:from-nai-deep-teal hover:to-nai-teal text-white rounded-xl font-semibold text-sm transition-all duration-300 text-center shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    Enroll Now
                  </a>
                  <button
                    onClick={() => window.location.href = 'tel:+61478320397'}
                    className="w-full py-2 px-4 border-2 border-nai-teal text-nai-teal hover:bg-nai-soft rounded-xl font-medium text-sm transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </button>
                </div>
              </motion.div>

            </div>

            {/* Course Comparison Note */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-nai-soft via-blue-50 to-nai-soft rounded-xl p-6 border border-nai-teal/30">
                <h4 className="font-bold text-gray-900 mb-3 text-center">Need Help Choosing?</h4>
                <p className="text-gray-700 text-center leading-relaxed mb-4">
                  Not sure which program is right for you? Our expert advisors are here to help you choose the perfect NCLEX preparation path based on your learning style, timeline, and career goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20need%20help%20choosing%20the%20right%20NCLEX%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-300 flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat With An Advisor
                  </a>
                  <button
                    onClick={() => window.location.href = 'tel:+61478320397'}
                    className="border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    Schedule A Call
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* NGN Question Types Detailed */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Question Types
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">NGN Question Formats</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Master the new innovative question types that make the Next Generation NCLEX more reflective of real-world nursing practice.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {ngnQuestionTypes.map((questionType, index) => {
                const levelColors = {
                  'Advanced': 'bg-purple-100 text-purple-800 border-purple-200',
                  'Interactive': 'bg-green-100 text-green-800 border-green-200',
                  'Selective': 'bg-blue-100 text-blue-800 border-blue-200',
                  'Complex': 'bg-orange-100 text-orange-800 border-orange-200'
                };
                
                return (
                  <motion.div 
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    whileHover={{ y: -2 }}
                  >
                    {/* Question Type Header */}
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-nai-highlight/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <questionType.icon className="w-8 h-8 text-nai-highlight" />
              </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{questionType.title}</h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${levelColors[questionType.level]}`}>
                        {questionType.level}
                      </span>
            </div>

                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {questionType.description}
                    </p>
                    
                    {/* NGN Focus */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>NGN Format</span>
                      </div>
              </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Clinical Judgment Model */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 bg-white rounded-2xl mb-8 md:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8 xl:px-12 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Brain className="w-4 h-4" />
                Clinical Judgment
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Clinical Judgment Measurement Model</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                The foundation of NGN assessment - six cognitive processes that guide clinical decision-making and form the basis of nursing judgment.
              </p>
              </div>
              
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {clinicalJudgmentModel.map((step, index) => (
                <motion.div 
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                >
                  <div className="flex items-center justify-center mb-4">
                    <div className="w-16 h-16 bg-nai-highlight rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">{step.step}</span>
                    </div>
                </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{step.description}</p>
                  <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${step.color}`}>
                    Step {step.step}
                  </span>
                </motion.div>
              ))}
              </div>
              
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-nai-highlight/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Master Clinical Judgment with NAI</h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Our comprehensive NGN preparation program focuses extensively on developing your clinical judgment skills 
                through the six-step model, ensuring you're fully prepared for the advanced reasoning required in the Next Generation NCLEX.
              </p>
            </div>
          </motion.section>

          {/* Course Features - Enhanced */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-nai-highlight/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Award className="w-4 h-4" />
                  Premium Features
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">NGN Preparation Features</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive Next Generation NCLEX preparation with cutting-edge resources and expert instruction.
                </p>
              </div>
              
              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {courseFeatures.map((feature, index) => (
                    <motion.div 
                      key={index}
                      className="text-center group hover:transform hover:scale-105 transition-all duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                      <div className="w-20 h-20 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-shadow">
                        <feature.icon className="w-10 h-10 text-white" />
              </div>
              
                      <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                      <p className="text-gray-700 leading-relaxed">{feature.description}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          {/* Get Started CTA Section */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95 }}
          >
            <div className="max-w-6xl mx-auto">
              <div className="relative bg-gradient-to-br from-white via-nai-soft to-blue-50 rounded-3xl p-8 md:p-12 border-2 border-nai-teal/20 shadow-xl overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="w-full h-full bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%230a7ea3' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>

                <div className="relative z-10">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Left Content */}
                    <div>
                      <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-6">
                        <Stethoscope className="w-4 h-4" />
                        Start Your Journey Today
                      </div>
                      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                        Ready to Begin Your <span className="bg-gradient-to-r from-nai-highlight to-nai-teal bg-clip-text text-transparent">NCLEX Success</span> Story?
                      </h2>
                      <p className="text-lg text-gray-700 leading-relaxed mb-6">
                        Join thousands of international nurses who have successfully passed the Next Generation NCLEX with our expert guidance and comprehensive preparation programs.
                      </p>
                      
                      {/* Key Benefits */}
                      <div className="space-y-3 mb-8">
                        {[
                          { icon: CheckCircle, text: "Expert NGN-focused instruction", color: "text-green-600" },
                          { icon: Award, text: "Proven success methodologies", color: "text-blue-600" },
                          { icon: Users, text: "Personalized support throughout", color: "text-purple-600" },
                          { icon: TrendingUp, text: "Outstanding pass rates", color: "text-orange-600" }
                        ].map((benefit, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center shadow-sm">
                              <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                            </div>
                            <span className="text-gray-700 font-medium">{benefit.text}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Right Content - Contact Options */}
                    <div>
                      <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2 text-center">Connect With Us</h3>
                        <p className="text-gray-600 text-center mb-6">
                          Speak with our NCLEX experts and take the first step towards your nursing career
                        </p>

                        {/* Contact Buttons */}
                        <div className="space-y-4">
                          {/* WhatsApp Chat Button */}
                          <motion.a
                            href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20NCLEX%20preparation%20programs"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <MessageCircle className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <div className="text-sm font-medium opacity-90">Chat Now on</div>
                              <div className="font-bold">WhatsApp</div>
                            </div>
                            <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                          </motion.a>

                          {/* Phone Call Button */}
                          <motion.a
                            href="tel:+61478320397"
                            className="flex items-center justify-center gap-3 w-full bg-gradient-to-r from-nai-highlight to-nai-teal hover:from-nai-teal hover:to-nai-deep-teal text-white px-6 py-4 rounded-xl font-bold text-lg transition-all duration-300 shadow-lg hover:shadow-xl group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                              <Phone className="w-5 h-5" />
                            </div>
                            <div className="text-left">
                              <div className="text-sm font-medium opacity-90">Call Now</div>
                              <div className="font-bold">+61 478 320 397</div>
                            </div>
                            <ArrowRight className="w-5 h-5 ml-auto group-hover:translate-x-1 transition-transform" />
                          </motion.a>

                          {/* Email Option */}
                          <motion.a
                            href="mailto:admin@nurseassistinternational.com?subject=NCLEX%20Inquiry"
                            className="flex items-center justify-center gap-3 w-full bg-white hover:bg-gray-50 text-gray-700 px-6 py-3 rounded-xl font-semibold border-2 border-gray-200 hover:border-nai-teal transition-all duration-300 group"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <GraduationCap className="w-5 h-5 text-nai-teal" />
                            <span>Email Our Team</span>
                            <ArrowRight className="w-4 h-4 ml-auto group-hover:translate-x-1 transition-transform text-nai-teal" />
                          </motion.a>
                        </div>

                        {/* Additional Info */}
                        <div className="mt-6 pt-6 border-t border-gray-100">
                          <div className="grid grid-cols-2 gap-4 text-center">
                            <div className="bg-nai-soft rounded-lg p-3">
                              <div className="text-2xl font-bold text-nai-teal mb-1">24/7</div>
                              <div className="text-xs text-gray-600">Support Available</div>
                            </div>
                            <div className="bg-nai-soft rounded-lg p-3">
                              <div className="text-2xl font-bold text-nai-teal mb-1">Free</div>
                              <div className="text-xs text-gray-600">Consultation</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Success Record */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16 bg-gradient-to-r from-gray-50 to-nai-highlight/5 rounded-2xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="px-4 sm:px-6 lg:px-8 xl:px-12">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Star className="w-4 h-4" />
                  Success Record
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our NCLEX Success Record</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Proven results with the Next Generation NCLEX - helping international nurses achieve their US licensure dreams
                </p>
              </div>

              <div className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-2xl p-8 lg:p-12 text-white">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                      <Award className="w-10 h-10 text-white" />
            </div>
              <div>
                <div className="text-4xl font-bold mb-2">Outstanding</div>
                <p className="opacity-90">Success Stories</p>
              </div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                      <Users className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Thousands</div>
                <p className="opacity-90">Dreams Achieved</p>
              </div>
                  </div>
                  <div className="space-y-4">
                    <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto">
                      <Heart className="w-10 h-10 text-white" />
              </div>
              <div>
                <div className="text-4xl font-bold mb-2">Exceptional</div>
                <p className="opacity-90">Student Experience</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* NCLEX Student Success Stories */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16 bg-gradient-to-br from-nai-soft to-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  NCLEX Success Stories
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Discover how our students conquered the Next Generation NCLEX with NAI's expert training
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    name: "Abhay Sharma",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Abhay Sharma.webp'),
                    quote: "Fantastic experience with NAI's NCLEX preparation program. The instructors are highly qualified and provide personalized attention."
                  },
                  {
                    name: "Airi Sano", 
                    image: getGalleryImageUrl('NAI GALLERY/Students/Airi Sano.webp'),
                    quote: "NAI provided excellent NCLEX training with experienced instructors who are always ready to help."
                  },
                  {
                    name: "Aneesha Gottamukkala",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Aneesha Gottamukkala.webp'), 
                    quote: "Thank you NAI for the comprehensive NCLEX training. The structured approach and expert guidance helped me pass my exam successfully."
                  },
                  {
                    name: "Ghah Eukeria",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Ghah Eukeria.webp'),
                    quote: "NAI provided exceptional NCLEX training with experienced instructors who genuinely care about student success."
                  },
                  {
                    name: "Jannis",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Jannis.webp'),
                    quote: "Thank you NAI team for the excellent support and guidance. The NCLEX training program is comprehensive and well-structured."
                  },
                  {
                    name: "Linisha Parajuli",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Linisha Parajuli.webp'),
                    quote: "Excellent training experience with NAI. The NCLEX preparation program is comprehensive and the instructors provide personalized attention."
                  }
                ].map((testimonial, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-nai-highlight/20">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                        <div className="flex items-center gap-2 text-sm text-gray-600">
                          <span>NCLEX</span>
                          <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            PASSED
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-700 italic leading-relaxed text-sm">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex text-yellow-400 mt-3">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="text-center">
                <motion.a
                  href="/pages/testimonials"
                  className="inline-flex items-center gap-2 bg-nai-highlight text-white px-6 py-3 rounded-lg font-semibold hover:bg-nai-deep-teal transition-colors duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View All Success Stories
                  <ArrowRight className="w-4 h-4" />
                </motion.a>
              </div>
            </div>
          </motion.section>

          {/* FAQ Section with Intake Dates */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.3 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Find answers to common questions about the Next Generation NCLEX and our preparation program</p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-3 gap-8">
              {/* FAQ Column - Takes 2/3 width */}
              <div className="xl:col-span-2 space-y-4">
                {faqData.map((faq, index) => (
                  <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                    >
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <div className="flex-shrink-0">
                        {expandedFAQ === index ? (
                          <Minus className="w-5 h-5 text-gray-500" />
                        ) : (
                          <Plus className="w-5 h-5 text-gray-500" />
                        )}
                      </div>
                    </button>
                    
                    {expandedFAQ === index && (
                      <motion.div 
                        className="px-6 pb-6"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <div className="bg-gray-50 rounded-lg p-4 border-l-4 border-nai-highlight">
                          <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                        </div>
                      </motion.div>
                    )}
                  </div>
                ))}
                
                {/* More FAQs Button */}
                <div className="mt-6 text-center">
                  <motion.a
                    href="/pages/nclex-ngn-faq"
                    className="inline-flex items-center gap-2 bg-nai-highlight text-white px-8 py-4 rounded-xl font-semibold hover:bg-nai-deep-teal transition-all duration-300 shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <BookOpen className="w-5 h-5" />
                    More FAQs
                  </motion.a>
                </div>
              </div>

              {/* Intake Dates Sidebar - Takes 1/3 width */}
              <div className="xl:col-span-1">
                <motion.div
                  className="bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl p-6 shadow-lg sticky top-24"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 1.4 }}
                >
                  <div className="text-center mb-5">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">NCLEX-NGN</h3>
                    <p className="text-white/90 text-sm">Intake Dates 2025</p>
                  </div>

                  <div className="space-y-2 mb-5">
                    {[
                      'January 2025',
                      'February 2025',
                      'March 2025',
                      'April 2025',
                      'May 2025',
                      'June 2025'
                    ].map((month, index) => (
                      <motion.div
                        key={index}
                        className="bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 border border-white/20 hover:bg-white/20 transition-all duration-300"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: 1.5 + (index * 0.08) }}
                      >
                        <div className="text-white font-medium text-center">{month}</div>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20enroll%20in%20NCLEX-NGN%20preparation%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-white text-nai-highlight px-6 py-3 rounded-lg font-bold text-center transition-all duration-300 flex items-center justify-center gap-2 hover:bg-gray-50 shadow-md hover:shadow-lg"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Chat with us now
                  </a>
                </motion.div>
              </div>
            </div>
          </motion.section>


          {/* Final CTA */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.4 }}
          >
            <div className="text-center">
              <div className="relative bg-gradient-to-br from-nai-highlight via-nai-deep-teal to-nai-teal rounded-2xl p-6 md:p-8 lg:p-12 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-20">
                  <div className="w-full h-full bg-repeat" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Cpath d='M20 20c0 11.046-8.954 20-20 20v-40c11.046 0 20 8.954 20 20z'/%3E%3C/g%3E%3C/svg%3E")`
                  }}></div>
                </div>
                
                <div className="relative z-10 text-white">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-8">
                    <Brain className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-6">Ready to Conquer the NGN?</h2>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Join thousands of successful international nurses who passed their Next Generation NCLEX with our expert guidance. 
                    Master clinical judgment and achieve your US nursing license.
                  </p>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full max-w-4xl mx-auto">
                    {[
                      { number: "6", label: "CJ Steps" },
                      { number: "4", label: "Question Types" },
                      { number: "5", label: "Hours Max" },
                      { number: "Expert", label: "Training" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a 
                      href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20enroll%20in%20your%20NCLEX%20preparation%20course"
              target="_blank"
              rel="noopener noreferrer"
                      className="bg-white text-nai-highlight px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-3 shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-6 h-6" />
                      Start NCLEX Prep Today
                    </motion.a>
                    <motion.a
                      href="tel:+61478320397"
                      className="bg-white/10 backdrop-blur-sm text-white px-10 py-5 rounded-lg font-semibold text-xl border border-white/20 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-3"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Phone className="w-6 h-6" />
                      Call: +61 478 320 397
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </>
  )
}

export default NCLEXPage