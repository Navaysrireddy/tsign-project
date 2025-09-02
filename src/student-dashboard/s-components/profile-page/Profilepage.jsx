import React, { useEffect, useState } from "react";
import Logo from "../../../assests/TG-SIGN (2).png";
import { Link, useNavigate } from "react-router-dom";
 
const StudentProfilePage = () => {
  const navigate = useNavigate();
 
  const [studentData, setStudentData] = useState({
    studentName: "",
    studentId: "",
    email: "",
    gender: "",
    dob: "",
    state: "",
    city: "",
    pinCode: "",
    address: "",
    contactNumber: "",
    alternateEmail: "",
    tenthSchool: "",
    tenthYear: "",
    tenthPercentage: "",
    interCollege: "",
    interYear: "",
    interPercentage: "",
    degreeCollege: "",
    degreeYear: "",
    degreePercentage: "",
    isFresher: "Yes",
    experience: "",
    summary: "",
    technicalSkills: "",
    softSkills: "",
    certifications: "",
    certificateImage: null,
    profileImage: null,
    projects: [{ title: "", keyPoints: "" }],
  });
 
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
 
  const handleEditProfile = () => {
    // Save the current profile data to a special key for editing
    localStorage.setItem("StudentProfileData", JSON.stringify(studentData));
    navigate("/profile-form");
  };
 
  return (
    <div className="min-h-screen flex bg-gray-50 relative">
      {/* Close Button */}
      <button
        onClick={() => navigate("/student-dashboard")}
        aria-label="Close Profile"
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 text-2xl font-bold"
        title="Close Profile and go to Dashboard"
      >
        &times;
      </button>
 
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-md">
        <ul>
          <Link to="/">
            <div className="profile-t-div mb-8 flex justify-center">
              <img
                src={Logo}
                alt="Logo"
                className="profile-t-logo w-32 object-contain"
              />
            </div>
          </Link>
          <Link
            to="/StudentProfilePage"
            className="block mb-2 px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Student Profile
          </Link>
          <button
            onClick={handleEditProfile}
            className="w-full text-left mb-2 px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Update Profile
          </button>
          <Link
            to="/resume"
            className="block mb-2 px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700"
          >
            Resume
          </Link>
        </ul>
      </div>
 
      {/* Main Content */}
      <div className="flex-1 p-8 bg-white shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Student Profile</h2>
       
        {/* Edit Button at Top */}
        {/* <div className="mb-6 flex justify-end">
          <button
            onClick={handleEditProfile}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Edit Profile
          </button>
        </div> */}
 
        {/* Basic Details */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-1">
            Basic Details
          </h3>
          <div className="space-y-2 text-gray-700">
            <div>
              <strong>Full Name:</strong> {studentData.studentName}
            </div>
            <div>
              <strong>Student ID:</strong> {studentData.studentId}
            </div>
            <div>
              <strong>Email:</strong> {studentData.email}
            </div>
            <div>
              <strong>Gender:</strong> {studentData.gender}
            </div>
            <div>
              <strong>Date of Birth:</strong> {studentData.dob}
            </div>
          </div>
        </section>
 
        {/* Contact Details */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-1">
            Contact Details
          </h3>
          <div className="space-y-2 text-gray-700">
            <div>
              <strong>Address:</strong> {studentData.address}
            </div>
            <div>
              <strong>City:</strong> {studentData.city}
            </div>
            <div>
              <strong>State:</strong> {studentData.state}
            </div>
            <div>
              <strong>Pin Code:</strong> {studentData.pinCode}
            </div>
            <div>
              <strong>Contact Number:</strong> {studentData.contactNumber}
            </div>
            <div>
              <strong>Alternate Email:</strong> {studentData.alternateEmail}
            </div>
          </div>
        </section>
 
        {/* Education */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-1">
            Education
          </h3>
          <div className="space-y-2 text-gray-700">
            <div>
              <strong>10th:</strong> {studentData.tenthSchool},{" "}
              {studentData.tenthYear} ({studentData.tenthPercentage}%)
            </div>
            <div>
              <strong>Intermediate:</strong> {studentData.interCollege},{" "}
              {studentData.interYear} ({studentData.interPercentage}%)
            </div>
            <div>
              <strong>Degree:</strong> {studentData.degreeCollege},{" "}
              {studentData.degreeYear} ({studentData.degreePercentage}%)
            </div>
          </div>
        </section>
 
        {/* Summary */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-1">Summary</h3>
          <p className="text-gray-700">{studentData.summary}</p>
        </section>
 
        {/* Skills */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-1">Skills</h3>
          <div className="text-gray-700">
            <p>
              <strong>Technical:</strong> {studentData.technicalSkills}
            </p>
            <p>
              <strong>Soft Skills:</strong> {studentData.softSkills}
            </p>
          </div>
        </section>
 
        {/* Experience */}
        {studentData.isFresher === "No" && (
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b pb-1">
              Experience
            </h3>
            <p className="text-gray-700">{studentData.experience}</p>
          </section>
        )}
 
        {/* Projects */}
        {studentData.projects && studentData.projects.length > 0 && (
          <section className="mb-8">
            <h3 className="text-xl font-semibold mb-4 border-b pb-1">
              Projects
            </h3>
            {studentData.projects.map((project, index) => (
              <div key={index} className="mb-4">
                <h4 className="font-semibold">{project.title}</h4>
                <p className="text-gray-700">{project.keyPoints}</p>
              </div>
            ))}
          </section>
        )}
 
        {/* Certificates / Images */}
        <section className="mb-8">
          <h3 className="text-xl font-semibold mb-4 border-b pb-1">
            Certificates / Images
          </h3>
          <div className="text-gray-700">
            <div className="mb-4">
              <strong>Certificate Image:</strong>
              <br />
              {studentData.certificateImage ? (
                <img
                  src={studentData.certificateImage}
                  alt="Certificate"
                  className="w-40 h-40 object-cover rounded border"
                />
              ) : (
                "No certificate uploaded"
              )}
            </div>
            <div>
              <strong>Profile Picture:</strong>
              <br />
              {studentData.profileImage ? (
                <img
                  src={studentData.profileImage}
                  alt="Profile"
                  className="w-40 h-40 object-cover rounded-full border"
                />
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