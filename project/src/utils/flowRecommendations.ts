import { QuestionnaireData } from '../types/leadNurture';

export interface FlowRecommendation {
  name: string;
  exists: boolean;
  emailTouchpoints: number;
  smsTouchpoints: number;
  timeBetweenTouchpoints: string;
  totalDuration: string;
  exitRules: string;
  priority: 'High' | 'Medium' | 'Low';
  description: string;
  keyMetrics: {
    openRate: number;
    clickRate: number;
    conversionRate: number;
    revenuePerRecipient: number;
  };
}

export const getFlowRecommendations = (data: QuestionnaireData): FlowRecommendation[] => {
  const flows: FlowRecommendation[] = [];

  // Welcome/Onboarding Flow
  flows.push({
    name: 'Welcome/Onboarding',
    exists: false, // Assume doesn't exist for new users
    emailTouchpoints: data.serviceFrequency === 'high' ? 4 : data.serviceFrequency === 'regular' ? 5 : 6,
    smsTouchpoints: data.communicationPreference === 'email-only' ? 0 : 2,
    timeBetweenTouchpoints: data.decisionTimeline === 'impulse' ? '2-6 hours' : '1-2 days',
    totalDuration: data.decisionTimeline === 'impulse' ? '3-7 days' : '7-14 days',
    exitRules: 'First purchase or booking',
    priority: 'High',
    description: 'Essential for converting new subscribers into customers',
    keyMetrics: {
      openRate: 48.2,
      clickRate: 4.3,
      conversionRate: 1.8,
      revenuePerRecipient: 1.50
    }
  });

  // Lead Nurture Flow
  flows.push({
    name: 'Lead Nurture',
    exists: false,
    emailTouchpoints: data.serviceFrequency === 'high' ? 5 : data.serviceFrequency === 'regular' ? 6 : 8,
    smsTouchpoints: data.communicationPreference === 'email-only' ? 0 : 
                   data.serviceFrequency === 'high' ? 4 : 3,
    timeBetweenTouchpoints: data.decisionTimeline === 'impulse' ? '6-12 hours' : 
                           data.decisionTimeline === 'quick' ? '1-2 days' : '2-3 days',
    totalDuration: data.serviceFrequency === 'high' ? '7-14 days' : 
                  data.serviceFrequency === 'regular' ? '10-14 days' : '14-21 days',
    exitRules: 'Booking, purchase, or engagement threshold',
    priority: 'High',
    description: 'Nurtures prospects who haven\'t made their first purchase yet',
    keyMetrics: {
      openRate: 46.0,
      clickRate: 3.7,
      conversionRate: 1.1,
      revenuePerRecipient: 0.95
    }
  });

  // Abandoned Cart Flow (if applicable)
  if (data.upsellOpportunities !== 'service-package') {
    flows.push({
      name: 'Abandoned Cart',
      exists: false,
      emailTouchpoints: 3,
      smsTouchpoints: data.communicationPreference === 'email-only' ? 0 : 2,
      timeBetweenTouchpoints: '2-6 hours initially, then 1-2 days',
      totalDuration: '7-10 days',
      exitRules: 'Purchase completion or cart expiry',
      priority: 'High',
      description: 'Recovers abandoned purchases and bookings',
      keyMetrics: {
        openRate: 42.5,
        clickRate: 4.0,
        conversionRate: 2.0,
        revenuePerRecipient: 1.71
      }
    });
  }

  // Upsell Flow
  flows.push({
    name: 'Upsell/Cross-sell',
    exists: false,
    emailTouchpoints: data.upsellOpportunities === 'primarily-product' ? 6 : 4,
    smsTouchpoints: data.communicationPreference === 'email-only' ? 0 : 1,
    timeBetweenTouchpoints: '3-7 days',
    totalDuration: '21-30 days',
    exitRules: 'Upsell purchase or campaign completion',
    priority: data.conversionGoal === 'membership-package' ? 'High' : 'Medium',
    description: 'Increases customer lifetime value through additional purchases',
    keyMetrics: {
      openRate: 44.0,
      clickRate: 3.2,
      conversionRate: 0.8,
      revenuePerRecipient: 0.65
    }
  });

  // Sunset/Re-engagement Flow
  flows.push({
    name: 'Sunset/Re-engagement',
    exists: false,
    emailTouchpoints: 4,
    smsTouchpoints: data.communicationPreference === 'email-only' ? 0 : 1,
    timeBetweenTouchpoints: '7-14 days',
    totalDuration: '30-45 days',
    exitRules: 'Re-engagement or unsubscribe',
    priority: 'Medium',
    description: 'Re-engages inactive subscribers before removing them',
    keyMetrics: {
      openRate: 38.0,
      clickRate: 2.8,
      conversionRate: 0.5,
      revenuePerRecipient: 0.25
    }
  });

  return flows;
};