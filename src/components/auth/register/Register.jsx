import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import logoImage from '../../../assests/TG-SIGN (2).png'; // Adjust the path as per your folder structure


import './Register.css';

const Register = () => {
  const [activeRole, setActiveRole] = useState('student');
  const [showStudentForm, setShowStudentForm] = useState(false);
  const navigate = useNavigate(); 

  // College registration state
  const [collegeStep, setCollegeStep] = useState(1);
  const [collegeFormData, setCollegeFormData] = useState({
    // Step 1
    collegeName: '',
    registrationNo: '',
    email: '',
    phone: '',
    address: '',
    state:'',
    pAssword:'',
    confirmpassword:'',
    logo: null,
    institutionCertificate:'',
    institutionSector:'',
    yearOfEstablishment:'',
    
    // Step 2
    stream: '',
    course: '',
    directorName:'',
    directorEmail:'',
    directorContact:'',
    pocName: '',
    pocEmail: '',
    pocMobile: '',
    
    // Step 3
    poCName: '',
    designation:'',
    poCEmail: '',
    poCMobile: '',
    
    password: '',
    confirmPassword: ''
  });

  // Recruiter registration state
  const [recruiterStep, setRecruiterStep] = useState(1);
  const [recruiterFormData, setRecruiterFormData] = useState({
    // Step 1
    companyName: '',
    website: '',
    email: '',
    phone: '',
    address: '',
    
    // Step 2
    recruiterName: '',
    designation: '',
    category: 'IT',
    logo: null,
    
    // Step 3
    password: '',
    confirmPassword: ''
  });

  const handleRoleChange = (role) => {
    setActiveRole(role);
    if (role === 'student') {
      setShowStudentForm(false);
    }
  };

  const handleCollegeInputChange = (e) => {
    const { name, value } = e.target;
    setCollegeFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleRecruiterInputChange = (e) => {
    const { name, value } = e.target;
    setRecruiterFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, setFormData) => {
  const file = e.target.files[0];
  const { name } = e.target; // gets 'logo' or 'institutionCertificate'

  if (file) {
    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData(prev => ({
        ...prev,
        [name]: reader.result  // dynamically update correct field
      }));
    };
    reader.readAsDataURL(file);
  }
};

  const nextCollegeStep = () => {
    if (collegeStep < 3) setCollegeStep(collegeStep + 1);
  };

  const prevCollegeStep = () => {
    if (collegeStep > 1) setCollegeStep(collegeStep - 1);
  };

  const nextRecruiterStep = () => {
    if (recruiterStep < 3) setRecruiterStep(recruiterStep + 1);
  };

  const prevRecruiterStep = () => {
    if (recruiterStep > 1) setRecruiterStep(recruiterStep - 1);
  };

  const handleCollegeSubmit = (e) => {
  e.preventDefault();
  console.log('College form submitted:', collegeFormData);
  alert('College registration successful!');
  navigate('/login'); // 👈 Redirect to login
};

const handleRecruiterSubmit = (e) => {
  e.preventDefault();
  console.log('Recruiter form submitted:', recruiterFormData);
  alert('Recruiter registration successful!');
  navigate('/login'); // 👈 Redirect to login
};

const handleStartRegistration = () => {
  navigate("/Profile-form")
};


  return (
    <div className="register-container"><div className="header-with-logo">
  <img src={logoImage} alt="Logo" className="header-logo" />
  <h2>Unlock your journey – start by registering!</h2><hr className="custom-hr" />
</div>
      {/* <h2>Unlock your journey – start by registering!</h2><hr className="custom-hr" /> */}
      

      <div className="role-selection">
        <div className="role-options">
          <div 
            className={`role-card ${activeRole === 'student' ? 'active' : ''}`}
            onClick={() => handleRoleChange('student')}
          >
            <h3>Student</h3>
            <p>Register as a student</p>
          </div>
          <div 
            className={`role-card ${activeRole === 'college' ? 'active' : ''}`}
            onClick={() => handleRoleChange('college')}
          >
            <h3>College</h3>
            <p>Register your institution</p>
          </div>
          <div 
            className={`role-card ${activeRole === 'recruiter' ? 'active' : ''}`}
            onClick={() => handleRoleChange('recruiter')}
          >
            <h3>Organization</h3>
            <p>Hire top talent</p>
          </div>
        </div>
      </div>

      <div className="form-section">
        {activeRole === 'student' && !showStudentForm && (
          <div className="start-registration">
            <h2>Let's Get Started!</h2>
            {/* <div classname="para-1"> */}
             {/* <p>Begin your journey by registering as a student</p> */}
              <button className="start-btn" onClick={handleStartRegistration}>
              Start Registration
              </button>
            {/* </div> */}
          </div>
        )}

        {activeRole === 'student' && showStudentForm && (
          <StudentForm />
        )}

        {activeRole === 'college' && (
          <div className="multi-step-form">
            <div className="step-indicator">
              <div className={`step ${collegeStep === 1 ? 'active' : ''}`}>
                <div className="step-number"></div>
                <div className="step-title">College Info</div>
              </div>
              <div className={`step ${collegeStep === 2 ? 'active' : ''}`}>
                <div className="step-number"></div>
                <div className="step-title">Streams & POC</div>
              </div>
              <div className={`step ${collegeStep === 3 ? 'active' : ''}`}>
                <div className="step-number"></div>
                <div className="step-title">Complete</div>
              </div>
            </div>

            {collegeStep === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); nextCollegeStep(); }}>
                <h2>College Information</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label>College Name*</label>
                    <input
                      type="text"
                      name="collegeName"
                      value={collegeFormData.collegeName}
                      onChange={handleCollegeInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Registration No*</label>
                    <input
                      type="text"
                      name="registrationNo"
                      value={collegeFormData.registrationNo}
                      onChange={handleCollegeInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Email ID*</label>
                    <input
                      type="email"
                      name="email"
                      value={collegeFormData.email}
                      onChange={handleCollegeInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Contact No*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={collegeFormData.phone}
                      onChange={handleCollegeInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Address*</label>
                  <input
                    type="text"
                    name="address"
                    value={collegeFormData.address}
                    onChange={handleCollegeInputChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label>State*</label>
                  <input
                    type="text"
                    name="state"
                    value={collegeFormData.state}
                    onChange={handleCollegeInputChange}
                    required
                  />
                </div>
                

                
                <div className="form-row">
                <div className="form-group half-width">
                  <label>Create Password*</label>
                  <input
                    type="password"
                    name="pAssword"
                    value={collegeFormData.pAssword}
                    onChange={handleCollegeInputChange}
                    required
                  />
                </div>

                <div className="form-group half-width">
                  <label>Confirm Password*</label>
                  <input
                    type="password"
                    name="confirmpassword"
                    value={collegeFormData.confirmpassword}
                    onChange={handleCollegeInputChange}
                    required
                  />
                </div>
                </div>


                <div className="form-row">
                  <div className="form-group">
                    <label>Upload College Logo</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="college-logo"
                        name="logo"  // ← important
                        onChange={(e) => handleFileChange(e, setCollegeFormData)}
                        accept="image/*"
                      />
                      <label htmlFor="college-logo">Choose File</label>
                    </div>
                    {collegeFormData.logo && (
                      <div className="logo-preview">
                        <img src={collegeFormData.logo} alt="College logo preview" />
                      </div>
                    )}
                  </div>

                  <div className="form-group">
                    <label>Upload Institution Certificate</label>
                    <div className="file-upload">
                      <input
                        type="file"
                        id="college-certificate"
                        name="institutionCertificate"  // ← important
                        onChange={(e) => handleFileChange(e, setCollegeFormData)}
                        accept="image/*"
                      />
                      <label htmlFor="college-certificate">Choose File</label>
                    </div>
                    {collegeFormData.institutionCertificate && (
                      <div className="certificate-preview">
                        <img src={collegeFormData.institutionCertificate} alt="College certificate preview" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="form-group">
                    <label>Institution Sector*</label>
                    <select
                      name="institutionSector"
                      value={collegeFormData.institutionSector}
                      onChange={handleCollegeInputChange}
                      required
                    >
                      <option value="">Select</option>
                      <option value="private">Private</option>
                      <option value="autonomous">Autonomous</option>
                      <option value="deemend">Deemed University</option>
                    </select>
                  </div>

                  <div className="form-group">
                    <label>Established Year*</label>
                    <input
                      type="month"
                      name="yearOfEstablishment"
                      value={collegeFormData.yearOfEstablishment}
                      onChange={handleCollegeInputChange}
                      required
                    />
                  </div>

                <div className="form-buttons">
                  <button type="submit" className="next-btn">
                    Next
                  </button>
                </div>
              </form>
            )}

            {/* STEP 2 */}
            {collegeStep === 2 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  nextCollegeStep();
                }}
              >
                <h2>Streams & Point of Contact</h2>
                <div className="form-row">
                  <div className="form-group">
                    <label>Stream*</label>
                    <select
                      name="stream"
                      value={collegeFormData.stream}
                      onChange={handleCollegeInputChange}
                      required
                    >
                      <option value="">Select Stream</option>
                      <option value="B.Tech">B.Tech</option>
                      <option value="M.Tech">M.Tech</option>
                      <option value="Ph.D">Ph.D</option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label>Course*</label>
                    <select
                      name="course"
                      value={collegeFormData.course}
                      onChange={handleCollegeInputChange}
                      required
                      disabled={!collegeFormData.stream}
                    >
                      <option value="">Select Course</option>
                      {collegeFormData.stream === 'B.Tech' && (
                        <>
                          <option value="CSE">CSE</option>
                          <option value="ECE">ECE</option>
                          <option value="MECH">MECH</option>
                          <option value="CIVIL">CIVIL</option>
                        </>
                      )}
                      {collegeFormData.stream === 'M.Tech' && (
                        <>
                          <option value="Structural">Structural</option>
                          <option value="VLSI">VLSI</option>
                          <option value="Power Systems">Power Systems</option>
                        </>
                      )}
                      {collegeFormData.stream === 'Ph.D' && (
                        <>
                          <option value="AI">AI</option>
                          <option value="Robotics">Robotics</option>
                          <option value="Data Science">Data Science</option>
                        </>
                      )}
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Director Name*</label>
                  <input
                    type="text"
                    name="directorName"
                    value={collegeFormData.directorName}
                    onChange={handleCollegeInputChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label>Director Email*</label>
                    <input
                      type="email"
                      name="directorEmail"
                      value={collegeFormData.directorEmail}
                      onChange={handleCollegeInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Director Mobile*</label>
                    <input
                      type="tel"
                      name="directorContact"
                      value={collegeFormData.directorContact}
                      onChange={handleCollegeInputChange}
                      required
                    />
                  </div>
                </div>
                <h3>Point of Contact Details</h3>
                <div className="form-group">
                  <label>POC Name*</label>
                  <input
                    type="text"
                    name="poCName"
                    value={collegeFormData.poCName}
                    onChange={handleCollegeInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>POC Email*</label>
                    <input
                      type="email"
                      name="poCEmail"
                      value={collegeFormData.poCEmail}
                      onChange={handleCollegeInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>POC Mobile*</label>
                    <input
                      type="tel"
                      name="poCMobile"
                      value={collegeFormData.poCMobile}
                      onChange={handleCollegeInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-buttons">
                  <button type="button" className="prev-btn" onClick={prevCollegeStep}>
                    Back
                  </button>
                  <button type="submit" className="next-btn">
                    Next
                  </button>
                </div>
              </form>
            )}

            {collegeStep === 3 && (
              <form onSubmit={handleCollegeSubmit}>
                <h2>Complete Registration</h2>
                <div className="summary">
                  <h3>Review Your Information</h3>
                  <p>
                    <strong>College Name:</strong> {collegeFormData.collegeName}
                  </p>
                  <p>
                    <strong>Registration No:</strong> {collegeFormData.registrationNo}
                  </p>
                  <p>
                    <strong>Email:</strong> {collegeFormData.email}
                  </p>
                  <p>
                    <strong>Phone:</strong> {collegeFormData.phone}
                  </p>
                  <p>
                    <strong>State:</strong> {collegeFormData.state}
                  </p>
                  <p>
                    <strong>Estd Year:</strong> {collegeFormData.yearOfEstablishment}
                  </p>
                  <p>
                    <strong>Director Name:</strong> {collegeFormData.directorName}
                  </p>
                  <p>
                    <strong>Director Email:</strong> {collegeFormData.directorEmail}
                  </p>
                  <p>
                    <strong>Director Contact:</strong> {collegeFormData.directorContact}
                  </p>
                  <p>
                    <strong>POC Name:</strong> {collegeFormData.poCName}
                  </p>
                  <p>
                    <strong>POC Designation:</strong> {collegeFormData.designation}
                  </p>
                  <p>
                    <strong>POC Email:</strong> {collegeFormData.poCEmail}
                  </p>
                  <p>
                    <strong>POC Contact:</strong> {collegeFormData.poCMobile}
                  </p>
                </div>

                <div className="form-buttons">
                  <button type="button" className="prev-btn" onClick={prevCollegeStep}>
                    Back
                  </button>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {activeRole === 'recruiter' && (
          <div className="multi-step-form">
            <div className="step-indicator">
              <div className={`step ${recruiterStep === 1 ? 'active' : ''}`}>
                <div className="step-number">1</div>
                <div className="step-title">Company Info</div>
              </div>
              <div className={`step ${recruiterStep === 2 ? 'active' : ''}`}>
                <div className="step-number">2</div>
                <div className="step-title">Recruiter Details</div>
              </div>
              <div className={`step ${recruiterStep === 3 ? 'active' : ''}`}>
                <div className="step-number">3</div>
                <div className="step-title">Complete</div>
              </div>
            </div>

            {recruiterStep === 1 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  nextRecruiterStep();
                }}
              >
                <h2>Company Information</h2>
                <div className="form-group">
                  <label>Company Name*</label>
                  <input
                    type="text"
                    name="companyName"
                    value={recruiterFormData.companyName}
                    onChange={handleRecruiterInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Website</label>
                    <input
                      type="url"
                      name="website"
                      value={recruiterFormData.website}
                      onChange={handleRecruiterInputChange}
                    />
                  </div>
                  <div className="form-group">
                    <label>Email ID*</label>
                    <input
                      type="email"
                      name="email"
                      value={recruiterFormData.email}
                      onChange={handleRecruiterInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Contact No*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={recruiterFormData.phone}
                      onChange={handleRecruiterInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Company Category*</label>
                    <select
                      name="category"
                      value={recruiterFormData.category}
                      onChange={handleRecruiterInputChange}
                      required
                    >
                      <option value="IT">IT</option>
                      <option value="NON IT">Non-IT</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Address*</label>
                  <input
                    type="text"
                    name="address"
                    value={recruiterFormData.address}
                    onChange={handleRecruiterInputChange}
                    required
                  />
                </div>

                <div className="form-buttons">
                  <button type="submit" className="next-btn">
                    Next
                  </button>
                </div>
              </form>
            )}

            {recruiterStep === 2 && (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  nextRecruiterStep();
                }}
              >
                <h2>Recruiter Details</h2>
                <div className="form-group">
                  <label>Recruiter Name*</label>
                  <input
                    type="text"
                    name="recruiterName"
                    value={recruiterFormData.recruiterName}
                    onChange={handleRecruiterInputChange}
                    required
                  />
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Designation*</label>
                    <input
                      type="text"
                      name="designation"
                      value={recruiterFormData.designation}
                      onChange={handleRecruiterInputChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={recruiterFormData.email}
                      onChange={handleRecruiterInputChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label>Mobile No*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={recruiterFormData.phone}
                    onChange={handleRecruiterInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Upload Company Logo</label>
                  <div className="file-upload">
                    <input
                      type="file"
                      id="company-logo"
                      name="logo"
                      onChange={(e) => handleFileChange(e, setRecruiterFormData)}
                      accept="image/*"
                    />
                    <label htmlFor="company-logo">Choose File</label>
                  </div>
                  {recruiterFormData.logo && (
                    <div className="logo-preview">
                      <img src={recruiterFormData.logo} alt="Company logo preview" />
                    </div>
                  )}
                </div>

                <div className="form-buttons">
                  <button type="button" className="prev-btn" onClick={prevRecruiterStep}>
                    Back
                  </button>
                  <button type="submit" className="next-btn">
                    Next
                  </button>
                </div>
              </form>
            )}

            {recruiterStep === 3 && (
              <form onSubmit={handleRecruiterSubmit}>
                <h2>Complete Registration</h2>
                <div className="form-group">
                  <label>Create Password*</label>
                  <input
                    type="password"
                    name="password"
                    value={recruiterFormData.password}
                    onChange={handleRecruiterInputChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Confirm Password*</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={recruiterFormData.confirmPassword}
                    onChange={handleRecruiterInputChange}
                    required
                  />
                </div>

                <div className="summary">
                  <h3>Review Your Information</h3>
                  <p>
                    <strong>Company Name:</strong> {recruiterFormData.companyName}
                  </p>
                  <p>
                    <strong>Recruiter Name:</strong> {recruiterFormData.recruiterName}
                  </p>
                  <p>
                    <strong>Designation:</strong> {recruiterFormData.designation}
                  </p>
                  <p>
                    <strong>Category:</strong> {recruiterFormData.category}
                  </p>
                </div>

                <div className="form-buttons">
                  <button type="button" className="prev-btn" onClick={prevRecruiterStep}>
                    Back
                  </button>
                  <button type="submit" className="submit-btn">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const StudentForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    major: '',
    academicYear: '',
    interests: '',
    password: '',
    confirmPassword: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // You can add validation here

    console.log('Student form submitted:', formData);
    alert('Student registration successful! Redirecting to Login page...');
    navigate('/login');
  };

  return (
    <>
      <h2>Student Enrollment</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter full name"
              required
            />
          </div>
          <div className="form-group">
            <label>Email Address</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Enter email address"
              required
            />
          </div>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <div className="input-with-icon">
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleInputChange}
              placeholder="Enter phone number"
              required
            />
            <span className="success-icon">✅</span>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Major/Field of Study</label>
            <input
              type="text"
              name="major"
              value={formData.major}
              onChange={handleInputChange}
              placeholder="Enter your major"
            />
          </div>
          <div className="form-group">
            <label>Academic Year</label>
            <select
              name="academicYear"
              value={formData.academicYear}
              onChange={handleInputChange}
              required
            >
              <option value="">Select academic year</option>
              <option value="freshman">Freshman</option>
              <option value="sophomore">Sophomore</option>
              <option value="junior">Junior</option>
              <option value="senior">Senior</option>
            </select>
          </div>
        </div>

        <div className="form-group">
          <label>Areas of Interest</label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleInputChange}
            placeholder="Enter your interests"
          />
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              placeholder="Create password"
              required
            />
          </div>
          <div className="form-group">
            <label>Confirm Password</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleInputChange}
              placeholder="Confirm password"
              required
            />
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Register as Student
        </button>
      </form>
    </>
  );
};

export default Register;
