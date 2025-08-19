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
    if (currentStep > 0) setCurrentStep(currentStep - 1);
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

  const renderStepContent = (step) => {
    return (
      <div className="space-y-6">
        {step === 0 && (
          <>
            <h2 className="text-xl font-semibold text-blue-700">Basic Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">Student Name*</label>
                <input type="text" name="studentName" value={formData.studentName} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Student ID*</label>
                <input type="text" name="studentId" value={formData.studentId} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Email*</label>
                <input type="email" name="email" value={formData.email} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Gender*</label>
                <select name="gender" value={formData.gender} onChange={handleChange} className="input">
                  <option value="">-- Select Gender --</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label className="block font-medium mb-1">Date of Birth*</label>
                <input type="date" name="dob" value={formData.dob} onChange={handleChange} className="input" />
              </div>
            </div>
          </>
        )}
        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold text-blue-700">Location</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">State*</label>
                <input type="text" name="state" value={formData.state} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">City*</label>
                <input type="text" name="city" value={formData.city} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Pin Code*</label>
                <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Address*</label>
                <textarea name="address" value={formData.address} onChange={handleChange} className="input" />
              </div>
            </div>
          </>
        )}
        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold text-blue-700">Contact Details</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">Phone Number*</label>
                <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Alternate Email*</label>
                <input type="email" name="alternateEmail" value={formData.alternateEmail} onChange={handleChange} className="input" />
              </div>
            </div>
          </>
        )}
        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold text-blue-700">Education Details</h2>
            <h3 className="text-lg font-medium text-gray-700 mt-6">10th Standard</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">School Name*</label>
                <input type="text" name="tenthSchool" value={formData.tenthSchool} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Year of Passing*</label>
                <input type="text" name="tenthYear" value={formData.tenthYear} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Percentage*</label>
                <input type="text" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleChange} className="input" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mt-6">Intermediate</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">College Name*</label>
                <input type="text" name="interCollege" value={formData.interCollege} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Year of Passing*</label>
                <input type="text" name="interYear" value={formData.interYear} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Percentage*</label>
                <input type="text" name="interPercentage" value={formData.interPercentage} onChange={handleChange} className="input" />
              </div>
            </div>
            <h3 className="text-lg font-medium text-gray-700 mt-6">Degree / B.Tech</h3>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">College Name*</label>
                <input type="text" name="degreeCollege" value={formData.degreeCollege} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Year of Passing*</label>
                <input type="text" name="degreeYear" value={formData.degreeYear} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Percentage*</label>
                <input type="text" name="degreePercentage" value={formData.degreePercentage} onChange={handleChange} className="input" />
              </div>
            </div>
          </>
        )}
        {step === 4 && (
          <>
            <h2 className="text-xl font-semibold text-blue-700">Summary & Experience</h2>
            <div className="flex flex-col gap-4">
              <div>
                <label className="block font-medium mb-1">Short Summary about You*</label>
                <textarea name="summary" value={formData.summary} onChange={handleChange} className="input" />
              </div>
              <div>
                <label className="block font-medium mb-1">Technical Skills (comma separated)*</label>
                <textarea name="technicalSkills" value={formData.technicalSkills} onChange={handleChange} className="input" placeholder="e.g., Python, React, SQL"/>
              </div>
              <div>
                <label className="block font-medium mb-1">Soft Skills (comma separated)*</label>
                <textarea name="softSkills" value={formData.softSkills} onChange={handleChange} className="input" placeholder="e.g., Communication, Teamwork"/>
              </div>
              <div>
                <label className="block font-medium mb-1">Certifications (comma separated)*</label>
                <textarea name="certifications" value={formData.certifications} onChange={handleChange} className="input" placeholder="e.g., Python for Everybody, AWS Certified" />
              </div>
              <h3 className="text-lg font-medium text-gray-700 mt-6">Projects*</h3>
              {formData.projects.map((project, index) => (
                <div key={index} className="bg-gray-50 p-4 shadow rounded mb-4">
                  <div>
                    <label className="block font-medium mb-1">Project Title</label>
                    <input type="text" value={project.title} onChange={(e) => handleProjectChange(index, "title", e.target.value)} className="input" />
                  </div>
                  <div>
                    <label className="block font-medium mb-1">Key Points (comma separated)</label>
                    <textarea value={project.keyPoints} onChange={(e) => handleProjectChange(index, "keyPoints", e.target.value)} className="input" />
                  </div>
                </div>
              ))}
              <button type="button" className="text-blue-600 border border-blue-600 rounded px-4 py-1 hover:bg-blue-50 transition" onClick={addNewProject}>
                + Add Another Project
              </button>
              <div>
                <label className="block font-medium mb-1">Are you a fresher?*</label>
                <select name="isFresher" value={formData.isFresher} onChange={handleChange} className="input">
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>
              {formData.isFresher === "No" && (
                <div>
                  <label className="block font-medium mb-1">Experience*</label>
                  <textarea name="experience" value={formData.experience} onChange={handleChange} className="input" />
                </div>
              )}
            </div>
          </>
        )}
        {step === 5 && (
          <>
            <h2 className="text-xl font-semibold text-blue-700">Certificates / Images</h2>
            <div className="flex flex-col md:flex-row gap-8">
              <div>
                <label className="block font-medium mb-1">Upload Certificate*</label>
                <div className="flex items-center gap-4">
                  {formData.certificateImage ? (
                    <img src={formData.certificateImage} alt="Certificate" className="rounded border w-40 h-32 object-cover"/>
                  ) : (
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => fileInputRef1.current.click()}
                    >
                      Upload Certificate
                    </button>
                  )}
                  <input type="file" ref={fileInputRef1} style={{ display: "none" }} onChange={(e) => handleFileChange(e, "certificateImage")} />
                </div>
              </div>
              <div>
                <label className="block font-medium mb-1">Upload Profile Photo*</label>
                <div className="flex items-center gap-4">
                  {formData.profileImage ? (
                    <img src={formData.profileImage} alt="Profile" className="rounded-full border w-32 h-32 object-cover"/>
                  ) : (
                    <button
                      type="button"
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                      onClick={() => fileInputRef2.current.click()}
                    >
                      Upload Photo
                    </button>
                  )}
                  <input type="file" ref={fileInputRef2} style={{ display: "none" }} onChange={(e) => handleFileChange(e, "profileImage")} />
                </div>
              </div>
            </div>
          </>
        )}
        {step === 6 && (
          <div className="flex flex-col items-center justify-center h-full mt-20">
            <h2 className="text-2xl font-semibold text-green-600">All Done!</h2>
            <p className="mt-4 mb-8 text-lg">Your profile is complete. Go to your dashboard.</p>
            <button
              type="button"
              className="px-6 py-2 bg-green-600 text-white rounded hover:bg-green-700"
              onClick={() => {
                localStorage.setItem("StudentProfile", JSON.stringify(formData));
                alert("Profile completed successfully!");
                navigate("/student-dashboard");
              }}
            >
              Go to Dashboard
            </button>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar steps */}
      <div className="w-64 bg-white border-r border-gray-200 py-8 px-4">
        <ul className="space-y-6">
          {steps.map((step, index) => (
            <li key={index} className={`px-3 py-2 rounded border-l-4 ${index === currentStep ? "bg-blue-100 border-blue-600 font-semibold" : "border-transparent text-gray-600"}`}>
              <div className="text-base">{step.title}</div>
              <div className="text-sm text-gray-400">{step.subtitle}</div>
            </li>
          ))}
        </ul>
      </div>
      {/* Form Content */}
      <div className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-2xl mx-auto bg-white rounded shadow px-8 py-10">
          {renderStepContent(currentStep)}
          <div className="flex justify-between mt-10">
            {currentStep > 0 && (
              <button className="px-5 py-2 bg-gray-500 text-white rounded hover:bg-gray-600" onClick={goToPreviousStep}>
                Go Back
              </button>
            )}
            {currentStep < steps.length - 1 && (
              <button className="px-5 py-2 bg-blue-600 text-white rounded hover:bg-blue-700" onClick={goToNextStep}>
                Save and Proceed
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentProfileForm;
