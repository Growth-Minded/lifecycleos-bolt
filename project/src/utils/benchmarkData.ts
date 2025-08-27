import { supabase } from '../lib/supabase';
import { formatBenchmarkValue } from './benchmarkData';

export interface BenchmarkData {
  id: string;
  metric_name: string;
  metric_value: number;
  metric_unit: string;
  flow_type: string;
  description: string | null;
}

// Cache for benchmark data to avoid repeated database calls
let benchmarkCache: BenchmarkData[] | null = null;

// Load benchmark data from database
export const loadBenchmarkData = async (): Promise<BenchmarkData[]> => {
  // Always reload from database for now to ensure fresh data
  benchmarkCache = null;

  try {
    const { data, error } = await supabase
      .from('benchmarks')
      .select('*')
      .order('flow_type', { ascending: true });

    if (error) {
      console.error('Error loading benchmark data:', error);
      return [];
    }

    console.log('Loaded benchmark data from DB:', data?.length || 0, 'records');
    benchmarkCache = data || [];
    return benchmarkCache;
  } catch (error) {
    console.error('Error loading benchmark data:', error);
    return [];
  }
};

// Clear cache when data is updated
export const clearBenchmarkCache = () => {
  benchmarkCache = null;
};

// Helper function to get benchmarks by flow type
export const getBenchmarksByFlowType = async (flowType: string): Promise<BenchmarkData[]> => {
  const data = await loadBenchmarkData();
  return data.filter(item => item.flow_type === flowType);
};

// Helper function to format benchmark values
export const formatBenchmarkValue = (value: string): string => {
  // Values are already formatted in the database (e.g., "42.48%", "$1.71")
  return value;
};

// Get key metrics for scorecard display
export const getKeyMetrics = async () => {
  const allFlows = await getBenchmarksByFlowType("All Flows");
  return [
    {
      metric: "Email Open Rate",
      benchmark: allFlows.find(item => item.metric_name === "Open Rate")?.metric_value || 0,
      unit: '%'
    },
    {
      metric: "Email Click Rate", 
      benchmark: allFlows.find(item => item.metric_name === "Click Rate")?.metric_value || 0,
      unit: '%'
    },
    {
      metric: "Revenue Per Recipient",
      benchmark: allFlows.find(item => item.metric_name === "Revenue Per Recipient")?.metric_value || 0,
      unit: '$'
    },
    {
      metric: "Bounce Rate",
      benchmark: allFlows.find(item => item.metric_name === "Bounce Rate")?.metric_value || 0,
      unit: '%'
    }
  ];
};

// Get benchmark data for specific flow and metric
export const getBenchmarkValue = async (flowType: string, metricName: string): Promise<string> => {
  const benchmarks = await getBenchmarksByFlowType(flowType);
  
  // Normalize metric name for matching
  const normalizedMetricName = metricName
    .replace('CTR', 'Click Through Rate')
    .replace('Revenue per recipient', 'Revenue Per Recipient');
  
  const benchmark = benchmarks.find(b => 
    b.metric_name.toLowerCase() === normalizedMetricName.toLowerCase()
  );
  
  if (!benchmark) return 'N/A';
  
  return benchmark.metric_value.toString();
};

// Get all unique flow types
export const getFlowTypes = async (): Promise<string[]> => {
  const data = await loadBenchmarkData();
  const flowTypes = [...new Set(data.map(item => item.flow_type))];
  return flowTypes.sort();
};

// Get all metrics for a specific flow type
export const getMetricsForFlowType = async (flowType: string): Promise<BenchmarkData[]> => {
  return await getBenchmarksByFlowType(flowType);
};