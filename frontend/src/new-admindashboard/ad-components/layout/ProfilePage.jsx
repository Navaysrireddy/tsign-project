// ProfilePage.jsx
import React from 'react';
import { useTheme } from '../context/ThemeContext';

const ProfilePage = () => {
  const { theme } = useTheme();

  // Example registered user data – replace with actual data source
  const user = {
    fullName: 'Admin User',
    email: 'admin@af3dashboard.com',
    role: 'Administrator',
    department: 'Operations',
    bio: 'Administrator managing the AF 3 Dashboard platform.',
  };

  return (
    <div className={`p-6 rounded-lg ${theme === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      <h1 className="text-2xl font-bold mb-4">Profile</h1>
      <p><strong>Full Name:</strong> {user.fullName}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Role:</strong> {user.role}</p>
      <p><strong>Department:</strong> {user.department}</p>
      <p><strong>Bio:</strong> {user.bio}</p>
    </div>
  );
};

export default ProfilePage;
