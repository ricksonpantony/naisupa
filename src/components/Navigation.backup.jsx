import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Phone, Mail, ChevronDown } from 'lucide-react'

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState(null)
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const listenerOptions = { passive: true }
    window.addEventListener('scroll', handleScroll, listenerOptions)
    return () => window.removeEventListener('scroll', handleScroll, listenerOptions)
  }, [])

  const mainNavItems = [
    { name: 'Home', href: '/', type: 'link' },
      { 
        name: 'Courses', 
        type: 'dropdown',
        items: [
          { name: 'OSCE Preparation', href: '/pages/osce-preparation' },
          { name: 'NCLEX Preparation', href: '/pages/nclex-ngn' },
          { name: 'OBA Preparation', href: '/pages/oba' }
        ]
      },
    { 
      name: 'Resources', 
      type: 'dropdown',
      items: [
        { name: 'NCLEX FAQ', href: '/pages/nclex-ngn-faq' },
        { name: 'OSCE FAQ', href: '/pages/osce-faqs' }
      ]
    },
      { 
        name: 'Media', 
        type: 'dropdown',
        items: [
          { name: 'Gallery', href: '/pages/gallery' },
          { name: 'Testimonials', href: '/pages/testimonials' },
          { name: 'Blogs and News', href: '/blogs/news' },
          { name: 'Videos', href: '/pages/videos' }
        ]
      },
    { 
      name: 'About', 
      type: 'dropdown',
      items: [
        { name: 'About Us', href: '/pages/about' },
        { name: 'Our Team', href: '/pages/team' }
      ]
    },
    { name: 'Contact Us', href: '/pages/contact', type: 'link' },
    { name: 'Referral Form', href: '/pages/referral-form', type: 'link' }
  ]

  const scrollToSection = (href) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first then scroll
      window.location.href = href
    } else {
      // If on home page, scroll to section
      const element = document.querySelector(href.replace('/#', '#'))
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      } else {
        // If section not found, scroll to top
        window.scrollTo({ top: 0, behavior: 'smooth' })
      }
    }
    setIsMobileMenuOpen(false)
  }

  const handleLogoClick = () => {
    // Close mobile menu if open
    setIsMobileMenuOpen(false)
    
    // If already on home page, scroll to top smoothly
    if (location.pathname === '/') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // If on different page, the ScrollToTopOnRouteChange component will handle scrolling
  }

  const handleNavLinkClick = (href) => {
    // Close mobile menu and any open dropdowns
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
    
    // If staying on the same page, scroll to top
    if (location.pathname === href) {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
    // For different pages, the ScrollToTopOnRouteChange component will handle scrolling
  }

  const handleElearningClick = () => {
    // Close mobile menu and dropdowns
    setIsMobileMenuOpen(false)
    setOpenDropdown(null)
    
    // Open Moodle e-learning platform in new tab
    window.open('https://nurseassistinternationa.moodlecloud.com/login/index.php', '_blank')
  }

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-nai-deep-teal/98 backdrop-blur-sm shadow-lg' 
          : 'bg-nai-deep-teal'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo */}
          <Link to="/" onClick={handleLogoClick}>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/image.png" 
                alt="Nurse Assist International - Australia's Leading Nursing Education Institute" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                width="112"
                height="112"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-6 xl:gap-8">
            {mainNavItems.map((item) => {
              if (item.type === 'dropdown') {
                return (
                  <div key={item.name} className="relative">
                    <button
                      className="flex items-center gap-1 text-white hover:text-nai-soft font-medium transition-colors duration-200 text-sm xl:text-base py-2"
                      onMouseEnter={() => setOpenDropdown(item.name)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      {item.name}
                      <ChevronDown className="w-4 h-4" />
                    </button>
                    
                    <AnimatePresence>
                      {openDropdown === item.name && (
                        <motion.div
                          className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          transition={{ duration: 0.2 }}
                          onMouseEnter={() => setOpenDropdown(item.name)}
                          onMouseLeave={() => setOpenDropdown(null)}
                        >
                          {item.items.map((subItem) => (
                            <Link
                              key={subItem.name}
                              to={subItem.href}
                              className="block px-4 py-2 text-sm text-nai-dark hover:text-nai-highlight hover:bg-nai-teal/10 transition-colors"
                              onClick={() => {
                                setOpenDropdown(null)
                                handleNavLinkClick(subItem.href)
                              }}
                            >
                              {subItem.name}
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                )
              } else if (item.type === 'link') {
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className="text-nai-dark hover:text-nai-highlight font-medium transition-colors duration-200 text-sm xl:text-base"
                    onClick={() => handleNavLinkClick(item.href)}
                  >
                    {item.name}
                  </Link>
                )
              } else {
                return (
                  <button
                    key={item.name}
                    onClick={() => scrollToSection(item.href)}
                    className="text-nai-dark hover:text-nai-highlight font-medium transition-colors duration-200 text-sm xl:text-base"
                  >
                    {item.name}
                  </button>
                )
              }
            })}
          </div>

          {/* Contact Buttons */}
          <div className="hidden lg:flex items-center gap-2 xl:gap-3">
            <button className="flex items-center gap-1 xl:gap-2 text-nai-dark hover:text-nai-highlight transition-colors">
              <Phone className="w-3 h-3 xl:w-4 xl:h-4" />
              <span className="text-xs xl:text-sm">+61 478 320 397</span>
            </button>
            <button 
              onClick={handleElearningClick}
              className="btn-primary text-xs xl:text-sm py-2 px-3 xl:px-4"
            >
              E-learning Login
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen)
              if (isMobileMenuOpen) {
                setMobileOpenDropdown(null)
              }
            }}
            className="lg:hidden p-2 text-nai-dark"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-white/95 backdrop-blur-sm border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="container-responsive py-4">
              <div className="space-y-4">
                {mainNavItems.map((item) => {
                  if (item.type === 'dropdown') {
                    return (
                      <div key={item.name} className="space-y-2">
                        <button
                          className="flex items-center justify-between w-full text-nai-dark font-medium py-2 transition-colors"
                          onClick={() => setMobileOpenDropdown(mobileOpenDropdown === item.name ? null : item.name)}
                        >
                          <span>{item.name}</span>
                          <motion.div
                            animate={{ rotate: mobileOpenDropdown === item.name ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                          >
                            <ChevronDown className="w-4 h-4" />
                          </motion.div>
                        </button>
                        <AnimatePresence>
                          {mobileOpenDropdown === item.name && (
                            <motion.div
                              className="pl-4 space-y-2 overflow-hidden"
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: 'auto', opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.3 }}
                            >
                              {item.items.map((subItem) => (
                                <Link
                                  key={subItem.name}
                                  to={subItem.href}
                                  className="block text-nai-dark hover:text-nai-highlight py-2 transition-colors text-sm"
                                  onClick={() => {
                                    setIsMobileMenuOpen(false)
                                    setMobileOpenDropdown(null)
                                    handleNavLinkClick(subItem.href)
                                  }}
                                >
                                  {subItem.name}
                                </Link>
                              ))}
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    )
                  } else if (item.type === 'link') {
                    return (
                      <Link
                        key={item.name}
                        to={item.href}
                        className="block text-nai-dark hover:text-nai-highlight font-medium py-2 transition-colors"
                        onClick={() => {
                          setIsMobileMenuOpen(false)
                          handleNavLinkClick(item.href)
                        }}
                      >
                        {item.name}
                      </Link>
                    )
                  } else {
                    return (
                      <button
                        key={item.name}
                        onClick={() => scrollToSection(item.href)}
                        className="block w-full text-left text-nai-dark hover:text-nai-highlight font-medium py-2 transition-colors"
                      >
                        {item.name}
                      </button>
                    )
                  }
                })}
                
                <div className="pt-4 border-t border-gray-200 space-y-3">
                  <button className="flex items-center gap-2 text-nai-dark hover:text-nai-highlight transition-colors w-full">
                    <Phone className="w-4 h-4" />
                    <span>+61 478 320 397</span>
                  </button>
                  <button className="flex items-center gap-2 text-nai-dark hover:text-nai-highlight transition-colors w-full">
                    <Mail className="w-4 h-4" />
                    <span>admin@nurseassistinternational.com</span>
                  </button>
                  <button 
                    onClick={handleElearningClick}
                    className="w-full btn-primary"
                  >
                    E-learning Login
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}

export default Navigation
