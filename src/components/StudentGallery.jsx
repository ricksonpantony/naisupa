import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { ChevronLeft, ChevronRight, X, Quote } from 'lucide-react'
import { getGalleryImageUrl } from '../utils/imageStorage'

const StudentGallery = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedStudent, setSelectedStudent] = useState(null)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const students = [
    {
      id: 1,
      name: "Aayushma Koirala",
      course: "NCLEX-RN Passer",
      image: getGalleryImageUrl("NAI GALLERY/Students/Aayushma%20Koirala.webp"),
      quote: "NAI's comprehensive training program gave me the confidence and skills I needed to pass the NCLEX-RN on my first attempt. The educators are amazing!",
      country: "Nepal",
      passDate: "March 2024",
      score: "95%",
      flag: "��"
    },
    {
      id: 2,
      name: "Abhay Sharma",
      course: "OSCE Passer",
      image: getGalleryImageUrl("NAI GALLERY/Students/Abhay%20Sharma.webp"),
      quote: "The OBA pathway seemed daunting, but NAI's structured approach and supportive environment made all the difference. Highly recommended!",
      country: "India",
      passDate: "February 2024",
      score: "92%",
      flag: "�🇳"
    },
    {
      id: 3,
      name: "Airi Sano",
      course: "NCLEX-NGN Passer",
      image: getGalleryImageUrl("NAI GALLERY/Students/Airi%20Sano.webp"),
      quote: "The new NCLEX format was challenging, but NAI's updated curriculum and practice sessions prepared me perfectly. Thank you for believing in me!",
      country: "Japan",
      passDate: "January 2024",
      score: "98%",
      flag: "��"
    },
    {
      id: 4,
      name: "Akindele Titilayo",
      course: "OSCE Passer",
      image: getGalleryImageUrl("NAI GALLERY/Students/Akindele%20Titilayo.webp"),
      quote: "Coming from Nigeria, I was nervous about the Australian healthcare system. NAI helped me understand the cultural aspects and clinical skills needed.",
      country: "Nigeria",
      passDate: "December 2023",
      score: "89%",
      flag: "�🇬"
    },
    {
      id: 5,
      name: "Aneesha Gottamukkala",
      course: "NCLEX-RN Passer",
      image: getGalleryImageUrl("NAI GALLERY/Students/Aneesha%20Gottamukkala.webp"),
      quote: "The mock exams and personalized feedback were game-changers. I felt completely prepared and confident on exam day.",
      country: "India",
      passDate: "November 2023",
      score: "94%",
      flag: "��"
    },
    {
      id: 6,
      name: "Bianca Asuncion",
      course: "NCLEX-NGN Passer",
      image: getGalleryImageUrl("NAI GALLERY/Students/Bianca%20Asuncion.webp"),
      quote: "NAI's focus on clinical judgment really paid off. The case studies and critical thinking exercises were exactly what I needed.",
      country: "Philippines",
      passDate: "October 2023",
      score: "96%",
      flag: "��"
    }
  ]

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [isAutoPlaying, students.length])

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % students.length)
    setIsAutoPlaying(false)
  }

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + students.length) % students.length)
    setIsAutoPlaying(false)
  }

  const openLightbox = (student) => {
    setSelectedStudent(student)
    setIsAutoPlaying(false)
  }

  const closeLightbox = () => {
    setSelectedStudent(null)
    setIsAutoPlaying(true)
  }

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-12 sm:mb-16 lg:mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-responsive-lg font-bold text-nai-dark mb-4 sm:mb-6">
            Student <span className="text-gradient">Success Stories</span>
          </h2>
          <p className="text-responsive-sm text-gray-600 max-w-3xl mx-auto">
            Meet some of our successful Nurses who have achieved their nursing dreams with NAI's support.
          </p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-8 mb-12">
          {students.slice(0, 6).map((student, index) => (
            <motion.div
              key={student.id}
              className="card p-6 cursor-pointer group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => openLightbox(student)}
              whileHover={{ scale: 1.02 }}
            >
              <div className="relative mb-4">
                <img
                  src={student.image}
                  alt={student.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-nai-teal/20 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Quote className="w-8 h-8 text-white" />
                </div>
                {/* Score Badge */}
                <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                  {student.score}
                </div>
                {/* Flag */}
                <div className="absolute top-3 left-3 text-2xl">
                  {student.flag}
                </div>
              </div>
              <h3 className="text-xl font-semibold text-nai-dark mb-1">{student.name}</h3>
              <p className="text-nai-highlight font-medium mb-2">{student.course}</p>
              <p className="text-gray-600 text-sm mb-3">{student.country} • {student.passDate}</p>
              <p className="text-gray-600 text-sm line-clamp-3">{student.quote}</p>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden relative">
          <div className="overflow-hidden rounded-2xl">
            <motion.div
              className="flex"
              animate={{ x: -currentIndex * 100 + "%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
            >
              {students.map((student) => (
                <div key={student.id} className="w-full flex-shrink-0 px-4">
                  <div className="card p-6">
                    <div className="relative mb-4">
                      <img
                        src={student.image}
                        alt={student.name}
                        className="w-full h-64 object-cover rounded-lg"
                      />
                      {/* Score Badge */}
                      <div className="absolute top-3 right-3 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
                        {student.score}
                      </div>
                      {/* Flag */}
                      <div className="absolute top-3 left-3 text-2xl">
                        {student.flag}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-nai-dark mb-1">{student.name}</h3>
                    <p className="text-nai-highlight font-medium mb-2">{student.course}</p>
                    <p className="text-gray-600 text-sm mb-3">{student.country} • {student.passDate}</p>
                    <p className="text-gray-600 text-sm">{student.quote}</p>
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
            {students.map((_, index) => (
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
          {selectedStudent && (
            <motion.div
              className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeLightbox}
            >
              <motion.div
                className="bg-white rounded-2xl max-w-2xl w-full"
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
                  
                  <div className="text-center flex flex-col items-center">
                    <div className="relative inline-block mb-6">
                      <div className="w-32 h-32 rounded-full overflow-hidden flex items-center justify-center bg-gray-100">
                        <img
                          src={selectedStudent.image}
                          alt={selectedStudent.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      {/* Score Badge */}
                      <div className="absolute -top-2 -right-2 bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                        {selectedStudent.score}
                      </div>
                      {/* Flag */}
                      <div className="absolute -bottom-2 -left-2 text-3xl bg-white rounded-full p-1">
                        {selectedStudent.flag}
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-nai-dark mb-2">{selectedStudent.name}</h3>
                    <p className="text-nai-highlight font-semibold mb-2">{selectedStudent.course}</p>
                    <p className="text-gray-600 mb-6">{selectedStudent.country} • {selectedStudent.passDate}</p>
                    
                    <div className="bg-nai-soft rounded-lg p-6">
                      <Quote className="w-8 h-8 text-nai-highlight mx-auto mb-4" />
                      <p className="text-gray-700 italic text-lg leading-relaxed">
                        "{selectedStudent.quote}"
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-gradient-to-r from-nai-teal to-nai-deep-teal rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-6">Join Our Success Stories</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold mb-2">3000+</div>
                <div className="text-sm opacity-90">Students Passed</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">95%</div>
                <div className="text-sm opacity-90">Success Rate</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">25+</div>
                <div className="text-sm opacity-90">Countries</div>
              </div>
              <div>
                <div className="text-3xl font-bold mb-2">5+</div>
                <div className="text-sm opacity-90">Years Experience</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default StudentGallery
