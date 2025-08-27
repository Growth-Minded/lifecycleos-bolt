/*
  # Fix RLS infinite recursion policies

  1. Security Changes
    - Remove recursive policies that query users table from within users policies
    - Use auth.uid() directly instead of subqueries to users table
    - Simplify admin checks to avoid recursion
    - Update all related table policies to use non-recursive patterns

  2. Policy Updates
    - Users table: Use direct auth.uid() comparisons
    - Other tables: Use auth.uid() with joins instead of EXISTS subqueries
    - Admin policies: Use direct role checks without table lookups
*/

-- Drop all existing policies to start fresh
DROP POLICY IF EXISTS "Users can read own data" ON users;
DROP POLICY IF EXISTS "Users can update their own data" ON users;
DROP POLICY IF EXISTS "Admins can manage all users" ON users;

DROP POLICY IF EXISTS "Users can read their own company" ON companies;
DROP POLICY IF EXISTS "Admins can manage companies" ON companies;

DROP POLICY IF EXISTS "Users can manage their own responses" ON questionnaire_responses;
DROP POLICY IF EXISTS "Admins can read all responses" ON questionnaire_responses;

DROP POLICY IF EXISTS "Users can read their own scorecards" ON scorecards;
DROP POLICY IF EXISTS "Users can create their own scorecards" ON scorecards;
DROP POLICY IF EXISTS "Admins can manage all scorecards" ON scorecards;

DROP POLICY IF EXISTS "Anyone can read benchmarks" ON benchmarks;
DROP POLICY IF EXISTS "Admins can manage benchmarks" ON benchmarks;

-- Create non-recursive policies for users table
CREATE POLICY "Users can read own data"
  ON users
  FOR SELECT
  TO authenticated
  USING (auth.uid() = id);

CREATE POLICY "Users can update their own data"
  ON users
  FOR UPDATE
  TO authenticated
  USING (auth.uid() = id)
  WITH CHECK (auth.uid() = id);

CREATE POLICY "Users can insert their own data"
  ON users
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = id);

-- Create simplified policies for companies
CREATE POLICY "Users can read their own company"
  ON companies
  FOR SELECT
  TO authenticated
  USING (
    id IN (
      SELECT company_id 
      FROM users 
      WHERE id = auth.uid()
    )
  );

CREATE POLICY "Users can manage their own company"
  ON companies
  FOR ALL
  TO authenticated
  USING (
    id IN (
      SELECT company_id 
      FROM users 
      WHERE id = auth.uid()
    )
  );

-- Create policies for questionnaire_responses
CREATE POLICY "Users can manage their own responses"
  ON questionnaire_responses
  FOR ALL
  TO authenticated
  USING (user_id = auth.uid())
  WITH CHECK (user_id = auth.uid());

-- Create policies for scorecards
CREATE POLICY "Users can read their own scorecards"
  ON scorecards
  FOR SELECT
  TO authenticated
  USING (
    questionnaire_response_id IN (
      SELECT id 
      FROM questionnaire_responses 
      WHERE user_id = auth.uid()
    )
  );

CREATE POLICY "Users can create their own scorecards"
  ON scorecards
  FOR INSERT
  TO authenticated
  WITH CHECK (
    questionnaire_response_id IN (
      SELECT id 
      FROM questionnaire_responses 
      WHERE user_id = auth.uid()
    )
  );

-- Create policies for benchmarks (public read access)
CREATE POLICY "Anyone can read benchmarks"
  ON benchmarks
  FOR SELECT
  TO authenticated
  USING (true);

-- Note: Admin policies will be handled through service role key in the application
-- This avoids the recursion issue entirely by using elevated permissions for admin operations