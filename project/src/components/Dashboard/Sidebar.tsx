import React from 'react';
import { 
  User, 
  HelpCircle, 
  BarChart3, 
  FileText, 
  GitBranch, 
  Mail,
  Lock
} from 'lucide-react';

interface SidebarProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
  onShowUpgrade: () => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ 
  activeSection, 
  onSectionChange, 
  onShowUpgrade 
}) => {
  const menuItems = [
    { id: 'user-settings', label: 'User Settings', icon: User, locked: false },
    { id: 'onboarding', label: 'Onboarding questions', icon: HelpCircle, locked: true },
    { id: 'flow-data', label: 'Flow Data', icon: BarChart3, locked: true },
    { id: 'scorecards', label: 'Scorecards', icon: FileText, locked: false },
    { id: 'flow-mappings', label: 'Flow Mappings', icon: GitBranch, locked: true },
    { id: 'flow-content', label: 'Flow Content', icon: Mail, locked: true },
  ];

  const handleItemClick = (item: any) => {
    if (item.locked) {
      onShowUpgrade();
    } else {
      onSectionChange(item.id);
    }
  };

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-full">
      <div className="p-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-teal-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">L</span>
          </div>
          <span className="text-xl font-bold text-gray-900">LifecycleOS</span>
        </div>

        <nav className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            
            return (
              <button
                key={item.id}
                onClick={() => handleItemClick(item)}
                className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                  isActive
                    ? 'bg-blue-50 text-blue-700 border border-blue-200'
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
                {item.locked && (
                  <Lock className="w-4 h-4 ml-auto text-gray-400" />
                )}
              </button>
            );
          })}
        </nav>
      </div>
    </div>
  );
};