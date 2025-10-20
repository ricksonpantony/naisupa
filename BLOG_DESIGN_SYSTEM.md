# Blog Design System - BlogPost31 Style Guide

## Overview
This document defines the complete design system used in BlogPost31.jsx, serving as a reference for maintaining consistency across all blog posts (15-30).

## Color Theme

### Primary Colors
- **nai-teal**: Primary brand color (teal)
- **nai-blue**: Secondary brand color (blue)
- **nai-highlight**: Highlight color
- **nai-deep-teal**: Deeper teal shade
- **nai-soft**: Soft background tint

### Accent Colors
- **cyan-50 to cyan-500**: Cyan gradients for CTA sections
- **blue-50 to blue-100**: Light blue backgrounds
- **teal-50**: Light teal backgrounds
- **green-600**: Success indicators (CheckCircle)

### Gradients
- `bg-gradient-to-r from-nai-teal to-nai-highlight`: Progress bar
- `bg-gradient-to-br from-nai-soft via-white to-teal-50`: Page background
- `bg-gradient-to-br from-white via-nai-soft/30 to-blue-50`: Header
- `bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal`: CTA section
- `bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50`: Sidebar CTA
- `bg-gradient-to-br from-nai-highlight to-nai-deep-teal`: Icon backgrounds

## Layout Structure

### 1. Reading Progress Bar (Fixed Top)
```jsx
<div className="fixed top-0 left-0 w-full h-1 bg-gray-100 z-50">
  <div className="h-full bg-gradient-to-r from-nai-teal to-nai-highlight transition-all duration-300 shadow-sm"
       style={{ width: `${readingProgress}%` }} />
</div>
```

### 2. Header Section
- **Background**: `bg-gradient-to-br from-white via-nai-soft/30 to-blue-50`
- **Padding**: `pt-20 pb-8 sm:pb-10 md:pb-12`
- **Border**: `border-b border-nai-teal/20 shadow-sm`
- **Max Width**: `max-w-7xl mx-auto`
- **Responsive Padding**: `px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16 2xl:px-24`

#### Header Components:
- **Breadcrumb Navigation**: Small text with arrow separators
- **Category Badge**: `bg-nai-teal text-white rounded-full px-4 sm:px-5 py-2 sm:py-2.5`
- **Title**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black`
- **Meta Pills**: Author, Date, Views with icons
- **Action Buttons**: Back to News & Share buttons

### 3. Hero Section
- **Background**: `bg-gradient-to-br from-nai-soft via-white to-blue-100`
- **Layout**: `grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12`
- **Left Side**: Content card with white background
- **Right Side**: Featured image with stats card below

### 4. Main Content Section
- **Background**: `bg-gradient-to-br from-white via-nai-soft/40 to-teal-50`
- **Layout**: `lg:grid lg:grid-cols-4 xl:grid-cols-5 lg:gap-10 xl:gap-14`
- **Article**: Takes 3/4 columns (xl: 4/5)
- **Sidebar**: Takes 1/4 column (xl: 1/5), sticky positioned

### 5. CTA Section (Bottom)
- **Background**: `bg-gradient-to-r from-nai-teal via-nai-blue to-nai-teal`
- **Padding**: `py-12 sm:py-16 lg:py-20`
- **Text Color**: White
- **Contains**: Title, description, action buttons, success stats grid

## Sidebar Components

### 1. Reading Progress Widget
```jsx
<div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-md">
  - Eye icon with "Reading Progress" title
  - Percentage badge (rounded-full bg-nai-soft)
  - Progress bar (from-nai-teal to-nai-blue gradient)
  - Dynamic status text based on progress percentage
</div>
```

### 2. About the Author Widget
```jsx
<div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-md">
  - User icon with title
  - Author image (circular, border-2 border-nai-teal)
  - Author name and role (text-nai-teal)
  - Bio text
  - Stats grid: Success Stories & Years Experience
</div>
```

### 3. Newsletter/CTA Widget (CYAN THEMED)
```jsx
<div className="bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 rounded-xl p-6 shadow-md border border-cyan-200/60">
  - Featured image preview (h-40)
  - BookOpen icon in cyan-500 circular background
  - Title "Get Free Guidance" in cyan-900
  - WhatsApp CTA button (bg-cyan-500, hover:bg-cyan-600)
  - Footer text in cyan-800
</div>
```

### 4. Quick Links Widget
```jsx
<div className="bg-white/80 backdrop-blur-sm border border-gray-200 rounded-xl p-6 shadow-md">
  - ArrowRight icon with "Related Resources" title
  - List of links with → arrows
  - text-nai-teal hover:text-nai-blue
