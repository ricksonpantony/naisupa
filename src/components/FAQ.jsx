import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { HelpCircle, FileText, Stethoscope, Brain, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const FAQ = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="section-padding bg-gradient-to-br from-nai-soft via-white to-blue-50">
      <div className="container-responsive">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-nai-highlight/10 text-nai-highlight px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <HelpCircle className="w-4 h-4" />
            Get Your Answers
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-12">
            Find comprehensive answers to all your questions about NCLEX-NGN and OSCE preparation, registration process, and exam requirements.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Link to="/pages/nclex-ngn-faq">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-nai-highlight h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-nai-highlight to-nai-deep-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Brain className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-nai-dark mb-4 group-hover:text-nai-highlight transition-colors">
                  NCLEX-NGN FAQs
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Everything you need to know about the Next Generation NCLEX exam, including OBA process, registration, fees, scheduling, and test day requirements.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-nai-highlight rounded-full"></div>
                    <span>OBA & Registration Process</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-nai-highlight rounded-full"></div>
                    <span>Exam Details & Format</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-nai-highlight rounded-full"></div>
                    <span>Fees & Payment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-nai-highlight rounded-full"></div>
                    <span>Scheduling & Results</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-nai-highlight font-semibold group-hover:gap-4 transition-all">
                  <span>View All NCLEX FAQs</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Link to="/pages/osce-faqs">
              <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-transparent hover:border-nai-teal h-full flex flex-col">
                <div className="w-16 h-16 bg-gradient-to-br from-nai-teal to-nai-deep-teal rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Stethoscope className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-nai-dark mb-4 group-hover:text-nai-teal transition-colors">
                  OSCE FAQs
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                  Comprehensive answers about OSCE preparation, clinical skills assessment, training programs, and Australian nursing registration requirements.
                </p>
                <div className="space-y-2 mb-6">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-nai-teal rounded-full"></div>
                    <span>OSCE Preparation</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-nai-teal rounded-full"></div>
                    <span>Clinical Skills Assessment</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-nai-teal rounded-full"></div>
                    <span>Training Programs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    <div className="w-1.5 h-1.5 bg-nai-teal rounded-full"></div>
                    <span>Registration Process</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-nai-teal font-semibold group-hover:gap-4 transition-all">
                  <span>View All OSCE FAQs</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          </motion.div>
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-3xl mx-auto">
            <HelpCircle className="w-16 h-16 text-nai-highlight mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-nai-dark mb-4">
              Still Have Questions?
            </h3>
            <p className="text-gray-600 mb-6">
              Our education consultants are here to help. Get personalized answers to your specific questions.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20have%20questions%20about%20your%20programs"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 inline-flex items-center justify-center gap-2"
              >
                <FileText className="w-5 h-5" />
                Chat with us
              </a>
              <a
                href="tel:+61478320397"
                className="border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 inline-flex items-center justify-center gap-2"
              >
                Schedule a Call
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default FAQ
