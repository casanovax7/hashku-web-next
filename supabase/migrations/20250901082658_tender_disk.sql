/*
  # Create contact submissions table

  1. New Tables
    - `contact_submissions`
      - `id` (uuid, primary key)
      - `first_name` (text, required)
      - `last_name` (text, required)
      - `email` (text, required)
      - `phone` (text, optional)
      - `message` (text, required)
      - `created_at` (timestamp)
      - `status` (text, default 'new')

  2. Security
    - Enable RLS on `contact_submissions` table
    - Add policy for authenticated users to insert their own data
    - Add policy for service role to read all data
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text NOT NULL,
  phone text DEFAULT '',
  message text NOT NULL,
  status text DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to insert contact submissions
CREATE POLICY "Anyone can submit contact forms"
  ON contact_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role to read all submissions (for admin access)
CREATE POLICY "Service role can read all submissions"
  ON contact_submissions
  FOR SELECT
  TO service_role
  USING (true);