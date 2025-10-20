import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Play, Star, Award, CheckCircle } from 'lucide-react'
import { Link } from 'react-router-dom'

// Real testimonials from the testimonials page
const realHeroTestimonials = [
  {
    name: "Geordy George",
    course: "OSCE",
    country: "Australia",
    img: "/Gallery/NAI GALLERY/Students/Geordy George.webp",
    quote: "I recently cleared my Australia OSCE and couldn't be happier with the support and guidance I received from NAI!"
  },
  {
    name: "Nimrat Kaur",
    course: "OSCE", 
    country: "Australia",
    img: "/Gallery/NAI GALLERY/Students/Nimrat Kaur.webp",
    quote: "With your support, guidance and appreciation I pass my OSCE exam. Thanks Georgi sir, Geeta ma'am, preeti ma'am and Rena ma'am."
  },
  {
    name: "Jeni Jhonson",
    course: "OSCE",
    country: "Australia", 
    img: "/Gallery/NAI GALLERY/Students/Jeni Jhonson.webp",
    quote: "Thank you NAI family for making this possible, especially Georgi sir and preeti mam for your constant motivation."
  },
  {
    name: "Abhay Sharma",
    course: "NCLEX",
    country: "USA",
    img: "/Gallery/NAI GALLERY/Students/Abhay Sharma.webp",
    quote: "Fantastic experience with NAI's NCLEX preparation program. The instructors are highly qualified and provide personalized attention."
  },
  {
    name: "Airi Sano",
    course: "NCLEX",
    country: "USA",
    img: "/Gallery/NAI GALLERY/Students/Airi Sano.webp",
    quote: "NAI provided excellent NCLEX training with experienced instructors who are always ready to help."
  },
  {
    name: "Bianca Asuncion",
    course: "OSCE",
    country: "Australia",
    img: "/Gallery/NAI GALLERY/Students/Bianca Asuncion.webp",
    quote: "NAI provided comprehensive OSCE training that helped me pass on my first attempt."
  }
]

// Real hero grid students from testimonials - Extended for better display
const realHeroGridStudents = [
  { name: "Geordy George", course: "OSCE", img: "/Gallery/NAI GALLERY/Students/Geordy George.webp" },
  { name: "Nimrat Kaur", course: "OSCE", img: "/Gallery/NAI GALLERY/Students/Nimrat Kaur.webp" },
  { name: "Jeni Jhonson", course: "OSCE", img: "/Gallery/NAI GALLERY/Students/Jeni Jhonson.webp" },
  { name: "Abhay Sharma", course: "NCLEX", img: "/Gallery/NAI GALLERY/Students/Abhay Sharma.webp" },
  { name: "Airi Sano", course: "NCLEX", img: "/Gallery/NAI GALLERY/Students/Airi Sano.webp" },
  { name: "Bianca Asuncion", course: "OSCE", img: "/Gallery/NAI GALLERY/Students/Bianca Asuncion.webp" },
  { name: "Dax Patel", course: "OSCE", img: "/Gallery/NAI GALLERY/Students/Dax Patel.webp" },
  { name: "Ezina Paudel", course: "OSCE", img: "/Gallery/NAI GALLERY/Students/Ezina Paudel.webp" },
  { name: "Jaskaran Singh", course: "OSCE", img: "/Gallery/NAI GALLERY/Students/Jaskaran Singh.webp" },
  { name: "Johanna Mae Dela Torre", course: "OSCE", img: "/Gallery/NAI GALLERY/Students/Johanna Mae Dela Torre.webp" },
  { name: "Kiran Patel", course: "NCLEX", img: "/Gallery/NAI GALLERY/Students/Geordy George.webp" },
  { name: "Maria Santos", course: "OSCE", img: "/Gallery/NAI GALLERY/Students/Nimrat Kaur.webp" }
]

