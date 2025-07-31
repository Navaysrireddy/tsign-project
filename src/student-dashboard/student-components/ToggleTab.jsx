import React from "react";
// import "./ToggleTab.css";

const ToggleTab = ({ view, setView }) => {
  return (
    <div className="toggle-tab">
      <button
        className={view === "semester" ? "active" : ""}
        onClick={() => setView("semester")}
      >
        Semester
      </button>
      <button
        className={view === "year" ? "active" : ""}
        onClick={() => setView("year")}
      >
        Year
      </button>
    </div>
  );
};

export default ToggleTab;