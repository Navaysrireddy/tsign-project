import React, { useEffect, useState } from "react";
import "./Assessments.css";
import Sidebar from '../../student-components/sidebar/Sidebar';

const defaultAssessments = [
  {
    title: "DSA Midterm Exam",
    type: "Exam",
    dueDate: "2025-06-20",
    status: "Upcoming",
  },
  {
    title: "AI Project Submission",
    type: "Assignment",
    dueDate: "2025-06-18",
    status: "This Week",
  },
  {
    title: "Web Dev Quiz 2",
    type: "Quiz",
    dueDate: "2025-06-15",
    status: "Urgent",
  },
  {
    title: "Networking Lab Report",
    type: "Assignment",
    dueDate: "2025-06-22",
    status: "Upcoming",
  },
];

const Assessments = () => {
  const [assessments, setAssessments] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    type: "",
    dueDate: "",
    status: "",
  });

  // Load from localStorage
  useEffect(() => {
    const saved = localStorage.getItem("assessmentsData");
    if (saved) {
      setAssessments(JSON.parse(saved));
    } else {
      setAssessments(defaultAssessments);
    }
  }, []);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditForm({ ...assessments[index] });
  };

  const handleChange = (e) => {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const updated = [...assessments];
    updated[editIndex] = editForm;
    setAssessments(updated);
    localStorage.setItem("assessmentsData", JSON.stringify(updated));
    setEditIndex(null);
  };

  return (
    <div>
        <Sidebar/>
    <div className="assess-assessments-container">
      <h2>My Assessments</h2>
      <div className="assessments-list">
        {assessments.map((item, index) => (
          <div key={index} className={`assessment-card ${item.status.toLowerCase()}`}>
            {editIndex === index ? (
              <>
                <input type="text" name="title" value={editForm.title} onChange={handleChange} />
                <input type="text" name="type" value={editForm.type} onChange={handleChange} />
                <input type="date" name="dueDate" value={editForm.dueDate} onChange={handleChange} />
                <select name="status" value={editForm.status} onChange={handleChange}>
                  <option value="Upcoming">Upcoming</option>
                  <option value="This Week">This Week</option>
                  <option value="Urgent">Urgent</option>
                </select>
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <h4>{item.title}</h4>
                <p><strong>Type:</strong> {item.type}</p>
                <p><strong>Due Date:</strong> {item.dueDate}</p>
                <span className="status-label">{item.status}</span>
                <button onClick={() => handleEditClick(index)} className="edit-btn">Edit</button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Assessments;