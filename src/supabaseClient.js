import { createClient } from '@supabase/supabase-js'

// const supabaseUrl = process.env.REACT_APP_SUPABASE_URL
const supabaseUrl = 'https://vhlgxbrglyqlqibvrlzb.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZobGd4YnJnbHlxbHFpYnZybHpiIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzI1Mzc1OTQsImV4cCI6MTk4ODExMzU5NH0.WVVBQIDwTqAlp5vUKgrG9Wfe8OnOgnCQKY5GTBxto9w'
// const supabaseAnonKey = process.env.REACT_APP_SUPABASE_ANON_KEY

export const supabase = createClient(supabaseUrl, supabaseAnonKey)