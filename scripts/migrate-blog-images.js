import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join, basename } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials in .env file');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const BUCKET_NAME = 'blog-images';
const LOCAL_DIR = join(__dirname, '../public/blog-images');

async function uploadBlogImages() {
  console.log('🚀 Starting blog images migration to Supabase...\n');

  try {
    // Try to list files in bucket to verify it exists
    console.log(`📦 Checking if bucket '${BUCKET_NAME}' is accessible...`);
    const { data: testList, error: testError } = await supabase.storage.from(BUCKET_NAME).list();
    
    if (testError && testError.message.includes('not found')) {
      console.error(`❌ Bucket '${BUCKET_NAME}' does not exist. Please create it in Supabase Dashboard.`);
      console.log('\n📝 Instructions:');
      console.log('1. Go to your Supabase Dashboard');
      console.log('2. Navigate to Storage');
      console.log(`3. Create a new public bucket named '${BUCKET_NAME}'`);
      console.log('4. Run this script again');
      return;
    }
    
    console.log(`✅ Bucket '${BUCKET_NAME}' is accessible\n`);

    // Get list of files in local directory
    let files = [];
    try {
      files = readdirSync(LOCAL_DIR).filter(file => {
        const filePath = join(LOCAL_DIR, file);
        return statSync(filePath).isFile();
      });
    } catch (error) {
      console.error('❌ Error reading local directory:', error.message);
      return;
    }

    console.log(`📁 Found ${files.length} files in ${LOCAL_DIR}\n`);

    // Upload each file
    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const file of files) {
      const filePath = join(LOCAL_DIR, file);
      const fileName = basename(file);

      try {
        // Check if file already exists
        const { data: existingFile } = await supabase.storage
          .from(BUCKET_NAME)
          .list('', { search: fileName });

        if (existingFile && existingFile.length > 0) {
          console.log(`⏭️  Skipped: ${fileName} (already exists)`);
          skipCount++;
          continue;
        }

        // Read file
        const fileBuffer = readFileSync(filePath);

        // Upload to Supabase
        const { data, error } = await supabase.storage
          .from(BUCKET_NAME)
          .upload(fileName, fileBuffer, {
            contentType: 'image/webp',
            cacheControl: '3600',
            upsert: true
          });

        if (error) {
          console.error(`❌ Error uploading ${fileName}:`, error.message);
          errorCount++;
        } else {
          console.log(`✅ Uploaded: ${fileName}`);
          successCount++;
        }
      } catch (error) {
        console.error(`❌ Error processing ${fileName}:`, error.message);
        errorCount++;
      }
    }

    console.log('\n📊 Migration Summary:');
    console.log(`   ✅ Uploaded: ${successCount}`);
    console.log(`   ⏭️  Skipped: ${skipCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log(`   📁 Total: ${files.length}`);

    // List files in Supabase bucket
    console.log('\n📋 Files now in Supabase bucket:');
    const { data: bucketFiles } = await supabase.storage.from(BUCKET_NAME).list();
    if (bucketFiles) {
      bucketFiles.forEach(file => {
        const url = `${supabaseUrl}/storage/v1/object/public/${BUCKET_NAME}/${file.name}`;
        console.log(`   - ${file.name} → ${url}`);
      });
    }

  } catch (error) {
    console.error('❌ Migration failed:', error);
  }
}

uploadBlogImages();
