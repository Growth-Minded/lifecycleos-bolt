import React from 'react';
import { ArrowRight, CheckCircle, Users, Zap, Target, Mail, MessageSquare, BarChart3, Star, Clock } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface LandingPageProps {
  onGetStarted: () => void;
  onShowAuth: () => void;
}

export const LandingPage: React.FC<LandingPageProps> = ({ onGetStarted, onShowAuth }) => {
  const { user, signOut } = useAuth();

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">LifecycleOS</span>
            </div>
            <div className="flex items-center space-x-4">
              {user ? (
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-600">Welcome back!</span>
                  <button
                    onClick={signOut}
                    className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                  >
                    Sign Out
                  </button>
                </div>
              ) : (
                <button
                  onClick={onShowAuth}
                  className="text-sm text-gray-600 hover:text-gray-800 transition-colors"
                >
                  Sign In
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-purple-50 via-white to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Tune your lifecycle marketing engine
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              LifecycleOS helps consumer brands build, optimize, and measure email & SMS flows, triggers, and actions, driving customer conversion and loyalty.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <button
                onClick={onGetStarted}
                className="bg-purple-600 text-white px-8 py-4 rounded-xl hover:bg-purple-700 transition-all duration-200 font-semibold text-lg flex items-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                <span>Generate your free scorecard</span>
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Your campaigns can't do it all. With LifecycleOS, you can:
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-2xl border border-blue-100">
              <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center mb-6">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Build the flows you need</h3>
              <p className="text-gray-600 text-sm">
                Build the flows you need, in the order that's most important
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-6 rounded-2xl border border-green-100">
              <div className="w-12 h-12 bg-green-600 rounded-xl flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Optimize touchpoints</h3>
              <p className="text-gray-600 text-sm">
                Optimize the length and frequency of touchpoints
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-6 rounded-2xl border border-purple-100">
              <div className="w-12 h-12 bg-purple-600 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Fully integrate channels</h3>
              <p className="text-gray-600 text-sm">
                Fully integrate email and SMS, optionally layering in push and in-app notifications
              </p>
            </div>

            <div className="bg-gradient-to-br from-orange-50 to-red-50 p-6 rounded-2xl border border-orange-100">
              <div className="w-12 h-12 bg-orange-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Leverage smart automation</h3>
              <p className="text-gray-600 text-sm">
                Leverage smart exit rules, triggers, and actions
              </p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
              Stop missing out on revenue and engagement opportunities. Leverage LifecycleOS to bridge the gap between your current state and your dream state.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              From questionnaire to ready-to-deploy content in just minutes
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Answer Questions</h3>
              <p className="text-gray-600">
                Tell us about your business, customers, and goals through our smart questionnaire.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Get Your Scorecard</h3>
              <p className="text-gray-600">
                Review human reviewed plus AI-generated recommendations and customize your lead nurture strategy.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Generate Flow</h3>
              <p className="text-gray-600">
                Watch as we create your personalized lead nurture flow with optimal timing.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Deploy Content</h3>
              <p className="text-gray-600">
                Export ready-to-use email and SMS content to your marketing platform.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our clients have seen:
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-purple-600 mb-2">200%+</div>
              <div className="text-lg font-medium text-gray-900 mb-1">Volume shift from campaigns to flows</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">35%+</div>
              <div className="text-lg font-medium text-gray-900 mb-1">Team efficiency gained through automations</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-green-600 mb-2">311%</div>
              <div className="text-lg font-medium text-gray-900 mb-1">Increase in revenue after implementation</div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted Brands */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Trusted by some of the brands you love
            </h2>
            <p className="text-lg text-gray-700 max-w-4xl mx-auto leading-relaxed mb-12">
              Built for consumer brands with frequent purchase cycles who are looking to optimize their lifecycle marketing performance. We help corporate retail teams move from reactive campaigns to automated growth systems.
            </p>
          </div>

          {/* Logo Grid - 5 placeholder spots */}
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-60">
            <img src="/logo1.png" alt="Brand Logo 1" className="h-12 md:h-16 w-auto object-contain max-w-[180px]" />
            <img src="/logo2.png" alt="Brand Logo 2" className="h-12 md:h-16 w-auto object-contain max-w-[180px]" />
            <img src="/logo3.png" alt="Brand Logo 3" className="h-12 md:h-16 w-auto object-contain max-w-[180px]" />
            <img src="/logo4.png" alt="Brand Logo 4" className="h-12 md:h-16 w-auto object-contain max-w-[180px]" />
            <img src="/logo5.png" alt="Brand Logo 5" className="h-12 md:h-16 w-auto object-contain max-w-[180px]" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to get started?
          </h2>
          <p className="text-xl text-purple-100 mb-8">
            Join 500+ businesses already using AI-powered lead nurture flows to increase conversions.
          </p>
          <button
            onClick={onGetStarted}
            className="bg-white text-purple-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-200 font-semibold text-lg flex items-center space-x-2 mx-auto shadow-lg hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>Generate your free scorecard</span>
            <ArrowRight className="w-5 h-5" />
          </button>
          <p className="text-purple-200 text-sm mt-4">
            No credit card required • Setup in under 5 minutes
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-400">
            <p>&copy; 2025 LifecycleOS. All rights reserved.</p>
            <p className="mt-2">LifecycleOS is a <a href="https://growthminded.co" target="_blank" rel="noopener noreferrer" className="text-purple-400 hover:text-purple-300 transition-colors">Growth Minded</a> company.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};