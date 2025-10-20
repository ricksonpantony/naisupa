import React from 'react'
import { motion } from 'framer-motion'

/**
 * BlogLayout Component
 * Provides consistent mobile-friendly layout for all blog posts
 * Ensures proper spacing, responsive grids, and touch-friendly interfaces
 */

export const BlogContainer = ({ children, className = '' }) => (
  <div className={`min-h-screen bg-gradient-to-br from-nai-soft via-white to-teal-50 ${className}`}>
    {children}
  </div>
)

export const BlogHeader = ({ children, className = '' }) => (
  <header className={`w-full pt-20 pb-6 sm:pb-8 bg-white border-b border-nai-teal/20 shadow-sm ${className}`}>
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
      {children}
    </div>
  </header>
)

export const BlogHeroSection = ({ children, className = '' }) => (
  <section className={`w-full bg-gradient-to-br from-nai-soft via-white to-blue-100 py-8 sm:py-12 lg:py-16 ${className}`}>
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
      {children}
    </div>
  </section>
)

export const BlogMainContent = ({ children, className = '' }) => (
  <main className={`w-full py-8 sm:py-12 lg:py-16 bg-nai-soft ${className}`}>
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto">
      {children}
    </div>
  </main>
)

export const BlogArticleWrapper = ({ children }) => (
  <div className="lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-8 xl:gap-12">
    {children}
  </div>
)

export const BlogArticleContent = ({ children }) => (
  <article className="lg:col-span-3 xl:col-span-4">
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-white rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-6 md:p-8 lg:p-12 border border-gray-100"
    >
      {children}
    </motion.div>
  </article>
)

export const BlogSidebar = ({ children }) => (
  <aside className="lg:col-span-1 xl:col-span-1 mt-8 lg:mt-0">
    <motion.div
      className="lg:sticky lg:top-28 space-y-4 sm:space-y-6"
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, delay: 0.4 }}
    >
      {children}
    </motion.div>
  </aside>
)

