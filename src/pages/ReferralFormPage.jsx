import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Users, Gift, Star, Send, CheckCircle } from 'lucide-react'

const ReferralFormPage = () => {
  return (
    <>
      <Helmet>
        <title>Referral Form</title>
        <meta name="description" content="NAI is the only NCLEX & OSCE coaching company helping nurses achieve their dream. Expert educators, proven success rates, and comprehensive OBA pathway support for internationally qualified nurses." />
        <link rel="canonical" href="https://nurseassistinternational.com/pages/referral-form" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Referral Form - Nurse Assist International" />
        <meta property="og:description" content="Refer a friend to NAI and earn rewards while helping fellow nurses achieve their dreams." />
        <meta property="og:url" content="https://nurseassistinternational.com/pages/referral-form" />
        <meta property="og:type" content="website" />
      </Helmet>

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
              Referral Form
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Share the gift of nursing success with your friends and colleagues. Refer them to NAI and earn rewards while helping them achieve their dreams.
            </p>
          </motion.div>

          {/* Benefits Section */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-nai-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Gift className="w-8 h-8 text-nai-highlight" />
              </div>
              <h3 className="text-xl font-semibold text-nai-dark mb-4">Earn Rewards</h3>
              <p className="text-gray-600 leading-relaxed">
                Receive up to $200 credit for each successful referral when they enroll in our programs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-nai-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-nai-highlight" />
              </div>
              <h3 className="text-xl font-semibold text-nai-dark mb-4">Help Friends Succeed</h3>
              <p className="text-gray-600 leading-relaxed">
                Give your friends access to our expert instruction and proven success methods.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-lg text-center">
              <div className="bg-nai-teal/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-nai-highlight" />
              </div>
              <h3 className="text-xl font-semibold text-nai-dark mb-4">Build Your Network</h3>
              <p className="text-gray-600 leading-relaxed">
                Connect with fellow nursing professionals and build lasting relationships.
              </p>
            </div>
          </motion.div>

          {/* How It Works */}
          <motion.div 
            className="bg-white rounded-xl p-8 shadow-lg mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <h2 className="text-3xl font-bold text-nai-dark text-center mb-12">How It Works</h2>
            <div className="grid md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-12 h-12 bg-nai-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">1</span>
                </div>
                <h4 className="font-semibold text-nai-dark mb-2">Fill the Form</h4>
                <p className="text-gray-600 text-sm">Complete the referral form with your friend's details</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-nai-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">2</span>
                </div>
                <h4 className="font-semibold text-nai-dark mb-2">We Contact Them</h4>
                <p className="text-gray-600 text-sm">Our team reaches out to your referral with information</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-nai-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">3</span>
                </div>
                <h4 className="font-semibold text-nai-dark mb-2">They Enroll</h4>
                <p className="text-gray-600 text-sm">Your friend enrolls in one of our programs</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-nai-highlight rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold text-lg">4</span>
                </div>
                <h4 className="font-semibold text-nai-dark mb-2">You Get Rewarded</h4>
                <p className="text-gray-600 text-sm">Receive your referral bonus and help a friend succeed</p>
              </div>
            </div>
          </motion.div>

          {/* Referral Form */}
          <motion.div 
            className="max-w-4xl mx-auto bg-white rounded-xl p-8 shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-nai-dark mb-4">Submit Your Referral</h2>
              <p className="text-gray-600">Fill out the form below to refer your friend or colleague to NAI.</p>
            </div>

            <form className="space-y-8">
              {/* Your Information */}
              <div>
                <h3 className="text-xl font-semibold text-nai-dark mb-4">Your Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Your First Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Your Last Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Your Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Your Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter your phone number"
                    />
                  </div>
                </div>
              </div>

              {/* Referral Information */}
              <div>
                <h3 className="text-xl font-semibold text-nai-dark mb-4">Referral Information</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Referral First Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter referral's first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Referral Last Name *</label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter referral's last name"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Referral Email *</label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter referral's email"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-nai-dark mb-2">Referral Phone Number</label>
                    <input 
                      type="tel" 
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                      placeholder="Enter referral's phone number"
                    />
                  </div>
                </div>
                <div className="mt-6">
                  <label className="block text-sm font-semibold text-nai-dark mb-2">Program Interest</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent">
                    <option>Select program of interest</option>
                    <option>NCLEX-RN Preparation</option>
                    <option>OSCE Preparation</option>
                    <option>OBA Preparation</option>
                    <option>Not Sure - General Inquiry</option>
                  </select>
                </div>
              </div>

              {/* Additional Information */}
              <div>
                <label className="block text-sm font-semibold text-nai-dark mb-2">Additional Information</label>
                <textarea 
                  rows="4" 
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-nai-highlight focus:border-transparent"
                  placeholder="Tell us more about your referral's background, goals, or any specific needs..."
                ></textarea>
              </div>

              {/* Terms Agreement */}
              <div className="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="terms"
                  className="mt-1 w-4 h-4 text-nai-highlight border-gray-300 rounded focus:ring-nai-highlight"
                />
                <label htmlFor="terms" className="text-sm text-gray-600">
                  I agree to the referral program terms and conditions. I confirm that I have permission to share this person's contact information with NAI.
                </label>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button 
                  type="submit"
                  className="bg-nai-highlight hover:bg-nai-deep-teal text-white px-8 py-4 rounded-lg font-semibold text-lg transition-colors duration-300 flex items-center gap-2 mx-auto"
                >
                  Submit Referral
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </form>
          </motion.div>

          {/* Referral Rewards */}
          <motion.div 
            className="text-center mt-16 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-xl p-8 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <h2 className="text-3xl font-bold mb-6">Referral Rewards Structure</h2>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">NCLEX Program</h3>
                <div className="text-3xl font-bold mb-2">$200</div>
                <p className="opacity-90">Referral bonus when they enroll</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">OSCE Program</h3>
                <div className="text-3xl font-bold mb-2">$200</div>
                <p className="opacity-90">Referral bonus when they enroll</p>
              </div>
              <div className="bg-white/10 rounded-lg p-6">
                <h3 className="text-xl font-bold mb-2">OBA Program</h3>
                <div className="text-3xl font-bold mb-2">$200</div>
                <p className="opacity-90">Referral bonus when they enroll</p>
              </div>
            </div>
            <p className="mt-6 opacity-90">Bonuses are credited to your account within 30 days of enrollment confirmation.</p>
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default ReferralFormPage
