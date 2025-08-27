/*
  # Populate Benchmarks Table with Industry Data

  1. Data Population
    - Populates the benchmarks table with industry median data from CSV files
    - Includes all flow types: Abandoned Cart, All Flows, Onboarding, Sunset, Browse Abandonment
    - All metrics: Open Rate, Click Rate, CTR, Revenue Per Recipient, Bounce Rate, Unsubscribe Rate
  
  2. Data Structure
    - Each benchmark has industry, metric_name, metric_value, metric_unit, flow_type
    - Values are stored as decimals (e.g., 0.4248 for 42.48%)
    - Revenue values stored as actual dollar amounts
*/

-- Clear existing benchmark data
DELETE FROM benchmarks;

-- Abandoned Cart Flows
INSERT INTO benchmarks (industry, metric_name, metric_value, metric_unit, flow_type, description) VALUES
('all', 'Open Rate', 0.4248, '%', 'Abandoned Cart Flows', 'Email open rate for abandoned cart flows'),
('all', 'Click Rate', 0.04, '%', 'Abandoned Cart Flows', 'Email click rate for abandoned cart flows'),
('all', 'Click Through Rate', 0.1042, '%', 'Abandoned Cart Flows', 'Click through rate for abandoned cart flows'),
('all', 'Revenue Per Recipient', 1.71, '$', 'Abandoned Cart Flows', 'Revenue generated per email recipient'),
('all', 'Bounce Rate', 0.0078, '%', 'Abandoned Cart Flows', 'Email bounce rate for abandoned cart flows'),
('all', 'Unsubscribe Rate', 0.0039, '%', 'Abandoned Cart Flows', 'Unsubscribe rate for abandoned cart flows'),
('all', 'Placed Order Rate', 0.0204, '%', 'Abandoned Cart Flows', 'Order placement rate from abandoned cart flows'),
('all', 'Spam Complaint Rate', 0, '%', 'Abandoned Cart Flows', 'Spam complaint rate for abandoned cart flows');

-- All Flows
INSERT INTO benchmarks (industry, metric_name, metric_value, metric_unit, flow_type, description) VALUES
('all', 'Open Rate', 0.45961, '%', 'All Flows', 'Email open rate across all flow types'),
('all', 'Click Rate', 0.03651, '%', 'All Flows', 'Email click rate across all flow types'),
('all', 'Click Through Rate', 0.08594, '%', 'All Flows', 'Click through rate across all flow types'),
('all', 'Revenue Per Recipient', 0.95, '$', 'All Flows', 'Revenue generated per email recipient across all flows'),
('all', 'Bounce Rate', 0.00732, '%', 'All Flows', 'Email bounce rate across all flow types'),
('all', 'Unsubscribe Rate', 0.00576, '%', 'All Flows', 'Unsubscribe rate across all flow types'),
('all', 'Placed Order Rate', 0.01124, '%', 'All Flows', 'Order placement rate across all flows'),
('all', 'Spam Complaint Rate', 0, '%', 'All Flows', 'Spam complaint rate across all flows');

-- Onboarding Flows (Welcome Series)
INSERT INTO benchmarks (industry, metric_name, metric_value, metric_unit, flow_type, description) VALUES
('all', 'Open Rate', 0.48214, '%', 'Onboarding Flows', 'Email open rate for onboarding/welcome flows'),
('all', 'Click Rate', 0.04325, '%', 'Onboarding Flows', 'Email click rate for onboarding/welcome flows'),
('all', 'Click Through Rate', 0.09788, '%', 'Onboarding Flows', 'Click through rate for onboarding/welcome flows'),
('all', 'Revenue Per Recipient', 1.50, '$', 'Onboarding Flows', 'Revenue generated per email recipient in onboarding'),
('all', 'Bounce Rate', 0.00731, '%', 'Onboarding Flows', 'Email bounce rate for onboarding/welcome flows'),
('all', 'Unsubscribe Rate', 0.00786, '%', 'Onboarding Flows', 'Unsubscribe rate for onboarding/welcome flows'),
('all', 'Placed Order Rate', 0.01769, '%', 'Onboarding Flows', 'Order placement rate from onboarding flows'),
('all', 'Spam Complaint Rate', 0, '%', 'Onboarding Flows', 'Spam complaint rate for onboarding flows');

-- Sunset Flow
INSERT INTO benchmarks (industry, metric_name, metric_value, metric_unit, flow_type, description) VALUES
('all', 'Open Rate', 0.125, '%', 'Sunset Flow', 'Email open rate for sunset/re-engagement flows'),
('all', 'Click Rate', 0.0058, '%', 'Sunset Flow', 'Email click rate for sunset/re-engagement flows'),
('all', 'Click Through Rate', 0.0464, '%', 'Sunset Flow', 'Click through rate for sunset/re-engagement flows'),
('all', 'Revenue Per Recipient', 0.02, '$', 'Sunset Flow', 'Revenue generated per email recipient in sunset flows'),
('all', 'Bounce Rate', 0.00367, '%', 'Sunset Flow', 'Email bounce rate for sunset/re-engagement flows'),
('all', 'Unsubscribe Rate', 0.00467, '%', 'Sunset Flow', 'Unsubscribe rate for sunset/re-engagement flows'),
('all', 'Spam Complaint Rate', 0.0001, '%', 'Sunset Flow', 'Spam complaint rate for sunset flows');

-- Browse Abandonment Flows
INSERT INTO benchmarks (industry, metric_name, metric_value, metric_unit, flow_type, description) VALUES
('all', 'Open Rate', 0.52381, '%', 'Browse Abandonment Flows', 'Email open rate for browse abandonment flows'),
('all', 'Click Rate', 0.03797, '%', 'Browse Abandonment Flows', 'Email click rate for browse abandonment flows'),
('all', 'Click Through Rate', 0.07708, '%', 'Browse Abandonment Flows', 'Click through rate for browse abandonment flows'),
('all', 'Revenue Per Recipient', 0.62, '$', 'Browse Abandonment Flows', 'Revenue generated per email recipient in browse abandonment'),
('all', 'Bounce Rate', 0.00212, '%', 'Browse Abandonment Flows', 'Email bounce rate for browse abandonment flows'),
('all', 'Unsubscribe Rate', 0.00294, '%', 'Browse Abandonment Flows', 'Unsubscribe rate for browse abandonment flows'),
('all', 'Placed Order Rate', 0.00752, '%', 'Browse Abandonment Flows', 'Order placement rate from browse abandonment flows'),
('all', 'Spam Complaint Rate', 0, '%', 'Browse Abandonment Flows', 'Spam complaint rate for browse abandonment flows');