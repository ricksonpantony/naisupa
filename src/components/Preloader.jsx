import React, { useEffect } from 'react'

const Preloader = ({ onComplete }) => {
  useEffect(() => {
    // Minimal loading time for better performance
    const timer = setTimeout(() => {
      onComplete()
    }, 300) // Reduced to 300ms for better LCP

    return () => clearTimeout(timer)
  }, [onComplete])

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-nai-teal via-nai-teal to-nai-highlight z-50 flex items-center justify-center overflow-hidden">
      {/* Simplified background */}
      <div className="absolute inset-0 bg-gradient-to-br from-nai-teal/10 to-nai-highlight/10"></div>
      
      {/* Main content */}
      <div className="text-center relative z-10">
        {/* Logo */}
        <div className="mb-6">
          <img 
            src="/image.png" 
            alt="Nurse Assist International" 
            className="w-24 h-24 sm:w-32 sm:h-32 object-contain mx-auto opacity-0"
            style={{ animation: 'fadeInUp 0.5s ease-out 0.2s forwards' }}
          />
        </div>
        
        {/* One line text */}
        <div className="relative">
          <h1 className="text-white font-bold text-xl sm:text-2xl md:text-3xl tracking-wider opacity-0" style={{ animation: 'fadeInUp 0.5s ease-out 0.6s forwards' }}>
            Nurse Assist International
          </h1>
          
          {/* Glowing underline */}
          <div className="mt-4 mx-auto w-48 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-0" style={{ animation: 'fadeIn 0.5s ease-out 0.8s forwards' }}></div>
        </div>
      </div>
      
      {/* Custom CSS for animations */}
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
      `}</style>
    </div>
  )
}

export default Preloader