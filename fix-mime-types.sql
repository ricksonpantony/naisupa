-- =====================================================
-- Fix MIME Type Issues - Run this to update buckets
-- =====================================================

-- Update buckets to allow all MIME types (removes restriction)
UPDATE storage.buckets 
SET allowed_mime_types = NULL 
WHERE id IN ('blog-images', 'gallery', 'images');

-- Or alternatively, add more specific MIME types
-- UPDATE storage.buckets 
-- SET allowed_mime_types = ARRAY[
--   'image/jpeg', 
--   'image/jpg', 
--   'image/png', 
--   'image/gif', 
--   'image/webp', 
--   'image/avif',
--   'image/svg+xml',
--   'application/octet-stream'
-- ] 
-- WHERE id IN ('blog-images', 'gallery', 'images');

-- Verify the update
SELECT id, name, allowed_mime_types FROM storage.buckets 
WHERE id IN ('blog-images', 'gallery', 'images');