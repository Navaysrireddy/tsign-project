import React from "react";
// import "./StatCard.css";

const StatCard = ({ title, value, icon, color }) => {
  return (
    <div className="stat-card" style={{ borderLeft: `5px solid ${color}` }}>
      <div className="stat-icon" style={{ backgroundColor: color }}>
        {icon}
      </div>
      <div className="stat-details">
        <p className="stat-title">{title}</p>
        <h3 className="stat-value">{value}</h3>
      </div>
    </div>
  );
};

export default StatCard;