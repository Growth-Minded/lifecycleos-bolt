/*
  # Remove industry field from benchmarks table

  1. Changes
    - Remove industry column from benchmarks table
    - Update any references to industry field
  
  2. Notes
    - Preparing for new CSV data upload
    - Simplifying benchmark structure
*/

-- Remove industry column from benchmarks table
ALTER TABLE benchmarks DROP COLUMN IF EXISTS industry;