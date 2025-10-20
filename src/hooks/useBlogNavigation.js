import { useSearchParams, useLocation } from 'react-router-dom'
import { useMemo } from 'react'

export const useBlogNavigation = () => {
  const [searchParams] = useSearchParams()
  const location = useLocation()

  const backToNewsUrl = useMemo(() => {
    // Extract pagination parameters from current URL
    const page = searchParams.get('page')
    const category = searchParams.get('category')
    const search = searchParams.get('search')
    
    // Build the back URL with pagination context
    const params = new URLSearchParams()
    if (page && page !== '1') params.set('page', page)
    if (category && category !== 'All') params.set('category', category)
    if (search) params.set('search', search)
    
    const queryString = params.toString()
    return `/blogs/news${queryString ? `?${queryString}` : ''}`
  }, [searchParams])

  const currentPageInfo = useMemo(() => ({
    page: parseInt(searchParams.get('page')) || 1,
    category: searchParams.get('category') || 'All',
    search: searchParams.get('search') || ''
  }), [searchParams])

  return {
    backToNewsUrl,
    currentPageInfo
  }
}