export const BlogTitle = ({ children, className = '' }) => (
  <h1 className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight max-w-5xl ${className}`}>
    {children}
  </h1>
)

export const BlogMetaInfo = ({ children, className = '' }) => (
  <div className={`flex flex-wrap items-center gap-3 sm:gap-4 md:gap-6 text-gray-600 mb-6 sm:mb-8 ${className}`}>
    {children}
  </div>
)

export const BlogMetaItem = ({ icon: Icon, children }) => (
  <div className="flex items-center gap-2 bg-nai-soft rounded-lg px-2 sm:px-3 py-1.5 sm:py-2 min-w-0">
    {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-nai-teal flex-shrink-0" />}
    <span className="text-xs sm:text-sm font-medium truncate">{children}</span>
  </div>
)

export const BlogBreadcrumb = ({ children }) => (
  <nav className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 mb-4 sm:mb-6 overflow-x-auto whitespace-nowrap pb-2">
    {children}
  </nav>
)

export const BlogCategoryBadge = ({ icon: Icon, children }) => (
  <div className="inline-flex items-center gap-2 bg-gradient-to-r from-nai-teal to-nai-highlight text-white rounded-full px-3 sm:px-4 py-1.5 sm:py-2 text-xs sm:text-sm font-bold mb-4 sm:mb-6 shadow-lg">
    {Icon && <Icon className="w-3 h-3 sm:w-4 sm:h-4 flex-shrink-0" />}
    <span className="truncate">{children}</span>
  </div>
)

export const BlogActionButtons = ({ children }) => (
  <div className="flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4">
    {children}
  </div>
)

export const BlogButton = ({ onClick, icon: Icon, children, variant = 'primary', className = '' }) => {
  const baseClasses = "flex items-center gap-2 transition-colors rounded-lg font-medium text-sm sm:text-base px-3 sm:px-4 py-2 sm:py-2.5 min-w-0"
  const variantClasses = variant === 'primary' 
    ? "text-gray-700 hover:text-white bg-nai-teal/20 hover:bg-nai-teal" 
    : "text-white bg-nai-teal hover:bg-nai-blue"
  
  return (
    <button 
      onClick={onClick}
      className={`${baseClasses} ${variantClasses} ${className}`}
    >
      {Icon && <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />}
      <span className="truncate">{children}</span>
    </button>
  )
}

export const BlogHeroGrid = ({ children }) => (
  <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
    {children}
  </div>
)

export const BlogHeroContent = ({ children }) => (
  <div className="order-2 lg:order-1">
    <div className="bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 md:p-8 border border-gray-100">
      {children}
    </div>
  </div>
)

export const BlogHeroImage = ({ src, alt, children }) => (
  <div className="order-1 lg:order-2">
    <div className="relative">
      <img
        src={src}
        alt={alt}
        className="w-full h-48 sm:h-64 md:h-80 lg:h-96 object-cover rounded-xl sm:rounded-2xl shadow-2xl"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-nai-teal/20 via-transparent to-transparent rounded-xl sm:rounded-2xl"></div>
      {children}
    </div>
  </div>
)

export const BlogTableOfContents = ({ title, children, icon: Icon }) => (
  <div className="bg-nai-soft border border-nai-teal/20 rounded-xl p-4 sm:p-6 mb-8 sm:mb-12">
    <h3 className="text-lg sm:text-xl font-bold text-nai-teal mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3">
      {Icon && <Icon className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />}
      <span className="break-words">{title}</span>
    </h3>
    <nav className="space-y-1.5 sm:space-y-2">
      {children}
    </nav>
  </div>
)

export const BlogTOCLink = ({ href, children }) => (
  <a 
    href={href} 
    className="block text-nai-teal hover:text-nai-blue transition-colors py-1 text-xs sm:text-sm font-medium break-words"
  >
    {children}
  </a>
)

export const BlogIntroSection = ({ title, children }) => (
  <div className="bg-gradient-to-r from-nai-soft to-blue-50 border-l-4 border-nai-teal rounded-r-xl p-4 sm:p-6 md:p-8 mb-8 sm:mb-12">
    {title && <h3 className="text-xl sm:text-2xl font-bold text-nai-teal mb-4 sm:mb-6 break-words">{title}</h3>}
    {children}
  </div>
)

export const BlogCalloutSection = ({ title, children, className = '' }) => (
  <div className={`bg-gradient-to-r from-nai-soft via-blue-50 to-nai-soft border-2 border-nai-teal rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 text-center mb-8 sm:mb-12 shadow-xl ${className}`}>
    {title && <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-nai-teal mb-4 sm:mb-6 md:mb-8 break-words">{title}</h3>}
    {children}
  </div>
)

export const BlogFeatureGrid = ({ children, columns = 4 }) => {
  const colClasses = {
    2: 'grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6',
    3: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6',
    4: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'
  }
  
  return (
    <div className={colClasses[columns] || colClasses[4]}>
      {children}
    </div>
  )
}

export const BlogFeatureCard = ({ icon, title, description }) => (
  <div className="bg-white rounded-xl p-4 sm:p-6 shadow-lg border border-nai-teal/20">
    {icon && <div className="text-2xl sm:text-3xl mb-3 sm:mb-4">{icon}</div>}
    {title && <h4 className="font-bold text-nai-teal mb-2 text-sm sm:text-base break-words">{title}</h4>}
    {description && <p className="text-xs sm:text-sm text-gray-600 break-words">{description}</p>}
  </div>
)

export const BlogCTASection = ({ children, className = '' }) => (
  <section className={`w-full bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal py-12 sm:py-16 lg:py-20 ${className}`}>
    <div className="px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-20 max-w-[2000px] mx-auto text-center">
      {children}
    </div>
  </section>
)

export const BlogShareSection = ({ onShare, copied }) => (
  <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-gray-200">
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4">
      <p className="text-gray-600 text-xs sm:text-sm md:text-base break-words">
        Found this helpful? Share it with your colleagues and friends.
      </p>
      <button 
        onClick={onShare}
        className="bg-nai-teal hover:bg-nai-blue text-white px-4 sm:px-6 py-2 rounded-lg transition-all font-medium text-sm sm:text-base shadow-lg hover:shadow-xl whitespace-nowrap"
      >
        {copied ? 'Copied!' : 'Share Article'}
      </button>
    </div>
  </div>
)

// Sidebar Components
export const BlogSidebarCard = ({ children, className = '' }) => (
  <div className={`bg-white border border-gray-200 rounded-xl p-4 sm:p-6 shadow-lg ${className}`}>
    {children}
  </div>
)

export const BlogSidebarTitle = ({ icon: Icon, children }) => (
  <h3 className="font-bold text-gray-900 mb-3 sm:mb-4 flex items-center gap-2 text-sm sm:text-base">
    {Icon && <Icon className="w-4 h-4 text-nai-teal flex-shrink-0" />}
    <span className="break-words">{children}</span>
  </h3>
)

export const BlogReadingProgress = ({ progress }) => (
  <BlogSidebarCard>
    <div className="flex items-center justify-between mb-3 sm:mb-4">
      <BlogSidebarTitle icon={({ className }) => <div className={className}>👁️</div>}>
        Reading Progress
      </BlogSidebarTitle>
      <span className="text-xs sm:text-sm text-nai-teal font-bold bg-nai-soft px-2 py-1 rounded-full">
        {Math.round(progress)}%
      </span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-2 sm:h-3 mb-2 sm:mb-3">
      <div 
        className="bg-gradient-to-r from-nai-teal to-nai-blue h-2 sm:h-3 rounded-full transition-all duration-300 shadow-sm"
        style={{ width: `${progress}%` }}
      />
    </div>
    <p className="text-xs text-gray-600 text-center">
      {progress < 25 ? "Starting your journey..." : 
       progress < 50 ? "Learning the process!" :
       progress < 75 ? "Almost ready!" : "Journey complete!"}
    </p>
  </BlogSidebarCard>
)

export const BlogAuthorCard = ({ author, role, bio, image, stats }) => (
  <BlogSidebarCard>
    <BlogSidebarTitle icon={({ className }) => <div className={className}>👤</div>}>
      About the Author
    </BlogSidebarTitle>
    <div className="text-center mb-3 sm:mb-4">
      {image && (
        <img 
          src={image}
          alt={author}
          className="w-12 h-12 sm:w-16 sm:h-16 rounded-full object-cover mx-auto mb-2 sm:mb-3 border-2 border-nai-teal"
        />
      )}
      <div className="font-bold text-gray-900 text-sm sm:text-base break-words">{author}</div>
      {role && <div className="text-xs sm:text-sm text-nai-teal font-medium break-words">{role}</div>}
    </div>
    {bio && <p className="text-gray-600 text-xs sm:text-sm leading-relaxed text-center mb-3 sm:mb-4 break-words">{bio}</p>}
    {stats && (
      <div className="pt-3 sm:pt-4 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 text-center">
          {stats.map((stat, index) => (
            <div key={index}>
              <div className="text-base sm:text-lg font-bold text-nai-teal">{stat.value}</div>
              <div className="text-xs text-gray-600 break-words">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    )}
  </BlogSidebarCard>
)

export default {
  BlogContainer,
  BlogHeader,
  BlogHeroSection,
  BlogMainContent,
  BlogArticleWrapper,
  BlogArticleContent,
  BlogSidebar,
  BlogTitle,
  BlogMetaInfo,
  BlogMetaItem,
  BlogBreadcrumb,
  BlogCategoryBadge,
  BlogActionButtons,
  BlogButton,
  BlogHeroGrid,
  BlogHeroContent,
  BlogHeroImage,
  BlogTableOfContents,
  BlogTOCLink,
  BlogIntroSection,
  BlogCalloutSection,
  BlogFeatureGrid,
  BlogFeatureCard,
  BlogCTASection,
  BlogShareSection,
  BlogSidebarCard,
  BlogSidebarTitle,
  BlogReadingProgress,
  BlogAuthorCard
}
