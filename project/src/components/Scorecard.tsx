import React from 'react';
import { ArrowLeft, Download, Calendar, TrendingUp, Target, Mail, MessageSquare, Clock, Users, CheckCircle, AlertCircle, XCircle } from 'lucide-react';
import { QuestionnaireData } from '../types/leadNurture';
import { getKeyMetrics } from '../utils/benchmarkData';
import { getFlowRecommendations } from '../utils/flowRecommendations';

interface ScorecardProps {
  questionnaireData: QuestionnaireData;
  onBack: () => void;
}

export const Scorecard: React.FC<ScorecardProps> = ({ questionnaireData, onBack }) => {
  const keyMetrics = getKeyMetrics();
  const flowRecommendations = getFlowRecommendations(questionnaireData);

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-600 bg-red-50 border-red-200';
      case 'Medium': return 'text-yellow-600 bg-yellow-50 border-yellow-200';
      case 'Low': return 'text-green-600 bg-green-50 border-green-200';
      default: return 'text-gray-600 bg-gray-50 border-gray-200';
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back</span>
            </button>
            <div className="flex space-x-3">
              <button className="flex items-center space-x-2 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors">
                <Download className="w-4 h-4" />
                <span>Download PDF</span>
              </button>
              <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <Calendar className="w-4 h-4" />
                <span>Schedule Consultation</span>
              </button>
            </div>
          </div>
          
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              {questionnaireData.businessName} Lifecycle Marketing Scorecard
            </h1>
            <p className="text-gray-600 text-lg">
              Personalized recommendations for your {questionnaireData.industry.replace('-', ' ')} business
            </p>
          </div>
        </div>

        {/* Business Overview */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">Business Overview</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Clock className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Service Frequency</h3>
              <p className="text-sm text-gray-600 capitalize">{questionnaireData.serviceFrequency.replace('-', ' ')}</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Decision Timeline</h3>
              <p className="text-sm text-gray-600 capitalize">{questionnaireData.decisionTimeline.replace('-', ' ')}</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-xl">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <MessageSquare className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Communication</h3>
              <p className="text-sm text-gray-600">{questionnaireData.communicationPreference === 'email-only' ? 'Email Only' : 'Email + SMS'}</p>
            </div>
            <div className="text-center p-4 bg-orange-50 rounded-xl">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-1">Primary Goal</h3>
              <p className="text-sm text-gray-600 capitalize">{questionnaireData.conversionGoal.replace('-', ' ')}</p>
            </div>
          </div>
        </div>

        {/* Performance Benchmarks */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 mb-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold text-gray-900">Performance Benchmarks</h2>
            <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-full">Industry: {questionnaireData.industry.replace('-', ' ')}</span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {keyMetrics.map((benchmark, index) => {
              const colors = ['blue', 'green', 'purple', 'orange'];
              const color = colors[index % colors.length];
              
              return (
                <div key={index} className="relative">
                  <div className={`bg-${color}-50 border border-${color}-100 rounded-xl p-6`}>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-semibold text-gray-900 text-sm">{benchmark.metric}</h3>
                      <div className={`w-8 h-8 bg-${color}-100 rounded-full flex items-center justify-center`}>
                        <TrendingUp className={`w-4 h-4 text-${color}-600`} />
                      </div>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600">Industry Benchmark</span>
                          <span className={`text-xs text-${color}-600 font-medium`}>Target</span>
                        </div>
                        <div className={`text-2xl font-bold text-${color}-600`}>
                          {benchmark.unit === '$' ? '$' : ''}{benchmark.unit === '%' ? (benchmark.benchmark * 100).toFixed(1) : benchmark.benchmark.toFixed(2)}{benchmark.unit === '%' ? '%' : ''}
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-xs text-gray-600">Your Current</span>
                          <span className="text-xs text-gray-400">Not provided</span>
                        </div>
                        <div className="text-lg font-semibold text-gray-400">--</div>
                      </div>
                      
                      <div className="pt-2 border-t border-gray-200">
                        <div className="flex items-center space-x-2">
                          <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
                          <span className="text-xs text-gray-500">Gap analysis needed</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flow Recommendations */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-900">Recommended Flow Strategy</h2>
          
          {flowRecommendations.map((flow, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{flow.name} Flow</h3>
                    <p className="text-gray-600 mb-3">{flow.description}</p>
                    <div className="flex items-center space-x-4">
                      <div className="flex items-center space-x-2">
                        {flow.exists ? (
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        ) : (
                          <XCircle className="w-4 h-4 text-red-600" />
                        )}
                        <span className="text-sm text-gray-600">
                          {flow.exists ? 'Currently Active' : 'Not Implemented'}
                        </span>
                      </div>
                      <div className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(flow.priority)}`}>
                        {flow.priority} Priority
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Flow Details Table */}
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Metric</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Recommended</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Industry Benchmark</th>
                      <th className="text-left py-3 px-4 font-medium text-gray-700">Your Current</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-900">Email Touchpoints</td>
                      <td className="py-3 px-4 text-sm font-medium text-indigo-600">{flow.emailTouchpoints}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">4-8</td>
                      <td className="py-3 px-4 text-sm text-gray-400">--</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-900">SMS Touchpoints</td>
                      <td className="py-3 px-4 text-sm font-medium text-indigo-600">{flow.smsTouchpoints}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">1-3</td>
                      <td className="py-3 px-4 text-sm text-gray-400">--</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-900">Time Between Touchpoints</td>
                      <td className="py-3 px-4 text-sm font-medium text-indigo-600">{flow.timeBetweenTouchpoints}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">Varies</td>
                      <td className="py-3 px-4 text-sm text-gray-400">--</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-900">Total Duration</td>
                      <td className="py-3 px-4 text-sm font-medium text-indigo-600">{flow.totalDuration}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">7-30 days</td>
                      <td className="py-3 px-4 text-sm text-gray-400">--</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 text-sm text-gray-900">Exit Rules</td>
                      <td className="py-3 px-4 text-sm font-medium text-indigo-600">{flow.exitRules}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">Standard</td>
                      <td className="py-3 px-4 text-sm text-gray-400">--</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">Open Rate</td>
                      <td className="py-3 px-4 text-sm font-medium text-green-600">{flow.keyMetrics.openRate}%</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{flow.keyMetrics.openRate}%</td>
                      <td className="py-3 px-4 text-sm text-gray-400">--</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">Click Rate</td>
                      <td className="py-3 px-4 text-sm font-medium text-green-600">{flow.keyMetrics.clickRate}%</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{flow.keyMetrics.clickRate}%</td>
                      <td className="py-3 px-4 text-sm text-gray-400">--</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">Conversion Rate</td>
                      <td className="py-3 px-4 text-sm font-medium text-green-600">{flow.keyMetrics.conversionRate}%</td>
                      <td className="py-3 px-4 text-sm text-gray-600">{flow.keyMetrics.conversionRate}%</td>
                      <td className="py-3 px-4 text-sm text-gray-400">--</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="py-3 px-4 text-sm font-medium text-gray-900">Revenue Per Recipient</td>
                      <td className="py-3 px-4 text-sm font-medium text-green-600">${flow.keyMetrics.revenuePerRecipient}</td>
                      <td className="py-3 px-4 text-sm text-gray-600">${flow.keyMetrics.revenuePerRecipient}</td>
                      <td className="py-3 px-4 text-sm text-gray-400">--</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};