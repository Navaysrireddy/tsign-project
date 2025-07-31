import React, { useState } from "react";
import {
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  Radar,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
 
const attendanceData = [
  {
    semester: "1st Sem",
    subjects: [
      { subject: "Engineering Mathematics", Present: 85 },
      { subject: "Engineering Physics", Present: 80 },
      { subject: "C Programming", Present: 88 },
    ],
  },
  {
    semester: "2nd Sem",
    subjects: [
      { subject: "Data Structures", Present: 90 },
      { subject: "Digital Logic", Present: 83 },
      { subject: "Discrete Mathematics", Present: 87 },
    ],
  },
  {
    semester: "3rd Sem",
    subjects: [
      { subject: "OOPs in Java", Present: 89 },
      { subject: "DBMS", Present: 92 },
      { subject: "Computer Networks", Present: 84 },
    ],
  },
  {
    semester: "4rd Sem",
    subjects: [
      { subject: "OOPs in Java", Present: 89 },
      { subject: "DBMS", Present: 92 },
      { subject: "Computer Networks", Present: 84 },
    ],
  },
];
 
const SemWiseAttendanceChart = () => {
  const [selectedSem, setSelectedSem] = useState("1st Sem");
 
  const currentData = attendanceData.find((s) => s.semester === selectedSem)?.subjects || [];
 
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>📘 Semester-wise Attendance</h2>
 
      <select
        value={selectedSem}
        onChange={(e) => setSelectedSem(e.target.value)}
        style={styles.select}
      >
        {attendanceData.map((sem) => (
          <option key={sem.semester} value={sem.semester}>
            {sem.semester}
          </option>
        ))}
      </select>
 
      <ResponsiveContainer width="100%" height={350}>
        <RadarChart data={currentData}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 100]} />
          <Radar
            name="Present (%)"
            dataKey="Present"
            stroke="#5b2ecc"
            fill="#5b2ecc"
            fillOpacity={0.6}
          />
          <Tooltip />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};
 
const styles = {
  container: {
    backgroundColor: "#fff",
    padding: "1.5rem",
    marginBottom: "2rem",
    borderRadius: "16px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
  },
  title: {
    marginBottom: "1rem",
    color: "#3b3b98",
  },
  select: {
    padding: "0.5rem 1rem",
    marginBottom: "1rem",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "1rem",
  },
};
 
export default SemWiseAttendanceChart;