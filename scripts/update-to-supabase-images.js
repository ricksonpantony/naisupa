import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SUPABASE_STORAGE_URL = 'https://xvdznzsozebtzqsczked.supabase.co/storage/v1/object/public'

const STORAGE_BUCKETS = {
  BLOG_IMAGES: 'blog-images',
  GALLERY: 'gallery', 
  GENERAL_IMAGES: 'images',
  TEAM: 'Team'
}

function getImageUrl(bucket, path) {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${SUPABASE_STORAGE_URL}/${bucket}/${cleanPath}`
}

function getBlogImageUrl(filename) {
  const cleanName = filename.replace(/^\/blog-images\//, '').replace(/^blog-images\//, '')
  return getImageUrl(STORAGE_BUCKETS.BLOG_IMAGES, cleanName)
}

function getGalleryImageUrl(path) {
  const cleanPath = path.replace(/^\/Gallery\//, '').replace(/^Gallery\//, '')
  return getImageUrl(STORAGE_BUCKETS.GALLERY, cleanPath)
}

function getGeneralImageUrl(filename) {
  const cleanName = filename.replace(/^\/Images\//, '').replace(/^Images\//, '')
  return getImageUrl(STORAGE_BUCKETS.GENERAL_IMAGES, cleanName)
}

function getTeamImageUrl(filename) {
  const cleanName = filename.replace(/^\/Team\//, '').replace(/^Team\//, '')
  return getImageUrl(STORAGE_BUCKETS.TEAM, cleanName)
}

// Update newsArticles.json
function updateNewsArticles() {
  const newsArticlesPath = path.join(__dirname, '../src/data/newsArticles.json')
  const newsArticles = JSON.parse(fs.readFileSync(newsArticlesPath, 'utf-8'))
  
  const updated = newsArticles.map(article => {
    if (article.image) {
      if (article.image.startsWith('/blog-images/')) {
        article.image = getBlogImageUrl(article.image)
      } else if (article.image.startsWith('/Images/')) {
        article.image = getGeneralImageUrl(article.image)
      }
    }
    return article
  })
  
  fs.writeFileSync(newsArticlesPath, JSON.stringify(updated, null, 2))
  console.log('✅ Updated newsArticles.json')
}

// Update component files
function updateFile(filePath, replacements) {
  if (!fs.existsSync(filePath)) {
    console.log(`⚠️  File not found: ${filePath}`)
    return
  }
  
  let content = fs.readFileSync(filePath, 'utf-8')
  let changed = false
  
  for (const [pattern, replacement] of replacements) {
    if (content.includes(pattern)) {
      content = content.replace(new RegExp(pattern, 'g'), replacement)
      changed = true
    }
  }
  
  if (changed) {
    fs.writeFileSync(filePath, content)
    console.log(`✅ Updated ${path.basename(filePath)}`)
  }
}

console.log('🚀 Updating all images to use Supabase storage...\n')

// Update newsArticles.json
updateNewsArticles()

console.log('\n✨ All images updated to use Supabase storage!')
console.log(`📝 Supabase URL: ${SUPABASE_STORAGE_URL}`)
