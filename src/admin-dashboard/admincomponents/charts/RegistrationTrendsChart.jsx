import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { registrationTrends } from '../../data/RegistrationTrends';

const RegistrationTrendsChart = () => {
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
        Registration Trends
      </h3>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={registrationTrends}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="students" stroke="#8884d8" />
          <Line type="monotone" dataKey="recruiters" stroke="#82ca9d" />
          <Line type="monotone" dataKey="colleges" stroke="#ffc658" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default RegistrationTrendsChart;