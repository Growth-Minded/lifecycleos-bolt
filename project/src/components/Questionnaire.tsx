import React, { useState } from 'react';
import { ArrowRight, ArrowLeft, Building, Target, Users, MessageSquare } from 'lucide-react';
import { QuestionnaireData } from '../types/leadNurture';

interface QuestionnaireProps {
  onComplete: (data: QuestionnaireData) => void;
  onBack: () => void;
}

export const Questionnaire: React.FC<QuestionnaireProps> = ({ onComplete, onBack }) => {
  const [formData, setFormData] = useState<QuestionnaireData>({
    businessName: '',
    firstName: '',
    lastName: '',
    email: '',
    industry: '',
    bookingAdvance: 'short',
    serviceFrequency: 'regular',
    seasonalPatterns: 'steady',
    decisionTimeline: 'quick',
    communicationPreference: 'email-sms',
    conversionGoal: 'first-booking',
    serviceNewness: 'well-known',
    upsellOpportunities: 'service-package',
    customerJourney: '',
    customerLifetimeValue: '',
    brandVoice: '',
    competitiveDifferentiation: '',
    customerFeedback: ''
  });

  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 5;

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      onComplete(formData);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const updateFormData = (updates: Partial<QuestionnaireData>) => {
    setFormData(prev => ({ ...prev, ...updates }));
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return true; // All fields have defaults
      case 2:
        return true; // All fields have defaults
      case 3:
        return true; // All fields have defaults
      case 4:
        return formData.customerJourney && formData.customerLifetimeValue;
      case 5:
        return formData.businessName && formData.firstName && formData.lastName && formData.email && formData.industry;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-600">Step {currentStep} of {totalSteps}</span>
              <span className="text-sm font-medium text-gray-600">{Math.round((currentStep / totalSteps) * 100)}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-500 to-indigo-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${(currentStep / totalSteps) * 100}%` }}
              />
            </div>
          </div>

          {/* Step 1: Business Information */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-green-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Service Patterns</h2>
                <p className="text-gray-600">Help us understand your service offering</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Service frequency</label>
                <div className="space-y-2">
                  {[
                    { value: 'high', label: 'High Frequency (2+ times/week) - Fitness classes, daily services' },
                    { value: 'regular', label: 'Regular (Weekly) - Yoga, personal training, group classes' },
                    { value: 'monthly', label: 'Monthly - Facials, massage therapy, wellness treatments' },
                    { value: 'seasonal', label: 'Seasonal/Occasional - Special events, holiday services' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceFrequency"
                        value={option.value}
                        checked={formData.serviceFrequency === option.value}
                        onChange={(e) => updateFormData({ serviceFrequency: e.target.value as any })}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Seasonal patterns</label>
                <div className="space-y-2">
                  {[
                    { value: 'high-demand', label: 'High demand periods throughout the week, limited availability in certain days/times' },
                    { value: 'steady', label: 'Steady Demand: Consistent booking patterns' },
                    { value: 'event-driven', label: 'Event-Driven: Holiday rushes, special occasions' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="seasonalPatterns"
                        value={option.value}
                        checked={formData.seasonalPatterns === option.value}
                        onChange={(e) => updateFormData({ seasonalPatterns: e.target.value as any })}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Customer Decision Patterns */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MessageSquare className="w-8 h-8 text-purple-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Customer Decision Patterns</h2>
                <p className="text-gray-600">Tell us about your customer decision-making process</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Purchase decision timeline</label>
                <div className="space-y-2">
                  {[
                    { value: 'impulse', label: 'Impulse (0-2 hours) - Flash sales, walk-in availability' },
                    { value: 'quick', label: 'Quick (2-24 hours) - Beauty treatments, wellness services' },
                    { value: 'considered', label: 'Considered (1-7 days) - Membership decisions, package purchases' },
                    { value: 'research-heavy', label: 'Research-Heavy (7+ days) - High-investment services, medical aesthetics' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="decisionTimeline"
                        value={option.value}
                        checked={formData.decisionTimeline === option.value}
                        onChange={(e) => updateFormData({ decisionTimeline: e.target.value as any })}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Preferred communication channels</label>
                <div className="space-y-2">
                  {[
                    { value: 'email-only', label: 'Email only' },
                    { value: 'email-sms', label: 'Email + SMS' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="communicationPreference"
                        value={option.value}
                        checked={formData.communicationPreference === option.value}
                        onChange={(e) => updateFormData({ communicationPreference: e.target.value as any })}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Primary conversion goal</label>
                <div className="space-y-2">
                  {[
                    { value: 'first-booking', label: 'First Booking - Initial trial, foot in the door' },
                    { value: 'membership-package', label: 'Membership/Package - Recurring revenue, loyalty' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="conversionGoal"
                        value={option.value}
                        checked={formData.conversionGoal === option.value}
                        onChange={(e) => updateFormData({ conversionGoal: e.target.value as any })}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Service & Business Model */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="w-8 h-8 text-indigo-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Service & Business Model</h2>
                <p className="text-gray-600">Help us understand your service offering</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Newness of the service</label>
                <div className="space-y-2">
                  {[
                    { value: 'brand-new', label: "It's a brand new category" },
                    { value: 'known-with-innovation', label: "It's a known category with innovation to the service" },
                    { value: 'well-known', label: "It's a well known service" }
                  ].map((option) => (
                    <label key={option.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="serviceNewness"
                        value={option.value}
                        checked={formData.serviceNewness === option.value}
                        onChange={(e) => updateFormData({ serviceNewness: e.target.value as any })}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">Upsell opportunities</label>
                <div className="space-y-2">
                  {[
                    { value: 'service-package', label: 'Mainly service package' },
                    { value: 'service-and-product', label: 'Service and product' },
                    { value: 'primarily-product', label: 'Primarily product' }
                  ].map((option) => (
                    <label key={option.value} className="flex items-start space-x-3 p-3 border border-gray-200 rounded-lg hover:bg-gray-50 cursor-pointer">
                      <input
                        type="radio"
                        name="upsellOpportunities"
                        value={option.value}
                        checked={formData.upsellOpportunities === option.value}
                        onChange={(e) => updateFormData({ upsellOpportunities: e.target.value as any })}
                        className="mt-1 text-blue-600 focus:ring-blue-500"
                      />
                      <span className="text-sm text-gray-700">{option.label}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Step 4: Business Insights */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-8 h-8 text-orange-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Business Insights</h2>
                <p className="text-gray-600">Tell us more about your customers and business</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Typical customer journey *</label>
                <p className="text-sm text-gray-500 mb-2">How do they discover you? What causes hesitation?</p>
                <textarea
                  value={formData.customerJourney}
                  onChange={(e) => updateFormData({ customerJourney: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Describe how customers typically discover and engage with your business"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer lifetime value targets *</label>
                <p className="text-sm text-gray-500 mb-2">What makes a customer profitable?</p>
                <textarea
                  value={formData.customerLifetimeValue}
                  onChange={(e) => updateFormData({ customerLifetimeValue: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Describe your customer lifetime value goals and what drives profitability"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Brand voice/positioning</label>
                <p className="text-sm text-gray-500 mb-2">Premium vs accessible, clinical vs wellness-focused</p>
                <textarea
                  value={formData.brandVoice}
                  onChange={(e) => updateFormData({ brandVoice: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="Describe your brand positioning and voice"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Competitive differentiation</label>
                <p className="text-sm text-gray-500 mb-2">What sets you apart that should be highlighted?</p>
                <textarea
                  value={formData.competitiveDifferentiation}
                  onChange={(e) => updateFormData({ competitiveDifferentiation: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="What makes your business unique?"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Customer feedback</label>
                <p className="text-sm text-gray-500 mb-2">Common questions, concerns, or confusion points</p>
                <textarea
                  value={formData.customerFeedback}
                  onChange={(e) => updateFormData({ customerFeedback: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  rows={3}
                  placeholder="What questions or concerns do customers commonly have?"
                />
              </div>
            </div>
          )}

          {/* Step 5: Business & Contact Information */}
          {currentStep === 5 && (
            <div className="space-y-6">
              <div className="text-center mb-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Building className="w-8 h-8 text-blue-600" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">Business & Contact Information</h2>
                <p className="text-gray-600">Finally, let's get your contact details to create your account</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">First Name *</label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => updateFormData({ firstName: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your first name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Last Name *</label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => updateFormData({ lastName: e.target.value })}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Enter your last name"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Email *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateFormData({ email: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Business Name *</label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => updateFormData({ businessName: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your business name"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Industry *</label>
                <select
                  value={formData.industry}
                  onChange={(e) => updateFormData({ industry: e.target.value })}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                >
                  <option value="">Select your industry</option>
                  <option value="fitness">Fitness & Wellness</option>
                  <option value="beauty">Beauty & Spa</option>
                  <option value="healthcare">Healthcare</option>
                  <option value="professional-services">Professional Services</option>
                  <option value="retail">Retail</option>
                  <option value="other">Other</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={currentStep === 1 ? onBack : handlePrevious}
              className="flex items-center space-x-2 px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>{currentStep === 1 ? 'Back to Home' : 'Previous'}</span>
            </button>

            <button
              onClick={handleNext}
              disabled={!isStepValid()}
              className={`flex items-center space-x-2 px-6 py-2 rounded-lg font-medium transition-colors ${
                isStepValid()
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              <span>{currentStep === totalSteps ? 'Create Account & Generate Scorecard' : 'Next'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};