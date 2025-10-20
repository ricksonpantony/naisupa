/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '475px',
        '3xl': '1600px',
        '4xl': '1920px',
      },
      colors: {
        'nai-teal': '#52d1db',        // Slightly brighter teal (was #45c0ca)
        'nai-deep-teal': '#2a8a96',   // Slightly brighter deep teal (was #247a84)
        'nai-soft': '#f7f9fa',
        'nai-dark': '#1f1f1f',
        'nai-highlight': '#00bcc9',   // Slightly brighter highlight (was #00a6b5)
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'pulse-soft': 'pulse 2s ease-in-out infinite',
        'text-flow': 'textFlow 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'word-reveal': 'wordReveal 0.6s ease-out',
        'gradient-shift': 'gradientShift 4s ease-in-out infinite',
        'text-glow': 'textGlow 2s ease-in-out infinite alternate',
      },
      backgroundSize: {
        '300%': '300%',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        floatSlow: {
          '0%, 100%': { transform: 'translateY(0px) translateX(0px)' },
          '25%': { transform: 'translateY(-15px) translateX(10px)' },
          '50%': { transform: 'translateY(-25px) translateX(0px)' },
          '75%': { transform: 'translateY(-15px) translateX(-10px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
        pulse: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.1)' },
        },
        textFlow: {
          '0%': { 
            opacity: '0', 
            transform: 'translateY(30px) rotateX(-90deg)',
            filter: 'blur(10px)'
          },
          '50%': { 
            opacity: '0.7', 
            transform: 'translateY(15px) rotateX(-45deg)',
            filter: 'blur(5px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateY(0px) rotateX(0deg)',
            filter: 'blur(0px)'
          },
        },
        wordReveal: {
          '0%': { 
            opacity: '0', 
            transform: 'translateX(-20px) scale(0.8)',
            filter: 'blur(4px)'
          },
          '100%': { 
            opacity: '1', 
            transform: 'translateX(0px) scale(1)',
            filter: 'blur(0px)'
          },
        },
        gradientShift: {
          '0%, 100%': { 
            backgroundPosition: '0% 50%'
          },
          '25%': { 
            backgroundPosition: '100% 50%'
          },
          '50%': { 
            backgroundPosition: '200% 50%'
          },
          '75%': { 
            backgroundPosition: '100% 50%'
          },
        },
        textGlow: {
          '0%': { 
            textShadow: '0 0 5px rgba(69, 192, 202, 0.3)'
          },
          '100%': { 
            textShadow: '0 0 15px rgba(69, 192, 202, 0.6), 0 0 25px rgba(69, 192, 202, 0.3)'
          },
        },
      },
    },
  },
  plugins: [],
}