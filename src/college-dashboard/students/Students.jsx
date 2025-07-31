// import React from "react";
// import "./Students.css";
// import Sidebar from '../shared/sidebar/Sidebar';


// const students = [
//   {
//     name: "Navya Reddy",
//     tsSignId: "TSSG2025ST1234",
//     rollNo: "21CSE1234",
//     department: "CSE",
//     year: "3rd",
//     mobile: "9876543210",
//     email: "navya@example.com",
//     cgpa: "8.6",
//     status: "Active"
//   },
//   {
//     name: "Ravi Kumar",
//     tsSignId: "TSSG2025ST1235",
//     rollNo: "21ECE1234",
//     department: "ECE",
//     year: "2nd",
//     mobile: "9876501234",
//     email: "ravi@example.com",
//     cgpa: "8.1",
//     status: "Active"
//   },
//   {
//     name: "Meena Sharma",
//     tsSignId: "TSSG2025ST1236",
//     rollNo: "21EEE1234",
//     department: "EEE",
//     year: "4th",
//     mobile: "9876598765",
//     email: "meena@example.com",
//     cgpa: "8.9",
//     status: "Graduated"
//   }
// ];

// const CollegeStudentsTable = () => {
//   return (
//     <div className="student-table-container">
//       <Sidebar/>
//       <h2>🎓 College Student List</h2>
//       <table className="student-table">
//         <thead>
//           <tr>
//             <th>TS-SIGN ID</th>
//             <th>Name</th>
//             <th>Roll No</th>
//             <th>Dept</th>
//             <th>Year</th>
//             <th>Mobile</th>
//             <th>Email</th>
//             <th>CGPA</th>
//             <th>Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {students.map((stu, index) => (
//             <tr key={index}>
//               <td>{stu.tsSignId}</td>
//               <td>{stu.name}</td>
//               <td>{stu.rollNo}</td>
//               <td>{stu.department}</td>
//               <td>{stu.year}</td>
//               <td>{stu.mobile}</td>
//               <td>{stu.email}</td>
//               <td>{stu.cgpa}</td>
//               <td>{stu.status}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default CollegeStudentsTable;





import React, { useState } from "react";
import { FiSearch, FiFilter, FiDownload, FiEye, FiEdit2, FiTrash2 } from "react-icons/fi";
import "./Students.css";
import Sidebar from '../shared/sidebar/Sidebar';

const Students = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedYear, setSelectedYear] = useState("All");
  const [selectedDept, setSelectedDept] = useState("All");

  const students = [
    {
      name: "Navya Reddy",
      tsSignId: "TSSG2025ST1234",
      rollNo: "21CSE1234",
      department: "CSE",
      year: "3rd",
      mobile: "9876543210",
      email: "navya@example.com",
      cgpa: "8.6",
      status: "Active",
      avatar: "NR"
    },
    {
      name: "Ravi Kumar",
      tsSignId: "TSSG2025ST1235",
      rollNo: "21ECE1234",
      department: "ECE",
      year: "2nd",
      mobile: "9876501234",
      email: "ravi@example.com",
      cgpa: "8.1",
      status: "Active",
      avatar: "RK"
    },
    {
      name: "Meena Sharma",
      tsSignId: "TSSG2025ST1236",
      rollNo: "21EEE1234",
      department: "EEE",
      year: "4th",
      mobile: "9876598765",
      email: "meena@example.com",
      cgpa: "8.9",
      status: "Graduated",
      avatar: "MS"
    }
  ];

  const filteredStudents = students.filter(student => {
    const matchesSearch = student.name.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         student.tsSignId.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         student.rollNo.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesYear = selectedYear === "All" || student.year === selectedYear;
    const matchesDept = selectedDept === "All" || student.department === selectedDept;
    
    return matchesSearch && matchesYear && matchesDept;
  });

  const years = ["All", "1st", "2nd", "3rd", "4th"];
  const departments = ["All", "CSE", "ECE", "EEE", "MECH", "CIVIL"];

  return (
    <div className="students-container">
      {/* <Sidebar /> */}
      
      <main className="students-content">
        <div className="students-header">
          <h1>
            <span className="highlight">🎓</span> Student Management
          </h1>
          <p>View and manage all registered students</p>
        </div>

        <div className="students-controls">
          <div className="search-container">
            <FiSearch className="search-icon" />
            <input
              type="text"
              placeholder="Search students..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="filter-group">
            <div className="filter-item">
              <label>Year:</label>
              <select value={selectedYear} onChange={(e) => setSelectedYear(e.target.value)}>
                {years.map(year => (
                  <option key={year} value={year}>{year}</option>
                ))}
              </select>
            </div>

            <div className="filter-item">
              <label>Department:</label>
              <select value={selectedDept} onChange={(e) => setSelectedDept(e.target.value)}>
                {departments.map(dept => (
                  <option key={dept} value={dept}>{dept}</option>
                ))}
              </select>
            </div>

            <button className="export-btn">
              <FiDownload /> Export
            </button>
          </div>
        </div>

        <div className="students-table-container">
          <table className="students-table">
            <thead>
              <tr>
                <th>Student</th>
                <th>TS-SIGN ID</th>
                <th>Roll No</th>
                <th>Department</th>
                <th>Year</th>
                <th>CGPA</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredStudents.map((student, index) => (
                <tr key={index}>
                  <td>
                    <div className="student-info">
                      <div className="student-avatar">
                        {student.avatar}
                      </div>
                      <div>
                        <div className="student-name">{student.name}</div>
                        <div className="student-email">{student.email}</div>
                      </div>
                    </div>
                  </td>
                  <td>{student.tsSignId}</td>
                  <td>{student.rollNo}</td>
                  <td>{student.department}</td>
                  <td>{student.year}</td>
                  <td>
                    <span className={`cgpa-badge ${student.cgpa >= 8.5 ? 'high' : student.cgpa >= 7 ? 'medium' : 'low'}`}>
                      {student.cgpa}
                    </span>
                  </td>
                  <td>
                    <span className={`status-badge ${student.status.toLowerCase()}`}>
                      {student.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-buttons">
                      <button className="view-btn">
                        <FiEye />
                      </button>
                      <button className="edit-btn">
                        <FiEdit2 />
                      </button>
                      <button className="delete-btn">
                        <FiTrash2 />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="table-footer">
          <div className="results-count">
            Showing {filteredStudents.length} of {students.length} students
          </div>
          <div className="pagination">
            <button disabled>Previous</button>
            <button className="active">1</button>
            <button>2</button>
            <button>3</button>
            <button>Next</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Students;