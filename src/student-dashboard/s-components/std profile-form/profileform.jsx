import React, { useState, useEffect, useRef } from 'react';
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

const initialFormData = {
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
  password: "",
  newPassword: "",
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
  certificateImages: [],
  profileImage: null,
  projects: [{ title: "", keyPoints: "" }],
};

const StudentProfileForm = () => {
  const navigate = useNavigate();
  const fileInputRef1 = useRef(null);
  const fileInputRef2 = useRef(null);

  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});

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

  const validateField = (name, value, extra = {}) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pinPattern = /^\d{6}$/;
    const yearPattern = /^\d{4}$/;
    const phonePattern = /^\d{10}$/;
    const studentIdPattern = /^\d+$/;
    const percentagePattern = /^(100(\.0{1,2})?|[1-9]?\d(\.\d{1,2})?)$/;

    switch (name) {
      case "studentName":
        return value.trim() === "" ? "Student name is required" : null;
      case "studentId":
        return !studentIdPattern.test(value)
          ? "Student ID must be numeric only" : null;
      case "email":
        return !emailPattern.test(value) ? "Invalid email address" : null;
      case "gender":
        return value === "" ? "Gender is required" : null;
      case "dob":
        if (!value) return "Date of Birth is required";
        const year = value.split("-")[0];
        if (!yearPattern.test(year)) return "Year of Birth must be 4 digits";
        const yearInt = parseInt(year, 10);
        if (yearInt > new Date().getFullYear() || yearInt < 1970)
          return "Year out of valid range";
        return null;
      case "state":
        return value.trim() === "" ? "State is required" : null;
      case "city":
        return value.trim() === "" ? "City is required" : null;
      case "pinCode":
        return !pinPattern.test(value) ? "Pin code must be 6 digits" : null;
      case "address":
        return value.trim() === "" ? "Address is required" : null;
      case "contactNumber":
        return !phonePattern.test(value)
          ? "Valid phone is required (10 digits)" : null;
      case "alternateEmail":
        return value && !emailPattern.test(value) ? "Invalid alternate email" : null;
      case "password":
        return !value || value.length < 6
          ? "Password must be at least 6 characters"
          : null;
      case "newPassword":
        if (!value || value.length < 6) return "New password must be at least 6 characters";
        if (value === extra.password) return "New password must be different from current password";
        return null;
      case "tenthSchool":
      case "interCollege":
      case "degreeCollege":
        return value.trim() === "" ? "College/School name is required" : null;
      case "tenthYear":
      case "interYear":
      case "degreeYear":
        return !yearPattern.test(value) ? "Year must be 4 digits" : null;
      case "tenthPercentage":
      case "interPercentage":
      case "degreePercentage":
        return !percentagePattern.test(value) ? "Enter valid percentage (0-100)" : null;
      case "summary":
        return value.trim().length < 10 ? "Add a short summary (min 10 chars)" : null;
      case "technicalSkills":
        return value.trim().length < 3 ? "Add at least one technical skill" : null;
      case "softSkills":
        return value.trim().length < 3 ? "Add at least one soft skill" : null;
      case "certifications":
        return value.trim().length < 2 ? "Add at least one certification or N/A" : null;
      case "certificateImages":
        return (!value || value.length === 0) ? "At least one certificate image required" : null;
      case "profileImage":
        return !value ? "Profile photo required" : null;
      case "isFresher":
        return value === "" ? "Please select fresher status" : null;
      case "experience":
        if (extra.isFresher === "No")
          return value.trim().length < 5 ? "Describe your experience (min 5 chars)" : null;
        else return null;
      default:
        return null;
    }
  };

  const validateFieldsForCurrentStep = () => {
    let isValid = true;
    let validationErrors = {};
    const fieldsToValidate = {
      0: ["studentName", "studentId", "email", "gender", "dob"],
      1: ["state", "city", "pinCode", "address"],
      2: ["contactNumber", "alternateEmail", "password", "newPassword", "confirmPassword"],
      3: [
        "tenthSchool", "tenthYear", "tenthPercentage",
        "interCollege", "interYear", "interPercentage",
        "degreeCollege", "degreeYear", "degreePercentage"
      ],
      4: ["summary", "technicalSkills", "softSkills", "certifications", "isFresher"],
      5: ["certificateImages", "profileImage"],
    };
    const fields = fieldsToValidate[currentStep] || [];

      for (let field of fields) {
    const errMsg = validateField(field, formData[field], {
      password: formData.password,
      newPassword: formData.newPassword, // pass newPassword for confirmPassword matching
      isFresher: formData.isFresher
    });
    if (errMsg) {
      isValid = false;
      validationErrors[field] = errMsg;
    }
  }

    // Experience (for non-freshers in step 4)
    if (currentStep === 4 && formData.isFresher === "No") {
      const errMsg = validateField("experience", formData.experience, { isFresher: formData.isFresher });
      if (errMsg) {
        isValid = false;
        validationErrors["experience"] = errMsg;
      }
    }
    // Projects (for step 4)
    if (currentStep === 4) {
      formData.projects.forEach((proj, idx) => {
        if (!proj.title.trim()) {
          isValid = false;
          validationErrors[`project_title_${idx}`] = "Project title required";
        }
        if (!proj.keyPoints.trim()) {
          isValid = false;
          validationErrors[`project_keyPoints_${idx}`] = "Enter key points for project";
        }
      });
    }

    setErrors(validationErrors);
    return isValid;
  };

  const goToNextStep = () => {
    if (validateFieldsForCurrentStep()) {
      setErrors({});
      if (currentStep < steps.length - 1) {
        setCurrentStep(currentStep + 1);
      }
    }
  };

  const goToPreviousStep = () => {
    if (currentStep > 0) setCurrentStep(currentStep - 1);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: null }));
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index][field] = value;
    setFormData((prev) => ({ ...prev, projects: updatedProjects }));
    setErrors((prev) => ({
      ...prev,
      [`project_${field}_${index}`]: null
    }));
  };

  const addNewProject = () => {
    setFormData((prev) => ({
      ...prev,
      projects: [...prev.projects, { title: "", keyPoints: "" }]
    }));
  };

  const renderInput = (label, name, type = "text", props = {}) => (
    <div className="mb-3 flex flex-col">
      <label className="font-medium">{label}</label>
      <input
        type={type}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className={`border rounded px-3 py-2 focus:ring-2 ${errors[name] ? 'border-red-500' : 'focus:ring-blue-400'}`}
        {...props}
      />
      {errors[name] && (
        <div className="text-red-600 text-xs">{errors[name]}</div>
      )}
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
        className={`border rounded px-3 py-2 focus:ring-2 ${errors[name] ? 'border-red-500' : 'focus:ring-blue-400'}`}
      />
      {errors[name] && (
        <div className="text-red-600 text-xs">{errors[name]}</div>
      )}
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
                className={`border px-3 py-2 rounded ${errors.gender ? "border-red-500" : ""}`}
              >
                <option value="">-- Select Gender --</option>
                <option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>
              </select>
              {errors.gender &&
                <div className="text-red-600 text-xs">{errors.gender}</div>
              }
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
      {renderInput("Current Password*", "password", "password")}
      {renderInput("New Password*", "newPassword", "password")}
      {renderInput("Confirm New Password*", "confirmPassword", "password")}
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
                <div className="mb-2">
                  <label className="font-medium">Project Title *</label>
                  <input
                    type="text"
                    value={project.title}
                    onChange={(e) => handleProjectChange(index, "title", e.target.value)}
                    className={`border rounded px-3 py-2 w-full ${errors[`project_title_${index}`] ? "border-red-500" : ""}`}
                  />
                  {errors[`project_title_${index}`] &&
                    <div className="text-red-600 text-xs">{errors[`project_title_${index}`]}</div>
                  }
                </div>
                <div>
                  <label className="font-medium">Key Points *</label>
                  <textarea
                    value={project.keyPoints}
                    onChange={(e) => handleProjectChange(index, "keyPoints", e.target.value)}
                    className={`border rounded px-3 py-2 w-full ${errors[`project_keyPoints_${index}`] ? "border-red-500" : ""}`}
                  />
                  {errors[`project_keyPoints_${index}`] &&
                    <div className="text-red-600 text-xs">{errors[`project_keyPoints_${index}`]}</div>
                  }
                </div>
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
                className={`border rounded px-3 py-2 ml-2 ${errors.isFresher ? "border-red-500" : ""}`}
              >
                <option value="Yes">Yes</option><option value="No">No</option>
              </select>
              {errors.isFresher && (
                <div className="text-red-600 text-xs">{errors.isFresher}</div>
              )}
            </div>
            {formData.isFresher === "No" && (
              <div>
                <label className="font-medium">Experience*</label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleChange}
                  className={`border rounded px-3 py-2 w-full ${errors.experience ? "border-red-500" : ""}`}
                />
                {errors.experience && (
                  <div className="text-red-600 text-xs">{errors.experience}</div>
                )}
              </div>
            )}
          </>
        );
      case 5:
        return (
          <>
            <div className="mb-8">
              <label className="font-medium">Upload Certificate*</label>
              <div className="mt-2 flex items-center gap-4">
                {!formData.certificateImages?.length ? (
                  <>
                    <button
                      className="px-4 py-2 bg-indigo-500 text-white rounded"
                      type="button"
                      onClick={() => fileInputRef1.current.click()}
                    >
                      Upload Certificates
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef1}
                      accept="image/*"
                      multiple
                      style={{ display: "none" }}
                      onChange={(e) => {
                        const files = Array.from(e.target.files);
                        const readers = files.map(file =>
                          new Promise((resolve) => {
                            const reader = new FileReader();
                            reader.onloadend = () => resolve(reader.result);
                            reader.readAsDataURL(file);
                          })
                        );
                        Promise.all(readers).then(results => {
                          setFormData((prev) => ({
                            ...prev,
                            certificateImages: [...(prev.certificateImages || []), ...results],
                          }));
                          setErrors((prev) => ({ ...prev, certificateImages: null }));
                        });
                      }}
                    />
                  </>
                ) : (
                  <div className="flex flex-wrap">
                    {formData.certificateImages.map((img, idx) => (
                      <div key={idx} className="relative w-32 h-32 mr-2 mb-2">
                        <img
                          src={img}
                          alt={`Certificate-${idx}`}
                          className="w-32 h-32 object-cover rounded border"
                        />
                        <button
                          type="button"
                          className="absolute top-1 right-1 text-red-500 bg-white rounded-full p-1"
                          onClick={() =>
                            setFormData((prev) => ({
                              ...prev,
                              certificateImages: prev.certificateImages.filter((_, i) => i !== idx)
                            }))
                          }
                        >✖</button>
                      </div>
                    ))}
                  </div>
                )}
                {errors.certificateImages && (
                  <div className="text-red-600 text-xs">{errors.certificateImages}</div>
                )}
              </div>
            </div>
            <div className="mb-8">
              <label className="font-medium">Upload Profile Photo*</label>
              <div className="mt-2 flex items-center gap-4">
                {!formData.profileImage ? (
                  <>
                    <button
                      className="px-4 py-2 bg-indigo-500 text-white rounded"
                      type="button"
                      onClick={() => fileInputRef2.current.click()}
                    >
                      Upload Photo
                    </button>
                    <input
                      type="file"
                      ref={fileInputRef2}
                      accept="image/*"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        const file = e.target.files[0];
                        if (file) {
                          const reader = new FileReader();
                          reader.onloadend = () => {
                            setFormData((prev) => ({
                              ...prev,
                              profileImage: reader.result,
                            }));
                            setErrors((prev) => ({ ...prev, profileImage: null }));
                          };
                          reader.readAsDataURL(file);
                        }
                      }}
                    />
                  </>
                ) : (
                  <div className="flex flex-col">
                    <img
                      src={formData.profileImage}
                      alt="Profile"
                      className="w-40 h-40 object-cover rounded-full border"
                    />
                    <button
                      type="button"
                      className="text-red-500 mt-2 text-sm"
                      onClick={() =>
                        setFormData((prev) => ({ ...prev, profileImage: null }))
                      }
                    >
                      Remove
                    </button>
                  </div>
                )}
                {errors.profileImage && (
                  <div className="text-red-600 text-xs">{errors.profileImage}</div>
                )}
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
                localStorage.setItem("StudentProfileData", JSON.stringify(formData));
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
