import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Trophy, Users, BookOpen, Heart, MessageCircle, GraduationCap, FileText, Video, Headphones, Repeat, Search, UserCheck, Award, Briefcase, ArrowRight, Sparkles } from 'lucide-react'

const WhyChoose = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const features = [
    {
      icon: Trophy,
      title: "Proven Success Rates",
      description: "Our students consistently excel in their NCLEX-RN and OSCE exams with outstanding results",
      color: "text-yellow-500"
    },
    {
      icon: GraduationCap,
      title: "Dedicated Teachers",
      description: "Our dedicated teachers have a passion for teaching and work together with students to create the best learning environment",
      color: "text-blue-500"
    },
    {
      icon: MessageCircle,
      title: "One-on-One Consultation",
      description: "Personalized approach with individual consultation sessions tailored to your specific requirements",
      color: "text-green-500"
    },
    {
      icon: BookOpen,
      title: "OBA Pathway Support",
      description: "Comprehensive support for the Objective Structured Clinical Examination process",
      color: "text-purple-500"
    },
    {
      icon: Video,
      title: "Live & Recorded Sessions",
      description: "Flexible learning with live classes and recorded sessions available for review at your convenience",
      color: "text-indigo-500"
    },
    {
      icon: FileText,
      title: "Extensive Mock Tests",
      description: "Comprehensive mock testing system with detailed feedback and performance analysis",
      color: "text-teal-500"
    },
    {
      icon: Headphones,
      title: "24x7 Support",
      description: "Dedicated support helpdesk available whenever you need assistance in your learning journey",
      color: "text-pink-500"
    },
    {
      icon: Repeat,
      title: "Unlimited Practice Tests",
      description: "Practice to your heart's content with unlimited access to practice tests until you feel confident",
      color: "text-orange-500"
    }
  ]

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
            Why Choose <span className="text-gradient">NAI</span> for Your Nursing Career?
          </h2>
          <p className="text-responsive-sm text-gray-600 max-w-3xl mx-auto mb-6">
            We're committed to your success with proven methods, expert guidance, and comprehensive support throughout your nursing journey. Discover why thousands of international nurses trust NAI for their NCLEX Australia and OSCE preparation Australia needs.
          </p>
          
          {/* SEO: Additional descriptive content */}
          <div className="max-w-4xl mx-auto text-sm text-gray-600 leading-relaxed">
            <p>
              Nurse Assist International stands as Australia's premier nursing education institute, specializing in comprehensive training programs for internationally qualified nurses. Our expert team provides personalized guidance and support, ensuring every student receives the attention they need to succeed in their nursing career goals.
            </p>
          </div>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="card p-6 sm:p-8 text-center group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className={`w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-4 sm:mb-6 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-nai-teal/10 transition-colors duration-300`}>
                <feature.icon className={`w-6 h-6 sm:w-8 sm:h-8 ${feature.color} group-hover:text-nai-highlight transition-colors duration-300`} />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-nai-dark mb-3 sm:mb-4">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Journey Steps - Enhanced Design */}
        <motion.div 
          className="mt-12 sm:mt-16 lg:mt-20 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          {/* Background with enhanced gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-nai-soft via-white to-nai-teal/5 rounded-3xl"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-nai-highlight/5 via-transparent to-nai-teal/5 rounded-3xl"></div>
          
          <div className="relative p-8 sm:p-12">
            {/* Enhanced Header */}
            <div className="text-center mb-12">
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-nai-highlight/10 to-nai-teal/10 rounded-full mb-6"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                <Sparkles className="w-4 h-4 text-nai-highlight" />
                <span className="text-sm font-semibold bg-gradient-to-r from-nai-highlight to-nai-teal bg-clip-text text-transparent">
                  YOUR SUCCESS PATHWAY
                </span>
                <Sparkles className="w-4 h-4 text-nai-teal" />
              </motion.div>
              
              <motion.h3 
                className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <span className="bg-gradient-to-r from-nai-highlight via-nai-teal to-nai-deep-teal bg-clip-text text-transparent">
                Your Journey
              </span>
                <br />
                <span className="text-gray-800">to Success</span>
              </motion.h3>
              
              <motion.p 
                className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                Transform your nursing career with our proven 4-step pathway to Australian registration success
              </motion.p>
            </div>

            {/* Journey Steps with connecting line */}
            <div className="relative">
              {/* Connecting line for desktop */}
              <div className="hidden md:block absolute top-12 left-1/2 transform -translate-x-1/2 w-3/4 h-0.5 bg-gradient-to-r from-nai-highlight via-nai-teal to-nai-deep-teal opacity-30"></div>
              
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
                {/* Step 1 */}
                <motion.div 
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 0.9 }}
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-nai-highlight/30">
                      <Search className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      1
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-nai-highlight transition-colors duration-300">
                    Discover & Choose
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Explore our comprehensive programs and select the perfect course tailored to your nursing goals and experience level
                  </p>
                  
                  {/* Arrow for mobile */}
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-nai-highlight" />
                  </div>
                </motion.div>

                {/* Step 2 */}
                <motion.div 
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.0 }}
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-nai-teal to-nai-highlight rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-nai-teal/30">
                      <UserCheck className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      2
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-nai-teal transition-colors duration-300">
                    Expert Training
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Learn from qualified Australian nurses with personalized guidance, live sessions, and comprehensive study materials
                  </p>
                  
                  {/* Arrow for mobile */}
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-nai-teal" />
                  </div>
                </motion.div>

                {/* Step 3 */}
                <motion.div 
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.1 }}
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-nai-deep-teal to-nai-highlight rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-nai-deep-teal/30">
                      <Award className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      3
                    </div>
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-nai-deep-teal transition-colors duration-300">
                    Ace Your Exams
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Successfully pass NCLEX & OSCE exams with confidence using our proven strategies and unlimited practice tests
                  </p>
                  
                  {/* Arrow for mobile */}
                  <div className="md:hidden flex justify-center mt-6">
                    <ArrowRight className="w-6 h-6 text-nai-deep-teal" />
                  </div>
                </motion.div>

                {/* Step 4 */}
                <motion.div 
                  className="relative text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <div className="relative mb-6">
                    <div className="w-24 h-24 bg-gradient-to-br from-nai-highlight to-nai-teal rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl group-hover:shadow-2xl group-hover:shadow-nai-highlight/30">
                      <Briefcase className="w-10 h-10 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg">
                      4
                    </div>
          </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-nai-highlight transition-colors duration-300">
                    Launch Career
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    Begin your rewarding nursing career in Australia with full registration and the confidence to excel in your new role
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Success Highlights */}
            <motion.div 
              className="mt-12 pt-8 border-t border-gray-200"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 1.3 }}
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                <div className="group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-nai-highlight to-nai-teal bg-clip-text text-transparent mb-2">
                    Excellence
                  </div>
                  <p className="text-gray-600 font-medium">Proven Track Record</p>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-nai-teal to-nai-deep-teal bg-clip-text text-transparent mb-2">
                    5000+
                  </div>
                  <p className="text-gray-600 font-medium">Successful Students</p>
                </div>
                <div className="group">
                  <div className="text-3xl font-bold bg-gradient-to-r from-nai-deep-teal to-nai-highlight bg-clip-text text-transparent mb-2">
                    Australia's
                  </div>
                  <p className="text-gray-600 font-medium">Leading Training Hub</p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  )
}

export default WhyChoose
