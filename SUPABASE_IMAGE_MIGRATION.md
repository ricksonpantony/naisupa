# Supabase Image Migration Guide

## ✅ Completed Steps

### 1. Updated imageStorage.js
- ✅ Changed to use S3-compatible URL format
- ✅ URL: `https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public/{bucket}/{path}`
- ✅ Added helper functions: `getBlogImageUrl()`, `getGalleryImageUrl()`, `getGeneralImageUrl()`, `getTeamImageUrl()`

### 2. Updated Data Files
- ✅ `src/data/heroImages.js` - Now using `getGalleryImageUrl()`
- ✅ `src/data/newsArticles.json` - All image paths converted to Supabase URLs

### 3. Supabase Storage Structure
```
Buckets:
├── blog-images/     (Public)
│   ├── b1.webp
│   ├── b2.webp
│   └── ... (all blog images)
├── gallery/         (Public)
│   └── NAI GALLERY/
│       ├── Students/
│       │   ├── Aayushma Koirala.webp
│       │   └── ... (all student photos)
│       └── nurseassistinternational*.jpg
├── images/          (Public)
│   ├── ALLTECHZONE.webp
│   ├── australia-nursing.webp
│   ├── medication-safety.webp
│   └── ... (all general images)
└── Team/            (Public)
    ├── CEO Mr. Thomas Mathew.avif
    └── ... (all team photos)
```

## 📋 Files That Need Manual Updates

### Components with Hardcoded Image Paths

1. **src/components/StudentGallery.jsx**
   - Lines with: `/Gallery/NAI%20GALLERY/Students/*.webp`
   - Replace with: `getGalleryImageUrl("NAI GALLERY/Students/*.webp")`

2. **src/components/Hero.jsx**
   - Lines with: `/Gallery/NAI GALLERY/Students/*.webp`
   - Replace with: `getGalleryImageUrl("NAI GALLERY/Students/*.webp")`

3. **src/pages/GalleryPage.jsx**
   - Lines with: `/Gallery/NAI GALLERY/*.jpg`
   - Replace with: `getGalleryImageUrl("NAI GALLERY/*.jpg")`

4. **src/pages/TestimonialsPage.jsx**
   - Lines with: `/Gallery/NAI GALLERY/Students/*.webp`
   - Replace with: `getGalleryImageUrl("NAI GALLERY/Students/*.webp")`

5. **All Blog Post Files** (`src/pages/blogs/news/BlogPost*.jsx`)
   - featuredImage: `/blog-images/*.webp` → `getBlogImageUrl("*.webp")`
   - author images: `/Images/ALLTECHZONE.webp` → `getGeneralImageUrl("ALLTECHZONE.webp")`

6. **src/pages/BlogPost.jsx**
   - featuredImage: `/Images/australia-nursing.webp` → `getGeneralImageUrl("australia-nursing.webp")`
   - author avatar: `/Images/ALLTECHZONE.webp` → `getGeneralImageUrl("ALLTECHZONE.webp")`

7. **OG Images** (Various pages)
   - `/Images/*.webp` → `getGeneralImageUrl("*.webp")`

## 🎯 Next Steps

1. Import `getImageUrl` helpers at the top of each component:
   ```javascript
   import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../utils/imageStorage'
   ```

2. Replace all hardcoded image paths with the appropriate helper function

3. Ensure all images are uploaded to Supabase storage buckets

4. Test all pages to verify images load correctly

## 🔗 Supabase Image URL Pattern

```
https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public/{bucket}/{path}
```

Examples:
- Blog: `https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public/blog-images/b1.webp`
- Gallery: `https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public/gallery/NAI GALLERY/Students/Aayushma Koirala.webp`
- General: `https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public/images/ALLTECHZONE.webp`
- Team: `https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public/Team/CEO Mr. Thomas Mathew.avif`
