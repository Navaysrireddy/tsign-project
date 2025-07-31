// src/components/CourseProgress.jsx
import React from 'react';
import './CourseProgress.css';

const CourseProgress = ({ courseName, progress, status }) => {
  return (
    <div className="course-progress-item">
      <div className="course-info">
        <span className="course-name">{courseName}</span>
        <span className={`course-status-badge status-${status.toLowerCase().replace(/\s/g, '-')}`}>{status}</span>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <span className="progress-percentage">{progress}% Complete</span>
    </div>
  );
};

export default CourseProgress;