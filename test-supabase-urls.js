// Test script to verify Supabase image URLs
import { getGalleryImageUrl } from './src/utils/imageStorage.js'

console.log('Testing Supabase image URLs:')
console.log('Student Image URL:', getGalleryImageUrl("NAI GALLERY/Students/Aayushma Koirala.webp"))
console.log('Gallery Image URL:', getGalleryImageUrl("NAI GALLERY/nurseassistinternational001.jpg"))

// Test the actual URL structure
const supabaseUrl = "https://xvdznzsozebtzqsczked.supabase.co"
const bucket = "gallery"
const path = "NAI GALLERY/Students/Aayushma Koirala.webp"
console.log('Expected URL:', `${supabaseUrl}/storage/v1/object/public/${bucket}/${path}`)