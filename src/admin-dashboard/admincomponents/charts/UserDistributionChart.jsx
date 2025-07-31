import React from 'react';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { userDistribution } from '../../data/UserDistribution';

const COLORS = ['#8884d8', '#82ca9d', '#ffc658'];

const UserDistributionChart = () => {
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
        User Distribution
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <PieChart>
          <Pie
            data={userDistribution}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {userDistribution.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserDistributionChart;