// src/components/AssessmentItem.jsx
import React from 'react';
import './AssessmentItem.css';
import { FaCalendarAlt, FaCheckCircle, FaHourglassHalf, FaExclamationTriangle } from 'react-icons/fa';

const AssessmentItem = ({ title, date, status }) => {
  const getStatusIcon = (currentStatus) => {
    switch (currentStatus.toLowerCase()) {
      case 'completed':
        return <FaCheckCircle className="status-icon completed-icon" />;
      case 'pending':
        return <FaHourglassHalf className="status-icon pending-icon" />;
      case 'overdue':
        return <FaExclamationTriangle className="status-icon overdue-icon" />;
      default:
        return null;
    }
  };

  return (
    <li className="assessment-item">
      <div className="assessment-details">
        <span className="assessment-title">{title}</span>
        <div className="assessment-meta">
          <FaCalendarAlt className="date-icon" />
          <span className="assessment-date">{date}</span>
        </div>
      </div>
      <div className={`assessment-status-indicator status-${status.toLowerCase()}`}>
        {getStatusIcon(status)}
        <span>{status}</span>
      </div>
    </li>
  );
};

export default AssessmentItem;