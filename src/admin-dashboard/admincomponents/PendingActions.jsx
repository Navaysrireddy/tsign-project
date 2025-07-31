import React from 'react';

const PendingActions = () => {
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
        Pending Admin Notifications
      </h3>
      <ul
        style={{
          paddingLeft: '1.25rem',
          listStyleType: 'disc',
        }}
      >
        <li style={{ marginBottom: '0.5rem' }}>12 new student sign-ups awaiting activation</li>
        <li style={{ marginBottom: '0.5rem' }}>2 reports of inappropriate content to review</li>
        <li style={{ marginBottom: '0.5rem' }}>7 upcoming interviews need scheduling</li>
      </ul>
    </div>
  );
};

export default PendingActions;