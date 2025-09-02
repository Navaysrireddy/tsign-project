

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import TSignLogo from '../../../assests/TG-SIGN (2).png';

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
    
    // Step 2 - Updated to arrays for multiple selection
    streams: [],
    courses: [],
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

  // Define available streams and courses
  const availableStreams = [
    { id: 'btech', name: 'B.Tech' },
    { id: 'mtech', name: 'M.Tech' },
    { id: 'phd', name: 'Ph.D' }
  ];

  const availableCourses = {
    btech: [
      { id: 'cse', name: 'CSE' },
      { id: 'ece', name: 'ECE' },
      { id: 'mech', name: 'MECH' },
      { id: 'civil', name: 'CIVIL' }
    ],
    mtech: [
      { id: 'structural', name: 'Structural' },
      { id: 'vlsi', name: 'VLSI' },
      { id: 'power', name: 'Power Systems' }
    ],
    phd: [
      { id: 'ai', name: 'AI' },
      { id: 'robotics', name: 'Robotics' },
      { id: 'data', name: 'Data Science' }
    ]
  };

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

  // Handle stream selection (multiple)
  const handleStreamChange = (streamId) => {
    setCollegeFormData(prev => {
      const currentStreams = [...prev.streams];
      const streamIndex = currentStreams.indexOf(streamId);
      
      if (streamIndex > -1) {
        // Remove stream if already selected
        currentStreams.splice(streamIndex, 1);
      } else {
        // Add stream if not selected
        currentStreams.push(streamId);
      }
      
      // When streams change, reset courses to only those that belong to selected streams
      const updatedCourses = prev.courses.filter(courseId => {
        // Check if this course belongs to any of the selected streams
        return currentStreams.some(stream => {
          return availableCourses[stream]?.some(course => course.id === courseId);
        });
      });
      
      return {
        ...prev,
        streams: currentStreams,
        courses: updatedCourses
      };
    });
  };

  // Handle course selection (multiple)
  const handleCourseChange = (courseId) => {
    setCollegeFormData(prev => {
      const currentCourses = [...prev.courses];
      const courseIndex = currentCourses.indexOf(courseId);
      
      if (courseIndex > -1) {
        currentCourses.splice(courseIndex, 1);
      } else {
        currentCourses.push(courseId);
      }
      
      return {
        ...prev,
        courses: currentCourses
      };
    });
  };

  // Helper function to get course name by ID
  const getCourseNameById = (courseId) => {
    for (const stream of Object.keys(availableCourses)) {
      const course = availableCourses[stream].find(c => c.id === courseId);
      if (course) return course.name;
    }
    return courseId;
  };

  // Helper function to get stream name by ID
  const getStreamNameById = (streamId) => {
    const stream = availableStreams.find(s => s.id === streamId);
    return stream ? stream.name : streamId;
  };
