import React from 'react';
import { Zap } from 'lucide-react';
import { QuestionnaireData } from '../types/leadNurture';

interface QuickTestButtonProps {
  onTestData: (data: QuestionnaireData) => void;
}

export const QuickTestButton: React.FC<QuickTestButtonProps> = ({ onTestData }) => {
  const handleQuickTest = () => {
    const testData: QuestionnaireData = {
      businessName: 'LifecycleOS Admin',
      firstName: 'Craig',
      lastName: 'Admin',
      email: 'craig+admin@growthminded.co',
      industry: 'fitness',
      bookingAdvance: 'short',
      serviceFrequency: 'regular',
      seasonalPatterns: 'steady',
      decisionTimeline: 'quick',
      communicationPreference: 'email-sms',
      conversionGoal: 'first-booking',
      serviceNewness: 'well-known',
      upsellOpportunities: 'service-and-product',
      customerJourney: 'Admin testing data for system functionality and user experience validation.',
      customerLifetimeValue: 'Admin account for system management and testing purposes.',
      brandVoice: 'Professional administrative interface for managing LifecycleOS platform.',
      competitiveDifferentiation: 'Administrative access to all system features and user management.',
      customerFeedback: 'Admin feedback and system testing data collection.'
    };
    
    onTestData(testData);
  };

  return (
    <button
      onClick={handleQuickTest}
      className="fixed bottom-6 right-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 flex items-center space-x-2 z-50 font-medium"
    >
      <Zap className="w-5 h-5" />
      <span>Quick Test Scorecard</span>
    </button>
  );
};