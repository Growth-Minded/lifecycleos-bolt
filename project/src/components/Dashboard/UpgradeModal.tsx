import React from 'react';
import { X, Crown, Check } from 'lucide-react';

interface UpgradeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UpgradeModal: React.FC<UpgradeModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const features = [
    'Custom performance scoring',
    'Detailed flow recommendations',
    'Industry benchmark comparisons',
    'Flow mapping and content generation',
    'Advanced analytics and insights',
    'Priority customer support'
  ];

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <h2 className="text-xl font-bold text-gray-900">Upgrade to Pro</h2>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="text-center mb-6">
            <p className="text-gray-600 mb-4">
              Unlock advanced features and get personalized recommendations for your business.
            </p>
            
            <div className="bg-gradient-to-r from-blue-50 to-teal-50 rounded-xl p-6 mb-6">
              <div className="text-3xl font-bold text-gray-900 mb-1">$99</div>
              <div className="text-gray-600">per month</div>
            </div>
          </div>

          <div className="space-y-3 mb-6">
            {features.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-green-600" />
                </div>
                <span className="text-gray-700">{feature}</span>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <button className="w-full bg-gradient-to-r from-blue-600 to-teal-600 text-white py-3 px-4 rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all font-medium">
              Upgrade Now
            </button>
            <button
              onClick={onClose}
              className="w-full text-gray-600 hover:text-gray-800 transition-colors"
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};