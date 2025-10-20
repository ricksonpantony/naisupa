// Blog Management Utility
// This file helps manage blog posts and their content

export const createBlogPost = (blogData) => {
  return {
    // Metadata
    id: blogData.id,
    slug: blogData.slug,
    title: blogData.title,
    excerpt: blogData.excerpt,
    date: blogData.date,
    publishedDate: blogData.publishedDate,
    author: blogData.author || 'NAI Editorial Team',
    category: blogData.category,
    readTime: blogData.readTime,
    featured: blogData.featured || false,
    
    // Images and Media
    image: blogData.image,
    
    // SEO
    seoTitle: blogData.seoTitle || blogData.title,
    seoDescription: blogData.seoDescription || blogData.excerpt,
    seoKeywords: blogData.seoKeywords,
    
    // Content Organization
    tags: blogData.tags || [],
    keywords: blogData.keywords || [],
    readingCategory: blogData.readingCategory || 'Article',
    
    // Engagement
    views: blogData.views || 0,
    likes: blogData.likes || 0,
    comments: blogData.comments || 0,
    
    // Navigation
    url: `blogs/news/${blogData.slug}`,
    relatedPosts: blogData.relatedPosts || []
  }
}

export const blogCategories = [
  'Registration Guide',
  'NCLEX Preparation', 
  'OSCE Training',
  'Career Opportunities',
  'Study Tips',
  'Success Stories',
  'Industry News',
  'Exam Updates',
  'Australia Guide'
]

export const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-AU', {
    year: 'numeric',
    month: 'long', 
    day: 'numeric'
  })
}

export const formatShortDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-AU', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  })
}

export const generateSlug = (title) => {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

// Template for new blog posts
export const blogPostTemplate = {
  id: null,
  slug: '',
  title: '',
  excerpt: '',
  date: new Date().toISOString().split('T')[0],
  publishedDate: '',
  author: 'NAI Editorial Team',
  category: '',
  readTime: '',
  featured: false,
  image: '/Images/nursing-education.webp',
  tags: [],
  keywords: [],
  readingCategory: 'Article',
  views: 0,
  likes: 0,
  comments: 0,
  seoTitle: '',
  seoDescription: '',
  seoKeywords: '',
  relatedPosts: []
}