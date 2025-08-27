import React, { useState } from 'react';
import { Header } from './Header';
import { Sidebar } from './Sidebar';
import { BusinessProfile } from './BusinessProfile';
import { FlowSection } from './FlowSection';
import { UpgradeModal } from './UpgradeModal';
import { UserSettingsModal } from './UserSettingsModal';
import { AdminDashboard } from '../Admin/AdminDashboard';
import { QuestionnaireData } from '../../types/leadNurture';

interface DashboardScorecardProps {
  questionnaireData: QuestionnaireData;
  onBack: () => void;
  onUpdateData: (data: QuestionnaireData) => void;
}

export const DashboardScorecard: React.FC<DashboardScorecardProps> = ({ 
  questionnaireData, 
  onBack,
  onUpdateData 
}) => {
  const [activeSection, setActiveSection] = useState('scorecards');
  const [showUpgradeModal, setShowUpgradeModal] = useState(false);
  const [showUserSettings, setShowUserSettings] = useState(false);
  const [showAdminDash, setShowAdminDash] = useState(false);
  
  // Check if user is admin based on email
  const isAdmin = questionnaireData.email === 'craig+admin@growthminded.co' || 
                  questionnaireData.email.includes('+admin');

  const handleSectionChange = (section: string) => {
    setActiveSection(section);
  };

  const handleShowUpgrade = () => {
    setShowUpgradeModal(true);
  };

  const handleUserSettingsClick = () => {
    setShowUserSettings(true);
  };

  const handleAdminDashClick = () => {
    setShowAdminDash(true);
  };

  const handleEditProfile = () => {
    setShowUserSettings(true);
  };

  const handleSaveUserData = (data: QuestionnaireData) => {
    onUpdateData(data);
  };

  const handleSignOut = () => {
    // For now, just go back to landing page
    onBack();
  };
  // If showing admin dashboard, render it instead
  if (showAdminDash && isAdmin) {
    return <AdminDashboard />;
  }

  const renderContent = () => {
    switch (activeSection) {
      case 'user-settings':
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">User Settings</h1>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-gray-600">User settings content will be displayed here.</p>
            </div>
          </div>
        );
      
      case 'scorecards':
        return (
          <div className="p-6 space-y-6">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-bold text-gray-900">
                YourDetails: {questionnaireData.businessName}
              </h1>
            </div>

            <BusinessProfile 
              data={questionnaireData} 
              onEditProfile={handleEditProfile}
            />

            <div className="space-y-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Email Benchmark</h2>
                <p className="text-gray-600 mb-6">See how your flows perform to the industry median metrics</p>
              </div>

              <FlowSection
                title="Lead Nurture Flow"
                flowType="All Flows"
                isExpanded={true}
                onShowUpgrade={handleShowUpgrade}
              />

              <FlowSection
                title="Abandoned Cart Flow"
                flowType="All Abandoned Cart Flows"
                onShowUpgrade={handleShowUpgrade}
              />

              <FlowSection
                title="Onboarding Flow"
                flowType="All Welcome Series Flows"
                onShowUpgrade={handleShowUpgrade}
              />

              <FlowSection
                title="Upsell Flow"
                flowType="All Flows"
                onShowUpgrade={handleShowUpgrade}
              />

              <FlowSection
                title="Sunset Flow"
                flowType="All Flows"
                onShowUpgrade={handleShowUpgrade}
              />
            </div>
          </div>
        );
      
      default:
        return (
          <div className="p-6">
            <h1 className="text-2xl font-bold text-gray-900 mb-6">
              {activeSection.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase())}
            </h1>
            <div className="bg-white rounded-xl border border-gray-200 p-6">
              <p className="text-gray-600">This section is locked. Please upgrade to access this content.</p>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Sidebar
        activeSection={activeSection}
        onSectionChange={handleSectionChange}
        onShowUpgrade={handleShowUpgrade}
      />
      
      <div className="flex-1 flex flex-col">
        <Header 
          questionnaireData={questionnaireData}
          onUserSettingsClick={handleUserSettingsClick}
          onAdminDashClick={handleAdminDashClick}
          onSignOut={handleSignOut}
        />
        <main className="flex-1 overflow-y-auto">
          {renderContent()}
        </main>
      </div>

      <UpgradeModal
        isOpen={showUpgradeModal}
        onClose={() => setShowUpgradeModal(false)}
      />

      <UserSettingsModal
        isOpen={showUserSettings}
        onClose={() => setShowUserSettings(false)}
        userData={questionnaireData}
        onSave={handleSaveUserData}
      />
    </div>
  );
};