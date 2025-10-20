import { createClient } from '@supabase/supabase-js';
import { readFileSync, readdirSync, statSync } from 'fs';
import { join } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const supabaseUrl = process.env.VITE_SUPABASE_URL;
const supabaseKey = process.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseKey) {
  console.error('❌ Missing Supabase credentials');
  process.exit(1);
}

const supabase = createClient(supabaseUrl, supabaseKey);

const BUCKET = 'gallery';
const LOCAL_DIR = join(__dirname, '../backup/local-images/Gallery/NAI GALLERY/Students');

async function uploadStudentPhotos() {
  console.log('🚀 Uploading student photos to Supabase...\n');

  try {
    // Get list of files
    const files = readdirSync(LOCAL_DIR).filter(file => {
      const filePath = join(LOCAL_DIR, file);
      return statSync(filePath).isFile() && file.endsWith('.webp');
    });

    console.log(`📁 Found ${files.length} student photos\n`);

    let successCount = 0;
    let skipCount = 0;
    let errorCount = 0;

    for (const file of files) {
      const filePath = join(LOCAL_DIR, file);
      const supabasePath = `NAI GALLERY/Students/${file}`;

      try {
        // Check if file exists
        const { data: existingFile } = await supabase.storage
          .from(BUCKET)
          .list('NAI GALLERY/Students', { search: file });

        if (existingFile && existingFile.length > 0) {
          console.log(`⏭️  Skipped: ${file} (already exists)`);
          skipCount++;
          continue;
        }

        // Read file
        const fileBuffer = readFileSync(filePath);

        // Upload
        const { data, error } = await supabase.storage
          .from(BUCKET)
          .upload(supabasePath, fileBuffer, {
            contentType: 'image/webp',
            cacheControl: '3600',
            upsert: true
          });

        if (error) {
          console.error(`❌ Error uploading ${file}:`, error.message);
          errorCount++;
        } else {
          console.log(`✅ Uploaded: ${file}`);
          successCount++;
        }
      } catch (error) {
        console.error(`❌ Error processing ${file}:`, error.message);
        errorCount++;
      }
    }

    console.log('\n📊 Upload Summary:');
    console.log(`   ✅ Uploaded: ${successCount}`);
    console.log(`   ⏭️  Skipped: ${skipCount}`);
    console.log(`   ❌ Errors: ${errorCount}`);
    console.log(`   📁 Total: ${files.length}`);

    // Verify uploads
    console.log('\n📋 Verifying uploads...');
    const { data: bucketFiles } = await supabase.storage
      .from(BUCKET)
      .list('NAI GALLERY/Students');
    
    if (bucketFiles) {
      console.log(`\n✅ Total files in Students folder: ${bucketFiles.length}`);
      console.log('\nFirst 10 files:');
      bucketFiles.slice(0, 10).forEach(file => {
        const url = `${supabaseUrl}/storage/v1/object/public/${BUCKET}/NAI%20GALLERY/Students/${encodeURIComponent(file.name)}`;
        console.log(`   - ${file.name}`);
      });
    }

  } catch (error) {
    console.error('❌ Upload failed:', error);
  }
}

uploadStudentPhotos();
