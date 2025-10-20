import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'

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
    }
  ];

  // Educational Team
  const educationalTeam = [
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

  // Team Member Card Component
  const TeamMemberCard = ({ member, index }) => (
    <motion.div
      className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-nai-highlight/20 group"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.05 * index }}
      whileHover={{ y: -2 }}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-16 h-16 rounded-xl overflow-hidden bg-gray-100 group-hover:shadow-md transition-shadow duration-300">
            <img 
              src={member.image} 
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-nai-highlight transition-colors duration-300">
            {member.name}
          </h3>
          <p className="text-nai-deep-teal font-extrabold text-lg mb-2 drop-shadow-sm">
            {member.role}
          </p>
          <p className="text-gray-600 text-sm mb-3 leading-relaxed">
            {member.specialization}
          </p>
          <div className="flex flex-wrap gap-1">
            {member.achievements.slice(0, 3).map((achievement, i) => (
              <span
                key={achievement}
                className="px-2 py-1 bg-gray-50 hover:bg-nai-soft/20 text-gray-700 text-xs font-medium rounded-md border border-gray-200 transition-colors duration-200"
              >
                {achievement}
              </span>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );

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
      <div className="min-h-screen bg-gray-50 pt-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

          {/* Page Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Expert Team
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Meet the dedicated professionals who guide thousands of international nurses 
              toward successful careers in healthcare.
            </p>
          </motion.div>

          {/* Leadership Team */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Leadership</h2>
              <div className="w-16 h-1 bg-nai-highlight rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {leadershipTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Management Team */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Management</h2>
              <div className="w-16 h-1 bg-nai-highlight rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {seniorManagement.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Educational Team */}
          <motion.section 
            className="mb-16"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="mb-8">
              <h2 className="text-3xl font-bold text-nai-dark mb-2">Educators</h2>
              <p className="text-gray-700 font-semibold text-sm mb-2">Expert instruction and personalized guidance</p>
              <div className="w-16 h-1 bg-nai-highlight rounded-full"></div>
            </div>
            <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {educationalTeam.map((member, index) => (
                <TeamMemberCard key={member.name} member={member} index={index} />
              ))}
            </div>
          </motion.section>

          {/* Mission Statement */}
          <motion.section 
            className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <div className="text-center max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Our Commitment
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                At Nurse Assist International, our team is united by a shared mission: to empower 
                international nurses with the knowledge, skills, and confidence needed to excel in 
                their healthcare careers. Every member of our team brings unique expertise and 
                dedication to ensuring your success.
              </p>
              <div className="flex justify-center">
                <div className="w-24 h-1 bg-gradient-to-r from-nai-highlight to-nai-deep-teal rounded-full"></div>
              </div>
            </div>
          </motion.section>

        </div>
      </div>
    </>
  )
}

export default TeamPage
