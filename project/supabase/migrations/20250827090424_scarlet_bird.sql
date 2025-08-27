/*
  # Seed Benchmark Data

  1. Insert benchmark data from CSV files
  2. Populate with industry standard metrics for different flow types
*/

-- Insert benchmark data from your CSV
INSERT INTO benchmarks (industry, metric_name, metric_value, metric_unit, flow_type, description) VALUES
-- All Abandoned Cart Flows
('ecommerce', 'Bounce Rate', 0.0078, '%', 'Abandoned Cart', 'Email bounce rate for abandoned cart flows'),
('ecommerce', 'Click Rate', 0.04, '%', 'Abandoned Cart', 'Email click rate for abandoned cart flows'),
('ecommerce', 'Click Through Rate', 0.1042, '%', 'Abandoned Cart', 'Email click through rate for abandoned cart flows'),
('ecommerce', 'Open Rate', 0.4248, '%', 'Abandoned Cart', 'Email open rate for abandoned cart flows'),
('ecommerce', 'Placed Order Rate', 0.0204, '%', 'Abandoned Cart', 'Order placement rate for abandoned cart flows'),
('ecommerce', 'Revenue Per Recipient', 1.71, '$', 'Abandoned Cart', 'Revenue per recipient for abandoned cart flows'),

-- All Welcome Series Flows
('ecommerce', 'Bounce Rate', 0.00731, '%', 'Welcome Series', 'Email bounce rate for welcome series flows'),
('ecommerce', 'Click Rate', 0.04325, '%', 'Welcome Series', 'Email click rate for welcome series flows'),
('ecommerce', 'Click Through Rate', 0.09788, '%', 'Welcome Series', 'Email click through rate for welcome series flows'),
('ecommerce', 'Open Rate', 0.48214, '%', 'Welcome Series', 'Email open rate for welcome series flows'),
('ecommerce', 'Placed Order Rate', 0.01769, '%', 'Welcome Series', 'Order placement rate for welcome series flows'),
('ecommerce', 'Revenue Per Recipient', 1.50, '$', 'Welcome Series', 'Revenue per recipient for welcome series flows'),

-- All Flows (General)
('ecommerce', 'Bounce Rate', 0.00732, '%', 'All Flows', 'Average email bounce rate across all flows'),
('ecommerce', 'Click Rate', 0.03651, '%', 'All Flows', 'Average email click rate across all flows'),
('ecommerce', 'Click Through Rate', 0.08594, '%', 'All Flows', 'Average email click through rate across all flows'),
('ecommerce', 'Open Rate', 0.45961, '%', 'All Flows', 'Average email open rate across all flows'),
('ecommerce', 'Placed Order Rate', 0.01124, '%', 'All Flows', 'Average order placement rate across all flows'),
('ecommerce', 'Revenue Per Recipient', 0.95, '$', 'All Flows', 'Average revenue per recipient across all flows'),

-- Email Campaign Performance
('ecommerce', 'Click Rate', 0.00786, '%', 'Email Campaign', 'Email click rate for campaigns'),
('ecommerce', 'Click Through Rate', 0.02115, '%', 'Email Campaign', 'Email click through rate for campaigns'),
('ecommerce', 'Open Rate', 0.41437, '%', 'Email Campaign', 'Email open rate for campaigns'),
('ecommerce', 'Revenue Per Recipient', 0.09, '$', 'Email Campaign', 'Revenue per recipient for campaigns'),

-- Fitness & Wellness specific benchmarks
('fitness', 'Bounce Rate', 0.0065, '%', 'All Flows', 'Average email bounce rate for fitness industry'),
('fitness', 'Click Rate', 0.042, '%', 'All Flows', 'Average email click rate for fitness industry'),
('fitness', 'Click Through Rate', 0.095, '%', 'All Flows', 'Average email click through rate for fitness industry'),
('fitness', 'Open Rate', 0.52, '%', 'All Flows', 'Average email open rate for fitness industry'),
('fitness', 'Placed Order Rate', 0.015, '%', 'All Flows', 'Average booking rate for fitness industry'),
('fitness', 'Revenue Per Recipient', 1.25, '$', 'All Flows', 'Average revenue per recipient for fitness industry'),

-- Beauty & Spa specific benchmarks
('beauty', 'Bounce Rate', 0.007, '%', 'All Flows', 'Average email bounce rate for beauty industry'),
('beauty', 'Click Rate', 0.038, '%', 'All Flows', 'Average email click rate for beauty industry'),
('beauty', 'Click Through Rate', 0.088, '%', 'All Flows', 'Average email click through rate for beauty industry'),
('beauty', 'Open Rate', 0.48, '%', 'All Flows', 'Average email open rate for beauty industry'),
('beauty', 'Placed Order Rate', 0.012, '%', 'All Flows', 'Average booking rate for beauty industry'),
('beauty', 'Revenue Per Recipient', 1.80, '$', 'All Flows', 'Average revenue per recipient for beauty industry');