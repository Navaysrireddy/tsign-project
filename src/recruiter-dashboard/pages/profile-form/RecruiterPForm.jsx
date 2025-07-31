import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./RecruiterPForm.css";

const steps = [
  { title: "Company Info", subtitle: "Basic company details" },
  { title: "Recruiter Details", subtitle: "HR/POC details" },
  { title: "Upload & Category", subtitle: "Logo and type of company" },
  { title: "Done", subtitle: "Submission complete" },
];

const RecruiterRegistrationForm = () => {
  const navigate = useNavigate();
  const logoRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    companyName: "",
    contactNo: "",
    email: "",
    website: "",
    address: "",
    logo: null,
    recruiterName: "",
    recruiterMobile: "",
    recruiterEmail: "",
    designation: "",
    category: "IT",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData((prev) => ({ ...prev, logo: reader.result }));
      };
      reader.readAsDataURL(file);
    }
  };

  const nextStep = () => {
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 0));
  };

  const handleSubmit = () => {
    localStorage.setItem("RecruiterRegistration", JSON.stringify(formData));
    alert("Company registered successfully!");
    navigate("/recruiterdashboard");
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h2>Company Info</h2>
            <input name="companyName" placeholder="Company Name*" value={formData.companyName} onChange={handleChange} />
            <input name="contactNo" placeholder="Contact No*" value={formData.contactNo} onChange={handleChange} />
            <input name="email" type="email" placeholder="Email ID*" value={formData.email} onChange={handleChange} />
            <input name="website" placeholder="Website*" value={formData.website} onChange={handleChange} />
            <input name="address" placeholder="Address*" value={formData.address} onChange={handleChange} />
          </>
        );
      case 1:
        return (
          <>
            <h2>Recruiter Details</h2>
            <input name="recruiterName" placeholder="Recruiter Name*" value={formData.recruiterName} onChange={handleChange} />
            <input name="recruiterMobile" placeholder="Mobile No*" value={formData.recruiterMobile} onChange={handleChange} />
            <input name="recruiterEmail" type="email" placeholder="Email*" value={formData.recruiterEmail} onChange={handleChange} />
            <input name="designation" placeholder="Designation*" value={formData.designation} onChange={handleChange} />
          </>
        );
      case 2:
        return (
          <>
            <h2>Upload & Category</h2>
            <div className="upload-box">
              <label>Upload Company Logo</label>
              <button type="button" onClick={() => logoRef.current.click()}>Upload Logo</button>
              <input type="file" ref={logoRef} style={{ display: "none" }} onChange={handleFileChange} />
              {formData.logo && <img src={formData.logo} alt="Logo Preview" />}
            </div>
            <select name="category" value={formData.category} onChange={handleChange}>
              <option value="IT">IT</option>
              <option value="NON IT">NON IT</option>
            </select>
          </>
        );
      case 3:
        return (
          <>
            <h2>Done!</h2>
            <p>Your company has been successfully registered.</p>
            <button onClick={handleSubmit}>Go to Dashboard</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="form-container">
      <aside className="form-sidebar">
        <ul>
          {steps.map((step, i) => (
            <li key={i} className={i === currentStep ? "active" : ""}>
              {step.title}<br />
              <span>{step.subtitle}</span>
            </li>
          ))}
        </ul>
      </aside>

      <main className="form-content">
        {renderStepContent(currentStep)}
        <div className="form-buttons">
          {currentStep > 0 && <button onClick={prevStep}>Back</button>}
          {currentStep < steps.length - 1 && <button onClick={nextStep}>Next</button>}
        </div>
      </main>
    </div>
  );
};

export default RecruiterRegistrationForm;
