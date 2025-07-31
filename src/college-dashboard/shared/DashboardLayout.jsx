// src/shared/DashboardLayout.jsx
import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from './Header';

const DashboardLayout = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ flex: 1, padding: '1rem' }}>
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default DashboardLayout;