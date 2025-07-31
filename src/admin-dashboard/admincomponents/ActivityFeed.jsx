import React from 'react';

const ActivityFeed = () => {
  return (
    <div
      style={{
        backgroundColor: '#ffffff',
        padding: '16px',
        boxShadow: '0 1px 4px rgba(0, 0, 0, 0.1)',
        borderRadius: '8px',
      }}
    >
      <h3
        style={{
          fontWeight: '600',
          fontSize: '1.125rem',
          marginBottom: '1rem',
        }}
      >
        Recent Activity
      </h3>
      <ul
        style={{
          paddingLeft: '1.25rem',
          listStyleType: 'disc',
        }}
      >
        <li style={{ marginBottom: '0.5rem' }}>New student registered: John Doe</li>
        <li style={{ marginBottom: '0.5rem' }}>Job posted by Recruiter ABC</li>
        <li style={{ marginBottom: '0.5rem' }}>College XYZ updated profile</li>
      </ul>
    </div>
  );
};

export default ActivityFeed;