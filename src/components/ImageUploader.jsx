import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { getBlogImageUrl, getGalleryImageUrl, getGeneralImageUrl, getTeamImageUrl } from '../utils/imageStorage'

const ImageUploader = () => {
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState('')
  const [results, setResults] = useState({ success: 0, errors: 0, total: 0 })

  const uploadImageFile = async (file, bucket, path) => {
    try {
      const { data, error } = await supabase.storage
        .from(bucket)
        .upload(path, file, {
          cacheControl: '3600',
          upsert: true
        })

      if (error) {
        console.error(`Error uploading ${path}:`, error)
        return false
      }

      console.log(`✅ Uploaded ${path}`)
      return true
    } catch (err) {
      console.error(`Error uploading ${path}:`, err)
      return false
    }
  }

  const fetchAndUploadImages = async () => {
    setUploading(true)
    setProgress('Starting upload...')
    setResults({ success: 0, errors: 0, total: 0 })

    try {
      // Define the images to upload with their sources and destinations
      const imageMap = [
        // Blog images
        { src: '/blog-images/b1.webp', bucket: 'blog-images', path: 'b1.webp' },
        { src: '/blog-images/b2.webp', bucket: 'blog-images', path: 'b2.webp' },
        { src: '/blog-images/b3.webp', bucket: 'blog-images', path: 'b3.webp' },
        { src: '/blog-images/b4.webp', bucket: 'blog-images', path: 'b4.webp' },
        { src: '/blog-images/b5.webp', bucket: 'blog-images', path: 'b5.webp' },
        { src: '/blog-images/b6.webp', bucket: 'blog-images', path: 'b6.webp' },
        { src: '/blog-images/b7.webp', bucket: 'blog-images', path: 'b7.webp' },
        { src: '/blog-images/b8.webp', bucket: 'blog-images', path: 'b8.webp' },
        { src: '/blog-images/b9.webp', bucket: 'blog-images', path: 'b9.webp' },
        { src: '/blog-images/b10.webp', bucket: 'blog-images', path: 'b10.webp' },
        { src: '/blog-images/b11.webp', bucket: 'blog-images', path: 'b11.webp' },
        { src: '/blog-images/b12.webp', bucket: 'blog-images', path: 'b12.webp' },
        { src: '/blog-images/b31.webp', bucket: 'blog-images', path: 'b31.webp' },
        
        // General images
        { src: getGeneralImageUrl('ALLTECHZONE.webp'), bucket: 'images', path: 'ALLTECHZONE.webp' },
        { src: getGeneralImageUrl('australia-nursing.webp'), bucket: 'images', path: 'australia-nursing.webp' },
        { src: getGeneralImageUrl('medication-safety.webp'), bucket: 'images', path: 'medication-safety.webp' },
        { src: getGeneralImageUrl('nclex-preparation.webp'), bucket: 'images', path: 'nclex-preparation.webp' },
        { src: getGeneralImageUrl('nursing-communication.webp'), bucket: 'images', path: 'nursing-communication.webp' },
        { src: getGeneralImageUrl('nursing-education.webp'), bucket: 'images', path: 'nursing-education.webp' },
        { src: getGeneralImageUrl('nursing-support.webp'), bucket: 'images', path: 'nursing-support.webp' },
        { src: '/Images/osce.webp', bucket: 'images', path: 'osce.webp' },
        { src: '/Images/A_group_of_professional_nurses_in_teal_scrubs_diverse_in_ethnicity_and_gender_standing_together_confidently_with_warm_smiles._Some_nurses_may_hold_clipboards_stethoscopes_or_tablets_t.webp', bucket: 'images', path: 'A_group_of_professional_nurses_in_teal_scrubs_diverse_in_ethnicity_and_gender_standing_together_confidently_with_warm_smiles._Some_nurses_may_hold_clipboards_stethoscopes_or_tablets_t.webp' },
        { src: '/Images/ALLTECHZONE_A_highly_realistic_and_detailed_wide_mid-shot_of_a_nursing_student_in_navy_scrubs_performing_a_patient_repositioning_technique_with_a_mannequin_making_eye_contact_during_t.webp', bucket: 'images', path: 'ALLTECHZONE_A_highly_realistic_and_detailed_wide_mid-shot_of_a_nursing_student_in_navy_scrubs_performing_a_patient_repositioning_technique_with_a_mannequin_making_eye_contact_during_t.webp' }
      ]

      let successCount = 0
      let errorCount = 0

      setResults({ success: 0, errors: 0, total: imageMap.length })

      for (let i = 0; i < imageMap.length; i++) {
        const { src, bucket, path } = imageMap[i]
        setProgress(`Uploading ${path} (${i + 1}/${imageMap.length})...`)

        try {
          const response = await fetch(src)
          if (!response.ok) {
            throw new Error(`Failed to fetch ${src}`)
          }

          const blob = await response.blob()
          const success = await uploadImageFile(blob, bucket, path)

          if (success) {
            successCount++
          } else {
            errorCount++
          }

          setResults({ success: successCount, errors: errorCount, total: imageMap.length })
        } catch (err) {
          console.error(`Failed to process ${src}:`, err)
          errorCount++
          setResults({ success: successCount, errors: errorCount, total: imageMap.length })
        }
      }

      setProgress(`Upload complete! ${successCount} successful, ${errorCount} errors`)
    } catch (error) {
      setProgress(`Upload failed: ${error.message}`)
    }

    setUploading(false)
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Image Uploader</h2>
      
      <div className="mb-6">
        <button
          onClick={fetchAndUploadImages}
          disabled={uploading}
          className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {uploading ? 'Uploading Images...' : 'Start Image Upload'}
        </button>
      </div>

      {progress && (
        <div className="mb-4">
          <div className="bg-gray-100 rounded p-3">
            <p className="text-sm font-mono text-gray-800">{progress}</p>
          </div>
        </div>
      )}

      {results.total > 0 && (
        <div className="mb-4">
          <div className="grid grid-cols-3 gap-4 text-center">
            <div className="bg-green-50 border border-green-200 rounded p-3">
              <div className="text-2xl font-bold text-green-600">{results.success}</div>
              <div className="text-sm text-green-700">Success</div>
            </div>
            <div className="bg-red-50 border border-red-200 rounded p-3">
              <div className="text-2xl font-bold text-red-600">{results.errors}</div>
              <div className="text-sm text-red-700">Errors</div>
            </div>
            <div className="bg-blue-50 border border-blue-200 rounded p-3">
              <div className="text-2xl font-bold text-blue-600">{results.total}</div>
              <div className="text-sm text-blue-700">Total</div>
            </div>
          </div>
        </div>
      )}

      <div className="bg-yellow-50 border border-yellow-200 rounded p-4">
        <h3 className="text-sm font-semibold text-yellow-800 mb-2">Before Uploading:</h3>
        <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
          <li>Make sure you've created storage buckets in Supabase</li>
          <li>If you get MIME type errors, run the fix-mime-types.sql script first</li>
          <li>Ensure your development server is running to access local images</li>
        </ol>
      </div>

      {results.success > 0 && (
        <div className="mt-4 bg-green-50 border border-green-200 rounded p-4">
          <h3 className="text-sm font-semibold text-green-800 mb-2">Next Steps:</h3>
          <p className="text-sm text-green-700">
            After successful upload, run the code update script:
          </p>
          <code className="block mt-2 p-2 bg-green-100 text-green-800 rounded text-sm">
            node scripts/update-image-references.js
          </code>
        </div>
      )}
    </div>
  )
}

export default ImageUploader