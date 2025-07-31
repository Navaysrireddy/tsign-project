import React from 'react';
import {
  PieChart, Pie, Cell,
  BarChart, Bar,
  XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  Legend
} from 'recharts';

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

  const styles = {
    card: 'bg-white p-4 rounded-lg shadow-md text-center',
    cardTitle: 'text-sm text-gray-500',
    cardValue: 'text-2xl font-semibold text-gray-800',
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Recruiter Overview</h2>

      {/* Stat Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className={styles.card}>
          <p className={styles.cardTitle}>Total Recruiters</p>
          <p className={styles.cardValue}>{recruiterStats.total}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>Active</p>
          <p className={styles.cardValue}>{recruiterStats.active}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>New</p>
          <p className={styles.cardValue}>{recruiterStats.new}</p>
        </div>
        <div className={styles.card}>
          <p className={styles.cardTitle}>Suspended</p>
          <p className={styles.cardValue}>{recruiterStats.suspended}</p>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Pie Chart */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h4 className="text-lg font-semibold mb-2">Recruiter Status Distribution</h4>
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
  <Cell key={`cell-${idx}`} fill={COLORS[entry.name] || '#8884d8'} />
))}

              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h4 className="text-lg font-semibold mb-2">Recruiter Status Count</h4>
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
      <div className="mt-8 text-center">
        <button className="px-6 py-3 bg-purple-600 text-white font-semibold rounded hover:bg-purple-700 transition">
          View Full Recruiter List
        </button>
      </div>
    </div>
  );
};

export default AdminRecruiters;