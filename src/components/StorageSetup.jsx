import React, { useState } from 'react'
import { supabase } from '../lib/supabase'
import { STORAGE_BUCKETS, createStorageBuckets, listBucketFiles } from '../utils/imageStorage'

const StorageSetup = () => {
  const [status, setStatus] = useState('')
  const [buckets, setBuckets] = useState({})
  const [loading, setLoading] = useState(false)

  const checkBuckets = async () => {
    setLoading(true)
    setStatus('Checking buckets...')
    
    const bucketStatus = {}
    
    for (const [key, bucketName] of Object.entries(STORAGE_BUCKETS)) {
      try {
        const { data, error } = await supabase.storage.from(bucketName).list('', { limit: 1 })
        
        if (error && error.message.includes('not found')) {
          bucketStatus[bucketName] = { exists: false, error: 'Bucket not found' }
        } else if (error) {
          bucketStatus[bucketName] = { exists: false, error: error.message }
        } else {
          bucketStatus[bucketName] = { exists: true, files: data.length }
        }
      } catch (err) {
        bucketStatus[bucketName] = { exists: false, error: err.message }
      }
    }
    
    setBuckets(bucketStatus)
    setLoading(false)
    setStatus('Bucket check complete')
  }

  const createBucket = async (bucketName) => {
    setLoading(true)
    setStatus(`Creating bucket: ${bucketName}`)
    
    try {
      const { data, error } = await supabase.storage.createBucket(bucketName, {
        public: true,
        allowedMimeTypes: ['image/*'],
        fileSizeLimit: 10485760, // 10MB
      })
      
      if (error && error.message !== 'Bucket already exists') {
        setStatus(`Error creating bucket ${bucketName}: ${error.message}`)
      } else {
        setStatus(`✅ Bucket ${bucketName} created successfully`)
        checkBuckets() // Refresh status
      }
    } catch (err) {
      setStatus(`Error creating bucket ${bucketName}: ${err.message}`)
    }
    
    setLoading(false)
  }

  const openSupabaseDashboard = () => {
    window.open('https://supabase.com/dashboard/project/xvdznzsozebtzqsczked/storage/buckets', '_blank')
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold text-gray-900 mb-6">Supabase Storage Setup</h1>
      
      <div className="mb-6">
        <h2 className="text-lg font-semibold text-gray-800 mb-3">Required Storage Buckets</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {Object.entries(STORAGE_BUCKETS).map(([key, bucketName]) => (
            <div key={bucketName} className="border rounded-lg p-4">
              <h3 className="font-medium text-gray-900">{bucketName}</h3>
              <p className="text-sm text-gray-600 mb-2">
                {key === 'BLOG_IMAGES' && 'Blog post images'}
                {key === 'GALLERY' && 'Gallery and student photos'}
                {key === 'GENERAL_IMAGES' && 'General website images'}
              </p>
              
              {buckets[bucketName] && (
                <div className="text-sm">
                  {buckets[bucketName].exists ? (
                    <span className="text-green-600 font-medium">✅ Exists</span>
                  ) : (
                    <div>
                      <span className="text-red-600 font-medium">❌ Missing</span>
                      <p className="text-red-500 text-xs mt-1">{buckets[bucketName].error}</p>
                      <button
                        onClick={() => createBucket(bucketName)}
                        disabled={loading}
                        className="mt-2 px-3 py-1 bg-blue-500 text-white text-xs rounded hover:bg-blue-600 disabled:opacity-50"
                      >
                        Create
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mb-6">
        <button
          onClick={checkBuckets}
          disabled={loading}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
        >
          {loading ? 'Checking...' : 'Check Buckets'}
        </button>
        
        <button
          onClick={openSupabaseDashboard}
          className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
        >
          Open Supabase Dashboard
        </button>
      </div>

      {status && (
        <div className="mb-4 p-3 bg-gray-100 rounded">
          <p className="text-sm font-mono">{status}</p>
        </div>
      )}

      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-yellow-800 mb-2">Manual Setup Instructions</h3>
        <ol className="text-sm text-yellow-700 space-y-1 list-decimal list-inside">
          <li>Click "Open Supabase Dashboard" above</li>
          <li>Navigate to Storage → Buckets</li>
          <li>Create buckets: <code>blog-images</code>, <code>gallery</code>, <code>images</code></li>
          <li>Set all buckets as <strong>Public</strong></li>
          <li>Set file size limit to <strong>10MB</strong></li>
          <li>Set allowed MIME types to <strong>image/*</strong></li>
          <li>Return here and click "Check Buckets"</li>
        </ol>
      </div>

      <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-blue-800 mb-2">Next Steps</h3>
        <p className="text-sm text-blue-700">
          Once all buckets are created, run the upload script to transfer your images:
        </p>
        <code className="block mt-2 p-2 bg-blue-100 text-blue-800 rounded text-sm">
          node scripts/upload-images.js
        </code>
      </div>
    </div>
  )
}

export default StorageSetup