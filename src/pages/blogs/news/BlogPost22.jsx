import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, BookOpen, Globe, Award, CheckCircle, Star, TrendingUp, Users, Target } from 'lucide-react'
import { Link } from 'react-router-dom'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost22 = () => {
  const { backToNewsUrl } = useBlogNavigation()
  const tableOfContents = [
    { id: "introduction", title: "Why the NCLEX Matters" },
    { id: "structure", title: "Exam Structure" },
    { id: "preparation", title: "Preparation Tips" },
    { id: "nai-advantage", title: "Why Choose NAI" },
    { id: "success-path", title: "Your Path to Success" },
    { id: "conclusion", title: "Opening International Doors" }
  ]

  return (
    <>
      <SeoHead
        title="NCLEX: Your Gateway to a Successful Nursing Career Abroad | NAI"
        description="Discover why the NCLEX is essential for international nursing careers. Expert preparation tips and guidance for success in the US, Canada, and Australia."
        keywords="NCLEX preparation, international nursing career, nursing abroad, NCLEX success, NAI review program, nursing certification"
        canonicalUrl="https://nurseassistinternational.com/blogs/news/nclex-your-gateway-to-a-successful-nursing-career-abroad"
      />

      <article className="min-h-screen bg-gradient-to-br from-nai-soft via-white to-nai-teal/5">
        {/* Hero Section */}
        <section className="relative pt-20 pb-16 bg-gradient-to-r from-nai-teal via-nai-highlight to-nai-teal overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="container-full-width relative z-10">
            <motion.div 
              className="max-w-4xl mx-auto text-center text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Link 
                to={backToNewsUrl} 
                className="inline-flex items-center gap-2 text-white/80 hover:text-white mb-6 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to All Posts
              </Link>
              
              <div className="flex items-center justify-center gap-4 mb-6">
                <div className="p-3 bg-white/20 rounded-full backdrop-blur-sm">
                  <Globe className="w-8 h-8" />
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight break-words tracking-tight">
                NCLEX: Your Gateway to a Successful Nursing Career Abroad
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Unlock international nursing opportunities in the United States, Canada, and Australia with comprehensive NCLEX preparation.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>October 17, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>10 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>International Career Team</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        <div className="container-full-width py-16">
          <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-12 xl:gap-16">
            {/* Main Content */}
              <div className="lg:col-span-3 xl:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="prose prose-lg max-w-none"
                >
                  {/* Introduction */}
                  <section id="introduction" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-nai-teal rounded-lg">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Why the NCLEX Matters</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        The NCLEX is the key to practising nursing in the United States, Canada, and Australia. 
                        This comprehensive examination serves as your passport to international nursing opportunities, 
                        opening doors to career advancement, competitive salaries, and professional growth in world-class healthcare systems.
                      </p>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                          <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-green-800 mb-2">Global Recognition</h4>
                          <p className="text-sm text-green-700">
                            Recognized across multiple countries for nursing practice
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                          <Award className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-blue-800 mb-2">Professional Validation</h4>
                          <p className="text-sm text-blue-700">
                            Demonstrates readiness to provide safe, effective patient care
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                          <TrendingUp className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-purple-800 mb-2">Career Advancement</h4>
                          <p className="text-sm text-purple-700">
                            Opens doors to international opportunities and growth
                          </p>
                        </div>
                      </div>

                      <div className="bg-nai-teal/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-3">Key Benefits of NCLEX Certification</h3>
                        <ul className="space-y-2 text-gray-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-nai-teal mt-1 flex-shrink-0" />
                            <span>Access to nursing positions in the United States, Canada, and Australia</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-nai-teal mt-1 flex-shrink-0" />
                            <span>Competitive salaries and comprehensive benefits packages</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-nai-teal mt-1 flex-shrink-0" />
                            <span>Professional development and specialization opportunities</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-nai-teal mt-1 flex-shrink-0" />
                            <span>Cultural diversity and enriching work environments</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Exam Structure */}
                  <section id="structure" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-nai-highlight rounded-lg">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Understanding the Exam Structure</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        The NCLEX uses computer adaptive testing (CAT) and includes various question types designed to assess 
                        your nursing knowledge, critical thinking skills, and clinical judgment. Understanding the format is 
                        crucial for reducing anxiety and improving performance.
                      </p>

                      <div className="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-blue-800 mb-4">Computer Adaptive Testing (CAT)</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</span>
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-1">Adaptive Algorithm</h4>
                              <p className="text-blue-700 text-sm">
                                Each question adapts based on your previous responses, providing a personalized assessment experience.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</span>
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-1">Variable Length</h4>
                              <p className="text-blue-700 text-sm">
                                The exam can range from 75 to 265 questions, stopping when your competency is determined.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</span>
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-1">Maximum 5 Hours</h4>
                              <p className="text-blue-700 text-sm">
                                Complete time limit including breaks, requiring effective time management strategies.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Question Types</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Multiple-choice (traditional format)</li>
                            <li>• Select-All-That-Apply (SATA)</li>
                            <li>• Fill-in-the-blank calculations</li>
                            <li>• Drag-and-drop ordering</li>
                            <li>• Hotspot identification</li>
                            <li>• Audio and visual scenarios</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gray-50 rounded-xl p-6">
                          <h4 className="font-semibold text-gray-900 mb-3">Content Areas</h4>
                          <ul className="space-y-2 text-sm text-gray-700">
                            <li>• Safe and Effective Care Environment</li>
                            <li>• Health Promotion and Maintenance</li>
                            <li>• Psychosocial Integrity</li>
                            <li>• Physiological Integrity</li>
                            <li>• Pharmacology and Parenteral Therapy</li>
                            <li>• Risk Reduction and Management</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Preparation Tips */}
                  <section id="preparation" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-500 rounded-lg">
                          <BookOpen className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Comprehensive Preparation Tips</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Successful NCLEX preparation requires a strategic approach combining content knowledge, 
                        test-taking strategies, and stress management techniques. Follow these proven methods to 
                        maximize your chances of success.
                      </p>

                      <div className="space-y-6">
                        <div className="border-l-4 border-nai-teal pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">1. Master the Test Format</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Familiarize yourself with computer adaptive testing mechanics and various question types to reduce anxiety and improve performance.
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Practice with CAT simulation software</li>
                            <li>• Learn keyboard shortcuts and navigation</li>
                            <li>• Understand the adaptive algorithm concept</li>
                          </ul>
                        </div>
                        
                        <div className="border-l-4 border-blue-500 pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">2. Develop a Structured Study Plan</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Create a comprehensive, timeline-based study schedule that covers all content areas systematically.
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Assess your knowledge gaps early</li>
                            <li>• Allocate time based on content difficulty</li>
                            <li>• Include regular review and practice sessions</li>
                          </ul>
                        </div>
                        
                        <div className="border-l-4 border-green-500 pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">3. Practice with Quality Question Banks</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Use comprehensive question banks that mirror actual NCLEX difficulty and content distribution.
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Focus on rationale-based learning</li>
                            <li>• Practice all question formats regularly</li>
                            <li>• Track performance and identify patterns</li>
                          </ul>
                        </div>
                        
                        <div className="border-l-4 border-purple-500 pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">4. Strengthen Weak Areas</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Identify and concentrate additional study time on content areas where you consistently struggle.
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Use diagnostic assessments regularly</li>
                            <li>• Seek additional resources for difficult topics</li>
                            <li>• Practice application-level questions</li>
                          </ul>
                        </div>
                        
                        <div className="border-l-4 border-orange-500 pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">5. Manage Stress Effectively</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Develop healthy stress management techniques to maintain optimal performance during preparation and testing.
                          </p>
                          <ul className="text-sm text-gray-600 space-y-1">
                            <li>• Practice relaxation and breathing techniques</li>
                            <li>• Maintain regular exercise and sleep schedules</li>
                            <li>• Build confidence through consistent practice</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* NAI Advantage */}
                  <section id="nai-advantage" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-nai-teal rounded-lg">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Why Choose NAI for NCLEX Preparation</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        NAI's expert instructors, comprehensive study materials, and personalized support provide the foundation 
                        for NCLEX success. Our program combines proven methodologies with individualized attention to help you 
                        achieve your international nursing career goals.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <Users className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Expert Instructors</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Experienced NCLEX educators</li>
                            <li>• Real-world clinical expertise</li>
                            <li>• Proven teaching methodologies</li>
                            <li>• Personalized learning support</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <BookOpen className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Comprehensive Materials</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Updated content reflecting current standards</li>
                            <li>• Extensive question banks</li>
                            <li>• Interactive learning modules</li>
                            <li>• Progress tracking tools</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <Target className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Personalized Support</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Individual learning assessments</li>
                            <li>• Customized study plans</li>
                            <li>• One-on-one mentoring sessions</li>
                            <li>• Ongoing performance monitoring</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <TrendingUp className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Proven Success Rate</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Over 5000 successful nurses</li>
                            <li>• Documented student success stories</li>
                            <li>• Continuous program improvement</li>
                            <li>• Industry recognition and accreditation</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-nai-teal/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-3">NAI Success Statistics</h3>
                        <div className="grid md:grid-cols-3 gap-6">
                          <div className="text-center">
                            <div className="text-3xl font-bold text-nai-teal mb-1">High</div>
                            <div className="text-sm text-gray-600">First-time Pass Rate</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-nai-teal mb-1">1000+</div>
                            <div className="text-sm text-gray-600">Successful Graduates</div>
                          </div>
                          <div className="text-center">
                            <div className="text-3xl font-bold text-nai-teal mb-1">24/7</div>
                            <div className="text-sm text-gray-600">Student Support</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Success Path */}
                  <section id="success-path" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-500 rounded-lg">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Your Path to International Success</h2>
                      </div>
                      
                      <div className="space-y-6">
                        <div className="flex items-start gap-4">
                          <span className="bg-nai-teal text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</span>
                          <div>
                            <h4 className="font-semibold text-nai-dark mb-2">Assessment and Planning</h4>
                            <p className="text-gray-600 text-sm">
                              Begin with a comprehensive assessment to identify your strengths and areas for improvement, 
                              followed by creation of a personalized study plan.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <span className="bg-nai-teal text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</span>
                          <div>
                            <h4 className="font-semibold text-nai-dark mb-2">Intensive Preparation</h4>
                            <p className="text-gray-600 text-sm">
                              Engage in structured learning modules, practice sessions, and regular assessments to build 
                              knowledge and confidence systematically.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <span className="bg-nai-teal text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</span>
                          <div>
                            <h4 className="font-semibold text-nai-dark mb-2">Practice and Refinement</h4>
                            <p className="text-gray-600 text-sm">
                              Participate in simulated testing environments and receive detailed feedback to refine 
                              your test-taking strategies and knowledge application.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <span className="bg-nai-teal text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">4</span>
                          <div>
                            <h4 className="font-semibold text-nai-dark mb-2">Exam Success</h4>
                            <p className="text-gray-600 text-sm">
                              Apply your preparation with confidence, knowing you have the knowledge, skills, and 
                              strategies needed to pass the NCLEX on your first attempt.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <span className="bg-nai-teal text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">5</span>
                          <div>
                            <h4 className="font-semibold text-nai-dark mb-2">International Career Launch</h4>
                            <p className="text-gray-600 text-sm">
                              Begin your rewarding international nursing career with the confidence that comes from 
                              comprehensive preparation and proven success.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="mb-12">
                    <div className="bg-gradient-to-r from-nai-teal to-nai-highlight rounded-2xl p-8 text-white">
                      <div className="flex items-center gap-3 mb-6">
                        <Globe className="w-8 h-8" />
                        <h2 className="text-2xl font-bold">Opening International Doors</h2>
                      </div>
                      
                      <p className="text-white/90 leading-relaxed mb-6">
                        Passing the NCLEX opens doors to a rewarding international career filled with opportunities for 
                        professional growth, cultural enrichment, and meaningful impact. With the right preparation and 
                        support from NAI, you can achieve your goals and embark on an exciting journey in global healthcare.
                      </p>
                      
                      <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold mb-3">Ready to Begin Your International Journey?</h3>
                        <p className="text-white/90 text-sm mb-4">
                          Join NAI's comprehensive NCLEX preparation program and take the first step toward your 
                          successful international nursing career.
                        </p>
                        <Link 
                          to="/courses" 
                          className="bg-white text-nai-teal px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                        >
                          Explore NCLEX Programs
                        </Link>
                      </div>
                    </div>
                  </section>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="lg:col-span-1 xl:col-span-1">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  className="sticky top-8 space-y-8"
                >
                  {/* Table of Contents */}
                  <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                    <h3 className="font-bold text-nai-dark mb-4 flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-nai-teal" />
                      Table of Contents
                    </h3>
                    <nav className="space-y-2">
                      {tableOfContents.map((item) => (
                        <a
                          key={item.id}
                          href={`#${item.id}`}
                          className="block text-sm text-gray-600 hover:text-nai-teal transition-colors py-1"
                        >
                          {item.title}
                        </a>
                      ))}
                    </nav>
                  </div>

                  {/* Quick Stats */}
                  <div className="bg-gradient-to-br from-nai-teal/10 to-nai-highlight/10 rounded-2xl p-6">
                    <h3 className="font-bold text-nai-dark mb-4">Quick Stats</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Reading Time</span>
                        <span className="font-semibold text-nai-teal">10 min</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Category</span>
                        <span className="font-semibold text-nai-teal">NCLEX Prep</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Countries</span>
                        <span className="font-semibold text-nai-teal">3</span>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-nai-teal rounded-2xl p-6 text-white text-center">
                    <Globe className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold mb-2">Start Your Journey</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Ready to pursue an international nursing career? Let's discuss your goals.
                    </p>
                    <Link 
                      to="/contact" 
                      className="bg-white text-nai-teal px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors inline-block"
                    >
                      Contact Us Today
                    </Link>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
      </article>
    </>
  )
}


/* Subcomponents */

const MetaPill = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm border border-nai-teal/20">
    {icon}
    <span className="text-sm sm:text-base font-semibold text-gray-700 truncate">{label}</span>
  </div>
)

const Stat = ({ value, label }) => (
  <div>
    <div className="text-lg sm:text-xl md:text-2xl font-bold text-nai-teal mb-1">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600">{label}</div>
  </div>
)

const SuccessStat = ({ value, label }) => (
  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-4 md:p-5 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className="text-xl sm:text-2xl md:text-3xl font-black mb-1 text-white drop-shadow-lg">{value}</div>
    <div className="text-white/95 text-xs sm:text-sm md:text-base font-semibold">{label}</div>
  </div>
)

const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/60 ${className}`}>
    {children}
  </div>
)

const Section = ({ title, children }) => (
  <section className="scroll-mt-28">
    {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
    {children}
  </section>
)

const QuestionCard = ({ question, answer }) => (
  <Card className="p-6 border-l-4 border-nai-teal">
    <h4 className="text-lg font-bold text-nai-teal mb-3">{question}</h4>
    <p className="text-gray-700 leading-relaxed">{answer}</p>
  </Card>
)

export default BlogPost22