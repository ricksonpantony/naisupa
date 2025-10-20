import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || 'https://xvdznzsozebtzqsczked.supabase.co'
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inh2ZHpuenNvemVidHpxc2N6a2VkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mjg2NTA2NDAsImV4cCI6MjA0NDIyNjY0MH0.zL8qV3rBqN2Cj5aW0Jj5Uj5Fj5Rj5Pj5Lj5Hj5Dj5Aj5'

// Lazy initialization to avoid TDZ errors in production builds
let _supabaseClient = null

function getSupabaseClient() {
  if (!_supabaseClient) {
    _supabaseClient = createClient(supabaseUrl, supabaseAnonKey)
  }
  return _supabaseClient
}

export const supabase = new Proxy({}, {
  get(target, prop) {
    return getSupabaseClient()[prop]
  }
})