import React from 'react';
import { Edit, Building, Mail, Clock, Target, MessageSquare, Zap } from 'lucide-react';
import { QuestionnaireData } from '../../types/leadNurture';

interface BusinessProfileProps {
  data: QuestionnaireData;
  onEditProfile: () => void;
}

export const BusinessProfile: React.FC<BusinessProfileProps> = ({ data, onEditProfile }) => {
  const formatValue = (value: string) => {
    return value.replace('-', ' ').replace(/\b\w/g, l => l.toUpperCase());
  };

  const profileItems = [
    { 
      icon: Building, 
      label: 'Business Name', 
      value: data.businessName,
      color: 'text-blue-600'
    },
    { 
      icon: Building, 
      label: 'Industry', 
      value: formatValue(data.industry),
      color: 'text-green-600'
    },
    { 
      icon: Mail, 
      label: 'Contact Email', 
      value: data.email,
      color: 'text-purple-600'
    },
    { 
      icon: Clock, 
      label: 'Service Frequency', 
      value: formatValue(data.serviceFrequency),
      color: 'text-orange-600'
    },
    { 
      icon: Zap, 
      label: 'Newness of Service', 
      value: formatValue(data.serviceNewness),
      color: 'text-pink-600'
    },
    { 
      icon: Target, 
      label: 'Primary Conversion Goals', 
      value: formatValue(data.conversionGoal),
      color: 'text-indigo-600'
    },
    { 
      icon: MessageSquare, 
      label: 'Preferred Communication Channels', 
      value: data.communicationPreference === 'email-only' ? 'Email Only' : 'Email + SMS',
      color: 'text-teal-600'
    }
  ];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-3">
          <div className="w-12 h-12 bg-gradient-to-r from-blue-100 to-teal-100 rounded-xl flex items-center justify-center">
            <Building className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-gray-900">{data.businessName}</h2>
            <p className="text-gray-600">{formatValue(data.industry)}</p>
          </div>
        </div>
        <button
          onClick={onEditProfile}
          className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 hover:bg-gray-50 rounded-lg transition-colors"
        >
          <Edit className="w-4 h-4" />
          <span>Edit Profile</span>
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {profileItems.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
              <div className={`w-8 h-8 rounded-lg bg-white flex items-center justify-center ${item.color}`}>
                <Icon className="w-4 h-4" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900">{item.label}</p>
                <p className="text-sm text-gray-600 truncate">{item.value}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};