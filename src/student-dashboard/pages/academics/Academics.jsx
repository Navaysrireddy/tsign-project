// import React, { useState, useEffect } from "react";
// import "./Academics.css";
// import Sidebar from '../../student-components/sidebar/Sidebar';


// const defaultData = [
//   {
//     subject: "Web Development",
//     instructor: "Mr. Ramesh",
//     credits: 4,
//     grade: "A",
//   },
//   {
//     subject: "Data Structures",
//     instructor: "Mrs. Kavitha",
//     credits: 3,
//     grade: "B+",
//   },
//   {
//     subject: "Computer Networks",
//     instructor: "Dr. Arun",
//     credits: 3,
//     grade: "A+",
//   },
//   {
//     subject: "AI & ML",
//     instructor: "Dr. Sushma",
//     credits: 4,
//     grade: "A",
//   },
// ];

// const Academics = () => {
//   const [data, setData] = useState([]);
//   const [editingIndex, setEditingIndex] = useState(null);
//   const [updatedGrade, setUpdatedGrade] = useState("");

//   // Load from localStorage on mount
//   useEffect(() => {
//     const savedData = localStorage.getItem("academicsData");
//     if (savedData) {
//       setData(JSON.parse(savedData));
//     } else {
//       setData(defaultData);
//     }
//   }, []);

//   const handleEditClick = (index) => {
//     setEditingIndex(index);
//     setUpdatedGrade(data[index].grade);
//   };

//   const handleSaveClick = (index) => {
//     const updatedData = [...data];
//     updatedData[index].grade = updatedGrade;
//     setData(updatedData);
//     localStorage.setItem("academicsData", JSON.stringify(updatedData)); // save to localStorage
//     setEditingIndex(null);
//   };

//   return (
//     <div>
//         <Sidebar/>
//     <div className="academics-container">
//       <h2>My Academics</h2>
//       <div className="academics-table">
//         <table>
//           <thead>
//             <tr>
//               <th>Subject</th>
//               <th>Instructor</th>
//               <th>Credits</th>
//               <th>Grade</th>
//               <th>Action</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data.map((item, index) => (
//               <tr key={index}>
//                 <td>{item.subject}</td>
//                 <td>{item.instructor}</td>
//                 <td>{item.credits}</td>
//                 <td>
//                   {editingIndex === index ? (
//                     <input
//                       type="text"
//                       value={updatedGrade}
//                       onChange={(e) => setUpdatedGrade(e.target.value)}
//                       className="grade-input"
//                     />
//                   ) : (
//                     item.grade
//                   )}
//                 </td>
//                 <td>
//                   {editingIndex === index ? (
//                     <button onClick={() => handleSaveClick(index)} className="save-btn">
//                       Save
//                     </button>
//                   ) : (
//                     <button onClick={() => handleEditClick(index)} className="edit-btn">
//                       Edit
//                     </button>
//                   )}
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//     </div>
//   );
// };

// export default Academics;




 
import React, { useState, useEffect } from "react";
import "./Academics.css";
import Sidebar from "../../student-components/sidebar/Sidebar";
 