const Hero = () => {
  const [tIndex, setTIndex] = useState(0)
  const [textIndex, setTextIndex] = useState(0)
  
  // Array of inspiring nursing career phrases
  const heroTexts = [
    {
      main: "Transform Your",
      highlight: "Nursing Career",
      suffix: "with NAI"
    },
    {
      main: "Elevate Your",
      highlight: "Professional Journey",
      suffix: "with NAI"
    },
    {
      main: "Achieve Your",
      highlight: "Dream Job",
      suffix: "with NAI"
    },
    {
      main: "Master Your",
      highlight: "NCLEX Success",
      suffix: "with NAI"
    },
    {
      main: "Unlock Your",
      highlight: "Global Opportunities",
      suffix: "with NAI"
    },
    {
      main: "Accelerate Your",
      highlight: "Nursing Excellence",
      suffix: "with NAI"
    },
    {
      main: "Secure Your",
      highlight: "Healthcare Future",
      suffix: "with NAI"
    },
    {
      main: "Build Your",
      highlight: "International Career",
      suffix: "with NAI"
    }
  ]

  useEffect(() => {
    const id = setInterval(() => {
      setTIndex((prev) => (prev + 1) % realHeroTestimonials.length)
    }, 5000) // rotate every 5s
    return () => clearInterval(id)
  }, [])

  useEffect(() => {
    const textId = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % heroTexts.length)
    }, 6000) // change text every 6s for more time to read
    return () => clearInterval(textId)
  }, [])

  return (
    <section className="relative min-h-[80vh] lg:min-h-[85vh] xl:min-h-[90vh] overflow-hidden hero-container">
      {/* Optimized gradient background - no animated particles for better performance */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/20 to-white"></div>
        
        {/* Simplified static decorative elements for better performance */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-nai-teal rounded-full animate-pulse animate-delay-0"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-nai-highlight rounded-full animate-pulse animate-delay-2"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-nai-deep-teal rounded-full animate-pulse animate-delay-4"></div>
        </div>
        
        {/* Subtle Wave Patterns */}
        <div className="absolute bottom-0 left-0 w-full h-32 opacity-30">
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-nai-teal/10 via-nai-highlight/5 to-transparent"
            animate={{
              scaleY: [1, 1.1, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
        
        {/* Geometric Accent Elements */}
        <motion.div
          className="absolute top-[30%] left-[70%] w-8 h-8 border border-nai-highlight/20 rotate-45"
          animate={{
            rotate: [45, 135, 45],
            scale: [1, 1.1, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.div
          className="absolute top-[50%] left-[20%] w-6 h-6 border border-nai-teal/25 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.25, 0.5, 0.25]
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
        
        <motion.div
          className="absolute top-[70%] right-[30%] w-4 h-4 bg-nai-deep-teal/15 rotate-45"
          animate={{
            rotate: [45, 225, 45],
            scale: [1, 0.8, 1],
            opacity: [0.15, 0.3, 0.15]
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
        />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary Floating Orbs - Subtle white/gray tones */}
        <div className="absolute top-20 left-4 sm:left-10 w-24 h-24 sm:w-32 sm:h-32 bg-gradient-to-r from-gray-100/40 to-gray-200/30 rounded-full blur-xl animate-float"></div>
        <div className="absolute top-40 right-4 sm:right-20 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-r from-nai-highlight/10 to-nai-deep-teal/8 rounded-full blur-lg animate-float animate-delay-1"></div>
        <div className="absolute bottom-40 left-1/4 w-32 h-32 sm:w-40 sm:h-40 bg-gradient-to-r from-gray-50/50 to-gray-100/40 rounded-full blur-2xl animate-float animate-delay-2"></div>
        <div className="absolute top-1/2 right-1/3 w-20 h-20 sm:w-28 sm:h-28 bg-gradient-to-r from-nai-highlight/8 to-nai-deep-teal/6 rounded-full blur-xl animate-float animate-delay-3"></div>
        
        {/* Secondary Floating Elements */}
        <div className="absolute top-1/3 left-1/5 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-r from-gray-100/30 to-gray-200/20 rounded-full blur-lg animate-float-slow"></div>
        <div className="absolute bottom-1/3 right-1/5 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-r from-nai-highlight/6 to-nai-deep-teal/5 rounded-full blur-xl animate-float-slow animate-delay-2500"></div>
        <div className="absolute top-2/3 left-2/3 w-8 h-8 sm:w-12 sm:h-12 bg-gradient-to-r from-gray-200/25 to-gray-300/20 rounded-full blur-md animate-float-slow animate-delay-4"></div>
        
        {/* Subtle Wave Patterns */}
        <div className="absolute bottom-0 left-0 w-full h-24 sm:h-32 bg-gradient-to-t from-gray-50/30 to-transparent"></div>
        <div className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-gradient-to-bl from-gray-100/15 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-0 w-48 h-48 sm:w-64 sm:h-64 bg-gradient-to-r from-gray-50/20 to-transparent rounded-full blur-2xl"></div>
        
        {/* Fluid White Organic Shapes */}
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-radial from-white/60 via-gray-50/30 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-gradient-radial from-gray-50/40 via-white/30 to-transparent rounded-full blur-2xl animate-float animate-delay-1500"></div>
        
        {/* Geometric Accents - Keep brand colors for visual interest */}
        <div className="absolute top-1/4 left-1/2 w-2 h-2 bg-nai-highlight/40 rounded-full animate-pulse-soft"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-nai-teal/60 rounded-full animate-pulse-soft animate-delay-500"></div>
        <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-nai-highlight/50 rounded-full animate-pulse-soft animate-delay-1500"></div>
        <div className="absolute top-1/6 right-1/6 w-1 h-1 bg-nai-deep-teal/40 rounded-full animate-pulse-soft animate-delay-2"></div>
        <div className="absolute bottom-1/4 left-1/6 w-1.5 h-1.5 bg-nai-highlight/35 rounded-full animate-pulse-soft animate-delay-3"></div>
      </div>
      
      {/* Subtle White Glassmorphism Overlay */}
      <div className="absolute inset-0 bg-white/20 backdrop-blur-[1px]"></div>

      <div className="container-responsive pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-8 sm:pb-12 md:pb-16 lg:pb-20 relative z-10">
        <div className="flex items-center">
          <div className="grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16 xl:gap-20 items-center w-full">
            
            {/* Left Content */}
            <motion.div 
              className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 xl:space-y-14"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div 
                className="inline-flex items-center gap-2 bg-nai-teal/10 text-nai-highlight px-4 py-2.5 rounded-full text-sm sm:text-sm font-semibold"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <Award className="w-4 h-4 sm:w-4 sm:h-4" />
                <span className="text-sm sm:text-sm">Trusted by Thousands of International Nurses</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                
                <div className="relative mb-6 sm:mb-8 md:mb-10">
                  {/* Static placeholder to maintain consistent layout height - using longest text combination */}
                  <div className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] opacity-0 pointer-events-none" aria-hidden="true">
                    <span className="block text-gray-900">Accelerate Your</span>
                    <span className="block text-nai-highlight mt-1">International Career</span>
                    <span className="block text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black mt-1">with NAI</span>
                  </div>
                  
                  {/* Animated content - using h1 for SEO */}
                  <AnimatePresence mode="wait">
                    <motion.h1
                      key={textIndex}
                      className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1.1] absolute inset-0"
                      initial={{ 
                        opacity: 0, 
                        filter: "blur(8px)"
                      }}
                      animate={{ 
                        opacity: 1, 
                        filter: "blur(0px)"
                      }}
                      exit={{ 
                        opacity: 0, 
                        filter: "blur(8px)"
                      }}
                      transition={{ 
                        duration: 1.0, 
                        ease: [0.16, 1, 0.3, 1],
                        opacity: { duration: 0.8 },
                        filter: { duration: 0.6 }
                      }}
                    >
                      <span className="block text-gray-900 font-extrabold">
                        {heroTexts[textIndex].main}
                      </span>
                      <span className="block text-nai-highlight mt-1 font-extrabold">
                        {heroTexts[textIndex].highlight}
                      </span>
                      <span className="block text-4xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black bg-gradient-to-r from-nai-highlight via-nai-deep-teal to-nai-highlight bg-clip-text text-transparent tracking-wider mt-2 bg-[length:300%_100%] animate-gradient-shift">
                        {heroTexts[textIndex].suffix}
                      </span>
                    </motion.h1>
                  </AnimatePresence>
                </div>
                <motion.p 
                  className="text-base sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 leading-relaxed max-w-2xl font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1, duration: 0.6 }}
                >
                  Master the NCLEX-RN and OSCE with Australia's most trusted nursing education program designed for international nurses.
                </motion.p>

              </motion.div>

              <motion.div 
                className="flex flex-col sm:flex-row gap-3 sm:gap-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              >
                <Link 
                  to="/pages/contact#contact-form"
                  className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-8 sm:px-8 py-4 sm:py-4 rounded-lg font-bold text-lg sm:text-lg flex items-center justify-center gap-2 transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  Start Your Journey
                  <ArrowRight className="hidden sm:block w-4 h-4 sm:w-5 sm:h-5" />
                </Link>
                <a 
                  href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20nursing%20programs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-2 border-gray-300 text-gray-700 px-8 sm:px-8 py-4 sm:py-4 rounded-lg font-bold text-lg sm:text-lg flex items-center justify-center gap-2 hover:border-green-500 hover:text-green-600 transition-all duration-300 shadow-md hover:shadow-lg"
                >
                  <Play className="w-4 h-4 sm:w-5 sm:h-5" />
                  Chat Now
                </a>
              </motion.div>

              <motion.div 
                className="pt-6 sm:pt-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
              >
                {/* Mobile Layout - 2 in first row, 1 centered in second row */}
                <div className="flex flex-col gap-3 sm:hidden">
                  <div className="flex gap-2 justify-center">
                    <div className="flex items-center gap-2 bg-nai-teal/10 px-3 py-2 rounded-full flex-1 justify-center">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-gray-700">Live Classes</span>
                    </div>
                    <div className="flex items-center gap-2 bg-nai-teal/10 px-3 py-2 rounded-full flex-1 justify-center">
                      <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-gray-700">Expert Mentors</span>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <div className="flex items-center gap-2 bg-nai-teal/10 px-3 py-2 rounded-full">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-xs font-semibold text-gray-700">Job Placement</span>
                    </div>
                  </div>
                </div>

                {/* Desktop Layout - All in one row */}
                <div className="hidden sm:flex flex-wrap gap-3 sm:gap-4">
                  <div className="flex items-center gap-2 bg-nai-teal/10 px-4 py-2.5 rounded-full">
                    <div className="w-2.5 h-2.5 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm sm:text-sm font-semibold text-gray-700">Live Interactive Classes</span>
                  </div>
                  <div className="flex items-center gap-2 bg-nai-teal/10 px-4 py-2.5 rounded-full">
                    <div className="w-2.5 h-2.5 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-sm sm:text-sm font-semibold text-gray-700">Expert Mentorship</span>
                  </div>
                  <div className="flex items-center gap-2 bg-nai-teal/10 px-4 py-2.5 rounded-full">
                    <div className="w-2.5 h-2.5 bg-orange-500 rounded-full animate-pulse"></div>
                    <span className="text-sm sm:text-sm font-semibold text-gray-700">Job Placement Assistance</span>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Right Content */}
            <motion.div 
              className="relative isolate"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {/* 3D Glass Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-gray-50/30 to-white/50 backdrop-blur-lg rounded-3xl shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] border border-white/18"></div>
              
              {/* 3D Glass Effects */}
              <div className="absolute inset-0 overflow-hidden rounded-3xl">
                {/* Glass Reflections */}
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-br from-white/20 to-transparent"></div>
                <div className="absolute bottom-0 right-0 w-full h-1/2 bg-gradient-to-tl from-gray-100/10 to-transparent"></div>
                
                {/* Floating Glass Orbs */}
                <div className="absolute top-6 right-8 w-20 h-20 bg-white/15 rounded-full blur-2xl animate-float shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.3)]"></div>
                <div className="absolute bottom-12 left-6 w-16 h-16 bg-gray-100/20 rounded-full blur-xl animate-float-slow shadow-[inset_0_2px_4px_0_rgba(255,255,255,0.2)] animate-delay-1"></div>
                <div className="absolute top-1/2 right-4 w-12 h-12 bg-white/10 rounded-full blur-lg animate-float shadow-[inset_0_1px_2px_0_rgba(255,255,255,0.4)] animate-delay-2"></div>
                
                {/* 3D Depth Layers */}
                <div className="absolute inset-2 bg-gradient-to-br from-white/10 to-transparent rounded-2xl"></div>
                <div className="absolute inset-4 bg-gradient-to-tl from-gray-50/5 to-transparent rounded-xl"></div>
                
                {/* Subtle Light Spots */}
                <div className="absolute inset-0 opacity-30">
                  <div className="absolute top-6 left-12 w-2 h-2 bg-white/60 rounded-full blur-sm"></div>
                  <div className="absolute top-16 right-16 w-1.5 h-1.5 bg-gray-200/80 rounded-full blur-sm"></div>
                  <div className="absolute bottom-20 left-20 w-2 h-2 bg-white/50 rounded-full blur-sm"></div>
                  <div className="absolute bottom-12 right-12 w-1 h-1 bg-white/70 rounded-full blur-sm"></div>
                  <div className="absolute top-1/2 left-1/3 w-1.5 h-1.5 bg-gray-100/60 rounded-full blur-sm"></div>
                  <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-white/80 rounded-full blur-sm"></div>
                </div>
                
                {/* Glass Edge Highlights */}
                <div className="absolute top-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"></div>
                <div className="absolute bottom-0 left-4 right-4 h-px bg-gradient-to-r from-transparent via-gray-200/30 to-transparent"></div>
                <div className="absolute left-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-white/30 to-transparent"></div>
                <div className="absolute right-0 top-4 bottom-4 w-px bg-gradient-to-b from-transparent via-gray-100/20 to-transparent"></div>
              </div>
              
                <div className="relative z-10 p-6">
                  <div className="text-center mb-8">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.6 }}
                    >
                      <div className="relative inline-block">
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-nai-highlight to-nai-deep-teal bg-clip-text text-transparent mb-3 drop-shadow-sm">
                          Success Stories
                        </h3>
                        <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-16 h-0.5 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full"></div>
                      </div>
                      <p className="text-sm text-gray-700 font-medium mt-4">
                        <span className="text-nai-highlight font-semibold">Real nurses</span>, 
                        <span className="text-gray-600"> real results</span>
                      </p>
                    </motion.div>
                  </div>

                {/* Testimonial card */}
                <div className="relative h-20 mb-6 overflow-hidden isolate z-0">
                  <AnimatePresence mode="wait">
                    {(() => {
                      const student = realHeroTestimonials[tIndex]
                      return (
                        <motion.div
                          key={tIndex}
                          className="absolute inset-0 bg-white/80 backdrop-blur-md rounded-xl shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] border border-white/60 p-3 will-change-transform"
                          initial={{ opacity: 0, y: 18, filter: 'blur(2px)' }}
                          animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                          exit={{ opacity: 0, y: -18, filter: 'blur(2px)' }}
                          transition={{ duration: 0.45, ease: 'easeInOut' }}
                        >
                          <div className="flex items-center gap-3 h-full">
                            <div className="relative shrink-0">
                              <div className="w-10 h-10 rounded-full overflow-hidden shadow-sm ring-2 ring-white">
                                <img
                                  src={student.img}
                                  alt={`${student.name} - Successful ${student.course} graduate from ${student.country}`}
                                  className="w-full h-full object-cover content-visibility-auto"
                                  width="40"
                                  height="40"
                                  loading={tIndex === 0 ? "eager" : "lazy"}
                                  fetchpriority={tIndex === 0 ? "high" : "low"}
                                  decoding="async"
                                />
                              </div>
                              <div className="absolute -bottom-1 -right-1 bg-green-500 text-white rounded-full p-0.5">
                                <CheckCircle className="w-2.5 h-2.5" />
                              </div>
                            </div>

                            <div className="flex-1 min-w-0">
                              <div className="flex items-center gap-2 mb-1">
                                <h4 className="font-bold text-gray-900 text-sm truncate">{student.name}</h4>
                                <div className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-[10px] font-semibold">
                                  PASSED
                                </div>
                              </div>
                              <p className="text-xs text-gray-600 mb-1 font-medium truncate">
                                {student.course} • {student.country}
                              </p>
                              <p className="text-xs text-gray-800 italic leading-relaxed line-clamp-1">
                                “{student.quote}”
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      )
                    })()}
                  </AnimatePresence>
                </div>

                {/* Student grid - Mobile: 8 images (4x2), Desktop: 10 images (5x2) */}
                <motion.div 
                  className="grid grid-cols-4 sm:grid-cols-5 gap-2 mb-6 relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  {/* Show 10 images total - responsive grid will handle layout */}
                  {realHeroGridStudents.slice(0, 10).map((student, i) => {
                    return (
                      <motion.div
                        key={i}
                        className={`bg-white/70 backdrop-blur-md rounded-lg shadow-[0_2px_8px_0_rgba(31,38,135,0.15)] border border-white/50 p-1.5 sm:p-2 text-center relative hover:shadow-[0_4px_16px_0_rgba(31,38,135,0.25)] hover:bg-white/80 transition-all duration-500 ${i >= 8 ? 'hidden sm:block' : ''}`}
                        initial={{ opacity: 0, scale: 0.7, y: 20 }}
                        animate={{ 
                          opacity: [0, 0.3, 0.7, 1, 1, 1, 0.7, 0.3, 0], 
                          scale: [0.7, 0.8, 0.9, 1, 1, 1, 0.9, 0.8, 0.7],
                          y: [20, 10, 5, 0, 0, 0, 5, 10, 20]
                        }}
                        transition={{ 
                          duration: 8, // Faster animation: 12s → 8s
                          repeat: Infinity, 
                          delay: i * 0.6, // Faster stagger: 0.8s → 0.6s
                          ease: [0.25, 0.1, 0.25, 1],
                          times: [0, 0.1, 0.2, 0.3, 0.4, 0.6, 0.7, 0.8, 1]
                        }}
                        whileHover={{ scale: 1.08, transition: { duration: 0.3 } }}
                      >
                        <div className="w-6 h-6 sm:w-8 sm:h-8 rounded-full overflow-hidden shadow-sm mx-auto mb-1 bg-gradient-to-br from-nai-highlight to-nai-deep-teal">
                          <img 
                            src={student.img} 
                            alt={`${student.name} - Successful ${student.course} graduate`}
                            className="w-full h-full object-cover content-visibility-auto"
                            width="32"
                            height="32"
                            loading={i < 4 ? "eager" : "lazy"}
                            fetchpriority={i < 2 ? "high" : "low"}
                            decoding="async"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              e.target.parentElement.innerHTML = `<div class="w-full h-full flex items-center justify-center text-white text-xs font-bold">${student.name.charAt(0)}</div>`;
                            }}
                          />
                        </div>
                        <h6 className="font-semibold text-gray-900 text-[10px] sm:text-xs mb-0.5 sm:mb-1 leading-tight">{student.name}</h6>
                        <p className="text-[9px] sm:text-xs text-gray-600 mb-0.5 sm:mb-1">{student.course}</p>
                        <div className="bg-green-100 text-green-800 px-1 py-0.5 rounded-full text-[8px] sm:text-xs font-semibold">
                          PASSED
                        </div>
                      </motion.div>
                    )
                  })}
                </motion.div>

                {/* CTA */}
                <motion.div 
                  className="text-center relative z-10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="bg-white/75 backdrop-blur-md rounded-xl p-4 shadow-[0_4px_16px_0_rgba(31,38,135,0.2)] border border-white/60">
                    <div className="flex items-center justify-center gap-2 mb-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-current" />
                      <span className="text-sm font-semibold text-gray-900">Join Our Success Stories</span>
                    </div>
                    <p className="text-xs text-gray-600 mb-3">Be part of our growing community of successful nurses</p>
                    <Link 
                      to="/pages/contact#contact-form"
                      className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal hover:from-nai-deep-teal hover:to-nai-highlight text-white px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 w-full shadow-[0_2px_8px_0_rgba(0,188,201,0.3)] hover:shadow-[0_4px_16px_0_rgba(0,188,201,0.4)] flex items-center justify-center gap-2"
                    >
                      Start Your Journey Today
                      <ArrowRight className="hidden sm:block w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Wave Graphics Bottom */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        {/* Primary Wave Layer */}
        <svg 
          className="relative block w-full h-24 sm:h-32 md:h-40 lg:h-48"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#52d1db" stopOpacity="0.8" />
              <stop offset="25%" stopColor="#00bcc9" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#2a8a96" stopOpacity="0.8" />
              <stop offset="75%" stopColor="#00bcc9" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#52d1db" stopOpacity="0.8" />
            </linearGradient>
          </defs>
          <motion.path 
            fill="url(#waveGradient1)" 
            d="M0,200L48,205C96,210,192,220,288,218C384,216,480,202,576,200C672,198,768,208,864,210C960,212,1056,206,1152,202C1248,198,1344,196,1392,195L1440,194L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              d: [
                "M0,200L48,205C96,210,192,220,288,218C384,216,480,202,576,200C672,198,768,208,864,210C960,212,1056,206,1152,202C1248,198,1344,196,1392,195L1440,194L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,195L48,198C96,201,192,207,288,205C384,203,480,193,576,195C672,197,768,211,864,208C960,205,1056,195,1152,198C1248,201,1344,207,1392,210L1440,213L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,205L48,202C96,199,192,193,288,198C384,203,480,209,576,205C672,201,768,187,864,192C960,197,1056,211,1152,208C1248,205,1344,195,1392,190L1440,185L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,200L48,205C96,210,192,220,288,218C384,216,480,202,576,200C672,198,768,208,864,210C960,212,1056,206,1152,202C1248,198,1344,196,1392,195L1440,194L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{ 
              pathLength: { duration: 3, ease: "easeInOut" },
              opacity: { duration: 2, delay: 0.5 },
              d: { duration: 25, repeat: Infinity, ease: "easeInOut" }
            }}
          />
        </svg>

        {/* Secondary Wave Layer */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-20 sm:h-24 md:h-32 lg:h-36"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0.9" />
              <stop offset="50%" stopColor="#f7f9fa" stopOpacity="0.95" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0.9" />
            </linearGradient>
          </defs>
          <motion.path 
            fill="url(#waveGradient2)" 
            d="M0,240L48,235C96,230,192,220,288,225C384,230,480,250,576,245C672,240,768,210,864,220C960,230,1056,270,1152,260C1248,250,1344,190,1392,210L1440,230L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              d: [
                "M0,240L48,235C96,230,192,220,288,225C384,230,480,250,576,245C672,240,768,210,864,220C960,230,1056,270,1152,260C1248,250,1344,190,1392,210L1440,230L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,235L48,240C96,245,192,255,288,250C384,245,480,225,576,230C672,235,768,265,864,255C960,245,1056,205,1152,215C1248,225,1344,275,1392,250L1440,225L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,245L48,230C96,215,192,185,288,200C384,215,480,265,576,260C672,255,768,195,864,210C960,225,1056,275,1152,270C1248,265,1344,205,1392,225L1440,245L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,240L48,235C96,230,192,220,288,225C384,230,480,250,576,245C672,240,768,210,864,220C960,230,1056,270,1152,260C1248,250,1344,190,1392,210L1440,230L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{ 
              pathLength: { duration: 4, ease: "easeInOut" },
              opacity: { duration: 2.5, delay: 1 },
              d: { duration: 30, repeat: Infinity, ease: "easeInOut", delay: 8 }
            }}
          />
        </svg>

        {/* Accent Wave Layer */}
        <svg 
          className="absolute bottom-0 left-0 w-full h-16 sm:h-20 md:h-24 lg:h-28"
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 1440 320"
          preserveAspectRatio="none"
        >
          <defs>
            <linearGradient id="waveGradient3" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#52d1db" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#00bcc9" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#2a8a96" stopOpacity="0.3" />
            </linearGradient>
          </defs>
          <motion.path 
            fill="url(#waveGradient3)" 
            d="M0,270L48,275C96,280,192,290,288,285C384,280,480,260,576,265C672,270,768,300,864,290C960,280,1056,230,1152,240C1248,250,1344,320,1392,305L1440,290L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ 
              pathLength: 1, 
              opacity: 1,
              d: [
                "M0,270L48,275C96,280,192,290,288,285C384,280,480,260,576,265C672,270,768,300,864,290C960,280,1056,230,1152,240C1248,250,1344,320,1392,305L1440,290L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,275L48,270C96,265,192,255,288,260C384,265,480,285,576,280C672,275,768,245,864,255C960,265,1056,305,1152,295C1248,285,1344,235,1392,250L1440,265L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,265L48,280C96,295,192,325,288,310C384,295,480,245,576,250C672,255,768,285,864,275C960,265,1056,225,1152,235C1248,245,1344,295,1392,280L1440,265L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,270L48,275C96,280,192,290,288,285C384,280,480,260,576,265C672,270,768,300,864,290C960,280,1056,230,1152,240C1248,250,1344,320,1392,305L1440,290L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{ 
              pathLength: { duration: 5, ease: "easeInOut" },
              opacity: { duration: 3, delay: 1.5 },
              d: { duration: 35, repeat: Infinity, ease: "easeInOut", delay: 15 }
            }}
          />
        </svg>

        {/* Side Wave Effects */}
        {/* Left Side Subtle Wave */}
        <div className="absolute left-0 bottom-0 w-8 sm:w-12 md:w-16 h-full">
          <motion.div
            className="w-full h-full bg-gradient-to-r from-nai-teal/10 via-nai-highlight/5 to-transparent"
            initial={{ opacity: 0, x: -20 }}
            animate={{ 
              opacity: [0.3, 0.6, 0.3], 
              x: [-5, 5, -5],
              scaleY: [0.8, 1.1, 0.8]
            }}
            transition={{ 
              duration: 20, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 5
            }}
          />
        </div>

        {/* Right Side Subtle Wave */}
        <div className="absolute right-0 bottom-0 w-8 sm:w-12 md:w-16 h-full">
          <motion.div
            className="w-full h-full bg-gradient-to-l from-nai-deep-teal/10 via-nai-teal/5 to-transparent"
            initial={{ opacity: 0, x: 20 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3], 
              x: [5, -5, 5],
              scaleY: [0.9, 1.2, 0.9]
            }}
            transition={{ 
              duration: 22, 
              repeat: Infinity, 
              ease: "easeInOut",
              delay: 10
            }}
          />
        </div>
      </div>

      {/* Scroll indicator - positioned above waves */}
      <motion.div 
        className="absolute bottom-16 sm:bottom-20 md:bottom-24 lg:bottom-28 left-1/2 transform -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 2 }}
      >
        <div className="w-6 h-10 border-2 border-white/60 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
          <motion.div 
            className="w-1 h-3 bg-white rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
