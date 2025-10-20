import React, { useState, useEffect } from 'react'
import SeoHead from '../components/SeoHead'
import { motion, useScroll, useTransform } from 'framer-motion'
import { breadcrumbJsonLd, BASE_DOMAIN } from '../seo/jsonld'
import { Heart, Target, Eye, Star, CheckCircle, Shield, Clock, Lightbulb, Users, Trophy, MapPin, Phone, Mail, ArrowUp, ArrowRight } from 'lucide-react'

const AboutPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const { scrollYProgress } = useScroll();
  
  // Parallax transforms
  const heroY = useTransform(scrollYProgress, [0, 0.3], [0, -50]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0.8]);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };
    const listenerOptions = { passive: true };
    window.addEventListener('scroll', handleScroll, listenerOptions);
    return () => window.removeEventListener('scroll', handleScroll, listenerOptions);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // SEO: About page metadata with proper keywords and descriptions
  const seoData = {
    title: "About NAI - Australia's Leading Nursing Education Institute | Nurse Assist International",
    description: "Learn about NAI's 15+ year journey helping international nurses achieve Australian registration. Discover our mission, vision, values, and leadership team guiding 5,000+ successful Nurses.",
    keywords: "about NAI, nursing education Australia, international nurse support, OSCE training, NCLEX preparation, nursing registration Australia, healthcare education, nurse training institute",
    canonical: `${BASE_DOMAIN}/pages/about`,
    ogImage: `${BASE_DOMAIN}/Images/A_group_of_professional_nurses_in_teal_scrubs_diverse_in_ethnicity_and_gender_standing_together_confidently_with_warm_smiles._Some_nurses_may_hold_clipboards_stethoscopes_or_tablets_t.webp`,
    ogType: "website",
    structuredData: [
      breadcrumbJsonLd([
        { name: "Home", url: BASE_DOMAIN },
        { name: "About", url: `${BASE_DOMAIN}/pages/about` }
      ]),
      {
        "@context": "https://schema.org",
        "@type": "EducationalOrganization",
        "name": "Nurse Assist International",
        "alternateName": "NAI",
        "description": "Australia's leading nursing education institute specializing in international nurse registration and career support",
        "url": BASE_DOMAIN,
        "logo": `${BASE_DOMAIN}/Images/ALLTECHZONE.webp`,
        "foundingDate": "2008",
        "founders": [
          {
            "@type": "Person",
            "name": "Thomas Mathew"
          },
          {
            "@type": "Person", 
            "name": "Georgi Mathew"
          }
        ],
        "numberOfEmployees": "50+",
        "address": [
          {
            "@type": "PostalAddress",
            "streetAddress": "Ground Floor, 47 Wellington St",
            "addressLocality": "St. Kilda",
            "addressRegion": "VIC",
            "postalCode": "3182",
            "addressCountry": "AU"
          }
        ]
      }
    ]
  };



  const keyFeatures = [
    {
      icon: Shield,
      title: "Trusted Excellence",
      description: "Proudly serving international nurses since 2019 with dedication to your Australian registration journey",
      stats: "Quality Education"
    },
    {
      icon: Users,
      title: "Expert Faculty",
      description: "Qualified Australian nurses and healthcare professionals as your mentors",
      stats: "Professional Guidance"
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Cutting-edge learning technologies and personalized study approaches",
      stats: "Modern Learning"
    },
    {
      icon: Heart,
      title: "Comprehensive Support",
      description: "From initial assessment to career placement - we're with you every step",
      stats: "Complete Journey"
    }
  ];

  const whatWeOffer = [
    {
      icon: Target,
      title: "NCLEX-RN Preparation",
      description: "Comprehensive exam preparation with proven strategies and practice tests",
      features: ["Mock exams", "Study materials", "Expert guidance", "Performance tracking"]
    },
    {
      icon: Heart,
      title: "OSCE Training",
      description: "Hands-on clinical skills training with real-world scenarios",
      features: ["Clinical simulations", "Assessment practice", "Skill development", "Confidence building"]
    },
    {
      icon: CheckCircle,
      title: "OBA Pathway",
      description: "Complete support through the Outcome Based Assessment process",
      features: ["AHPRA guidance", "Document preparation", "Process support", "Timeline management"]
    },
    {
      icon: Users,
      title: "Career Support",
      description: "Job placement assistance and career development guidance",
      features: ["Resume building", "Interview prep", "Job matching", "Career counseling"]
    }
  ];

  const teamMembers = [
    {
      name: "Thomas Mathew",
      role: "Chief Executive Officer",
      image: "/Team/CEO Mr. Thomas Mathew.avif",
      bio: "Visionary leader with 20+ years in nursing education and healthcare management",
      expertise: "Strategic Leadership, Healthcare Management"
    },
    {
      name: "Georgi Mathew", 
      role: "Director",
      image: "/Team/Managing Director Mr. Georgi Mathew.jpg",
      bio: "Strategic operations expert ensuring excellence in student outcomes",
      expertise: "Operations Management, Student Success"
    },
    {
      name: "Ms. Preeti",
      role: "Lead Educator",
      image: "/Team/Ms. Preeti - direcor -Educator.jpg",
      bio: "Lead educator specializing in OSCE and clinical skills development",
      expertise: "Clinical Education, OSCE Training"
    },
    {
      name: "Ms. Geeta",
      role: "Lead Educator",
      image: "/Team/Ms. Geeta Educator.avif",
      bio: "Student assessment and development specialist ensuring academic excellence",
      expertise: "Assessment Expert, Student Development"
    },
    {
      name: "Ms. Anusha",
      role: "Senior Administrator",
      image: "/Team/Senior Administrator Ms. Anusha.avif",
      bio: "Administrative excellence ensuring smooth operations and student support",
      expertise: "Administration, Student Services"
    }
  ];

  const howWeHelp = [
    {
      step: "01",
      title: "Initial Assessment",
      description: "We evaluate your qualifications, experience, and goals to create a personalized pathway",
      icon: Target,
      details: ["Credential evaluation", "Skills assessment", "Goal setting", "Pathway planning"]
    },
    {
      step: "02", 
      title: "Customized Learning",
      description: "Tailored study programs based on your strengths and areas for improvement",
      icon: Lightbulb,
      details: ["Personalized curriculum", "Flexible scheduling", "One-on-one support", "Progress tracking"]
    },
    {
      step: "03",
      title: "Exam Preparation",
      description: "Intensive preparation for NCLEX-RN, OSCE, and other required assessments",
      icon: CheckCircle,
      details: ["Mock examinations", "Practice sessions", "Feedback & improvement", "Confidence building"]
    },
    {
      step: "04",
      title: "Registration Support",
      description: "Complete assistance with AHPRA registration and documentation processes",
      icon: Shield,
      details: ["Document preparation", "Application submission", "Follow-up support", "Timeline management"]
    },
    {
      step: "05",
      title: "Career Placement",
      description: "Job placement assistance and ongoing career development support",
      icon: Users,
      details: ["Resume optimization", "Interview preparation", "Job matching", "Career guidance"]
    }
  ];

  const whyChooseUs = [
    {
      title: "Proven Track Record",
      description: "Thousands of successful nurses achieving their Australian nursing dreams",
      icon: Trophy,
      highlight: "Since 2019"
    },
    {
      title: "Expert Instructors",
      description: "Australian registered nurses and healthcare professionals",
      icon: Users,
      highlight: "50+ Experts"
    },
    {
      title: "Comprehensive Support",
      description: "From initial assessment to job placement - complete journey support",
      icon: Heart,
      highlight: "End-to-End"
    },
    {
      title: "Flexible Learning",
      description: "Online and in-person options with personalized study plans",
      icon: Lightbulb,
      highlight: "Your Pace"
    }
  ];

  const testimonials = [
    {
      id: 1,
      name: "Geordy George",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Geordy George.webp",
      quote: "I recently cleared my Australia OSCE and couldn't be happier with the support and guidance I received from NAI! Thanks to their support, I successfully passed my OSCE on the first attempt!",
      rating: 5
    },
    {
      id: 2,
      name: "Nimrat Kaur",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Nimrat Kaur.webp",
      quote: "I would like to thank you whole NAI team. With your support, guidance and appreciation I pass my OSCE exam. I highly recommend NAI to anyone who wants to pass their OSCE.",
      rating: 5
    },
    {
      id: 3,
      name: "Jeni Jhonson",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Jeni Jhonson.webp",
      quote: "Thank you NAI family for making this possible, especially Georgi sir and preeti mam for your constant motivation. The procedures have been cleared that made it so smooth learning.",
      rating: 5
    },
    {
      id: 4,
      name: "Aayushma Koirala",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Aayushma Koirala.webp",
      quote: "Excellent training center with experienced instructors. NAI's comprehensive approach and dedicated support made all the difference in my nursing career journey.",
      rating: 5
    },
    {
      id: 5,
      name: "Bianca Asuncion",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Bianca Asuncion.webp",
      quote: "NAI provided comprehensive OSCE training that helped me pass on my first attempt. The mock exams and personalized feedback were exceptional.",
      rating: 5
    },
    {
      id: 6,
      name: "Dax Patel",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Dax Patel.webp",
      quote: "Professional and supportive environment at NAI. Great preparation for OSCE exam with practical hands-on training that mirrors real clinical scenarios.",
      rating: 5
    },
    {
      id: 7,
      name: "Ezina Paudel",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Ezina Paudel.webp",
      quote: "Thank you NAI team for the excellent guidance and support throughout my OSCE preparation journey. The training was thorough and effective.",
      rating: 5
    },
    {
      id: 8,
      name: "Jaskaran Singh",
      course: "OSCE",
      image: "/Gallery/NAI GALLERY/Students/Jaskaran Singh.webp",
      quote: "Outstanding OSCE preparation program. The structured approach and continuous support helped me achieve my nursing registration goals.",
      rating: 5
    }
  ];

  return (
    <>
      <SeoHead {...seoData} />

      <div className="min-h-screen bg-gradient-to-br from-nai-soft via-white to-teal-50 pt-20 relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="fixed inset-0 pointer-events-none">
          <motion.div 
            className="absolute top-20 right-10 w-64 h-64 bg-nai-teal/5 rounded-full blur-3xl"
            animate={{ 
              x: [0, 50, 0],
              y: [0, -30, 0],
              scale: [1, 1.2, 1]
            }}
            transition={{ 
              duration: 20,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute bottom-40 left-10 w-48 h-48 bg-nai-highlight/5 rounded-full blur-2xl"
            animate={{ 
              x: [0, -40, 0],
              y: [0, 40, 0],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 25,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-1/2 left-1/3 w-32 h-32 bg-nai-deep-teal/3 rounded-full blur-xl"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 1.5, 1]
            }}
            transition={{ 
              duration: 30,
              repeat: Infinity,
              ease: "linear"
            }}
          />
          <motion.div 
            className="absolute bottom-20 right-1/4 w-40 h-40 bg-nai-teal/4 rounded-full blur-2xl"
            animate={{ 
              x: [0, 60, 0],
              y: [0, -50, 0]
            }}
            transition={{ 
              duration: 18,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
          {/* Hero Section */}
        <section className="relative h-[60vh] min-h-[600px] flex items-center overflow-hidden">
          {/* Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-nai-teal/8 via-white to-nai-highlight/3"></div>
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-br from-nai-teal/10 to-nai-highlight/5 rounded-full blur-3xl transform translate-x-64 -translate-y-64"></div>
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-nai-soft/30 rounded-full blur-2xl transform -translate-x-40 translate-y-40"></div>
          
          <motion.div 
            className="container-responsive relative z-10"
            style={{ y: heroY, opacity: heroOpacity }}
          >
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-8"
              >
                <motion.div
                  className="inline-flex items-center gap-3 bg-white/80 backdrop-blur-sm text-nai-teal px-5 py-3 rounded-full text-sm font-medium shadow-lg border border-nai-teal/10"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <Heart className="w-4 h-4" />
                  Empowering International Nurses
                </motion.div>
                
                <div>
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nai-dark mb-4 leading-tight">
                    About <span className="text-nai-teal">NAI</span>
            </h1>
                  <p className="text-xl md:text-2xl text-gray-600 font-light leading-relaxed">
                    Your pathway to <span className="text-nai-highlight font-medium">AU-RN certification</span> and nursing excellence in Australia
                  </p>
                </div>
                
                <p className="text-lg text-gray-600 leading-relaxed max-w-2xl">
                  Established by dedicated Nurse Educators passionate about academic achievement, we are recognized as a leading institution preparing internationally qualified nurses for their Australian nursing journey.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <a 
                    href="#story"
                    onClick={(e) => {
                      e.preventDefault();
                      document.getElementById('story').scrollIntoView({ 
                        behavior: 'smooth',
                        block: 'start'
                      });
                    }}
                    className="inline-flex items-center justify-center gap-2 bg-nai-teal hover:bg-nai-deep-teal text-white px-8 py-4 rounded-xl font-medium transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 group"
                  >
                    <span>Discover Our Story</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="group-hover:translate-x-1 transition-transform duration-300"
                    >
                      →
                    </motion.div>
                  </a>
                  <a 
                    href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20nursing%20programs"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-8 py-4 rounded-xl font-medium transition-all duration-300"
                  >
                    <Phone className="w-4 h-4" />
                    Contact Us
                  </a>
                </div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative">
                  {/* Main Image */}
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img 
                      src="/Images/A_group_of_professional_nurses_in_teal_scrubs_diverse_in_ethnicity_and_gender_standing_together_confidently_with_warm_smiles._Some_nurses_may_hold_clipboards_stethoscopes_or_tablets_t.webp"
                      alt="Professional nurses at NAI" 
                      className="w-full h-96 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nai-teal/40 via-nai-teal/10 to-transparent"></div>
                  </div>
                  
                  {/* Floating Achievement Card */}
                  <motion.div 
                    className="absolute -top-6 -left-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, -10, 0]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.6,
                      y: { duration: 3, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.05, rotate: 2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-nai-teal/10 rounded-full flex items-center justify-center">
                        <Users className="w-6 h-6 text-nai-teal" />
                      </div>
                      <div>
                        <div className="text-2xl font-bold text-nai-dark">5,000+</div>
                        <div className="text-sm text-gray-600 font-medium">International Nurses</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Mission Card */}
                  <motion.div 
                    className="absolute -bottom-6 -right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-white/50 cursor-pointer"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ 
                      opacity: 1, 
                      scale: 1,
                      y: [0, 10, 0]
                    }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 0.8,
                      y: { duration: 4, repeat: Infinity, ease: "easeInOut" }
                    }}
                    whileHover={{ scale: 1.05, rotate: -2 }}
                  >
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-nai-highlight/10 rounded-full flex items-center justify-center">
                        <Target className="w-6 h-6 text-nai-highlight" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-nai-dark">AU-RN</div>
                        <div className="text-sm text-gray-600 font-medium">Certification</div>
                      </div>
                    </div>
                  </motion.div>

                  {/* Floating Excellence Badge */}
                  <motion.div 
                    className="absolute top-1/2 -right-8 bg-nai-teal text-white rounded-2xl p-4 shadow-xl transform -translate-y-1/2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 1 }}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                  >
                    <div className="text-center">
                      <Shield className="w-6 h-6 mx-auto mb-2" />
                      <div className="text-xs font-medium">Proudly Serving</div>
                      <div className="text-xs opacity-90">Since 2019</div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-20 relative">
          {/* Section Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-nai-soft/30 to-white"></div>
          <div className="absolute top-10 left-20 w-32 h-32 bg-nai-teal/5 rounded-full blur-2xl"></div>
          <div className="absolute bottom-10 right-20 w-24 h-24 bg-nai-highlight/5 rounded-full blur-xl"></div>
          
          <div className="container-responsive relative z-10">
          <motion.div 
              className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
                Our <span className="text-nai-teal">Story</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-nai-teal to-nai-highlight mx-auto mb-8"></div>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <motion.div
                className="space-y-6"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 leading-relaxed">
                    Nurse Assist International (NAI) was established by a dedicated group of Nurse Educators who are passionate about education and academic achievement. We are recognized as a leading institution in preparing internationally qualified nurses to confidently undertake the Outcome-Based Assessment tests.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    Over the years, thousands of international nurses have successfully obtained their AHPRA nursing registration with our guidance and support, paving the way for their AU-RN status. Our customized learning programs, delivered by experienced educators, ensure that your educational journey is both memorable and intuitive.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    We strongly believe in the potential of our students and work collaboratively to help them achieve their goals—this is encapsulated in our name, 'Nurse Assist'. Our courses equip you with the knowledge, skills, and personal attributes necessary for safe, proficient, and effective nursing practice.
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-6 mt-8">
                  {keyFeatures.map((feature, index) => (
                    <motion.div
                      key={index}
                      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300"
                      whileHover={{ y: -5 }}
                    >
                      <feature.icon className="w-8 h-8 text-nai-teal mb-3" />
                      <h3 className="font-semibold text-nai-dark mb-2">{feature.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">{feature.description}</p>
                      <span className="text-xs font-semibold text-nai-highlight">{feature.stats}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src="/Images/A_group_of_professional_nurses_in_teal_scrubs_diverse_in_ethnicity_and_gender_standing_together_confidently_with_warm_smiles._Some_nurses_may_hold_clipboards_stethoscopes_or_tablets_t.webp"
                    alt="Professional nurses at NAI" 
                    className="w-full h-96 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nai-teal/20 to-transparent"></div>
                </div>
                <motion.div 
                  className="absolute -bottom-6 -left-6 bg-white rounded-xl p-6 shadow-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-nai-teal/10 rounded-full flex items-center justify-center">
                      <Trophy className="w-6 h-6 text-nai-teal" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-nai-dark">15+</div>
                      <div className="text-sm text-gray-600">Years of Excellence</div>
                </div>
              </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Mission & Vision Section */}
        <section className="py-20 bg-gradient-to-br from-nai-soft to-white relative overflow-hidden">
          {/* Enhanced Background Effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-nai-teal/3 via-transparent to-nai-highlight/3"></div>
          <motion.div 
            className="absolute top-0 right-0 w-96 h-96 bg-nai-teal/5 rounded-full blur-3xl"
            animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
            transition={{ duration: 40, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-0 left-0 w-80 h-80 bg-nai-highlight/5 rounded-full blur-3xl"
            animate={{ scale: [1, 0.8, 1], x: [0, 50, 0] }}
            transition={{ duration: 35, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
                Mission & <span className="text-nai-teal">Vision</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-nai-teal to-nai-highlight mx-auto mb-8"></div>
          </motion.div>

            <div className="grid lg:grid-cols-2 gap-12">
          <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-nai-teal/10 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-nai-teal" />
                  </div>
                  <h3 className="text-2xl font-bold text-nai-dark">Our Mission</h3>
              </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  NAI is dedicated to delivering high-quality Outcome-Based Assessment (OBA) preparatory courses that enable internationally qualified nurses to successfully pass their OSCE exams on their first attempt. We strive to facilitate a seamless and enriching transition for international nurses into the Australian nursing profession, ensuring they obtain their AU-RN certification.
                </p>
                <div className="mt-6 p-4 bg-nai-teal/5 rounded-lg border-l-4 border-nai-teal">
                  <p className="text-nai-dark font-medium italic">
                    "We can help you achieve your nursing goal. Ready for your Australian nursing journey? Start with NAI preparatory courses."
              </p>
            </div>
          </motion.div>

          <motion.div 
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-nai-highlight/10 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-nai-highlight" />
                  </div>
                  <h3 className="text-2xl font-bold text-nai-dark">Our Vision</h3>
                </div>
                <p className="text-gray-700 leading-relaxed text-lg">
                  To empower internationally qualified nurses to become exemplary health practitioners in Australia, achieving their AU-RN status through comprehensive education and unwavering support.
                </p>
                <div className="mt-6 p-4 bg-nai-highlight/5 rounded-lg border-l-4 border-nai-highlight">
                  <p className="text-nai-dark font-medium italic">
                    "Empowering international nurses to excel as exemplary health practitioners in Australia."
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Core Values Section */}
        <section className="py-20 relative">
          {/* Dynamic Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-nai-soft/20 to-teal-50/50"></div>
          <div className="absolute top-1/4 left-10 w-40 h-40 bg-nai-teal/4 rounded-full blur-2xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-10 w-36 h-36 bg-nai-highlight/4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '2s'}}></div>
          <div className="absolute top-1/2 left-1/2 w-20 h-20 bg-nai-deep-teal/3 rounded-full blur-xl animate-bounce" style={{animationDelay: '1s'}}></div>
          
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
                Our Core <span className="text-nai-teal">Values</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-nai-teal to-nai-highlight mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These fundamental principles guide everything we do and shape our commitment to student success
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
              {[
                {
                  icon: CheckCircle,
                  title: "Validation",
                  description: "We understand and validate your feelings and concerns. We support you in overcoming challenges, empowering you to analyze and think critically.",
                  color: "nai-teal"
                },
                {
                  icon: Heart,
                  title: "Respect",
                  description: "We operate on mutual respect, recognizing your professional dignity. Our mission is to refine your existing skills to meet Australian healthcare standards.",
                  color: "nai-highlight"
                },
                {
                  icon: Target,
                  title: "Opportunity",
                  description: "We advocate for equal opportunities for all aspiring RNs. We assist you in navigating the job market after obtaining your Australian Nursing Registration.",
                  color: "nai-deep-teal"
                },
                {
                  icon: Users,
                  title: "Organisation",
                  description: "As a student-centered organization, we prioritize your feedback and actively implement improvements to enhance our support services.",
                  color: "nai-teal"
                },
                {
                  icon: Star,
                  title: "Acknowledgment",
                  description: "We recognize that the journey to becoming an Australian Registered Nurse is complex and challenging. We are committed to supporting you throughout this process.",
                  color: "nai-highlight"
                }
              ].map((value, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 text-center group cursor-pointer relative overflow-hidden"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ 
                    y: -15, 
                    scale: 1.05,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)"
                  }}
                >
                  {/* Animated background gradient on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-nai-teal/5 to-nai-highlight/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"></div>
                  
                  <div className="relative z-10">
                    <motion.div 
                      className={`w-16 h-16 bg-${value.color}/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-125 transition-all duration-500`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.8 }}
                    >
                      <value.icon className={`w-8 h-8 text-${value.color} group-hover:scale-110 transition-transform duration-300`} />
                    </motion.div>
                    <h3 className="text-xl font-bold text-nai-dark mb-4 group-hover:text-nai-teal transition-colors duration-300">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{value.description}</p>
                  </div>
                  
                  {/* Subtle shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                </motion.div>
              ))}
            </div>
              </div>
        </section>

        {/* What We Offer Section */}
        <section className="py-20 bg-gradient-to-br from-nai-soft to-white">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
                What We <span className="text-nai-teal">Offer</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-nai-teal to-nai-highlight mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Comprehensive programs designed to ensure your success in the Australian healthcare system
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {whatWeOffer.map((service, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-nai-teal/10 rounded-full flex items-center justify-center mr-4">
                      <service.icon className="w-8 h-8 text-nai-teal" />
                    </div>
                    <h3 className="text-2xl font-bold text-nai-dark">{service.title}</h3>
                </div>
                  <p className="text-gray-700 leading-relaxed text-lg mb-6">
                    {service.description}
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center">
                        <CheckCircle className="w-4 h-4 text-nai-teal mr-2 flex-shrink-0" />
                        <span className="text-sm text-gray-600">{feature}</span>
                      </div>
                    ))}
              </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* How We Help Section */}
        <section className="py-16 relative overflow-hidden">
          {/* Enhanced Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-nai-soft/40 via-white to-nai-teal/5"></div>
          <motion.div 
            className="absolute -top-20 -right-20 w-80 h-80 bg-nai-teal/5 rounded-full blur-3xl"
            animate={{ rotate: [0, 360], scale: [1, 1.3, 1] }}
            transition={{ duration: 50, repeat: Infinity, ease: "linear" }}
          />
          <motion.div 
            className="absolute -bottom-20 -left-20 w-72 h-72 bg-nai-highlight/5 rounded-full blur-3xl"
            animate={{ rotate: [360, 0], scale: [1, 0.7, 1] }}
            transition={{ duration: 45, repeat: Infinity, ease: "linear" }}
          />
          
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-nai-dark mb-4">
                How We <span className="text-nai-teal">Help</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-nai-teal to-nai-highlight mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our proven 5-step process ensures your successful transition to Australian nursing practice
              </p>
            </motion.div>

            <div className="space-y-6">
              {howWeHelp.map((step, index) => (
                <motion.div
                  key={index}
                  className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 overflow-hidden border border-white/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="flex flex-col lg:flex-row">
                    {/* Step Number and Icon */}
                    <div className="lg:w-1/4 bg-gradient-to-br from-nai-teal via-nai-deep-teal to-nai-teal p-8 flex flex-col items-center justify-center text-white relative overflow-hidden">
                      {/* Animated background pattern */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent"></div>
                      <motion.div 
                        className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center text-2xl font-bold mb-4 backdrop-blur-sm relative z-10"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        {step.step}
                      </motion.div>
                      <motion.div
                        whileHover={{ scale: 1.2, rotate: -5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <step.icon className="w-14 h-14 text-white/90" />
                      </motion.div>
                      {/* Decorative elements */}
                      <div className="absolute top-2 right-2 w-4 h-4 bg-white/20 rounded-full"></div>
                      <div className="absolute bottom-4 left-4 w-2 h-2 bg-white/30 rounded-full"></div>
                    </div>

                    {/* Content */}
                    <div className="lg:w-3/4 p-8 relative">
                      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-nai-teal/20 to-transparent"></div>
                      <h3 className="text-2xl font-bold text-nai-dark mb-4 group-hover:text-nai-teal transition-colors duration-300">{step.title}</h3>
                      <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                        {step.description}
                      </p>
                      
                      {/* Enhanced Details Grid */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {step.details.map((detail, detailIndex) => (
                          <motion.div 
                            key={detailIndex} 
                            className="flex items-center p-3 bg-nai-teal/5 rounded-lg hover:bg-nai-teal/10 transition-colors duration-300"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            <div className="w-3 h-3 bg-gradient-to-r from-nai-teal to-nai-highlight rounded-full mr-3 flex-shrink-0"></div>
                            <span className="text-sm text-gray-700 font-medium">{detail}</span>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Summary CTA */}
            <motion.div 
              className="text-center mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <div className="bg-gradient-to-r from-nai-teal/5 to-nai-highlight/5 rounded-2xl p-6 border border-nai-teal/10">
                <h3 className="text-xl font-bold text-nai-dark mb-2">Ready to Begin Your Journey?</h3>
                <p className="text-gray-600 mb-4">Let us guide you through each step to achieve your AU-RN certification</p>
                <a 
                  href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%205-step%20process"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-nai-teal hover:bg-nai-deep-teal text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:scale-105"
                >
                  <Phone className="w-4 h-4" />
                  Start Your Process
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Leadership Team Section */}
        <section className="py-20 bg-gradient-to-br from-nai-soft to-white relative overflow-hidden">
          {/* Dynamic Leadership Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-nai-teal/5 via-transparent to-nai-highlight/5"></div>
          <motion.div 
            className="absolute top-10 left-1/4 w-60 h-60 bg-nai-teal/4 rounded-full blur-3xl"
            animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute bottom-10 right-1/4 w-48 h-48 bg-nai-highlight/4 rounded-full blur-2xl"
            animate={{ x: [0, -80, 0], y: [0, 60, 0] }}
            transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
                Our <span className="text-nai-teal">Leadership</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-nai-teal to-nai-highlight mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Meet the visionary leaders who guide NAI's mission to transform nursing careers
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-6xl mx-auto mb-12">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 group overflow-hidden border border-gray-100"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="relative overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-48 object-cover object-top group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nai-teal/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-base font-bold text-nai-dark mb-1 group-hover:text-nai-teal transition-colors">{member.name}</h3>
                    <p className="text-nai-teal font-semibold text-sm mb-2">{member.role}</p>
                    <p className="text-gray-600 text-xs leading-relaxed mb-3">{member.bio}</p>
                    <div className="bg-nai-teal/5 rounded-lg p-2">
                      <p className="text-[10px] font-semibold text-nai-dark leading-tight">{member.expertise}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* View All Team Button */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="/pages/team"
                className="inline-flex items-center gap-3 px-10 py-4 bg-gradient-to-r from-nai-highlight to-nai-teal text-white font-bold rounded-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 group text-lg"
              >
                <Users className="w-6 h-6" />
                <span>Meet Our Complete Team</span>
                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-300" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-20 relative">
          {/* Engaging Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-nai-soft/30 to-white"></div>
          <div className="absolute top-0 right-1/3 w-52 h-52 bg-nai-teal/4 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 left-1/3 w-44 h-44 bg-nai-highlight/4 rounded-full blur-2xl animate-pulse" style={{animationDelay: '3s'}}></div>
          
          <div className="container-responsive relative z-10">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-nai-dark mb-6">
                Why Choose <span className="text-nai-teal">NAI</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-nai-teal to-nai-highlight mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Discover what makes NAI the preferred choice for thousands of international nurses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {whyChooseUs.map((reason, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <div className="w-16 h-16 bg-nai-teal/10 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <reason.icon className="w-8 h-8 text-nai-teal" />
              </div>
                  <div className="text-3xl font-bold text-nai-highlight mb-2">{reason.highlight}</div>
                  <h3 className="text-xl font-bold text-nai-dark mb-4">{reason.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{reason.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-20 bg-gradient-to-r from-nai-teal to-nai-highlight overflow-hidden">
          <div className="container-responsive">
            <motion.div 
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Student Success Stories</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto">
                Hear from our graduates who are now thriving in their Australian nursing careers
              </p>
            </motion.div>

            {/* Smooth Moving Testimonials Carousel */}
            <div className="relative">
              <motion.div 
                className="flex gap-6"
                animate={{ x: [0, -1920] }}
                transition={{
                  duration: 30,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ width: "max-content" }}
              >
                {/* Duplicate testimonials for seamless loop */}
                {[...testimonials, ...testimonials].map((testimonial, index) => (
                  <motion.div
                    key={`${testimonial.id}-${index}`}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl min-w-[400px] max-w-[400px] flex-shrink-0"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-4">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full object-cover border-4 border-nai-teal/20"
                        />
                        <div className="absolute -bottom-1 -right-1 bg-nai-teal rounded-full p-1">
                          <Star className="w-3 h-3 text-white fill-current" />
                        </div>
                      </div>
                      <div>
                        <h3 className="font-bold text-nai-dark text-lg">{testimonial.name}</h3>
                        <p className="text-nai-teal font-medium text-sm">{testimonial.course} Graduate</p>
                      </div>
                    </div>

                    <div className="flex mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                      ))}
                    </div>

                    <p className="text-gray-700 leading-relaxed text-sm italic mb-4">
                      "{testimonial.quote}"
                    </p>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                      <span className="text-xs text-gray-500 font-medium">Verified Graduate</span>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4 text-red-500 fill-current" />
                        <span className="text-xs text-gray-500">Success Story</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>

              {/* Gradient overlays for smooth edges */}
              <div className="absolute left-0 top-0 w-20 h-full bg-gradient-to-r from-nai-teal to-transparent pointer-events-none z-10"></div>
              <div className="absolute right-0 top-0 w-20 h-full bg-gradient-to-l from-nai-highlight to-transparent pointer-events-none z-10"></div>
            </div>

            {/* Call to action */}
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <a 
                href="/pages/testimonials"
                className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 text-white border border-white/30 px-8 py-3 rounded-xl font-medium transition-all duration-300 backdrop-blur-sm hover:scale-105"
              >
                <Users className="w-5 h-5" />
                View All Success Stories
              </a>
            </motion.div>
          </div>
        </section>

        {/* Contact CTA Section */}
        <section className="py-20 relative overflow-hidden">
          {/* Premium CTA Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-nai-teal/10 via-nai-soft/50 to-nai-highlight/10"></div>
          <motion.div 
            className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-nai-teal/5 via-transparent to-nai-highlight/5"
            animate={{ opacity: [0.3, 0.7, 0.3] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute -top-32 -right-32 w-64 h-64 bg-nai-teal/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-64 h-64 bg-nai-highlight/10 rounded-full blur-3xl"></div>
          
          <div className="container-responsive relative z-10">
          <motion.div 
              className="bg-white/95 backdrop-blur-sm rounded-3xl shadow-2xl p-12 text-center border border-white/50 relative overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Decorative background elements */}
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-nai-teal via-nai-highlight to-nai-deep-teal"></div>
              <div className="absolute -top-20 -right-20 w-40 h-40 bg-nai-teal/5 rounded-full blur-2xl"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-nai-highlight/5 rounded-full blur-2xl"></div>
              <div className="max-w-3xl mx-auto">
                <h2 className="text-4xl font-bold text-nai-dark mb-6">Ready to Transform Your Nursing Career?</h2>
                <p className="text-xl text-gray-600 mb-8">
                  Join over 5,000 successful nurses who chose NAI as their pathway to Australian nursing registration. Your dream career awaits!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
            <a 
              href="https://wa.me/61478320397?text=Hi%20NAI%20Team,%20I%20would%20like%20to%20know%20more%20about%20your%20nursing%20programs"
              target="_blank"
              rel="noopener noreferrer"
                    className="bg-nai-teal hover:bg-nai-deep-teal text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2"
                  >
                    <Phone className="w-5 h-5" />
                    WhatsApp Us Now
                  </a>
                  <a 
                    href="mailto:admin@nurseassistinternational.com"
                    className="border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center gap-2"
                  >
                    <Mail className="w-5 h-5" />
                    Email Us
                  </a>
                </div>

                <div className="grid md:grid-cols-3 gap-6 pt-8 border-t border-gray-200">
                  <div className="flex items-center justify-center gap-3">
                    <MapPin className="w-6 h-6 text-nai-teal" />
                    <span className="text-gray-600">Multiple Locations</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <Clock className="w-6 h-6 text-nai-teal" />
                    <span className="text-gray-600">24/7 Support</span>
                  </div>
                  <div className="flex items-center justify-center gap-3">
                    <CheckCircle className="w-6 h-6 text-nai-teal" />
                    <span className="text-gray-600">Quality Education</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Scroll to Top Button */}
        <motion.button
          className="fixed bottom-8 right-8 bg-nai-teal hover:bg-nai-deep-teal text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ 
            opacity: showScrollTop ? 1 : 0, 
            scale: showScrollTop ? 1 : 0 
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={scrollToTop}
        >
          <motion.div
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
          </motion.div>
        </motion.button>

        {/* Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 right-0 h-1 bg-nai-teal origin-left z-50"
          style={{ scaleX: scrollYProgress }}
        />
      </div>
    </>
  )
}

export default AboutPage