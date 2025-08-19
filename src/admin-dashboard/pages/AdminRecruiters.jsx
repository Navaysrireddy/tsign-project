import React from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend
} from 'recharts';
import Sidebar from '../admincomponents/adminsidebar/AdminSidebar';
import './AdminRecruiters.css'; // Import the CSS

const AdminRecruiters = () => {
  const recruiterStats = {
    total: 6073,
    active: 4892,
    new: 1181,
    suspended: 300,
    rejected: 150,
  };

  const pieData = Object.entries(recruiterStats)
    .filter(([key]) => key !== 'total')
    .map(([key, value]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value,
    }));

  const COLORS = {
    Active: '#10b981',
    New: '#3b82f6',
    Suspended: '#fbbf24',
    Rejected: '#ef4444',
  };

  return (
    <div className="admin-container">
      <Sidebar />
      <h2 className="admin-header">Recruiter Overview</h2>

      {/* Stat Cards */}
      <div className="admin-stats">
        <div className="stat-card">
          <p className="stat-title">Total Recruiters</p>
          <p className="stat-value">{recruiterStats.total}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Active</p>
          <p className="stat-value">{recruiterStats.active}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">New</p>
          <p className="stat-value">{recruiterStats.new}</p>
        </div>
        <div className="stat-card">
          <p className="stat-title">Suspended</p>
          <p className="stat-value">{recruiterStats.suspended}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="charts-grid">
        {/* Pie Chart */}
        <div className="chart-box">
          <h4>Recruiter Status Distribution</h4>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={100}
                label
              >
                {pieData.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="chart-box">
          <h4>Recruiter Status Count</h4>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={pieData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#6366f1" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* CTA Button */}
      <div className="cta-container">
        <button className="cta-button">
          View Full Recruiter List
        </button>
      </div>
    </div>
  );
};

export default AdminRecruiters;
