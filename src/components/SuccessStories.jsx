import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, X, Quote, Star, Award, MapPin, Calendar, Trophy, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../utils/imageStorage'

// Real testimonials from the testimonials page
const realTestimonials = [
  {
    id: 1,
    name: "Geordy George",
    course: "OSCE",
    image: getGalleryImageUrl('NAI GALLERY/Students/Geordy George.webp'),
    quote: "I recently cleared my Australia OSCE and couldn't be happier with the support and guidance I received from NAI!",
    testimonial: "The training was comprehensive, well-structured, and focused on real exam scenarios. The instructors Preeti mam, Georgi sir, Geeta mam and Reena were knowledgeable, patient, and always ready to clarify doubts, which gave me the confidence I needed. The mock exam was really an eye opener for me and feedbacks were especially helpful in improving my clinical skills and communication. Thanks to their support, I successfully passed my OSCE on the first attempt!",
    score: "PASS",
    country: "Australia",
    flag: "🇦🇺",
    passDate: "2024",
    achievement: "First Attempt Success",
    currentPosition: "Registered Nurse",
    studyDuration: "8 weeks",
    highlights: ["Mock Exams", "Expert Feedback", "Clinical Skills", "Communication Training"]
  },
  {
    id: 2,
    name: "Nimrat Kaur",
    course: "OSCE",
    image: getGalleryImageUrl('NAI GALLERY/Students/Nimrat Kaur.webp'),
    quote: "With your support, guidance and appreciation I pass my OSCE exam. Thanks Georgi sir, Geeta ma'am, preeti ma'am and Rena ma'am.",
    testimonial: "I would like to thank you whole NAI team. With your support, guidance and appreciation I pass my OSCE exam. Thanks Georgi sir, Geeta ma'am, preeti ma'am and Rena ma'am. I highly recommend NAI to anyone who wants to pass their OSCE. You'll be in great hands!!",
    score: "PASS",
    country: "Australia",
    flag: "🇦🇺",
    passDate: "2024",
    achievement: "Excellent Support",
    currentPosition: "Registered Nurse",
    studyDuration: "6 weeks",
    highlights: ["Expert Guidance", "Team Support", "Comprehensive Training", "Professional Care"]
  },
  {
    id: 3,
    name: "Jeni Jhonson",
    course: "OSCE",
    image: getGalleryImageUrl('NAI GALLERY/Students/Jeni Jhonson.webp'),
    quote: "Thank you NAI family for making this possible, especially Georgi sir and preeti mam for your constant motivation.",
    testimonial: "Thank you NAI family for making this possible, especially Georgi sir and preeti mam for your constant motivation. I still remember the days we have been in the lab, every doubt and the procedures have been cleared that made it so smooth learning.",
    score: "PASS",
    country: "Australia",
    flag: "🇦🇺",
    passDate: "2024",
    achievement: "Smooth Learning Experience",
    currentPosition: "Registered Nurse",
    studyDuration: "7 weeks",
    highlights: ["Lab Practice", "Procedure Clarity", "Constant Motivation", "Doubt Clearing"]
  },
  {
    id: 4,
    name: "Abhay Sharma",
    course: "NCLEX",
    image: getGalleryImageUrl('NAI GALLERY/Students/Abhay Sharma.webp'),
    quote: "Fantastic experience with NAI's NCLEX preparation program. The instructors are highly qualified and provide personalized attention.",
    testimonial: "Fantastic experience with NAI's NCLEX preparation program. The instructors are highly qualified and provide personalized attention to each student. The practice questions and test-taking strategies helped me develop the skills needed for successful nursing practice.",
    score: "PASS",
    country: "USA",
    flag: "🇺🇸",
    passDate: "2024",
    achievement: "Personalized Training",
    currentPosition: "Registered Nurse",
    studyDuration: "12 weeks",
    highlights: ["Practice Questions", "Test Strategies", "Personalized Attention", "Qualified Instructors"]
  },
  {
    id: 5,
    name: "Airi Sano",
    course: "NCLEX",
    image: getGalleryImageUrl('NAI GALLERY/Students/Airi Sano.webp'),
    quote: "NAI provided excellent NCLEX training with experienced instructors who are always ready to help.",
    testimonial: "NAI provided excellent NCLEX training with experienced instructors who are always ready to help. The comprehensive curriculum and practice tests made my preparation journey smooth and successful.",
    score: "PASS",
    country: "USA",
    flag: "🇺🇸",
    passDate: "2024",
    achievement: "Comprehensive Curriculum",
    currentPosition: "Registered Nurse",
    studyDuration: "10 weeks",
    highlights: ["Practice Tests", "Experienced Instructors", "Comprehensive Curriculum", "Always Available"]
  },
  {
    id: 6,
    name: "Bianca Asuncion",
    course: "OSCE",
    image: getGalleryImageUrl('NAI GALLERY/Students/Bianca Asuncion.webp'),
    quote: "NAI provided comprehensive OSCE training that helped me pass on my first attempt.",
    testimonial: "NAI provided comprehensive OSCE training that helped me pass on my first attempt. The mock exams and personalized feedback were exceptional. The instructors created a supportive learning environment that built my confidence for the actual exam.",
    score: "PASS",
    country: "Australia",
    flag: "🇦🇺",
    passDate: "2024",
    achievement: "First Attempt Success",
    currentPosition: "Registered Nurse",
    studyDuration: "8 weeks",
    highlights: ["Mock Exams", "Personalized Feedback", "Supportive Environment", "Confidence Building"]
  }
]

