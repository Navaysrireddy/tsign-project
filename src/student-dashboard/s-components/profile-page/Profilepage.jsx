import React, { useEffect, useState, useRef } from "react";
import Logo from '../../../assests/TG-SIGN (2).png';
import { Link, useNavigate } from "react-router-dom";

const StudentProfilePage = () => {
  const navigate = useNavigate();
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

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

  const [editing, setEditing] = useState(false);

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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setStudentData((prev) => ({ ...prev, [name]: value }));
  };

  // const handleProjectChange = (index, field, value) => {
  //   const updatedProjects = [...studentData.projects];
  //   updatedProjects[index][field] = value;
  //   setStudentData((prev) => ({ ...prev, projects: updatedProjects }));
  // };

  // const addNewProject = () => {
  //   setStudentData((prev) => ({
  //     ...prev,
  //     projects: [...prev.projects, { title: "", keyPoints: "" }],
  //   }));
  // };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setStudentData((prev) => ({ ...prev, [field]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const saveProfile = () => {
    localStorage.setItem("StudentProfile", JSON.stringify(studentData));
    alert("Profile saved successfully!");
    setEditing(false);
  };

  const cancelEdit = () => {
    const savedData = localStorage.getItem("StudentProfile");
    if (savedData) {
      setStudentData(JSON.parse(savedData));
    }
    setEditing(false);
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
            <div className='profile-t-div mb-8 flex justify-center'>
              <img src={Logo} alt="Logo" className='profile-t-logo w-32 object-contain' />
            </div>
          </Link>
          <Link to="/Profile" className="block mb-2 px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Student Profile</Link>
          <Link to="/Profile-form" className="block mb-2 px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Update Profile</Link>
          <Link to="/resume" className="block mb-2 px-4 py-2 rounded bg-blue-600 text-white font-semibold hover:bg-blue-700">Resume</Link>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8 bg-white shadow-lg overflow-y-auto">
        <h2 className="text-2xl font-bold mb-6">Student Profile</h2>

        {!editing ? (
          <>
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 border-b pb-1">Basic Details</h3>
              <div className="space-y-2 text-gray-700">
                <div><strong>Full Name:</strong> {studentData.studentName}</div>
                <div><strong>Student ID:</strong> {studentData.studentId}</div>
                <div><strong>Email:</strong> {studentData.email}</div>
                <div><strong>Gender:</strong> {studentData.gender}</div>
                <div><strong>Date of Birth:</strong> {studentData.dob}</div>
              </div>
            </section>

            {/* Add other display sections here (Location, Contact, Education, Summary, Skills, Projects, etc.) */}

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 border-b pb-1">Certificates / Images</h3>
              <div className="text-gray-700">
                <div className="mb-4">
                  <strong>Certificate Image:</strong><br />
                  {studentData.certificateImage ? (
                    <img src={studentData.certificateImage} alt="Certificate" className="w-40 h-40 object-cover rounded border" />
                  ) : (
                    "No certificate uploaded"
                  )}
                </div>
                <div>
                  <strong>Profile Picture:</strong><br />
                  {studentData.profileImage ? (
                    <img src={studentData.profileImage} alt="Profile" className="w-40 h-40 object-cover rounded-full border" />
                  ) : (
                    "No profile picture uploaded"
                  )}
                </div>
              </div>
            </section>

            <button
              onClick={() => setEditing(true)}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Edit Profile
            </button>
          </>
        ) : (
          <>
            {/* Edit Mode */}
            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 border-b pb-1">Basic Details</h3>
              <input
                className="border rounded px-3 py-2 w-full mb-2"
                type="text"
                name="studentName"
                placeholder="Full Name"
                value={studentData.studentName}
                onChange={handleChange}
              />
              <input
                className="border rounded px-3 py-2 w-full mb-2"
                type="text"
                name="studentId"
                placeholder="Student ID"
                value={studentData.studentId}
                onChange={handleChange}
              />
              <input
                className="border rounded px-3 py-2 w-full mb-2"
                type="email"
                name="email"
                placeholder="Email"
                value={studentData.email}
                onChange={handleChange}
              />
              <select
                className="border rounded px-3 py-2 w-full mb-2"
                name="gender"
                value={studentData.gender}
                onChange={handleChange}
              >
                <option value="">Select Gender</option>
                <option value="Male">Male</option>
                <option value="Female">Female</option>
                <option value="Other">Other</option>
              </select>
              <input
                className="border rounded px-3 py-2 w-full mb-2"
                type="date"
                name="dob"
                value={studentData.dob}
                onChange={handleChange}
              />
            </section>

            {/* Add other editable sections here (Location, Contact, Education, Summary, Skills, Projects, etc.) */}

            <section className="mb-8">
              <h3 className="text-xl font-semibold mb-4 border-b pb-1">Certificates / Images</h3>
              <div>
                <label className="block mb-2 font-medium">Upload Certificate</label>
                {studentData.certificateImage && (
                  <img
                    src={studentData.certificateImage}
                    alt="Certificate"
                    className="w-40 h-40 object-cover rounded border mb-2"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef1}
                  onChange={(e) => handleFileChange(e, "certificateImage")}
                />
              </div>
              <div className="mt-4">
                <label className="block mb-2 font-medium">Upload Profile Photo</label>
                {studentData.profileImage && (
                  <img
                    src={studentData.profileImage}
                    alt="Profile"
                    className="w-40 h-40 object-cover rounded-full border mb-2"
                  />
                )}
                <input
                  type="file"
                  accept="image/*"
                  ref={fileInputRef2}
                  onChange={(e) => handleFileChange(e, "profileImage")}
                />
              </div>
            </section>

            <button
              onClick={saveProfile}
              className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 mr-3"
            >
              Save Profile
            </button>
            <button
              onClick={cancelEdit}
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
            >
              Cancel
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default StudentProfilePage;
