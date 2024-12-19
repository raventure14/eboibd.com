// lib/supabaseClient.ts
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.SUPABASE_URL!||"https://fksipvpfwywksnfqgfxx.supabase.co";
const supabaseKey = process.env.SUPABASE_ANON_KEY!||"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZrc2lwdnBmd3l3a3NuZnFnZnh4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM3MTk3MDMsImV4cCI6MjA0OTI5NTcwM30.iWa1kVa-dsdpmomnEaefJzpjGv6ZNJjlmsRqed-t1OM"; 
export const supabase = createClient(supabaseUrl, supabaseKey);