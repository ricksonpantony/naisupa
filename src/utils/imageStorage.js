import { supabase } from '../lib/supabase'

// Supabase Storage S3-compatible base URL
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

/**
 * Upload a file to Supabase Storage
 * @param {string} bucket - The storage bucket name
 * @param {string} path - The file path within the bucket
 * @param {File|Buffer} file - The file to upload
 * @returns {Promise} - Upload result
 */
export async function uploadImage(bucket, path, file) {
  const { data, error } = await supabase.storage
    .from(bucket)
    .upload(path, file, {
      cacheControl: '3600',
      upsert: true
    })
  
  if (error) {
    console.error('Error uploading image:', error)
    throw error
  }
  
  return data
}

/**
 * Create storage buckets if they don't exist
 */
export async function createStorageBuckets() {
  const buckets = Object.values(STORAGE_BUCKETS)
  
  for (const bucketName of buckets) {
    try {
      const { data, error } = await supabase.storage.createBucket(bucketName, {
        public: true,
        allowedMimeTypes: ['image/*'],
        fileSizeLimit: 10485760, // 10MB
      })
      
      if (error && error.message !== 'Bucket already exists') {
        console.error(`Error creating bucket ${bucketName}:`, error)
      } else {
        console.log(`Bucket ${bucketName} ready`)
      }
    } catch (err) {
      console.error(`Error with bucket ${bucketName}:`, err)
    }
  }
}

/**
 * List all files in a bucket
 */
export async function listBucketFiles(bucket, path = '') {
  const { data, error } = await supabase.storage
    .from(bucket)
    .list(path)
  
  if (error) {
    console.error('Error listing files:', error)
    return []
  }
  
  return data || []
}