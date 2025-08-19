import React from 'react';
import {
  PieChart, Pie, Cell,
  LineChart, Line,
  BarChart, Bar,
  AreaChart, Area,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
} from 'recharts';
import Sidebar from '../admincomponents/adminsidebar/AdminSidebar';
import './AdminStudents.css'; // Import your CSS file

const AdminStudents = () => {
  const studentStats = {
    total: 1200,
    active: 700,
    new: 150,
    pending: 100,
    hold: 150,
    rejected: 100,
  };

  const pieData = Object.entries(studentStats).filter(([key]) => key !== 'total')
    .map(([key, value]) => ({
      name: key.charAt(0).toUpperCase() + key.slice(1),
      value,
    }));

  const COLORS = {
    Active: '#10b981',
    New: '#3b82f6',
    Pending: '#fbbf24',
    Hold: '#f97316',
    Rejected: '#ef4444',
  };

  const trendData = [
    { month: 'Jan', students: 200 },
    { month: 'Feb', students: 250 },
    { month: 'Mar', students: 300 },
    { month: 'Apr', students: 280 },
    { month: 'May', students: 350 },
    { month: 'Jun', students: 400 },
  ];

  return (
    <div className="admin-container">
      <Sidebar />
      <h2 className="admin-header">Student Analytics</h2>

      <div className="admin-charts">
        {/* Pie Chart */}
        <div className="admin-chart-box">
          <h4>Status Distribution (Pie)</h4>
          <ResponsiveContainer width="100%" height="90%">
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="name"
                outerRadius={90}
                label
              >
                {pieData.map((entry, idx) => (
                  <Cell key={idx} fill={COLORS[entry.name]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="admin-chart-box">
          <h4>Status Count (Bar Chart)</h4>
          <ResponsiveContainer width="100%" height="90%">
            <BarChart data={pieData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Line Chart */}
        <div className="admin-chart-box">
          <h4>Monthly Registration (Line)</h4>
          <ResponsiveContainer width="100%" height="90%">
            <LineChart data={trendData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="students"
                stroke="#10b981"
                strokeWidth={2}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Area Chart */}
        <div className="admin-chart-box">
          <h4>Growth Trend (Area)</h4>
          <ResponsiveContainer width="100%" height="90%">
            <AreaChart data={trendData}>
              <defs>
                <linearGradient id="colorStudents" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="month" />
              <YAxis />
              <CartesianGrid strokeDasharray="3 3" />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="students"
                stroke="#3b82f6"
                fillOpacity={1}
                fill="url(#colorStudents)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AdminStudents;
