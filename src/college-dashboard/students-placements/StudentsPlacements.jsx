import React, { useEffect, useState } from "react";
import "./StudentsPlacements.css";


const Students = () => {
  const [interviews, setInterviews] = useState([]);

  useEffect(() => {
    fetchInterviewData();
  }, []);

  const fetchInterviewData = async () => {
    const mockInterviews = [
      {
        studentName: "Anjali Reddy",
        tsignId: "TG....",
        yearOfPass: 2024,
        company: "Infosys",
        domain: "Frontend Developer",
        interviewDate: "2025-06-12",
        offerDate: "2025-06-15",
        salary: 450000,
        status: "Selected",
      },
      {
        studentName: "Karthik Goud",
        tsignId: "TG....",
        yearOfPass: 2024,
        company: "Wipro",
        domain: "Backend Developer",
        interviewDate: "2025-06-10",
        offerDate: "-",
        salary: null,
        status: "Pending",
      },
      {
        studentName: "Meghana S",
        tsignId: "TG....",
        yearOfPass: 2025,
        company: "TCS",
        domain: "Data Analyst",
        interviewDate: "2025-06-14",
        offerDate: "2025-06-20",
        salary: 500000,
        status: "Selected",
      },
      {
        studentName: "Ravi Teja",
        tsignId: "TG....",
        yearOfPass: 2024,
        company: "Cognizant",
        domain: "QA Engineer",
        interviewDate: "2025-06-11",
        offerDate: "-",
        salary: 0,
        status: "Rejected",
      },
      {
        studentName: "Divya P",
        tsignId: "TG....",
        yearOfPass: 2025,
        company: "Accenture",
        domain: "Full Stack Developer",
        interviewDate: "2025-06-13",
        offerDate: "-",
        salary: null,
        status: "Interview Scheduled",
      },
    ];

    setInterviews(mockInterviews);
  };

  const total = interviews.length;
  const placed = interviews.filter((i) => i.status.toLowerCase() === "selected").length;
  const rejected = interviews.filter((i) => i.status.toLowerCase() === "rejected").length;
  const pending = total - placed - rejected;

  const getStatusClass = (status) => {
    const s = status.toLowerCase();
    if (s === "selected") return "status-selected";
    if (s === "rejected") return "status-rejected";
    if (s === "interview scheduled") return "status-interview";
    return "status-pending";
  };

  return (
    
    <div className="students-page">
   
      <h2>Student Placement Overview</h2>
      <div className="stats-container">
        <div className="card">Total Students: {total}</div>
        <div className="card">Placed: {placed}</div>
        <div className="card">Rejected: {rejected}</div>
        <div className="card">Yet to be Placed: {pending}</div>
      </div>

      <h3>Latest Interviews</h3>
      <table>
        <thead>
          <tr>
            <th>Student</th>
            <th>TSign ID</th>
            <th>Year of Pass</th>
            <th>Company</th>
            <th>Domain</th>
            <th>Date Of Interview</th>
            <th>Date Of Offer Letter</th>
            <th>Salary</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {interviews.map((interview, index) => (
            <tr key={index}>
              <td>{interview.studentName}</td>
              <td>{interview.tsignId}</td>
              <td>{interview.yearOfPass}</td>
              <td>{interview.company}</td>
              <td>{interview.domain}</td>
              <td>{interview.interviewDate}</td>
              <td>{interview.offerDate}</td>
              <td>
                {interview.salary
                  ? `₹${new Intl.NumberFormat().format(interview.salary)}`
                  : "N/A"}
              </td>
              <td>
                <span className={`status-badge ${getStatusClass(interview.status)}`}>
                  {interview.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
   
  );
};

export default Students;