const SuccessStories = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedStory, setSelectedStory] = useState(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  const [filteredStories, setFilteredStories] = useState(realTestimonials)

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredStories.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, filteredStories.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % filteredStories.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + filteredStories.length) % filteredStories.length)
    setIsAutoPlaying(false)
  }

  const openLightbox = (story) => {
    setSelectedStory(story)
    setIsAutoPlaying(false)
  }

  const closeLightbox = () => {
    setSelectedStory(null)
    setIsAutoPlaying(true)
  }

  const filterByCourse = (course) => {
    if (course === 'all') {
      setFilteredStories(realTestimonials)
    } else {
      setFilteredStories(realTestimonials.filter(story => story.course === course))
    }
    setCurrentIndex(0)
  }

  const uniqueCourses = ['all', ...new Set(realTestimonials.map(story => story.course))]

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-nai-soft to-white">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-10"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          {/* Compact Header */}
          <div className="mb-6">
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nai-teal/10 to-nai-highlight/10 px-4 py-1.5 rounded-full mb-3">
              <Trophy className="w-4 h-4 text-nai-teal" />
              <span className="text-nai-teal font-semibold text-xs uppercase tracking-wider">Success Stories</span>
            </div>
            
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              Student <span className="bg-gradient-to-r from-nai-teal to-nai-highlight bg-clip-text text-transparent">Success</span>
            </h2>
            
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Real stories from our students who achieved their nursing dreams with NAI's training programs.
            </p>
          </div>

          {/* Compact Course Filter */}
          <div className="flex flex-wrap justify-center gap-2 mb-6">
            {uniqueCourses.map((course) => (
              <button
                key={course}
                onClick={() => filterByCourse(course)}
                className={`px-4 py-2 rounded-full text-xs font-semibold transition-all duration-300 ${
                  (course === 'all' && filteredStories.length === realTestimonials.length) ||
                  (course !== 'all' && filteredStories.some(story => story.course === course))
                    ? 'bg-gradient-to-r from-nai-teal to-nai-highlight text-white shadow-md'
                    : 'bg-white text-gray-600 border border-gray-200 hover:border-nai-teal/30 hover:text-nai-teal'
                }`}
              >
                {course === 'all' ? 'All Stories' : course}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Desktop Grid View - Compact Design */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-4 mb-8">
          {filteredStories.map((story, index) => (
            <motion.div
              key={story.id}
              className="group relative bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(story)}
            >
              {/* Compact Header with Round Image */}
              <div className="flex items-start gap-4 mb-3 relative">
                {/* Round Profile Image */}
                <div className="relative flex-shrink-0">
                  <div className="w-16 h-16 rounded-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                    <img
                      src={story.image}
                      alt={`${story.name} - Successful ${story.exam} passer with NAI guidance and support`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      width="64"
                      height="64"
                      loading="lazy"
                      decoding="async"
                    />
                  </div>
                  
                  {/* Country Flag - Small */}
                  <div className="absolute -bottom-1 -left-1 bg-white/95 rounded-full p-1 shadow-sm">
                    <span className="text-sm">{story.flag}</span>
                  </div>
                </div>

                {/* Name and Course Info */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-nai-teal transition-colors duration-300 truncate">
                    {story.name}
                  </h3>
                  
                  <div className="flex items-center gap-2 mb-1">
                    <span className="inline-flex items-center gap-1 bg-nai-teal/10 text-nai-teal px-2 py-0.5 rounded-full text-xs font-semibold">
                      <Award className="w-3 h-3" />
                      {story.course}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-3 text-xs text-gray-500">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {story.country}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      {story.passDate}
                    </span>
                  </div>
                </div>

                {/* Success Badge - Right Side */}
                <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                  <Trophy className="w-2.5 h-2.5" />
                  <span className="text-xs">Success</span>
                </div>
              </div>
              
              {/* Compact Quote */}
              <div className="mb-3">
                <p className="text-gray-700 text-sm italic leading-relaxed line-clamp-2">
                  "{story.quote}"
                </p>
              </div>
              
              {/* Achievement Badge */}
              <div className="flex items-center justify-between">
                <span className="inline-block bg-gradient-to-r from-nai-highlight/10 to-nai-teal/10 text-nai-dark px-2 py-1 rounded-full text-xs font-medium">
                  {story.achievement}
                </span>
                
                {/* Read More Icon */}
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-nai-teal text-white rounded-full p-1.5">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Show More Button - Compact */}
        <motion.div 
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <Link
            to="/pages/testimonials"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-nai-highlight to-nai-deep-teal text-white px-6 py-3 rounded-full font-semibold text-sm hover:shadow-lg hover:scale-105 transition-all duration-300 group"
          >
            <Quote className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
            View All Testimonials
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
          </Link>
          <p className="text-gray-500 text-xs mt-2">
            31+ inspiring success stories
          </p>
        </motion.div>

        {/* Mobile Carousel - Compact Design */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {filteredStories.map((story) => (
                <div key={story.id} className="w-full flex-shrink-0 px-4">
                  <div className="bg-white rounded-xl p-4 shadow-md">
                    {/* Compact Mobile Header */}
                    <div className="flex items-start gap-4 mb-3 relative">
                      {/* Round Profile Image */}
                      <div className="relative flex-shrink-0">
                        <div className="w-20 h-20 rounded-full overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-md">
                          <img
                            src={story.image}
                            alt={`${story.name} - ${story.exam} passer success story from ${story.country} with NAI training`}
                            className="w-full h-full object-cover"
                            width="80"
                            height="80"
                            loading="lazy"
                            decoding="async"
                          />
                        </div>
                        
                        {/* Country Flag */}
                        <div className="absolute -bottom-1 -left-1 bg-white/95 rounded-full p-1 shadow-sm">
                          <span className="text-base">{story.flag}</span>
                        </div>
                      </div>

                      {/* Name and Course Info */}
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg font-bold text-gray-900 mb-2">
                          {story.name}
                        </h3>
                        
                        <div className="flex items-center gap-2 mb-2">
                          <span className="inline-flex items-center gap-1 bg-nai-teal/10 text-nai-teal px-2 py-1 rounded-full text-xs font-semibold">
                            <Award className="w-3 h-3" />
                            {story.course}
                          </span>
                        </div>
                        
                        <div className="flex items-center gap-3 text-xs text-gray-500">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            {story.country}
                          </span>
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {story.passDate}
                          </span>
                        </div>
                      </div>

                      {/* Success Badge - Right Side */}
                      <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-md">
                        <Trophy className="w-3 h-3" />
                        <span>Success</span>
                      </div>
                    </div>
                    
                    {/* Compact Quote */}
                    <div className="mb-3">
                      <p className="text-gray-700 text-sm italic leading-relaxed">
                        "{story.quote}"
                      </p>
                    </div>
                    
                    {/* Achievement Badge */}
                    <div>
                      <span className="inline-block bg-gradient-to-r from-nai-highlight/10 to-nai-teal/10 text-nai-dark px-2 py-1 rounded-full text-xs font-medium">
                        {story.achievement}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Carousel Controls */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-nai-dark" />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow-lg transition-all duration-300"
          >
            <ChevronRight className="w-6 h-6 text-nai-dark" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {filteredStories.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-nai-highlight' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal */}
        <AnimatePresence>
          {selectedStory && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-4xl w-full"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-8 max-h-[90vh] overflow-y-auto">
                  <button
                    onClick={closeLightbox}
                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors z-10"
                  >
                    <X className="w-6 h-6" />
                  </button>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Left Column - Photo and Basic Info */}
                    <div className="text-center flex flex-col items-center">
                      <div className="relative inline-block mb-6">
                        <div className="w-48 h-48 rounded-2xl overflow-hidden bg-gradient-to-br from-gray-50 to-gray-100 shadow-lg flex items-center justify-center">
                          <img
                            src={selectedStory.image}
                            alt={`${selectedStory.name} - Successful ${selectedStory.exam} passer with Nurse Assist International training and support`}
                            className="w-full h-full object-cover"
                            width="192"
                            height="192"
                            loading="eager"
                            decoding="async"
                          />
                        </div>
                        {/* Success Badge */}
                        <div className="absolute -top-2 -right-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white text-sm font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg">
                          <Trophy className="w-4 h-4" />
                          Successfully Passed
                        </div>
                        {/* Flag */}
                        <div className="absolute -bottom-2 -left-2 bg-white/95 backdrop-blur-sm rounded-full p-2 shadow-lg">
                          <span className="text-2xl">{selectedStory.flag}</span>
                        </div>
                      </div>
                      
                      <h3 className="text-3xl font-bold text-nai-dark mb-2">{selectedStory.name}</h3>
                      <p className="text-nai-highlight font-semibold mb-2 flex items-center justify-center gap-2">
                        <Award className="w-5 h-5" />
                        {selectedStory.course}
                      </p>
                      <p className="text-gray-600 mb-4 flex items-center justify-center gap-2">
                        <MapPin className="w-4 h-4" />
                        {selectedStory.country} • <Calendar className="w-4 h-4" /> {selectedStory.passDate}
                      </p>
                      
                      <div className="bg-nai-soft rounded-lg p-4 mb-6">
                        <p className="text-sm text-gray-600 font-medium mb-2">Current Position</p>
                        <p className="text-nai-dark font-semibold">{selectedStory.currentPosition}</p>
                      </div>
                    </div>

                    {/* Right Column - Detailed Story */}
                    <div className="space-y-6">
                      <div className="bg-gradient-to-r from-nai-teal to-nai-deep-teal rounded-lg p-6 text-white">
                        <Quote className="w-8 h-8 mx-auto mb-4" />
                        <p className="text-lg italic leading-relaxed text-center">
                          "{selectedStory.quote}"
                        </p>
                      </div>
                      
                      <div>
                        <h4 className="text-xl font-semibold text-nai-dark mb-3">Success Story</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {selectedStory.testimonial}
                        </p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-nai-soft rounded-lg p-4">
                          <p className="text-sm text-gray-600 font-medium mb-1">Study Duration</p>
                          <p className="text-nai-dark font-semibold">{selectedStory.studyDuration}</p>
                        </div>
                        <div className="bg-nai-soft rounded-lg p-4">
                          <p className="text-sm text-gray-600 font-medium mb-1">Achievement</p>
                          <p className="text-nai-dark font-semibold text-sm">{selectedStory.achievement}</p>
                        </div>
                      </div>
                      
                      <div>
                        <h4 className="text-lg font-semibold text-nai-dark mb-3">Key Program Benefits</h4>
                        <div className="grid grid-cols-2 gap-2">
                          {selectedStory.highlights.map((highlight, index) => (
                            <div key={index} className="flex items-center gap-2 text-sm text-gray-700">
                              <Star className="w-4 h-4 text-nai-highlight flex-shrink-0" />
                              {highlight}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  )
}

export default SuccessStories
