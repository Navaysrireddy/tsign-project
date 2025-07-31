// src/components/StatCard.jsx
import React from 'react';
import './StatCard.css';

const StatCard = ({ icon, label, value, unit, color }) => {
  return (
    <div className="stat-card" style={{ '--stat-color': color }}>
      <div className="stat-icon-wrapper">
        {icon}
      </div>
      <div className="stat-info">
        <div className="stat-value">{value}{unit}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;