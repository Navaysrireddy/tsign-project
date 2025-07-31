import React, { useEffect, useState } from "react";
import "./Projects.css";
import Sidebar from '../../student-components/sidebar/Sidebar';
// import { Sidebar } from "lucide-react";


const defaultProjects = [
  {
    title: "AI Chatbot for College Helpdesk",
    description: "Developed using Python and NLP libraries to answer college-related queries.",
    status: "In Progress",
    guide: "Dr. Kiran Kumar",
  },
  {
    title: "E-Commerce Website",
    description: "A full-stack MERN project to showcase online product listings and payments.",
    status: "Completed",
    guide: "Ms. Lavanya",
  },
  {
    title: "Online Exam Portal",
    description: "Web app for conducting tests securely with webcam proctoring features.",
    status: "Submitted",
    guide: "Mr. Praveen",
  },
];

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [editIndex, setEditIndex] = useState(null);
  const [editForm, setEditForm] = useState({
    title: "",
    description: "",
    guide: "",
    status: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("projectsData");
    if (saved) {
      setProjects(JSON.parse(saved));
    } else {
      setProjects(defaultProjects);
    }
  }, []);

  const handleEditClick = (index) => {
    setEditIndex(index);
    setEditForm({ ...projects[index] });
  };

  const handleChange = (e) => {
    setEditForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSave = () => {
    const updated = [...projects];
    updated[editIndex] = editForm;
    setProjects(updated);
    localStorage.setItem("projectsData", JSON.stringify(updated));
    setEditIndex(null);
  };

  return (
    <div>
        <Sidebar/>
    <div className="projects-container">
      <h2>My Projects</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className={`project-card ${project.status.toLowerCase().replace(/\s+/g, "-")}`}>
            {editIndex === index ? (
              <>
                <input type="text" name="title" value={editForm.title} onChange={handleChange} />
                <textarea name="description" value={editForm.description} onChange={handleChange}></textarea>
                <input type="text" name="guide" value={editForm.guide} onChange={handleChange} />
                <select name="status" value={editForm.status} onChange={handleChange}>
                  <option value="In Progress">In Progress</option>
                  <option value="Submitted">Submitted</option>
                  <option value="Completed">Completed</option>
                </select>
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                <p><strong>Guide:</strong> {project.guide}</p>
                <span className="project-status">{project.status}</span>
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

export default Projects;