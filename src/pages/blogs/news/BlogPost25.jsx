import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, BookOpen, Award, Users, Star, CheckCircle, Target, Lightbulb, Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost25 = () => {
  const { backToNewsUrl } = useBlogNavigation()
  const tableOfContents = [
    { id: "introduction", title: "The Rewarding Journey" },
    { id: "osce-assessment", title: "Understanding OSCE Assessment" },
    { id: "nai-advantage", title: "Why Choose NAI" },
    { id: "comprehensive-approach", title: "Comprehensive Training Approach" },
    { id: "success-factors", title: "Key Success Factors" },
    { id: "conclusion", title: "Your Path to Excellence" }
  ]

  return (
    <>
      <SeoHead
        title="Navigating OSCE Training in Australia with NAI | Your Pathway to RN Success"
        description="Discover how Nurse Assist International provides exceptional OSCE training in Australia. Learn about our comprehensive approach to nursing registration success."
        keywords="OSCE training Australia, NAI nursing education, registered nurse Australia, OSCE preparation, nursing skills training, clinical competency assessment"
        canonicalUrl="https://nurseassistinternational.com/blogs/news/navigating-osce-training-in-australia-with-nurse-assist-international-your-pathway-to-becoming-a-registered-nurse"
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
                  <Award className="w-8 h-8" />
                </div>
              </div>
              
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-6 sm:mb-8 leading-tight break-words tracking-tight">
                Navigating OSCE Training in Australia with NAI
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Your pathway to becoming a registered nurse through exceptional OSCE training, expert guidance, and unwavering support.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>September 25, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>9 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>NAI Leadership Team</span>
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
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">The Rewarding Journey to Nursing Excellence</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        The journey to becoming a registered nurse in Australia is rewarding but challenging. At Nurse Assist International, 
                        students receive exceptional OSCE training that equips them with the skills, knowledge, and confidence needed to 
                        excel in their nursing careers and make meaningful contributions to healthcare.
                      </p>
                      
                      <div className="bg-nai-teal/20 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-4">The Australian Nursing Landscape</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>High demand for qualified registered nurses</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Excellent career progression opportunities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Competitive salaries and benefits</span>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Diverse specialization pathways</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>World-class healthcare system</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Strong professional support networks</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                          <Users className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-blue-800 mb-2">Professional Growth</h4>
                          <p className="text-sm text-blue-700">
                            Continuous learning and development opportunities
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                          <Heart className="w-12 h-12 text-green-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-green-800 mb-2">Meaningful Impact</h4>
                          <p className="text-sm text-green-700">
                            Direct contribution to patient care and community health
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                          <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-purple-800 mb-2">Recognition</h4>
                          <p className="text-sm text-purple-700">
                            Respected profession with high community standing
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* OSCE Assessment */}
                  <section id="osce-assessment" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-nai-highlight rounded-lg">
                          <Target className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Understanding OSCE Assessment</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        The OSCE (Objective Structured Clinical Examination) assesses clinical competencies across multiple stations, 
                        testing your ability to perform nursing tasks, communicate effectively, and apply theoretical knowledge in 
                        practical scenarios. Passing this assessment is essential for nursing registration in Australia.
                      </p>

                      <div className="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-blue-800 mb-4">OSCE Assessment Components</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</span>
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-1">Clinical Skills Demonstration</h4>
                              <p className="text-blue-700 text-sm">
                                Practical demonstration of nursing procedures including medication administration, wound care, 
                                vital signs assessment, and patient mobility assistance.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</span>
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-1">Communication and Interpersonal Skills</h4>
                              <p className="text-blue-700 text-sm">
                                Assessment of therapeutic communication, patient education, cultural sensitivity, 
                                and professional interaction with patients and healthcare teams.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</span>
                            <div>
                              <h4 className="font-semibold text-blue-900 mb-1">Critical Thinking and Problem Solving</h4>
                              <p className="text-blue-700 text-sm">
                                Evaluation of clinical reasoning, priority setting, decision-making abilities, 
                                and application of evidence-based practice principles.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-red-50 border-l-4 border-red-400 p-6">
                        <h3 className="text-lg font-semibold text-red-800 mb-3">Assessment Challenges</h3>
                        <ul className="space-y-2 text-sm text-red-700">
                          <li>• Time pressure and multiple station rotations</li>
                          <li>• Performance anxiety and stress management</li>
                          <li>• Integration of theoretical knowledge with practical skills</li>
                          <li>• Adapting to different patient scenarios and examiner expectations</li>
                          <li>• Demonstrating competence consistently across all stations</li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* NAI Advantage */}
                  <section id="nai-advantage" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-nai-teal rounded-lg">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Why Choose NAI for Your OSCE Journey</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Nurse Assist International stands out as Australia's premier provider of OSCE training, combining 
                        experienced educators, cutting-edge facilities, and proven methodologies to ensure your success 
                        in becoming a registered nurse.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <Users className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Experienced Educators</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Our instructors are seasoned professionals who share real-world insights and provide 
                            comprehensive guidance in a supportive learning environment.
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Registered nurses with extensive clinical experience</li>
                            <li>• OSCE training specialists and assessors</li>
                            <li>• Cultural competency and diversity awareness</li>
                            <li>• Continuous professional development commitment</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <BookOpen className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Structured Learning Materials</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Comprehensive resources that combine theoretical knowledge with practical application, 
                            designed specifically for OSCE success.
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Evidence-based practice guidelines</li>
                            <li>• Interactive learning modules and videos</li>
                            <li>• Practice scenarios and case studies</li>
                            <li>• Assessment rubrics and feedback tools</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <Target className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">State-of-the-Art Simulation Labs</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Modern facilities that replicate real hospital environments, providing unlimited 
                            hands-on practice opportunities for skill development.
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• High-fidelity patient simulators</li>
                            <li>• Realistic clinical equipment and supplies</li>
                            <li>• Video recording for self-assessment</li>
                            <li>• Multiple practice stations available</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <Lightbulb className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Flexible Learning Options</h4>
                          <p className="text-sm text-gray-600 mb-3">
                            Accommodating diverse learning styles and schedules with both online and face-to-face 
                            options to suit individual needs and preferences.
                          </p>
                          <ul className="text-xs text-gray-600 space-y-1">
                            <li>• Online theory modules and virtual sessions</li>
                            <li>• In-person practical skill workshops</li>
                            <li>• Weekend and evening class options</li>
                            <li>• Self-paced learning components</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Comprehensive Approach */}
                  <section id="comprehensive-approach" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-500 rounded-lg">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Comprehensive Training Approach</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        NAI's training methodology addresses every aspect of OSCE preparation, from foundational knowledge 
                        to advanced clinical skills, ensuring students are thoroughly prepared for assessment success and 
                        future professional practice.
                      </p>

                      <div className="space-y-6">
                        <div className="border-l-4 border-nai-teal pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">Passionate Instructors & Mentorship</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Our passionate instructors mentor students throughout their journey, providing individual attention, 
                            encouragement, and fostering the confidence needed for professional success.
                          </p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-xs text-gray-600">
                              <strong>Personal Touch:</strong> Small class sizes enable personalized feedback and 
                              individualized learning plans for each student's specific needs and goals.
                            </p>
                          </div>
                        </div>
                        
                        <div className="border-l-4 border-blue-500 pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">Unlimited Lab Access & Continuous Classes</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Students benefit from unlimited access to simulation laboratories and continuous class offerings, 
                            enabling ongoing skills development and confidence building through repetitive practice.
                          </p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-xs text-gray-600">
                              <strong>Flexibility:</strong> Practice at your own pace with 24/7 lab access and multiple 
                              class schedules to accommodate work and personal commitments.
                            </p>
                          </div>
                        </div>
                        
                        <div className="border-l-4 border-green-500 pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">Holistic Student Development</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Beyond technical skills, NAI focuses on developing professional attitudes, ethical reasoning, 
                            cultural competency, and emotional intelligence essential for nursing excellence.
                          </p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-xs text-gray-600">
                              <strong>Complete Professional:</strong> Graduates emerge as well-rounded healthcare professionals 
                              ready to provide compassionate, evidence-based patient care.
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 bg-nai-teal/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-4">Training Phases</h3>
                        <div className="grid md:grid-cols-4 gap-4">
                          <div className="text-center">
                            <div className="bg-nai-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">1</div>
                            <h5 className="font-semibold text-gray-900 text-sm mb-1">Foundation</h5>
                            <p className="text-xs text-gray-600">Theory and basic concepts</p>
                          </div>
                          <div className="text-center">
                            <div className="bg-nai-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">2</div>
                            <h5 className="font-semibold text-gray-900 text-sm mb-1">Skills</h5>
                            <p className="text-xs text-gray-600">Practical skill development</p>
                          </div>
                          <div className="text-center">
                            <div className="bg-nai-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">3</div>
                            <h5 className="font-semibold text-gray-900 text-sm mb-1">Integration</h5>
                            <p className="text-xs text-gray-600">Combining knowledge and skills</p>
                          </div>
                          <div className="text-center">
                            <div className="bg-nai-teal text-white rounded-full w-12 h-12 flex items-center justify-center text-lg font-bold mx-auto mb-2">4</div>
                            <h5 className="font-semibold text-gray-900 text-sm mb-1">Mastery</h5>
                            <p className="text-xs text-gray-600">Assessment readiness</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Success Factors */}
                  <section id="success-factors" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-500 rounded-lg">
                          <CheckCircle className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Key Success Factors at NAI</h2>
                      </div>
                      
                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                          <h4 className="font-semibold text-purple-800 mb-4">Academic Excellence</h4>
                          <ul className="space-y-2 text-sm text-purple-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                              <span>Proven Success</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                              <span>Evidence-based curriculum</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                              <span>Continuous assessment and feedback</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-purple-600 mt-1 flex-shrink-0" />
                              <span>Industry-current standards</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                          <h4 className="font-semibold text-green-800 mb-4">Student Support</h4>
                          <ul className="space-y-2 text-sm text-green-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>24/7 learning resource access</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Peer study groups and networks</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Career guidance and counseling</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Alumni mentorship programs</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                          <h4 className="font-semibold text-blue-800 mb-4">Innovation & Quality</h4>
                          <ul className="space-y-2 text-sm text-blue-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Latest simulation technology</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Continuous curriculum updates</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Industry partnerships</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Quality assurance processes</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-nai-teal/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-4">Student Success Testimonials</h3>
                        <div className="space-y-4 text-sm text-gray-700">
                          <blockquote className="border-l-4 border-nai-teal pl-4 italic">
                            "NAI's comprehensive approach gave me the confidence and skills needed to pass my OSCE on the first attempt. 
                            The instructors are incredibly supportive and knowledgeable."
                          </blockquote>
                          <blockquote className="border-l-4 border-nai-teal pl-4 italic">
                            "The unlimited lab access was game-changing for my preparation. I could practice until I felt completely 
                            comfortable with every procedure."
                          </blockquote>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="mb-12">
                    <div className="bg-gradient-to-r from-nai-teal to-nai-highlight rounded-2xl p-8 text-white">
                      <div className="flex items-center gap-3 mb-6">
                        <Award className="w-8 h-8" />
                        <h2 className="text-2xl font-bold">Your Path to Nursing Excellence</h2>
                      </div>
                      
                      <p className="text-white/90 leading-relaxed mb-6">
                        NAI's commitment to student success, comprehensive resources, and dedication to excellence make it the 
                        premier provider of OSCE training in Australia. If you're considering a nursing career or working toward 
                        registration, joining NAI will set you on the path to success with the support, knowledge, and confidence 
                        needed to excel in your profession and make a meaningful impact in healthcare.
                      </p>
                      
                      <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold mb-3">Ready to Begin Your Nursing Journey?</h3>
                        <p className="text-white/90 text-sm mb-4">
                          Join hundreds of successful nursing professionals who chose NAI for their OSCE preparation 
                          and career development. Start your journey toward nursing excellence today.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link 
                            to="/courses" 
                            className="bg-white text-nai-teal px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                          >
                            Explore Our Programs
                          </Link>
                          <Link 
                            to="/contact" 
                            className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors text-center border border-white/30"
                          >
                            Contact Our Team
                          </Link>
                        </div>
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

                  {/* NAI Statistics */}
                  <div className="bg-gradient-to-br from-nai-teal/10 to-nai-highlight/10 rounded-2xl p-6">
                    <h3 className="font-bold text-nai-dark mb-4">NAI Success Stats</h3>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-3xl font-bold text-nai-teal mb-1"></div>
                        <div className="text-xs text-gray-600">Proven Success</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-nai-teal mb-1">24/7</div>
                        <div className="text-xs text-gray-600">Lab Access</div>
                      </div>
                      <div className="text-center">
                        <div className="text-3xl font-bold text-nai-teal mb-1">5000+</div>
                        <div className="text-xs text-gray-600">Successful Nurses</div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-nai-teal rounded-2xl p-6 text-white text-center">
                    <Award className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold mb-2">Join NAI Today</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Start your journey to nursing excellence with Australia's premier OSCE training provider.
                    </p>
                    <Link 
                      to="/contact" 
                      className="bg-white text-nai-teal px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors inline-block"
                    >
                      Get Started
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

export default BlogPost25