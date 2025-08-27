import React from 'react';
import { User, Shield, LogOut } from 'lucide-react';
import { QuestionnaireData } from '../../types/leadNurture';

interface HeaderProps {
  questionnaireData: QuestionnaireData;
  onUserSettingsClick: () => void;
  onAdminDashClick: () => void;
  onSignOut: () => void;
}

export const Header: React.FC<HeaderProps> = ({ 
  questionnaireData, 
  onUserSettingsClick, 
  onAdminDashClick,
  onSignOut 
}) => {
  // Check if user is admin based on email
  const isAdmin = questionnaireData.email === 'craig+admin@growthminded.co' || 
                  questionnaireData.email.includes('+admin');

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-bold text-gray-900">LifecycleOS</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Welcome back, {questionnaireData.firstName}!</span>
            <button
              onClick={onSignOut}
              className="flex items-center space-x-1 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              <span>Sign Out</span>
            </button>
          </div>
          
          {isAdmin && (
            <button
              onClick={onAdminDashClick}
              className="flex items-center space-x-2 px-3 py-2 text-sm font-medium text-blue-600 hover:text-blue-700 hover:bg-blue-50 rounded-lg transition-colors"
            >
              <Shield className="w-4 h-4" />
              <span>Admin Dash</span>
            </button>
          )}
          
          <button
            onClick={onUserSettingsClick}
            className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
          >
            <User className="w-5 h-5 text-gray-600" />
          </button>
        </div>
      </div>
    </header>
  );
};