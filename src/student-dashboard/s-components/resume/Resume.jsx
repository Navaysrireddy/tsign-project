import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';

const Resume = ({ isExperienced = false }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const [showPreview, setShowPreview] = useState(false);
  const [resumeData, setResumeData] = useState(() => {
    const savedData = localStorage.getItem('resumeData');
    return savedData ? JSON.parse(savedData) : {
      personalInfo: {
        name: '',
        email: '',
        phone: '',
        address: '',
        linkedin: '',
        github: '',
      },
      professionalSummary: '',
      education: [
        {
          institution: '',
          degree: '',
          fieldOfStudy: '',
          startDate: '',
          endDate: '',
          description: '',
        },
      ],
      skills: [],
      experience: isExperienced ? [
        {
          company: '',
          position: '',
          startDate: '',
          endDate: '',
          description: '',
        }
      ] : [],
      projects: [
        {
          name: '',
          description: '',
          technologies: '',
        },
      ],
      certifications: [],
    };
  });

  const resumeRef = useRef();
  const templates = [
    { id: 1, name: 'Classic', thumbnail: 'classic-thumbnail.jpg' },
    { id: 2, name: 'Modern', thumbnail: 'modern-thumbnail.jpg' },
    { id: 3, name: 'Creative', thumbnail: 'creative-thumbnail.jpg' },
    { id: 4, name: 'Minimal', thumbnail: 'minimal-thumbnail.jpg' },
  ];

  const handleInputChange = (section, field, value, index = null) => {
    if (index !== null) {
      const updatedArray = [...resumeData[section]];
      updatedArray[index][field] = value;
      setResumeData({
        ...resumeData,
        [section]: updatedArray,
      });
    } else if (field) {
      setResumeData({
        ...resumeData,
        [section]: {
          ...resumeData[section],
          [field]: value,
        },
      });
    } else {
      setResumeData({
        ...resumeData,
        [section]: value,
      });
    }
  };

  const addNewItem = (section) => {
    const defaultItems = {
      education: {
        institution: '',
        degree: '',
        fieldOfStudy: '',
        startDate: '',
        endDate: '',
        description: '',
      },
      experience: {
        company: '',
        position: '',
        startDate: '',
        endDate: '',
        description: '',
      },
      projects: {
        name: '',
        description: '',
        technologies: '',
      },
      certifications: {
        name: '',
        issuingOrganization: '',
        issueDate: '',
      },
    };

    setResumeData({
      ...resumeData,
      [section]: [...resumeData[section], defaultItems[section]],
    });
  };

  const removeItem = (section, index) => {
    const updatedArray = [...resumeData[section]];
    updatedArray.splice(index, 1);
    setResumeData({
      ...resumeData,
      [section]: updatedArray,
    });
  };

  const handleSkillChange = (e) => {
    const skills = e.target.value.split(',').map(skill => skill.trim());
    setResumeData({
      ...resumeData,
      skills,
    });
  };

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('resumeData', JSON.stringify(resumeData));
    alert('Resume saved successfully!');
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  const handleDownload = useReactToPrint({
    content: () => resumeRef.current,
    pageStyle: `
      @page { size: A4; margin: 1cm; }
      body { font-family: Arial, sans-serif; }
      h1 { color: #2c3e50; }
      .resume-preview { padding: 20px; }
    `,
    documentTitle: `${resumeData.personalInfo.name || 'My'}-Resume`,
  });

  const PreviewModal = () => {
    if (!showPreview) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-white w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-lg shadow-xl">
          <div className="flex justify-between items-center p-4 border-b">
            <h3 className="text-xl font-semibold text-gray-800">Resume Preview</h3>
            <button 
              onClick={() => setShowPreview(false)}
              className="text-gray-500 hover:text-gray-700 text-2xl"
            >
              ×
            </button>
          </div>
          <div className="p-6" ref={resumeRef}>
            <h1 className="text-3xl font-bold text-gray-800 border-b-2 border-blue-500 pb-2 mb-4">
              {resumeData.personalInfo.name}
            </h1>
            <div className="mb-6 text-gray-600">
              <p>Email: {resumeData.personalInfo.email}</p>
              <p>Phone: {resumeData.personalInfo.phone}</p>
              {resumeData.personalInfo.linkedin && <p>LinkedIn: {resumeData.personalInfo.linkedin}</p>}
              {resumeData.personalInfo.github && <p>GitHub: {resumeData.personalInfo.github}</p>}
            </div>

            {resumeData.professionalSummary && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">Professional Summary</h2>
                <p className="text-gray-700">{resumeData.professionalSummary}</p>
              </div>
            )}

            <div className="mb-6">
              <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">Education</h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="mb-4">
                  <h3 className="text-lg font-medium text-gray-800">{edu.institution}</h3>
                  <p className="text-gray-700">{edu.degree} in {edu.fieldOfStudy}</p>
                  <p className="text-gray-600">{edu.startDate} - {edu.endDate}</p>
                  {edu.description && <p className="text-gray-700 mt-1">{edu.description}</p>}
                </div>
              ))}
            </div>

            {isExperienced && resumeData.experience.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">Work Experience</h2>
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-medium text-gray-800">{exp.company}</h3>
                    <p className="text-gray-700">{exp.position}</p>
                    <p className="text-gray-600">{exp.startDate} - {exp.endDate}</p>
                    {exp.description && <p className="text-gray-700 mt-1">{exp.description}</p>}
                  </div>
                ))}
              </div>
            )}

            {resumeData.skills.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">Skills</h2>
                <ul className="flex flex-wrap gap-2">
                  {resumeData.skills.map((skill, index) => (
                    <li key={index} className="bg-blue-500 text-white px-3 py-1 rounded text-sm">
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {resumeData.projects.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">Projects</h2>
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-medium text-gray-800">{project.name}</h3>
                    {project.technologies && <p className="text-gray-600">Technologies: {project.technologies}</p>}
                    {project.description && <p className="text-gray-700 mt-1">{project.description}</p>}
                  </div>
                ))}
              </div>
            )}

            {resumeData.certifications.length > 0 && (
              <div className="mb-6">
                <h2 className="text-xl font-semibold text-gray-800 border-b pb-2 mb-2">Certifications</h2>
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="mb-4">
                    <h3 className="text-lg font-medium text-gray-800">{cert.name}</h3>
                    <p className="text-gray-700">Issued by: {cert.issuingOrganization}</p>
                    {cert.issueDate && <p className="text-gray-600">Date: {cert.issueDate}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="flex justify-end gap-3 p-4 border-t">
            <button 
              onClick={handleDownload} 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded transition-colors"
            >
              Download PDF
            </button>
            <button 
              onClick={() => setShowPreview(false)} 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="max-w-6xl mx-auto p-6 font-sans">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Resume Builder</h2>
      
      <div className="mb-10">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Select a Template</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {templates.map(template => (
            <div 
              key={template.id}
              className={`border rounded-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                selectedTemplate === template.id ? 'ring-2 ring-blue-500 border-blue-500 shadow-md' : 'border-gray-300 hover:shadow-md'
              }`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="h-40 bg-gray-200 flex items-center justify-center">
                <div className="text-gray-500">Template Image</div>
              </div>
              <div className="p-3 text-center bg-gray-50 font-medium">
                {template.name}
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedTemplate && (
        <form className="bg-white p-6 rounded-lg shadow-md" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="mb-8 pb-6 border-b">
            <h3 className="text-xl font-semibold text-gray-700 mb-5">Personal Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div>
                <label className="block text-gray-700 mb-2">Full Name</label>
                <input
                  type="text"
                  value={resumeData.personalInfo.name}
                  onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Phone</label>
                <input
                  type="tel"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">Address</label>
                <input
                  type="text"
                  value={resumeData.personalInfo.address}
                  onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">LinkedIn</label>
                <input
                  type="url"
                  value={resumeData.personalInfo.linkedin}
                  onChange={(e) => handleInputChange('personalInfo', 'linkedin', e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block text-gray-700 mb-2">GitHub</label>
                <input
                  type="url"
                  value={resumeData.personalInfo.github}
                  onChange={(e) => handleInputChange('personalInfo', 'github', e.target.value)}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Professional Summary Section */}
          <div className="mb-8 pb-6 border-b">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Professional Summary</h3>
            <textarea
              value={resumeData.professionalSummary}
              onChange={(e) => handleInputChange('professionalSummary', '', e.target.value)}
              placeholder="Write a brief summary about your professional background and skills..."
              rows={4}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>

          {/* Education Section */}
          <div className="mb-8 pb-6 border-b">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Field of Study</label>
                    <input
                      type="text"
                      value={edu.fieldOfStudy}
                      onChange={(e) => handleInputChange('education', 'fieldOfStudy', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Start Date</label>
                    <input
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => handleInputChange('education', 'startDate', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">End Date</label>
                    <input
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => handleInputChange('education', 'endDate', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Description</label>
                  <textarea
                    value={edu.description}
                    onChange={(e) => handleInputChange('education', 'description', e.target.value, index)}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    onClick={() => removeItem('education', index)}
                  >
                    Remove Education
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
              onClick={() => addNewItem('education')}
            >
              Add Another Education
            </button>
          </div>

          {/* Experience Section (conditional) */}
          {isExperienced && (
            <div className="mb-8 pb-6 border-b">
              <h3 className="text-xl font-semibold text-gray-700 mb-4">Work Experience</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="bg-gray-50 p-5 rounded-lg mb-5">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                    <div>
                      <label className="block text-gray-700 mb-2">Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                        required
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">Start Date</label>
                      <input
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => handleInputChange('experience', 'startDate', e.target.value, index)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 mb-2">End Date</label>
                      <input
                        type="month"
                        value={exp.endDate}
                        onChange={(e) => handleInputChange('experience', 'endDate', e.target.value, index)}
                        className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      />
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700 mb-2">Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                      rows={3}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                      onClick={() => removeItem('experience', index)}
                    >
                      Remove Experience
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
                onClick={() => addNewItem('experience')}
              >
                Add Another Experience
              </button>
            </div>
          )}

          {/* Skills Section */}
          <div className="mb-8 pb-6 border-b">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Skills</h3>
            <div>
              <label className="block text-gray-700 mb-2">Enter your skills separated by commas</label>
              <input
                type="text"
                value={resumeData.skills.join(', ')}
                onChange={handleSkillChange}
                placeholder="e.g., JavaScript, React, Python, Teamwork"
                className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>

          {/* Projects Section */}
          <div className="mb-8 pb-6 border-b">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Projects</h3>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-4">
                  <div>
                    <label className="block text-gray-700 mb-2">Project Name</label>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => handleInputChange('projects', 'name', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Technologies Used</label>
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) => handleInputChange('projects', 'technologies', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="block text-gray-700 mb-2">Description</label>
                  <textarea
                    value={project.description}
                    onChange={(e) => handleInputChange('projects', 'description', e.target.value, index)}
                    rows={3}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors"
                    onClick={() => removeItem('projects', index)}
                  >
                    Remove Project
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
              onClick={() => addNewItem('projects')}
            >
              Add Another Project
            </button>
          </div>

          {/* Certifications Section */}
          <div className="mb-8 pb-6 border-b">
            <h3 className="text-xl font-semibold text-gray-700 mb-4">Certifications</h3>
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="bg-gray-50 p-5 rounded-lg mb-5">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-gray-700 mb-2">Certification Name</label>
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => handleInputChange('certifications', 'name', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Issuing Organization</label>
                    <input
                      type="text"
                      value={cert.issuingOrganization}
                      onChange={(e) => handleInputChange('certifications', 'issuingOrganization', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 mb-2">Issue Date</label>
                    <input
                      type="month"
                      value={cert.issueDate}
                      onChange={(e) => handleInputChange('certifications', 'issueDate', e.target.value, index)}
                      className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
                    />
                  </div>
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded text-sm transition-colors mt-4"
                    onClick={() => removeItem('certifications', index)}
                  >
                    Remove Certification
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded transition-colors"
              onClick={() => addNewItem('certifications')}
            >
              Add Another Certification
            </button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-end mt-8">
            <button type="submit" className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded transition-colors">
              Save Resume
            </button>
            <button 
              type="button" 
              className="bg-purple-500 hover:bg-purple-600 text-white px-5 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handlePreview}
              disabled={!selectedTemplate}
            >
              Preview Resume
            </button>
            <button 
              type="button" 
              className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 rounded transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              onClick={handleDownload}
              disabled={!selectedTemplate}
            >
              Download Resume
            </button>
          </div>
        </form>
      )}

      <PreviewModal />
    </div>
  );
};

export default Resume;