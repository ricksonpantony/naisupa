import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

// Image path mappings for Supabase Storage
const IMAGE_MAPPINGS = {
  // Blog images
  '/blog-images/': 'getBlogImageUrl',
  
  // Gallery images  
  '/Gallery/': 'getGalleryImageUrl',
  
  // General images
  '/Images/': 'getGeneralImageUrl',
  
  // Team images
  '/Team/': 'getTeamImageUrl'
}

/**
 * Update image references in a file
 */
function updateImageReferencesInFile(filePath) {
  let content = fs.readFileSync(filePath, 'utf8')
  let hasChanges = false
  
  console.log(`Processing ${filePath}...`)
  
  // Add import statement if file uses images and doesn't already have it
  const needsImport = Object.keys(IMAGE_MAPPINGS).some(path => content.includes(path))
  const hasImport = content.includes('getBlogImageUrl') || content.includes('getGalleryImageUrl') || content.includes('getGeneralImageUrl') || content.includes('getTeamImageUrl')
  
  if (needsImport && !hasImport) {
    // Find existing imports
    const importMatch = content.match(/import.*from.*['"].*['"];?\n/g)
    if (importMatch) {
      const lastImport = importMatch[importMatch.length - 1]
      const importIndex = content.lastIndexOf(lastImport) + lastImport.length
      
      const newImport = "import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../utils/imageStorage'\n"
      content = content.slice(0, importIndex) + newImport + content.slice(importIndex)
      hasChanges = true
      console.log(`  ✅ Added import statement`)
    }
  }
  
  // Replace image paths
  for (const [localPath, helperFunction] of Object.entries(IMAGE_MAPPINGS)) {
    // Pattern for src="/path/to/image.ext"
    const srcPattern = new RegExp(`src=["']${localPath.replace(/\//g, '\\/')}([^"']+)["']`, 'g')
    const srcReplacements = content.match(srcPattern)
    
    if (srcReplacements) {
      content = content.replace(srcPattern, (match, filename) => {
        console.log(`  🔄 ${localPath}${filename} → ${helperFunction}('${filename}')`)
        return `src={${helperFunction}('${filename}')}`
      })
      hasChanges = true
    }
    
    // Pattern for image: "/path/to/image.ext"
    const imagePattern = new RegExp(`image:\\s*["']${localPath.replace(/\//g, '\\/')}([^"']+)["']`, 'g')
    const imageReplacements = content.match(imagePattern)
    
    if (imageReplacements) {
      content = content.replace(imagePattern, (match, filename) => {
        console.log(`  🔄 image: "${localPath}${filename}" → ${helperFunction}('${filename}')`)
        return `image: ${helperFunction}('${filename}')`
      })
      hasChanges = true
    }
    
    // Pattern for ogImage: `${BASE_DOMAIN}/path/to/image.ext`
    const ogImagePattern = new RegExp(`ogImage:\\s*\`\\$\\{BASE_DOMAIN\\}${localPath.replace(/\//g, '\\/')}([^\`]+)\``, 'g')
    const ogImageReplacements = content.match(ogImagePattern)
    
    if (ogImageReplacements) {
      content = content.replace(ogImagePattern, (match, filename) => {
        console.log(`  🔄 ogImage: \`\${BASE_DOMAIN}${localPath}${filename}\` → ${helperFunction}('${filename}')`)
        return `ogImage: ${helperFunction}('${filename}')`
      })
      hasChanges = true
    }
    
    // Pattern for "logo": `${BASE_DOMAIN}/path/to/image.ext`
    const logoPattern = new RegExp(`"logo":\\s*\`\\$\\{BASE_DOMAIN\\}${localPath.replace(/\//g, '\\/')}([^\`]+)\``, 'g')
    const logoReplacements = content.match(logoPattern)
    
    if (logoReplacements) {
      content = content.replace(logoPattern, (match, filename) => {
        console.log(`  🔄 "logo": \`\${BASE_DOMAIN}${localPath}${filename}\` → ${helperFunction}('${filename}')`)
        return `"logo": ${helperFunction}('${filename}')`
      })
      hasChanges = true
    }
  }
  
  if (hasChanges) {
    fs.writeFileSync(filePath, content, 'utf8')
    console.log(`  ✅ Updated ${filePath}`)
    return true
  } else {
    console.log(`  ⏭️  No changes needed`)
    return false
  }
}

/**
 * Recursively find and update all JSX files
 */
function updateAllImageReferences(directory) {
  const fullPath = path.join(__dirname, '..', directory)
  
  if (!fs.existsSync(fullPath)) {
    console.log(`Directory ${directory} does not exist`)
    return
  }
  
  const items = fs.readdirSync(fullPath)
  let updatedFiles = 0
  
  for (const item of items) {
    const itemPath = path.join(fullPath, item)
    const stat = fs.statSync(itemPath)
    
    if (stat.isDirectory()) {
      // Skip node_modules and other build directories
      if (!['node_modules', 'dist', 'build', '.git'].includes(item)) {
        updatedFiles += updateAllImageReferences(path.join(directory, item))
      }
    } else if (stat.isFile() && (item.endsWith('.jsx') || item.endsWith('.js'))) {
      const updated = updateImageReferencesInFile(itemPath)
      if (updated) updatedFiles++
    }
  }
  
  return updatedFiles
}

/**
 * Main function
 */
function main() {
  console.log('🚀 Starting image reference updates...\n')
  
  const directories = ['src']
  let totalUpdatedFiles = 0
  
  for (const dir of directories) {
    console.log(`📁 Processing ${dir}/...`)
    const updatedFiles = updateAllImageReferences(dir)
    totalUpdatedFiles += updatedFiles
    console.log(`   Updated ${updatedFiles} files\n`)
  }
  
  console.log(`🎉 Complete! Updated ${totalUpdatedFiles} files total.`)
  console.log('\n📋 Next steps:')
  console.log('1. Test your application to ensure all images load correctly')
  console.log('2. Delete the old image directories after confirming everything works:')
  console.log('   - public/blog-images/')
  console.log('   - public/Gallery/')
  console.log('   - public/Images/')
}

// Run the update
main()