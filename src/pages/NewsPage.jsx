import React, { useState, useMemo, useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Calendar, Clock, User, ArrowRight, ArrowUpRight, Newspaper, ChevronLeft, ChevronRight, ChevronDown, ChevronUp, Search, Filter, Tag, Eye, Flame } from 'lucide-react'
import SeoHead from '../components/SeoHead'
import newsArticlesData from '../data/newsArticles.json'

const NewsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams()
  
  // State management - Read directly from URL params (no local state needed for these)
  const selectedCategory = searchParams.get('category') || "All"
  const currentPage = parseInt(searchParams.get('page')) || 1
  const searchQuery = searchParams.get('search') || ""
  const [showFilters, setShowFilters] = useState(false)
  const [showAllCategories, setShowAllCategories] = useState(false)
  
  // Scroll to top when URL parameters change (pagination, filters, etc.)
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [searchParams])
  
  const POSTS_PER_PAGE = 9

  // Import news articles from JSON data
  const newsArticles = newsArticlesData

  const sortedArticles = useMemo(() => {
    return [...newsArticles].sort((a, b) => new Date(b.date) - new Date(a.date))
  }, [newsArticles])

  const categories = useMemo(() => {
    return ["All", ...new Set(sortedArticles.map(article => article.category))]
  }, [sortedArticles])

  const newestArticle = sortedArticles[0]

  // Filter articles based on category and search
  const trimmedSearch = searchQuery.trim()

  const filteredArticles = useMemo(() => {
    let filtered = sortedArticles

    if (selectedCategory !== "All") {
      filtered = filtered.filter(article => article.category === selectedCategory)
    }

    if (trimmedSearch) {
      const query = trimmedSearch.toLowerCase()
      filtered = filtered.filter(article => 
        article.title.toLowerCase().includes(query) ||
        article.excerpt.toLowerCase().includes(query) ||
        article.keywords?.some(keyword => keyword.toLowerCase().includes(query))
      )
    }

    return filtered
  }, [selectedCategory, trimmedSearch, sortedArticles])

  const topThreeArticles = filteredArticles.slice(0, 3)
  const remainingArticles = filteredArticles.slice(3)
  const showLatestSection = currentPage === 1 && topThreeArticles.length > 0
  const latestArticles = showLatestSection ? topThreeArticles : []

  const totalPages = Math.ceil(remainingArticles.length / POSTS_PER_PAGE)
  const startIndex = (currentPage - 1) * POSTS_PER_PAGE
  const currentArticles = remainingArticles.slice(startIndex, startIndex + POSTS_PER_PAGE)

  const totalVisibleOnPage = (showLatestSection ? latestArticles.length : 0) + currentArticles.length
  const hasResults = filteredArticles.length > 0

  // Auto-adjust to max page if current page exceeds total pages
  useEffect(() => {
    const maxPage = totalPages > 0 ? totalPages : 1
    if (currentPage > maxPage) {
      const params = new URLSearchParams(searchParams)
      if (maxPage > 1) {
        params.set('page', maxPage.toString())
      } else {
        params.delete('page')
      }
      setSearchParams(params, { replace: true })
    }
  }, [currentPage, totalPages, searchParams, setSearchParams])

  const buildArticleLink = (slug, options = {}) => {
    const { includePage = true } = options
    const params = new URLSearchParams()

    if (includePage && currentPage > 1) {
      params.set('page', currentPage.toString())
    }

    if (selectedCategory !== "All") {
      params.set('category', selectedCategory)
    }

    if (trimmedSearch) {
      params.set('search', trimmedSearch)
    }

    const queryString = params.toString()
    return `/blogs/news/${slug}${queryString ? `?${queryString}` : ''}`
  }

  const updateURLParams = (updates) => {
    const params = new URLSearchParams(searchParams)
    
    Object.entries(updates).forEach(([key, value]) => {
      if (value && value !== 'All' && value !== '1') {
        params.set(key, value.toString())
      } else {
        params.delete(key)
      }
    })
    
    setSearchParams(params)
  }

  const handlePageChange = (page) => {
    const maxPage = totalPages > 0 ? totalPages : 1
    const nextPage = Math.min(Math.max(page, 1), maxPage)
    updateURLParams({ page: nextPage > 1 ? nextPage : null })
  }

  const handleCategoryChange = (category) => {
    updateURLParams({ category: category !== 'All' ? category : null, page: null })
  }

  const handleSearchChange = (search) => {
    updateURLParams({ search: search || null, page: null })
  }

  const resetFilters = () => {
    setSearchParams({})
    setShowFilters(false)
  }



  return (
    <>
      <SeoHead
        title="Latest News & Updates | Nurse Assist International"
        description="Stay updated with the latest nursing news, NCLEX updates, OSCE preparation tips, and healthcare industry insights from Nurse Assist International Australia."
        keywords="nursing news, NCLEX updates, OSCE news, Australian nursing, healthcare news, nursing education updates"
        canonicalUrl="https://nurseassistinternational.com/blogs/news"
      />

      <div className="min-h-screen bg-gradient-to-br from-nai-soft via-white to-nai-teal/5">
        {/* Hero Section - Full Width Desktop, Compact Mobile */}
        <section className="pt-20 pb-8 md:pb-12 lg:pb-16 bg-gradient-to-r from-nai-teal via-nai-highlight to-nai-teal relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10"></div>
          
          {/* Full width container for desktop */}
          <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8 xl:px-12">
            <motion.div
              className="text-center text-white w-full mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              {/* Compact Header for Mobile, Grand for Desktop */}
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 lg:gap-6 mb-4 md:mb-6">
                <div className="p-2 sm:p-3 lg:p-4 bg-white/20 rounded-full backdrop-blur-sm shadow-lg">
                  <Newspaper className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 lg:w-12 lg:h-12" />
                </div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text leading-tight">
                  Latest News & Insights
                </h1>
              </div>
              
              {/* Description */}
              <p className="text-sm sm:text-base md:text-xl lg:text-2xl text-white/90 max-w-5xl mx-auto leading-relaxed px-4 mb-8 lg:mb-10">
                Stay ahead with expert insights, industry updates, and professional guidance
              </p>

              {/* Featured Article Card - Full Width on Desktop */}
              {newestArticle && (
                <motion.div
                  className="mt-6 md:mt-8 lg:mt-12 w-full mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl md:rounded-2xl p-4 sm:p-5 md:p-6 lg:p-8 text-left shadow-2xl"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <div className="flex flex-col md:flex-row gap-4 sm:gap-5 md:gap-6 lg:gap-8 items-start">
                    <div className="flex-1">
                      {/* Badge */}
                      <span className="inline-flex items-center gap-1.5 sm:gap-2 text-xs sm:text-sm font-semibold uppercase tracking-wide text-white/80 bg-white/10 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full backdrop-blur-sm">
                        <Flame className="w-3 h-3 sm:w-4 sm:h-4" /> 
                        <span>Just in</span>
                      </span>
                      
                      {/* Title - Larger on desktop */}
                      <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-white mt-2 sm:mt-3 lg:mt-4 leading-tight sm:leading-snug line-clamp-2 md:line-clamp-none">
                        {newestArticle.title}
                      </h2>
                      
                      {/* Excerpt - More visible on desktop */}
                      <p className="hidden sm:block text-white/80 mt-2 md:mt-3 lg:mt-4 text-sm md:text-base lg:text-lg leading-relaxed line-clamp-2 lg:line-clamp-3">
                        {newestArticle.excerpt}
                      </p>
                    </div>
                    
                    {/* CTA Button - Side by side on desktop */}
                    <Link
                      to={buildArticleLink(newestArticle.slug, { includePage: false })}
                      className="inline-flex items-center justify-center gap-2 bg-white text-nai-teal px-4 sm:px-5 lg:px-6 py-2.5 sm:py-3 lg:py-4 rounded-lg sm:rounded-xl font-semibold shadow-lg hover:bg-gray-100 hover:shadow-xl transition-all text-sm sm:text-base lg:text-lg w-full sm:w-auto md:self-start md:whitespace-nowrap"
                    >
                      <span className="hidden sm:inline">Read the latest update</span>
                      <span className="sm:hidden">Read Article</span>
                      <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* Full Width Content Area */}
        <div className="w-full py-8 md:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 xl:px-12">
          <div className="w-full mx-auto">
            {/* Main Content Area */}
            <div className="w-full">
                {/* Search and Filter Section - Full Width Desktop */}
                <motion.div
                  className="mb-8 md:mb-12"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
              {/* Search Bar - Wider on Desktop */}
              <div className="relative w-full lg:max-w-none mb-6 md:mb-8">
                <Search className="absolute left-3 sm:left-4 lg:left-5 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6" />
                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-10 sm:pl-12 lg:pl-16 pr-3 sm:pr-4 lg:pr-6 py-3 sm:py-4 lg:py-5 border-2 border-gray-200 rounded-xl sm:rounded-2xl focus:ring-2 focus:ring-nai-teal focus:border-nai-teal text-sm sm:text-base lg:text-lg shadow-sm hover:shadow-md transition-shadow"
                />
              </div>

              {/* Category Filter - Better Desktop Layout with Collapsible */}
              <div className="flex flex-col gap-4 lg:gap-6 mb-6 md:mb-8">
                {/* Filter Header */}
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2 sm:gap-3 lg:gap-4">
                    <div className="p-2 lg:p-2.5 bg-nai-teal/10 rounded-lg">
                      <Filter className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 text-nai-teal" />
                    </div>
                    <span className="text-sm sm:text-base md:text-lg lg:text-xl font-bold text-gray-900">Filter by Category</span>
                  </div>
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="lg:hidden bg-nai-teal text-white px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm font-medium shadow-md hover:bg-nai-blue transition-colors"
                  >
                    {showFilters ? 'Hide' : 'Show'}
                  </button>
                </div>
                
                {/* Category Pills - Collapsible on Desktop (2 rows max initially) */}
                <div className={`${showFilters ? 'block' : 'hidden'} lg:block`}>
                  <div className="flex flex-wrap gap-2 lg:gap-3 relative">
                    {categories.slice(0, showAllCategories ? categories.length : 14).map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 lg:py-3 rounded-full text-xs sm:text-sm lg:text-base font-medium transition-all duration-300 ${
                          selectedCategory === category
                            ? 'bg-nai-teal text-white shadow-lg scale-105 ring-2 ring-nai-teal ring-offset-2'
                            : 'bg-white text-nai-dark hover:bg-nai-teal/10 border-2 border-nai-teal/20 hover:border-nai-teal hover:shadow-md'
                        }`}
                      >
                        <div className="flex items-center gap-1.5 sm:gap-2">
                          <Tag className="w-3 h-3 lg:w-4 lg:h-4" />
                          <span className="whitespace-nowrap">{category}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                  
                  {/* Show More/Less Button - Desktop Only */}
                  {categories.length > 14 && (
                    <div className="hidden lg:flex justify-center mt-4">
                      <button
                        onClick={() => setShowAllCategories(!showAllCategories)}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-nai-teal hover:text-nai-highlight px-6 py-2.5 bg-nai-teal/10 hover:bg-nai-teal/20 rounded-full transition-all border-2 border-nai-teal/20 hover:border-nai-teal/40"
                      >
                        {showAllCategories ? (
                          <>
                            <span>Show Less</span>
                            <ChevronUp className="w-4 h-4" />
                          </>
                        ) : (
                          <>
                            <span>Show More Categories ({categories.length - 14} more)</span>
                            <ChevronDown className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>
                  )}
                </div>
              </div>

            {/* Results Summary - Enhanced Desktop */}
            <div className="text-center text-gray-600 mb-8 lg:mb-10">
              {hasResults ? (
                <p className="text-base lg:text-lg">
                  Showing <span className="font-semibold text-nai-teal">{totalVisibleOnPage}</span> of{' '}
                  <span className="font-semibold text-nai-teal">{filteredArticles.length}</span> articles
                  {trimmedSearch && <span> for "{trimmedSearch}"</span>}
                  {selectedCategory !== "All" && <span> in {selectedCategory}</span>}
                </p>
              ) : (
                <p className="text-base lg:text-lg font-medium text-nai-dark">No articles match your filters yet.</p>
              )}
            </div>

            {(trimmedSearch || selectedCategory !== "All") && hasResults && (
              <div className="flex justify-center mb-12">
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center gap-2 text-sm lg:text-base font-semibold text-nai-teal hover:text-nai-highlight px-4 lg:px-6 py-2 lg:py-3 bg-nai-teal/10 rounded-full hover:bg-nai-teal/20 transition-all"
                >
                  Clear filters
                  <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4" />
                </button>
              </div>
            )}
          </motion.div>

          {/* Latest Highlights Section - Enhanced Desktop Layout */}
          {hasResults && showLatestSection && latestArticles.length > 0 && (
            <motion.div
              className="mb-12 lg:mb-20"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-6 mb-8 lg:mb-12">
                <div className="p-3 lg:p-4 bg-nai-highlight text-white rounded-2xl w-fit shadow-lg">
                  <Flame className="w-6 h-6 lg:w-8 lg:h-8" />
                </div>
                <div>
                  <h2 className="text-2xl lg:text-4xl font-bold text-nai-dark mb-2">Latest Highlights</h2>
                  <p className="text-sm lg:text-base text-gray-600 max-w-3xl">
                    Fresh off the press—catch the newest insights from Nurse Assist International before anyone else.
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {latestArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    className="group relative overflow-hidden rounded-3xl bg-white shadow-xl border border-nai-teal/10 hover:border-nai-highlight/50 transition-all duration-500 flex flex-col h-full"
                    whileHover={{ y: -8 }}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <div className="absolute top-4 left-4 z-10">
                      <span className="bg-white/90 text-nai-teal font-semibold text-sm px-3 py-1 rounded-full shadow">
                        #{String(index + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <div className="relative h-48 md:h-56 overflow-hidden flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-3 text-white/90 text-xs">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          {new Date(article.date).toLocaleDateString('en-AU', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          {article.readTime}
                        </div>
                      </div>
                    </div>

                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="bg-nai-teal/10 text-nai-teal px-3 py-1 rounded-full text-xs font-semibold">
                          {article.category}
                        </span>
                        {article.readingCategory && (
                          <span className="bg-nai-highlight/10 text-nai-highlight px-3 py-1 rounded-full text-xs font-semibold">
                            {article.readingCategory}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold text-nai-dark mb-2 md:mb-3 leading-tight group-hover:text-nai-teal transition-colors line-clamp-2">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 md:mb-6 leading-relaxed line-clamp-2 md:line-clamp-3 flex-grow">
                        {article.excerpt}
                      </p>

                      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4 pt-3 md:pt-4 border-t border-gray-100 mt-auto">
                        <div className="flex items-center gap-3 md:gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1 md:gap-2">
                            <User className="w-3 h-3 md:w-4 md:h-4" />
                            <span className="truncate max-w-[100px] md:max-w-none">{article.author}</span>
                          </div>
                          {article.views && (
                            <div className="flex items-center gap-1 md:gap-2">
                              <Eye className="w-3 h-3 md:w-4 md:h-4" />
                              <span>{article.views.toLocaleString()}</span>
                            </div>
                          )}
                        </div>
                        <Link
                          to={buildArticleLink(article.slug)}
                          className="inline-flex items-center gap-1.5 md:gap-2 bg-nai-dark text-white px-3 md:px-4 py-2 md:py-2.5 rounded-lg md:rounded-xl text-xs md:text-sm font-semibold shadow-lg hover:bg-nai-teal transition-all whitespace-nowrap"
                        >
                          <span>Read article</span>
                          <ArrowUpRight className="w-3 h-3 md:w-4 md:h-4 flex-shrink-0" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Regular Articles Grid - Enhanced Desktop Layout */}
          {hasResults && currentArticles.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 lg:gap-6 mb-8 lg:mb-12">
                <div className="flex items-center gap-3 lg:gap-4">
                  <div className="p-2 lg:p-3 bg-nai-teal rounded-lg lg:rounded-xl shadow-lg">
                    <Newspaper className="w-6 h-6 lg:w-7 lg:h-7 text-white" />
                  </div>
                  <div>
                    <h2 className="text-2xl lg:text-4xl font-bold text-nai-dark mb-1 lg:mb-2">More News & Insights</h2>
                    <p className="text-sm lg:text-base text-gray-600 max-w-3xl">Explore the rest of our library—sorted newest to oldest for quick catching up.</p>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
                {currentArticles.map((article, index) => (
                  <motion.article
                    key={article.id}
                    className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group border border-gray-100 hover:border-nai-teal/20 flex flex-col h-full"
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                  >
                    <div className="relative h-44 md:h-48 overflow-hidden flex-shrink-0">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70" />
                      <div className="absolute top-4 left-4">
                        <span className="bg-white/95 text-nai-teal px-3 py-1 rounded-full text-xs font-semibold shadow-sm">
                          {article.category}
                        </span>
                      </div>
                      {article.readingCategory && (
                        <div className="absolute top-4 right-4">
                          <span className="bg-nai-teal/10 text-nai-teal px-2 py-1 rounded text-xs font-medium">
                            {article.readingCategory}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="p-4 md:p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 md:gap-3 text-xs text-gray-500 mb-2 md:mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          {new Date(article.date).toLocaleDateString('en-AU', {
                            month: 'short',
                            day: 'numeric',
                            year: 'numeric'
                          })}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {article.readTime}
                        </div>
                      </div>

                      <h3 className="text-base md:text-lg font-bold text-nai-dark mb-2 md:mb-3 line-clamp-2 group-hover:text-nai-teal transition-colors leading-tight">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-3 md:mb-4 line-clamp-2 md:line-clamp-3 leading-relaxed">
                        {article.excerpt}
                      </p>

                      {article.keywords && article.keywords.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 mb-3 md:mb-4">
                          {article.keywords.slice(0, 3).map((keyword, i) => (
                            <span key={i} className="bg-gray-100 text-gray-600 px-2 py-1 rounded-full text-xs">
                              {keyword}
                            </span>
                          ))}
                        </div>
                      )}

                      <div className="flex items-center justify-between pt-3 md:pt-4 border-t border-gray-50 mt-auto">
                        <div className="flex items-center gap-4 text-xs text-gray-500">
                          <div className="flex items-center gap-1">
                            <User className="w-3 h-3" />
                            {article.author}
                          </div>
                          {article.views && (
                            <div className="flex items-center gap-1">
                              <Eye className="w-3 h-3" />
                              {article.views.toLocaleString()}
                            </div>
                          )}
                        </div>
                        <Link
                          to={buildArticleLink(article.slug)}
                          className="text-nai-teal hover:text-nai-highlight font-semibold text-xs md:text-sm flex items-center gap-1 group-hover:gap-2 transition-all whitespace-nowrap"
                        >
                          <span>Read more</span>
                          <ArrowRight className="w-3 h-3 flex-shrink-0" />
                        </Link>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </motion.div>
          )}

          {/* Empty state */}
          {!hasResults && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-white rounded-3xl border border-nai-teal/10 shadow-xl p-12 text-center">
                <h2 className="text-2xl font-semibold text-nai-dark mb-3">We couldn't find any articles.</h2>
                <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                  Try adjusting your search or explore all categories to discover our latest nursing insights and exam tips.
                </p>
                <button
                  onClick={resetFilters}
                  className="inline-flex items-center justify-center gap-2 bg-nai-teal text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:bg-nai-highlight transition-all"
                >
                  Reset filters
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* Pagination - Enhanced Desktop */}
          {totalPages > 1 && (
            <motion.div
              className="mt-12 lg:mt-20"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              <div className="flex flex-col items-center gap-4 lg:gap-6 bg-white rounded-2xl p-6 lg:p-8 shadow-lg border border-gray-100">
                <div className="text-sm lg:text-base text-gray-600 font-medium">
                  Page <span className="text-nai-teal font-bold">{currentPage}</span> of <span className="text-nai-teal font-bold">{totalPages}</span>
                  <span className="ml-2 text-gray-500">({filteredArticles.length} total articles)</span>
                </div>
                
                <div className="flex items-center gap-2 lg:gap-3">
                  {/* Previous Button */}
                  <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={`flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-medium text-sm lg:text-base transition-all ${
                      currentPage === 1
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-nai-teal border-2 border-nai-teal hover:bg-nai-teal hover:text-white shadow-md hover:shadow-lg'
                    }`}
                  >
                    <ChevronLeft className="w-4 h-4 lg:w-5 lg:h-5" />
                    <span className="hidden sm:inline">Previous</span>
                    <span className="sm:hidden">Prev</span>
                  </button>

                  {/* Page Numbers - Enhanced Desktop */}
                  <div className="flex gap-1 lg:gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => {
                      if (
                        page === 1 ||
                        page === totalPages ||
                        (page >= currentPage - 2 && page <= currentPage + 2)
                      ) {
                        return (
                          <button
                            key={page}
                            onClick={() => handlePageChange(page)}
                            className={`w-10 h-10 lg:w-12 lg:h-12 rounded-lg lg:rounded-xl font-medium text-sm lg:text-base transition-all ${
                              currentPage === page
                                ? 'bg-nai-teal text-white shadow-lg ring-2 ring-nai-teal ring-offset-2 scale-110'
                                : 'bg-white text-nai-teal border-2 border-gray-200 hover:border-nai-teal hover:bg-nai-teal/10 hover:shadow-md'
                            }`}
                          >
                            {page}
                          </button>
                        )
                      } else if (
                        page === currentPage - 3 ||
                        page === currentPage + 3
                      ) {
                        return (
                          <span key={page} className="w-10 h-10 lg:w-12 lg:h-12 flex items-center justify-center text-gray-400">
                            ...
                          </span>
                        )
                      }
                      return null
                    })}
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className={`flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-lg lg:rounded-xl font-medium text-sm lg:text-base transition-all ${
                      currentPage === totalPages
                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                        : 'bg-white text-nai-teal border-2 border-nai-teal hover:bg-nai-teal hover:text-white shadow-md hover:shadow-lg'
                    }`}
                  >
                    <span className="hidden sm:inline">Next</span>
                    <ChevronRight className="w-4 h-4 lg:w-5 lg:h-5" />
                  </button>
                </div>

                {/* Quick Navigation - Enhanced Desktop */}
                <div className="flex items-center gap-3 lg:gap-4 text-xs lg:text-sm">
                  <span className="text-gray-600 font-medium">Quick jump:</span>
                  <button
                    onClick={() => handlePageChange(1)}
                    className="text-nai-teal hover:text-nai-highlight font-semibold hover:underline transition-colors"
                  >
                    First Page
                  </button>
                  <span className="text-gray-300">|</span>
                  <button
                    onClick={() => handlePageChange(totalPages)}
                    className="text-nai-teal hover:text-nai-highlight font-semibold hover:underline transition-colors"
                  >
                    Last Page
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* Newsletter Subscription - Enhanced Desktop */}
          <motion.div
            className="mt-12 lg:mt-24 bg-gradient-to-r from-nai-teal via-nai-highlight to-nai-teal rounded-2xl lg:rounded-3xl p-8 lg:p-16 text-center shadow-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="max-w-3xl mx-auto">
              <h3 className="text-2xl lg:text-4xl font-bold text-white mb-3 lg:mb-4">
                Stay Updated with NAI
              </h3>
              <p className="text-white/90 text-base lg:text-xl mb-6 lg:mb-10 leading-relaxed">
                Get the latest nursing insights, exam tips, and career opportunities delivered directly to your inbox
              </p>
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4 max-w-2xl mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email address"
                  className="flex-1 px-5 lg:px-7 py-3 lg:py-4 rounded-xl text-sm lg:text-base border-0 focus:ring-4 focus:ring-white/25 shadow-lg"
                />
                <button className="bg-white text-nai-teal px-6 lg:px-10 py-3 lg:py-4 rounded-xl text-sm lg:text-base font-bold hover:bg-gray-50 hover:shadow-xl transition-all shadow-lg">
                  Subscribe
                </button>
              </div>
              <p className="text-white/80 text-xs lg:text-sm mt-4 lg:mt-6 font-medium">
                Join 5,000+ nursing professionals. Unsubscribe anytime.
              </p>
            </div>
          </motion.div>
            </div>
            {/* End Main Content */}
          </div>
        </div>
      </div>
    </>
  )
}

export default NewsPage