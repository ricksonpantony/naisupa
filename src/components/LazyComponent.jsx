import React, { Suspense } from 'react'
import LoadingSpinner from './LoadingSpinner'

// Higher-order component for lazy loading
const LazyComponent = ({ children, fallback = <LoadingSpinner /> }) => {
  return (
    <Suspense fallback={fallback}>
      {children}
    </Suspense>
  )
}

// Loading fallback for pages
export const PageLoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-nai-soft/50 via-white to-nai-teal/5">
    <div className="text-center">
      <LoadingSpinner />
      <p className="mt-4 text-gray-600">Loading page...</p>
    </div>
  </div>
)

// Loading fallback for components
export const ComponentLoadingFallback = () => (
  <div className="flex items-center justify-center py-8">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-nai-highlight mx-auto"></div>
      <p className="mt-2 text-sm text-gray-500">Loading...</p>
    </div>
  </div>
)

export default LazyComponent


