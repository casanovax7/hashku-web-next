import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Create a dummy client if environment variables are missing
let supabase: any = null;

if (supabaseUrl && supabaseAnonKey) {
  supabase = createClient(supabaseUrl, supabaseAnonKey);
} else {
  console.warn("Supabase environment variables not found. Using mock client.");
  // Create a mock client that doesn't actually do anything
  supabase = {
    from: () => ({
      insert: () =>
        Promise.resolve({ error: new Error("Supabase not configured") }),
      select: () => Promise.resolve({ data: [], error: null }),
    }),
  };
}

export { supabase };

// Database types
export interface ContactSubmission {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  phone?: string;
  message: string;
  status?: string;
  created_at?: string;
}

export interface NewsletterSubscription {
  id?: string;
  email: string;
  status?: string;
  source?: string;
  subscribed_at?: string;
}
