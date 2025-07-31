import React, { useState } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, LineChart, Line, CartesianGrid, ResponsiveContainer
} from "recharts";
import "./Placements.css";
import Sidebar from '../shared/sidebar/Sidebar';
import StudentsPlacements from '../students-placements/StudentsPlacements';


const Placements = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [domainFilter, setDomainFilter] = useState("All");
  const [sortOrder, setSortOrder] = useState("asc");

  const placementsData = [
    { id: 1, company: "TCS", domain: "IT Services", studentsPlaced: 25, jobsAvailable: 30 },
    { id: 2, company: "Infosys", domain: "Consulting", studentsPlaced: 18, jobsAvailable: 25 },
    { id: 3, company: "Amazon", domain: "Product Development", studentsPlaced: 12, jobsAvailable: 20 },
    { id: 4, company: "Capgemini", domain: "Cloud Services", studentsPlaced: 20, jobsAvailable: 22 },
    { id: 5, company: "Wipro", domain: "Data Analytics", studentsPlaced: 15, jobsAvailable: 18 },
    { id: 6, company: "Google", domain: "AI/ML", studentsPlaced: 8, jobsAvailable: 12 },
    { id: 7, company: "Microsoft", domain: "Software Engineering", studentsPlaced: 10, jobsAvailable: 15 },
    { id: 8, company: "Cognizant", domain: "IT Services", studentsPlaced: 17, jobsAvailable: 21 },
    { id: 9, company: "IBM", domain: "Cloud Computing", studentsPlaced: 11, jobsAvailable: 14 },
    { id: 10, company: "HCL", domain: "IT Support", studentsPlaced: 13, jobsAvailable: 17 },
  ];

  const domains = ["All", ...new Set(placementsData.map((p) => p.domain))];

  const filteredData = placementsData
    .filter((p) =>
      p.company.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .filter((p) => domainFilter === "All" || p.domain === domainFilter)
    .sort((a, b) =>
      sortOrder === "asc"
        ? a.studentsPlaced - b.studentsPlaced
        : b.studentsPlaced - a.studentsPlaced
    );

  const totalJobs = filteredData.reduce((sum, p) => sum + p.jobsAvailable, 0);

  // Pie chart data per domain
  const pieData = Object.values(
    filteredData.reduce((acc, curr) => {
      acc[curr.domain] = acc[curr.domain] || { name: curr.domain, value: 0 };
      acc[curr.domain].value += curr.jobsAvailable;
      return acc;
    }, {})
  );

  const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042", "#00C49F", "#FFBB28"];

  return (
    <div className="placements-container">
      <Sidebar/>
      <StudentsPlacements/>
      <h2 className="placements-title">📊 Campus Placements</h2>
      
      <div className="placements-controls">
        <input
          type="text"
          placeholder="Search by company..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />

        <select
          value={domainFilter}
          onChange={(e) => setDomainFilter(e.target.value)}
        >
          {domains.map((domain, idx) => (
            <option key={idx} value={domain}>
              {domain}
            </option>
          ))}
        </select>

        <button
          onClick={() => setSortOrder(sortOrder === "asc" ? "desc" : "asc")}
        >
          Sort by Students Placed ({sortOrder === "asc" ? "⬆" : "⬇"})
        </button>
      </div>

      <div className="job-count">
        <strong>Total Jobs Available:</strong> {totalJobs}
      </div>

      <table className="placements-table">
        <thead>
          <tr>
            <th>Company</th>
            <th>Domain</th>
            <th>No. of Students Placed</th>
            <th>Jobs Available</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((placement) => (
            <tr key={placement.id}>
              <td>{placement.company}</td>
              <td>{placement.domain}</td>
              <td>{placement.studentsPlaced}</td>
              <td>{placement.jobsAvailable}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Charts */}
      <div className="charts-section">
        <div className="chart-box">
          <h3>📉 Students Placed (Bar Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={filteredData}>
              <XAxis dataKey="company" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="studentsPlaced" fill="#8884d8" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>🎯 Jobs Available by Domain (Pie Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie
                data={pieData}
                cx="50%"
                cy="50%"
                outerRadius={100}
                fill="#8884d8"
                dataKey="value"
                label
              >
                {pieData.map((entry, index) => (
                  <Cell key={`cell-${index}`}fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="chart-box">
          <h3>📈 Students Placed Trend (Line Chart)</h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="company" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="studentsPlaced" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default Placements;