const cseSubjects = [
  {
    year: "1st Year",
    semesters: [
      {
        sem: "Sem 1",
        subjects: [
          { subject: "Mathematics I", credits: 4 },
          { subject: "Engineering Physics", credits: 3 },
          { subject: "Basic Electrical", credits: 3 },
          { subject: "Programming in C", credits: 4 },
        ],
      },
      {
        sem: "Sem 2",
        subjects: [
          { subject: "Mathematics II", credits: 4 },
          { subject: "Engineering Chemistry", credits: 3 },
          { subject: "Data Structures", credits: 4 },
          { subject: "Digital Electronics", credits: 3 },
        ],
      },
    ],
  },
  {
    year: "2nd Year",
    semesters: [
      {
        sem: "Sem 3",
        subjects: [
          { subject: "Discrete Mathematics", credits: 3 },
          { subject: "Computer Organization", credits: 4 },
          { subject: "OOPs using Java", credits: 4 },
          { subject: "Database Systems", credits: 3 },
        ],
      },
      {
        sem: "Sem 4",
        subjects: [
          { subject: "Operating Systems", credits: 4 },
          { subject: "Design & Analysis of Algorithms", credits: 4 },
          { subject: "Software Engineering", credits: 3 },
          { subject: "Computer Networks", credits: 3 },
        ],
      },
    ],
  },
  {
    year: "3rd Year",
    semesters: [
      {
        sem: "Sem 5",
        subjects: [
          { subject: "Theory of Computation", credits: 4 },
          { subject: "Web Technologies", credits: 3 },
          { subject: "Compiler Design", credits: 4 },
          { subject: "Machine Learning", credits: 3 },
        ],
      },
      {
        sem: "Sem 6",
        subjects: [
          { subject: "Cloud Computing", credits: 3 },
          { subject: "IoT", credits: 3 },
          { subject: "Mobile App Development", credits: 3 },
          { subject: "Artificial Intelligence", credits: 4 },
        ],
      },
    ],
  },
  {
    year: "4th Year",
    semesters: [
      {
        sem: "Sem 7",
        subjects: [
          { subject: "Big Data Analytics", credits: 4 },
          { subject: "Cyber Security", credits: 3 },
          { subject: "Project Phase I", credits: 6 },
        ],
      },
      {
        sem: "Sem 8",
        subjects: [
          { subject: "Project Phase II", credits: 10 },
          { subject: "Seminar", credits: 2 },
          { subject: "Internship/Industrial Training", credits: 4 },
        ],
      },
    ],
  },
];
 
const Academics = () => {
  const [grades, setGrades] = useState({});
  const [editSemester, setEditSemester] = useState(null); // [yearIdx, semIdx]
 
  useEffect(() => {
    const stored = localStorage.getItem("cseGrades");
    if (stored) {
      setGrades(JSON.parse(stored));
    }
  }, []);
 
  const handleGradeChange = (subjectName, grade) => {
    setGrades((prev) => {
      const updated = { ...prev, [subjectName]: grade };
      return updated;
    });
  };
 
  const handleEditToggle = (yearIdx, semIdx) => {
    const isEditing = editSemester?.[0] === yearIdx && editSemester?.[1] === semIdx;
    if (isEditing) {
      // Save changes
      localStorage.setItem("cseGrades", JSON.stringify(grades));
      setEditSemester(null);
    } else {
      setEditSemester([yearIdx, semIdx]);
    }
  };
 
  return (
    <div className="academics-page">
      <Sidebar />
      <div className="academics-container">
        <h2>🎓 B.Tech CSE Academics</h2>
 
        {cseSubjects.map((yearData, yearIdx) => (
          <div key={yearIdx} className="year-block">
            <h3>{yearData.year}</h3>
            {yearData.semesters.map((semData, semIdx) => {
              const isEditing = editSemester?.[0] === yearIdx && editSemester?.[1] === semIdx;
 
              return (
                <div key={semIdx} className="semester-block">
                  <div className="sem-header">
                    <h4>{semData.sem}</h4>
                    <button className="edit-btn" onClick={() => handleEditToggle(yearIdx, semIdx)}>
                      {isEditing ? "Save" : "Edit"}
                    </button>
                  </div>
 
                  <table>
                    <thead>
                      <tr>
                        <th>Subject</th>
                        <th>Credits</th>
                        <th>Grade</th>
                      </tr>
                    </thead>
                    <tbody>
                      {semData.subjects.map((sub, subIdx) => (
                        <tr key={subIdx}>
                          <td>{sub.subject}</td>
                          <td>{sub.credits}</td>
                          <td>
                            <input
                              type="text"
                              placeholder="Enter Grade"
                              value={grades[sub.subject] || ""}
                              onChange={(e) =>
                                isEditing && handleGradeChange(sub.subject, e.target.value)
                              }
                              className="grade-input"
                              disabled={!isEditing}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};
 
export default Academics;