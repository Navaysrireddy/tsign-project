// admin-dashboard/pages/Settings.jsx
import React from 'react';

const Settings = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Settings</h1>
      <p>Admin preferences, theme options, system config, and more can be managed here.</p>

      <div className="mt-6">
        <label className="block mb-2 font-medium">Change Theme</label>
        <select className="border px-4 py-2 rounded w-60">
          <option>Light</option>
          <option>Dark</option>
        </select>
      </div>

      <div className="mt-6">
        <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700">
          Reset System
        </button>
      </div>
    </div>
  );
};

export default Settings;