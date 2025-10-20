import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'
import { createClient } from '@supabase/supabase-js'
import dotenv from 'dotenv'

// Load environment variables
dotenv.config()

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Initialize Supabase client
const supabaseUrl = process.env.VITE_SUPABASE_URL
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseKey) {
  console.error('Missing Supabase credentials in environment variables')
  process.exit(1)
}

const supabase = createClient(supabaseUrl, supabaseKey)

// Storage bucket names
const STORAGE_BUCKETS = {
  BLOG_IMAGES: 'blog-images',
  GALLERY: 'gallery', 
  GENERAL_IMAGES: 'images',
  TEAM: 'Team'
}

/**
 * Create storage buckets
 */
async function createStorageBuckets() {
  console.log('Checking storage buckets...')
  
  for (const [name, bucketName] of Object.entries(STORAGE_BUCKETS)) {
    try {
      // Try to list files to check if bucket exists
      const { data, error } = await supabase.storage.from(bucketName).list('', { limit: 1 })
      
      if (error && error.message.includes('not found')) {
        console.log(`⚠️  Bucket ${bucketName} does not exist. Please create it manually in Supabase dashboard.`)
        console.log(`   Go to: https://supabase.com/dashboard/project/xvdznzsozebtzqsczked/storage/buckets`)
      } else if (error) {
        console.error(`❌ Error checking bucket ${bucketName}:`, error.message)
      } else {
        console.log(`✅ Bucket ${bucketName} ready`)
      }
    } catch (err) {
      console.error(`❌ Error with bucket ${bucketName}:`, err.message)
    }
  }
}

/**
 * Get MIME type from file extension
 */
function getMimeType(filename) {
  const ext = path.extname(filename).toLowerCase()
  const mimeTypes = {
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.gif': 'image/gif',
    '.webp': 'image/webp',
    '.avif': 'image/avif',
    '.svg': 'image/svg+xml'
  }
  return mimeTypes[ext] || 'application/octet-stream'
}

/**
 * Upload a single file to Supabase Storage
 */
async function uploadFile(bucket, filePath, supabasePath) {
  try {
    const fileBuffer = fs.readFileSync(filePath)
    const mimeType = getMimeType(filePath)
    
    const { data, error } = await supabase.storage
      .from(bucket)
      .upload(supabasePath, fileBuffer, {
        cacheControl: '3600',
        upsert: true,
        contentType: mimeType
      })
    
    if (error) {
      console.error(`❌ Error uploading ${supabasePath}:`, error.message)
      return false
    }
    
    console.log(`✅ Uploaded ${supabasePath} (${mimeType})`)
    return true
  } catch (err) {
    console.error(`❌ Error uploading ${supabasePath}:`, err.message)
    return false
  }
}

/**
 * Upload all files from a directory recursively
 */
async function uploadDirectory(localDir, bucket, supabaseDir = '') {
  const fullLocalPath = path.join(__dirname, '..', localDir)
  
  if (!fs.existsSync(fullLocalPath)) {
    console.log(`⚠️  Directory ${localDir} does not exist`)
    return
  }
  
  const items = fs.readdirSync(fullLocalPath)
  let uploadCount = 0
  let errorCount = 0
  
  for (const item of items) {
    const itemPath = path.join(fullLocalPath, item)
    const stat = fs.statSync(itemPath)
    
    if (stat.isDirectory()) {
      // Recursively upload subdirectory
      const subDir = supabaseDir ? `${supabaseDir}/${item}` : item
      await uploadDirectory(path.join(localDir, item), bucket, subDir)
    } else if (stat.isFile()) {
      // Upload file
      const supabasePath = supabaseDir ? `${supabaseDir}/${item}` : item
      const success = await uploadFile(bucket, itemPath, supabasePath)
      
      if (success) {
        uploadCount++
      } else {
        errorCount++
      }
    }
  }
  
  return { uploadCount, errorCount }
}

/**
 * Main upload function
 */
async function uploadAllImages() {
  console.log('🚀 Starting image upload to Supabase Storage...\n')
  
  // Create buckets first
  await createStorageBuckets()
  console.log('')
  
  // Upload directories
  const uploads = [
    {
      localDir: 'public/blog-images',
      bucket: STORAGE_BUCKETS.BLOG_IMAGES,
      name: 'Blog Images'
    },
    {
      localDir: 'public/Gallery',
      bucket: STORAGE_BUCKETS.GALLERY,
      name: 'Gallery Images'
    },
    {
      localDir: 'public/Images',
      bucket: STORAGE_BUCKETS.GENERAL_IMAGES,
      name: 'General Images'
    },
    {
      localDir: 'public/Team',
      bucket: STORAGE_BUCKETS.TEAM,
      name: 'Team Images'
    }
  ]
  
  let totalUploaded = 0
  let totalErrors = 0
  
  for (const upload of uploads) {
    console.log(`📁 Uploading ${upload.name} from ${upload.localDir}...`)
    const result = await uploadDirectory(upload.localDir, upload.bucket)
    
    if (result) {
      totalUploaded += result.uploadCount
      totalErrors += result.errorCount
      console.log(`   ✅ ${result.uploadCount} files uploaded, ${result.errorCount} errors\n`)
    }
  }
  
  console.log('🎉 Upload complete!')
  console.log(`📊 Total: ${totalUploaded} files uploaded, ${totalErrors} errors`)
  
  // List buckets to verify
  console.log('\n📋 Verifying buckets...')
  for (const bucket of Object.values(STORAGE_BUCKETS)) {
    try {
      const { data, error } = await supabase.storage.from(bucket).list()
      if (error) {
        console.error(`❌ Error listing ${bucket}:`, error.message)
      } else {
        console.log(`✅ Bucket ${bucket}: ${data.length} items`)
      }
    } catch (err) {
      console.error(`❌ Error with bucket ${bucket}:`, err.message)
    }
  }
}

// Run the upload
uploadAllImages().catch(console.error)