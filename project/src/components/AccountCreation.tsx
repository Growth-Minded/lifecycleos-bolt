import React, { useState } from 'react';
import { CheckCircle, ArrowLeft, ArrowRight, Building, Mail, User } from 'lucide-react';
import { QuestionnaireData } from '../types/leadNurture';
import { useAuth } from '../contexts/AuthContext';

interface AccountCreationProps {
  questionnaireData: QuestionnaireData;
  onAccountCreated: () => void;
  onBack: () => void;
}

export const AccountCreation: React.FC<AccountCreationProps> = ({ 
  questionnaireData, 
  onAccountCreated, 
  onBack 
}) => {
  const [isCreating, setIsCreating] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const [error, setError] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const { signUp } = useAuth();

  const validatePassword = (password: string) => {
    const errors = [];
    
    if (password.length < 8) {
      errors.push('Password must be at least 8 characters long');
    }
    
    if (!/[A-Z]/.test(password)) {
      errors.push('Password must contain at least one uppercase letter');
    }
    
    if (!/[a-z]/.test(password)) {
      errors.push('Password must contain at least one lowercase letter');
    }
    
    if (!/\d/.test(password)) {
      errors.push('Password must contain at least one number');
    }
    
    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push('Password must contain at least one special character');
    }
    
    return errors;
  };
  const handleCreateAccount = async () => {
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    const passwordErrors = validatePassword(password);
    if (passwordErrors.length > 0) {
      setError(passwordErrors.join('. '));
      return;
    }

    setIsCreating(true);
    setError('');
    
    try {
      await signUp(questionnaireData.email, password, questionnaireData);
      setIsCreated(true);
      
      // Auto-proceed to scorecard after showing success
      setTimeout(() => {
        onAccountCreated();
      }, 1500);
    } catch (err: any) {
      console.error('Full signup error:', err);
      if (err.message?.includes('User already registered')) {
        setError('This email is already registered in the authentication system. Try signing in instead, or contact support if you need to reset your account.');
      } else if (err.message?.includes('Email not confirmed')) {
        setError('Please check your email and click the confirmation link before signing in.');
      } else {
        setError(`Account creation failed: ${err.message || 'Unknown error'}`);
      }
    } finally {
      setIsCreating(false);
    }
  };

  if (isCreated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-100 flex items-center justify-center py-12 px-4">
        <div className="max-w-md mx-auto bg-white rounded-2xl shadow-xl p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Account Created!</h2>
          <p className="text-gray-600 mb-6">
            Welcome to LifecycleOS! We're generating your personalized scorecard now.
          </p>
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-green-600 mx-auto"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Building className="w-8 h-8 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Create Your Account</h2>
            <p className="text-gray-600">
              You're one step away from your personalized lifecycle marketing scorecard
            </p>
          </div>

          {/* Account Summary */}
          <div className="bg-gray-50 rounded-xl p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Summary</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Company:</span>
                <span className="font-medium">{questionnaireData.businessName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <User className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Name:</span>
                <span className="font-medium">{questionnaireData.firstName} {questionnaireData.lastName}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Email:</span>
                <span className="font-medium">{questionnaireData.email}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Building className="w-4 h-4 text-gray-500" />
                <span className="text-gray-600">Industry:</span>
                <span className="font-medium capitalize">{questionnaireData.industry.replace('-', ' ')}</span>
              </div>
            </div>
          </div>

          {/* What You'll Get */}
          <div className="mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Personalized Benchmark Scorecard</p>
                  <p className="text-sm text-gray-600">See how your current performance compares to industry standards</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Custom Flow Recommendations</p>
                  <p className="text-sm text-gray-600">Get tailored email and SMS flow strategies based on your business model</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5" />
                <div>
                  <p className="font-medium text-gray-900">Implementation Roadmap</p>
                  <p className="text-sm text-gray-600">Step-by-step guidance to optimize your lifecycle marketing</p>
                </div>
              </div>
            </div>
          </div>

          {/* Password Fields */}
          <div className="space-y-4 mb-8">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Password *</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Create a password (min 8 characters, uppercase, lowercase, number, special char)"
                required
              />
              {password && (
                <div className="mt-2 space-y-1">
                  {validatePassword(password).map((error, index) => (
                    <p key={index} className="text-xs text-red-600">{error}</p>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password *</label>
              <input
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Confirm your password"
                required
              />
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-lg p-4 mb-6">
              <p className="text-red-600 text-sm">{error}</p>
            </div>
          )}

          {/* Terms */}
          <div className="bg-blue-50 rounded-lg p-4 mb-8">
            <p className="text-sm text-blue-800">
              By creating your account, you agree to receive your scorecard and occasional updates about LifecycleOS. 
              You can unsubscribe at any time.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 px-6 py-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to Questions</span>
            </button>

            <button
              onClick={handleCreateAccount}
              disabled={isCreating || !password || !confirmPassword}
              className={`flex items-center space-x-2 px-8 py-3 rounded-lg font-medium transition-all ${
                isCreating || !password || !confirmPassword
                  ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5'
              }`}
            >
              {isCreating ? (
                <>
                  <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-gray-500"></div>
                  <span>Creating Account...</span>
                </>
              ) : (
                <>
                  <span>Create Account & Generate Scorecard</span>
                  <ArrowRight className="w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};