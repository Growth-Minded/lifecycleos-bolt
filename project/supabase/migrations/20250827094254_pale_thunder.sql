/*
  # Populate benchmarks table with CSV data

  1. New Data
    - Populates benchmarks table with data from existing CSV files
    - Includes all flow types: Abandoned Cart, All Flows, Onboarding, Sunset, Browse Abandonment
    - All metrics with proper formatting for percentages and currency

  2. Data Structure
    - flow_type: The benchmark category (e.g., "Abandoned Cart Flows")
    - metric_name: The specific metric (e.g., "Open Rate")
    - metric_value: The numeric value (converted to decimal for percentages)
    - metric_unit: The unit (%, $, or empty)
    - description: Optional description field
*/

-- Clear existing benchmark data
DELETE FROM benchmarks;

-- Insert benchmark data from CSV files
INSERT INTO benchmarks (flow_type, metric_name, metric_value, metric_unit, description) VALUES
-- Abandoned Cart Flows
('Abandoned Cart Flows', 'Bounce Rate', 0.0078, '%', 'Email bounce rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Click Rate', 0.04, '%', 'Email click rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Click Through Rate', 0.1042, '%', 'Email click through rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Open Rate', 0.4248, '%', 'Email open rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Placed Order Rate', 0.0204, '%', 'Order placement rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Revenue Per Recipient', 1.71, '$', 'Revenue per recipient for abandoned cart flows'),
('Abandoned Cart Flows', 'Spam Complaint Rate', 0.0001, '%', 'Spam complaint rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Unsubscribe Rate', 0.0039, '%', 'Unsubscribe rate for abandoned cart flows'),

-- All Browse Abandonment Flows
('All Browse Abandonment Flows', 'Bounce Rate', 0.00212, '%', 'Email bounce rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Click Rate', 0.03797, '%', 'Email click rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Click Through Rate', 0.07708, '%', 'Email click through rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Open Rate', 0.52381, '%', 'Email open rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Placed Order Rate', 0.00752, '%', 'Order placement rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Revenue Per Recipient', 0.62, '$', 'Revenue per recipient for browse abandonment flows'),
('All Browse Abandonment Flows', 'Spam Complaint Rate', 0.0001, '%', 'Spam complaint rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Unsubscribe Rate', 0.00294, '%', 'Unsubscribe rate for browse abandonment flows'),

-- All Flows
('All Flows', 'Bounce Rate', 0.00732, '%', 'Email bounce rate for all flows'),
('All Flows', 'Click Rate', 0.03651, '%', 'Email click rate for all flows'),
('All Flows', 'Click Through Rate', 0.08594, '%', 'Email click through rate for all flows'),
('All Flows', 'Open Rate', 0.45961, '%', 'Email open rate for all flows'),
('All Flows', 'Placed Order Rate', 0.01124, '%', 'Order placement rate for all flows'),
('All Flows', 'Revenue Per Recipient', 0.95, '$', 'Revenue per recipient for all flows'),
('All Flows', 'Spam Complaint Rate', 0.0001, '%', 'Spam complaint rate for all flows'),
('All Flows', 'Unsubscribe Rate', 0.00576, '%', 'Unsubscribe rate for all flows'),

-- Sunset Flow
('Sunset Flow', 'Bounce Rate', 0.00367, '%', 'Email bounce rate for sunset flows'),
('Sunset Flow', 'Click Rate', 0.0058, '%', 'Email click rate for sunset flows'),
('Sunset Flow', 'Click Through Rate', 0.0464, '%', 'Email click through rate for sunset flows'),
('Sunset Flow', 'Open Rate', 0.125, '%', 'Email open rate for sunset flows'),
('Sunset Flow', 'Revenue Per Recipient', 0.02, '$', 'Revenue per recipient for sunset flows'),
('Sunset Flow', 'Spam Complaint Rate', 0.0001, '%', 'Spam complaint rate for sunset flows'),
('Sunset Flow', 'Unsubscribe Rate', 0.00467, '%', 'Unsubscribe rate for sunset flows'),

-- Onboarding Flows
('Onboarding Flows', 'Bounce Rate', 0.00731, '%', 'Email bounce rate for onboarding flows'),
('Onboarding Flows', 'Click Rate', 0.04325, '%', 'Email click rate for onboarding flows'),
('Onboarding Flows', 'Click Through Rate', 0.09788, '%', 'Email click through rate for onboarding flows'),
('Onboarding Flows', 'Open Rate', 0.48214, '%', 'Email open rate for onboarding flows'),
('Onboarding Flows', 'Placed Order Rate', 0.01769, '%', 'Order placement rate for onboarding flows'),
('Onboarding Flows', 'Revenue Per Recipient', 1.50, '$', 'Revenue per recipient for onboarding flows'),
('Onboarding Flows', 'Spam Complaint Rate', 0.0001, '%', 'Spam complaint rate for onboarding flows'),
('Onboarding Flows', 'Unsubscribe Rate', 0.00786, '%', 'Unsubscribe rate for onboarding flows');