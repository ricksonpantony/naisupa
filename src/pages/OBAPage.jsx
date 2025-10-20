import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { CheckCircle, BookOpen, Target, Users, Award, Clock, Download, Star, Shield, Heart, TrendingUp, MessageCircle, Phone, Stethoscope, Brain, GraduationCap, ArrowRight, Globe, Building, UserCheck } from 'lucide-react'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../utils/imageStorage'

const OBAPage = () => {

  const obaComponents = [
    {
      title: 'Written Assessment',
      description: 'Comprehensive knowledge evaluation covering nursing theory and clinical applications',
      icon: BookOpen,
      level: 'Theory'
    },
    {
      title: 'Clinical Simulation',
      description: 'Hands-on practical assessment in simulated clinical environments',
      icon: Target,
      level: 'Practical'
    },
    {
      title: 'Professional Portfolio',
      description: 'Documentation of professional experience and continuing education',
      icon: Users,
      level: 'Documentation'
    },
    {
      title: 'Continuous Assessment',
      description: 'Ongoing evaluation throughout the OBA preparation program',
      icon: Clock,
      level: 'Progressive'
    }
  ]

  const preparationFeatures = [
    {
      title: 'Comprehensive Study Materials',
      description: 'Expertly crafted resources covering all OBA assessment areas and AHPRA competency standards',
      icon: BookOpen
    },
    {
      title: 'Expert Mentorship Program',
      description: 'One-on-one guidance from experienced Australian registered nurses throughout your journey',
      icon: Users
    },
    {
      title: 'Proven Success Rate',
      description: '92% of our OBA students successfully achieve their Australian nursing registration',
      icon: Award
    },
    {
      title: 'Practical Assessment Training',
      description: 'Hands-on preparation for clinical simulation components with real-world scenarios',
      icon: Target
    },
    {
      title: 'Portfolio Development',
      description: 'Professional guidance in creating comprehensive portfolios that meet AHPRA standards',
      icon: Shield
    },
    {
      title: 'Continuous Support',
      description: 'Ongoing assessment and feedback throughout your preparation journey',
      icon: Heart
    }
  ]

  return (
    <>
      <Helmet>
        <title>OBA – Outcome Based Assessment | OBA Preparation Course Australia | NAI</title>
        <meta name="description" content="Best OBA preparation course in Australia. Expert training for internationally qualified nurses with 92% success rate. Comprehensive assessment preparation. Enroll now!" />
        <link rel="canonical" href="https://nurseassistinternational.com/pages/oba" />
        
        {/* Open Graph */}
        <meta property="og:title" content="OBA – Outcome Based Assessment | OBA Preparation Course Australia | NAI" />
        <meta property="og:description" content="Best OBA preparation course in Australia. Expert training for internationally qualified nurses with 92% success rate. Comprehensive assessment preparation." />
        <meta property="og:url" content="https://nurseassistinternational.com/pages/oba" />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://nurseassistinternational.com/Images/A_group_of_professional_nurses_in_teal_scrubs_diverse_in_ethnicity_and_gender_standing_together_confidently_with_warm_smiles._Some_nurses_may_hold_clipboards_stethoscopes_or_tablets_t.webp" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Course",
            "name": "OBA Preparation Course",
            "description": "Outcome Based Assessment preparation for internationally qualified nurses seeking Australian registration",
            "provider": {
              "@type": "Organization",
              "name": "Nurse Assist International"
            },
            "courseMode": ["online", "in-person"],
            "educationalLevel": "Professional",
            "audience": {
              "@type": "Audience",
              "audienceType": "International Nurses"
            }
          })}
        </script>
      </Helmet>

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
                    <Users className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex gap-3">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                      <span className="text-xs font-semibold text-white">AHPRA Approved</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                      <span className="text-xs font-semibold text-white">92% Success Rate</span>
                    </div>
                  </div>
                </div>

                {/* Course Title */}
                <div className="mb-8">
                  <div className="text-sm text-white/80 font-semibold mb-2">NAI-OBA –</div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    Outcome Based Assessment
                  </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Comprehensive OBA preparation program for internationally qualified nurses 
                    seeking Australian registration through AHPRA's assessment pathway.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8 w-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">11 Weeks</div>
                    <div className="text-sm text-white/80">Intensive Program</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">2 Stages</div>
                    <div className="text-sm text-white/80">NGN + OSCE</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20OBA%20preparation%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-nai-highlight px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Start Your Journey
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
                      alt="OBA Training - Professional Nurses Team"
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
                        <div className="font-bold text-gray-900">92%</div>
                        <div className="text-sm text-gray-600">Success Rate</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-nai-highlight/10 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-nai-highlight" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">AHPRA</div>
                        <div className="text-sm text-gray-600">Approved</div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

          {/* What is OBA - Enhanced */}
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
                  <Users className="w-4 h-4" />
                  Comprehensive Assessment
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is Outcome Based Assessment?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Outcome Based Assessment approach is a type of evaluative method set by the Nursing and Midwifery Board of Australia (NMBA) 
                  in March 2020 to assess a learner's knowledge, skills and attributes in contributing to the care of Australian nationals. 
                  The Nursing and Midwifery Board of Australia (NMBA) undertakes functions to regulate the practice of nursing and midwifery 
                  in Australia, and one of its key roles is to protect the public.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The NMBA does this by developing registration standards, professional codes, guidelines, and standards for practice which 
                  together establish the requirements for the professional and safe practice of nurses and midwives in Australia. One such 
                  strategy was to move to an outcomes-based assessment pathway for internationally qualified nurses and midwives.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Nursing and Midwifery Board of Australia (NMBA's), together with the Australian Health Practitioner Regulation Agency 
                  (AHPRA) took extensive research in 2014 that explores the factors and goals of the OBA as a permanent and consistent approach 
                  in assessing internationally qualified nurses who have the relevant but not substantially equal to that of the Australian 
                  approved qualification.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  The OBA took effect in March 2020 and replaced the need for a bridging program. The process assesses knowledge, skills and 
                  competence expected of a graduate level Australian nurse.
                </p>
                
                {/* OBA Process Includes */}
                <div className="bg-nai-highlight/5 rounded-xl p-6 mb-6">
                  <h3 className="font-bold text-gray-900 mb-4 text-lg">OBA Process Includes:</h3>
                  <div className="space-y-3">
                    {[
                      { icon: BookOpen, text: "Assessment of the cognitive component (Multiple-Choice Question - MCQ examination, also known as Next Generation NCLEX)", color: "text-blue-600" },
                      { icon: Target, text: "Behavioural test (Objective Structured Clinical Examination – OSCE)", color: "text-green-600" },
                      { icon: Users, text: "Orientation program", color: "text-purple-600" }
                    ].map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <benefit.icon className={`w-5 h-5 ${benefit.color} flex-shrink-0 mt-0.5`} />
                        <span className="text-gray-700">{benefit.text}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Outcome Based Assessment (OBA) is a two-step process of assessment for internationally qualified nurses and midwives (IQNMs). 
                  The first stage will test the nurse's knowledge through Next Generation NCLEX (NGN) examination. The second stage is an 
                  assessment of a nurse's behavioural aspect through the Objective Structured Clinical Examination (OSCE).
                </p>
                
                <p className="text-lg text-gray-700 leading-relaxed">
                  The OBA Training and Education provided by Nurse Assist International prepares you for OBA comprising of a multiple-choice 
                  question (MCQ) and Objective Structured Clinical Examination (OSCE). This is an intensive 11 week program designed for IQNs 
                  in preparation for the Outcome Based Assessment. The training will equip qualified nurses with strong nursing knowledge and 
                  clinical skills to succeed in the OBA.
                </p>
              </div>
              
              {/* OBA Components Visual */}
              <div className="relative">
                <div className="bg-gradient-to-br from-nai-highlight/10 to-nai-deep-teal/10 rounded-2xl p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">OBA Components</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {[
                      { icon: BookOpen, label: "Written Assessment", color: "bg-blue-100 text-blue-600" },
                      { icon: Target, label: "Clinical Simulation", color: "bg-green-100 text-green-600" },
                      { icon: Users, label: "Professional Portfolio", color: "bg-purple-100 text-purple-600" },
                      { icon: Clock, label: "Continuous Assessment", color: "bg-orange-100 text-orange-600" }
                    ].map((component, index) => (
                      <div key={index} className="text-center p-4 bg-white rounded-lg shadow-sm">
                        <div className={`w-12 h-12 ${component.color} rounded-lg flex items-center justify-center mx-auto mb-3`}>
                          <component.icon className="w-6 h-6" />
                        </div>
                        <div className="text-sm font-semibold text-gray-900">{component.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                {/* Floating Excellence Badge */}
                <div className="absolute -bottom-4 -right-4 bg-nai-highlight rounded-xl p-4 shadow-xl text-white">
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">NAI</div>
                    <div className="text-xs">Excellence</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-10 bg-nai-highlight/5 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Why Choose NAI for OBA Preparation?</h3>
              <p className="text-gray-700">
                NAI provides the best OBA Preparation Course in Australia with expertly crafted course materials, 
                comprehensive mentorship, and a proven track record of helping international nurses achieve their Australian registration dreams.
              </p>
            </div>
          </motion.section>

          {/* Why OBA Preparatory Classes are Necessary - Full Width Redesign */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-nai-highlight/5 via-white to-nai-deep-teal/5"></div>
            
            <div className="relative z-10 px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              {/* Header */}
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-nai-highlight text-white px-6 py-2 rounded-full text-sm font-semibold mb-6 shadow-lg">
                  <Award className="w-5 h-5" />
                  Why NAI?
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                  Why is Outcome Based Assessment<br className="hidden md:block" /> Preparatory Classes Necessary?
                </h2>
                <div className="w-24 h-1 bg-gradient-to-r from-nai-highlight to-nai-deep-teal mx-auto rounded-full"></div>
              </div>
              
              {/* Content Grid */}
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center mb-12">
                {/* Left Column - Main Content */}
                <div className="space-y-6">
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-start gap-4 mb-6">
                      <div className="w-12 h-12 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <Building className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Professional Registration Support</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Nurse Assist International will assist internationally qualified nurses to register in Australia as an RN. 
                          IQNMs who are assessed as holding a qualification that is relevant but not substantially equivalent to the 
                          Australian approved qualification will be required to undergo multiple-choice question (MCQ) and Objective 
                          Structured Clinical Examination (OSCE).
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-nai-teal to-nai-deep-teal rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                        <GraduationCap className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Tailor-Made Programs</h3>
                        <p className="text-gray-700 leading-relaxed">
                          Nurse Assist International has tailor-made Outcome Based Assessment (Next Generation NCLEX and OSCE) preparatory 
                          programs delivered by our talented educators to make your journey a memorable and intuitive one.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Right Column - Our Philosophy */}
                <div>
                  <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-nai-highlight/30 h-full">
                    {/* Header with Icon */}
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b-2 border-nai-highlight/20">
                      <div className="w-16 h-16 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl flex items-center justify-center shadow-lg flex-shrink-0">
                        <Heart className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-2xl md:text-3xl font-bold text-gray-900">Our Philosophy</h3>
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-6">
                      {/* Mission Statement */}
                      <div className="bg-gradient-to-br from-nai-highlight/10 to-nai-deep-teal/5 rounded-xl p-6 border-l-4 border-nai-highlight">
                        <p className="text-lg font-semibold text-gray-900 mb-3 leading-relaxed">
                          We believe in transitioning new nurses to practice and work together with them, assisting them in attaining 
                          their goals; hence, our name – 'Nurse Assist'.
                        </p>
                        <p className="text-gray-700 leading-relaxed">
                          Our course modules are designed in an evidence-based approach to assist IQNMs in acquiring the knowledge, 
                          skills and personal attributes necessary for safe, proficient and effective nursing practice.
                        </p>
                      </div>
                      
                      {/* Key Features Grid */}
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { icon: CheckCircle, label: "Evidence-Based", color: "from-green-500 to-green-600" },
                          { icon: Users, label: "Expert Educators", color: "from-blue-500 to-blue-600" },
                          { icon: Target, label: "Goal-Oriented", color: "from-orange-500 to-orange-600" },
                          { icon: Award, label: "Quality Training", color: "from-purple-500 to-purple-600" }
                        ].map((item, idx) => (
                          <div key={idx} className="bg-white rounded-xl p-4 border-2 border-gray-100 hover:border-nai-highlight/50 transition-all duration-300 text-center group hover:shadow-md">
                            <div className={`w-12 h-12 bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                              <item.icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Bottom CTA Bar */}
              <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border-2 border-nai-highlight/20">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl flex items-center justify-center shadow-lg">
                      <Stethoscope className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-1">Ready to Start Your OBA Journey?</h3>
                      <p className="text-gray-600">Join thousands of successful international nurses</p>
                    </div>
                  </div>
                  <motion.a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20OBA%20preparation%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal text-white px-8 py-4 rounded-xl font-bold hover:shadow-xl transition-all duration-300 flex items-center gap-2 whitespace-nowrap"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Get Started Today
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.section>

          {/* AHPRA Self-Check Section */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.35 }}
          >
            <div className="max-w-4xl mx-auto text-center">
              <div className="bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl p-8 md:p-12 text-white shadow-xl">
                <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <UserCheck className="w-10 h-10 text-white" />
                </div>
                
                <h2 className="text-3xl md:text-4xl font-bold mb-4">Check Yourself Out for Free on AHPRA</h2>
                <p className="text-xl text-white/90 mb-2">No paperwork or English proficiency exam required.</p>
                <p className="text-lg text-white/80 mb-8">
                  Simply self-check at no cost. Start your self-check to see whether you qualify.
                </p>
                
                <motion.a
                  href="https://www.nursingmidwiferyboard.gov.au/Registration-and-Endorsement/International/Completing-the-Self-check.aspx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-white text-nai-highlight px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Globe className="w-6 h-6" />
                  Start AHPRA Self-Check
                  <ArrowRight className="w-5 h-5" />
                </motion.a>
                
                <p className="text-sm text-white/70 mt-6">
                  Official AHPRA/NMBA Self-Check Tool
                </p>
              </div>
            </div>
          </motion.section>

          {/* OBA Components Detailed */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Assessment Components
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">OBA Assessment Areas</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Understanding the four core components of Outcome Based Assessment and how NAI prepares you for success in each area.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
              {obaComponents.map((component, index) => {
                const levelColors = {
                  'Theory': 'bg-blue-100 text-blue-800 border-blue-200',
                  'Practical': 'bg-green-100 text-green-800 border-green-200',
                  'Documentation': 'bg-purple-100 text-purple-800 border-purple-200',
                  'Progressive': 'bg-orange-100 text-orange-800 border-orange-200'
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
                    {/* Component Header */}
                    <div className="text-center mb-4">
                      <div className="w-16 h-16 bg-nai-highlight/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                        <component.icon className="w-8 h-8 text-nai-highlight" />
                      </div>
                      <h3 className="font-bold text-gray-900 text-lg mb-2">{component.title}</h3>
                      <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${levelColors[component.level]}`}>
                        {component.level}
                      </span>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed text-center">
                      {component.description}
                    </p>
                    
                    {/* Assessment Focus */}
                    <div className="mt-4 pt-4 border-t border-gray-100">
                      <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>OBA Component</span>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Preparation Features - Enhanced */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16 relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-nai-highlight/5 rounded-3xl"></div>
            
            <div className="relative z-10">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  <Award className="w-4 h-4" />
                  Premium Preparation
                </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-4">OBA Preparation Features</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Comprehensive preparation program designed to ensure your success in all four OBA assessment components.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {preparationFeatures.map((feature, index) => (
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

          {/* Final CTA */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
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
                    <Users className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-6">Ready to Start Your OBA Journey?</h2>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Take the first step towards your Australian nursing registration with our comprehensive OBA preparation program. 
                    Join the 92% of our students who successfully achieve their dreams.
                  </p>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 w-full max-w-4xl mx-auto">
                    {[
                      { number: "92%", label: "Success Rate" },
                      { number: "11", label: "Weeks" },
                      { number: "2", label: "Stages" },
                      { number: "AHPRA", label: "Approved" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <motion.a 
                      href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20enroll%20in%20your%20OBA%20preparation%20course"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-white text-nai-highlight px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-3 shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-6 h-6" />
                      Start OBA Preparation
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

export default OBAPage