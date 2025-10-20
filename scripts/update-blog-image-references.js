import { readFileSync, writeFileSync, readdirSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const BLOG_POSTS_DIR = join(__dirname, '../src/pages/blogs/news');

// Pattern to match and what to replace it with
const replacements = [
  {
    // Match: featuredImage: '/blog-images/filename.webp'
    pattern: /featuredImage:\s*['"]\/blog-images\/([\w.-]+)['"]/g,
    replacement: (match, filename) => {
      return `featuredImage: getBlogImageUrl('${filename}')`;
    },
    description: 'Converting /blog-images/ paths to getBlogImageUrl()'
  },
  {
    // Match: featuredImage: '/Images/filename.webp' (for blog posts using Images folder)
    pattern: /featuredImage:\s*['"]\/Images\/([\w.-]+)['"]/g,
    replacement: (match, filename) => {
      return `featuredImage: getGeneralImageUrl('${filename}')`;
    },
    description: 'Converting /Images/ paths to getGeneralImageUrl()'
  }
];

// Check if import statement exists
function hasImageStorageImport(content) {
  return content.includes("from '../../../utils/imageStorage'") || 
         content.includes('from "../../../utils/imageStorage"');
}

// Add import statement if not present
function addImageStorageImport(content) {
  if (hasImageStorageImport(content)) {
    return content;
  }
  
  // Find the last import statement
  const importRegex = /^import\s+.*from\s+['"].*['"];?\s*$/gm;
  const imports = content.match(importRegex);
  
  if (imports && imports.length > 0) {
    const lastImport = imports[imports.length - 1];
    const lastImportIndex = content.lastIndexOf(lastImport);
    const afterLastImport = lastImportIndex + lastImport.length;
    
    // Insert new import after the last import
    const newImport = "import { getBlogImageUrl, getGeneralImageUrl } from '../../../utils/imageStorage';";
    return content.slice(0, afterLastImport) + '\n' + newImport + content.slice(afterLastImport);
  } else {
    // No imports found, add at the beginning
    const newImport = "import { getBlogImageUrl, getGeneralImageUrl } from '../../../utils/imageStorage';\n\n";
    return newImport + content;
  }
}

function updateBlogReferences() {
  console.log('🔄 Updating blog image references to use Supabase...\n');

  try {
    const files = readdirSync(BLOG_POSTS_DIR).filter(file => file.endsWith('.jsx'));
    console.log(`📁 Found ${files.length} blog post files\n`);

    let updatedCount = 0;
    let skippedCount = 0;

    for (const file of files) {
      const filePath = join(BLOG_POSTS_DIR, file);
      let content = readFileSync(filePath, 'utf-8');
      let hasChanges = false;
      let changes = [];

      // Apply each replacement pattern
      for (const { pattern, replacement, description } of replacements) {
        const beforeReplace = content;
        content = content.replace(pattern, (...args) => {
          hasChanges = true;
          changes.push(description);
          return replacement(...args);
        });
      }

      if (hasChanges) {
        // Add import statement if needed
        content = addImageStorageImport(content);

        // Write updated content
        writeFileSync(filePath, content, 'utf-8');
        console.log(`✅ Updated: ${file}`);
        changes.forEach(change => console.log(`   - ${change}`));
        updatedCount++;
      } else {
        console.log(`⏭️  Skipped: ${file} (no changes needed)`);
        skippedCount++;
      }
    }

    console.log('\n📊 Update Summary:');
    console.log(`   ✅ Updated: ${updatedCount}`);
    console.log(`   ⏭️  Skipped: ${skippedCount}`);
    console.log(`   📁 Total: ${files.length}`);

    if (updatedCount > 0) {
      console.log('\n✨ All blog posts now reference images from Supabase!');
      console.log('💡 Next step: Remove local blog images with: rm -rf public/blog-images');
    }

  } catch (error) {
    console.error('❌ Update failed:', error);
  }
}

updateBlogReferences();
