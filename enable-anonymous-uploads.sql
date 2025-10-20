-- =====================================================
-- Enable Anonymous Uploads for Image Migration
-- =====================================================
-- Run this SQL to temporarily allow anonymous uploads

-- Enable anonymous uploads for all buckets
CREATE POLICY "Anonymous upload for blog-images" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Anonymous upload for gallery" ON storage.objects  
FOR INSERT WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Anonymous upload for images" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'images');

CREATE POLICY "Anonymous upload for Team" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'Team');

-- Verify policies
SELECT policyname, cmd, qual 
FROM pg_policies 
WHERE tablename = 'objects' 
AND schemaname = 'storage'
AND policyname LIKE '%Anonymous%';

-- =====================================================
-- TO REMOVE THESE POLICIES AFTER UPLOAD (RECOMMENDED)
-- =====================================================
-- Run these commands after successful upload to restore security:

-- DROP POLICY IF EXISTS "Anonymous upload for blog-images" ON storage.objects;
-- DROP POLICY IF EXISTS "Anonymous upload for gallery" ON storage.objects;
-- DROP POLICY IF EXISTS "Anonymous upload for images" ON storage.objects;
-- DROP POLICY IF EXISTS "Anonymous upload for Team" ON storage.objects;