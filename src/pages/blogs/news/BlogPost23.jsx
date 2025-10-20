import React from 'react'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowLeft, BookOpen, Heart, MessageCircle, Users, Award, CheckCircle, Lightbulb, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'

const BlogPost23 = () => {
  const { backToNewsUrl } = useBlogNavigation()
  const tableOfContents = [
    { id: "introduction", title: "The Hidden Success Factor" },
    { id: "soft-skills", title: "Essential Soft Skills" },
    { id: "impact", title: "Impact on OSCE Performance" },
    { id: "development", title: "Developing Soft Skills" },
    { id: "integration", title: "Integrating Skills in Practice" },
    { id: "conclusion", title: "The Complete Nurse" }
  ]

  return (
    <>
      <SeoHead
        title="OSCE Mastery: The Power of Soft Skills in Clinical Exams | NAI"
        description="Discover how soft skills like empathy, communication, and emotional intelligence determine OSCE success. Expert guidance on developing compassionate nursing skills."
        keywords="OSCE soft skills, nursing empathy, clinical communication, emotional intelligence, OSCE success, nursing compassion, patient rapport"
        canonicalUrl="https://nurseassistinternational.com/blogs/news/osce-mastery-the-power-of-soft-skills-in-a-clinical-exam"
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
                  <Heart className="w-8 h-8" />
                </div>
              </div>
              
                            {/* Professional Black Title - Full Width */}
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 mb-6 sm:mb-8 leading-tight break-words tracking-tight">
                {post.title}
              </h1>
              
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover why empathy, communication, and emotional intelligence often determine OSCE success more than clinical knowledge alone.
              </p>
              
              <div className="flex flex-wrap items-center justify-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  <span>October 09, 2024</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5" />
                  <span>6 min read</span>
                </div>
                <div className="flex items-center gap-2">
                  <User className="w-5 h-5" />
                  <span>Clinical Communication Experts</span>
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
                          <Lightbulb className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">The Hidden Success Factor</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Clinical skills are vital, but soft skills often determine your OSCE score. While technical competency 
                        is essential, the ability to connect with patients, communicate effectively, and demonstrate emotional 
                        intelligence frequently makes the difference between passing and failing.
                      </p>
                      
                      <div className="bg-red-50 border-l-4 border-red-400 p-6 mb-6">
                        <div className="flex items-center gap-3 mb-3">
                          <Star className="w-6 h-6 text-red-500" />
                          <h3 className="text-lg font-semibold text-red-800">Critical Insight</h3>
                        </div>
                        <p className="text-red-700 text-sm">
                          Even when your clinical assessment is correct, poor communication can result in a lower grade. 
                          Examiners evaluate not just what you do, but how you do it and how you interact with patients and colleagues.
                        </p>
                      </div>

                      <div className="bg-nai-teal/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-4">Why Soft Skills Matter in OSCE</h3>
                        <div className="grid md:grid-cols-2 gap-4">
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Build rapport with simulated patients</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Demonstrate professional competence</span>
                            </li>
                          </ul>
                          <ul className="space-y-2 text-gray-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Show cultural sensitivity and awareness</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-5 h-5 text-nai-teal mt-1 flex-shrink-0" />
                              <span>Manage stress and time effectively</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Essential Soft Skills */}
                  <section id="soft-skills" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-nai-highlight rounded-lg">
                          <Heart className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Essential Soft Skills for OSCE Success</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Four core soft skills form the foundation of successful OSCE performance. Developing these skills 
                        alongside clinical knowledge creates the complete nursing professional that examiners seek to identify.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Heart className="w-8 h-8 text-pink-600" />
                            <h4 className="font-semibold text-pink-800">Empathy</h4>
                          </div>
                          <p className="text-sm text-pink-700 mb-3">
                            The ability to understand and share patients' feelings, demonstrating genuine concern for their wellbeing.
                          </p>
                          <ul className="text-xs text-pink-600 space-y-1">
                            <li>• Active listening and emotional validation</li>
                            <li>• Appropriate facial expressions and body language</li>
                            <li>• Acknowledgment of patient concerns</li>
                            <li>• Comfort and reassurance provision</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <MessageCircle className="w-8 h-8 text-blue-600" />
                            <h4 className="font-semibold text-blue-800">Communication</h4>
                          </div>
                          <p className="text-sm text-blue-700 mb-3">
                            Clear, respectful, and culturally sensitive verbal and non-verbal communication with all stakeholders.
                          </p>
                          <ul className="text-xs text-blue-600 space-y-1">
                            <li>• Clear explanations in layperson's terms</li>
                            <li>• Professional yet approachable tone</li>
                            <li>• Effective questioning techniques</li>
                            <li>• Cultural sensitivity and awareness</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Clock className="w-8 h-8 text-green-600" />
                            <h4 className="font-semibold text-green-800">Time Management</h4>
                          </div>
                          <p className="text-sm text-green-700 mb-3">
                            Efficient task prioritization and completion within allocated timeframes without appearing rushed.
                          </p>
                          <ul className="text-xs text-green-600 space-y-1">
                            <li>• Strategic task prioritization</li>
                            <li>• Calm, measured approach to procedures</li>
                            <li>• Effective workflow organization</li>
                            <li>• Stress management under pressure</li>
                          </ul>
                        </div>
                        
                        <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
                          <div className="flex items-center gap-3 mb-4">
                            <Users className="w-8 h-8 text-purple-600" />
                            <h4 className="font-semibold text-purple-800">Emotional Intelligence</h4>
                          </div>
                          <p className="text-sm text-purple-700 mb-3">
                            Self-awareness and regulation of emotions while accurately reading and responding to others' emotions.
                          </p>
                          <ul className="text-xs text-purple-600 space-y-1">
                            <li>• Self-regulation under stress</li>
                            <li>• Recognition of emotional cues</li>
                            <li>• Appropriate emotional responses</li>
                            <li>• Maintenance of professional boundaries</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Impact on Performance */}
                  <section id="impact" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-orange-500 rounded-lg">
                          <Star className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Impact on OSCE Performance</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Soft skills directly influence multiple aspects of OSCE performance, from station-to-station transitions 
                        to patient interactions and examiner impressions. Understanding this impact helps prioritize skill development.
                      </p>

                      <div className="space-y-6">
                        <div className="border-l-4 border-nai-teal pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">Patient Rapport and Trust</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Strong soft skills immediately establish patient trust, making simulated patients more cooperative 
                            and responsive to your care approach.
                          </p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-xs text-gray-600">
                              <strong>Example:</strong> A warm introduction with appropriate eye contact and active listening 
                              can transform a difficult patient scenario into a collaborative interaction.
                            </p>
                          </div>
                        </div>
                        
                        <div className="border-l-4 border-blue-500 pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">Examiner Confidence</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Examiners assess your readiness for independent practice. Strong soft skills demonstrate 
                            professional maturity and patient safety consciousness.
                          </p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-xs text-gray-600">
                              <strong>Key Point:</strong> Examiners look for nurses who will provide compassionate, 
                              safe care in real clinical settings, not just technical skill demonstration.
                            </p>
                          </div>
                        </div>
                        
                        <div className="border-l-4 border-green-500 pl-6">
                          <h4 className="font-semibold text-nai-dark mb-2">Stress Management and Resilience</h4>
                          <p className="text-gray-600 text-sm mb-3">
                            Developing resilience helps you stay calm when moving quickly from one station to another, 
                            maintaining consistent performance throughout the examination.
                          </p>
                          <div className="bg-gray-50 rounded-lg p-4">
                            <p className="text-xs text-gray-600">
                              <strong>Impact:</strong> Emotional regulation prevents one challenging station from negatively 
                              affecting performance in subsequent stations.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Developing Soft Skills */}
                  <section id="development" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-green-500 rounded-lg">
                          <Award className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Developing Your Soft Skills</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        Soft skills can be developed through deliberate practice and reflection. The key is consistent 
                        application in both clinical and everyday situations to build authentic, natural responses.
                      </p>

                      <div className="grid md:grid-cols-2 gap-6 mb-6">
                        <div className="bg-blue-50 rounded-xl p-6">
                          <h4 className="font-semibold text-blue-800 mb-4">Practice Strategies</h4>
                          <ul className="space-y-3 text-sm text-blue-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span><strong>Role-play scenarios:</strong> Practice with family and friends in various patient situations</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span><strong>Video practice:</strong> Record yourself to observe body language and tone</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span><strong>Mindfulness training:</strong> Develop emotional awareness and regulation</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-blue-600 mt-1 flex-shrink-0" />
                              <span><strong>Feedback seeking:</strong> Ask mentors to evaluate your interpersonal skills</span>
                            </li>
                          </ul>
                        </div>
                        
                        <div className="bg-green-50 rounded-xl p-6">
                          <h4 className="font-semibold text-green-800 mb-4">Daily Application</h4>
                          <ul className="space-y-3 text-sm text-green-700">
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Active listening:</strong> Practice fully focusing on speakers in conversations</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Empathy exercises:</strong> Try to understand others' perspectives regularly</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Stress management:</strong> Practice breathing and calming techniques daily</span>
                            </li>
                            <li className="flex items-start gap-3">
                              <CheckCircle className="w-4 h-4 text-green-600 mt-1 flex-shrink-0" />
                              <span><strong>Cultural awareness:</strong> Learn about different cultural perspectives on health</span>
                            </li>
                          </ul>
                        </div>
                      </div>

                      <div className="bg-nai-teal/20 rounded-xl p-6">
                        <h3 className="text-lg font-semibold text-nai-teal mb-4">Self-Assessment Questions</h3>
                        <div className="space-y-3 text-sm text-gray-700">
                          <div className="flex items-start gap-3">
                            <span className="bg-nai-teal text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-1">?</span>
                            <span>How do I typically respond when someone is upset or anxious?</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="bg-nai-teal text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-1">?</span>
                            <span>Do I maintain eye contact and use appropriate body language during conversations?</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="bg-nai-teal text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-1">?</span>
                            <span>Can I explain complex information in simple, understandable terms?</span>
                          </div>
                          <div className="flex items-start gap-3">
                            <span className="bg-nai-teal text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-1">?</span>
                            <span>How well do I manage my own stress and emotions under pressure?</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </section>

                  {/* Integration */}
                  <section id="integration" className="mb-12">
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">
                      <div className="flex items-center gap-3 mb-6">
                        <div className="p-2 bg-purple-500 rounded-lg">
                          <Users className="w-6 h-6 text-white" />
                        </div>
                        <h2 className="text-2xl font-bold text-nai-dark">Integrating Skills in OSCE Practice</h2>
                      </div>
                      
                      <p className="text-gray-700 leading-relaxed mb-6">
                        When preparing for the OSCE, spend time honing soft skills alongside clinical practice. 
                        The most successful candidates seamlessly integrate technical competence with compassionate care.
                      </p>

                      <div className="bg-gradient-to-r from-nai-teal/5 to-nai-highlight/5 rounded-xl p-6 mb-6">
                        <h3 className="text-lg font-semibold text-nai-dark mb-4">Balanced Preparation Approach</h3>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Technical Skills (50%)</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Clinical procedures and protocols</li>
                              <li>• Assessment techniques</li>
                              <li>• Safety measures and documentation</li>
                              <li>• Evidence-based practice knowledge</li>
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-3">Soft Skills (50%)</h4>
                            <ul className="text-sm text-gray-600 space-y-1">
                              <li>• Patient communication and rapport</li>
                              <li>• Empathy and emotional intelligence</li>
                              <li>• Time management and organization</li>
                              <li>• Professional presence and confidence</li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        <div className="flex items-start gap-4">
                          <span className="bg-nai-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">1</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Practice Holistic Patient Care</h4>
                            <p className="text-gray-600 text-sm">
                              During practice sessions, focus not only on completing tasks correctly but also on how you interact 
                              with simulated patients throughout the process.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <span className="bg-nai-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">2</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Simulate Realistic Scenarios</h4>
                            <p className="text-gray-600 text-sm">
                              Create practice scenarios that include challenging patient personalities, time pressures, 
                              and emotional situations to build comprehensive skills.
                            </p>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-4">
                          <span className="bg-nai-teal text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">3</span>
                          <div>
                            <h4 className="font-semibold text-gray-900 mb-1">Seek Comprehensive Feedback</h4>
                            <p className="text-gray-600 text-sm">
                              Ask observers to evaluate both your technical skills and your interpersonal effectiveness, 
                              providing specific examples for improvement.
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
                        <Heart className="w-8 h-8" />
                        <h2 className="text-2xl font-bold">The Complete Nurse: Technical + Compassionate</h2>
                      </div>
                      
                      <p className="text-white/90 leading-relaxed mb-6">
                        Remember: an excellent nurse is compassionate as well as technically proficient. The OSCE evaluates 
                        your readiness to provide holistic patient care that addresses not only physical needs but also 
                        emotional and psychological wellbeing. By developing strong soft skills alongside clinical competence, 
                        you demonstrate the complete professional profile that healthcare organizations seek.
                      </p>
                      
                      <div className="bg-white/20 rounded-xl p-6 backdrop-blur-sm">
                        <h3 className="text-lg font-semibold mb-3">Ready to Develop Your Complete Skill Set?</h3>
                        <p className="text-white/90 text-sm mb-4">
                          Join NAI's comprehensive OSCE preparation program that emphasizes both technical excellence 
                          and compassionate care skills for complete professional development.
                        </p>
                        <Link 
                          to="/courses" 
                          className="bg-white text-nai-teal px-6 py-3 rounded-lg font-semibold hover:bg-gray-50 transition-colors inline-block"
                        >
                          Explore Our Programs
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
                    <h3 className="font-bold text-nai-dark mb-4">Key Skills</h3>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Empathy</span>
                        <span className="font-semibold text-nai-teal">Essential</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Communication</span>
                        <span className="font-semibold text-nai-teal">Critical</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">Time Mgmt</span>
                        <span className="font-semibold text-nai-teal">Vital</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-gray-600">EQ</span>
                        <span className="font-semibold text-nai-teal">Key</span>
                      </div>
                    </div>
                  </div>

                  {/* Call to Action */}
                  <div className="bg-nai-teal rounded-2xl p-6 text-white text-center">
                    <Heart className="w-12 h-12 mx-auto mb-4 opacity-80" />
                    <h3 className="font-bold mb-2">Develop Soft Skills</h3>
                    <p className="text-sm text-white/80 mb-4">
                      Need guidance on developing empathy and communication skills for OSCE success?
                    </p>
                    <Link 
                      to="/contact" 
                      className="bg-white text-nai-teal px-4 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition-colors inline-block"
                    >
                      Get Support
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

export default BlogPost23