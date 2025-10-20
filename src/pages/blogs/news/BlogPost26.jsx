import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, BookOpen, Heart, Users, MapPin, Award, CheckCircle, Globe, Stethoscope, GraduationCap } from 'lucide-react'
import { Link } from 'react-router-dom'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost26 = () => {
  const { backToNewsUrl } = useBlogNavigation()
  const tableOfContents = [
    { id: "introduction", title: "Beyond Bedside Care" },
    { id: "community-health", title: "Community Health Nursing" },
    { id: "telehealth", title: "Telehealth Nursing" },
    { id: "nurse-educators", title: "Nurse Educators" },
    { id: "nai-support", title: "NAI Career Support" },
    { id: "conclusion", title: "Your Nursing Future" }
  ]

  return (
    <>
      <SeoHead
        title="Learn About the Varied Field of Nursing Careers | Diverse Pathways"
        description="Explore diverse nursing career paths beyond bedside care including community health, telehealth, and education. Discover opportunities with NAI support."
        keywords="nursing careers, community health nursing, telehealth nursing, nurse educator, nursing specializations, healthcare careers, nursing pathways"
        canonicalUrl="https://nurseassistinternational.com/blogs/news/learn-about-the-varied-field-of-nursing-careers"
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
                  <Stethoscope className="w-8 h-8" />
                </div>
              </div>
              
                            {/* Professional Black Title - Full Width */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight break-words tracking-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover diverse career paths in nursing that extend far beyond traditional bedside care, opening doors to innovation and leadership.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>August 15, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>8 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Career Development Team</span>
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
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Beyond Bedside Care: A World of Opportunities</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Nursing encompasses far more than bedside care. The profession offers an incredible diversity of career 
                        paths that leverage nursing knowledge and skills in innovative ways. From community health initiatives 
                        to cutting-edge telehealth technologies, nursing professionals can explore varied roles that match their 
                        interests, strengths, and career aspirations.
                      </p>
                      
                      <div className="bg-nai-teal/20 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-4">The Expanding Nursing Landscape</h3>
                        <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-700">
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Community health and prevention focus</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Digital health and telemedicine growth</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Education and research opportunities</span>
                            </li>
                          </ul>
                          <ul className="space-y-2">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Leadership and management roles</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Specialized clinical areas</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-nai-teal mt-1 flex-shrink-0" />
                              <span>International and humanitarian work</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                          <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-blue-800 mb-2">Patient Impact</h4>
                          <p className="text-sm text-blue-700">
                            Direct influence on health outcomes across diverse populations
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                          <Globe className="w-12 h-12 text-green-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-green-800 mb-2">Global Reach</h4>
                          <p className="text-sm text-green-700">
                            Opportunities to serve communities worldwide
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                          <Award className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-purple-800 mb-2">Professional Growth</h4>
                          <p className="text-sm text-purple-700">
                            Continuous learning and advancement opportunities
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Community Health Nursing */}
                  <section id="community-health" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-500 rounded-lg">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Community Health Nursing</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Community health nurses focus on illness prevention, rehabilitation, research, and promoting healthy 
                        living in non-traditional settings like homes, schools, and community centers. They work at the 
                        population level, addressing health disparities and social determinants of health.
                      </p>

                      <div className="bg-green-50 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-green-800 mb-4">Core Responsibilities</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</span>
                            <div>
                              <h4 className="font-semibold text-green-900 mb-1">Community Assessment</h4>
                              <p className="text-green-700 text-sm">
                                Assess community needs through data collection, surveys, and collaboration with local organizations 
                                to identify health priorities and resource gaps.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</span>
                            <div>
                              <h4 className="font-semibold text-green-900 mb-1">Health Education Programs</h4>
                              <p className="text-green-700 text-sm">
                                Develop and implement educational programs addressing topics like nutrition, disease prevention, 
                                maternal health, and chronic disease management.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</span>
                            <div>
                              <h4 className="font-semibold text-green-900 mb-1">Partnership Development</h4>
                              <p className="text-green-700 text-sm">
                                Partner with local leaders, organizations, and government agencies to improve public health 
                                infrastructure and access to healthcare services.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="font-semibold text-blue-800 mb-3">Work Settings</h4>
                          <ul className="space-y-2 text-sm text-blue-700">
                            <li>• Public health departments</li>
                            <li>• Community health centers</li>
                            <li>• Schools and universities</li>
                            <li>• Home healthcare agencies</li>
                            <li>• Non-profit organizations</li>
                            <li>• Faith-based communities</li>
                          </ul>
                        </div>
                        
                        <div className="bg-purple-50 rounded-xl p-6">
                          <h4 className="font-semibold text-purple-800 mb-3">Key Skills</h4>
                          <ul className="space-y-2 text-sm text-purple-700">
                            <li>• Cultural competency and sensitivity</li>
                            <li>• Program planning and evaluation</li>
                            <li>• Health promotion and education</li>
                            <li>• Research and data analysis</li>
                            <li>• Community engagement strategies</li>
                            <li>• Policy development and advocacy</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Telehealth Nursing */}
                  <section id="telehealth" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-500 rounded-lg">
                          <Globe className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Telehealth Nursing</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Telehealth nurses use digital platforms to assess, diagnose, and monitor patients remotely. This 
                        rapidly growing field improves access to care for rural and homebound patients, manages chronic 
                        conditions efficiently, and provides 24/7 healthcare support through virtual consultations.
                      </p>

                      <div className="bg-blue-50 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-blue-800 mb-4">Telehealth Applications</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-3">Patient Care Services</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• Virtual health assessments and triage</li>
                              <li>• Chronic disease monitoring and management</li>
                              <li>• Medication compliance and education</li>
                              <li>• Post-discharge follow-up care</li>
                              <li>• Mental health support and counseling</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-blue-900 mb-3">Technology Integration</h4>
                            <ul className="text-sm text-blue-700 space-y-1">
                              <li>• Remote monitoring device management</li>
                              <li>• Electronic health record documentation</li>
                              <li>• Video consultation platforms</li>
                              <li>• Mobile health applications</li>
                              <li>• AI-assisted decision support systems</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="border-l-4 border-blue-500 pl-6">
                          <h4 className="font-semibold text-blue-900 mb-2">Enhanced Access to Care</h4>
                          <p className="text-blue-700 text-sm">
                            Telehealth nursing breaks down geographical barriers, providing quality healthcare to patients 
                            in remote areas, those with mobility limitations, and underserved populations who might otherwise 
                            lack access to specialized nursing care.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-green-500 pl-6">
                          <h4 className="font-semibold text-green-900 mb-2">Care Team Collaboration</h4>
                          <p className="text-green-700 text-sm">
                            Telehealth nurses manage care in partnership with healthcare teams, coordinating with physicians, 
                            specialists, and other professionals to ensure comprehensive, continuous patient care across 
                            different settings and time zones.
                          </p>
                        </div>
                        
                        <div className="border-l-4 border-purple-500 pl-6">
                          <h4 className="font-semibold text-purple-900 mb-2">Virtual Consultation Excellence</h4>
                          <p className="text-purple-700 text-sm">
                            Conduct comprehensive virtual consultations using advanced assessment skills, clinical judgment, 
                            and technology to provide high-quality care while building therapeutic relationships through 
                            digital platforms.
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Nurse Educators */}
                  <section id="nurse-educators" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-500 rounded-lg">
                          <GraduationCap className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Nurse Educators</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Experienced RNs who become educators convey vital skills to the next generation of nurses. They 
                        combine clinical expertise with pedagogical knowledge to teach, mentor, and inspire students while 
                        advancing the nursing profession through education, research, and curriculum development.
                      </p>

                      <div className="bg-purple-50 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-purple-800 mb-4">Educational Roles and Responsibilities</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <GraduationCap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-purple-900 mb-1">Curriculum Development</h4>
                              <p className="text-purple-700 text-sm">
                                Design and update nursing curricula to reflect current best practices, emerging technologies, 
                                and evolving healthcare needs while ensuring accreditation standards are met.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <Users className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-purple-900 mb-1">Student Mentorship</h4>
                              <p className="text-purple-700 text-sm">
                                Provide individualized guidance, support, and mentorship to nursing students throughout 
                                their educational journey, helping them develop both clinical competence and professional identity.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <BookOpen className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibond text-purple-900 mb-1">Research and Scholarship</h4>
                              <p className="text-purple-700 text-sm">
                                Conduct research in nursing education, publish scholarly works, and contribute to the 
                                advancement of nursing knowledge and evidence-based educational practices.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div className="bg-green-50 rounded-xl p-6">
                          <h4 className="font-semibold text-green-800 mb-3">Teaching Environments</h4>
                          <ul className="space-y-2 text-sm text-green-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Universities and colleges</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Hospital-based education programs</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Professional development centers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Online education platforms</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span>Simulation and skills laboratories</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-orange-50 rounded-xl p-6">
                          <h4 className="font-semibold text-orange-800 mb-3">Essential Qualifications</h4>
                          <ul className="space-y-2 text-sm text-orange-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                              <span>Advanced nursing degree (MSN or PhD)</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                              <span>Extensive clinical experience</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                              <span>Teaching methodology training</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                              <span>Research and publication experience</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-orange-600 mt-1 flex-shrink-0" />
                              <span>Continuous professional development</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* NAI Support */}
                  <section id="nai-support" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-nai-teal rounded-lg">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Nursing Career Support Worldwide</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        NAI offers comprehensive OSCE and NCLEX preparation, equipping nurses to pursue diverse specializations 
                        and leadership roles worldwide. Our graduates gain the skills and confidence to excel in areas such as 
                        public health, telehealth, research, education, and specialized clinical practice.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <Stethoscope className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Clinical Excellence</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Advanced clinical skill development</li>
                            <li>• Evidence-based practice training</li>
                            <li>• Specialized procedure competencies</li>
                            <li>• Critical thinking enhancement</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <Users className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Leadership Development</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Management and supervision skills</li>
                            <li>• Team collaboration techniques</li>
                            <li>• Quality improvement methodologies</li>
                            <li>• Professional communication mastery</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6">
                          <Globe className="w-8 h-8 text-nai-teal mb-4" />
                          <h4 className="font-semibold text-nai-dark mb-3">Global Opportunities</h4>
                          <ul className="space-y-2 text-sm text-gray-600">
                            <li>• International certification preparation</li>
                            <li>• Cultural competency development</li>
                            <li>• Career pathway guidance</li>
                            <li>• Network building and mentorship</li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-nai-teal/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-4">Career Pathway Success Stories</h3>
                        <div className="space-y-4 text-sm text-gray-700">
                          <div className="border-l-4 border-nai-teal pl-4">
                            <h4 className="font-semibold text-nai-dark mb-1">Community Health Leader</h4>
                            <p className="text-gray-600">
                              "After completing NAI's program, I established a successful community health initiative in rural Australia, 
                              improving healthcare access for over 2,000 residents."
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-nai-teal pl-4">
                            <h4 className="font-semibold text-nai-dark mb-1">Telehealth Innovation</h4>
                            <p className="text-gray-600">
                              "NAI's training gave me the confidence to pioneer a telehealth program that now serves patients across 
                              three states, combining my nursing expertise with cutting-edge technology."
                            </p>
                          </div>
                          
                          <div className="border-l-4 border-nai-teal pl-4">
                            <h4 className="font-semibold text-nai-dark mb-1">Nurse Educator Excellence</h4>
                            <p className="text-gray-600">
                              "The comprehensive preparation I received at NAI equipped me to become a nursing instructor, 
                              where I now inspire and educate the next generation of healthcare professionals."
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
                        <Stethoscope className="w-8 h-8" />
                        <h2 className="text-2xl font-bold">Your Nursing Future Awaits</h2>
                      </div>
                      
                      <p className="text-white/90 leading-relaxed mb-6">
                        The field of nursing offers unprecedented diversity and opportunity for professionals ready to explore 
                        beyond traditional roles. Whether you're drawn to community health, excited by telehealth innovations, 
                        or passionate about education, your nursing background provides the foundation for meaningful career 
                        advancement. With NAI's comprehensive preparation and ongoing support, you're equipped to pursue any 
                        nursing pathway that aligns with your interests and goals.
                      </p>
                      
                      <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold mb-3">Ready to Explore Your Nursing Career Options?</h3>
                        <p className="text-white/90 text-sm mb-4">
                          Connect with NAI's career guidance team to explore the diverse nursing pathways available 
                          and create a personalized plan for your professional development.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                          <Link 
                            to="/courses" 
                            className="bg-white text-nai-teal px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors text-center"
                          >
                            Explore Programs
                          </Link>
                          <Link 
                            to="/contact" 
                            className="bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-lg font-semibold hover:bg-white/30 transition-colors text-center border border-white/30"
                          >
                            Career Guidance
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

                  {/* Career Paths */}
                  <div className="bg-gradient-to-br from-nai-teal/10 to-nai-highlight/10 rounded-2xl p-6">
                    <h3 className="font-bold text-nai-dark mb-4">Popular Paths</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Community Health</span>
                        <span className="font-semibold text-nai-teal">High Demand</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Telehealth</span>
                        <span className="font-semibold text-nai-teal">Growing</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Education</span>
                        <span className="font-semibold text-nai-teal">Rewarding</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Leadership</span>
                        <span className="font-semibold text-nai-teal">Impactful</span>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-nai-teal rounded-2xl p-6 text-white text-center">
                    <Stethoscope className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold mb-2">Explore Your Path</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Discover which nursing career path aligns with your interests and goals.
                    </p>
                    <Link 
                      to="/contact" 
                      className="bg-white text-nai-teal px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors inline-block"
                    >
                      Career Consultation
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

export default BlogPost26