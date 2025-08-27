/*
  # Populate Benchmarks Table with CSV Data
  
  1. Data Source
    - Uses data from existing CSV files in the project
    - All benchmark metrics for different flow types
    
  2. Flow Types
    - Abandoned Cart Flows
    - All Browse Abandonment Flows  
    - All Flows
    - Sunset Flow
    - Onboarding Flows
    
  3. Metrics
    - Open Rate, Click Rate, Click Through Rate (as percentages)
    - Revenue Per Recipient (as dollar amounts)
    - Bounce Rate, Unsubscribe Rate, Spam Complaint Rate (as percentages)
*/

-- Clear existing benchmark data
DELETE FROM benchmarks;

-- Insert Abandoned Cart Flows benchmarks
INSERT INTO benchmarks (flow_type, metric_name, metric_value, metric_unit, description) VALUES
('Abandoned Cart Flows', 'Bounce Rate', 0.78, '%', 'Email bounce rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Click Rate', 4.00, '%', 'Email click rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Click Through Rate', 10.42, '%', 'Email click through rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Open Rate', 42.48, '%', 'Email open rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Placed Order Rate', 2.04, '%', 'Placed order rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Revenue Per Recipient', 1.71, '$', 'Revenue per recipient for abandoned cart flows'),
('Abandoned Cart Flows', 'Spam Complaint Rate', 0.01, '%', 'Spam complaint rate for abandoned cart flows'),
('Abandoned Cart Flows', 'Unsubscribe Rate', 0.39, '%', 'Unsubscribe rate for abandoned cart flows');

-- Insert All Browse Abandonment Flows benchmarks
INSERT INTO benchmarks (flow_type, metric_name, metric_value, metric_unit, description) VALUES
('All Browse Abandonment Flows', 'Bounce Rate', 0.21, '%', 'Email bounce rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Click Rate', 3.80, '%', 'Email click rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Click Through Rate', 7.71, '%', 'Email click through rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Open Rate', 52.38, '%', 'Email open rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Placed Order Rate', 0.75, '%', 'Placed order rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Revenue Per Recipient', 0.62, '$', 'Revenue per recipient for browse abandonment flows'),
('All Browse Abandonment Flows', 'Spam Complaint Rate', 0.01, '%', 'Spam complaint rate for browse abandonment flows'),
('All Browse Abandonment Flows', 'Unsubscribe Rate', 0.29, '%', 'Unsubscribe rate for browse abandonment flows');

-- Insert All Flows benchmarks
INSERT INTO benchmarks (flow_type, metric_name, metric_value, metric_unit, description) VALUES
('All Flows', 'Bounce Rate', 0.73, '%', 'Email bounce rate for all flows'),
('All Flows', 'Click Rate', 3.65, '%', 'Email click rate for all flows'),
('All Flows', 'Click Through Rate', 8.59, '%', 'Email click through rate for all flows'),
('All Flows', 'Open Rate', 45.96, '%', 'Email open rate for all flows'),
('All Flows', 'Placed Order Rate', 1.12, '%', 'Placed order rate for all flows'),
('All Flows', 'Revenue Per Recipient', 0.95, '$', 'Revenue per recipient for all flows'),
('All Flows', 'Spam Complaint Rate', 0.01, '%', 'Spam complaint rate for all flows'),
('All Flows', 'Unsubscribe Rate', 0.58, '%', 'Unsubscribe rate for all flows');

-- Insert Sunset Flow benchmarks
INSERT INTO benchmarks (flow_type, metric_name, metric_value, metric_unit, description) VALUES
('Sunset Flow', 'Bounce Rate', 0.37, '%', 'Email bounce rate for sunset flows'),
('Sunset Flow', 'Click Rate', 0.58, '%', 'Email click rate for sunset flows'),
('Sunset Flow', 'Click Through Rate', 4.64, '%', 'Email click through rate for sunset flows'),
('Sunset Flow', 'Open Rate', 12.50, '%', 'Email open rate for sunset flows'),
('Sunset Flow', 'Revenue Per Recipient', 0.02, '$', 'Revenue per recipient for sunset flows'),
('Sunset Flow', 'Spam Complaint Rate', 0.01, '%', 'Spam complaint rate for sunset flows'),
('Sunset Flow', 'Unsubscribe Rate', 0.47, '%', 'Unsubscribe rate for sunset flows');

-- Insert Onboarding Flows benchmarks
INSERT INTO benchmarks (flow_type, metric_name, metric_value, metric_unit, description) VALUES
('Onboarding Flows', 'Bounce Rate', 0.73, '%', 'Email bounce rate for onboarding flows'),
('Onboarding Flows', 'Click Rate', 4.33, '%', 'Email click rate for onboarding flows'),
('Onboarding Flows', 'Click Through Rate', 9.79, '%', 'Email click through rate for onboarding flows'),
('Onboarding Flows', 'Open Rate', 48.21, '%', 'Email open rate for onboarding flows'),
('Onboarding Flows', 'Placed Order Rate', 1.77, '%', 'Placed order rate for onboarding flows'),
('Onboarding Flows', 'Revenue Per Recipient', 1.50, '$', 'Revenue per recipient for onboarding flows'),
('Onboarding Flows', 'Spam Complaint Rate', 0.01, '%', 'Spam complaint rate for onboarding flows'),
('Onboarding Flows', 'Unsubscribe Rate', 0.79, '%', 'Unsubscribe rate for onboarding flows');