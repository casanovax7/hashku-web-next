/*
  # Create newsletter subscriptions table

  1. New Tables
    - `newsletter_subscriptions`
      - `id` (uuid, primary key)
      - `email` (text, unique, required)
      - `subscribed_at` (timestamp)
      - `status` (text, default 'active')
      - `source` (text, default 'website')

  2. Security
    - Enable RLS on `newsletter_subscriptions` table
    - Add policy for anyone to insert subscriptions
    - Add policy for service role to read all data
*/

CREATE TABLE IF NOT EXISTS newsletter_subscriptions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  status text DEFAULT 'active',
  source text DEFAULT 'website',
  subscribed_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe to newsletter
CREATE POLICY "Anyone can subscribe to newsletter"
  ON newsletter_subscriptions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Allow service role to read all subscriptions (for admin access)
CREATE POLICY "Service role can read all subscriptions"
  ON newsletter_subscriptions
  FOR SELECT
  TO service_role
  USING (true);