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
    <nav
      className={`sticky top-0 left-0 right-0 z-[100] transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-white/90 backdrop-blur-sm'
      }`}
      style={{ position: 'sticky', top: 0, left: 0, right: 0, zIndex: 100 }}
    >
      <div className="container-responsive">
        <div className="flex items-center justify-between h-16 sm:h-18">
          {/* Logo - No Background */}
          <Link to="/" onClick={handleLogoClick}>
            <motion.div
              className="flex items-center"
              whileHover={{ scale: 1.05 }}
            >
              <img 
                src="/image.png" 
                alt="Nurse Assist International" 
                className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 object-contain"
                width="112"
                height="112"
                loading="eager"
                decoding="async"
              />
            </motion.div>
          </Link>

          {/* Desktop Navigation - Teal Background Only on Nav Items */}
          <div className="hidden lg:flex items-center">
            {/* Navigation Items Container with teal background */}
            <div className="flex items-center gap-1 bg-nai-deep-teal px-4 py-2 rounded-full shadow-lg">
              {mainNavItems.map((item, index) => {
                if (item.type === 'dropdown') {
                  return (
                    <div key={item.name} className="relative">
                      <button
                        className="flex items-center gap-1 text-white hover:bg-white/10 px-3 py-1.5 rounded-full font-medium transition-all duration-200 text-sm"
                        onMouseEnter={() => setOpenDropdown(item.name)}
                        onMouseLeave={() => setOpenDropdown(null)}
                      >
                        {item.name}
                        <ChevronDown className="w-3.5 h-3.5" />
                      </button>
                    
                      <AnimatePresence>
                        {openDropdown === item.name && (
                          <motion.div
                            className="absolute top-full left-0 mt-2 w-48 bg-white rounded-xl shadow-xl border border-gray-200 py-2 z-50"
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
                                className="block px-4 py-2 text-sm text-nai-dark hover:text-white hover:bg-nai-teal rounded-lg mx-2 transition-colors"
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
                      className="text-white hover:bg-white/10 px-4 py-2 rounded-full font-medium transition-all duration-200 text-sm"
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
                      className="text-white hover:bg-white/10 px-3 py-1.5 rounded-full font-medium transition-all duration-200 text-sm"
                    >
                      {item.name}
                    </button>
                  )
                }
              })}
              
              {/* E-learning Button inside nav container */}
              <button 
                onClick={handleElearningClick}
                className="ml-2 bg-white/20 hover:bg-white/30 text-white font-semibold py-1.5 px-4 rounded-full transition-all duration-300 text-sm border border-white/30"
              >
                E-learning
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => {
              setIsMobileMenuOpen(!isMobileMenuOpen)
              if (isMobileMenuOpen) {
                setMobileOpenDropdown(null)
              }
            }}
            className="lg:hidden p-2 bg-nai-deep-teal text-white rounded-lg hover:bg-nai-teal transition-all shadow-md"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden bg-nai-deep-teal backdrop-blur-sm border-t border-white/10 absolute top-full left-0 right-0 shadow-2xl"
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
                          className="flex items-center justify-between w-full text-white font-medium py-2 transition-colors"
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
                                  className="block text-white/90 hover:text-nai-soft py-2 transition-colors text-sm"
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
                        className="block text-white hover:text-nai-soft font-medium py-2 transition-colors"
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
                        className="block w-full text-left text-white hover:text-nai-soft font-medium py-2 transition-colors"
                      >
                        {item.name}
                      </button>
                    )
                  }
                })}
                
                <div className="pt-4 border-t border-white/10 space-y-3">
                  <button className="flex items-center gap-2 text-white hover:text-nai-soft transition-colors w-full">
                    <Phone className="w-4 h-4" />
                    <span>+61 478 320 397</span>
                  </button>
                  <button className="flex items-center gap-2 text-white hover:text-nai-soft transition-colors w-full">
                    <Mail className="w-4 h-4" />
                    <span>admin@nurseassistinternational.com</span>
                  </button>
                  <button 
                    onClick={handleElearningClick}
                    className="w-full bg-nai-highlight hover:bg-nai-teal text-white font-semibold py-2 px-4 rounded-lg transition-colors duration-300"
                  >
                    E-learning Login
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navigation
