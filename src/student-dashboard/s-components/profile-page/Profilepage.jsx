import React, { useEffect, useState } from "react";
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
    return (
      <div className="flex items-center justify-center min-h-screen">
        <h2 className="text-xl font-semibold">No Profile Data Found!</h2>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-60 bg-white border-r border-gray-200 px-4 py-6 flex flex-col">
        <Link to="/" className="flex items-center justify-center mb-10">
          <img src={Logo} alt="" className="h-11" />
        </Link>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li>
            <Link
              to="/studentprofilepage"
              className="block px-4 py-2 rounded bg-blue-50 text-blue-700"
            >
              Student Profile
            </Link>
          </li>
          <li>
            <Link
              to="/studentprofileform"
              className="block px-4 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition"
            >
              Update Profile
            </Link>
          </li>
          <li>
            <Link
              to="/resume"
              className="block px-4 py-2 rounded hover:bg-blue-50 hover:text-blue-700 transition"
            >
              Resume
            </Link>
          </li>
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-8">
        <h2 className="text-2xl font-bold mb-8 text-gray-800 border-b pb-2">
          Student Profile
        </h2>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Basic Details</h3>
          <div className="space-y-2">
            <div><strong>Full Name:</strong> {studentData.studentName}</div>
            <div><strong>Student ID:</strong> {studentData.studentId}</div>
            <div><strong>Email:</strong> {studentData.email}</div>
            <div><strong>Gender:</strong> {studentData.gender}</div>
            <div><strong>Date of Birth:</strong> {studentData.dob}</div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Location & Others</h3>
          <div className="space-y-2">
            <div><strong>State:</strong> {studentData.state}</div>
            <div><strong>City:</strong> {studentData.city}</div>
            <div><strong>Pin Code:</strong> {studentData.pinCode}</div>
            <div><strong>Address:</strong> {studentData.address}</div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Contact Details</h3>
          <div className="space-y-2">
            <div><strong>Contact Number:</strong> {studentData.contactNumber}</div>
            <div><strong>Alternate Email:</strong> {studentData.alternateEmail}</div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Education Details</h3>
          <div className="space-y-2">
            <div><strong>10th Class - School Name:</strong> {studentData.tenthSchool}</div>
            <div><strong>10th Class - Year of Passing:</strong> {studentData.tenthYear}</div>
            <div><strong>10th Class - Percentage:</strong> {studentData.tenthPercentage}</div>
            <div><strong>Intermediate - College Name:</strong> {studentData.interCollege}</div>
            <div><strong>Intermediate - Year of Passing:</strong> {studentData.interYear}</div>
            <div><strong>Intermediate - Percentage:</strong> {studentData.interPercentage}</div>
            <div><strong>Degree/B.Tech - College Name:</strong> {studentData.degreeCollege}</div>
            <div><strong>Degree/B.Tech - Year of Passing:</strong> {studentData.degreeYear}</div>
            <div><strong>Degree/B.Tech - Percentage:</strong> {studentData.degreePercentage}</div>
          </div>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Summary & Experience</h3>
          <div className="space-y-2">
            <div><strong>Summary:</strong> {studentData.summary}</div>
            <div><strong>Fresher:</strong> {studentData.isFresher}</div>
            {studentData.isFresher === "No" && (
              <div><strong>Experience:</strong> {studentData.experience}</div>
            )}
          </div>
        </section>

        {studentData.projects && studentData.projects.length > 0 && (
          <section className="mb-8">
            <h3 className="text-lg font-semibold text-blue-700 mb-4">Projects</h3>
            <div className="space-y-4">
              {studentData.projects.map((project, index) => (
                <div key={index} className="p-4 bg-white rounded shadow-sm border border-blue-100">
                  <div><strong>Project Title:</strong> {project.title}</div>
                  {project.keyPoints && (
                    <ul className="list-disc ml-6 mt-2">
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
          </section>
        )}

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Technical Skills</h3>
          <ul className="list-disc ml-6">
            {studentData.technicalSkills?.split(",").map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Soft Skills</h3>
          <ul className="list-disc ml-6">
            {studentData.softSkills?.split(",").map((skill, index) => (
              <li key={index}>{skill.trim()}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Certificates</h3>
          <ul className="list-disc ml-6">
            {studentData.certifications?.split(",").map((cert, index) => (
              <li key={index}>{cert.trim()}</li>
            ))}
          </ul>
        </section>

        <section className="mb-8">
          <h3 className="text-lg font-semibold text-blue-700 mb-4">Certificates/ Images</h3>
          <div>
            <div className="mb-4">
              <strong>Certificate Image:</strong><br />
              {studentData.certificateImage ? (
                <img src={studentData.certificateImage} alt="Certificate" className="rounded border mt-2 w-48 h-36 object-cover" />
              ) : (
                "No certificate uploaded"
              )}
            </div>
            <div>
              <strong>Profile Picture:</strong><br />
              {studentData.profileImage ? (
                <img src={studentData.profileImage} alt="Profile" className="rounded-full border mt-2 w-32 h-32 object-cover" />
              ) : (
                "No profile picture uploaded"
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default StudentProfilePage;
