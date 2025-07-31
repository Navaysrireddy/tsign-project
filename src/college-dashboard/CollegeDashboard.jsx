// src/college-dashboard/CollegeDashboard.jsx
import React from 'react';
import DashboardLayout from './shared/DashboardLayout';
import PlacementStats from './college-components/PlacementStats';

const CollegeDashboard = () => {
  return (
    <DashboardLayout>
      <h2 style={{ marginBottom: "1rem" }}>College Dashboard</h2>
      <div style={{ display: "grid", gap: "1rem" }}>
        <PlacementStats />
      </div>
    </DashboardLayout>
  );
};

export default CollegeDashboard;