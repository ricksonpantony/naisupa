-- =====================================================
-- Supabase Storage Setup SQL Commands
-- =====================================================
-- Run these commands in Supabase Dashboard > SQL Editor
-- URL: https://supabase.com/dashboard/project/xvdznzsozebtzqsczked/sql

-- =====================================================
-- 1. CREATE STORAGE BUCKETS
-- =====================================================

-- Create blog-images bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'blog-images',
  'blog-images', 
  true,
  10485760, -- 10MB
  ARRAY['image/*']
)
ON CONFLICT (id) DO NOTHING;

-- Create gallery bucket  
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'gallery',
  'gallery',
  true, 
  10485760, -- 10MB
  ARRAY['image/*']
)
ON CONFLICT (id) DO NOTHING;

-- Create images bucket
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES (
  'images',
  'images',
  true,
  10485760, -- 10MB  
  ARRAY['image/*']
)
ON CONFLICT (id) DO NOTHING;

-- =====================================================
-- 2. CREATE STORAGE POLICIES
-- =====================================================

-- =====================================================
-- Blog Images Bucket Policies
-- =====================================================

-- Allow public read access to blog-images
CREATE POLICY "Public read access for blog-images" ON storage.objects
FOR SELECT USING (bucket_id = 'blog-images');

-- Allow authenticated users to upload to blog-images
CREATE POLICY "Authenticated upload for blog-images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'blog-images' 
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to update blog-images
CREATE POLICY "Authenticated update for blog-images" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'blog-images' 
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to delete blog-images
CREATE POLICY "Authenticated delete for blog-images" ON storage.objects
FOR DELETE USING (
  bucket_id = 'blog-images' 
  AND auth.role() = 'authenticated'
);

-- =====================================================
-- Gallery Bucket Policies
-- =====================================================

-- Allow public read access to gallery
CREATE POLICY "Public read access for gallery" ON storage.objects
FOR SELECT USING (bucket_id = 'gallery');

-- Allow authenticated users to upload to gallery
CREATE POLICY "Authenticated upload for gallery" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'gallery' 
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to update gallery
CREATE POLICY "Authenticated update for gallery" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'gallery' 
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to delete gallery
CREATE POLICY "Authenticated delete for gallery" ON storage.objects
FOR DELETE USING (
  bucket_id = 'gallery' 
  AND auth.role() = 'authenticated'
);

-- =====================================================
-- Images Bucket Policies
-- =====================================================

-- Allow public read access to images
CREATE POLICY "Public read access for images" ON storage.objects
FOR SELECT USING (bucket_id = 'images');

-- Allow authenticated users to upload to images
CREATE POLICY "Authenticated upload for images" ON storage.objects
FOR INSERT WITH CHECK (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to update images
CREATE POLICY "Authenticated update for images" ON storage.objects
FOR UPDATE USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);

-- Allow authenticated users to delete images
CREATE POLICY "Authenticated delete for images" ON storage.objects
FOR DELETE USING (
  bucket_id = 'images' 
  AND auth.role() = 'authenticated'
);

-- =====================================================
-- 3. VERIFY BUCKET CREATION
-- =====================================================

-- Check if buckets were created successfully
SELECT 
  id,
  name,
  public,
  file_size_limit,
  allowed_mime_types,
  created_at
FROM storage.buckets 
WHERE id IN ('blog-images', 'gallery', 'images');

-- =====================================================
-- 4. VERIFY POLICIES
-- =====================================================

-- Check storage policies
SELECT 
  schemaname,
  tablename,
  policyname,
  permissive,
  roles,
  cmd,
  qual
FROM pg_policies 
WHERE tablename = 'objects' 
AND schemaname = 'storage'
ORDER BY policyname;

-- =====================================================
-- 5. ENABLE ANONYMOUS UPLOADS (FOR IMAGE MIGRATION)
-- =====================================================
-- Run these to allow anonymous uploads during migration

CREATE POLICY "Anonymous upload for blog-images" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'blog-images');

CREATE POLICY "Anonymous upload for gallery" ON storage.objects  
FOR INSERT WITH CHECK (bucket_id = 'gallery');

CREATE POLICY "Anonymous upload for images" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'images');

CREATE POLICY "Anonymous upload for Team" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'Team');

-- =====================================================
-- 6. ALTERNATIVE: ENABLE PUBLIC ACCESS (LESS SECURE)
-- =====================================================
-- Only use this if you want to allow anonymous uploads
-- (Not recommended for production)

-- CREATE POLICY "Public upload for blog-images" ON storage.objects
-- FOR INSERT WITH CHECK (bucket_id = 'blog-images');

-- CREATE POLICY "Public upload for gallery" ON storage.objects  
-- FOR INSERT WITH CHECK (bucket_id = 'gallery');

-- CREATE POLICY "Public upload for images" ON storage.objects
-- FOR INSERT WITH CHECK (bucket_id = 'images');

-- =====================================================
-- 6. CLEANUP COMMANDS (if needed)
-- =====================================================

-- To delete buckets (WARNING: This will delete all files!)
-- DELETE FROM storage.buckets WHERE id IN ('blog-images', 'gallery', 'images');

-- To delete specific policies
-- DROP POLICY IF EXISTS "Public read access for blog-images" ON storage.objects;
-- DROP POLICY IF EXISTS "Authenticated upload for blog-images" ON storage.objects;
-- (repeat for other policies as needed)