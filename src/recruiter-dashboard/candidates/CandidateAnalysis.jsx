import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const steps = [
  { title: "Basic Details", subtitle: "Let's get you started!" },
  { title: "Location and Others", subtitle: "Provide the Details!" },
  { title: "Contact Details", subtitle: "Fill in your Contact Details" },
  { title: "Education Details", subtitle: "Provide your Academic Background" },
  { title: "Summary & Experience", subtitle: "Tell us about your journey" },
  { title: "Certificates / Images", subtitle: "Upload Certificates and Image" },
  { title: "All Done!", subtitle: "You're all set!" },
];

const StudentProfileForm = () => {
  const navigate = useNavigate();
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState({
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
    const savedData = localStorage.getItem("StudentProfileData");
    if (savedData) {
      try {
        setFormData(JSON.parse(savedData));
      } catch (e) {
        console.error("Failed to parse saved student data:", e);
      }
    }
  }, []);

  const goToNextStep = () => {
    let isValid = true;
    const fieldsToValidate = {
      0: ["studentName", "studentId", "email", "gender", "dob"],
      1: ["state", "city", "pinCode", "address"],
      2: ["contactNumber", "alternateEmail"],
      3: [
        "tenthSchool", "tenthYear", "tenthPercentage",
        "interCollege", "interYear", "interPercentage",
        "degreeCollege", "degreeYear", "degreePercentage"
      ],
      4: ["summary", "technicalSkills", "softSkills", "certifications"],
      5: ["certificateImage", "profileImage"],
    };

    const fields = fieldsToValidate[currentStep] || [];
    for (let field of fields) {
      if (!formData[field] || formData[field].toString().trim() === "") {
        isValid = false;
        alert(`Please fill in the required field: ${field}`);
        break;
      }
    }

    if (formData.isFresher === "No" && currentStep === 4 && !formData.experience.trim()) {
      alert("Please provide your experience details.");
      return;
    }

    if (isValid && currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData((prev) => ({ ...prev, projects: updatedProjects }));
  };

  const addNewProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { title: "", keyPoints: "" }],
    }));
  };

  const handleFileChange = (e, field) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, [field]: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const renderInput = (label, name, type = "text", props = {}) => (
    <div className="mb-3 flex flex-col">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
        {...props}
      />
    </div>
  );

  const renderTextarea = (label, name, placeholder = "") => (
    <div className="mb-3 flex flex-col">
      <label className="font-medium">{label}</label>
      <textarea
        name={name}
        value={formData[name]}
        onChange={handleChange}
        placeholder={placeholder}
        className="border rounded px-3 py-2 focus:ring-2 focus:ring-blue-400"
      />
    </div>
  );

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h2 className="text-xl font-bold mb-4">Basic Details</h2>
            {renderInput("Student Name*", "studentName")}
            {renderInput("Student ID*", "studentId")}
            {renderInput("Email*", "email", "email")}
            <div className="mb-3 flex flex-col">
              <label className="font-medium">Gender*</label>
              <select
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                className="border px-3 py-2 rounded"
              >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>
              </select>
            </div>
            {renderInput("Date of Birth*", "dob", "date")}
          </>
        );

      case 1:
        return (
          <>
            <h2 className="text-xl font-bold mb-4">Location</h2>
            {renderInput("State*", "state")}
            {renderInput("City*", "city")}
            {renderInput("Pin Code*", "pinCode")}
            {renderTextarea("Address*", "address")}
          </>
        );

      case 2:
        return (
          <>
            <h2 className="text-xl font-bold mb-4">Contact Details</h2>
            {renderInput("Phone Number*", "contactNumber")}
            {renderInput("Alternate Email*", "alternateEmail", "email")}
          </>
        );

      case 3:
        return (
          <>
            <h2 className="text-xl font-bold mb-4">Education Details</h2>
            <h3 className="text-lg font-semibold mt-2">10th Standard</h3>
            {renderInput("School Name*", "tenthSchool")}
            {renderInput("Year of Passing*", "tenthYear")}
            {renderInput("Percentage*", "tenthPercentage")}

            <h3 className="text-lg font-semibold mt-4">Intermediate</h3>
            {renderInput("College Name*", "interCollege")}
            {renderInput("Year of Passing*", "interYear")}
            {renderInput("Percentage*", "interPercentage")}

            <h3 className="text-lg font-semibold mt-4">Degree / B.Tech</h3>
            {renderInput("College Name*", "degreeCollege")}
            {renderInput("Year of Passing*", "degreeYear")}
            {renderInput("Percentage*", "degreePercentage")}
          </>
        );

      case 4:
        return (
          <>
            <h2 className="text-xl font-bold mb-4">Summary & Experience</h2>
            {renderTextarea("Short Summary about You*", "summary")}
            {renderTextarea("Technical Skills*", "technicalSkills", "e.g., Python, React, SQL")}
            {renderTextarea("Soft Skills*", "softSkills", "e.g., Communication, Teamwork")}
            {renderTextarea("Certifications*", "certifications", "e.g., AWS Certificate, Python Basics")}

            <h3 className="text-lg font-semibold mt-4">Projects*</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="border rounded p-3 mb-3 bg-gray-50">
                {renderInput("Project Title", `projects[${index}].title`, "text", {
                  value: project.title,
                  onChange: (e) => handleProjectChange(index, "title", e.target.value),
                })}
                {renderTextarea("Key Points", `projects[${index}].keyPoints`, "")}
              </div>
            ))}
            <button type="button" className="px-3 py-2 bg-green-500 text-white rounded" onClick={addNewProject}>
              + Add Another Project
            </button>

            <div className="mt-4">
              <label className="font-medium">Are you a fresher?*</label>
              <select
                name="isFresher"
                value={formData.isFresher}
                onChange={handleChange}
                className="border rounded px-3 py-2 ml-2"
              >
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
            </div>

            {formData.isFresher === "No" &&
              renderTextarea("Experience*", "experience")}
          </>
        );

      case 5:
        return (
          <>
            <h2 className="text-xl font-bold mb-4">Certificates / Images</h2>
            <div className="mb-4">
              <label className="font-medium">Upload Certificate*</label>
              <div className="mt-2">
                {formData.certificateImage ? (
                  <img src={formData.certificateImage} alt="Certificate" className="w-40 h-40 object-cover border rounded" />
                ) : (
                  <button
                    className="px-4 py-2 bg-indigo-500 text-white rounded"
                    type="button"
                    onClick={() => fileInputRef1.current.click()}
                  >
                    Upload Certificate
                  </button>
                )}
                <input type="file" ref={fileInputRef1} style={{ display: "none" }} onChange={(e) => handleFileChange(e, "certificateImage")} />
              </div>
            </div>
            <div>
              <label className="font-medium">Upload Profile Photo*</label>
              <div className="mt-2">
                {formData.profileImage ? (
                  <img src={formData.profileImage} alt="Profile" className="w-40 h-40 object-cover border rounded-full" />
                ) : (
                  <button
                    className="px-4 py-2 bg-indigo-500 text-white rounded"
                    type="button"
                    onClick={() => fileInputRef2.current.click()}
                  >
                    Upload Photo
                  </button>
                )}
                <input type="file" ref={fileInputRef2} style={{ display: "none" }} onChange={(e) => handleFileChange(e, "profileImage")} />
              </div>
            </div>
          </>
        );

      case 6:
        return (
          <>
            <h2 className="text-xl font-bold mb-4">All Done!</h2>
            <p className="mb-4">Your profile is complete. Go to your dashboard.</p>
            <button
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={() => {
                localStorage.setItem("StudentProfile", JSON.stringify(formData));
                alert("Profile completed successfully!");
                navigate("/student-dashboard");
              }}
            >
              Go to Dashboard
            </button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen flex bg-gray-50">
      {/* Sidebar */}
      <div className="w-1/4 bg-white p-6 shadow-md">
        <ul className="space-y-3">
          {steps.map((step, index) => (
            <li
              key={index}
              className={`p-3 rounded cursor-pointer transition ${
                index === currentStep ? "bg-blue-500 text-white font-semibold" : "bg-gray-100 text-gray-800 hover:bg-gray-200"
              }`}
            >
              {step.title}
              <br />
              <span className="text-sm font-light">{step.subtitle}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Content */}
      <div className="flex-1 p-8 bg-white shadow-lg">
        {renderStepContent(currentStep)}

        <div className="mt-6 flex justify-between">
          {currentStep > 0 && (
            <button
              className="px-4 py-2 bg-gray-400 text-white rounded hover:bg-gray-500"
              onClick={goToPreviousStep}
            >
              Go Back
            </button>
          )}
          {currentStep < steps.length - 1 && (
            <button
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              onClick={goToNextStep}
            >
              Save and Proceed
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentProfileForm;
