import React, { useState } from "react";
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from "recharts";
import gpaData from "../data/GPAProgress";
import ToggleTab from "./ToggleTab";
// import "./AcademicProgressChart.css";

const AcademicProgressChart = () => {
  const [view, setView] = useState("semester");

  const filteredData = gpaData[view];

  return (
    <div className="gpa-chart-container">
      <div className="chart-header">
        <h3>Academic Progress</h3>
        <ToggleTab view={view} setView={setView} />
      </div>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={filteredData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="label" />
          <YAxis domain={[10]} />
          <Tooltip />
          <Line type="monotone" dataKey="gpa" stroke="#5b2ecc" strokeWidth={3} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AcademicProgressChart;