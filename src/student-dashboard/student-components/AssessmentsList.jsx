import React from "react";
// import "./AssessmentsList.css";

const AssessmentsList = ({ data }) => {
  return (
    <div className="assessments-container">
      <h3>Upcoming Assessments</h3>
      <ul className="assessment-list">
        {data.map((item, index) => (
          <li key={index} className={`assessment-item ${item.status.toLowerCase()}`}>
            <div className="assessment-info">
              <h4>{item.title}</h4>
              <p>{item.date} | {item.type}</p>
            </div>
            <span className="label">{item.status}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AssessmentsList;