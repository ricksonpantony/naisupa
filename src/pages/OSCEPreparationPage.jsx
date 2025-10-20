import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SeoHead from '../components/SeoHead'
import { courseJsonLd, breadcrumbJsonLd, BASE_DOMAIN } from '../seo/jsonld'
import { CheckCircle, Clock, Users, Award, BookOpen, Target, Calendar, DollarSign, Monitor, MapPin, Download, Plus, Minus, Star, Shield, Heart, TrendingUp, MessageCircle, Phone, Stethoscope, Brain, GraduationCap, ArrowRight, Globe, Building, UserCheck } from 'lucide-react'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../utils/imageStorage'

const OSCEPreparationPage = () => {
  const [expandedFAQ, setExpandedFAQ] = useState(null)

  const toggleFAQ = (index) => {
    setExpandedFAQ(expandedFAQ === index ? null : index)
  }

  const skillsEvaluated = [
    {
      skill: 'Hand Hygiene',
      description: 'Proper hand washing and sanitization techniques following WHO guidelines and Australian standards',
      icon: '🧼',
      level: 'Essential'
    },
    {
      skill: 'Drug Calculation',
      description: 'Accurate medication dosage calculations and unit conversions for safe patient care',
      icon: '🧮',
      level: 'Critical'
    },
    {
      skill: 'Aseptic Non-Touch Technique (ANTT)',
      description: 'Sterile procedures to prevent contamination during clinical procedures and invasive treatments',
      icon: '🧤',
      level: 'Advanced'
    },
    {
      skill: 'Medication Administration',
      description: 'Safe preparation and administration of medications via various routes following AHPRA guidelines',
      icon: '💊',
      level: 'Critical'
    },
    {
      skill: 'Patient Identification',
      description: 'Proper patient identification protocols using multiple identifiers to ensure patient safety',
      icon: '🆔',
      level: 'Essential'
    },
    {
      skill: 'Intravenous Therapy',
      description: 'IV insertion, monitoring, and maintenance procedures with appropriate safety measures',
      icon: '💉',
      level: 'Advanced'
    }
  ]

  const communicationSkills = [
    {
      skill: 'Clear Explanations',
      description: 'Providing clear explanations of care, diagnoses, investigations, and treatments to patients',
      icon: '💬'
    },
    {
      skill: 'Patient Involvement',
      description: 'Encouraging patient involvement in decision-making and care planning processes',
      icon: '🤝'
    },
    {
      skill: 'Professional Communication',
      description: 'Effective communication with relatives and other healthcare professionals',
      icon: '👥'
    },
    {
      skill: 'Active Listening',
      description: 'Demonstrating active listening skills to understand patient needs and concerns',
      icon: '👂'
    },
    {
      skill: 'Clear Instructions',
      description: 'Providing clear, understandable instructions to patients and their families',
      icon: '📋'
    },
    {
      skill: 'Accurate Documentation',
      description: 'Maintaining accurate and comprehensive patient documentation and records',
      icon: '📝'
    }
  ]

  const trainingFeatures = [
    {
      title: 'Unlimited OSCE Sessions',
      description: 'Face-to-face training with unlimited practice sessions in state-of-the-art facilities',
      icon: Users
    },
    {
      title: 'State-of-the-Art Labs',
      description: 'Access to modern simulation facilities in Sydney, Melbourne, Brisbane & Adelaide',
      icon: Monitor
    },
    {
      title: 'Mock OSCE Assessments',
      description: 'Realistic practice examinations following in-person training with expert feedback',
      icon: Target
    },
    {
      title: 'Expert Guidance',
      description: 'Learn from experienced nurse educators who understand AHPRA standards and requirements',
      icon: Award
    },
    {
      title: 'Comprehensive Resources',
      description: 'OSCE-RN handbook, practice articles, learning portal with procedures and cheat sheets',
      icon: BookOpen
    },
    {
      title: 'Holistic Support Services',
      description: 'Accommodation, visa services, and complete nursing registration assistance',
      icon: Heart
    }
  ]

  const faqData = [
    {
      question: "What is Objective Structured Clinical Examination (OSCE)?",
      answer: "Registered Nurse Objective Structured Clinical Examination (RN OSCE) is a test that examines foreign registered nurses. RN OSCE is administered to such nurses desiring to become registered as nurses in Australia. After the candidate successfully passes the Next Generation NCLEX (NGN), they will proceed with OSCE which is a behavioral assessment developed to determine if the IQNM demonstrates the knowledge, skills and competence required."
    },
    {
      question: "How much is the fee for OSCE?",
      answer: "OSCE costs $4,000 AUD. It will be used by AHPRA in running and maintaining OSCE. The fee is non-refundable regardless of reasons, similar to the Next Generation NCLEX (NGN) examination fee. NAI's preparation course fee is AU$2,700 which includes comprehensive training, unlimited practice sessions, and all learning materials."
    },
    {
      question: "How long will OSCE take?",
      answer: "The examination will take approximately 3-3.5 hours. It may be scheduled for morning or afternoon. OSCE has 10 individual stations, with each station having 10 minutes allocation: 2 minutes for reading and 8 minutes for interaction."
    },
    {
      question: "What skills will I be assessed on?",
      answer: "Each candidate will be tested on practical skills including but not limited to: Physiological observations, Vital signs, Calculating drug dosages, Subcutaneous/Intramuscular injection, Aseptic Non-Touch Technique (ANTT), In-hospital resuscitation, Safe disposal of sharps, Medication administration, Wound care, Hand hygiene, Therapeutic patient communication/consent, Infection control practices, Patient identification, Intravenous therapy administration/management, Risk management in the clinical environment, and Communication."
    },
    {
      question: "Where is the OSCE exam held?",
      answer: "The exam is held at Adelaide Health Simulation, within the University of Adelaide. AHS has two different regions where tests can be administered. The confirmation email will indicate the area where your exam will be conducted."
    }
  ]

  // SEO: OSCE page metadata preserving old site keywords (55-60 chars)
  const seoData = {
    title: "OSCE Preparation Australia | OSCE Passer Training | NAI", // 58 chars
    description: "OSCE preparation Australia with expert guidance and support. Join successful OSCE passers with NAI training. Clinical skills assessment coaching for international nurses seeking AU-RN registration.",
    canonical: `${BASE_DOMAIN}/pages/osce-preparation`,
    og: {
      title: "OSCE Training Australia | Clinical Skills Assessment | NAI",
      description: "Master OSCE clinical skills with expert training for AU-RN registration. Hands-on practice, proven success rates, and comprehensive support.",
      url: `${BASE_DOMAIN}/pages/osce-preparation`,
      image: `${BASE_DOMAIN}/images/og/osce-course.webp`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "OSCE Training Australia | Most Popular Course | NAI",
      description: "Master OSCE clinical skills with Australia's premier training program. Expert coaching and proven success rates.",
      image: `${BASE_DOMAIN}/images/og/osce-course.webp`
    },
    jsonLd: [
      courseJsonLd({
        name: "OSCE Training Course",
        description: "Comprehensive Objective Structured Clinical Examination training for international nurses seeking Australian nursing registration (AU-RN). Includes hands-on clinical skills practice, expert mentoring, and personalized feedback.",
        courseCode: "OSCE-AURN",
        duration: "P8W",
        price: "2700",
        url: `${BASE_DOMAIN}/pages/osce-preparation`,
        prerequisites: ["Nursing Degree", "English Proficiency", "Basic Clinical Experience"],
        skills: ["Clinical Assessment", "Hand Hygiene", "Medication Administration", "Patient Safety", "ANTT Technique", "IV Therapy"]
      }),
      breadcrumbJsonLd([
        { name: "Home", url: BASE_DOMAIN },
        { name: "Courses", url: `${BASE_DOMAIN}/#courses` },
        { name: "OSCE Training", url: `${BASE_DOMAIN}/pages/osce-preparation` }
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
                    <Stethoscope className="w-8 h-8 text-white" />
                </div>
                  <div className="flex gap-3">
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                      <span className="text-xs font-semibold text-white">AHPRA Approved</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-3 py-2">
                      <span className="text-xs font-semibold text-white">95% Success Rate</span>
                    </div>
                  </div>
                </div>

                {/* Course Title */}
                <div className="mb-8">
                  <div className="text-sm text-white/80 font-semibold mb-2">NAI-OSCE –</div>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                    OSCE Preparation Course
              </h1>
                  <p className="text-xl text-white/90 mb-8 leading-relaxed">
                    Australia's premier pathway to nursing registration with expert training, 
                    unlimited practice sessions, and comprehensive AU-RN support.
                  </p>
                </div>

                {/* Key Stats */}
                <div className="grid grid-cols-2 gap-4 mb-8 w-full">
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">2 Weeks</div>
                    <div className="text-sm text-white/80">Intensive Program</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                    <div className="text-2xl font-bold text-white mb-1">AU$ 2,700</div>
                    <div className="text-sm text-white/80">All Inclusive</div>
                  </div>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <motion.a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20OSCE%20preparation%20course"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-white text-nai-highlight px-8 py-4 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-2 shadow-lg"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <MessageCircle className="w-5 h-5" />
                    Enrol Now
                  </motion.a>
                  <motion.button
                    className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-lg font-semibold border border-white/20 hover:bg-white/20 transition-colors duration-300 flex items-center justify-center gap-2"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Download className="w-5 h-5" />
                    Download Brochure
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
                      src={getGeneralImageUrl('ALLTECHZONE_A_highly_realistic_and_detailed_wide_mid-shot_of_a_nursing_student_in_navy_scrubs_performing_a_patient_repositioning_technique_with_a_mannequin_making_eye_contact_during_t.webp')} 
                      alt="OSCE Training - Nursing Student Practice"
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
                        <div className="font-bold text-gray-900">5000+</div>
                        <div className="text-sm text-gray-600">Graduates</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="absolute -top-6 -right-6 bg-white rounded-xl p-4 shadow-xl border border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-nai-highlight/10 rounded-lg flex items-center justify-center">
                        <Star className="w-6 h-6 text-nai-highlight" />
                      </div>
                      <div>
                        <div className="font-bold text-gray-900">4 Cities</div>
                        <div className="text-sm text-gray-600">Locations</div>
                      </div>
                    </div>
                  </div>
                </div>
                </motion.div>
            </div>
          </div>
        </div>

        <div className="w-full px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">

          {/* What is OSCE - Enhanced */}
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
                  <Stethoscope className="w-4 h-4" />
                  Professional Assessment
                      </div>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-6">What is the OSCE?</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  The Objective Structured Clinical Examination (OSCE) is a specialized assessment designed to evaluate 
                  the clinical skills and professional competencies of future healthcare professionals, particularly for AU-RN status.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  OSCEs are an effective method for assessing competence at both pre-registration and postgraduate levels 
                  within the nursing field, evaluating practical skills, critical thinking, and professional behavior in realistic clinical scenarios.
                </p>
                
                {/* Key Benefits */}
                <div className="space-y-4">
                  {[
                    { icon: CheckCircle, text: "Evaluates clinical skills and professional competencies", color: "text-green-600" },
                    { icon: Star, text: "Enhances confidence in applying clinical skills", color: "text-yellow-500" },
                    { icon: Users, text: "Supports journey toward AU-RN nursing registration", color: "text-blue-600" },
                    { icon: Award, text: "Demonstrates competency and confidence for AU-RN certification", color: "text-purple-600" }
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <benefit.icon className={`w-5 h-5 ${benefit.color}`} />
                      <span className="text-gray-700">{benefit.text}</span>
                      </div>
                  ))}
                </div>
              </div>
              
              {/* OSCE Overview Image */}
              <div className="relative">
                <div className="bg-gradient-to-br from-nai-highlight/10 to-nai-deep-teal/10 rounded-2xl p-6">
                  <img 
                    src={getGeneralImageUrl('A_group_of_professional_nurses_in_teal_scrubs_diverse_in_ethnicity_and_gender_standing_together_confidently_with_warm_smiles._Some_nurses_may_hold_clipboards_stethoscopes_or_tablets_t.webp')} 
                    alt="Professional Nurses Team - NAI Success Stories"
                    className="w-full h-64 object-cover rounded-xl shadow-lg"
                  />
                  </div>
                
                {/* NAI Excellence Badge */}
                <div className="absolute -bottom-4 -right-4 bg-nai-highlight rounded-xl p-4 shadow-xl text-white">
                  <div className="text-center">
                    <div className="text-lg font-bold mb-1">NAI</div>
                    <div className="text-xs">Best Training Center</div>
                  </div>
                </div>
            </div>
            </div>

            <div className="relative z-10 bg-nai-highlight/5 rounded-xl p-6">
              <h3 className="font-bold text-gray-900 mb-2">Why Choose NAI for OSCE Preparation?</h3>
              <p className="text-gray-700">
                Nurse Assist International (NAI) is recognized as Australia's best OSCE training center, 
                dedicated to providing tailored preparation classes with structured study plans that ensure 
                candidates are fully equipped for the OSCE and successful AU-RN registration.
              </p>
            </div>
          </motion.section>

          {/* Skills Evaluated - Enhanced */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <Target className="w-4 h-4" />
                Clinical Skills Assessment
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills Evaluated in the OSCE</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                The OSCE RN evaluates a candidate's practical skills in specific clinical scenarios. 
                These essential skills are best learned at Nurse Assist International with expert educators updated with latest AHPRA guidelines.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {skillsEvaluated.map((skillItem, index) => {
                const levelColors = {
                  'Essential': 'bg-green-100 text-green-800 border-green-200',
                  'Critical': 'bg-red-100 text-red-800 border-red-200',
                  'Advanced': 'bg-blue-100 text-blue-800 border-blue-200'
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
                    {/* Skill Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="text-2xl">{skillItem.icon}</div>
                        <div className="flex-1">
                          <h3 className="font-bold text-gray-900 text-lg mb-1">{skillItem.skill}</h3>
                          <span className={`inline-block px-2 py-1 text-xs font-medium rounded-full border ${levelColors[skillItem.level]}`}>
                            {skillItem.level}
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Description */}
                    <p className="text-gray-600 text-sm leading-relaxed mb-4">
                      {skillItem.description}
                    </p>
                    
                    {/* Assessment Focus */}
                    <div className="pt-4 border-t border-gray-100">
                      <div className="flex items-center gap-2 text-sm text-gray-500">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span>OSCE Assessment Focus</span>
              </div>
            </div>
          </motion.div>
                );
              })}
            </div>
          </motion.section>

          {/* Communication Skills */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 bg-white rounded-2xl mb-8 md:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8 xl:px-12 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm font-semibold mb-6">
                <MessageCircle className="w-4 h-4" />
                Communication Excellence
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Communication in the OSCE</h2>
              <p className="text-lg text-gray-600 max-w-4xl mx-auto">
                Effective communication with clients is vital for accurate diagnosis and treatment planning. 
                During the OSCE, assessors observe interactions between simulated clients and candidates, evaluating various communication techniques.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {communicationSkills.map((skill, index) => (
                    <motion.div 
                      key={index}
                  className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * index }}
                    >
                  <div className="text-center mb-4">
                    <div className="text-3xl mb-3">{skill.icon}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{skill.skill}</h3>
                      </div>
                  <p className="text-gray-600 text-sm leading-relaxed text-center">{skill.description}</p>
                    </motion.div>
                  ))}
                </div>
                
            <div className="mt-12 bg-gradient-to-r from-blue-50 to-nai-highlight/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Upon Successful OSCE Completion</h3>
              <p className="text-gray-700 leading-relaxed max-w-3xl mx-auto">
                Candidates can proceed to apply for Australian Nursing Registration with AHPRA and the Nursing and Midwifery Board of Australia (NMBA), 
                paving the way for their AU-RN credential and professional nursing career in Australia.
              </p>
              </div>
          </motion.section>

          {/* Training Features - Enhanced */}
          <motion.section 
            className="py-16 mb-16 relative"
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
                  Premium Training Features
            </div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Features of OSCE Training with NAI</h2>
                <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                  Discover the comprehensive features that make our OSCE preparation program Australia's most effective pathway to AU-RN registration.
                </p>
              </div>

              <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-lg border border-gray-100">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                  {trainingFeatures.map((feature, index) => (
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
              
                {/* Additional Features */}
                <div className="mt-12 pt-8 border-t border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">Additional Benefits</h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      {[
                        "Competency and readiness skills exams",
                        "Two-week intensive online course component",
                        "Holistic communication skills enhancement",
                        "Training in all AHPRA competencies"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
              </div>
                      ))}
            </div>
                    <div className="space-y-4">
                      {[
                        "Face-to-face training in 4 major cities",
                        "International student support services",
                        "Complete nursing registration assistance",
                        "Early and strategic preparation approach"
                      ].map((benefit, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                          <span className="text-gray-700">{benefit}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Why NAI Training is Essential */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 bg-white rounded-2xl mb-8 md:mb-12 lg:mb-16 px-4 sm:px-6 lg:px-8 xl:px-12 shadow-sm"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.0 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Importance of OSCE Training</h2>
              <p className="text-lg text-gray-600">Why specialized OSCE preparation is crucial for your success</p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-16">
              {/* Challenges with Traditional Training */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">Challenges with Clinical Placements</h3>
                <div className="space-y-4">
                  {[
                    "Increasing competition for placement opportunities",
                    "Some institutions overlook essential nursing skills",
                    "Limited time in clinical placements",
                    "Insufficient supervision during placements",
                    "Inadequate practice of OSCE-specific skills"
                  ].map((challenge, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{challenge}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* NAI Solution */}
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-6">NAI's Solution</h3>
                <div className="space-y-4">
                  {[
                    "Safe and supportive learning environment",
                    "Simulation training for likely OSCE skills",
                    "Repeated practice in secure environment",
                    "Expert nurse educators with correct techniques",
                    "Australian standards of care application"
                  ].map((solution, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-gray-700">{solution}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-12 bg-gradient-to-r from-nai-highlight/5 to-nai-deep-teal/5 rounded-xl p-8 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-4">The NAI Advantage</h3>
              <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto">
                At Nurse Assist International, we believe that nursing skills are best developed in a safe and supportive learning environment. 
                Our expert nurse educators ensure that students are trained to perform skills with the correct techniques, attitudes, 
                and approaches expected of registered nurses, leading to greater confidence and OSCE success.
              </p>
            </div>
          </motion.section>

          {/* AHPRA Resources */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Essential Resources</h2>
              <p className="text-lg text-gray-600">Official AHPRA documentation and NAI study materials</p>
            </div>
            
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 xl:gap-12">
              {/* AHPRA Handbook */}
              <div className="bg-nai-highlight rounded-2xl p-8 text-white">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center">
                    <Download className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">AHPRA OSCE Handbook</h3>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4" />
                      <span className="text-sm opacity-90">Official AHPRA Resource</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg mb-8 opacity-95 leading-relaxed">
                  For more information on OSCE and the related processes, download the AHPRA OSCE Handbook. 
                  It provides an in-depth overview of the assessment criteria and the assessment process.
                </p>

                <div className="space-y-3 mb-8">
                  {[
                    "Detailed assessment criteria and processes",
                    "Examination format and structure guidelines", 
                    "Comprehensive preparation recommendations",
                    "AU-RN registration requirements overview"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-white/80" />
                      <span className="text-white/90">{item}</span>
                    </div>
                  ))}
              </div>
              
                <a 
                  href="https://cdn.shopify.com/s/files/1/0692/6116/4796/files/Nursing-and-Midwifery-Board-Candidate-Handbook-RN-OSCE-Examination.pdf?v=1719100758"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white/20 transition-all duration-300 inline-flex items-center gap-3 border border-white/20 w-full justify-center"
                >
                  <Download className="w-5 h-5" />
                  Download Official Handbook
                </a>
              </div>

              {/* NAI Resources */}
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-blue-500 rounded-2xl flex items-center justify-center">
                    <BookOpen className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">NAI Study Materials</h3>
                    <div className="flex items-center gap-2">
                      <Star className="w-4 h-4 text-amber-500" />
                      <span className="text-sm text-gray-600">Exclusive NAI Resources</span>
                    </div>
                  </div>
                </div>

                <p className="text-lg text-gray-700 mb-8 leading-relaxed">
                  Access our exclusive collection of study materials, practice scenarios, and preparation guides 
                  designed specifically for OSCE success and AU-RN registration.
                </p>

                <div className="space-y-4 mb-8">
                  {[
                    { text: "Exclusively designed OSCE-RN handbook" },
                    { text: "Practice articles and clinical scenarios" },
                    { text: "Learning portal with procedures and cheat sheets" },
                    { text: "Competency assessment tools and readiness exams" }
                  ].map((resource, index) => (
                    <div key={index} className="flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="font-medium text-gray-700">{resource.text}</span>
            </div>
                  ))}
                </div>

                <button className="bg-blue-500 text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-600 transition-colors duration-300 inline-flex items-center gap-3 w-full justify-center">
                  <MessageCircle className="w-5 h-5" />
                  Access NAI Resources
                </button>
              </div>
            </div>
          </motion.section>



          {/* OSCE Student Success Stories */}
          <motion.section 
            className="py-8 md:py-12 lg:py-16 mb-8 md:mb-12 lg:mb-16 bg-gradient-to-br from-nai-soft to-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.6 }}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16">
              <div className="text-center mb-8 md:mb-12">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                  OSCE Success Stories
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                  Hear from our successful OSCE graduates who achieved their nursing dreams with NAI
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  {
                    name: "Geordy George",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Geordy George.webp'),
                    quote: "I recently cleared my Australia OSCE and couldn't be happier with the support and guidance I received from NAI!",
                    country: "Australia"
                  },
                  {
                    name: "Nimrat Kaur", 
                    image: getGalleryImageUrl('NAI GALLERY/Students/Nimrat Kaur.webp'),
                    quote: "With your support, guidance and appreciation I pass my OSCE exam. Thanks Georgi sir, Geeta ma'am, preeti ma'am and Rena ma'am.",
                    country: "Australia"
                  },
                  {
                    name: "Jeni Jhonson",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Jeni Jhonson.webp'), 
                    quote: "Thank you NAI family for making this possible, especially Georgi sir and preeti mam for your constant motivation.",
                    country: "Australia"
                  },
                  {
                    name: "Bianca Asuncion",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Bianca Asuncion.webp'),
                    quote: "NAI provided comprehensive OSCE training that helped me pass on my first attempt.",
                    country: "Australia"
                  },
                  {
                    name: "Dax Patel",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Dax Patel.webp'),
                    quote: "Professional and supportive environment at NAI. Great preparation for OSCE exam with practical hands-on training.",
                    country: "Australia"
                  },
                  {
                    name: "Ezina Paudel",
                    image: getGalleryImageUrl('NAI GALLERY/Students/Ezina Paudel.webp'),
                    quote: "Thank you NAI team for the excellent guidance and support throughout my OSCE preparation journey.",
                    country: "Australia"
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
                          <span>OSCE • {testimonial.country}</span>
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
            transition={{ duration: 0.6, delay: 1.7 }}
          >
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">Find answers to the most common questions about our OSCE preparation program</p>
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
                    href="/pages/osce-faqs"
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
                  transition={{ duration: 0.6, delay: 1.8 }}
                >
                  <div className="text-center mb-5">
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-1">OSCE</h3>
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
                        transition={{ duration: 0.3, delay: 1.9 + (index * 0.08) }}
                      >
                        <div className="text-white font-medium text-center">{month}</div>
                      </motion.div>
                    ))}
                  </div>

                  <a
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20enroll%20in%20OSCE%20preparation%20course"
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
            transition={{ duration: 0.6, delay: 1.8 }}
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
                    <Stethoscope className="w-10 h-10 text-white" />
                  </div>
                  
                  <h2 className="text-4xl font-bold mb-6">Ready to Begin Your AU-RN Journey?</h2>
                  <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
                    Early and strategic preparation is key to successfully passing the OSCE. 
                    Contact us to learn more about our OBA preparatory courses and how we can help you achieve your AU-RN goals.
                  </p>
                  
                  {/* Stats Row */}
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 max-w-2xl mx-auto">
                    {[
                      { number: "5000+", label: "Graduates" },
                      { number: "95%", label: "Success Rate" },
                      { number: "4", label: "Cities" },
                      { number: "2", label: "Weeks" }
                    ].map((stat, index) => (
                      <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                        <div className="text-2xl font-bold text-white mb-1">{stat.number}</div>
                        <div className="text-sm text-white/80">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                  
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.a 
                      href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20enroll%20in%20your%20OSCE%20preparation%20course"
                  target="_blank"
                  rel="noopener noreferrer"
                      className="bg-white text-nai-highlight px-10 py-5 rounded-lg font-bold text-xl hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center gap-3 shadow-xl"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MessageCircle className="w-6 h-6" />
                      Enrol Now - AU$ 2,700
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

export default OSCEPreparationPage