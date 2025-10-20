import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, BookOpen, Shield, Heart, AlertTriangle, CheckCircle, MapPin, Users, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost24 = () => {
  const { backToNewsUrl } = useBlogNavigation()
  const tableOfContents = [
    { id: "introduction", title: "First Aid Importance" },
    { id: "outdoor-activities", title: "Australian Outdoor Culture" },
    { id: "professional", title: "Professional Requirements" },
    { id: "rural-communities", title: "Rural & Remote Communities" },
    { id: "basic-skills", title: "Essential First Aid Skills" },
    { id: "conclusion", title: "Empowering Communities" }
  ]

  return (
    <>
      <SeoHead
        title="Why Is Learning First Aid Important? | Life-Saving Skills for Australia"
        description="Discover the critical importance of first aid training in Australia. Learn essential life-saving skills for outdoor activities, professional settings, and community safety."
        keywords="first aid training, CPR Australia, emergency response, workplace safety, outdoor safety, community first aid, life-saving skills"
        canonicalUrl="https://nurseassistinternational.com/blogs/news/why-is-learning-first-aid-important"
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
                  <Shield className="w-8 h-8" />
                </div>
              </div>
              
                            {/* Professional Black Title - Full Width */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight break-words tracking-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover how first aid training can mean the difference between life and death in emergencies, especially in Australia's diverse environments.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>October 03, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>5 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Community Safety Experts</span>
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
                        <div className="p-2 bg-red-500 rounded-lg">
                          <AlertTriangle className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">First Aid: A Life-Saving Necessity</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Accidents can happen anywhere and anytime. Whether at home, work, or during recreational activities, 
                        medical emergencies don't wait for convenient moments. Knowing first aid can literally mean the difference 
                        between life and death, especially during those critical first minutes before professional help arrives.
                      </p>
                      
                      <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Heart className="w-6 h-6 text-red-500" />
                          <h3 className="text-lg font-semibold text-red-800">Critical Facts</h3>
                        </div>
                        <ul className="text-red-700 text-sm space-y-2">
                          <li>• Brain death can occur within 4-6 minutes without oxygen</li>
                          <li>• Average ambulance response time in urban Australia is 8-12 minutes</li>
                          <li>• In rural areas, response times can exceed 30 minutes</li>
                          <li>• Immediate first aid can triple survival rates in cardiac emergencies</li>
                        </ul>
                      </div>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6 text-center">
                          <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-green-800 mb-2">Life Preservation</h4>
                          <p className="text-sm text-green-700">
                            Immediate intervention can stabilize patients and prevent deterioration
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 text-center">
                          <Heart className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-blue-800 mb-2">Pain Relief</h4>
                          <p className="text-sm text-blue-700">
                            Proper first aid provides comfort and reduces suffering during emergencies
                          </p>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6 text-center">
                          <Users className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                          <h4 className="font-semibold text-purple-800 mb-2">Community Safety</h4>
                          <p className="text-sm text-purple-700">
                            Trained individuals create safer environments for everyone
                          </p>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Australian Outdoor Culture */}
                  <section id="outdoor-activities" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-500 rounded-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Australia's Outdoor Adventure Culture</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Australians love outdoor activities such as hiking, camping, surfing, and beach trips, often in remote areas 
                        far from medical help. These activities, while rewarding, carry inherent risks that make first aid knowledge 
                        absolutely essential for personal and group safety.
                      </p>

                      <div className="bg-green-50 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-green-800 mb-4">Common Outdoor Emergencies in Australia</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-green-900 mb-3">Hiking & Bushwalking</h4>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• Sprains, fractures, and falls</li>
                              <li>• Dehydration and heat exhaustion</li>
                              <li>• Snake and spider bites</li>
                              <li>• Cuts and abrasions from terrain</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-green-900 mb-3">Water Activities</h4>
                            <ul className="text-sm text-green-700 space-y-1">
                              <li>• Near-drowning incidents</li>
                              <li>• Marine animal injuries</li>
                              <li>• Hypothermia in cold water</li>
                              <li>• Boating accidents and trauma</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</span>
                          <div>
                            <h4 className="font-semibold text-green-900 mb-1">Immediate Response Capability</h4>
                            <p className="text-green-700 text-sm">
                              First aid skills allow you to act quickly when someone is injured, stabilizing them until professional help arrives. 
                              In remote locations, you may be the only medical assistance available for extended periods.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</span>
                          <div>
                            <h4 className="font-semibold text-green-900 mb-1">Group Leadership and Responsibility</h4>
                            <p className="text-green-700 text-sm">
                              When leading or participating in group activities, having first aid knowledge makes you a valuable asset 
                              and demonstrates responsible outdoor leadership.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</span>
                          <div>
                            <h4 className="font-semibold text-green-900 mb-1">Equipment and Preparation Knowledge</h4>
                            <p className="text-green-700 text-sm">
                              First aid training teaches you what medical supplies to carry and how to improvise with available materials 
                              when standard equipment isn't accessible.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Professional Requirements */}
                  <section id="professional" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-blue-500 rounded-lg">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Professional and Workplace Requirements</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        In professional settings, many organizations require certified first responders on duty to provide 
                        immediate care in case of workplace accidents. This requirement spans across various industries 
                        and significantly enhances workplace safety culture.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="font-semibold text-blue-800 mb-4">Legal Requirements</h4>
                          <ul className="space-y-2 text-sm text-blue-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>WHS legislation mandates first aid provisions</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Risk assessment determines required numbers</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Regular recertification maintains compliance</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Documentation and reporting requirements</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="font-semibold text-blue-800 mb-4">Career Advantages</h4>
                          <ul className="space-y-2 text-sm text-blue-700">
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Enhanced employability across industries</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Leadership and responsibility opportunities</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Professional development and skill diversity</span>
                            </li>
                            <li className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span>Potential for additional compensation</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-nai-teal/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-3">High-Risk Industries Requiring First Aid</h3>
                        <div className="grid md:grid-cols-4 gap-4 text-sm text-gray-700">
                          <div>
                            <strong className="text-nai-teal">Construction</strong>
                            <p>Heavy machinery, heights, tools</p>
                          </div>
                          <div>
                            <strong className="text-nai-teal">Manufacturing</strong>
                            <p>Industrial equipment, chemicals</p>
                          </div>
                          <div>
                            <strong className="text-nai-teal">Healthcare</strong>
                            <p>Patient care, needlestick injuries</p>
                          </div>
                          <div>
                            <strong className="text-nai-teal">Education</strong>
                            <p>Child safety, playground injuries</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Rural Communities */}
                  <section id="rural-communities" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-orange-500 rounded-lg">
                          <MapPin className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Rural and Remote Community Impact</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        People living in rural or remote regions may face delayed emergency response times due to distance 
                        and resource limitations. First aid training empowers community members to assess situations, 
                        administer care, and potentially save lives during these critical waiting periods.
                      </p>

                      <div className="bg-orange-50 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-orange-800 mb-4">Rural Health Challenges</h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-orange-900 mb-1">Extended Response Times</h4>
                              <p className="text-orange-700 text-sm">
                                Emergency services may take 30-60 minutes to reach remote locations, making immediate 
                                first aid intervention crucial for patient outcomes.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-orange-900 mb-1">Limited Medical Facilities</h4>
                              <p className="text-orange-700 text-sm">
                                Rural areas often have reduced access to hospitals and medical centers, increasing 
                                the importance of initial stabilization and care.
                              </p>
                            </div>
                          </div>
                          
                          <div className="flex items-start gap-4">
                            <AlertTriangle className="w-6 h-6 text-orange-600 flex-shrink-0 mt-1" />
                            <div>
                              <h4 className="font-semibold text-orange-900 mb-1">Weather and Access Challenges</h4>
                              <p className="text-orange-700 text-sm">
                                Severe weather, flooding, or road conditions can further delay emergency response, 
                                making community first aid skills essential.
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="bg-green-50 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-green-800 mb-3">Community Empowerment Benefits</h3>
                        <ul className="space-y-2 text-sm text-green-700">
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span><strong>Increased Survival Rates:</strong> Trained community members can provide life-saving interventions immediately</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span><strong>Community Resilience:</strong> Self-reliant communities better equipped to handle emergencies</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span><strong>Confidence Building:</strong> Training provides confidence to act decisively in emergencies</span>
                          </li>
                          <li className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                            <span><strong>Network Effect:</strong> Trained individuals teach others, multiplying community capabilities</span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </section>

                  {/* Essential Skills */}
                  <section id="basic-skills" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-nai-teal rounded-lg">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Essential First Aid Skills</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Basic skills like CPR, wound care, and fracture management are invaluable life-saving competencies. 
                        These fundamental techniques form the foundation of effective emergency response and can be learned 
                        by anyone willing to invest in proper training.
                      </p>

                      <div className="grid md:grid-cols-3 gap-6">
                        <div className="bg-red-50 rounded-xl p-6">
                          <Heart className="w-8 h-8 text-red-600 mb-4" />
                          <h4 className="font-semibold text-red-800 mb-3">CPR & AED</h4>
                          <ul className="space-y-2 text-sm text-red-700">
                            <li>• Cardiopulmonary resuscitation techniques</li>
                            <li>• Automated external defibrillator use</li>
                            <li>• Recognition of cardiac arrest</li>
                            <li>• Recovery position placement</li>
                            <li>• Choking response procedures</li>
                          </ul>
                        </div>
                        
                        <div className="bg-blue-50 rounded-xl p-6">
                          <Shield className="w-8 h-8 text-blue-600 mb-4" />
                          <h4 className="font-semibold text-blue-800 mb-3">Wound & Bleeding</h4>
                          <ul className="space-y-2 text-sm text-blue-700">
                            <li>• Direct pressure application</li>
                            <li>• Proper bandaging techniques</li>
                            <li>• Severe bleeding control</li>
                            <li>• Infection prevention methods</li>
                            <li>• Burn injury management</li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 rounded-xl p-6">
                          <Users className="w-8 h-8 text-green-600 mb-4" />
                          <h4 className="font-semibold text-green-800 mb-3">Trauma & Fractures</h4>
                          <ul className="space-y-2 text-sm text-green-700">
                            <li>• Spinal injury precautions</li>
                            <li>• Splinting and immobilization</li>
                            <li>• Head injury assessment</li>
                            <li>• Shock recognition and treatment</li>
                            <li>• Emergency patient positioning</li>
                          </ul>
                        </div>
                      </div>

                      <div className="mt-6 bg-nai-teal/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-4">Training Considerations</h3>
                        <div className="grid md:grid-cols-2 gap-6 text-sm text-gray-700">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Choose Accredited Courses</h4>
                            <p>Select training from recognized organizations like St John Ambulance, Red Cross, or NAI to ensure quality and certification validity.</p>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-2">Regular Skill Updates</h4>
                            <p>First aid certification typically requires renewal every 1-3 years to maintain currency with best practices and guidelines.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Conclusion */}
                  <section id="conclusion" className="mb-12">
                    <div className="bg-gradient-to-r from-nai-teal to-nai-highlight rounded-2xl p-8 text-white">
                      <div className="flex items-center gap-3 mb-6">
                        <Shield className="w-8 h-8" />
                        <h2 className="text-2xl font-bold">Empowering Communities Through Knowledge</h2>
                      </div>
                      
                      <p className="text-white/90 leading-relaxed mb-6">
                        First aid training is an investment in community safety and personal empowerment. Whether you're exploring 
                        Australia's magnificent outdoors, working in a professional environment, or living in a rural community, 
                        first aid skills provide the confidence and capability to make a real difference when it matters most. 
                        The knowledge that you can potentially save a life makes the training invaluable beyond measure.
                      </p>
                      
                      <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold mb-3">Ready to Learn Life-Saving Skills?</h3>
                        <p className="text-white/90 text-sm mb-4">
                          Join NAI's certified first aid training programs and gain the skills to protect your community, 
                          workplace, and loved ones in emergency situations.
                        </p>
                        <Link 
                          to="/courses" 
                          className="bg-white text-nai-teal px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                        >
                          Explore First Aid Courses
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

                  {/* Emergency Stats */}
                  <div className="bg-gradient-to-br from-red-50 to-red-100 rounded-2xl p-6">
                    <h3 className="font-bold text-red-800 mb-4">Emergency Stats</h3>
                    <div className="space-y-4">
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">4-6 min</div>
                        <div className="text-xs text-red-700">Brain death without oxygen</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">30+ min</div>
                        <div className="text-xs text-red-700">Rural response times</div>
                      </div>
                      <div className="text-center">
                        <div className="text-2xl font-bold text-red-600 mb-1">3x</div>
                        <div className="text-xs text-red-700">Improved survival rates</div>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-nai-teal rounded-2xl p-6 text-white text-center">
                    <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold mb-2">Start Training Today</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Learn essential first aid skills and become a community lifesaver.
                    </p>
                    <Link 
                      to="/contact" 
                      className="bg-white text-nai-teal px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors inline-block"
                    >
                      Find Courses
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

export default BlogPost24