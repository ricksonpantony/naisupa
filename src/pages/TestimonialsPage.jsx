import React, { useState, useEffect, useRef } from 'react'
import { Helmet } from 'react-helmet-async'
import { motion, AnimatePresence } from 'framer-motion'
import { Quote, Star, Heart, Award, ChevronLeft, ChevronRight, Users, BookOpen, Globe } from 'lucide-react'

const TestimonialsPage = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(0)
  const [visibleCards, setVisibleCards] = useState(new Set())
  const observerRef = useRef(null)
  const testimonialsRef = useRef(null)

  // Complete student testimonials data - ALL 31 students with their images
  const testimonials = [
    {
      id: 1,
      name: "Geordy George",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Geordy George.webp",
      text: "I recently cleared my Australia OSCE and couldn't be happier with the support and guidance I received from NAI! The training was comprehensive, well-structured, and focused on real exam scenarios. The instructors Preeti mam, Georgi sir, Geeta mam and Reena were knowledgeable, patient, and always ready to clarify doubts, which gave me the confidence I needed. The mock exam was really an eye opener for me and feedbacks were especially helpful in improving my clinical skills and communication. Thanks to their support, I successfully passed my OSCE on the first attempt! I highly recommend NAI to anyone preparing for the Australian nursing registration. Big thanks to Anshu mam, Jess and Rachel. Definitely all of you are the part of my success. You guys make me proud. Once again thank You so much. GOD BLESS YOU ALL. Always remember those days!!!"
    },
    {
      id: 2,
      name: "Nimrat Kaur",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Nimrat Kaur.webp",
      text: "I would like to thank you whole NAI team. With your support, guidance and appreciation I pass my OSCE exam. Thanks Georgi sir, Geeta ma'am, preeti ma'am and Rena ma'am. I highly recommend NAI to anyone who wants to pass their OSCE. You'll be in great hands!!"
    },
    {
      id: 3,
      name: "Jeni Jhonson",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Jeni Jhonson.webp",
      text: "Thank you NAI family for making this possible, especially Georgi sir and preeti mam for your constant motivation. I still remember the days we have been in the lab, every doubt and the procedures have been cleared that made it so smooth learning."
    },
    {
      id: 4,
      name: "Aayushma Koirala",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Aayushma Koirala.webp",
      text: "Excellent training center with experienced instructors. The hands-on practice sessions were invaluable for my OSCE preparation. NAI's comprehensive approach and dedicated support made all the difference in my nursing career journey. Highly recommend to all aspiring nurses."
    },
    {
      id: 5,
      name: "Bianca Asuncion",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Bianca Asuncion.webp",
      text: "NAI provided comprehensive OSCE training that helped me pass on my first attempt. The mock exams and personalized feedback were exceptional. The instructors created a supportive learning environment that built my confidence for the actual exam."
    },
    {
      id: 6,
      name: "Dax Patel",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Dax Patel.webp",
      text: "Professional and supportive environment at NAI. The instructors are knowledgeable and always ready to help. Great preparation for OSCE exam with practical hands-on training that mirrors real clinical scenarios."
    },
    {
      id: 7,
      name: "Ezina Paudel",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Ezina Paudel.webp",
      text: "Thank you NAI team for the excellent guidance and support throughout my OSCE preparation journey. The training was thorough and effective, with personalized attention that helped me identify and improve my weak areas."
    },
    {
      id: 8,
      name: "Jaskaran Singh",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Jaskaran Singh.webp",
      text: "Outstanding OSCE preparation program. The practical sessions and expert guidance from NAI instructors made all the difference in my success. The structured approach and continuous support helped me achieve my nursing registration goals."
    },
    {
      id: 9,
      name: "Johanna Mae Dela Torre",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Johanna Mae Dela Torre.webp",
      text: "NAI's OSCE training program exceeded my expectations. The structured approach and dedicated instructors helped me achieve my nursing registration goals. The practical training sessions were incredibly valuable for building clinical confidence."
    },
    {
      id: 10,
      name: "Libni Paul",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Libni Paul.webp",
      text: "Grateful for the comprehensive training and support from NAI. The mock exams and feedback sessions were particularly helpful for my OSCE success. The instructors provided excellent guidance throughout my preparation journey."
    },
    {
      id: 11,
      name: "Mia Raven",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Mia Raven.webp",
      text: "Excellent OSCE preparation with NAI. The hands-on training and expert guidance gave me the confidence to pass my exam successfully. The supportive learning environment made all the difference in my nursing career."
    },
    {
      id: 12,
      name: "Priyanka Patel",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Priyanka Patel.webp",
      text: "NAI's training program is comprehensive and well-structured. The instructors are experienced and provide excellent support throughout the preparation. Highly recommend for anyone serious about their nursing registration."
    },
    {
      id: 13,
      name: "Abhay Sharma",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Abhay Sharma.webp",
      text: "Fantastic experience with NAI's NCLEX preparation program. The instructors are highly qualified and provide personalized attention to each student. The practice questions and test-taking strategies helped me develop the skills needed for successful nursing practice."
    },
    {
      id: 14,
      name: "Airi Sano",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Airi Sano.webp",
      text: "NAI provided excellent NCLEX training with experienced instructors who are always ready to help. The comprehensive curriculum and practice tests made my preparation journey smooth and successful."
    },
    {
      id: 15,
      name: "Akindele Titilayo",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Akindele Titilayo.webp",
      text: "Outstanding support from NAI team throughout my OSCE preparation. The training methodology is excellent and the instructors provide valuable feedback that helps improve clinical skills and confidence."
    },
    {
      id: 16,
      name: "Aneesha Gottamukkala",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Aneesha Gottamukkala.webp",
      text: "Thank you NAI for the comprehensive NCLEX training. The structured approach and expert guidance helped me pass my exam successfully. The practice questions were particularly helpful in building confidence."
    },
    {
      id: 17,
      name: "Bunu Maharjan",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Bunu Maharjan.webp",
      text: "Excellent training center with professional instructors. NAI's OSCE preparation program is well-designed and effective. The hands-on practice sessions and personalized feedback made all the difference in my success."
    },
    {
      id: 18,
      name: "Ghah Eukeria",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Ghah Eukeria.webp",
      text: "NAI provided exceptional NCLEX training with experienced instructors who genuinely care about student success. The comprehensive program and supportive environment helped me achieve my nursing registration goals."
    },
    {
      id: 19,
      name: "Hadi Ahmadi",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Hadi Ahmadi.webp",
      text: "Great experience with NAI's OSCE preparation program. The instructors are knowledgeable and provide excellent guidance throughout the training. The practical sessions helped build the confidence needed for exam success."
    },
    {
      id: 20,
      name: "Jannis",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Jannis.webp",
      text: "Thank you NAI team for the excellent support and guidance. The NCLEX training program is comprehensive and well-structured. The instructors provided valuable feedback that helped me improve my test-taking skills."
    },
    {
      id: 21,
      name: "Jesse Brian",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Jesse Brian.webp",
      text: "Outstanding OSCE preparation with NAI. The training program is thorough and the instructors are highly experienced. The hands-on practice and mock exams were instrumental in my exam success."
    },
    {
      id: 22,
      name: "Linisha Parajuli",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Linisha Parajuli.webp",
      text: "Excellent training experience with NAI. The NCLEX preparation program is comprehensive and the instructors provide personalized attention. The supportive learning environment helped me achieve my nursing goals."
    },
    {
      id: 23,
      name: "Malek Al Talafha",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Malek Al Talafha.webp",
      text: "NAI provided exceptional OSCE training that helped me pass my exam successfully. The instructors are professional and knowledgeable, providing excellent guidance throughout the preparation process."
    },
    {
      id: 24,
      name: "Regina Abi",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Regina Abi.webp",
      text: "Thank you NAI for the comprehensive NCLEX training program. The structured approach and expert instruction helped me build the confidence and skills needed for successful nursing practice."
    },
    {
      id: 25,
      name: "Sangita Bhusal",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Sangita Bhusal.webp",
      text: "Excellent experience with NAI's OSCE preparation. The training is thorough and the instructors provide valuable feedback. The hands-on practice sessions were particularly helpful for building clinical confidence."
    },
    {
      id: 26,
      name: "Saritha",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Saritha.webp",
      text: "NAI provided outstanding NCLEX training with experienced instructors who are dedicated to student success. The comprehensive program and supportive environment made my preparation journey successful."
    },
    {
      id: 27,
      name: "Sonam Palden",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Sonam Palden.webp",
      text: "Great training experience with NAI. The OSCE preparation program is well-designed and effective. The instructors provide excellent guidance and support throughout the learning process."
    },
    {
      id: 28,
      name: "Swastika Parajuli",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Swastika Parajuli.webp",
      text: "Thank you NAI team for the excellent NCLEX training. The comprehensive program and expert instruction helped me achieve my nursing registration goals. Highly recommend to all aspiring nurses."
    },
    {
      id: 29,
      name: "Tamilarasi",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Tamilarasi.webp",
      text: "Excellent OSCE preparation with NAI. The training program is thorough and the instructors are highly qualified. The practical sessions and personalized feedback were instrumental in my exam success."
    },
    {
      id: 30,
      name: "Trisha Claire Apillanes",
      course: "NCLEX",
      image: "/Gallery/NAI GALLERY/Students/Trisha Claire Apillanes.webp",
      text: "NAI provided exceptional NCLEX training that exceeded my expectations. The structured approach and dedicated instructors helped me build the confidence needed for successful nursing practice."
    },
    {
      id: 31,
      name: "Zheena Formaran",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Zheena Formaran.webp",
      text: "Outstanding support from NAI throughout my OSCE preparation journey. The comprehensive training program and expert guidance helped me achieve my nursing registration goals successfully."
    }
  ]

  // Intersection Observer for card animations
  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const cardIndex = parseInt(entry.target.dataset.cardIndex)
            setVisibleCards(prev => new Set(prev).add(cardIndex))
          }
        })
      },
      { threshold: 0.2, rootMargin: '50px' }
    )

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  useEffect(() => {
    if (testimonialsRef.current && observerRef.current) {
      const cards = testimonialsRef.current.querySelectorAll('[data-card-index]')
      cards.forEach(card => observerRef.current.observe(card))
    }
  }, [])

  const openTestimonial = (testimonial, index) => {
    setSelectedTestimonial(testimonial)
    setCurrentIndex(index)
  }

  const closeTestimonial = () => {
    setSelectedTestimonial(null)
  }

  const navigateTestimonial = (direction) => {
    const newIndex = direction === 'next'
      ? (currentIndex + 1) % testimonials.length
      : (currentIndex - 1 + testimonials.length) % testimonials.length
    setSelectedTestimonial(testimonials[newIndex])
    setCurrentIndex(newIndex)
  }

  return (
    <>
      <Helmet>
        <title>Student Testimonials | NAI - Nurse Assist International</title>
        <meta name="description" content="Read inspiring testimonials from our successful nursing students. Discover how NAI helped them achieve their OSCE, NCLEX, and OBA goals in Australia." />
        <meta name="keywords" content="nursing testimonials, student success stories, OSCE testimonials, NCLEX success, NAI reviews, nursing education Australia" />
        <meta property="og:title" content="Student Testimonials | NAI - Nurse Assist International" />
        <meta property="og:description" content="Read inspiring testimonials from our successful nursing students." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://nurseassistinternational.com/testimonials" />

        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ReviewPage",
            "name": "NAI Student Testimonials",
            "description": "Testimonials from successful nursing students at Nurse Assist International",
            "provider": {
              "@type": "Organization",
              "name": "Nurse Assist International",
              "url": "https://nurseassistinternational.com"
            },
            "review": testimonials.map(testimonial => ({
              "@type": "Review",
              "author": {
                "@type": "Person",
                "name": testimonial.name
              },
              "reviewBody": testimonial.text.substring(0, 200) + "...",
              "reviewRating": {
                "@type": "Rating",
                "ratingValue": "5",
                "bestRating": "5"
              }
            }))
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white pt-20">
        {/* Compact Hero Section */}
        <div className="relative min-h-[50vh] bg-gradient-to-br from-nai-highlight via-nai-deep-teal to-nai-teal overflow-hidden">

          {/* Animated Background */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute inset-0 opacity-10"
              animate={{
                backgroundPosition: ['0% 0%', '100% 100%', '0% 0%']
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                backgroundSize: '60px 60px'
              }}
            />
          </div>

          {/* Floating Testimonial Previews */}
          <div className="absolute inset-0 overflow-hidden">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <motion.div
                key={index}
                className="absolute w-16 h-16 md:w-20 md:h-20 rounded-lg overflow-hidden shadow-2xl border border-white/20"
                style={{
                  left: `${15 + (index % 3) * 25}%`,
                  top: `${20 + Math.floor((index - 1) / 3) * 40}%`,
                }}
                animate={{
                  y: [0, -15, 0],
                  rotate: [0, 3, -3, 0],
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 6 + index,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: index * 0.5
                }}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 0.6, scale: 1 }}
              >
                <img
                  src={`/Gallery/NAI GALLERY/Students/${testimonials[index * 3]?.name}.webp`}
                  alt={`Student ${index}`}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
              </motion.div>
            ))}
          </div>

          {/* Main Hero Content */}
          <div className="relative z-20 flex items-center justify-center min-h-[50vh] px-4 sm:px-6 lg:px-8">
            <div className="text-center text-white max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
              >
                {/* Orbiting Stars Only */}
                <div className="relative w-16 h-16 mx-auto mb-4">
                  {[...Array(4)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute"
                      animate={{
                        rotate: [0, 360],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "linear",
                        delay: i * 2
                      }}
                      style={{
                        left: '50%',
                        top: '50%',
                        transformOrigin: `${40 + i * 6}px 0px`,
                      }}
                    >
                      <Star className="w-3 h-3 text-yellow-300 fill-yellow-300 drop-shadow-lg" />
                    </motion.div>
                  ))}
                </div>

                {/* Elegant Title */}
                <motion.h1
                  className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light text-white mb-4 leading-tight"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.6 }}
                >
                  <span className="font-thin">Student</span>
                  <br />
                  <span className="font-bold text-white">
                    Testimonials
                  </span>
                </motion.h1>

                {/* NAI Branding Badge */}
                <motion.div
                  className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/30 rounded-full px-4 py-2 mb-4"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  <span className="text-xl md:text-2xl font-black text-white tracking-wider drop-shadow-lg">
                    NAI
                  </span>
                  <span className="text-white/90 text-xs md:text-sm font-light tracking-wide">
                    Success Stories
                  </span>
                </motion.div>

                {/* Elegant Subtitle */}
                <motion.p
                  className="text-lg md:text-xl lg:text-2xl text-white/80 mb-6 font-light leading-relaxed max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Real stories of nursing excellence
                  <br />
                  <span className="text-base md:text-lg text-white/60">
                    Inspiring journeys from our students
                  </span>
                </motion.p>
              </motion.div>
            </div>
          </div>

          {/* Elegant Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30"
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="w-6 h-10 border border-white/40 rounded-full flex justify-center bg-white/5 backdrop-blur-sm">
              <motion.div
                className="w-1 h-2 bg-white/60 rounded-full mt-2"
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Testimonials Grid */}
        <div className="px-4 sm:px-6 lg:px-8 xl:px-12 2xl:px-16 py-16 md:py-20">
          <div ref={testimonialsRef} className="max-w-7xl mx-auto">

            {/* Section Header */}
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                What Our Students Say
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                Read inspiring testimonials from our successful students who achieved their nursing registration goals with NAI's expert guidance and support.
              </p>
            </motion.div>

            {/* Testimonials Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={testimonial.id}
                  data-card-index={index}
                  className="group relative cursor-pointer"
                  onClick={() => openTestimonial(testimonial, index)}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{
                    opacity: visibleCards.has(index) ? 1 : 0,
                    y: visibleCards.has(index) ? 0 : 50
                  }}
                  transition={{
                    duration: 0.6,
                    delay: visibleCards.has(index) ? index * 0.1 : 0
                  }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  {/* Card Container */}
                  <div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">

                    {/* Background Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-nai-highlight/5 via-transparent to-nai-deep-teal/5 opacity-0 group-hover:opacity-100 transition-all duration-500" />

                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6">
                      <Quote className="w-8 h-8 text-nai-highlight/30 group-hover:text-nai-highlight/60 transition-colors duration-300" />
                    </div>

                    {/* Student Image */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-nai-highlight/20 group-hover:border-nai-highlight/40 transition-all duration-300">
                        <img
                          src={testimonial.image}
                          alt={testimonial.name}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          loading="lazy"
                        />
                      </div>

                      {/* Rating Stars */}
                      <div className="flex justify-center mt-3 gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="relative z-10">
                      <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                        {testimonial.name}
                      </h3>

                      <div className="text-center mb-4">
                        <span className="inline-block bg-nai-highlight/10 text-nai-highlight px-3 py-1 rounded-full text-sm font-medium">
                          {testimonial.course}
                        </span>
                      </div>

                      <p className="text-gray-600 leading-relaxed line-clamp-4 text-center">
                        {testimonial.text.length > 150
                          ? testimonial.text.substring(0, 150) + "..."
                          : testimonial.text}
                      </p>

                      {/* Read More Button */}
                      <div className="text-center mt-6">
                        <span className="inline-flex items-center gap-2 text-nai-highlight font-semibold text-sm group-hover:gap-3 transition-all duration-300">
                          Read Full Story
                          <ChevronRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonial Modal */}
        {selectedTestimonial && <div className="fixed inset-0 bg-gradient-to-br from-black/95 via-slate-900/95 to-black/95 z-[2000] backdrop-blur-xl">
          <AnimatePresence>
            {selectedTestimonial && (
              <motion.div
                className="sticky inset-0 bg-black/80 backdrop-blur-md z-50 flex items-center justify-center p-4 h-[100vh]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={closeTestimonial}
              >
                <motion.div
                  className="relative max-w-4xl w-full"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.8, opacity: 0 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl overflow-y-auto">

                    {/* Close Button */}
                    <button
                      onClick={closeTestimonial}
                      className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors duration-200 z-10"
                    >
                      <span className="sr-only">Close</span>
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>

                    {/* Navigation */}
                    <button
                      onClick={() => navigateTestimonial('prev')}
                      className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-nai-highlight text-white rounded-full flex items-center justify-center hover:bg-nai-deep-teal transition-colors duration-200 z-10"
                    >
                      <ChevronLeft className="w-6 h-6" />
                    </button>

                    <button
                      onClick={() => navigateTestimonial('next')}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-nai-highlight text-white rounded-full flex items-center justify-center hover:bg-nai-deep-teal transition-colors duration-200 z-10"
                    >
                      <ChevronRight className="w-6 h-6" />
                    </button>

                    {/* Content */}
                    <div className="text-center flex flex-col items-center">

                      {/* Student Image - Fixed Centering */}
                      <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-nai-highlight/20 mb-6 flex-shrink-0">
                        <img
                          src={selectedTestimonial.image}
                          alt={selectedTestimonial.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Name and Course */}
                      <h3 className="text-3xl font-bold text-gray-900 mb-2">
                        {selectedTestimonial.name}
                      </h3>

                      <div className="mb-6">
                        <span className="inline-block bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full font-medium">
                          {selectedTestimonial.course}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex justify-center gap-1 mb-8">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>

                      {/* Full Testimonial */}
                      <div className="relative">
                        <Quote className="w-12 h-12 text-nai-highlight/20 mx-auto mb-6" />
                        <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
                          {selectedTestimonial.text}
                        </p>
                      </div>

                      {/* Counter */}
                      <div className="mt-8 text-sm text-gray-500">
                        {currentIndex + 1} of {testimonials.length}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>}
      </div>
    </>
  )
}

export default TestimonialsPage
