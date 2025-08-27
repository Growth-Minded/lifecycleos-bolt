import React, { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import { LandingPage } from './components/LandingPage';
import { Questionnaire } from './components/Questionnaire';
import { DashboardScorecard } from './components/Dashboard/DashboardScorecard';
import { QuickTestButton } from './components/QuickTestButton';
import { AuthModal } from './components/Auth/AuthModal';
import { QuestionnaireData } from './types/leadNurture';

type AppStep = 'landing' | 'questionnaire' | 'scorecard';

function AppContent() {
  const [currentStep, setCurrentStep] = useState<AppStep>('landing');
  const [questionnaireData, setQuestionnaireData] = useState<QuestionnaireData | null>(null);
  const [showAuthModal, setShowAuthModal] = useState(false);
  

  const handleGetStarted = () => {
    setCurrentStep('questionnaire');
  };

  const handleQuestionnaireComplete = (data: QuestionnaireData) => {
    setQuestionnaireData(data);
    setCurrentStep('scorecard');
  };

  const handleBackToLanding = () => {
    setCurrentStep('landing');
    setQuestionnaireData(null);
  };

  const handleBackToQuestionnaire = () => {
    setCurrentStep('questionnaire');
  };

  const handleQuickTest = (data: QuestionnaireData) => {
    setQuestionnaireData(data);
    setCurrentStep('scorecard');
  };

  const handleUpdateQuestionnaireData = (data: QuestionnaireData) => {
    setQuestionnaireData(data);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Quick Test Button - only show on landing page */}
      {currentStep === 'landing' && (
        <QuickTestButton onTestData={handleQuickTest} />
      )}

      {/* Auth Modal */}
      <AuthModal 
        isOpen={showAuthModal} 
        onClose={() => setShowAuthModal(false)} 
      />

      {currentStep === 'landing' && (
        <LandingPage 
          onGetStarted={handleGetStarted} 
          onShowAuth={() => setShowAuthModal(true)}
        />
      )}

      {currentStep === 'questionnaire' && (
        <Questionnaire 
          onComplete={handleQuestionnaireComplete}
          onBack={handleBackToLanding}
        />
      )}

      {currentStep === 'scorecard' && questionnaireData && (
        <DashboardScorecard 
          questionnaireData={questionnaireData}
          onBack={handleBackToQuestionnaire}
          onUpdateData={handleUpdateQuestionnaireData}
        />
      )}
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}

export default App;