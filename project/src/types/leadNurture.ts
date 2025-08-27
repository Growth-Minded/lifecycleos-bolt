export interface QuestionnaireData {
  businessName: string;
  firstName: string;
  lastName: string;
  email: string;
  industry: string;
  bookingAdvance: 'immediate' | 'short' | 'medium' | 'long';
  serviceFrequency: 'high' | 'regular' | 'monthly' | 'seasonal';
  seasonalPatterns: 'high-demand' | 'steady' | 'event-driven';
  decisionTimeline: 'impulse' | 'quick' | 'considered' | 'research-heavy';
  communicationPreference: 'email-only' | 'email-sms';
  conversionGoal: 'first-booking' | 'membership-package';
  serviceNewness: 'brand-new' | 'known-with-innovation' | 'well-known';
  upsellOpportunities: 'service-package' | 'service-and-product' | 'primarily-product';
  customerJourney: string;
  customerLifetimeValue: string;
  brandVoice: string;
  competitiveDifferentiation: string;
  customerFeedback: string;
}

// Types for future admin functionality
export interface Company {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface User {
  id: string;
  companyId: string;
  firstName: string;
  lastName: string;
  email: string;
  role: 'admin' | 'member';
  createdAt: Date;
  updatedAt: Date;
}

export interface Benchmark {
  id: string;
  industry: string;
  metric: string;
  value: number;
  unit: string;
  description: string;
}

export interface FlowMapping {
  id: string;
  name: string;
  conditions: Record<string, any>;
  steps: string[];
  exitRules: string[];
  businessLogic: Record<string, any>;
}