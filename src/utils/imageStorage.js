/**
 * Supabase Storage Public URL Helpers
 * 
 * NOTE: This file only provides URL construction helpers for PUBLIC Supabase storage.
 * No Supabase client or authentication is needed since all buckets are public.
 * 
 * For admin operations (upload/delete), use the lazy-loaded admin components:
 * - ImageUploader.jsx
 * - StorageSetup.jsx
 * - SupabaseTest.jsx
 */

// Supabase Storage S3-compatible public base URL (no auth needed for public buckets)
const SUPABASE_STORAGE_URL = 'https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public'

// Storage bucket names
export const STORAGE_BUCKETS = {
  BLOG_IMAGES: 'blog-images',
  GALLERY: 'gallery', 
  GENERAL_IMAGES: 'images',
  TEAM: 'Team'
}

/**
 * Get public URL for an image from Supabase Storage
 * @param {string} bucket - The storage bucket name
 * @param {string} path - The file path within the bucket
 * @returns {string} - The public URL for the image
 */
export function getImageUrl(bucket, path) {
  // Remove leading slash if present
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Construct the S3-compatible public URL
  return `${SUPABASE_STORAGE_URL}/${bucket}/${cleanPath}`
}

/**
 * Helper functions for each image type
 */
export const getBlogImageUrl = (filename) => {
  // Handle filenames with or without path
  const cleanName = filename.replace(/^\/blog-images\//, '').replace(/^blog-images\//, '')
  return getImageUrl(STORAGE_BUCKETS.BLOG_IMAGES, cleanName)
}

export const getGalleryImageUrl = (path) => {
  // Handle paths like "/Gallery/NAI GALLERY/..." or "NAI GALLERY/..."
  const cleanPath = path.replace(/^\/Gallery\//, '').replace(/^Gallery\//, '')
  return getImageUrl(STORAGE_BUCKETS.GALLERY, cleanPath)
}

export const getGeneralImageUrl = (filename) => {
  // Handle filenames with or without path
  const cleanName = filename.replace(/^\/Images\//, '').replace(/^Images\//, '')
  return getImageUrl(STORAGE_BUCKETS.GENERAL_IMAGES, cleanName)
}

export const getTeamImageUrl = (filename) => {
  // Handle filenames with or without path
  const cleanName = filename.replace(/^\/Team\//, '').replace(/^Team\//, '')
  return getImageUrl(STORAGE_BUCKETS.TEAM, cleanName)
}