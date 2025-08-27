import { QuestionnaireData } from '../types/leadNurture';

// Lead nurture flow mapping based on your CSV data
export interface FlowRecommendation {
  emailTouchpoints: number;
  smsTouchpoints: number;
  timeBetweenTouchpointsFirst: string;
  timeBetweenTouchpointsSecond: string;
  totalTimeToFinish: string;
  exitRules: string;
}

// Mapping logic based on your lead nurture CSV
export const getLeadNurtureRecommendation = (data: QuestionnaireData): FlowRecommendation => {
  // Service frequency mapping
  let baseRecommendation: FlowRecommendation;
  
  switch (data.serviceFrequency) {
    case 'high':
      baseRecommendation = {
        emailTouchpoints: 5,
        smsTouchpoints: 4,
        timeBetweenTouchpointsFirst: '6-12 hours',
        timeBetweenTouchpointsSecond: '1-2 days',
        totalTimeToFinish: '7-14 days',
        exitRules: 'booking / purchase'
      };
      break;
    case 'regular':
      baseRecommendation = {
        emailTouchpoints: 6,
        smsTouchpoints: 3,
        timeBetweenTouchpointsFirst: '12-48 hours',
        timeBetweenTouchpointsSecond: '1-2 days',
        totalTimeToFinish: '10-14 days',
        exitRules: 'booking / purchase'
      };
      break;
    case 'monthly':
      baseRecommendation = {
        emailTouchpoints: 7,
        smsTouchpoints: 2,
        timeBetweenTouchpointsFirst: '1-3 days',
        timeBetweenTouchpointsSecond: '2-3 days',
        totalTimeToFinish: '14-21 days',
        exitRules: 'booking / purchase'
      };
      break;
    case 'seasonal':
      baseRecommendation = {
        emailTouchpoints: 10,
        smsTouchpoints: 1,
        timeBetweenTouchpointsFirst: '1-3 days',
        timeBetweenTouchpointsSecond: '3-7 days',
        totalTimeToFinish: '30-60 days',
        exitRules: 'booking / purchase'
      };
      break;
    default:
      baseRecommendation = {
        emailTouchpoints: 6,
        smsTouchpoints: 3,
        timeBetweenTouchpointsFirst: '1-2 days',
        timeBetweenTouchpointsSecond: '1-2 days',
        totalTimeToFinish: '14-21 days',
        exitRules: 'booking / purchase'
      };
  }

  // Adjust based on decision timeline
  switch (data.decisionTimeline) {
    case 'impulse':
      baseRecommendation.emailTouchpoints = Math.max(2, baseRecommendation.emailTouchpoints - 2);
      baseRecommendation.smsTouchpoints = Math.min(6, baseRecommendation.smsTouchpoints + 2);
      baseRecommendation.timeBetweenTouchpointsFirst = '1-4 hours';
      baseRecommendation.totalTimeToFinish = '10-14 days';
      break;
    case 'research-heavy':
      baseRecommendation.emailTouchpoints = Math.min(12, baseRecommendation.emailTouchpoints + 2);
      baseRecommendation.timeBetweenTouchpointsSecond = '2-5 days';
      baseRecommendation.totalTimeToFinish = '21-45 days';
      break;
  }

  // Adjust for communication preference
  if (data.communicationPreference === 'email-only') {
    baseRecommendation.smsTouchpoints = 0;
  }

  return baseRecommendation;
};