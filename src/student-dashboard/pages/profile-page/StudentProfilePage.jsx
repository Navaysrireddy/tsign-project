import React, { useEffect, useState } from "react";
import "./StudentProfilePage.css";
import Logo from '../../../assests/TG-SIGN (2).png';
import { Link } from "react-router-dom";

const StudentProfilePage = () => {
  const [studentData, setStudentData] = useState(null);

  useEffect(() => {
    const savedData = localStorage.getItem("StudentProfile");
    if (savedData) {
      try {
        setStudentData(JSON.parse(savedData));
      } catch (e) {
        console.error("Error parsing student profile data:", e);
      }
    }
  }, []);

  if (!studentData) {
    return <div className="form-content"><h2>No Profile Data Found!</h2></div>;
  }

  return (
    <div className="form-container">
      <div className="form-sidebar">
        <ul>
          <Link to="/"><div className='profile-t-div'><img src={Logo} alt="" className='profile-t-logo'/></div></Link>
          <br /><br />
          <Link to="/studentprofilepage" className='form-sidebar-anchor'><li className="active">Student Profile</li></Link>
          <Link to="/studentprofileform" className='form-sidebar-anchor'><li className="active">Update Profile</li></Link>
          <Link to="/resume" className='form-sidebar-anchor'><li className="active">Resume</li></Link>
        </ul>
      </div>

      <div className="form-content">
        <h2>Student Profile</h2>

        <div className='profile-division'>
          <h3>Basic Details</h3>
          <div className="input-row"><strong>Full Name:</strong> {studentData.studentName}</div>
          <div className="input-row"><strong>Student ID:</strong> {studentData.studentId}</div>
          <div className="input-row"><strong>Email:</strong> {studentData.email}</div>
          <div className="input-row"><strong>Gender:</strong> {studentData.gender}</div>
          <div className="input-row"><strong>Date of Birth:</strong> {studentData.dob}</div>
        </div>

        <div className='profile-division'>
          <h3>Location & Others</h3>
          <div className="input-row"><strong>State:</strong> {studentData.state}</div>
          <div className="input-row"><strong>City:</strong> {studentData.city}</div>
          <div className="input-row"><strong>Pin Code:</strong> {studentData.pinCode}</div>
          <div className="input-row"><strong>Address:</strong> {studentData.address}</div>
        </div>

        <div className='profile-division'>
          <h3>Contact Details</h3>
          <div className="input-row"><strong>Contact Number:</strong> {studentData.contactNumber}</div>
          <div className="input-row"><strong>Alternate Email:</strong> {studentData.alternateEmail}</div>
        </div>

        <div className='profile-division'>
          <h3>Education Details</h3>

          <div className="input-row">
            <strong>10th Class - School Name:</strong> {studentData.tenthSchool}
          </div>
          <div className="input-row">
            <strong>10th Class - Year of Passing:</strong> {studentData.tenthYear}
          </div>
          <div className="input-row">
            <strong>10th Class - Percentage:</strong> {studentData.tenthPercentage}
          </div>

          <div className="input-row">
            <strong>Intermediate - College Name:</strong> {studentData.interCollege}
          </div>
          <div className="input-row">
            <strong>Intermediate - Year of Passing:</strong> {studentData.interYear}
          </div>
          <div className="input-row">
            <strong>Intermediate - Percentage:</strong> {studentData.interPercentage}
          </div>

          <div className="input-row">
            <strong>Degree/B.Tech - College Name:</strong> {studentData.degreeCollege}
          </div>
          <div className="input-row">
            <strong>Degree/B.Tech - Year of Passing:</strong> {studentData.degreeYear}
          </div>
          <div className="input-row">
            <strong>Degree/B.Tech - Percentage:</strong> {studentData.degreePercentage}
          </div>
        </div>

        <div className='profile-division'>
          <h3>Summary & Experience</h3>
          <div className="input-row"><strong>Summary:</strong> {studentData.summary}</div>
          <div className="input-row"><strong>Fresher:</strong> {studentData.isFresher}</div>
          {studentData.isFresher === "No" && (
            <div className="input-row"><strong>Experience:</strong> {studentData.experience}</div>
          )}
        </div>
        {/* ✅ Projects Section */}
        {studentData.projects && studentData.projects.length > 0 && (
  <div className='profile-division'>
    <h3>Projects</h3>
    {studentData.projects.map((project, index) => (
      <div key={index} className="project-block">
        <div className="input-row"><strong>Project Title:</strong> {project.title}</div>

        {project.keyPoints && (
          <ul>
            {(Array.isArray(project.keyPoints)
              ? project.keyPoints
              : project.keyPoints.split(",")
            ).map((point, idx) => (
              <li key={idx}>{point.trim()}</li>
            ))}
          </ul>
        )}
      </div>
    ))}
  </div>
)}


        <div className='profile-division'>
          <h3>Technical Skills</h3>
          <ul>
            {studentData.technicalSkills?.split(",").map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </div>

        <div className='profile-division'>
          <h3>Soft Skills</h3>
          <ul>
            {studentData.softSkills?.split(",").map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </div>

        <div className='profile-division'>
          <h3>Certificates</h3>
          <ul>
            {studentData.certifications?.split(",").map((cert, index) => (
              <li key={index}>{cert.trim()}</li>
            ))}
          </ul>
        </div>

        <div className='profile-division'>
          <h3>Certificates/ Images</h3>
          <div className="input-row">
            <strong>Certificate Image:</strong><br />
            {studentData.certificateImage ? (
              <img src={studentData.certificateImage} alt="Certificate" className="upload-preview" />
            ) : (
              "No certificate uploaded"
            )}
          </div>
          <div className="input-row">
            <strong>Profile Picture:</strong><br />
            {studentData.profileImage ? (
              <img src={studentData.profileImage} alt="Profile" className="upload-preview" />
            ) : (
              "No profile picture uploaded"
            )}
          </div>
        </div>

        
      </div>
    </div>
  );
};

export default StudentProfilePage;
