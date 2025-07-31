// import React, { useState, useRef, useEffect } from "react";
// import "./ProfileForm.css";
// import { useNavigate } from "react-router-dom";

// const steps = [
//   { title: "Basic Details", subtitle: "Let's get you started!" },
//   { title: "Location and Others", subtitle: "Provide the Details!" },
//   { title: "Contact Details", subtitle: "Fill in your Contact Details" },
//   { title: "Admin/Principal Details", subtitle: "Provide the College Admin Details" },
//   { title: "Certificates / Images", subtitle: "Provide required Certificates and Images" },
//   { title: "All Done!", subtitle: "All done, let's go!" },
// ];

// const CollegeProfileForm = () => {
//   const navigate = useNavigate();
//   const fileInputRef1 = useRef(null);
//   const fileInputRef2 = useRef(null);

//   const [currentStep, setCurrentStep] = useState(0);
//   const [formData, setFormData] = useState({
//     collegeName: "",
//     regNumber: "",
//     collegeEmail: "",
//     collegeType: "",
//     establishedYear: "",
//     university: "",
//     state: "",
//     city: "",
//     pinCode: "",
//     address: "",
//     contactNumber: "",
//     website: "",
//     code: "",
//     principalName: "",
//     principalEmail: "",
//     certificateImage: null,
//     logoImage: null,
//   });

//   useEffect(() => {
//     const savedData = localStorage.getItem("ProfilePage");
//     if (savedData) {
//       try {
//         setFormData(JSON.parse(savedData));
//       } catch (e) {
//         console.error("Failed to parse saved profile data:", e);
//       }
//     }
//   }, []);

//   const goToNextStep = () => {
//     let isValid = true;
//     const fieldsToValidate = {
//       0: ["collegeName", "regNumber", "collegeEmail", "collegeType", "establishedYear", "university"],
//       1: ["state", "city", "pinCode", "address"],
//       2: ["contactNumber", "collegeEmail", "website", "code"],
//       3: ["principalName", "principalEmail"],
//       4: ["certificateImage", "logoImage"],
//     };

//     const fields = fieldsToValidate[currentStep] || [];
//     for (let field of fields) {
//       if (!formData[field] || formData[field].toString().trim() === "") {
//         isValid = false;
//         alert(`Please fill in the required field: ${field}`);
//         break;
//       }
//     }

//     if (isValid && currentStep < steps.length - 1) {
//       setCurrentStep(currentStep + 1);
//     }
//   };

