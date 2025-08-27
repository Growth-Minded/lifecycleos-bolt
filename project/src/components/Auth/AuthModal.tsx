import React, { useState } from 'react';
import { X } from 'lucide-react';
import { LoginForm } from './LoginForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuthModal: React.FC<AuthModalProps> = ({ isOpen, onClose }) => {
  const [mode, setMode] = useState<'login' | 'signup'>('login');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-xl max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="w-6"></div> {/* Spacer */}
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {mode === 'login' ? (
            <LoginForm
              onSwitchToSignup={() => setMode('signup')}
              onClose={onClose}
            />
          ) : (
            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Create Account</h2>
              <p className="text-gray-600 mb-6">
                To create an account, please complete our questionnaire first.
              </p>
              <button
                onClick={() => setMode('login')}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Already have an account? Sign in
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};