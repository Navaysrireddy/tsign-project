import React from 'react';
import './AdminDashboard.css'; // Import CSS
import Sidebar from '../adminsidebar/AdminSidebar';
import Header from '../adminheader/AdminHeader';
import SummaryCards from '../summarycard/SummaryCard';
import StudentsPanel from '../entitypanels/StudentsPanel';
import CollegesPanel from '../entitypanels/CollegePanel';
import RecruitersPanel from '../entitypanels/RecruitersPanel';
import RegistrationTrendsChart from '../charts/RegistrationTrendsChart';
import UserDistributionChart from '../charts/UserDistributionChart';
import ActivityFeed from '../ActivityFeed';
import PendingActions from '../PendingActions';
import { Outlet } from 'react-router-dom';

const AdminDashboard = () => {
  return (
    <div className="admin-dashboard">
      <Sidebar />
       <div className="flex-1 p-4">
        <Outlet /> {/* 🔥 This renders the nested route component */}
      </div>
      <div className="main-content">
        <Header />
        <div className="summary-section">
          <SummaryCards />
        </div>
        <div className="entity-panels">
          <StudentsPanel />
          <CollegesPanel />
          <RecruitersPanel />
        </div>
        <div className="charts">
          <RegistrationTrendsChart />
          <UserDistributionChart />
        </div>
        <div className="bottom-section">
          <ActivityFeed />
          <PendingActions />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;