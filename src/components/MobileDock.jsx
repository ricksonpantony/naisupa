import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Phone, Mail, MessageCircle, BookOpen, X, ChevronUp } from 'lucide-react'

const MobileDock = () => {
  const [isVisible, setIsVisible] = useState(false)
  const [isExpanded, setIsExpanded] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY
      const windowHeight = window.innerHeight
      const documentHeight = document.documentElement.scrollHeight
      
      // Show dock when scrolled past hero section and not at the very bottom
      setIsVisible(scrollY > windowHeight * 0.5 && scrollY < documentHeight - windowHeight - 100)
    }

    const listenerOptions = { passive: true }
    window.addEventListener('scroll', handleScroll, listenerOptions)
    return () => window.removeEventListener('scroll', handleScroll, listenerOptions)
  }, [])

  const quickActions = [
    {
      icon: Phone,
      label: "Call",
      action: () => window.open('tel:+61478320397'),
      color: "bg-green-500"
    },
    {
      icon: Mail,
      label: "Email",
      action: () => window.open('mailto:admin@nurseassistinternational.com'),
      color: "bg-blue-500"
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      action: () => window.open('https://wa.me/61478320397'),
      color: "bg-green-600"
    },
    {
      icon: BookOpen,
      label: "Enroll",
      action: () => {
        // Scroll to contact section
        const contactSection = document.querySelector('#contact')
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' })
        }
      },
      color: "bg-nai-highlight"
    },
    {
      icon: ChevronUp,
      label: "Top",
      action: () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        })
      },
      color: "bg-gray-600"
    }
  ]

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="fixed bottom-4 left-4 right-20 z-50 md:hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ duration: 0.3 }}
        >
          <div className="relative">
            {/* Main Dock */}
            <motion.div
              className="bg-white/95 backdrop-blur-sm rounded-2xl shadow-2xl border border-gray-200/50 shadow-glow"
              animate={{ 
                height: isExpanded ? "auto" : "60px",
                padding: isExpanded ? "16px" : "8px 16px"
              }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              {!isExpanded ? (
                <div className="flex items-center justify-between h-full">
                  <div className="flex items-center gap-3">
                    <img 
                      src="/image.png" 
                      alt="NAI Logo" 
                      className="w-12 h-12 object-contain"
                    />
                    <div>
                      <p className="text-sm font-semibold text-nai-dark">Need Help?</p>
                      <p className="text-xs text-gray-500">Quick actions available</p>
                    </div>
                  </div>
                  <button
                    onClick={() => setIsExpanded(true)}
                    className="w-10 h-10 bg-nai-highlight rounded-full flex items-center justify-center text-white hover:bg-nai-deep-teal transition-colors duration-200"
                  >
                    <span className="text-lg">+</span>
                  </button>
                </div>
              ) : (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-semibold text-nai-dark">Quick Actions</h3>
                    <button
                      onClick={() => setIsExpanded(false)}
                      className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-gray-600"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                  
                  <div className="grid grid-cols-3 gap-2">
                    {quickActions.slice(0, 3).map((action, index) => (
                      <motion.button
                        key={index}
                        onClick={action.action}
                        className={`${action.color} text-white rounded-xl p-3 flex flex-col items-center gap-1 hover:scale-105 transition-transform duration-200`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: index * 0.1 }}
                      >
                        <action.icon className="w-5 h-5" />
                        <span className="text-xs font-medium">{action.label}</span>
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="grid grid-cols-2 gap-2 mt-2">
                    {quickActions.slice(3).map((action, index) => (
                      <motion.button
                        key={index + 3}
                        onClick={action.action}
                        className={`${action.color} text-white rounded-xl p-3 flex flex-col items-center gap-1 hover:scale-105 transition-transform duration-200`}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2, delay: (index + 3) * 0.1 }}
                      >
                        <action.icon className="w-5 h-5" />
                        <span className="text-xs font-medium">{action.label}</span>
                      </motion.button>
                    ))}
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <button
                      onClick={() => {
                        const contactSection = document.querySelector('#contact')
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: 'smooth' })
                        }
                        setIsExpanded(false)
                      }}
                      className="w-full btn-primary text-sm py-2"
                    >
                      Get Started Today
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default MobileDock
