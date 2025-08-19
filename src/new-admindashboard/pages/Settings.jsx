import React, { useState } from 'react';
import { UserIcon, PaletteIcon, BellIcon, SlackIcon, EyeIcon, SaveIcon, CheckIcon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Settings = () => {
  const { theme, toggleTheme } = useTheme();
  const [saved, setSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('profile');

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">Settings</h1>

      {/* Settings Tabs */}
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => setActiveTab('profile')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'profile'
              ? theme === 'dark'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 text-white'
              : theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center">
            <UserIcon size={16} className="mr-2" />
            <span>Profile</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('appearance')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'appearance'
              ? theme === 'dark'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 text-white'
              : theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center">
            <PaletteIcon size={16} className="mr-2" />
            <span>Appearance</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('notifications')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'notifications'
              ? theme === 'dark'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 text-white'
              : theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center">
            <BellIcon size={16} className="mr-2" />
            <span>Notifications</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('integrations')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'integrations'
              ? theme === 'dark'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 text-white'
              : theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center">
            <SlackIcon size={16} className="mr-2" />
            <span>Integrations</span>
          </div>
        </button>
        <button
          onClick={() => setActiveTab('accessibility')}
          className={`px-4 py-2 rounded-lg transition-colors ${
            activeTab === 'accessibility'
              ? theme === 'dark'
                ? 'bg-blue-600 text-white'
                : 'bg-blue-500 text-white'
              : theme === 'dark'
              ? 'bg-gray-800 hover:bg-gray-700'
              : 'bg-gray-100 hover:bg-gray-200'
          }`}
        >
          <div className="flex items-center">
            <EyeIcon size={16} className="mr-2" />
            <span>Accessibility</span>
          </div>
        </button>
      </div>

      {/* Settings Content */}
      <div
        className={`rounded-xl border p-6 ${
          theme === 'dark' ? 'bg-[#1E1E1E] border-gray-800' : 'bg-white border-gray-200'
        }`}
      >
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Profile Settings</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium mb-2">Full Name</label>
                <input
                  type="text"
                  defaultValue="Admin User"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-700 text-white'
                      : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  defaultValue="admin@af3dashboard.com"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-700 text-white'
                      : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Role</label>
                <select
                  defaultValue="admin"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-700 text-white'
                      : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                >
                  <option value="admin">Administrator</option>
                  <option value="manager">Manager</option>
                  <option value="viewer">Viewer</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Department</label>
                <input
                  type="text"
                  defaultValue="Operations"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    theme === 'dark'
                      ? 'bg-gray-900 border-gray-700 text-white'
                      : 'bg-white border-gray-300'
                  } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-2">Bio</label>
              <textarea
                rows={4}
                defaultValue="Administrator managing the AF 3 Dashboard platform."
                className={`w-full px-4 py-2 rounded-lg border ${
                  theme === 'dark'
                    ? 'bg-gray-900 border-gray-700 text-white'
                    : 'bg-white border-gray-300'
                } focus:outline-none focus:ring-2 focus:ring-blue-500`}
              />
            </div>
          </div>
        )}

        {/* ... similarly for other tabs, omitted here for brevity ... */}

        {/* Save Button */}
        <div className="mt-8 flex justify-end">
          <button
            onClick={handleSave}
            className={`px-4 py-2 rounded-lg flex items-center ${
              theme === 'dark'
                ? 'bg-blue-600 hover:bg-blue-700 text-white'
                : 'bg-blue-500 hover:bg-blue-600 text-white'
            } transition-colors`}
          >
            {saved ? (
              <>
                <CheckIcon size={18} className="mr-2" />
                <span>Saved!</span>
              </>
            ) : (
              <>
                <SaveIcon size={18} className="mr-2" />
                <span>Save Changes</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
