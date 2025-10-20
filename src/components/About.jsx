import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Heart, Target, Users, Award, Eye, CheckCircle, Clock, BookOpen, Trophy, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../utils/imageStorage'

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const [activeStep, setActiveStep] = useState(0)

  // Leadership and Management Team
  const leadershipTeam = [
    {
      name: "Mr. Thomas Mathew",
      role: "Chief Executive Officer",
      specialization: "Strategic Leadership & Vision",
      image: getTeamImageUrl('CEO Mr. Thomas Mathew.avif'),
      achievements: ["Visionary Leader", "Healthcare Innovation", "Global Expansion Expert"]
    },
    {
      name: "Mr. Georgi Mathew",
      role: "Director",
      specialization: "Operations & Business Development",
      image: getTeamImageUrl('Managing Director Mr. Georgi Mathew.jpg'),
      achievements: ["Operations Excellence", "Strategic Planning", "International Relations"]
    },
    {
      name: "Ms. Preeti",
      role: "Lead Educator",
      specialization: "Educational Leadership & Program Development",
      image: getTeamImageUrl('Ms. Preeti - direcor -Educator.jpg'),
      achievements: ["Educational Leadership", "Curriculum Development", "Student Success Programs"]
    },
    {
      name: "Ms. Geeta",
      role: "Lead Educator",
      specialization: "Student Assessment & Development",
      image: getTeamImageUrl('Ms. Geeta Educator.avif'),
      achievements: ["Assessment Expert", "Student Development", "Academic Excellence"]
    },
    {
      name: "Ms. Anusha",
      role: "Senior Administrator",
      specialization: "Administrative Excellence & Student Services",
      image: getTeamImageUrl('Senior Administrator Ms. Anusha.avif'),
      achievements: ["Administrative Leadership", "Process Optimization", "Student Support Services"]
    }
  ]


  const timeline = [
    {
      step: "1",
      title: "Initial Assessment",
      description: "We evaluate your current qualifications and experience to create a personalized learning plan.",
      icon: BookOpen,
      duration: "1-2 weeks",
      features: ["Skills evaluation", "Personalized plan", "Goal setting"]
    },
    {
      step: "2",
      title: "Comprehensive Training",
      description: "Engage in our structured programs covering all aspects of NCLEX-RN and OSCE preparation.",
      icon: Target,
      duration: "8-12 weeks",
      features: ["Expert instruction", "Interactive modules", "Progress tracking"]
    },
    {
      step: "3",
      title: "Practice & Feedback",
      description: "Participate in mock exams and receive detailed feedback to improve your performance.",
      icon: Clock,
      duration: "4-6 weeks",
      features: ["Mock exams", "Detailed feedback", "Performance analysis"]
    },
    {
      step: "4",
      title: "Exam Success",
      description: "Take your exam with confidence, knowing you're fully prepared for success.",
      icon: Trophy,
      duration: "Ongoing support",
      features: ["Exam confidence", "Success guarantee", "Career support"]
    }
  ]

  const values = [
    {
      icon: Heart,
      title: "Compassion",
      description: "We care deeply about our students' success and well-being throughout their journey."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We maintain the highest standards in education and student support services."
    },
    {
      icon: Users,
      title: "Community",
      description: "We foster a supportive learning community where students help each other succeed."
    },
    {
      icon: Award,
      title: "Achievement",
      description: "We celebrate every milestone and success, big or small, in our students' journey."
    }
  ]

  return (
    <section ref={ref} className="section-padding bg-white">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
            About <span className="text-gradient">NAI</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Nurse Assist International is dedicated to helping internationally qualified nurses achieve their dreams of practicing in Australia.
          </p>
        </motion.div>

        {/* Story Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold text-nai-dark mb-6">Our Story</h3>
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                Founded by experienced nursing professionals who understand the challenges of international nursing registration, 
                NAI was born from a simple belief: every qualified nurse deserves the opportunity to practice their profession 
                in Australia.
              </p>
              <p>
                Over the past 5+ years, we've helped hundreds of internationally qualified nurses successfully navigate the 
                complex pathways to Australian nursing registration. Our comprehensive approach combines expert education, 
                cultural support, and personalized guidance.
              </p>
              <p>
                Today, NAI stands as a trusted partner for nurses worldwide, offering proven programs that deliver results 
                and build confidence for exam success.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-gradient-to-br from-nai-teal to-nai-deep-teal rounded-2xl p-8 text-white">
              <div className="text-center">
                <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Heart className="w-12 h-12 text-white" />
                </div>
                <h4 className="text-2xl font-bold mb-4">Our Mission</h4>
                <p className="text-blue-100 leading-relaxed">
                  To empower internationally qualified nurses with the knowledge, skills, and confidence needed to 
                  successfully transition to Australian nursing practice through comprehensive education and unwavering support.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="bg-gradient-to-br from-nai-highlight/10 to-nai-deep-teal/10 rounded-2xl p-8 border border-nai-highlight/20">
              <div className="text-center">
                <div className="w-24 h-24 bg-nai-highlight/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <Eye className="w-12 h-12 text-nai-highlight" />
                </div>
                <h4 className="text-2xl font-bold mb-4 text-nai-dark">Our Vision</h4>
                <p className="text-gray-700 leading-relaxed font-medium">
                  To empower internationally qualified nurses to become exemplary health practitioners in Australia, achieving their AU-RN status.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div 
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl font-bold text-nai-dark text-center mb-12">Our Values</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.1 }}
              >
                <div className="w-16 h-16 bg-nai-teal/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <value.icon className="w-8 h-8 text-nai-highlight" />
                </div>
                <h4 className="text-xl font-semibold text-nai-dark mb-3">{value.title}</h4>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Interactive OBA Pathway Journey */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-nai-highlight/10 to-nai-deep-teal/10 text-nai-highlight text-sm font-semibold uppercase tracking-wider px-6 py-3 rounded-full mb-6 border border-nai-highlight/20"
            >
              <Trophy className="w-4 h-4" />
              Your Success Journey
              <Trophy className="w-4 h-4" />
            </motion.div>
            <h3 className="text-3xl lg:text-4xl font-bold text-nai-dark mb-4">
              OBA Pathway <span className="text-gradient">Journey</span>
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto mb-8">
              Follow our proven 4-step pathway designed specifically for internationally qualified nurses
            </p>
            
            {/* Progress Bar */}
            <div className="max-w-md mx-auto mb-8">
              <div className="flex justify-between items-center mb-2">
                {timeline.map((_, index) => (
                  <div
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index <= activeStep ? 'bg-nai-highlight' : 'bg-gray-300'
                    }`}
                  />
                ))}
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-gradient-to-r from-nai-highlight to-nai-deep-teal h-2 rounded-full transition-all duration-500"
                  style={{ width: `${((activeStep + 1) / timeline.length) * 100}%` }}
                />
              </div>
            </div>
          </div>

          {/* Interactive Timeline Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {timeline.map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={index}
                  className={`relative group cursor-pointer ${
                    activeStep === index ? 'scale-105' : 'hover:scale-105'
                  } transition-all duration-300`}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                  onClick={() => setActiveStep(index)}
                  onMouseEnter={() => setActiveStep(index)}
                >
                  {/* Card */}
                  <div className={`bg-white rounded-2xl p-6 shadow-lg border-2 transition-all duration-300 h-full ${
                    activeStep === index 
                      ? 'border-nai-highlight shadow-xl bg-gradient-to-br from-white to-nai-highlight/5' 
                      : 'border-gray-100 hover:border-nai-highlight/30 hover:shadow-xl'
                  }`}>
                    {/* Step Number & Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-nai-highlight text-white' 
                          : 'bg-nai-highlight/10 text-nai-highlight group-hover:bg-nai-highlight group-hover:text-white'
                      }`}>
                        {item.step}
                      </div>
                      <div className={`w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-300 ${
                        activeStep === index 
                          ? 'bg-nai-deep-teal/20 text-nai-deep-teal' 
                          : 'bg-gray-100 text-gray-400 group-hover:bg-nai-deep-teal/20 group-hover:text-nai-deep-teal'
                      }`}>
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Duration Badge */}
                    <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-3 transition-all duration-300 ${
                      activeStep === index 
                        ? 'bg-nai-highlight/20 text-nai-highlight' 
                        : 'bg-gray-100 text-gray-500 group-hover:bg-nai-highlight/20 group-hover:text-nai-highlight'
                    }`}>
                      {item.duration}
                    </div>

                    {/* Title */}
                    <h4 className={`text-lg font-bold mb-3 transition-colors duration-300 ${
                      activeStep === index ? 'text-nai-dark' : 'text-gray-800 group-hover:text-nai-dark'
                    }`}>
                      {item.title}
                    </h4>

                    {/* Features */}
                    <div className="space-y-2">
                      {item.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center gap-2">
                          <CheckCircle className={`w-4 h-4 transition-colors duration-300 ${
                            activeStep === index ? 'text-green-500' : 'text-gray-400 group-hover:text-green-500'
                          }`} />
                          <span className="text-sm text-gray-600">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Active Indicator */}
                    {activeStep === index && (
                      <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        className="absolute -top-2 -right-2 w-6 h-6 bg-nai-highlight rounded-full flex items-center justify-center"
                      >
                        <CheckCircle className="w-4 h-4 text-white" />
                      </motion.div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Active Step Details */}
          <motion.div
            key={activeStep}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="bg-gradient-to-br from-nai-highlight/5 to-nai-deep-teal/5 rounded-2xl p-8 border border-nai-highlight/10"
          >
            <div className="text-center">
              <div className="inline-flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-nai-highlight rounded-full flex items-center justify-center text-white font-bold">
                  {timeline[activeStep].step}
                </div>
                <h4 className="text-2xl font-bold text-nai-dark">{timeline[activeStep].title}</h4>
              </div>
              <p className="text-gray-700 text-lg leading-relaxed max-w-3xl mx-auto">
                {timeline[activeStep].description}
              </p>
            </div>
          </motion.div>

          {/* Success Statistics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 1.2 }}
            className="mt-12 text-center"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              {[
                { number: "Amazing", label: "Success Stories" },
                { number: "Thousands", label: "Dreams Achieved" },
                { number: "Proven", label: "Excellence" },
                { number: "24/7", label: "Support" }
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-nai-highlight mb-1">{stat.number}</div>
                  <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Our Leadership Section */}
      <div className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-4">
              <Users className="w-4 h-4" />
              Leadership Team
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-4">
              Our <span className="text-gradient">Leadership</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Meet the visionary leaders guiding NAI's mission to transform nursing education
            </p>
          </motion.div>

          {/* Leadership Section */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-nai-dark to-nai-deep-teal bg-clip-text text-transparent">
                  Leadership
                </h3>
              </div>
              <p className="text-gray-600 text-sm ml-16">Strategic vision and organizational excellence</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipTeam.slice(0, 2).map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-nai-highlight/30 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nai-highlight/15 to-nai-deep-teal/15 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group-hover:shadow-xl transition-all duration-500 ring-2 ring-transparent group-hover:ring-nai-highlight/30">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-nai-highlight transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-nai-deep-teal font-bold text-sm group-hover:text-nai-teal transition-colors duration-300">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.specialization}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {member.achievements.slice(0, 3).map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gradient-to-r from-nai-soft/30 to-nai-highlight/20 text-nai-dark text-xs font-semibold rounded-full border border-nai-highlight/20"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Management Section */}
          <motion.section 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-12 bg-gradient-to-br from-nai-deep-teal to-nai-teal rounded-2xl flex items-center justify-center shadow-lg">
                  <div className="w-6 h-6 bg-white rounded-lg"></div>
                </div>
                <h3 className="text-3xl font-bold bg-gradient-to-r from-nai-deep-teal to-nai-teal bg-clip-text text-transparent">
                  Management
                </h3>
              </div>
              <p className="text-gray-600 text-sm ml-16">Operational excellence and student success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {leadershipTeam.slice(2, 5).map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-6 shadow-md hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-nai-teal/30 overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-nai-teal/15 to-nai-deep-teal/15 rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                  
                  <div className="relative z-10">
                    <div className="flex items-center mb-4">
                      <div className="relative">
                        <div className="w-16 h-16 rounded-xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 group-hover:shadow-xl transition-all duration-500 ring-2 ring-transparent group-hover:ring-nai-teal/30">
                          <img 
                            src={member.image} 
                            alt={member.name}
                            className="w-full h-full object-cover object-top group-hover:scale-110 transition-transform duration-500"
                            loading="lazy"
                          />
                        </div>
                      </div>
                      
                      <div className="ml-4 flex-1">
                        <h4 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-nai-teal transition-colors duration-300">
                          {member.name}
                        </h4>
                        <p className="text-nai-deep-teal font-bold text-sm group-hover:text-nai-teal transition-colors duration-300">
                          {member.role}
                        </p>
                      </div>
                    </div>

                    <div className="mb-3">
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {member.specialization}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {member.achievements.slice(0, 3).map((achievement, i) => (
                        <span
                          key={i}
                          className="px-3 py-1.5 bg-gradient-to-r from-nai-soft/30 to-nai-teal/20 text-nai-dark text-xs font-semibold rounded-full border border-nai-teal/20"
                        >
                          {achievement}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* View All Teams Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="text-center"
          >
            <Link
              to="/pages/team"
              className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-nai-highlight to-nai-teal text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group text-lg"
            >
              <Users className="w-6 h-6" />
              <span>Meet Our Complete Team</span>
              <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