// eslint-disable-next-line
  const handleRecruiterInputChange = (e) => {
    const { name, value } = e.target;
    setRecruiterFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleFileChange = (e, setFormData) => {
    const file = e.target.files[0];
    const { name } = e.target;

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          [name]: reader.result
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
// eslint-disable-next-line
  const nextRecruiterStep = () => {
    if (recruiterStep < 3) setRecruiterStep(recruiterStep + 1);
  };
// eslint-disable-next-line
  const prevRecruiterStep = () => {
    if (recruiterStep > 1) setRecruiterStep(recruiterStep - 1);
  };

  const handleCollegeSubmit = (e) => {
    e.preventDefault();
    console.log('College form submitted:', collegeFormData);
    alert('College registration successful!');
    navigate('/new-dashboard');
  };
// eslint-disable-next-line
  const handleRecruiterSubmit = (e) => {
    e.preventDefault();
    console.log('Recruiter form submitted:', recruiterFormData);
    alert('Recruiter registration successful!');
    navigate('/recruiter');
  };

  const handleStartRegistration = () => {
    navigate("/profile-form");
  };

  return (
    <div className="max-w-4xl mx-auto my-8 p-10 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl shadow-xl border border-white/30 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col items-center mb-6">
  <img src={TSignLogo} alt="Logo" className="h-12 mb-4" />
  <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-900 to-blue-600 bg-clip-text text-transparent text-center relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2  after:rounded">
    Unlock your journey – start by registering!
  </h2>
</div>

      
      <hr className="border-0 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent my-6 w-4/5 mx-auto" />
      
      <div className="role-selection mb-12">
        <div className="flex justify-center gap-6 flex-wrap">
          <div 
            className={`w-56 bg-white rounded-xl p-8 text-center cursor-pointer transition-all duration-400 ease-in-out border border-blue-200/15 shadow-md relative overflow-hidden
              ${activeRole === 'student' ? 'bg-gradient-to-br from-blue-900 to-blue-700 text-white border-transparent shadow-lg scale-105' : ''}
              hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-blue-300/30`}
            onClick={() => handleRoleChange('student')}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-900 transition-all duration-300"></div>
            <h3 className="text-xl font-semibold mb-2">Student</h3>
            <p className="text-sm">Register as a student</p>
          </div>
          
          <div 
            className={`w-56 bg-white rounded-xl p-8 text-center cursor-pointer transition-all duration-400 ease-in-out border border-blue-200/15 shadow-md relative overflow-hidden
              ${activeRole === 'college' ? 'bg-gradient-to-br from-blue-900 to-blue-700 text-white border-transparent shadow-lg scale-105' : ''}
              hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-blue-300/30`}
            onClick={() => handleRoleChange('college')}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-900 transition-all duration-300"></div>
            <h3 className="text-xl font-semibold mb-2">College</h3>
            <p className="text-sm">Register your institution</p>
          </div>
          
          <div 
            className={`w-56 bg-white rounded-xl p-8 text-center cursor-pointer transition-all duration-400 ease-in-out border border-blue-200/15 shadow-md relative overflow-hidden
              ${activeRole === 'recruiter' ? 'bg-gradient-to-br from-blue-900 to-blue-700 text-white border-transparent shadow-lg scale-105' : ''}
              hover:-translate-y-2 hover:scale-105 hover:shadow-xl hover:border-blue-300/30`}
            onClick={() => handleRoleChange('recruiter')}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 to-blue-900 transition-all duration-300"></div>
            <h3 className="text-xl font-semibold mb-2">recruiter</h3>
            <p className="text-sm">Hire top talent</p>
          </div>
        </div>
      </div>

      <div className="bg-white p-10 rounded-xl shadow-md border border-blue-100 transition-all duration-300 hover:shadow-lg">
        {activeRole === 'student' && !showStudentForm && (
          <div className="text-center">
            <h2 className="text-2xl font-bold text-blue-900 mb-4">Let's Get Started!</h2>
            <p className="text-gray-600 mb-8 ml-34">Begin your journey by registering as a student</p>
            <button 
              className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-2 px-6 rounded-lg shadow-md hover:shadow-lg transition-all ml-34"
              onClick={handleStartRegistration}
            >
              Start Registration
            </button>
          </div>
        )}

        {activeRole === 'college' && (
          <div className="multi-step-form">
            <div className="flex justify-between items-center mb-12 relative px-5">
              <div className="absolute top-7 left-20 right-20 h-1 bg-blue-100 rounded z-0"></div>
              
              <div className={`flex flex-col items-center relative z-10 ${collegeStep === 1 ? 'text-blue-900 font-semibold' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300
                  ${collegeStep === 1 ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white border-2 border-blue-700 scale-110' : 'bg-white border-2 border-blue-100 text-gray-400'}`}>
                  1
                </div>
                <div className="text-sm">College Info</div>
              </div>
              
              <div className={`flex flex-col items-center relative z-10 ${collegeStep === 2 ? 'text-blue-900 font-semibold' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300
                  ${collegeStep === 2 ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white border-2 border-blue-700 scale-110' : 'bg-white border-2 border-blue-100 text-gray-400'}`}>
                  2
                </div>
                <div className="text-sm">Streams & POC</div>
              </div>
              
              <div className={`flex flex-col items-center relative z-10 ${collegeStep === 3 ? 'text-blue-900 font-semibold' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300
                  ${collegeStep === 3 ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white border-2 border-blue-700 scale-110' : 'bg-white border-2 border-blue-100 text-gray-400'}`}>
                  3
                </div>
                <div className="text-sm">Complete</div>
              </div>
            </div>

            {collegeStep === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); nextCollegeStep(); }}>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">College Information</h2>
                
                <div className="flex gap-8 mb-7">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">College Name*</label>
                    <input
                      type="text"
                      name="collegeName"
                      value={collegeFormData.collegeName}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Registration No*</label>
                    <input
                      type="text"
                      name="registrationNo"
                      value={collegeFormData.registrationNo}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex gap-8 mb-7">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Email ID*</label>
                    <input
                      type="email"
                      name="email"
                      value={collegeFormData.email}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Contact No*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={collegeFormData.phone}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Address*</label>
                  <input
                    type="text"
                    name="address"
                    value={collegeFormData.address}
                    onChange={handleCollegeInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>
                
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">State*</label>
                  <input
                    type="text"
                    name="state"
                    value={collegeFormData.state}
                    onChange={handleCollegeInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>
                
                <div className="flex gap-8 mb-7">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Create Password*</label>
                    <input
                      type="password"
                      name="pAssword"
                      value={collegeFormData.pAssword}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Confirm Password*</label>
                    <input
                      type="password"
                      name="confirmpassword"
                      value={collegeFormData.confirmpassword}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex gap-8 mb-7">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Upload College Logo</label>
                    <div className="relative overflow-hidden">
                      <input
                        type="file"
                        id="college-logo"
                        name="logo"
                        onChange={(e) => handleFileChange(e, setCollegeFormData)}
                        accept="image/*"
                        className="absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer"
                      />
                      <label htmlFor="college-logo" className="block p-4 bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg text-center cursor-pointer hover:bg-blue-100 hover:border-blue-400 transition-colors">
                        Choose File
                      </label>
                    </div>
                    {collegeFormData.logo && (
                      <div className="mt-4 text-center p-4 bg-white rounded-lg border border-gray-200">
                        <img src={collegeFormData.logo} alt="College logo preview" className="max-w-xs max-h-32 mx-auto object-contain rounded" />
                      </div>
                    )}
                  </div>

                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Upload Institution Certificate</label>
                    <div className="relative overflow-hidden">
                      <input
                        type="file"
                        id="college-certificate"
                        name="institutionCertificate"
                        onChange={(e) => handleFileChange(e, setCollegeFormData)}
                        accept="image/*"
                        className="absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer"
                      />
                      <label htmlFor="college-certificate" className="block p-4 bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg text-center cursor-pointer hover:bg-blue-100 hover:border-blue-400 transition-colors">
                        Choose File
                      </label>
                    </div>
                    {collegeFormData.institutionCertificate && (
                      <div className="mt-4 text-center p-4 bg-white rounded-lg border border-gray-200">
                        <img src={collegeFormData.institutionCertificate} alt="College certificate preview" className="max-w-xs max-h-32 mx-auto object-contain rounded" />
                      </div>
                    )}
                  </div>
                </div>

                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Institution Sector*</label>
                  <select
                    name="institutionSector"
                    value={collegeFormData.institutionSector}
                    onChange={handleCollegeInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  >
                    <option value="">Select</option>
                    <option value="private">Private</option>
                    <option value="autonomous">Autonomous</option>
                    <option value="deemend">Deemed University</option>
                  </select>
                </div>

                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Established Year*</label>
                  <input
                    type="month"
                    name="yearOfEstablishment"
                    value={collegeFormData.yearOfEstablishment}
                    onChange={handleCollegeInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>

                <div className="flex justify-end mt-12">
                  <button type="submit" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:shadow-lg transition-all">
                    Next
                  </button>
                </div>
              </form>
            )}

            {collegeStep === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); nextCollegeStep(); }}>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Streams & Point of Contact</h2>
                
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Available Streams*</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    {availableStreams.map(stream => (
                      <div key={stream.id} className="flex items-center">
                        <input
                          type="checkbox"
                          id={`stream-${stream.id}`}
                          checked={collegeFormData.streams.includes(stream.id)}
                          onChange={() => handleStreamChange(stream.id)}
                          className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                        />
                        <label htmlFor={`stream-${stream.id}`} className="ml-2 block text-sm text-gray-700">
                          {stream.name}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Available Courses*</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-2">
                    {collegeFormData.streams.length > 0 ? (
                      collegeFormData.streams.map(streamId => (
                        availableCourses[streamId]?.map(course => (
                          <div key={course.id} className="flex items-center">
                            <input
                              type="checkbox"
                              id={`course-${course.id}`}
                              checked={collegeFormData.courses.includes(course.id)}
                              onChange={() => handleCourseChange(course.id)}
                              className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                            />
                            <label htmlFor={`course-${course.id}`} className="ml-2 block text-sm text-gray-700">
                              {course.name}
                            </label>
                          </div>
                        ))
                      ))
                    ) : (
                      <p className="text-gray-500 italic">Please select at least one stream to see available courses</p>
                    )}
                  </div>
                </div>

                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Director Name*</label>
                  <input
                    type="text"
                    name="directorName"
                    value={collegeFormData.directorName}
                    onChange={handleCollegeInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>
                
                <div className="flex gap-8 mb-7">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Director Email*</label>
                    <input
                      type="email"
                      name="directorEmail"
                      value={collegeFormData.directorEmail}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Director Mobile*</label>
                    <input
                      type="tel"
                      name="directorContact"
                      value={collegeFormData.directorContact}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-blue-900 mb-6 mt-10">Point of Contact Details</h3>
                
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">POC Name*</label>
                  <input
                    type="text"
                    name="poCName"
                    value={collegeFormData.poCName}
                    onChange={handleCollegeInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>

                <div className="flex gap-8 mb-7">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">POC Email*</label>
                    <input
                      type="email"
                      name="poCEmail"
                      value={collegeFormData.poCEmail}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">POC Mobile*</label>
                    <input
                      type="tel"
                      name="poCMobile"
                      value={collegeFormData.poCMobile}
                      onChange={handleCollegeInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="flex justify-between mt-12">
                  <button type="button" onClick={prevCollegeStep} className="bg-gray-600 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:bg-gray-700 hover:shadow-lg transition-all">
                    Back
                  </button>
                  <button 
                    type="submit" 
                    disabled={collegeFormData.streams.length === 0 || collegeFormData.courses.length === 0}
                    className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    Next
                  </button>
                </div>
              </form>
            )}

            {collegeStep === 3 && (
              <form onSubmit={handleCollegeSubmit}>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Complete Registration</h2>
                
                <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-6 pb-3 border-b border-blue-200 flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                    Review Your Information
                  </h3>
                  
                  <div className="space-y-3">
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">College Name:</span> {collegeFormData.collegeName}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Registration No:</span> {collegeFormData.registrationNo}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Email:</span> {collegeFormData.email}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Phone:</span> {collegeFormData.phone}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">State:</span> {collegeFormData.state}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Estd Year:</span> {collegeFormData.yearOfEstablishment}</p>
                    <p className="flex">
                      <span className="font-semibold text-blue-900 min-w-48">Streams:</span> 
                      {collegeFormData.streams.length > 0 
                        ? collegeFormData.streams.map(getStreamNameById).join(', ')
                        : 'None selected'
                      }
                    </p>
                    <p className="flex">
                      <span className="font-semibold text-blue-900 min-w-48">Courses:</span> 
                      {collegeFormData.courses.length > 0 
                        ? collegeFormData.courses.map(getCourseNameById).join(', ')
                        : 'None selected'
                      }
                    </p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Director Name:</span> {collegeFormData.directorName}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Director Email:</span> {collegeFormData.directorEmail}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Director Contact:</span> {collegeFormData.directorContact}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">POC Name:</span> {collegeFormData.poCName}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">POC Designation:</span> {collegeFormData.designation}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">POC Email:</span> {collegeFormData.poCEmail}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">POC Contact:</span> {collegeFormData.poCMobile}</p>
                  </div>
                </div>

                <div className="flex justify-between mt-8">
                  <button type="button" onClick={prevCollegeStep} className="bg-gray-600 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:bg-gray-700 hover:shadow-lg transition-all">
                    Back
                  </button>
                  <button type="submit" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:shadow-lg transition-all animate-pulse">
                    Submit
                  </button>
                </div>
              </form>
            )}
          </div>
        )}

        {activeRole === 'recruiter' && (
          <div className="multi-step-form">
            <div className="flex justify-between items-center mb-12 relative px-5">
              <div className="absolute top-7 left-20 right-20 h-1 bg-blue-100 rounded z-0"></div>
             
              <div className={`flex flex-col items-center relative z-10 ${recruiterStep === 1 ? 'text-blue-900 font-semibold' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300
                  ${recruiterStep === 1 ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white border-2 border-blue-700 scale-110' : 'bg-white border-2 border-blue-100 text-gray-400'}`}>
                  1
                </div>
                <div className="text-sm">Company Info</div>
              </div>
             
              <div className={`flex flex-col items-center relative z-10 ${recruiterStep === 2 ? 'text-blue-900 font-semibold' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300
                  ${recruiterStep === 2 ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white border-2 border-blue-700 scale-110' : 'bg-white border-2 border-blue-100 text-gray-400'}`}>
                  2
                </div>
                <div className="text-sm">Recruiter Details</div>
              </div>
             
              <div className={`flex flex-col items-center relative z-10 ${recruiterStep === 3 ? 'text-blue-900 font-semibold' : 'text-gray-400'}`}>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-3 transition-all duration-300
                  ${recruiterStep === 3 ? 'bg-gradient-to-br from-blue-700 to-blue-900 text-white border-2 border-blue-700 scale-110' : 'bg-white border-2 border-blue-100 text-gray-400'}`}>
                  3
                </div>
                <div className="text-sm">Complete</div>
              </div>
            </div>
 
            {recruiterStep === 1 && (
              <form onSubmit={(e) => { e.preventDefault(); nextRecruiterStep(); }}>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Company Information</h2>
               
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Company Name*</label>
                  <input
                    type="text"
                    name="companyName"
                    value={recruiterFormData.companyName}
                    onChange={handleRecruiterInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>
 
                <div className="flex gap-8 mb-7">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Website</label>
                    <input
                      type="url"
                      name="website"
                      value={recruiterFormData.website}
                      onChange={handleRecruiterInputChange}
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Email ID*</label>
                    <input
                      type="email"
                      name="email"
                      value={recruiterFormData.email}
                      onChange={handleRecruiterInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                </div>
 
                <div className="flex gap-8 mb-7">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Contact No*</label>
                    <input
                      type="tel"
                      name="phone"
                      value={recruiterFormData.phone}
                      onChange={handleRecruiterInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Company Category*</label>
                    <select
                      name="category"
                      value={recruiterFormData.category}
                      onChange={handleRecruiterInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    >
                      <option value="IT">IT</option>
                      <option value="NON IT">Non-IT</option>
                      <option value="Finance">Finance</option>
                      <option value="Healthcare">Healthcare</option>
                    </select>
                  </div>
                </div>
 
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Address*</label>
                  <input
                    type="text"
                    name="address"
                    value={recruiterFormData.address}
                    onChange={handleRecruiterInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>
 
                <div className="flex justify-end mt-12">
                  <button type="submit" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:shadow-lg transition-all">
                    Next
                  </button>
                </div>
              </form>
            )}
 
            {recruiterStep === 2 && (
              <form onSubmit={(e) => { e.preventDefault(); nextRecruiterStep(); }}>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Recruiter Details</h2>
               
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Recruiter Name*</label>
                  <input
                    type="text"
                    name="recruiterName"
                    value={recruiterFormData.recruiterName}
                    onChange={handleRecruiterInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>
 
                <div className="flex gap-8 mb-7">
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Designation*</label>
                    <input
                      type="text"
                      name="designation"
                      value={recruiterFormData.designation}
                      onChange={handleRecruiterInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="block text-gray-700 font-medium mb-2">Email*</label>
                    <input
                      type="email"
                      name="email"
                      value={recruiterFormData.email}
                      onChange={handleRecruiterInputChange}
                      required
                      className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                    />
                  </div>
                </div>
 
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Mobile No*</label>
                  <input
                    type="tel"
                    name="phone"
                    value={recruiterFormData.phone}
                    onChange={handleRecruiterInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>
 
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Upload Company Logo</label>
                  <div className="relative overflow-hidden">
                    <input
                      type="file"
                      id="company-logo"
                      onChange={(e) => handleFileChange(e, setRecruiterFormData, 'logo')}
                      accept="image/*"
                      className="absolute left-0 top-0 opacity-0 w-full h-full cursor-pointer"
                    />
                    <label htmlFor="company-logo" className="block p-4 bg-blue-50 border-2 border-dashed border-blue-200 rounded-lg text-center cursor-pointer hover:bg-blue-100 hover:border-blue-400 transition-colors">
                      Choose File
                    </label>
                  </div>
                  {recruiterFormData.logo && (
                    <div className="mt-4 text-center p-4 bg-white rounded-lg border border-gray-200">
                      <img src={recruiterFormData.logo} alt="Company logo preview" className="max-w-xs max-h-32 mx-auto object-contain rounded" />
                    </div>
                  )}
                </div>
 
                <div className="flex justify-between mt-12">
                  <button type="button" onClick={prevRecruiterStep} className="bg-gray-600 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:bg-gray-700 hover:shadow-lg transition-all">
                    Back
                  </button>
                  <button type="submit" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:shadow-lg transition-all">
                    Next
                  </button>
                </div>
              </form>
            )}
 
            {recruiterStep === 3 && (
              <form onSubmit={handleRecruiterSubmit}>
                <h2 className="text-2xl font-bold text-blue-900 mb-6">Complete Registration</h2>
               
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Create Password*</label>
                  <input
                    type="password"
                    name="password"
                    value={recruiterFormData.password}
                    onChange={handleRecruiterInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>
 
                <div className="mb-7">
                  <label className="block text-gray-700 font-medium mb-2">Confirm Password*</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={recruiterFormData.confirmPassword}
                    onChange={handleRecruiterInputChange}
                    required
                    className="w-full p-3 border border-blue-100 rounded-lg bg-blue-50 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 outline-none transition-colors"
                  />
                </div>
 
                <div className="bg-blue-50 p-8 rounded-lg border-l-4 border-blue-600 mb-8">
                  <h3 className="text-xl font-semibold text-blue-900 mb-6 pb-3 border-b border-blue-200 flex items-center">
                    <span className="w-6 h-6 bg-green-500 text-white rounded-full flex items-center justify-center text-sm mr-3">✓</span>
                    Review Your Information
                  </h3>
                 
                  <div className="space-y-3">
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Company Name:</span> {recruiterFormData.companyName}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Website:</span> {recruiterFormData.website}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Email:</span> {recruiterFormData.email}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Phone:</span> {recruiterFormData.phone}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Category:</span> {recruiterFormData.category}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Address:</span> {recruiterFormData.address}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Recruiter Name:</span> {recruiterFormData.recruiterName}</p>
                    <p className="flex"><span className="font-semibold text-blue-900 min-w-48">Designation:</span> {recruiterFormData.designation}</p>
                  </div>
                </div>
 
                <div className="flex justify-between mt-8">
                  <button type="button" onClick={prevRecruiterStep} className="bg-gray-600 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:bg-gray-700 hover:shadow-lg transition-all">
                    Back
                  </button>
                  <button type="submit" className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-3 px-8 rounded-lg font-semibold uppercase tracking-wide shadow-md hover:shadow-lg transition-all animate-pulse">
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
 
export default Register;
 