import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Scorecard } from '../Scorecard';
import { QuestionnaireData } from '../../types/leadNurture';

// Mock test data that matches the QuickTestButton data
const mockQuestionnaireData: QuestionnaireData = {
  businessName: 'Zen Wellness Studio',
  firstName: 'Sarah',
  lastName: 'Johnson',
  email: 'sarah@zenwellness.com',
  industry: 'fitness',
  bookingAdvance: 'short',
  serviceFrequency: 'regular',
  seasonalPatterns: 'steady',
  decisionTimeline: 'quick',
  communicationPreference: 'email-sms',
  conversionGoal: 'first-booking',
  serviceNewness: 'well-known',
  upsellOpportunities: 'service-and-product',
  customerJourney: 'Customers typically discover us through social media and Google searches.',
  customerLifetimeValue: 'A profitable customer attends 2-3 classes per week.',
  brandVoice: 'We position ourselves as accessible wellness for busy professionals.',
  competitiveDifferentiation: 'We offer hybrid yoga-fitness classes.',
  customerFeedback: 'Common questions about class difficulty and beginner options.'
};

describe('Scorecard Component', () => {
  const mockOnBack = () => {};

  it('renders business name in header', () => {
    render(<Scorecard questionnaireData={mockQuestionnaireData} onBack={mockOnBack} />);
    expect(screen.getByText('Zen Wellness Studio Lifecycle Marketing Scorecard')).toBeInTheDocument();
  });

  it('displays industry information', () => {
    render(<Scorecard questionnaireData={mockQuestionnaireData} onBack={mockOnBack} />);
    expect(screen.getByText(/fitness/i)).toBeInTheDocument();
  });

  it('shows business overview cards', () => {
    render(<Scorecard questionnaireData={mockQuestionnaireData} onBack={mockOnBack} />);
    expect(screen.getByText('Service Frequency')).toBeInTheDocument();
    expect(screen.getByText('Decision Timeline')).toBeInTheDocument();
    expect(screen.getByText('Communication')).toBeInTheDocument();
    expect(screen.getByText('Primary Goal')).toBeInTheDocument();
  });

  it('displays performance benchmarks', () => {
    render(<Scorecard questionnaireData={mockQuestionnaireData} onBack={mockOnBack} />);
    expect(screen.getByText('Performance Benchmarks')).toBeInTheDocument();
    expect(screen.getByText('Email Open Rate')).toBeInTheDocument();
    expect(screen.getByText('Email Click Rate')).toBeInTheDocument();
    expect(screen.getByText('Revenue Per Recipient')).toBeInTheDocument();
  });

  it('shows flow recommendations', () => {
    render(<Scorecard questionnaireData={mockQuestionnaireData} onBack={mockOnBack} />);
    expect(screen.getByText('Recommended Flow Strategy')).toBeInTheDocument();
    expect(screen.getByText('Welcome/Onboarding Flow')).toBeInTheDocument();
    expect(screen.getByText('Lead Nurture Flow')).toBeInTheDocument();
    expect(screen.getByText('Upsell/Cross-sell Flow')).toBeInTheDocument();
  });

  it('displays flow tables with metrics', () => {
    render(<Scorecard questionnaireData={mockQuestionnaireData} onBack={mockOnBack} />);
    expect(screen.getByText('Email Touchpoints')).toBeInTheDocument();
    expect(screen.getByText('SMS Touchpoints')).toBeInTheDocument();
    expect(screen.getByText('Time Between Touchpoints')).toBeInTheDocument();
    expect(screen.getByText('Total Duration')).toBeInTheDocument();
    expect(screen.getByText('Exit Rules')).toBeInTheDocument();
  });

  it('shows priority indicators', () => {
    render(<Scorecard questionnaireData={mockQuestionnaireData} onBack={mockOnBack} />);
    expect(screen.getByText('High Priority')).toBeInTheDocument();
    expect(screen.getByText('Medium Priority')).toBeInTheDocument();
  });
});