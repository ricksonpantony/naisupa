import React, { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'

const SupabaseTest = () => {
  const [connectionStatus, setConnectionStatus] = useState('Connecting...')
  const [tables, setTables] = useState([])

  useEffect(() => {
    testConnection()
  }, [])

  const testConnection = async () => {
    try {
      // Test the connection by trying to get the current user
      const { data: { user }, error } = await supabase.auth.getUser()
      
      if (error && error.message !== 'Invalid JWT') {
        throw error
      }

      setConnectionStatus('Connected successfully!')
      
      // Try to fetch some basic info (this might fail if no tables exist, which is fine)
      const { data, error: tablesError } = await supabase
        .from('information_schema.tables')
        .select('table_name')
        .limit(5)

      if (!tablesError && data) {
        setTables(data)
      }

    } catch (error) {
      console.error('Supabase connection error:', error)
      setConnectionStatus(`Connection failed: ${error.message}`)
    }
  }

  return (
    <div className="p-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-900">Supabase Connection Test</h2>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-600">Status:</p>
        <p className={`font-medium ${
          connectionStatus.includes('successfully') 
            ? 'text-green-600' 
            : connectionStatus.includes('failed') 
            ? 'text-red-600' 
            : 'text-yellow-600'
        }`}>
          {connectionStatus}
        </p>
      </div>

      <div className="space-y-2">
        <p className="text-sm text-gray-600">Supabase URL:</p>
        <p className="text-xs font-mono text-gray-800 break-all">
          {import.meta.env.VITE_SUPABASE_URL}
        </p>
      </div>

      <button 
        onClick={testConnection}
        className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Test Connection Again
      </button>

      {tables.length > 0 && (
        <div className="space-y-2">
          <p className="text-sm text-gray-600">Available Tables:</p>
          <ul className="text-xs text-gray-800 space-y-1">
            {tables.map((table, index) => (
              <li key={index} className="font-mono">
                {table.table_name}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}

export default SupabaseTest