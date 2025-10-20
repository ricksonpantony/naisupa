import React from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Youtube } from 'lucide-react'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const footerLinks = {
    courses: [
      { name: "NCLEX-RN Preparation", href: "#" },
      { name: "OSCE Training", href: "#" },
      { name: "OBA Pathway", href: "#" },
      { name: "NCLEX-NGN", href: "#" }
    ],
    support: [
      { name: "FAQs", href: "#" },
      { name: "Student Resources", href: "#" },
      { name: "Exam Tips", href: "#" },
      { name: "Success Stories", href: "#" }
    ],
    company: [
      { name: "About Us", href: "#" },
      { name: "Our Team", href: "#" },
      { name: "Contact", href: "#" },
      { name: "Careers", href: "#" }
    ],
    legal: [
      { name: "Privacy Policy", href: "#" },
      { name: "Terms of Service", href: "#" },
      { name: "Refund Policy", href: "#" },
      { name: "Disclaimer", href: "#" }
    ]
  }

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/nurseassistinternatioanal/", label: "Facebook" },
    { icon: Twitter, href: "https://x.com/nurseassist_", label: "Twitter" },
    { icon: Instagram, href: "https://www.instagram.com/nurseassist.international/", label: "Instagram" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/nurse-assist-international", label: "LinkedIn" },
    { icon: Youtube, href: "https://www.youtube.com/channel/UCUL2vr-3N2TleKdg5LLFAsQ", label: "YouTube" }
  ]

  return (
    <footer ref={ref} className="bg-gradient-to-br from-nai-deep-teal via-nai-deep-teal to-slate-800 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-nai-teal to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-gradient-to-tl from-nai-highlight to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container-responsive relative z-10">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8 lg:gap-12">
            
            {/* Company Info - Enhanced */}
            <motion.div
              className="lg:col-span-1"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6 }}
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-white to-nai-teal bg-clip-text text-transparent">
                  Nurse Assist International
                </h3>
                <p className="text-blue-100 text-sm leading-relaxed">
                  Empowering internationally qualified nurses to achieve their Australian healthcare dreams.
                </p>
              </div>
              
              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-nai-teal/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-4 h-4 text-nai-teal" />
                  </div>
                  <span className="text-blue-100">+61 478 320 397</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-8 h-8 bg-nai-teal/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-4 h-4 text-nai-teal" />
                  </div>
                  <span className="text-blue-100">admin@nurseassistinternational.com</span>
                </div>
              </div>

              {/* Social Links - Moved to company section */}
              <div>
                <h5 className="text-sm font-semibold mb-3 text-white">Follow Us</h5>
                <div className="flex items-center gap-3">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-9 h-9 bg-white/10 hover:bg-nai-teal rounded-xl flex items-center justify-center transition-all duration-300 hover:scale-110"
                      aria-label={social.label}
                    >
                      <social.icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Office Addresses - Compact */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Our Offices</h4>
              <div className="space-y-3">
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-nai-teal flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-100">
                      <div className="font-medium text-white mb-1">Sydney Offices</div>
                      <div>Suite 104, Level 1, 25 Grose St</div>
                      <div>2/2 Sorrel St, Parramatta 2150</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-nai-teal flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-100">
                      <div className="font-medium text-white mb-1">Melbourne</div>
                      <div>Ground Floor, 47 Wellington St</div>
                      <div>St. Kilda, VIC 3182</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 rounded-lg p-3">
                  <div className="flex items-start gap-2">
                    <MapPin className="w-4 h-4 text-nai-teal flex-shrink-0 mt-0.5" />
                    <div className="text-xs text-blue-100">
                      <div className="font-medium text-white mb-1">Adelaide & Wagga Wagga</div>
                      <div>1/453 Morphett St, Adelaide 5000</div>
                      <div>Wagga Wagga, NSW 2650</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Quick Links - Combined */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Quick Links</h4>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                  <h5 className="text-sm font-medium mb-2 text-nai-teal">Courses</h5>
                  <ul className="space-y-1">
                    {footerLinks.courses.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-xs text-blue-100 hover:text-white transition-colors duration-200 hover:pl-1"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-2 text-nai-teal">Support</h5>
                  <ul className="space-y-1">
                    {footerLinks.support.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-xs text-blue-100 hover:text-white transition-colors duration-200 hover:pl-1"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Newsletter & Company Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-lg font-semibold mb-4 text-white">Stay Connected</h4>
              
              {/* Compact Newsletter */}
              <div className="mb-6">
                <p className="text-xs text-blue-100 mb-3">Get exam tips & success stories</p>
                <div className="flex gap-2">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 text-sm rounded-lg bg-white/10 border border-white/20 text-white placeholder-blue-200 focus:outline-none focus:ring-1 focus:ring-nai-teal"
                  />
                  <button className="px-4 py-2 bg-nai-teal hover:bg-nai-highlight rounded-lg text-white text-sm font-medium transition-colors duration-200">
                    Join
                  </button>
                </div>
              </div>

              {/* Company & Legal Links */}
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                <div>
                  <h5 className="text-sm font-medium mb-2 text-nai-teal">Company</h5>
                  <ul className="space-y-1">
                    {footerLinks.company.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-xs text-blue-100 hover:text-white transition-colors duration-200 hover:pl-1"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h5 className="text-sm font-medium mb-2 text-nai-teal">Legal</h5>
                  <ul className="space-y-1">
                    {footerLinks.legal.map((link, index) => (
                      <li key={index}>
                        <a
                          href={link.href}
                          className="text-xs text-blue-100 hover:text-white transition-colors duration-200 hover:pl-1"
                        >
                          {link.name}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Footer - Streamlined */}
        <motion.div
          className="py-4 border-t border-white/10 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="text-blue-100 text-xs">
            © 2025 Nurse Assist International. All rights reserved. | Empowering Nurses Worldwide
          </div>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