</div>
```

## Reusable Components

### MetaPill
```jsx
const MetaPill = ({ icon, label }) => (
  <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-xl px-4 py-2.5 shadow-sm border border-nai-teal/20">
    {icon}
    <span className="text-sm sm:text-base font-semibold text-gray-700 truncate">{label}</span>
  </div>
)
```

### Card
```jsx
const Card = ({ className = "", children }) => (
  <div className={`rounded-2xl bg-white/90 backdrop-blur-sm shadow-[0_8px_30px_rgba(0,0,0,0.06)] border border-slate-200/60 ${className}`}>
    {children}
  </div>
)
```

### Section
```jsx
const Section = ({ title, children }) => (
  <section className="scroll-mt-28">
    {title && <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4">{title}</h2>}
    {children}
  </section>
)
```

### QuestionCard
```jsx
const QuestionCard = ({ question, answer }) => (
  <Card className="p-6 border-l-4 border-nai-teal">
    <h4 className="text-lg font-bold text-nai-teal mb-3">{question}</h4>
    <p className="text-gray-700 leading-relaxed">{answer}</p>
  </Card>
)
```

### Stat
```jsx
const Stat = ({ value, label }) => (
  <div>
    <div className="text-lg sm:text-xl md:text-2xl font-bold text-nai-teal mb-1">{value}</div>
    <div className="text-xs sm:text-sm text-gray-600">{label}</div>
  </div>
)
```

### SuccessStat
```jsx
const SuccessStat = ({ value, label }) => (
  <div className="bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md rounded-xl p-4 md:p-5 border border-white/30 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
    <div className="text-xl sm:text-2xl md:text-3xl font-black mb-1 text-white drop-shadow-lg">{value}</div>
    <div className="text-white/95 text-xs sm:text-sm md:text-base font-semibold">{label}</div>
  </div>
)
```

## Required Imports
```jsx
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Calendar, User, ArrowLeft, Share2, BookOpen, Tag, Eye, 
  CheckCircle, ArrowRight, Briefcase, FileText, Users, Target 
} from 'lucide-react'
import SeoHead from '../../../components/SeoHead'
import { useBlogNavigation } from '../../../hooks/useBlogNavigation'
```

## Typography

### Headings
- **H1 (Page Title)**: `text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight`
- **H2 (Section Title)**: `text-2xl sm:text-3xl font-bold text-gray-900 mb-4`
- **H3 (Subsection)**: `text-xl sm:text-2xl font-bold text-nai-teal mb-4`
- **H4 (Card Title)**: `text-lg font-bold text-nai-teal mb-3`

### Body Text
- **Large Body**: `text-lg text-gray-700 leading-relaxed`
- **Regular Body**: `text-base text-gray-700 leading-relaxed`
- **Small Text**: `text-sm text-gray-700`
- **Extra Small**: `text-xs text-gray-600`

## Spacing & Borders

### Border Radius
- **Small**: `rounded-lg` (buttons, small cards)
- **Medium**: `rounded-xl` (widgets, badges)
- **Large**: `rounded-2xl` (main cards, images)
- **Full**: `rounded-full` (badges, progress bars, avatars)

### Shadows
- **Small**: `shadow-sm`
- **Medium**: `shadow-md`, `shadow-lg`
- **Large**: `shadow-xl`, `shadow-2xl`
- **Custom**: `shadow-[0_8px_30px_rgba(0,0,0,0.06)]`

### Padding (Section Level)
- **Small**: `py-8 sm:py-12 lg:py-16`
- **Medium**: `py-10 sm:py-14 lg:py-20`
- **Large**: `py-12 sm:py-16 lg:py-20`

## Interactive Elements

### Buttons
```jsx
// Primary Button
className="bg-nai-teal hover:bg-nai-blue text-white px-8 py-3 rounded-lg font-bold transition-colors shadow text-center min-h-[44px]"

// Secondary Button
className="border-2 border-nai-teal text-nai-teal hover:bg-nai-teal hover:text-white px-8 py-3 rounded-lg font-bold transition-colors text-center min-h-[44px]"

// Gradient Button
className="bg-gradient-to-r from-nai-teal to-nai-highlight hover:from-nai-blue hover:to-nai-teal text-white px-5 sm:px-6 py-3 rounded-xl font-bold shadow-lg min-h-[44px]"

// Cyan CTA Button (Sidebar)
className="bg-cyan-500 text-white px-4 py-3 rounded-lg font-bold hover:bg-cyan-600 transition-all shadow min-h-[44px]"
```

### Links
```jsx
// Navigation Link
className="text-nai-teal hover:text-nai-blue font-medium transition-colors"

// Sidebar Link
className="text-sm text-nai-teal hover:text-nai-blue font-medium transition-colors"
```

## Animations (Framer Motion)

### Standard Fade In
```jsx
initial={{ opacity: 0, y: 20 }}
animate={{ opacity: 1, y: 0 }}
transition={{ duration: 0.6 }}
```

### Sidebar Animation
```jsx
initial={{ opacity: 0, x: 20 }}
animate={{ opacity: 1, x: 0 }}
transition={{ duration: 0.6, delay: 0.4 }}
```

## Icons
- Use lucide-react icons
- Standard size: `w-4 h-4` or `w-5 h-5`
- Color: Usually `text-nai-teal` or `text-white`
- Common icons: Calendar, User, Eye, Tag, CheckCircle, ArrowRight, BookOpen

## Post Data Structure
```javascript
const post = {
  title: '',
  date: 'YYYY-MM-DD',
  author: 'NAI Career Team', // or appropriate author
  category: '',
  readTime: 'X min read',
  excerpt: '',
  featuredImage: '/blog-images/bXX.webp',
  tags: [],
  views: XXXX,
  likes: 0,
  comments: 0
}
```

## SEO
- Always include SeoHead component
- Canonical URL format: `https://nurseassistinternational.com/blogs/news/[slug]`
- Use post tags for keywords

## Best Practices
1. All sections use responsive padding with breakpoints (sm, md, lg, xl, 2xl)
2. Images have rounded corners and shadows
3. Cards use backdrop-blur and semi-transparent backgrounds
4. Consistent use of nai-teal as primary brand color
5. Cyan theme specifically for sidebar CTA (not used elsewhere)
6. White text on colored backgrounds, gray text on white backgrounds
7. Always include reading progress functionality
8. Maintain consistent spacing between sections
9. Use motion.div for animations on major sections
10. All interactive elements have min-h-[44px] for accessibility

---

**Last Updated**: October 2025
**Reference File**: BlogPost31.jsx
**Applies To**: Blogs 15-30


