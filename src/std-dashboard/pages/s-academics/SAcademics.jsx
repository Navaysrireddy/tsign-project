import React, { useState, useEffect } from "react";
import "./SAcademics.css";
import Sidebar from '../sidebar/Sidebar';
import { FiEdit2, FiSave, FiBook, FiUser, FiAward } from 'react-icons/fi';
import { motion } from 'framer-motion';

const defaultData = [
  {
    subject: "Web Development",
    instructor: "Mr. Ramesh",
    credits: 4,
    grade: "A",
    progress: 85,
    color: "#6366F1"
  },
  {
    subject: "Data Structures",
    instructor: "Mrs. Kavitha",
    credits: 3,
    grade: "B+",
    progress: 72,
    color: "#10B981"
  },
  {
    subject: "Computer Networks",
    instructor: "Dr. Arun",
    credits: 3,
    grade: "A+",
    progress: 95,
    color: "#3B82F6"
  },
  {
    subject: "AI & ML",
    instructor: "Dr. Sushma",
    credits: 4,
    grade: "A",
    progress: 88,
    color: "#F59E0B"
  },
];

const Academics = () => {
  const [data, setData] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [updatedGrade, setUpdatedGrade] = useState("");
  const [activeTab, setActiveTab] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  // Load from localStorage on mount
  useEffect(() => {
    const savedData = localStorage.getItem("academicsData");
    if (savedData) {
      setData(JSON.parse(savedData));
    } else {
      setData(defaultData);
    }
  }, []);

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setUpdatedGrade(data[index].grade);
  };

  const handleSaveClick = (index) => {
    const updatedData = [...data];
    updatedData[index].grade = updatedGrade;
    setData(updatedData);
    localStorage.setItem("academicsData", JSON.stringify(updatedData));
    setEditingIndex(null);
  };

  const filteredData = data.filter(item => {
    const matchesSearch = item.subject.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         item.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTab = activeTab === "all" || 
                      (activeTab === "high" && item.grade === "A+") || 
                      (activeTab === "medium" && ["A", "B+"].includes(item.grade)) ||
                      (activeTab === "low" && ["B", "C+"].includes(item.grade));
    return matchesSearch && matchesTab;
  });

  const calculateGPA = () => {
    const gradePoints = {
      "A+": 4.0, "A": 4.0, "B+": 3.5, "B": 3.0, "C+": 2.5, "C": 2.0
    };
    const total = data.reduce((sum, item) => sum + (gradePoints[item.grade] || 0) * item.credits, 0);
    const totalCredits = data.reduce((sum, item) => sum + item.credits, 0);
    return totalCredits > 0 ? (total / totalCredits).toFixed(2) : "0.00";
  };

  return (
    <div className="academics-app">
      <Sidebar />
      <div className="academics-main">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="academics-header"
        >
          <h1>My Academic Dashboard</h1>
          <div className="stats-container">
            <div className="stat-card">
              <FiBook className="stat-icon" />
              <div>
                <h3>{data.length}</h3>
                <p>Courses</p>
              </div>
            </div>
            <div className="stat-card">
              <FiAward className="stat-icon" />
              <div>
                <h3>{calculateGPA()}</h3>
                <p>Current GPA</p>
              </div>
            </div>
            <div className="stat-card">
              <FiUser className="stat-icon" />
              <div>
                <h3>{new Set(data.map(item => item.instructor)).size}</h3>
                <p>Instructors</p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="academics-controls">
          <div className="search-container">
            <input
              type="text"
              placeholder="Search courses or instructors..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="tabs">
            <button 
              className={activeTab === "all" ? "active" : ""}
              onClick={() => setActiveTab("all")}
            >
              All Courses
            </button>
            <button 
              className={activeTab === "high" ? "active" : ""}
              onClick={() => setActiveTab("high")}
            >
              A+ Grades
            </button>
            <button 
              className={activeTab === "medium" ? "active" : ""}
              onClick={() => setActiveTab("medium")}
            >
              A/B+ Grades
            </button>
            <button 
              className={activeTab === "low" ? "active" : ""}
              onClick={() => setActiveTab("low")}
            >
              B/C+ Grades
            </button>
          </div>
        </div>

        <motion.div 
          layout
          className="academics-grid"
        >
          {filteredData.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="course-card"
              style={{ borderTop: `4px solid ${item.color}` }}
            >
              <div className="course-header">
                <h3>{item.subject}</h3>
                <span className="instructor">{item.instructor}</span>
              </div>
              
              <div className="course-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ 
                      width: `${item.progress}%`,
                      backgroundColor: item.color
                    }}
                  ></div>
                </div>
                <span>{item.progress}% Complete</span>
              </div>
              
              <div className="course-details">
                <div className="detail-item">
                  <span>Credits</span>
                  <strong>{item.credits}</strong>
                </div>
                <div className="detail-item">
                  <span>Current Grade</span>
                  {editingIndex === index ? (
                    <select
                      value={updatedGrade}
                      onChange={(e) => setUpdatedGrade(e.target.value)}
                      className="grade-select"
                    >
                      <option value="A+">A+</option>
                      <option value="A">A</option>
                      <option value="B+">B+</option>
                      <option value="B">B</option>
                      <option value="C+">C+</option>
                      <option value="C">C</option>
                    </select>
                  ) : (
                    <strong className="grade" style={{ color: item.color }}>
                      {item.grade}
                    </strong>
                  )}
                </div>
              </div>
              
              <div className="course-actions">
                {editingIndex === index ? (
                  <button 
                    onClick={() => handleSaveClick(index)} 
                    className="save-btn"
                  >
                    <FiSave /> Save Grade
                  </button>
                ) : (
                  <button 
                    onClick={() => handleEditClick(index)} 
                    className="edit-btn"
                  >
                    <FiEdit2 /> Edit Grade
                  </button>
                )}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Academics;