-- =====================================================
-- QUICK SETUP: Essential SQL Commands Only
-- =====================================================
-- Copy and paste these commands in Supabase SQL Editor

-- 1. Create the three storage buckets
INSERT INTO storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
VALUES 
  ('blog-images', 'blog-images', true, 10485760, ARRAY['image/*']),
  ('gallery', 'gallery', true, 10485760, ARRAY['image/*']),
  ('images', 'images', true, 10485760, ARRAY['image/*'])
ON CONFLICT (id) DO NOTHING;

-- 2. Allow public read access to all buckets
CREATE POLICY "Public read blog-images" ON storage.objects FOR SELECT USING (bucket_id = 'blog-images');
CREATE POLICY "Public read gallery" ON storage.objects FOR SELECT USING (bucket_id = 'gallery');
CREATE POLICY "Public read images" ON storage.objects FOR SELECT USING (bucket_id = 'images');

-- 3. Allow authenticated users to upload to all buckets
CREATE POLICY "Auth upload blog-images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'blog-images' AND auth.role() = 'authenticated');
CREATE POLICY "Auth upload gallery" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'gallery' AND auth.role() = 'authenticated');
CREATE POLICY "Auth upload images" ON storage.objects FOR INSERT WITH CHECK (bucket_id = 'images' AND auth.role() = 'authenticated');

-- 4. Verify setup
SELECT id, name, public FROM storage.buckets WHERE id IN ('blog-images', 'gallery', 'images');