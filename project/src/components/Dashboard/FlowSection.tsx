import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Edit, HelpCircle } from 'lucide-react';
import { getBenchmarkValue, loadBenchmarkData } from '../../utils/benchmarkData';

interface FlowSectionProps {
  title: string;
  flowType: string;
  isExpanded?: boolean;
  onShowUpgrade: () => void;
}

export const FlowSection: React.FC<FlowSectionProps> = ({ 
  title, 
  flowType, 
  isExpanded = false,
  onShowUpgrade 
}) => {
  const [expanded, setExpanded] = useState(isExpanded);
  const [benchmarkValues, setBenchmarkValues] = useState<Record<string, string>>({});

  // Load benchmark values when component mounts or expands
  React.useEffect(() => {
    if (expanded) {
      const loadBenchmarks = async () => {
        const benchmarks = await loadBenchmarkData();
        const flowBenchmarks = benchmarks.filter(b => b.flow_type === flowType);
        
        const values = {
          openRate: flowBenchmarks.find(b => b.metric_name === 'Open Rate')?.metric_value?.toString() || 'N/A',
          clickRate: flowBenchmarks.find(b => b.metric_name === 'Click Rate')?.metric_value?.toString() || 'N/A',
          ctr: flowBenchmarks.find(b => b.metric_name === 'Click Through Rate')?.metric_value?.toString() || 'N/A',
          revenue: flowBenchmarks.find(b => b.metric_name === 'Revenue Per Recipient')?.metric_value?.toString() || 'N/A',
          bounceRate: flowBenchmarks.find(b => b.metric_name === 'Bounce Rate')?.metric_value?.toString() || 'N/A',
          unsubscribeRate: flowBenchmarks.find(b => b.metric_name === 'Unsubscribe Rate')?.metric_value?.toString() || 'N/A',
        };
        setBenchmarkValues(values);
      };
      loadBenchmarks();
    }
  }, [expanded, flowType]);


  return (
    <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
      <button
        onClick={() => setExpanded(!expanded)}
        className="w-full flex items-center justify-between p-6 hover:bg-gray-50 transition-colors"
      >
        <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
        {expanded ? (
          <ChevronDown className="w-5 h-5 text-gray-500" />
        ) : (
          <ChevronRight className="w-5 h-5 text-gray-500" />
        )}
      </button>

      {expanded && (
        <div className="px-6 pb-6">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Test</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Open Rate</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Click Rate</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">CTR</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Revenue per recipient</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Bounce Rate</th>
                  <th className="text-left py-3 px-2 font-medium text-gray-700">Unsubscribe Rate</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {/* Benchmark Row */}
                <tr className="bg-blue-50">
                  <td className="py-3 px-2 font-medium text-gray-900">Benchmark</td>
                  <td className="py-3 px-2 text-gray-700">{benchmarkValues.openRate || 'Loading...'}</td>
                  <td className="py-3 px-2 text-gray-700">{benchmarkValues.clickRate || 'Loading...'}</td>
                  <td className="py-3 px-2 text-gray-700">{benchmarkValues.ctr || 'Loading...'}</td>
                  <td className="py-3 px-2 text-gray-700">{benchmarkValues.revenue || 'Loading...'}</td>
                  <td className="py-3 px-2 text-gray-700">{benchmarkValues.bounceRate || 'Loading...'}</td>
                  <td className="py-3 px-2 text-gray-700">{benchmarkValues.unsubscribeRate || 'Loading...'}</td>
                </tr>

                {/* Your Metrics Row */}
                <tr>
                  <td className="py-3 px-2 font-medium text-gray-900">Your Metrics</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index} className="py-3 px-2">
                      <div className="flex items-center space-x-2">
                        <span className="text-gray-500">N/A</span>
                        <button
                          onClick={onShowUpgrade}
                          className="text-gray-400 hover:text-gray-600 transition-colors"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  ))}
                </tr>

                {/* Your Score Row */}
                <tr className="bg-gray-50">
                  <td className="py-3 px-2 font-medium text-gray-900">Your Score</td>
                  {Array.from({ length: 6 }).map((_, index) => (
                    <td key={index} className="py-3 px-2">
                      <button
                        onClick={onShowUpgrade}
                        className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors"
                      >
                        <HelpCircle className="w-4 h-4 text-blue-600" />
                      </button>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>

          {/* Recommendations Section */}
          <div className="mt-6 p-4 bg-gray-50 rounded-lg">
            <p className="text-sm text-gray-700 mb-4">
              {title === 'Lead Nurture Flow' 
                ? "Abandoned cart flows are essential for recovering lost conversions across any business with online booking or purchasing systems. About 70% of potential customers start but don't complete their intended action - whether that's booking a consultation, enrolling in a course, or purchasing a service package. Simple automated follow-ups typically recover 10-15% of abandoned conversions with minimal effort, often delivering the highest ROI in digital marketing."
                : `${title} flows help optimize customer engagement and drive conversions through targeted messaging and strategic timing.`
              }
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Generate {title.toLowerCase()} mapping
              </button>
              <button
                onClick={onShowUpgrade}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium"
              >
                Get your custom score and recommendations
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};