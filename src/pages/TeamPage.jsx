import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { Award, Users, TrendingUp } from 'lucide-react'

const TeamPage = () => {

  // Leadership Team
  const leadershipTeam = [
    {
      name: "Mr. Thomas Mathew",
      role: "Chief Executive Officer",
      specialization: "Strategic Leadership & Vision",
      image: "/Team/CEO Mr. Thomas Mathew.avif",
      achievements: ["Visionary Leader", "Healthcare Innovation", "Global Expansion Expert"],
      category: "leadership"
    },
    {
      name: "Mr. Georgi Mathew",
      role: "Director",
      specialization: "Operations & Business Development",
      image: "/Team/Managing Director Mr. Georgi Mathew.jpg",
      achievements: ["Operations Excellence", "Strategic Planning", "International Relations"],
      category: "leadership"
    }
  ];

  // Senior Management
  const seniorManagement = [
    {
      name: "Ms. Preeti",
      role: "Lead Educator",
      specialization: "Educational Leadership & Program Development",
      image: "/Team/Ms. Preeti - direcor -Educator.jpg",
      achievements: ["Educational Leadership", "Curriculum Development", "Student Success Programs"],
      category: "management"
    },
    {
      name: "Ms. Geeta",
      role: "Lead Educator",
      specialization: "Student Assessment & Development",
      image: "/Team/Ms. Geeta Educator.avif",
      achievements: ["Assessment Expert", "Student Development", "Academic Excellence"],
      category: "management"
    },
    {
      name: "Ms. Anusha",
      role: "Senior Administrator",
      specialization: "Administrative Excellence & Student Services",
      image: "/Team/Senior Administrator Ms. Anusha.avif",
      achievements: ["Administrative Leadership", "Process Optimization", "Student Support Services"],
      category: "management"
    },
    {
      name: "Nadine",
      role: "OSCE Lab Coordinator",
      specialization: "Lab Operations & Clinical Skills Training",
      image: "/Team/Nadine, OSCE Lab Coordinater.jpeg",
      achievements: ["Lab Coordination", "OSCE Operations", "Skills Training Support"],
      category: "management"
    },
    {
      name: "Ms. Fathima Nizar",
      role: "Marketing and Social Media Management",
      specialization: "Marketing and Social Media Management",
      image: "/Team/ms-fathima.jpeg",
      achievements: ["Marketing Strategy", "Social Media", "Brand Management"],
      category: "management"
    },
    {
      name: "Ms. Juliet Takeda",
      role: "Student Consultant",
      specialization: "Student Consultant",
      image: "/Team/ms-Juliet.jpeg",
      achievements: ["Student Support", "Career Guidance", "Consultation Services"],
      category: "management"
    },
    {
      name: "Ysa Lou",
      role: "Graphic Designer",
      specialization: "Visual Design & Creative Communications",
      image: "/Team/Ysa Lou, Graphic Designer.jpeg",
      achievements: ["Graphic Design", "Visual Communications", "Creative Solutions"],
      category: "management"
    }
  ];

  // Educational Team
  const educationalTeam = [
    {
      name: "Ms. Cheryleen Chua",
      role: "NCLEX Educator",
      specialization: "NCLEX Preparation & Test Strategy",
      image: "/Team/Ms. Cheryleen Chua .jpeg",
      achievements: ["NCLEX Expertise", "Test Preparation", "Student Guidance"],
      category: "educator"
    },
    {
      name: "Mr. Aijaz",
      role: "Educator",
      specialization: "NCLEX & Clinical Skills",
      image: "/Team/Mr. Aijaz Educator.avif",
      achievements: ["NCLEX Specialist", "Clinical Excellence", "Student Mentoring"],
      category: "educator"
    },
    {
      name: "Mr. Bejoy",
      role: "Educator",
      specialization: "OSCE & Practical Training",
      image: "/Team/Mr. Bejoy Educator.avif",
      achievements: ["OSCE Expert", "Practical Skills", "Assessment Specialist"],
      category: "educator"
    },
    {
      name: "Mr. Renz",
      role: "Educator",
      specialization: "International Nursing Standards",
      image: "/Team/Mr. Renz Educator.avif",
      achievements: ["International Standards", "Quality Assurance", "Training Excellence"],
      category: "educator"
    },
    {
      name: "Ms. Giancarla",
      role: "Educator",
      specialization: "Clinical Training & Simulation",
      image: "/Team/Ms. Giancarla Educator.avif",
      achievements: ["Clinical Simulation", "Hands-on Training", "Skills Assessment"],
      category: "educator"
    },
    {
      name: "Ms. Hazel Mae",
      role: "Educator",
      specialization: "NCLEX Preparation & Strategy",
      image: "/Team/Ms. Hazel Mae Educator.avif",
      achievements: ["NCLEX Strategy", "Test Preparation", "Success Coaching"],
      category: "educator"
    },
    {
      name: "Ms. Maya",
      role: "Educator",
      specialization: "International Student Support",
      image: "/Team/Ms. Maya Educator.avif",
      achievements: ["International Support", "Cultural Integration", "Student Guidance"],
      category: "educator"
    },
    {
      name: "Ms. Priya",
      role: "Educator",
      specialization: "Advanced Clinical Skills",
      image: "/Team/Ms. Priya Educator.avif",
      achievements: ["Advanced Skills", "Clinical Excellence", "Professional Development"],
      category: "educator"
    },
    {
      name: "Ms. Reena",
      role: "Educator",
      specialization: "OSCE & Practical Assessment",
      image: "/Team/Ms. Reena Educator.avif",
      achievements: ["OSCE Specialist", "Practical Assessment", "Skills Evaluation"],
      category: "educator"
    },
    {
      name: "Ms. Rosana",
      role: "Educator",
      specialization: "Nursing Education & Mentoring",
      image: "/Team/Ms. Rosana Educator.jpg",
      achievements: ["Educational Excellence", "Student Mentoring", "Professional Growth"],
      category: "educator"
    },
    {
      name: "Ms. Susan",
      role: "Educator",
      specialization: "Student Success & Career Guidance",
      image: "/Team/Ms. Susan Educator.avif",
      achievements: ["Career Guidance", "Success Strategies", "Professional Development"],
      category: "educator"
    }
  ];

  // Premium Team Member Card Component
  const TeamMemberCard = ({ member, index }) => {
    // Get initials from name
    const getInitials = (name) => {
      const parts = name.split(' ');
      if (parts.length >= 2) {
        return parts[0][0] + parts[parts.length - 1][0];
      }
      return name.substring(0, 2).toUpperCase();
    };

    return (
      <motion.div
        className="group bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.4, delay: 0.05 * index }}
      >
        <div className="flex items-start gap-5 mb-5">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <div className="w-20 h-20 rounded-xl overflow-hidden bg-gray-100">
              {member.image ? (
                <img 
                  src={member.image} 
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              ) : (
                <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300">
                  <div className="text-gray-600 font-bold text-lg mb-1">
                    {getInitials(member.name)}
                  </div>
                  <div className="text-[8px] text-gray-500 font-medium px-1 text-center leading-tight">
                    Photo Not<br/>Available
                  </div>
                </div>
              )}
            </div>
          </div>
          
          {/* Name and Role */}
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-900 mb-1">
              {member.name}
            </h3>
            <p className="text-nai-teal font-semibold text-sm mb-2">
              {member.role}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {member.specialization}
            </p>
          </div>
        </div>

        {/* Achievement Tags */}
        <div className="flex flex-wrap gap-2">
          {member.achievements.map((achievement) => (
            <span
              key={achievement}
              className="px-3 py-1.5 bg-gray-50 text-gray-700 text-xs font-medium rounded-lg border border-gray-200"
            >
              {achievement}
            </span>
          ))}
        </div>
      </motion.div>
    )
  }

  return (
    <>
      <Helmet>
        <title>Our Team - Expert Educators & Leadership | NAI</title>
        <meta name="description" content="Meet the expert educators and nursing professionals who make NAI the leading choice for NCLEX, OSCE, and OBA preparation. Professional, experienced, and dedicated to your success." />
        <link rel="canonical" href="https://nurseassistinternational.com/pages/team" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Meet Our Expert Team - Nurse Assist International" />
        <meta property="og:description" content="Meet the expert educators and nursing professionals who make NAI the leading choice for NCLEX, OSCE, and OBA preparation." />
        <meta property="og:url" content="https://nurseassistinternational.com/pages/team" />
        <meta property="og:type" content="website" />
      </Helmet>

      {/* Main Content */}
      <div className="min-h-screen bg-gray-50 pt-24 pb-20 relative overflow-hidden">
        {/* Subtle Background Particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Floating circles */}
          <motion.div
            className="absolute top-20 left-10 w-2 h-2 bg-nai-teal/20 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-40 right-20 w-3 h-3 bg-nai-highlight/15 rounded-full"
            animate={{
              y: [0, -30, 0],
              opacity: [0.15, 0.4, 0.15],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
          <motion.div
            className="absolute top-60 left-1/4 w-2.5 h-2.5 bg-nai-deep-teal/20 rounded-full"
            animate={{
              y: [0, -25, 0],
              opacity: [0.2, 0.45, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          />
          <motion.div
            className="absolute bottom-40 right-1/3 w-2 h-2 bg-nai-teal/25 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.25, 0.5, 0.25],
            }}
            transition={{
              duration: 5.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.div
            className="absolute top-1/3 right-10 w-1.5 h-1.5 bg-nai-highlight/20 rounded-full"
            animate={{
              y: [0, -15, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          />
          <motion.div
            className="absolute bottom-60 left-1/3 w-2 h-2 bg-nai-teal/18 rounded-full"
            animate={{
              y: [0, -22, 0],
              opacity: [0.18, 0.38, 0.18],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2.5
            }}
          />
          
          {/* Subtle gradient orbs */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-nai-teal/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-nai-highlight/5 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          {/* Clean Page Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white border border-gray-200 px-5 py-2 rounded-full mb-6 shadow-sm">
              <Users className="w-4 h-4 text-nai-teal" />
              <span className="text-gray-700 font-semibold text-sm">Meet Our Team</span>
            </div>

            {/* Heading */}
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h1>

            {/* Description */}
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Dedicated professionals committed to empowering international nurses 
              with world-class education and support.
            </p>
          </motion.div>

          {/* Leadership Team */}
          <section className="mb-20">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-nai-teal rounded-xl flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Leadership
                </h2>
              </div>
              <p className="text-gray-600 text-sm ml-13">Strategic vision and organizational excellence</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {leadershipTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </section>

          {/* Management Team */}
          <section className="mb-20">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-nai-deep-teal rounded-xl flex items-center justify-center">
                  <Award className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Management
                </h2>
              </div>
              <p className="text-gray-600 text-sm ml-13">Operational excellence and student success</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seniorManagement.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </section>

          {/* Educational Team */}
          <section className="mb-20">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-nai-teal rounded-xl flex items-center justify-center">
                  <Users className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Educators
                </h2>
              </div>
              <p className="text-gray-600 text-sm ml-13">Expert instruction and personalized mentorship</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {educationalTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </section>

          {/* Mission Statement */}
          <section>
            <div className="bg-white rounded-2xl p-10 md:p-14 shadow-lg border border-gray-100">
              <div className="text-center max-w-4xl mx-auto">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-nai-teal/10 border border-nai-teal/20 px-5 py-2 rounded-full mb-6">
                  <span className="text-nai-teal font-semibold text-sm">Our Mission & Legacy</span>
                </div>
                
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                  Empowering Healthcare Excellence
                  <span className="block text-2xl md:text-3xl text-nai-teal mt-2">Since 2019</span>
                </h2>
                
                <p className="text-lg text-gray-600 leading-relaxed mb-8">
                  At Nurse Assist International, our team is united by a shared mission: to empower 
                  international nurses with the knowledge, skills, and confidence needed to excel in 
                  their healthcare careers worldwide. Since our founding in 2019, we've helped transform 
                  the lives of thousands of nurses through expert guidance, comprehensive training, and 
                  unwavering support.
                </p>

                <p className="text-base text-gray-500 leading-relaxed mb-12 italic">
                  Every member of our team brings unique expertise and dedication to ensuring your success, 
                  from your first class to achieving your international nursing certification.
                </p>
                
                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-nai-teal mb-2">
                      2019
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Year Established</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-nai-teal mb-2">
                      5000+
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Nurses Trained</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-nai-teal mb-2">
                      21+
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Team Members</div>
                  </div>
                  <div className="text-center p-4 bg-gray-50 rounded-xl">
                    <div className="text-3xl md:text-4xl font-bold text-nai-teal mb-2">
                      24/7
                    </div>
                    <div className="text-xs md:text-sm text-gray-600 font-medium">Student Support</div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="mt-10 pt-8 border-t border-gray-200">
                  <div className="grid md:grid-cols-3 gap-6 text-left">
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2">Our Vision</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        To be the global leader in international nursing education and certification preparation.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2">Our Values</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Excellence, integrity, personalized support, and unwavering commitment to student success.
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-gray-900 mb-2">Our Promise</h4>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Expert guidance and comprehensive support every step of your nursing career journey.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

        </div>
      </div>
    </>
  )
}

export default TeamPage
