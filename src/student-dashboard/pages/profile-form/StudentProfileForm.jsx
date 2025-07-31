import React, { useState, useRef, useEffect } from "react";
import "./StudentProfileForm.css";
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

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h2>Basic Details</h2>
            <div className="input-row"><label>Student Name*</label><input type="text" name="studentName" value={formData.studentName} onChange={handleChange} /></div>
            <div className="input-row"><label>Student ID*</label><input type="text" name="studentId" value={formData.studentId} onChange={handleChange} /></div>
            <div className="input-row"><label>Email*</label><input type="email" name="email" value={formData.email} onChange={handleChange} /></div>
            <div className="input-row"><label>Gender*</label>
              <select name="gender" value={formData.gender} onChange={handleChange}>
                <option value="">-- Select Gender --</option><option value="Male">Male</option><option value="Female">Female</option><option value="Other">Other</option>
              </select>
            </div>
            <div className="input-row"><label>Date of Birth*</label><input type="date" name="dob" value={formData.dob} onChange={handleChange} /></div>
          </>
        );
      case 1:
        return (
          <>
            <h2>Location</h2>
            <div className="input-row"><label>State*</label><input type="text" name="state" value={formData.state} onChange={handleChange} /></div>
            <div className="input-row"><label>City*</label><input type="text" name="city" value={formData.city} onChange={handleChange} /></div>
            <div className="input-row"><label>Pin Code*</label><input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} /></div>
            <div className="input-row"><label>Address*</label><textarea name="address" value={formData.address} onChange={handleChange}></textarea></div>
          </>
        );
      case 2:
        return (
          <>
            <h2>Contact Details</h2>
            <div className="input-row"><label>Phone Number*</label><input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} /></div>
            <div className="input-row"><label>Alternate Email*</label><input type="email" name="alternateEmail" value={formData.alternateEmail} onChange={handleChange} /></div>
          </>
        );
      case 3:
        return (
          <>
            <h2>Education Details</h2>
            <h3>10th Standard</h3>
            <div className="input-row"><label>School Name*</label><input type="text" name="tenthSchool" value={formData.tenthSchool} onChange={handleChange} /></div>
            <div className="input-row"><label>Year of Passing*</label><input type="text" name="tenthYear" value={formData.tenthYear} onChange={handleChange} /></div>
            <div className="input-row"><label>Percentage*</label><input type="text" name="tenthPercentage" value={formData.tenthPercentage} onChange={handleChange} /></div>
            <h3>Intermediate</h3>
            <div className="input-row"><label>College Name*</label><input type="text" name="interCollege" value={formData.interCollege} onChange={handleChange} /></div>
            <div className="input-row"><label>Year of Passing*</label><input type="text" name="interYear" value={formData.interYear} onChange={handleChange} /></div>
            <div className="input-row"><label>Percentage*</label><input type="text" name="interPercentage" value={formData.interPercentage} onChange={handleChange} /></div>
            <h3>Degree / B.Tech</h3>
            <div className="input-row"><label>College Name*</label><input type="text" name="degreeCollege" value={formData.degreeCollege} onChange={handleChange} /></div>
            <div className="input-row"><label>Year of Passing*</label><input type="text" name="degreeYear" value={formData.degreeYear} onChange={handleChange} /></div>
            <div className="input-row"><label>Percentage*</label><input type="text" name="degreePercentage" value={formData.degreePercentage} onChange={handleChange} /></div>
          </>
        );
      case 4:
        return (
          <>
            <h2>Summary & Experience</h2>
            <div className="input-row"><label>Short Summary about You*</label><textarea name="summary" value={formData.summary} onChange={handleChange}></textarea></div>
            <div className="input-row"><label>Technical Skills (comma separated)*</label><textarea name="technicalSkills" value={formData.technicalSkills} onChange={handleChange} placeholder="e.g., Python, React, SQL"></textarea></div>
            <div className="input-row"><label>Soft Skills (comma separated)*</label><textarea name="softSkills" value={formData.softSkills} onChange={handleChange} placeholder="e.g., Communication, Teamwork"></textarea></div>
            <div className="input-row"><label>Certifications (comma separated)*</label><textarea name="certifications" value={formData.certifications} onChange={handleChange} placeholder="e.g., Python for Everybody, AWS Certified"></textarea></div>
            <h3>Projects*</h3>
            {formData.projects.map((project, index) => (
              <div key={index} className="project-group">
                <div className="input-row"><label>Project Title</label><input type="text" value={project.title} onChange={(e) => handleProjectChange(index, "title", e.target.value)} /></div>
                <div className="input-row"><label>Key Points (comma separated)</label><textarea value={project.keyPoints} onChange={(e) => handleProjectChange(index, "keyPoints", e.target.value)}></textarea></div>
              </div>
            ))}
            <button type="button" className="add-btn" onClick={addNewProject}>+ Add Another Project</button>
            <div className="input-row"><label>Are you a fresher?*</label><select name="isFresher" value={formData.isFresher} onChange={handleChange}><option value="Yes">Yes</option><option value="No">No</option></select></div>
            {formData.isFresher === "No" && <div className="input-row"><label>Experience*</label><textarea name="experience" value={formData.experience} onChange={handleChange}></textarea></div>}

            
          </>
        );
      case 5:
        return (
          <>
            <h2>Certificates / Images</h2>
            <div className="input-row">
              <label>Upload Certificate*</label>
              <div className="upload-box">
                {formData.certificateImage ? (
                  <img src={formData.certificateImage} alt="Certificate" className="upload-preview" />
                ) : (
                  <button type="button" className="upload-button" onClick={() => fileInputRef1.current.click()}>
                    Upload Certificate
                  </button>
                )}
                <input type="file" ref={fileInputRef1} style={{ display: "none" }} onChange={(e) => handleFileChange(e, "certificateImage")} />
              </div>
            </div>
            <div className="input-row">
              <label>Upload Profile Photo*</label>
              <div className="upload-box">
                {formData.profileImage ? (
                  <img src={formData.profileImage} alt="Profile" className="upload-preview" />
                ) : (
                  <button type="button" className="upload-button" onClick={() => fileInputRef2.current.click()}>
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
            <h2>All Done!</h2>
            <p>Your profile is complete. Go to your dashboard.</p>
            <button
              type="button"
              className="submit-button"
              onClick={() => {
                localStorage.setItem("StudentProfile", JSON.stringify(formData));
                alert("Profile completed successfully!");
                navigate("/studentdashboard");
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
    <div className="form-container">
      <div className="form-sidebar">
        <ul>
          {steps.map((step, index) => (
            <li key={index} className={index === currentStep ? "active" : ""}>
              {step.title}<br /><span>{step.subtitle}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="form-content">
        {renderStepContent(currentStep)}
        <div className="form-buttons">
          {currentStep > 0 && <button className="back-btn" onClick={goToPreviousStep}>Go Back</button>}
          {currentStep < steps.length - 1 && <button className="next-btn" onClick={goToNextStep}>Save and Proceed</button>}
        </div>
      </div>
    </div>
  );
};

export default StudentProfileForm;