//   const goToPreviousStep = () => {
//     if (currentStep > 0) {
//       setCurrentStep(currentStep - 1);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleFileChange = (e, field) => {
//     const file = e.target.files[0];
//     if (file) {
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setFormData((prev) => ({ ...prev, [field]: reader.result }));
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return (
//           <>
//             <h2>Basic Details</h2>
//             <div className="input-row">
//               <label>College Name*</label>
//               <input type="text" name="collegeName" value={formData.collegeName} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//               <label>Departments*</label>
//               <input type="text" name="regNumber" value={formData.regNumber} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//               <label>College Email*</label>
//               <input type="email" name="collegeEmail" value={formData.collegeEmail} onChange={handleChange} />
//             </div>
//              <div className="input-row">
//               <label>Established Year*</label>
//               <input type="number" name="establishedYear" value={formData.establishedYear} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//   <label>College Type*</label>
//   <select
//     name="collegeType"
//     value={formData.collegeType}
//     onChange={handleChange}
//     required
//   >
//     <option value="">-- Select College Type --</option>
//     <option value="Autonomous">Autonomous</option>
//     <option value="University">University</option>
//   </select>
// </div>

// {formData.collegeType === "University" && (
//   <div className="input-row">
//     <label>University Name*</label>
//     <input
//       type="text"
//       name="university"
//       value={formData.university || ""}
//       onChange={handleChange}
//       required
//     />
//   </div>
// )}

//           </>
//         );
//       case 1:
//         return (
//           <>
//             <h2>Location*</h2>
//             <div className="input-row">
//               <label>State*</label>
//               <input type="text" name="state" value={formData.state} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//               <label>City*</label>
//               <input type="text" name="city" value={formData.city} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//               <label>Pin Code*</label>
//               <input type="text" name="pinCode" value={formData.pinCode} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//               <label>College Address*</label>
//               <textarea name="address" value={formData.address} onChange={handleChange}></textarea>
//             </div>
//           </>
//         );
//       case 2:
//         return (
//           <>
//             <h2>Contact Details</h2>
//             <div className="input-row">
//               <label>Phone Number*</label>
//               <input type="text" name="contactNumber" value={formData.contactNumber} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//               <label>College Email*</label>
//               <input type="email" name="collegeEmail" value={formData.collegeEmail} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//               <label>College Website*</label>
//               <input type="text" name="website" value={formData.website} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//               <label>College Code*</label>
//               <input type="text" name="code" value={formData.code} onChange={handleChange} />
//             </div>
//           </>
//         );
//       case 3:
//         return (
//           <>
//             <h2>Admin/Principal Details</h2>
//             <div className="input-row">
//               <label>Principal Name*</label>
//               <input type="text" name="principalName" value={formData.principalName} onChange={handleChange} />
//             </div>
//             <div className="input-row">
//               <label>Principal Email*</label>
//               <input type="email" name="principalEmail" value={formData.principalEmail} onChange={handleChange} />
//             </div>
//           </>
//         );
//       case 4:
//         return (
//           <>
//             <h2>Certificates / Images</h2>
//             <div className="input-row">
//               <label>Upload Affiliation Certificate*</label>
//               <div className="upload-box">
//                 {formData.certificateImage ? (
//                   <img src={formData.certificateImage} alt="Certificate" className="upload-preview" />
//                 ) : (
//                   <button type="button" className="upload-button" onClick={() => fileInputRef1.current.click()}>
//                     Upload Certificate
//                   </button>
//                 )}
//                 <input
//                   type="file"
//                   ref={fileInputRef1}
//                   style={{ display: "none" }}
//                   onChange={(e) => handleFileChange(e, "certificateImage")}
//                 />
//               </div>
//             </div>
//             <div className="input-row">
//               <label>Upload College Logo*</label>
//               <div className="upload-box">
//                 {formData.logoImage ? (
//                   <img src={formData.logoImage} alt="Logo" className="upload-preview" />
//                 ) : (
//                   <button type="button" className="upload-button" onClick={() => fileInputRef2.current.click()}>
//                     Upload Logo
//                   </button>
//                 )}
//                 <input
//                   type="file"
//                   ref={fileInputRef2}
//                   style={{ display: "none" }}
//                   onChange={(e) => handleFileChange(e, "logoImage")}
//                 />
//               </div>
//             </div>
//           </>
//         );
//       case 5:
//         return (
//           <>
//             <h2>All Done!</h2>
//             <p>You’ve successfully completed your profile. Click below to go to your dashboard.</p>
//             <button
//               type="button"
//               className="submit-button"
//               onClick={() => {
//                 localStorage.setItem("collegeProfileData", JSON.stringify(formData));
//                 alert("Profile completed successfully!");
//                 navigate("/college-dashboard");
//               }}
//             >
//               Go to Dashboard
//             </button>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-sidebar">
//         <ul>
//           {steps.map((step, index) => (
//             <li key={index} className={index === currentStep ? "active" : ""}>
//               {step.title}
//               <br />
//               <span>{step.subtitle}</span>
//             </li>
//           ))}
//         </ul>
//       </div>

//       <div className="form-content">
//         {renderStepContent(currentStep)}

//         <div className="form-buttons">
//           {currentStep > 0 && (
//             <button className="back-btn" onClick={goToPreviousStep}>
//               Go Back
//             </button>
//           )}
//           {currentStep < steps.length - 1 && (
//             <button className="next-btn" onClick={goToNextStep}>
//               Save and Proceed
//             </button>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CollegeProfileForm;














import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfileForm.css";

const steps = [
  { title: "College Info", subtitle: "Basic details of the institution" },
  { title: "Logo & Streams", subtitle: "Upload and select courses" },
  { title: "POC Details", subtitle: "Point of contact details" },
  { title: "Done", subtitle: "Submission complete" },
];

const courseOptions = {
  "B.Tech": ["CSE", "ECE", "MECH", "CIVIL"],
  "M.Tech": ["Structural", "VLSI", "Power Systems"],
  "Ph.D": ["AI", "Robotics", "Data Science"]
};

const CollegeRegistrationForm = () => {
  const navigate = useNavigate();
  const logoRef = useRef(null);
  const [currentStep, setCurrentStep] = useState(0);

  const [formData, setFormData] = useState({
    collegeName: "",
    contactNo: "",
    email: "",
    registrationNo: "",
    address: "",
    logo: null,
    stream: "",
    course: "",
    pocName: "",
    pocMobile: "",
    pocEmail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updated = { ...prev, [name]: value };
      if (name === "stream") {
        updated.course = ""; // Reset course when stream changes
      }
      return updated;
    });
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
    localStorage.setItem("CollegeRegistration", JSON.stringify(formData));
    alert("College registered successfully!");
    navigate("/college-dashboard");
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return (
          <>
            <h2>College Info</h2>
            <input name="collegeName" placeholder="College Name*" value={formData.collegeName} onChange={handleChange} />
            <input name="contactNo" placeholder="Contact No*" value={formData.contactNo} onChange={handleChange} />
            <input name="email" type="email" placeholder="Email ID*" value={formData.email} onChange={handleChange} />
            <input name="registrationNo" placeholder="Registration No*" value={formData.registrationNo} onChange={handleChange} />
            <input name="address" placeholder="Address*" value={formData.address} onChange={handleChange} />
          </>
        );
      case 1:
        return (
          <>
            <h2>Logo & Streams</h2>
            <div className="upload-box">
              <label>Upload College Logo</label>
              <button type="button" onClick={() => logoRef.current.click()}>Upload Logo</button>
              <input type="file" ref={logoRef} style={{ display: "none" }} onChange={handleFileChange} />
              {formData.logo && <img src={formData.logo} alt="Logo Preview" />}
            </div>
            <select name="stream" value={formData.stream} onChange={handleChange}>
              <option value="">-- Select Stream --</option>
              <option value="B.Tech">B.Tech</option>
              <option value="M.Tech">M.Tech</option>
              <option value="Ph.D">Ph.D</option>
            </select>
            {formData.stream && (
              <select name="course" value={formData.course} onChange={handleChange}>
                <option value="">-- Select Course --</option>
                {courseOptions[formData.stream].map((course, idx) => (
                  <option key={idx} value={course}>{course}</option>
                ))}
              </select>
            )}
          </>
        );
      case 2:
        return (
          <>
            <h2>POC Details</h2>
            <input name="pocName" placeholder="POC Name*" value={formData.pocName} onChange={handleChange} />
            <input name="pocMobile" placeholder="Mobile No*" value={formData.pocMobile} onChange={handleChange} />
            <input name="pocEmail" type="email" placeholder="Email*" value={formData.pocEmail} onChange={handleChange} />
          </>
        );
      case 3:
        return (
          <>
            <h2>Done!</h2>
            <p>Your college has been successfully registered.</p>
            <button onClick={handleSubmit}>Go to Dashboard</button>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <div className="c-form-container">
      <aside className="c-form-sidebar">
        <ul>
          {steps.map((step, i) => (
            <li key={i} className={i === currentStep ? "active" : ""}>
              {step.title}<br />
              <span>{step.subtitle}</span>
            </li>
          ))}
        </ul>
      </aside>

      <main className="c-form-content">
        {renderStepContent(currentStep)}
        <div className="c-form-buttons">
          {currentStep > 0 && <button onClick={prevStep}>Back</button>}
          {currentStep < steps.length - 1 && <button onClick={nextStep}>Next</button>}
        </div>
      </main>
    </div>
  );
};

export default CollegeRegistrationForm;
