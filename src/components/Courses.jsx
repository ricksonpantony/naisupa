import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useNavigate } from 'react-router-dom'
import { ArrowRight, CheckCircle, Clock, Users, Award, BookOpen, Target, X, Star, Phone, MessageCircle } from 'lucide-react'

const Courses = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [selectedCourse, setSelectedCourse] = useState(null)
  const navigate = useNavigate()
  const IconComp = (selectedCourse?.icon) || Award

  // Lock body scroll when modal is open
  React.useEffect(() => {
    if (selectedCourse) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [selectedCourse])

  const courses = [
    {
      title: "Self Paced NCLEX Review",
      subtitle: "6 months access - Join anytime!",
      description: "Flexible self-paced NCLEX preparation with comprehensive study materials and practice tests. Perfect for busy nurses who need to study on their own schedule.",
      features: [
        "NCLEX NGN question bank",
        "CAT Mock and readiness test x5",
        "Online learning modules",
        "E book access",
        "Support in booking NCLEX Exam",
        "Pre reading materials",
        "Downloadable app from laptop or Smart phone"
      ],
      duration: "6 months",
      students: "Unlimited",
      color: "slate",
      icon: BookOpen,
      price: "$349",
      successRate: "Excellent",
      nextIntake: "Join anytime",
      includes: [
        "6 months access",
        "NCLEX NGN question bank",
        "CAT Mock and readiness test x5",
        "Online learning modules",
        "E book access",
        "Support in booking NCLEX Exam",
        "Pre reading materials",
        "Downloadable app from laptop or Smart phone"
      ],
      requirements: [
        "Bachelor's degree in nursing",
        "English proficiency",
        "Valid nursing license",
        "Commitment to self-paced study"
      ],
      priority: "Self Paced",
      disabled: true
    },
    {
      title: "NCLEX LIVE Review",
      subtitle: "Unlimited access - Join anytime!",
      description: "Most popular live interactive NCLEX preparation with expert educators, unlimited access to live sessions, and comprehensive support throughout your journey.",
      features: [
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
      ],
      duration: "Unlimited",
      students: "Small Groups",
      color: "emerald",
      icon: Award,
      price: "$1500",
      successRate: "Outstanding",
      nextIntake: "Join anytime",
      includes: [
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
      ],
      requirements: [
        "Bachelor's degree in nursing",
        "English proficiency",
        "Valid nursing license",
        "Commitment to live session attendance"
      ],
      priority: "Most Popular"
    },
    {
      title: "Comprehensive NCLEX & OSCE Review",
      subtitle: "Unlimited access - Join anytime!",
      description: "Our most comprehensive program combining live NCLEX sessions with extensive OSCE training, face-to-face sessions, and complete support for international nurses.",
      features: [
        "Unlimited online access to 24 weeks of LIVE sessions",
        "8 weeks of NCLEX NGN coaching",
        "Access to live NCLEX NGN question bank",
        "Motivational and Polishing sessions x2",
        "CAT Mock and readiness test x10",
        "E book access",
        "Support in booking NCLEX Exam",
        "Pre reading NCLEX NGN materials",
        "Live with our best educators",
        "Weekly quizzes",
        "24×7 Free and unlimited lab access",
        "Unlimited access to online learning and face to face training in Melbourne, Sydney, Adelaide and Brisbane",
        "Individual MOCK readings Practical OSCE assessment",
        "Individual Personalised feedback for 10 Mock stations",
        "PR pathway and Job sponsorship assistance",
        "Visa and accommodation assistance for International nurses",
        "Free exclusively designed OSCE RN handbook"
      ],
      duration: "Unlimited",
      students: "Elite Groups",
      color: "purple",
      icon: Award,
      price: "$4200",
      successRate: "Premium",
      nextIntake: "Join anytime",
      includes: [
        "Unlimited online access to 24 weeks of LIVE sessions",
        "8 weeks of NCLEX NGN coaching",
        "Access to live NCLEX NGN question bank",
        "Motivational and Polishing sessions x2",
        "CAT Mock and readiness test x10",
        "E book access",
        "Support in booking NCLEX Exam",
        "Pre reading NCLEX NGN materials",
        "Live with our best educators",
        "Weekly quizzes",
        "24×7 Free and unlimited lab access",
        "Unlimited access to online learning and face to face training in Melbourne, Sydney, Adelaide and Brisbane",
        "Individual MOCK readings Practical OSCE assessment",
        "Individual Personalised feedback for 10 Mock stations",
        "PR pathway and Job sponsorship assistance",
        "Visa and accommodation assistance for International nurses",
        "Free exclusively designed OSCE RN handbook"
      ],
      requirements: [
        "Internationally qualified nurse",
        "English proficiency",
        "Valid nursing license",
        "Commitment to comprehensive live and face-to-face training"
      ],
      priority: "Comprehensive"
    },
    {
      title: "Extensive NCLEX & OSCE Review",
      subtitle: "6 months access - Join anytime!",
      description: "Comprehensive program combining NCLEX preparation with OSCE training, including face-to-face training in major Australian cities and unlimited lab access.",
      features: [
        "NCLEX NGN question bank",
        "CAT Mock and readiness test x3",
        "Online learning modules",
        "E book access",
        "Support in booking NCLEX Exam",
        "Pre reading materials",
        "Downloadable app from laptop or Smart phone",
        "Unlimited access to online learning and face to face training in Melbourne, Sydney, Adelaide and Brisbane",
        "24×7 Free and unlimited lab access",
        "Individual MOCK readings Practical OSCE assessment",
        "Individual Personalised feedback for 10 Mock stations",
        "PR pathway and Job sponsorship assistance",
        "Visa and accommodation assistance for International nurses",
        "Free exclusively designed OSCE RN handbook"
      ],
      duration: "6 months",
      students: "Focused Groups",
      color: "indigo",
      icon: Target,
      price: "$2999",
      successRate: "Exceptional",
      nextIntake: "Join anytime",
      includes: [
        "NCLEX NGN question bank",
        "CAT Mock and readiness test x3",
        "Online learning modules",
        "E book access",
        "Support in booking NCLEX Exam",
        "Pre reading materials",
        "Downloadable app from laptop or Smart phone",
        "Unlimited access to online learning and face to face training in Melbourne, Sydney, Adelaide and Brisbane",
        "24×7 Free and unlimited lab access",
        "Individual MOCK readings Practical OSCE assessment",
        "Individual Personalised feedback for 10 Mock stations",
        "PR pathway and Job sponsorship assistance",
        "Visa and accommodation assistance for International nurses",
        "Free exclusively designed OSCE RN handbook"
      ],
      requirements: [
        "Internationally qualified nurse",
        "English proficiency",
        "Valid nursing license",
        "Commitment to comprehensive training"
      ],
      priority: "Extensive",
      disabled: true
    }
  ]

  const getColorClasses = (color) => {
    const colorMap = {
      slate: {
        bg: 'bg-gradient-to-br from-slate-600 to-slate-800',
        border: 'border-slate-300',
        text: 'text-slate-600',
        accent: 'text-slate-800',
        icon: 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-700',
        button: 'bg-gradient-to-r from-slate-600 to-slate-800 hover:from-slate-700 hover:to-slate-900 text-white shadow-lg'
      },
      emerald: {
        bg: 'bg-gradient-to-br from-emerald-500 to-teal-600',
        border: 'border-emerald-300',
        text: 'text-emerald-600',
        accent: 'text-emerald-800',
        icon: 'bg-gradient-to-br from-emerald-100 to-emerald-200 text-emerald-700',
        button: 'bg-gradient-to-r from-emerald-500 to-teal-600 hover:from-emerald-600 hover:to-teal-700 text-white shadow-lg'
      },
      indigo: {
        bg: 'bg-gradient-to-br from-indigo-500 to-purple-600',
        border: 'border-indigo-300',
        text: 'text-indigo-600',
        accent: 'text-indigo-800',
        icon: 'bg-gradient-to-br from-indigo-100 to-indigo-200 text-indigo-700',
        button: 'bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white shadow-lg'
      },
      purple: {
        bg: 'bg-gradient-to-br from-purple-500 to-pink-600',
        border: 'border-purple-300',
        text: 'text-purple-600',
        accent: 'text-purple-800',
        icon: 'bg-gradient-to-br from-purple-100 to-purple-200 text-purple-700',
        button: 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white shadow-lg'
      }
    }
    return colorMap[color] || colorMap.slate
  }

  return (
    <>
      {/* Course Overview Section */}
      <section className="py-20 bg-gradient-to-br from-white via-gray-50/30 to-white relative overflow-hidden">
        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* Hero Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-nai-highlight to-nai-teal text-white rounded-full mb-8 shadow-lg">
              <span className="text-sm font-bold tracking-wide">🎓 COMPREHENSIVE NURSING EDUCATION</span>
            </div>
            <h2 className="text-5xl md:text-6xl font-black text-gray-900 mb-6 tracking-tight">
              <span className="bg-gradient-to-r from-nai-highlight via-nai-teal to-nai-deep-teal bg-clip-text text-transparent">
                Master Your
              </span>
              <br />
              <span className="text-gray-800">Nursing Career</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
              From NCLEX preparation to OSCE mastery, we offer comprehensive programs designed to help international nurses achieve their Australian registration dreams with confidence and success.
            </p>
          </motion.div>

          {/* Course Area Cards - Modern Full-Width Design */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16 w-full max-w-7xl mx-auto">
            {/* NCLEX Preparation */}
            <motion.div
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-nai-highlight/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {/* Header Section */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-nai-highlight transition-colors duration-300">
                  NCLEX Preparation
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Master the NCLEX-RN with comprehensive preparation programs and expert coaching.
                </p>
              </div>
              
              {/* Features Section */}
              <div className="flex-grow mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-highlight flex-shrink-0" />
                      <span>NGN Question Banks</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-highlight flex-shrink-0" />
                      <span>Live & Self-paced Options</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-highlight flex-shrink-0" />
                      <span>Expert Coaching</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-highlight flex-shrink-0" />
                      <span>Mock Exams & Practice Tests</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Pricing Section */}
              <div className="text-center mb-4">
                <div className="text-xl font-bold text-nai-highlight mb-1">From $1,500</div>
                <div className="text-xs text-gray-500">Unlimited access • Payment plans available</div>
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={() => navigate('/pages/nclex-ngn#nclex-courses')}
                className="w-full py-3 px-4 bg-gradient-to-r from-nai-highlight to-nai-deep-teal hover:from-nai-deep-teal hover:to-nai-highlight text-white rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* OSCE Training */}
            <motion.div
              className="group relative bg-white rounded-2xl p-6 border-2 border-nai-teal/40 hover:border-nai-teal/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              {/* Most Popular Badge */}
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-10">
                <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-4 py-1 rounded-full text-xs font-bold shadow-lg">
                  🏆 Most Popular
                </div>
              </div>
              
              {/* Header Section */}
              <div className="text-center mb-6 pt-2">
                <div className="w-16 h-16 bg-gradient-to-br from-nai-teal to-nai-deep-teal rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Target className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-nai-teal transition-colors duration-300">
                  OSCE Training
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Australia's most comprehensive hands-on OSCE preparation with face-to-face training.
                </p>
              </div>
              
              {/* Features Section */}
              <div className="flex-grow mb-6">
                <div className="bg-nai-teal/5 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-teal flex-shrink-0" />
                      <span>Face-to-face Training</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-teal flex-shrink-0" />
                      <span>24/7 Lab Access</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-teal flex-shrink-0" />
                      <span>Individual Assessments</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-teal flex-shrink-0" />
                      <span>Australian RN Guidance</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Pricing Section */}
              <div className="text-center mb-4">
                <div className="text-xl font-bold text-nai-teal mb-1">From $2,700</div>
                <div className="text-xs text-gray-500">4 cities • Melbourne • Sydney • Adelaide • Brisbane</div>
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={() => navigate('/pages/osce-preparation')}
                className="w-full py-3 px-4 bg-gradient-to-r from-nai-teal to-nai-deep-teal hover:from-nai-deep-teal hover:to-nai-teal text-white rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Programs</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* OBA Pathway */}
            <motion.div
              className="group relative bg-white rounded-2xl p-6 border border-gray-200 hover:border-nai-deep-teal/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 h-full flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              {/* Header Section */}
              <div className="text-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-nai-deep-teal to-nai-highlight rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-nai-deep-teal transition-colors duration-300">
                  OBA Pathway
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Complete pathway to Australian nursing registration with expert guidance and support.
                </p>
              </div>
              
              {/* Features Section */}
              <div className="flex-grow mb-6">
                <div className="bg-gray-50 rounded-xl p-4">
                  <h4 className="font-semibold text-gray-900 mb-3 text-sm">Key Features:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-deep-teal flex-shrink-0" />
                      <span>AHPRA Registration Guidance</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-deep-teal flex-shrink-0" />
                      <span>Documentation Support</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-deep-teal flex-shrink-0" />
                      <span>Step-by-step Consultation</span>
                    </li>
                    <li className="flex items-center gap-2 text-xs text-gray-700">
                      <CheckCircle className="w-3 h-3 text-nai-deep-teal flex-shrink-0" />
                      <span>Ongoing Support</span>
                    </li>
                  </ul>
                </div>
              </div>
              
              {/* Info Section */}
              <div className="text-center mb-4">
                <div className="text-lg font-bold text-nai-deep-teal mb-1">Complete Support</div>
                <div className="text-xs text-gray-500">Personalized consultation • End-to-end assistance</div>
              </div>
              
              {/* CTA Button */}
              <button 
                onClick={() => navigate('/pages/oba')}
                className="w-full py-3 px-4 bg-gradient-to-r from-nai-deep-teal to-nai-highlight hover:from-nai-highlight hover:to-nai-deep-teal text-white rounded-xl font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2"
              >
                <span>Explore Pathway</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

          </div>


          {/* CTA Section */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <h3 className="text-3xl font-bold text-gray-900 mb-6">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Explore our comprehensive range of programs and find the perfect path to your nursing career success in Australia.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button 
                onClick={() => navigate('/courses')}
                className="bg-gradient-to-r from-nai-highlight to-teal-600 hover:from-nai-highlight/90 hover:to-teal-700 text-white px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-xl flex items-center gap-3 shadow-lg"
              >
                <span>Explore All Courses</span>
                <ArrowRight className="w-5 h-5" />
              </button>
              <button 
                onClick={() => navigate('/contact')}
                className="bg-white border-2 border-gray-200 hover:border-nai-highlight text-gray-700 hover:text-nai-highlight px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 transform hover:scale-105"
              >
                Book Free Consultation
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      <section ref={ref} className="py-16 bg-gradient-to-br from-gray-50 via-white to-nai-highlight/5 relative overflow-hidden">
        {/* Clean Theme Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-nai-highlight/3 via-transparent to-teal-500/3"></div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 relative z-10">
          {/* Compact Header Section */}
        <motion.div 
            className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center px-4 py-2 bg-nai-highlight/10 rounded-full mb-6">
              <span className="text-sm font-medium text-nai-highlight">Professional Training Programs</span>
          </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
              <span className="bg-gradient-to-r from-nai-highlight to-nai-teal bg-clip-text text-transparent">
                NCLEX Training
              </span>
              <span className="text-gray-800"> Excellence</span>
          </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience world-class NCLEX preparation with our comprehensive training programs designed for guaranteed success
          </p>
        </motion.div>

        {/* Courses Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-16">
            {courses.map((course, index) => (
              <motion.div
                key={index}
                className={`relative group h-full ${course.disabled ? 'cursor-not-allowed' : 'cursor-pointer'}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => {
                  if (!course.disabled) {
                    // Navigate to NCLEX page course section
                    navigate('/pages/nclex-ngn#nclex-courses')
                  }
                }}
              >
                {/* Priority Badge */}
                {course.priority === "Most Popular" && !course.disabled && (
                  <div className="absolute -top-3 left-4 z-20">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Most Popular
                    </div>
                  </div>
                )}
                
                {/* Disabled Badge */}
                {course.disabled && (
                  <div className="absolute -top-3 left-4 z-20">
                    <div className="bg-gray-500 text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg">
                      Currently Not Available
                    </div>
                  </div>
                )}
                
                <div className={`relative bg-gradient-to-br from-white via-nai-soft to-white rounded-2xl p-6 h-full flex flex-col transition-all duration-300 border border-nai-teal/20 ${course.disabled ? 'opacity-50 grayscale' : 'group-hover:border-nai-highlight group-hover:shadow-xl group-hover:-translate-y-1'} overflow-hidden`}>
                  {/* Premium Background Gradient */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
                    course.color === 'slate' ? 'bg-gradient-to-br from-nai-soft to-nai-teal/10' : 
                    course.color === 'emerald' ? 'bg-gradient-to-br from-nai-soft to-nai-highlight/10' : 
                    course.color === 'indigo' ? 'bg-gradient-to-br from-nai-soft to-nai-deep-teal/10' : 
                    'bg-gradient-to-br from-nai-soft to-nai-teal/15'
                  }`}></div>
                  
                  {/* Content */}
                  <div className="relative z-10 flex flex-col h-full">
                    {/* Header with Icon */}
                    <div className="flex items-start justify-between mb-4">
                      <div className={`w-12 h-12 ${
                        course.color === 'slate' ? 'bg-nai-teal/20 text-nai-deep-teal' : 
                        course.color === 'emerald' ? 'bg-nai-highlight/20 text-nai-highlight' : 
                        course.color === 'indigo' ? 'bg-nai-deep-teal/20 text-nai-deep-teal' : 
                        'bg-nai-teal/25 text-nai-teal'
                      } rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 shadow-sm`}>
                        <course.icon className="w-6 h-6" />
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-gray-900">{course.price}</div>
                        <div className="text-xs text-gray-500">Complete Program</div>
                      </div>
                    </div>
                    
                    {/* Title & Subtitle */}
                    <div className="mb-4">
                      <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-nai-highlight transition-colors duration-300">
                      {course.title}
                    </h3>
                      <p className="text-sm text-gray-600 font-medium">
                        {course.subtitle}
                      </p>
                    </div>
                    
                    {/* Quick Stats */}
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="bg-nai-teal/10 p-3 rounded-lg text-center border border-nai-teal/20">
                        <div className="text-sm font-bold text-nai-deep-teal">{course.duration}</div>
                        <div className="text-xs text-nai-teal">Access</div>
                      </div>
                      <div className="bg-nai-highlight/10 p-3 rounded-lg text-center border border-nai-highlight/20">
                        <div className="text-sm font-bold text-nai-highlight">Join</div>
                        <div className="text-xs text-nai-deep-teal">Anytime</div>
                      </div>
                  </div>
                  
                    {/* Key Features - Compact */}
                    <div className="flex-grow mb-4">
                      <h4 className="font-semibold text-gray-900 mb-3 text-sm">What's Included:</h4>
                    <ul className="space-y-2">
                        {course.features.slice(0, 4).map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-2">
                            <div className="w-4 h-4 bg-nai-highlight/20 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <CheckCircle className="w-2.5 h-2.5 text-nai-highlight" />
                          </div>
                            <span className="text-gray-600 text-xs leading-relaxed">{feature}</span>
                        </li>
                      ))}
                    </ul>
                      {course.features.length > 4 && (
                        <div className="mt-2 text-center">
                          <span className="text-xs text-nai-highlight font-semibold bg-nai-highlight/10 px-2 py-1 rounded-full">
                            +{course.features.length - 4} more features
                          </span>
                        </div>
                      )}
                  </div>
                  
                    {/* Additional Info */}
                    <div className="mb-4 p-3 bg-nai-soft rounded-lg border border-nai-teal/10">
                      <div className="flex justify-between items-center text-xs">
                        <span className="text-gray-600">Students: {course.students}</span>
                        <span className="text-nai-highlight font-semibold">✓ Support Included</span>
                      </div>
                    </div>
                    
                    {/* CTA Button - Compact */}
                    <button
                      type="button"
                      disabled={course.disabled}
                      onClick={(e) => {
                        e.stopPropagation()
                        if (!course.disabled) {
                          navigate('/pages/nclex-ngn#nclex-courses')
                        }
                      }}
                      className={`w-full py-3 px-4 rounded-lg font-semibold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-md ${
                        course.disabled 
                          ? 'bg-gray-400 cursor-not-allowed text-white' 
                          : 'bg-nai-highlight hover:bg-nai-highlight/90 text-white transform group-hover:scale-105'
                      }`}
                    >
                      {course.disabled ? 'Currently Not Available' : 'View Details'}
                      {!course.disabled && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />}
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
        </div>


        </div>
      </section>

      {/* Course Details Modal */}
      <AnimatePresence initial={false} mode="wait">
        {selectedCourse && (
          <motion.div 
            className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto z-[9999]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCourse(null)}
          >
              <motion.div
                className="bg-white rounded-2xl max-w-5xl w-full shadow-2xl relative max-h-[95vh] overflow-hidden"
                initial={{ opacity: 0, scale: 0.9, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
              >
                {/* Sticky Close Button */}
                <button
                  onClick={() => setSelectedCourse(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white hover:bg-gray-100 rounded-full flex items-center justify-center transition-all duration-200 shadow-lg z-50 border-2 border-gray-200"
                >
                  <X className="w-6 h-6 text-gray-700" />
                </button>
                
                {/* Scrollable Content Container */}
                <div className="overflow-y-auto max-h-[95vh]">
              {/* Modal Header with Gradient Background */}
              <div className="relative bg-gradient-to-r from-nai-highlight via-nai-teal to-nai-deep-teal p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center flex-shrink-0 border border-white/30">
                    <IconComp className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-grow min-w-0">
                    <h2 className="text-3xl font-bold mb-2 break-words">{selectedCourse?.title || 'Course Details'}</h2>
                    {selectedCourse?.subtitle && <p className="text-white/90 mb-3 text-lg">{selectedCourse?.subtitle}</p>}
                    <div className="flex flex-wrap items-center gap-4 text-sm">
                      {selectedCourse?.duration && (
                        <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Clock className="w-4 h-4" />
                          {selectedCourse?.duration}
                        </span>
                      )}
                      {selectedCourse?.students && (
                        <span className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                          <Users className="w-4 h-4" />
                          {selectedCourse?.students}
                        </span>
                      )}
                      {selectedCourse?.price && (
                        <span className="text-3xl font-bold bg-white/20 backdrop-blur-sm px-4 py-1 rounded-full">{selectedCourse?.price}</span>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Content */}
              <div className="p-6 bg-white">
                {/* Description */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-nai-highlight to-nai-teal rounded-full"></div>
                    Program Overview
                  </h3>
                  <p className="text-gray-700 leading-relaxed text-base bg-gray-50 p-4 rounded-lg border-l-4 border-nai-highlight">
                    {selectedCourse?.description || 'Detailed program information will appear here.'}
                  </p>
                </div>

                {/* What's Included */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-nai-highlight to-nai-teal rounded-full"></div>
                    What's Included
                  </h3>
                  {Array.isArray(selectedCourse?.includes) && selectedCourse?.includes?.length > 0 ? (
                    <div className="grid md:grid-cols-2 gap-3 bg-gradient-to-br from-nai-soft to-white p-4 rounded-xl border border-nai-teal/20">
                      {(selectedCourse?.includes || []).map((item, index) => (
                        <div key={index} className="flex items-start gap-3 bg-white p-3 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
                          <div className="w-5 h-5 bg-gradient-to-br from-nai-highlight to-nai-teal rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-700 text-sm font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="text-sm text-gray-500 italic">No inclusions data available.</div>
                  )}
                </div>

                {/* Requirements */}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                    <div className="w-1 h-6 bg-gradient-to-b from-nai-highlight to-nai-teal rounded-full"></div>
                    Requirements
                  </h3>
                  <div className="bg-gradient-to-br from-orange-50 to-yellow-50 rounded-xl p-4 border border-orange-200">
                    {Array.isArray(selectedCourse?.requirements) && selectedCourse?.requirements?.length > 0 ? (
                      <ul className="space-y-2">
                        {(selectedCourse?.requirements || []).map((req, index) => (
                          <li key={index} className="flex items-start gap-3">
                            <div className="w-2 h-2 bg-gradient-to-br from-nai-highlight to-nai-teal rounded-full flex-shrink-0 mt-2"></div>
                            <span className="text-gray-800 text-sm font-medium">{req}</span>
                          </li>
                        ))}
                      </ul>
                    ) : (
                      <div className="text-sm text-gray-500 italic">No specific requirements listed.</div>
                    )}
                  </div>
                </div>

                {/* Success Rate & Next Intake */}
                <div className="mb-6">
                  <div className="bg-gradient-to-r from-nai-highlight/10 via-nai-teal/10 to-nai-deep-teal/10 rounded-xl p-6 border-2 border-nai-teal/30">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="text-center md:text-left">
                        <div className="flex items-center gap-2 mb-2">
                          <Star className="w-5 h-5 text-nai-highlight" />
                          <h4 className="font-bold text-gray-900">Success Rate</h4>
                        </div>
                        <p className="text-nai-highlight font-bold text-3xl">{selectedCourse?.successRate || '—'}</p>
                      </div>
                      <div className="text-center md:text-right">
                        <div className="flex items-center justify-center md:justify-end gap-2 mb-2">
                          <Clock className="w-5 h-5 text-nai-teal" />
                          <h4 className="font-bold text-gray-900">Next Intake</h4>
                        </div>
                        <p className="font-bold text-gray-900 text-2xl">{selectedCourse?.nextIntake || 'Contact us'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="border-t border-gray-200 p-6 bg-gray-50">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Ready to Get Started?</h3>
                  <p className="text-sm text-gray-600">Contact us now to enroll or get more information about this program</p>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* WhatsApp Button */}
                  <button 
                    onClick={() => {
                      window.open('https://wa.me/61470655503?text=Hi%2C%20I%20am%20interested%20in%20the%20' + encodeURIComponent(selectedCourse?.title || ''), '_blank')
                    }}
                    className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </button>
                  
                  {/* Call Button */}
                  <button 
                    onClick={() => {
                      window.location.href = 'tel:+61470655503'
                    }}
                    className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <Phone className="w-5 h-5" />
                    <span>Call Now</span>
                  </button>
                  
                  {/* Enroll Now Button */}
                  <button 
                    onClick={() => navigate('/contact')}
                    className="bg-gradient-to-r from-nai-highlight to-nai-teal hover:from-nai-teal hover:to-nai-highlight text-white py-3 px-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg transform hover:scale-105"
                  >
                    <span>Enroll Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
                
                {/* Close Button */}
                <button 
                  onClick={() => setSelectedCourse(null)}
                  className="w-full mt-3 px-6 py-2 border border-gray-300 text-gray-700 rounded-xl font-medium hover:bg-gray-100 transition-colors duration-200"
                >
                  Close
                </button>
              </div>
                </div>
              </motion.div>
            </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Courses
