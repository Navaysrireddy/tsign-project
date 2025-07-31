import React, { useState, useRef } from 'react';
import { useReactToPrint } from 'react-to-print';
import './HResume.css';

const ResumeBuilder = ({ isExperienced = false }) => {
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
      <div className="preview-modal">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Resume Preview</h3>
            <button onClick={() => setShowPreview(false)}>×</button>
          </div>
          <div className="resume-preview" ref={resumeRef}>
            <h1>{resumeData.personalInfo.name}</h1>
            <div className="contact-info">
              <p>Email: {resumeData.personalInfo.email}</p>
              <p>Phone: {resumeData.personalInfo.phone}</p>
              {resumeData.personalInfo.linkedin && <p>LinkedIn: {resumeData.personalInfo.linkedin}</p>}
              {resumeData.personalInfo.github && <p>GitHub: {resumeData.personalInfo.github}</p>}
            </div>

            {resumeData.professionalSummary && (
              <div className="section">
                <h2>Professional Summary</h2>
                <p>{resumeData.professionalSummary}</p>
              </div>
            )}

            <div className="section">
              <h2>Education</h2>
              {resumeData.education.map((edu, index) => (
                <div key={index} className="education-item">
                  <h3>{edu.institution}</h3>
                  <p>{edu.degree} in {edu.fieldOfStudy}</p>
                  <p>{edu.startDate} - {edu.endDate}</p>
                  {edu.description && <p>{edu.description}</p>}
                </div>
              ))}
            </div>

            {isExperienced && resumeData.experience.length > 0 && (
              <div className="section">
                <h2>Work Experience</h2>
                {resumeData.experience.map((exp, index) => (
                  <div key={index} className="experience-item">
                    <h3>{exp.company}</h3>
                    <p>{exp.position}</p>
                    <p>{exp.startDate} - {exp.endDate}</p>
                    {exp.description && <p>{exp.description}</p>}
                  </div>
                ))}
              </div>
            )}

            {resumeData.skills.length > 0 && (
              <div className="section">
                <h2>Skills</h2>
                <ul className="skills-list">
                  {resumeData.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                  ))}
                </ul>
              </div>
            )}

            {resumeData.projects.length > 0 && (
              <div className="section">
                <h2>Projects</h2>
                {resumeData.projects.map((project, index) => (
                  <div key={index} className="project-item">
                    <h3>{project.name}</h3>
                    {project.technologies && <p>Technologies: {project.technologies}</p>}
                    {project.description && <p>{project.description}</p>}
                  </div>
                ))}
              </div>
            )}

            {resumeData.certifications.length > 0 && (
              <div className="section">
                <h2>Certifications</h2>
                {resumeData.certifications.map((cert, index) => (
                  <div key={index} className="certification-item">
                    <h3>{cert.name}</h3>
                    <p>Issued by: {cert.issuingOrganization}</p>
                    {cert.issueDate && <p>Date: {cert.issueDate}</p>}
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="modal-actions">
            <button onClick={handleDownload} className="download-btn">
              Download PDF
            </button>
            <button onClick={() => setShowPreview(false)} className="close-btn">
              Close
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="resume-builder-container">
      <h2>Resume Builder</h2>
      
      <div className="template-selection-section">
        <h3>Select a Template</h3>
        <div className="template-grid">
          {templates.map(template => (
            <div 
              key={template.id}
              className={`template-card ${selectedTemplate === template.id ? 'selected' : ''}`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <div className="template-thumbnail">
                <img src={template.thumbnail} alt={template.name} />
              </div>
              <div className="template-name">{template.name}</div>
            </div>
          ))}
        </div>
      </div>

      {selectedTemplate && (
        <form className="resume-form" onSubmit={handleSubmit}>
          {/* Personal Information Section */}
          <div className="form-section">
            <h3>Personal Information</h3>
            <div className="form-grid">
              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  value={resumeData.personalInfo.name}
                  onChange={(e) => handleInputChange('personalInfo', 'name', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  value={resumeData.personalInfo.email}
                  onChange={(e) => handleInputChange('personalInfo', 'email', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Phone</label>
                <input
                  type="tel"
                  value={resumeData.personalInfo.phone}
                  onChange={(e) => handleInputChange('personalInfo', 'phone', e.target.value)}
                  required
                />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input
                  type="text"
                  value={resumeData.personalInfo.address}
                  onChange={(e) => handleInputChange('personalInfo', 'address', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>LinkedIn</label>
                <input
                  type="url"
                  value={resumeData.personalInfo.linkedin}
                  onChange={(e) => handleInputChange('personalInfo', 'linkedin', e.target.value)}
                />
              </div>
              <div className="form-group">
                <label>GitHub</label>
                <input
                  type="url"
                  value={resumeData.personalInfo.github}
                  onChange={(e) => handleInputChange('personalInfo', 'github', e.target.value)}
                />
              </div>
            </div>
          </div>

          {/* Professional Summary Section */}
          <div className="form-section">
            <h3>Professional Summary</h3>
            <textarea
              value={resumeData.professionalSummary}
              onChange={(e) => handleInputChange('professionalSummary', '', e.target.value)}
              placeholder="Write a brief summary about your professional background and skills..."
              rows={4}
            />
          </div>

          {/* Education Section */}
          <div className="form-section">
            <h3>Education</h3>
            {resumeData.education.map((edu, index) => (
              <div key={index} className="education-item form-item">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Institution</label>
                    <input
                      type="text"
                      value={edu.institution}
                      onChange={(e) => handleInputChange('education', 'institution', e.target.value, index)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Degree</label>
                    <input
                      type="text"
                      value={edu.degree}
                      onChange={(e) => handleInputChange('education', 'degree', e.target.value, index)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Field of Study</label>
                    <input
                      type="text"
                      value={edu.fieldOfStudy}
                      onChange={(e) => handleInputChange('education', 'fieldOfStudy', e.target.value, index)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Start Date</label>
                    <input
                      type="month"
                      value={edu.startDate}
                      onChange={(e) => handleInputChange('education', 'startDate', e.target.value, index)}
                    />
                  </div>
                  <div className="form-group">
                    <label>End Date</label>
                    <input
                      type="month"
                      value={edu.endDate}
                      onChange={(e) => handleInputChange('education', 'endDate', e.target.value, index)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={edu.description}
                    onChange={(e) => handleInputChange('education', 'description', e.target.value, index)}
                    rows={3}
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeItem('education', index)}
                  >
                    Remove Education
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => addNewItem('education')}
            >
              Add Another Education
            </button>
          </div>

          {/* Experience Section (conditional) */}
          {isExperienced && (
            <div className="form-section">
              <h3>Work Experience</h3>
              {resumeData.experience.map((exp, index) => (
                <div key={index} className="experience-item form-item">
                  <div className="form-grid">
                    <div className="form-group">
                      <label>Company</label>
                      <input
                        type="text"
                        value={exp.company}
                        onChange={(e) => handleInputChange('experience', 'company', e.target.value, index)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Position</label>
                      <input
                        type="text"
                        value={exp.position}
                        onChange={(e) => handleInputChange('experience', 'position', e.target.value, index)}
                        required
                      />
                    </div>
                    <div className="form-group">
                      <label>Start Date</label>
                      <input
                        type="month"
                        value={exp.startDate}
                        onChange={(e) => handleInputChange('experience', 'startDate', e.target.value, index)}
                      />
                    </div>
                    <div className="form-group">
                      <label>End Date</label>
                      <input
                        type="month"
                        value={exp.endDate}
                        onChange={(e) => handleInputChange('experience', 'endDate', e.target.value, index)}
                      />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Description</label>
                    <textarea
                      value={exp.description}
                      onChange={(e) => handleInputChange('experience', 'description', e.target.value, index)}
                      rows={3}
                    />
                  </div>
                  {index > 0 && (
                    <button
                      type="button"
                      className="remove-btn"
                      onClick={() => removeItem('experience', index)}
                    >
                      Remove Experience
                    </button>
                  )}
                </div>
              ))}
              <button
                type="button"
                className="add-btn"
                onClick={() => addNewItem('experience')}
              >
                Add Another Experience
              </button>
            </div>
          )}

          {/* Skills Section */}
          <div className="form-section">
            <h3>Skills</h3>
            <div className="form-group">
              <label>Enter your skills separated by commas</label>
              <input
                type="text"
                value={resumeData.skills.join(', ')}
                onChange={handleSkillChange}
                placeholder="e.g., JavaScript, React, Python, Teamwork"
              />
            </div>
          </div>

          {/* Projects Section */}
          <div className="form-section">
            <h3>Projects</h3>
            {resumeData.projects.map((project, index) => (
              <div key={index} className="project-item form-item">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Project Name</label>
                    <input
                      type="text"
                      value={project.name}
                      onChange={(e) => handleInputChange('projects', 'name', e.target.value, index)}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label>Technologies Used</label>
                    <input
                      type="text"
                      value={project.technologies}
                      onChange={(e) => handleInputChange('projects', 'technologies', e.target.value, index)}
                    />
                  </div>
                </div>
                <div className="form-group">
                  <label>Description</label>
                  <textarea
                    value={project.description}
                    onChange={(e) => handleInputChange('projects', 'description', e.target.value, index)}
                    rows={3}
                  />
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeItem('projects', index)}
                  >
                    Remove Project
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => addNewItem('projects')}
            >
              Add Another Project
            </button>
          </div>

          {/* Certifications Section */}
          <div className="form-section">
            <h3>Certifications</h3>
            {resumeData.certifications.map((cert, index) => (
              <div key={index} className="certification-item form-item">
                <div className="form-grid">
                  <div className="form-group">
                    <label>Certification Name</label>
                    <input
                      type="text"
                      value={cert.name}
                      onChange={(e) => handleInputChange('certifications', 'name', e.target.value, index)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Issuing Organization</label>
                    <input
                      type="text"
                      value={cert.issuingOrganization}
                      onChange={(e) => handleInputChange('certifications', 'issuingOrganization', e.target.value, index)}
                    />
                  </div>
                  <div className="form-group">
                    <label>Issue Date</label>
                    <input
                      type="month"
                      value={cert.issueDate}
                      onChange={(e) => handleInputChange('certifications', 'issueDate', e.target.value, index)}
                    />
                  </div>
                </div>
                {index > 0 && (
                  <button
                    type="button"
                    className="remove-btn"
                    onClick={() => removeItem('certifications', index)}
                  >
                    Remove Certification
                  </button>
                )}
              </div>
            ))}
            <button
              type="button"
              className="add-btn"
              onClick={() => addNewItem('certifications')}
            >
              Add Another Certification
            </button>
          </div>

          <div className="form-actions">
            <button type="submit" className="submit-btn">
              Save Resume
            </button>
            <button 
              type="button" 
              className="preview-btn"
              onClick={handlePreview}
              disabled={!selectedTemplate}
            >
              Preview Resume
            </button>
            <button 
              type="button" 
              className="download-btn"
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

export default ResumeBuilder;