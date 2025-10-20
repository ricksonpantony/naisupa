import React, { useState, useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { Link } from 'react-router-dom'
import { 
  Heart, 
  Target, 
  Clock, 
  Star,
  Calendar,
  Globe,
  Trophy,
  Play,
  ExternalLink
} from 'lucide-react'

const OurStory = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const videoRef = useRef(null)
  const isInView = useInView(videoRef, { 
    threshold: 0.3,
    once: false 
  })

  // Auto-play when in view for better engagement
  useEffect(() => {
    if (isInView && !isVideoPlaying) {
      // Delay auto-play slightly to ensure smooth loading
      const timer = setTimeout(() => {
        setIsVideoPlaying(true)
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [isInView, isVideoPlaying])
  

  const timeline = [
    {
      year: "2019",
      title: "OBA Introduction",
      description: "AHPRA and NMBA introduced the Outcome Based Assessment (OBA) as the new model to assess international nurses.",
      links: [
        { text: "OBA pathway guidance", to: "/pages/oba" }
      ]
    },
    {
      year: "2020",
      title: "NAI Founded",
      description: "Recognizing the urgent need for specialized training, passionate Nurse Educators established Nurse Assist International."
    },
    {
      year: "Present",
      title: "Leading Institute",
      description: "NAI has become widely known for helping IQNMs confidently prepare for and pass the NCLEX-RN and OSCE exams.",
      links: [
        { text: "NCLEX and OSCE in Australia", to: "/pages/nclex-ngn" },
        { text: "Nurse Assist International reviews", to: "/pages/testimonials" }
      ]
    }
  ]

  return (
    <section className="pt-8 sm:pt-12 md:pt-16 lg:pt-20 pb-20 bg-gradient-to-br from-nai-soft via-white to-nai-soft">
      <div className="container-responsive">
        {/* Professional Hero Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative mb-16"
        >
          {/* Clean Title Section */}
          <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-lg border border-gray-200">
            <div className="text-center max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
              >
                {/* Professional Subtitle */}
                <div className="mb-6">
                  <span className="inline-block bg-nai-highlight text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded">
                    Our Foundation
                  </span>
                </div>
                
                {/* Clean Main Title */}
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-nai-dark mb-6 leading-tight">
                  Our <span className="text-nai-highlight">Story</span>
                </h2>
                
                {/* Professional Description */}
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8 max-w-3xl mx-auto">
                  Nurse Assist International (NAI) is the leading institute and the first ever registered company in Australia to provide NCLEX-RN and OSCE training for internationally qualified nurses (IQNMs).
                </p>
                
                {/* Professional Stats Row */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-nai-highlight rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Trophy className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-nai-dark mb-1">Australia's #1</h3>
                    <p className="text-sm text-gray-500">Leading Institute</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-nai-deep-teal rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Calendar className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-nai-dark mb-1">Since 2019</h3>
                    <p className="text-sm text-gray-500">Established Excellence</p>
                  </motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-nai-dark mb-1">Dreams Achieved</h3>
                    <p className="text-sm text-gray-500">Transforming Lives</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Main Story Content with Enhanced Layout */}
        <div className="mb-20">
          {/* Journey Section with Image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12 mb-16"
          >
            {/* Left - Content */}
            <div className="space-y-8">
              <div>
                <div className="mb-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 bg-nai-highlight rounded-lg flex items-center justify-center">
                      <Globe className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <span className="text-xs font-semibold text-nai-highlight uppercase tracking-wider">
                        Our Foundation
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold text-nai-dark leading-tight">
                        Our Journey
                      </h3>
                    </div>
                  </div>
                  <div className="w-16 h-0.5 bg-nai-highlight rounded-full"></div>
                </div>
                <div className="space-y-6">
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    Our journey began in 2019 when the Australian Health Practitioner Regulation Agency (AHPRA) and NMBA introduced the Outcome Based Assessment (OBA) as the new model to assess international nurses.
                  </p>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    Since March 2020, all internationally qualified nurses (IQNMs) with relevant but not substantially equivalent qualifications must successfully complete the OBA pathway, which includes the Next Generation NCLEX-RN (NGN) and the OSCE (Objective Structured Clinical Examination).
                  </p>
                  <p className="text-gray-600 leading-relaxed text-base sm:text-lg">
                    Recognizing the urgent need for specialized training, a team of passionate Nurse Educators established Nurse Assist International (NAI). Since then, NAI has become widely known for helping IQNMs confidently prepare for and pass the NCLEX-RN and OSCE exams.
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div className="relative">
              <div className="relative h-80 sm:h-96 lg:h-[400px] xl:h-[450px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-nai-highlight/20 to-nai-deep-teal/20 z-10"></div>
                <img 
                  src="/Images/ALLTECHZONE_A_highly_realistic_and_detailed_wide_mid-shot_of_a_nursing_student_in_navy_scrubs_performing_a_patient_repositioning_technique_with_a_mannequin_making_eye_contact_during_t.webp" 
                  alt="NAI nursing education - Professional nursing student in navy scrubs demonstrating patient care techniques during clinical training"
                  className="absolute inset-0 w-full h-full object-cover"
                  width="400"
                  height="450"
                  loading="lazy"
                  decoding="async"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              </div>
              {/* Floating Stats */}
              <div className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 bg-gradient-to-br from-white via-nai-soft to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-nai-teal/20 hover:shadow-2xl transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-nai-teal to-nai-highlight bg-clip-text text-transparent">2019</div>
                  <div className="text-xs sm:text-sm text-nai-teal font-semibold">Founded</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-nai-teal to-nai-highlight rounded-full mx-auto mt-1 group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 sm:-top-6 sm:-right-6 bg-gradient-to-br from-white via-nai-soft to-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl border border-nai-highlight/20 hover:shadow-2xl transition-all duration-300 group">
                <div className="text-center">
                  <div className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-nai-highlight to-nai-deep-teal bg-clip-text text-transparent">Pioneer</div>
                  <div className="text-xs sm:text-sm text-nai-deep-teal font-semibold">In Australia</div>
                  <div className="w-8 h-0.5 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full mx-auto mt-1 group-hover:w-12 transition-all duration-300"></div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Spectacular Timeline Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-16 relative z-10"
          >
            {/* Enhanced Header with Decorative Elements */}
            <div className="text-center mb-16 relative">
              {/* Background Decoration */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-nai-highlight/5 via-nai-deep-teal/5 to-nai-highlight/5 rounded-full blur-3xl"></div>
              </div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="relative"
              >
                <span className="inline-block text-xs font-semibold text-nai-highlight uppercase tracking-wider mb-4 px-4 py-2 bg-nai-highlight/10 rounded-full border border-nai-highlight/20">
                  Our Journey Through Time
                </span>
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-nai-dark mb-4">
                  Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-nai-highlight via-nai-deep-teal to-nai-highlight animate-gradient-shift bg-300%">Timeline</span>
                </h3>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <div className="w-8 h-0.5 bg-gradient-to-r from-transparent to-nai-highlight rounded-full"></div>
                  <div className="w-3 h-3 bg-nai-highlight rounded-full animate-pulse"></div>
                  <div className="w-8 h-0.5 bg-gradient-to-l from-transparent to-nai-highlight rounded-full"></div>
                </div>
                <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
                  Discover the milestones that shaped our commitment to nursing excellence
                </p>
              </motion.div>
            </div>
            
            {/* Revolutionary Horizontal Timeline Container */}
            <div className="relative max-w-7xl mx-auto">
              {/* Animated Background Pattern */}
              <div className="absolute inset-0 -z-10">
                <div className="absolute top-1/2 left-0 right-0 transform -translate-y-1/2 h-px bg-gradient-to-r from-transparent via-nai-highlight/30 to-transparent"></div>
              </div>
              
              {/* Horizontal Timeline Layout */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12 relative">
                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.7, 
                      delay: index * 0.15,
                      ease: [0.25, 0.46, 0.45, 0.94]
                    }}
                    viewport={{ once: true, margin: "-50px" }}
                    className="relative group"
                  >
                    {/* Central Timeline Node */}
                    <div className="flex justify-center mb-8 relative z-30">
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ 
                          duration: 0.6, 
                          delay: index * 0.15 + 0.3,
                          type: "spring",
                          stiffness: 200
                        }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Outer Glow Ring */}
                        <div className="absolute inset-0 w-20 h-20 bg-gradient-to-r from-nai-highlight/30 to-nai-deep-teal/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500"></div>
                        
                        {/* Middle Pulse Ring */}
                        <div className="absolute inset-2 w-16 h-16 bg-gradient-to-r from-nai-highlight/50 to-nai-deep-teal/50 rounded-full animate-pulse"></div>
                        
                        {/* Inner Core */}
                        <div className="relative w-20 h-20 bg-gradient-to-br from-nai-highlight via-nai-deep-teal to-nai-highlight rounded-full shadow-2xl border-4 border-white group-hover:scale-110 transition-all duration-500 flex items-center justify-center">
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                            className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-inner"
                          >
                            <div className="w-3 h-3 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full"></div>
                          </motion.div>
                        </div>
                        
                        {/* Year Badge */}
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.15 + 0.5 }}
                          viewport={{ once: true }}
                          className="absolute -bottom-12 left-1/2 transform -translate-x-1/2"
                        >
                          <div className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal text-white text-sm font-bold px-4 py-2 rounded-full shadow-lg border-2 border-white whitespace-nowrap">
                            {item.year}
                          </div>
                        </motion.div>
                      </motion.div>
                    </div>
                    
                    {/* Connecting Line from Node */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 w-px h-8 bg-gradient-to-b from-nai-highlight/50 to-transparent z-20"></div>
                    
                    {/* Content Card */}
                    <div className="mt-16 relative z-10">
                      <motion.div
                        initial={{ opacity: 0, y: 30, rotateX: -15 }}
                        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ 
                          duration: 0.7, 
                          delay: index * 0.15 + 0.4,
                          ease: "easeOut"
                        }}
                        viewport={{ once: true }}
                        className="relative"
                      >
                        {/* Card Background with Gradient */}
                        <div className="relative bg-gradient-to-br from-white via-white to-gray-50 rounded-3xl p-6 lg:p-8 shadow-2xl border border-gray-100 group-hover:shadow-3xl group-hover:border-nai-highlight/20 transition-all duration-700 overflow-hidden h-full">
                          
                          {/* Decorative Corner Elements */}
                          <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-nai-highlight/10 to-transparent rounded-bl-3xl"></div>
                          <div className="absolute bottom-0 left-0 w-12 h-12 bg-gradient-to-tr from-nai-deep-teal/10 to-transparent rounded-tr-3xl"></div>
                          
                          {/* Animated Background Pattern */}
                          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-nai-highlight/5 to-nai-deep-teal/5 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-4 left-4 w-20 h-20 bg-gradient-to-tl from-nai-deep-teal/5 to-nai-highlight/5 rounded-full blur-xl"></div>
                          </div>
                          
                          <div className="relative z-10 text-center">
                            {/* Icon */}
                            <motion.div
                              initial={{ scale: 0, rotate: -180 }}
                              whileInView={{ scale: 1, rotate: 0 }}
                              transition={{ 
                                duration: 0.6, 
                                delay: index * 0.15 + 0.6,
                                type: "spring",
                                stiffness: 150
                              }}
                              viewport={{ once: true }}
                              className="inline-flex w-14 h-14 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-all duration-500"
                            >
                              {index === 0 && <Calendar className="w-7 h-7 text-white" />}
                              {index === 1 && <Star className="w-7 h-7 text-white" />}
                              {index === 2 && <Trophy className="w-7 h-7 text-white" />}
                            </motion.div>
                            
                            {/* Title */}
                            <h4 className="text-xl lg:text-2xl font-bold text-nai-dark mb-3 group-hover:text-nai-highlight transition-colors duration-500 leading-tight">
                              {item.title}
                            </h4>
                            
                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-sm lg:text-base mb-4">
                              {item.description}
                              {item.links && item.links.map((link, linkIndex) => (
                                <span key={linkIndex}>
                                  {' '}
                                  <Link 
                                    to={link.to} 
                                    className="text-nai-highlight hover:text-nai-deep-teal font-medium underline transition-colors duration-200"
                                  >
                                    {link.text}
                                  </Link>
                                  {linkIndex < item.links.length - 1 ? '. Check our ' : '.'}
                                </span>
                              ))}
                            </p>
                            
                            {/* Decorative Line */}
                            <motion.div
                              initial={{ width: 0 }}
                              whileInView={{ width: "100%" }}
                              transition={{ 
                                duration: 1, 
                                delay: index * 0.15 + 0.8,
                                ease: "easeInOut"
                              }}
                              viewport={{ once: true }}
                              className="h-1 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full mx-auto max-w-20"
                            ></motion.div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                    
                    {/* Horizontal Connecting Line (between items on desktop) */}
                    {index < timeline.length - 1 && (
                      <div className="hidden md:block absolute top-10 -right-4 lg:-right-6 w-8 lg:w-12 h-px bg-gradient-to-r from-nai-highlight/40 to-transparent z-10"></div>
                    )}
                  </motion.div>
                ))}
              </div>
              
              {/* Enhanced Progress Indicator */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
                viewport={{ once: true }}
                className="mt-20 flex justify-center"
              >
                <div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm rounded-full px-8 py-4 shadow-xl border border-gray-200">
                  {timeline.map((_, index) => (
                    <motion.div
                      key={index}
                      initial={{ scale: 0, opacity: 0 }}
                      whileInView={{ scale: 1, opacity: 1 }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 1.4 + index * 0.1,
                        type: "spring",
                        stiffness: 200
                      }}
                      viewport={{ once: true }}
                      className="relative"
                    >
                      <div className="w-3 h-3 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full"></div>
                      <div className="absolute inset-0 w-3 h-3 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full animate-ping opacity-30"></div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Video with Vision and Mission */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-2 gap-12"
          >
            {/* Left - YouTube Video */}
            <div className="relative">
              <div className="relative bg-white rounded-3xl p-6 shadow-2xl border border-gray-100">
                {/* Video Header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center">
                    <Play className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <span className="text-xs font-semibold text-red-600 uppercase tracking-wider">
                      Watch Our Story
                    </span>
                    <h3 className="text-lg font-bold text-nai-dark leading-tight">Success Stories</h3>
                  </div>
                </div>
                
                {/* Video Container */}
                <motion.div 
                  ref={videoRef} 
                  className="relative aspect-video rounded-2xl overflow-hidden shadow-xl bg-gray-900"
                  animate={isInView && !isVideoPlaying ? {
                    boxShadow: "0 25px 50px -12px rgba(0, 166, 181, 0.25)"
                  } : {}}
                  transition={{ duration: 0.3 }}
                >
                  {!isVideoPlaying ? (
                    <div 
                      className="relative w-full h-full cursor-pointer group"
                      onClick={() => setIsVideoPlaying(true)}
                    >
                      {/* Video Thumbnail - Optimized gradient background */}
                      <div className="absolute inset-0 bg-gradient-to-br from-nai-highlight/30 to-nai-deep-teal/30"></div>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent"></div>
                      
                      {/* Play Button Overlay */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                          className="relative"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <div className="w-20 h-20 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl group-hover:bg-white transition-colors duration-300">
                            <Play className="w-8 h-8 text-nai-highlight ml-1" />
                          </div>
                          <div className="absolute inset-0 w-20 h-20 bg-nai-highlight/20 rounded-full animate-ping"></div>
                        </motion.div>
                      </div>
                      
                      {/* Auto-play Indicator */}
                      <div className="absolute top-4 left-4 bg-black/70 backdrop-blur-sm text-white px-3 py-2 rounded-lg text-sm font-medium flex items-center gap-2">
                        <div className="w-2 h-2 bg-red-500 rounded-full animate-pulse"></div>
                        {isInView ? 'Auto-playing...' : 'Loading...'}
                      </div>
                      
                      {/* Video Info Overlay */}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="bg-black/70 backdrop-blur-sm rounded-lg p-3 text-white">
                          <h4 className="font-semibold text-sm mb-1">NAI Success Stories</h4>
                          <p className="text-xs text-gray-300">Hear from our successful nurses</p>
                        </div>
                      </div>
                      
                      {/* YouTube Branding */}
                      <div className="absolute top-4 right-4">
                        <div className="bg-red-600 text-white px-2 py-1 rounded text-xs font-semibold flex items-center gap-1">
                          <ExternalLink className="w-3 h-3" />
                          YouTube
                        </div>
                      </div>
                    </div>
                  ) : videoError ? (
                    <div className="w-full h-full flex items-center justify-center bg-gray-900 text-white">
                      <div className="text-center p-6">
                        <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <h4 className="text-lg font-semibold mb-2">Video Unavailable</h4>
                        <p className="text-sm text-gray-300 mb-4">Unable to load video. Please try again later.</p>
                        <button 
                          onClick={() => {
                            setVideoError(false)
                            setIsVideoPlaying(false)
                          }}
                          className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-4 py-2 rounded-lg text-sm transition-colors"
                        >
                          Retry
                        </button>
                      </div>
                    </div>
                  ) : (
                    <iframe
                      key="zFM6XJ7CLZA"
                      src="https://www.youtube.com/embed/zFM6XJ7CLZA?autoplay=1&controls=1&rel=0&showinfo=0&modestbranding=1&playsinline=1&enablejsapi=1"
                      title="NAI Success Stories - YouTube Video"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      frameBorder="0"
                      referrerPolicy="strict-origin-when-cross-origin"
                      onError={() => {
                        console.log('Video iframe error')
                        setVideoError(true)
                      }}
                      onLoad={() => {
                        console.log('Video iframe loaded successfully')
                      }}
                    />
                  )}
                </motion.div>
                
                {/* Video Description */}
                <div className="mt-6 space-y-3">
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-nai-dark">Real Success Stories</h4>
                    <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                      <Play className="w-3 h-3" />
                      HD Video
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Watch inspiring stories from our Nurses who successfully passed the NCLEX-RN and OSCE exams and are now practicing as Registered Nurses in Australia.
                  </p>
                  <div className="flex items-center gap-2 text-xs text-gray-500">
                    <Clock className="w-3 h-3" />
                    <span>5:30 min</span>
                    <span>•</span>
                    <span>HD Quality</span>
                    <span>•</span>
                    <span className="text-nai-highlight font-medium"></span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - Vision and Mission */}
            <div className="space-y-8">
              {/* Vision Statement */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-nai-deep-teal/10 to-nai-highlight/10 rounded-3xl p-6 lg:p-8 border border-nai-deep-teal/20">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-nai-deep-teal rounded-lg flex items-center justify-center">
                        <Target className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-nai-deep-teal uppercase tracking-wider">
                          Our Vision
                        </span>
                        <h3 className="text-xl font-bold text-nai-dark leading-tight">Our Vision</h3>
                      </div>
                    </div>
                    <div className="w-16 h-0.5 bg-nai-deep-teal rounded-full"></div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed text-base italic mb-6">
                    "To empower internationally qualified nurses to become exemplary health practitioners in Australia, achieving their AU-RN status."
                  </blockquote>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <div className="bg-white/50 rounded-full px-3 sm:px-4 py-2 border border-white/30">
                      <span className="text-xs sm:text-sm font-semibold text-nai-dark">Empowerment</span>
                    </div>
                    <div className="bg-white/50 rounded-full px-3 sm:px-4 py-2 border border-white/30">
                      <span className="text-xs sm:text-sm font-semibold text-nai-dark">Excellence</span>
                    </div>
                    <div className="bg-white/50 rounded-full px-3 sm:px-4 py-2 border border-white/30">
                      <span className="text-xs sm:text-sm font-semibold text-nai-dark">Achievement</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Mission Statement */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <div className="bg-gradient-to-br from-nai-highlight/10 to-nai-deep-teal/10 rounded-3xl p-6 lg:p-8 border border-nai-highlight/20">
                  <div className="mb-6">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-10 h-10 bg-nai-highlight rounded-lg flex items-center justify-center">
                        <Star className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-semibold text-nai-highlight uppercase tracking-wider">
                          Our Purpose
                        </span>
                        <h3 className="text-xl font-bold text-nai-dark leading-tight">Our Mission</h3>
                      </div>
                    </div>
                    <div className="w-16 h-0.5 bg-nai-highlight rounded-full"></div>
                  </div>
                  <blockquote className="text-gray-700 leading-relaxed text-base italic mb-6">
                    "At NAI, we don't just train nurses—we empower them to succeed and build a career as a Registered Nurse in Australia."
                  </blockquote>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    <div className="bg-white/50 rounded-full px-3 sm:px-4 py-2 border border-white/30">
                      <span className="text-xs sm:text-sm font-semibold text-nai-dark">Empowerment</span>
                    </div>
                    <div className="bg-white/50 rounded-full px-3 sm:px-4 py-2 border border-white/30">
                      <span className="text-xs sm:text-sm font-semibold text-nai-dark">Excellence</span>
                    </div>
                    <div className="bg-white/50 rounded-full px-3 sm:px-4 py-2 border border-white/30">
                      <span className="text-xs sm:text-sm font-semibold text-nai-dark">Success</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>



        {/* Opening Hours */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-white text-center"
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Clock className="w-6 h-6 sm:w-8 sm:h-8" />
            <h3 className="text-xl sm:text-2xl font-bold">Opening Hours</h3>
          </div>
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6 max-w-2xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Monday to Friday</h4>
              <p className="text-base sm:text-lg">9:30 AM – 5:30 PM</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 sm:p-6 border border-white/20">
              <h4 className="font-semibold mb-2 text-sm sm:text-base">Weekend</h4>
              <p className="text-base sm:text-lg">Closed</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default OurStory
