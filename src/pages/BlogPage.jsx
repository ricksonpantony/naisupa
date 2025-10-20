import React from 'react'
import { Helmet } from 'react-helmet-async'
import { motion } from 'framer-motion'
import { ArrowRight, BookOpen, Newspaper } from 'lucide-react'
import { useNavigate } from 'react-router-dom'

const BlogPage = () => {
  const navigate = useNavigate()

  const handleViewAllNews = () => {
    navigate('/blogs/news')
  }

  return (
    <>
      <Helmet>
        <title>Blogs (Our Values & articles)</title>
        <meta name="description" content="NAI is the only NCLEX & OSCE coaching company helping nurses achieve their dream. Expert educators, proven success rates, and comprehensive OBA pathway support for internationally qualified nurses." />
        <link rel="canonical" href="https://nurseassistinternational.com/pages/blogs" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Blog - Our Values & Articles | Nurse Assist International" />
        <meta property="og:description" content="Read articles about our values, nursing trends, and career guidance for international nurses." />
        <meta property="og:url" content="https://nurseassistinternational.com/pages/blogs" />
        <meta property="og:type" content="website" />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-nai-soft via-white to-nai-teal/5">
        <div className="container-responsive py-20">
          {/* Clean Hero Section */}
          <motion.div 
            className="text-center mb-16 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center justify-center gap-4 mb-6">
              <BookOpen className="w-12 h-12 text-nai-teal" />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-nai-dark">
                Blogs
              </h1>
            </div>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Explore our comprehensive collection of nursing education resources, 
              industry insights, and professional development articles.
            </p>
          </motion.div>

          {/* Clean CTA Section */}
          <motion.div 
            className="bg-white rounded-2xl shadow-xl p-8 md:p-12 text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="mb-6">
              <Newspaper className="w-16 h-16 text-nai-highlight mx-auto mb-4" />
              <h2 className="text-3xl md:text-4xl font-bold text-nai-dark mb-4">
                Latest News & Articles
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed">
                Stay updated with the latest nursing news, exam updates, career opportunities, 
                and educational insights from our expert team.
              </p>
            </div>

            {/* View All Button */}
            <motion.button
              onClick={handleViewAllNews}
              className="btn-primary text-lg px-8 py-4 flex items-center gap-3 mx-auto"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>View All News & Articles</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>

            {/* Additional Info */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Discover NCLEX updates, OSCE preparation tips, career guidance, and more
              </p>
            </div>
          </motion.div>

          {/* Features Grid */}
          <motion.div 
            className="grid md:grid-cols-3 gap-8 mt-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {[
              {
                title: "Latest Updates",
                description: "Stay informed about NCLEX-NGN and OSCE examination changes",
                icon: "🔄"
              },
              {
                title: "Expert Insights",
                description: "Professional guidance from experienced nursing educators",
                icon: "👨‍⚕️"
              },
              {
                title: "Career Resources",
                description: "Tips and strategies for advancing your nursing career",
                icon: "📈"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 + (index * 0.1) }}
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-nai-dark mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </>
  )
}

export default BlogPage
