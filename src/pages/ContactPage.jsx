import React, { useEffect, useState } from 'react'
import SeoHead from '../components/SeoHead'
import { motion } from 'framer-motion'
import { breadcrumbJsonLd, BASE_DOMAIN } from '../seo/jsonld'
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, Shield, CheckCircle } from 'lucide-react'
import { useLocation } from 'react-router-dom'

const ContactPage = () => {
  const location = useLocation()
  
  // Human verification state
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [userAnswer, setUserAnswer] = useState('')
  const [isVerified, setIsVerified] = useState(false)

  // Generate random numbers for verification
  useEffect(() => {
    generateNewQuestion()
  }, [])

  const generateNewQuestion = () => {
    setNum1(Math.floor(Math.random() * 10) + 1)
    setNum2(Math.floor(Math.random() * 10) + 1)
    setUserAnswer('')
    setIsVerified(false)
  }

  // Check answer
  const checkAnswer = (value) => {
    setUserAnswer(value)
    const correctAnswer = num1 + num2
    setIsVerified(parseInt(value) === correctAnswer)
  }

  // Scroll to the hash element when the page loads
  useEffect(() => {
    if (location.hash) {
      // Small delay to ensure the page has rendered
      setTimeout(() => {
        const element = document.querySelector(location.hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' })
        }
      }, 100)
    }
  }, [location])

  // SEO: Contact page metadata with location and service keywords
  const seoData = {
    title: "Contact NAI | NCLEX Australia & OSCE Preparation Centers", // 57 chars
    description: "Contact Nurse Assist International for NCLEX Australia and OSCE preparation. Multiple office locations in Sydney, Adelaide, Melbourne. Expert nursing education support for international nurses.", // 196 chars
    canonical: `${BASE_DOMAIN}/pages/contact`,
    og: {
      title: "Contact NAI - Australia's Leading Nursing Education Institute",
      description: "Get in touch with NAI for NCLEX, OSCE, and OBA preparation. Multiple office locations and expert support available.",
      url: `${BASE_DOMAIN}/pages/contact`,
      type: "website"
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact NAI - Expert NCLEX & OSCE Preparation",
      description: "Reach out to Australia's #1 nursing education institute. Multiple locations and contact methods available."
    },
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "Contact Nurse Assist International",
        "description": "Get in touch with NAI for NCLEX, OSCE, and OBA preparation programs.",
        "url": `${BASE_DOMAIN}/pages/contact`
      },
      breadcrumbJsonLd([
        { name: "Home", url: BASE_DOMAIN },
        { name: "Contact", url: `${BASE_DOMAIN}/pages/contact` }
      ])
    ]
  };

  return (
    <>
      <SeoHead {...seoData} />

      <div className="min-h-screen bg-nai-soft pt-20">
        <div className="container-responsive py-16">
          {/* Hero Section */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nai-dark mb-6">
              Our Offices
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Connect with us through multiple channels. We're here to support your nursing career journey every step of the way.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div 
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <a 
              href="tel:+61478320397"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="bg-nai-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nai-teal/20 transition-colors">
                <Phone className="w-8 h-8 text-nai-highlight" />
              </div>
              <h3 className="text-lg font-semibold text-nai-dark mb-2">Call Us</h3>
              <p className="text-gray-600">+61 478 320 397</p>
            </a>

            <a 
              href="mailto:admin@nurseassistinternational.com"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="bg-nai-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nai-teal/20 transition-colors">
                <Mail className="w-8 h-8 text-nai-highlight" />
              </div>
              <h3 className="text-lg font-semibold text-nai-dark mb-2">Email Us</h3>
              <p className="text-gray-600 text-sm">admin@nurseassistinternational.com</p>
            </a>

            <a 
              href="https://wa.me/61478320397"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 text-center group"
            >
              <div className="bg-nai-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-nai-teal/20 transition-colors">
                <MessageCircle className="w-8 h-8 text-nai-highlight" />
              </div>
              <h3 className="text-lg font-semibold text-nai-dark mb-2">WhatsApp</h3>
              <p className="text-gray-600">Chat with us instantly</p>
            </a>

            <div className="bg-white rounded-xl p-6 shadow-lg text-center">
              <div className="bg-nai-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-nai-highlight" />
              </div>
              <h3 className="text-lg font-semibold text-nai-dark mb-2">Office Hours</h3>
              <p className="text-gray-600 text-sm">Mon-Fri: 9:30AM-5:30PM AEST</p>
            </div>
          </motion.div>

          {/* Office Locations */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-nai-dark text-center mb-12">Our Offices</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-nai-highlight mr-3" />
                  <h3 className="text-xl font-semibold text-nai-dark">Sydney Offices</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our Sydney locations providing comprehensive OSCE and OBA preparation programs for NSW-based students.
                </p>
                <div className="text-sm text-gray-500">
                  <p>📍 Suite 104, Level 1, 25 Grose St</p>
                  <p>📍 2/2 Sorrel St, Parramatta 2150</p>
                  <p>📞 +61 478 320 397</p>
                  <p>✉️ admin@nurseassistinternational.com</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-nai-highlight mr-3" />
                  <h3 className="text-xl font-semibold text-nai-dark">Melbourne</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Our Melbourne headquarters serving Victorian students with specialized nursing education and career guidance.
                </p>
                <div className="text-sm text-gray-500">
                  <p>📍 Ground Floor, 47 Wellington St</p>
                  <p>📍 St. Kilda, VIC 3182</p>
                  <p>📞 +61 478 320 397</p>
                  <p>✉️ admin@nurseassistinternational.com</p>
                </div>
              </div>

              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-nai-highlight mr-3" />
                  <h3 className="text-xl font-semibold text-nai-dark">Adelaide & Wagga Wagga</h3>
                </div>
                <p className="text-gray-600 mb-4">
                  Supporting students across South Australia and regional NSW with comprehensive nursing education programs.
                </p>
                <div className="text-sm text-gray-500">
                  <p>📍 1/453 Morphett St, Adelaide 5000</p>
                  <p>📍 Wagga Wagga, NSW 2650</p>
                  <p>📞 +61 478 320 397</p>
                  <p>✉️ admin@nurseassistinternational.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Lab Locations */}
          <motion.div 
            className="mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-nai-dark text-center mb-12">Our Lab Locations</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-nai-highlight mr-3" />
                  <h3 className="text-lg font-semibold text-nai-dark">Sydney</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Suite 104, 25 Grose Street, Parramatta, 2150
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-nai-highlight mr-3" />
                  <h3 className="text-lg font-semibold text-nai-dark">Melbourne</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  GF, 47 Wellington Street, Melbourne
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-nai-highlight mr-3" />
                  <h3 className="text-lg font-semibold text-nai-dark">Brisbane</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  19 Sicklefield Rd, Enoggera QLD 4051
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <MapPin className="w-6 h-6 text-nai-highlight mr-3" />
                  <h3 className="text-lg font-semibold text-nai-dark">Adelaide</h3>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Level 1, 453 Morphett Street, Adelaide, 5000
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            id="contact-form"
            className="bg-white rounded-xl p-8 shadow-lg mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-nai-dark mb-4">Send Us a Message</h2>
                <p className="text-gray-600">Fill out the form below and we'll get back to you within 24 hours.</p>
              </div>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">First Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Last Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-nai-dark mb-2">Program Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent">
                    <option>Select a program</option>
                    <option>NCLEX-RN Preparation</option>
                    <option>OSCE Preparation</option>
                    <option>OBA Preparation</option>
                    <option>General Inquiry</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold text-nai-dark mb-2">Message</label>
                  <textarea 
                    rows="5" 
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                    placeholder="Tell us about your goals and how we can help..."
                  ></textarea>
                </div>
                
                {/* Human Verification */}
                <div className="border border-gray-200 rounded-lg p-5 bg-gray-50/50">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <Shield className="w-5 h-5 text-nai-teal" />
                      <span className="text-sm font-semibold text-gray-700">Security Verification</span>
                    </div>
                    {isVerified && (
                      <div className="flex items-center gap-1.5 text-green-600">
                        <CheckCircle className="w-4 h-4" />
                        <span className="text-xs font-medium">Verified</span>
                      </div>
                    )}
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-3 text-gray-700">
                      <span className="text-lg font-medium">What is</span>
                      <span className="text-2xl font-bold text-nai-dark">{num1}</span>
                      <span className="text-lg font-medium">+</span>
                      <span className="text-2xl font-bold text-nai-dark">{num2}</span>
                      <span className="text-lg font-medium">?</span>
                    </div>
                    
                    <input 
                      type="number" 
                      value={userAnswer}
                      onChange={(e) => checkAnswer(e.target.value)}
                      className={`w-24 px-4 py-2.5 border rounded-lg text-center text-lg font-semibold focus:outline-none focus:ring-2 transition-all ${
                        userAnswer === '' 
                          ? 'border-gray-300 bg-white focus:ring-nai-teal/30 focus:border-nai-teal' 
                          : isVerified 
                            ? 'border-green-500 bg-green-50 text-green-700 focus:ring-green-200' 
                            : 'border-red-400 bg-red-50 text-red-700 focus:ring-red-200'
                      }`}
                      placeholder="?"
                    />
                    
                    {!isVerified && userAnswer && (
                      <span className="text-sm text-red-600 font-medium">Incorrect</span>
                    )}
                  </div>
                  
                  <button
                    type="button"
                    onClick={generateNewQuestion}
                    className="mt-3 text-xs text-gray-500 hover:text-nai-teal font-medium transition-colors"
                  >
                    Generate a new question
                  </button>
                </div>
                
                <div className="text-center">
                  <button 
                    type="submit"
                    disabled={!isVerified}
                    className={`px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center gap-2 mx-auto ${
                      isVerified 
                        ? 'bg-nai-highlight hover:bg-nai-deep-teal text-white shadow-lg hover:shadow-xl cursor-pointer' 
                        : 'bg-gray-300 text-gray-500 cursor-not-allowed opacity-60'
                    }`}
                  >
                    Send Message
                    <Send className="w-5 h-5" />
                  </button>
                  {!isVerified && (
                    <p className="text-sm text-gray-500 mt-3">Please complete the verification to send your message</p>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Quick Contact CTA */}
          <motion.div 
            className="text-center bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-xl p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-4">Need Immediate Assistance?</h2>
            <p className="text-xl mb-6 opacity-90">Our expert team is available to answer your questions and guide you through your nursing journey.</p>
            <a 
              href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20need%20assistance%20with%20my%20nursing%20preparation"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-nai-highlight px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors duration-300 inline-block"
            >
              Chat with Us Now
            </a>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ContactPage
