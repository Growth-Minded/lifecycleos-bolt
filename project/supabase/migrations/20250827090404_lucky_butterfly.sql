/*
  # Initial Schema Setup for LifecycleOS

  1. New Tables
    - `companies`
      - `id` (uuid, primary key)
      - `name` (text)
      - `industry` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `users`
      - `id` (uuid, primary key, references auth.users)
      - `company_id` (uuid, foreign key to companies)
      - `first_name` (text)
      - `last_name` (text)
      - `email` (text)
      - `role` (enum: admin, member)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `questionnaire_responses`
      - `id` (uuid, primary key)
      - `user_id` (uuid, foreign key to users)
      - `company_id` (uuid, foreign key to companies)
      - `response_data` (jsonb)
      - `completed_at` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `scorecards`
      - `id` (uuid, primary key)
      - `questionnaire_response_id` (uuid, foreign key)
      - `scorecard_data` (jsonb)
      - `generated_at` (timestamp)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)
    
    - `benchmarks`
      - `id` (uuid, primary key)
      - `industry` (text)
      - `metric_name` (text)
      - `metric_value` (decimal)
      - `metric_unit` (text)
      - `flow_type` (text)
      - `description` (text)
      - `created_at` (timestamp)
      - `updated_at` (timestamp)

  2. Security
    - Enable RLS on all tables
    - Add policies for authenticated users
    - Add admin-only policies for management functions
*/

-- Create custom types
CREATE TYPE user_role AS ENUM ('admin', 'member');

-- Companies table
CREATE TABLE IF NOT EXISTS companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  industry text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Users table (extends Supabase auth.users)
CREATE TABLE IF NOT EXISTS users (
  id uuid PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  first_name text NOT NULL,
  last_name text NOT NULL,
  email text UNIQUE NOT NULL,
  role user_role DEFAULT 'member',
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Questionnaire responses
CREATE TABLE IF NOT EXISTS questionnaire_responses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES users(id) ON DELETE CASCADE NOT NULL,
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE NOT NULL,
  response_data jsonb NOT NULL,
  completed_at timestamptz,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Scorecards
CREATE TABLE IF NOT EXISTS scorecards (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  questionnaire_response_id uuid REFERENCES questionnaire_responses(id) ON DELETE CASCADE NOT NULL,
  scorecard_data jsonb NOT NULL,
  generated_at timestamptz DEFAULT now(),
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Benchmarks
CREATE TABLE IF NOT EXISTS benchmarks (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  industry text NOT NULL,
  metric_name text NOT NULL,
  metric_value decimal NOT NULL,
  metric_unit text NOT NULL,
  flow_type text NOT NULL,
  description text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE companies ENABLE ROW LEVEL SECURITY;
ALTER TABLE users ENABLE ROW LEVEL SECURITY;
ALTER TABLE questionnaire_responses ENABLE ROW LEVEL SECURITY;
ALTER TABLE scorecards ENABLE ROW LEVEL SECURITY;
ALTER TABLE benchmarks ENABLE ROW LEVEL SECURITY;

-- Companies policies
CREATE POLICY "Users can read their own company"
  ON companies
  FOR SELECT
  TO authenticated
  USING (id IN (
    SELECT company_id FROM users WHERE id = auth.uid()
  ));

CREATE POLICY "Admins can manage companies"
  ON companies
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() AND role = 'admin'
  ));

-- Users policies
CREATE POLICY "Users can read their own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (id = auth.uid());

CREATE POLICY "Users can update their own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (id = auth.uid());

CREATE POLICY "Admins can manage all users"
  ON users
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() AND role = 'admin'
  ));

-- Questionnaire responses policies
CREATE POLICY "Users can manage their own responses"
  ON questionnaire_responses
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid());

CREATE POLICY "Admins can read all responses"
  ON questionnaire_responses
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() AND role = 'admin'
  ));

-- Scorecards policies
CREATE POLICY "Users can read their own scorecards"
  ON scorecards
  FOR SELECT
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM questionnaire_responses qr
    WHERE qr.id = questionnaire_response_id AND qr.user_id = auth.uid()
  ));

CREATE POLICY "Users can create their own scorecards"
  ON scorecards
  FOR INSERT
  TO authenticated
  WITH CHECK (EXISTS (
    SELECT 1 FROM questionnaire_responses qr
    WHERE qr.id = questionnaire_response_id AND qr.user_id = auth.uid()
  ));

CREATE POLICY "Admins can manage all scorecards"
  ON scorecards
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() AND role = 'admin'
  ));

-- Benchmarks policies (read-only for regular users, admin-only for modifications)
CREATE POLICY "Anyone can read benchmarks"
  ON benchmarks
  FOR SELECT
  TO authenticated
  USING (true);

CREATE POLICY "Admins can manage benchmarks"
  ON benchmarks
  FOR ALL
  TO authenticated
  USING (EXISTS (
    SELECT 1 FROM users 
    WHERE id = auth.uid() AND role = 'admin'
  ));

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ language 'plpgsql';

-- Add updated_at triggers
CREATE TRIGGER update_companies_updated_at BEFORE UPDATE ON companies FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_users_updated_at BEFORE UPDATE ON users FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_questionnaire_responses_updated_at BEFORE UPDATE ON questionnaire_responses FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_scorecards_updated_at BEFORE UPDATE ON scorecards FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_benchmarks_updated_at BEFORE UPDATE ON benchmarks FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();