import React, { useState, useEffect } from 'react';
import {
  FolderIcon,
  GithubIcon,
  ExternalLinkIcon,
  UserIcon,
  CalendarIcon,
  TagIcon,
  PlusIcon,
  XIcon,
  SaveIcon,
  TrashIcon
} from 'lucide-react';
import { motion } from 'framer-motion';

// -----------------------------
// Project Card
// -----------------------------
const ProjectCard = ({
  id,
  title,
  description,
  technologies,
  githubUrl,
  liveUrl,
  teamMembers,
  date,
  status,
  profileImage,
  onEdit,
  onDelete
}) => {
  const [showDetails, setShowDetails] = useState(false);

  const getStatusColor = () => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400';
      case 'in-progress':
        return 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400';
      case 'planned':
        return 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400';
      default:
        return '';
    }
  };

  const bannerIsClickable = Boolean(liveUrl);

  const handleBannerClick = () => {
    if (liveUrl) {
      window.open(liveUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 transition-all duration-300"
    >
      {/* Clickable banner that shows uploaded image or gradient fallback */}
      <div
        role={bannerIsClickable ? 'button' : undefined}
        aria-label={bannerIsClickable ? `Open live demo for ${title}` : undefined}
        tabIndex={bannerIsClickable ? 0 : -1}
        onClick={handleBannerClick}
        onKeyDown={(e) => {
          if (bannerIsClickable && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
            handleBannerClick();
          }
        }}
        className={`h-40 relative ${bannerIsClickable ? 'cursor-pointer' : 'cursor-default'} overflow-hidden`}
        title={bannerIsClickable ? 'Click to view Live Demo' : 'No live demo available'}
      >
        {profileImage ? (
          <img 
            src={profileImage} 
            alt={title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-r from-blue-500 to-purple-500" />
        )}
        
        <div className="absolute top-4 right-4">
          <span className={`text-xs px-2 py-1 rounded-full ${getStatusColor()}`}>
            {status.replace('-', ' ').charAt(0).toUpperCase() + status.replace('-', ' ').slice(1)}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 p-2 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full">
          <FolderIcon className="w-6 h-6 text-blue-500" />
        </div>
        {(onEdit || onDelete) && (
          <div className="absolute bottom-4 right-4 flex space-x-1">
            {onEdit && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  onEdit();
                }}
                className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-blue-500 hover:text-blue-600 transition-colors duration-200"
                aria-label="Edit project"
              >
                <SaveIcon className="w-4 h-4" />
              </button>
            )}
            {onDelete && (
              <button
                onClick={e => {
                  e.stopPropagation();
                  onDelete();
                }}
                className="p-2 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-red-500 hover:text-red-600 transition-colors duration-200"
                aria-label="Delete project"
              >
                <TrashIcon className="w-4 h-4" />
              </button>
            )}
          </div>
        )}
      </div>

      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
          {description.length > 120 ? `${description.substring(0, 120)}...` : description}
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.slice(0, 4).map((tech, index) => (
            <span
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
            >
              {tech}
            </span>
          ))}
          {technologies.length > 4 && (
            <span className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300">
              +{technologies.length - 4} more
            </span>
          )}
        </div>

        <div className="space-y-2 mb-4">
          {teamMembers && teamMembers.length > 0 && (
            <div className="flex items-center text-sm">
              <UserIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
              <span className="text-gray-600 dark:text-gray-300">
                {teamMembers.length === 1 ? 'Individual Project' : `Team of ${teamMembers.length}`}
              </span>
            </div>
          )}
          <div className="flex items-center text-sm">
            <CalendarIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-300">{date}</span>
          </div>
          <div className="flex items-center text-sm">
            <TagIcon className="w-4 h-4 mr-2 text-gray-500 dark:text-gray-400" />
            <span className="text-gray-600 dark:text-gray-300">Academic Project</span>
          </div>
        </div>

        <div className="flex justify-between mt-4">
          {githubUrl && (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label={`Open GitHub code for ${title}`}
            >
              <GithubIcon className="w-4 h-4 mr-1" />
              Code
            </a>
          )}
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors duration-200"
              aria-label={`Open live demo for ${title}`}
            >
              <ExternalLinkIcon className="w-4 h-4 mr-1" />
              Live Demo
            </a>
          )}
          <button
            onClick={() => setShowDetails(!showDetails)}
            className="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"
            aria-expanded={showDetails}
            aria-controls={`project-details-${id}`}
          >
            {showDetails ? 'Hide Details' : 'View Details'}
          </button>
        </div>

        {showDetails && (
          <motion.div
            id={`project-details-${id}`}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700"
          >
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>
            {teamMembers && teamMembers.length > 0 && (
              <div className="mb-4">
                <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Team Members</h4>
                <div className="flex flex-wrap gap-2">
                  {teamMembers.map((member, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
                    >
                      {member}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <div className="mb-4">
              <h4 className="text-md font-medium text-gray-800 dark:text-white mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                {technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="text-xs px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex justify-end space-x-2">
              {onEdit && (
                <button
                  onClick={onEdit}
                  className="px-3 py-1.5 text-sm font-medium rounded-md bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
                >
                  Edit Project
                </button>
              )}
              {liveUrl && (
                <a
                  href={liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
                >
                  Visit Live Demo
                </a>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

// -----------------------------
// Project Form
// -----------------------------
const ProjectForm = ({
  id,
  title: initialTitle,
  description: initialDescription,
  technologies: initialTechnologies,
  githubUrl: initialGithubUrl,
  liveUrl: initialLiveUrl,
  teamMembers: initialTeamMembers,
  date: initialDate,
  status: initialStatus,
  profileImage: initialProfileImage,
  onSave,
  onCancel
}) => {
  const [title, setTitle] = useState(initialTitle);
  const [description, setDescription] = useState(initialDescription);
  const [technologies, setTechnologies] = useState(initialTechnologies);
  const [newTech, setNewTech] = useState('');
  const [githubUrl, setGithubUrl] = useState(initialGithubUrl);
  const [liveUrl, setLiveUrl] = useState(initialLiveUrl);
  const [teamMembers, setTeamMembers] = useState(initialTeamMembers);
  const [newMember, setNewMember] = useState('');
  const [date, setDate] = useState(initialDate);
  const [status, setStatus] = useState(initialStatus);
  const [profileImage, setProfileImage] = useState(initialProfileImage);

  const handleAddTech = () => {
    const value = newTech.trim();
    if (value !== '' && !technologies.includes(value)) {
      setTechnologies([...technologies, value]);
      setNewTech('');
    }
  };

  const handleRemoveTech = (tech) => {
    setTechnologies(technologies.filter(t => t !== tech));
  };

  const handleAddMember = () => {
    const value = newMember.trim();
    if (value !== '' && !teamMembers.includes(value)) {
      setTeamMembers([...teamMembers, value]);
      setNewMember('');
    }
  };

  const handleRemoveMember = (member) => {
    setTeamMembers(teamMembers.filter(m => m !== member));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setProfileImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave({
      id,
      title,
      description,
      technologies,
      githubUrl,
      liveUrl,
      teamMembers,
      date,
      status,
      profileImage
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="title" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Project Title *
        </label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
        />
      </div>

      <div>
        <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Description *
        </label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          required
          rows={4}
          className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
        ></textarea>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Technologies *
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="flex items-center text-sm px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400"
            >
              {tech}
              <button
                type="button"
                onClick={() => handleRemoveTech(tech)}
                className="ml-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"
                aria-label={`Remove ${tech}`}
              >
                <XIcon className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={newTech}
            onChange={e => setNewTech(e.target.value)}
            placeholder="Add technology"
            className="flex-1 p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-l-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
          />
          <button
            type="button"
            onClick={handleAddTech}
            className="px-3 py-2.5 rounded-r-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors duration-200"
            aria-label="Add technology"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            GitHub URL
          </label>
          <input
            type="url"
            id="githubUrl"
            value={githubUrl}
            onChange={e => setGithubUrl(e.target.value)}
            placeholder="https://github.com/username/repo"
            className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <label htmlFor="liveUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Live Demo URL
          </label>
          <input
            type="url"
            id="liveUrl"
            value={liveUrl}
            onChange={e => setLiveUrl(e.target.value)}
            placeholder="https://your-demo.vercel.app"
            className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Team Members
        </label>
        <div className="flex flex-wrap gap-2 mb-2">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="flex items-center text-sm px-2 py-1 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400"
            >
              {member}
              <button
                type="button"
                onClick={() => handleRemoveMember(member)}
                className="ml-1 text-purple-600 dark:text-purple-400 hover:text-purple-800 dark:hover:text-purple-300"
                aria-label={`Remove ${member}`}
              >
                <XIcon className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
        <div className="flex">
          <input
            type="text"
            value={newMember}
            onChange={e => setNewMember(e.target.value)}
            placeholder="Add team member"
            className="flex-1 p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-l-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
          />
          <button
            type="button"
            onClick={handleAddMember}
            className="px-3 py-2.5 rounded-r-lg bg-purple-500 text-white hover:bg-purple-600 transition-colors duration-200"
            aria-label="Add team member"
          >
            <PlusIcon className="w-5 h-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="date" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Date *
          </label>
          <input
            type="text"
            id="date"
            value={date}
            onChange={e => setDate(e.target.value)}
            required
            placeholder="e.g. January 2025"
            className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200"
          />
        </div>
        <div>
          <label htmlFor="status" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
            Status *
          </label>
          <select
            id="status"
            value={status}
            onChange={e => setStatus(e.target.value)}
            required
            className="w-full p-2.5 bg-gray-100/80 dark:bg-gray-700/50 rounded-lg border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-400 dark:focus:ring-blue-500 text-gray-800 dark:text-gray-200 appearance-none"
          >
            <option value="completed">Completed</option>
            <option value="in-progress">In Progress</option>
            <option value="planned">Planned</option>
          </select>
        </div>
      </div>

      {/* Upload Image Section */}
      <div>
        <label htmlFor="profileImage" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          Upload Project Banner Image
        </label>
        <input
          type="file"
          id="profileImage"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full text-sm text-gray-700 dark:text-gray-300"
        />
        {profileImage && (
          <div className="mt-3">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Image Preview:</p>
            <img
              src={profileImage}
              alt="Project Banner Preview"
              className="w-full h-40 object-cover rounded-lg border border-gray-300 dark:border-gray-600"
            />
          </div>
        )}
      </div>

      <div className="flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 text-sm font-medium rounded-md bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center"
        >
          <SaveIcon className="w-4 h-4 mr-1" />
          Save Project
        </button>
      </div>
    </form>
  );
};

// -----------------------------
// Projects (List + Create/Edit)
// -----------------------------
const Projects = () => {
  // Load projects from localStorage on initial render
  const [projects, setProjects] = useState(() => {
    const savedProjects = localStorage.getItem('projects');
    if (savedProjects) {
      return JSON.parse(savedProjects);
    }
    // Default projects if none in localStorage
    return [
      {
        id: 'p1',
        title: 'Student Dashboard',
        description: 'A comprehensive dashboard for college students to track academic progress, assignments, and events.',
        technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],
        githubUrl: 'https://github.com/username/student-dashboard',
        liveUrl: 'https://student-dashboard-demo.com',
        teamMembers: ['John Smith'],
        date: 'January 2025',
        status: 'completed',
        profileImage: null
      },
      {
        id: 'p2',
        title: 'E-Learning Platform',
        description: 'An interactive platform for online education with video lectures, quizzes, and progress tracking.',
        technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
        githubUrl: 'https://github.com/username/e-learning-platform',
        liveUrl: '',
        teamMembers: ['John Smith', 'Jane Doe', 'Bob Johnson'],
        date: 'December 2024',
        status: 'in-progress',
        profileImage: null
      }
    ];
  });

  const [editingProject, setEditingProject] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [filter, setFilter] = useState('all');

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('projects', JSON.stringify(projects));
  }, [projects]);

  const handleEditProject = (project) => {
    setEditingProject(project);
    setIsCreating(false);
    setShowForm(true);
  };

  const handleCreateProject = () => {
    setEditingProject({
      title: '',
      description: '',
      technologies: [],
      githubUrl: '',
      liveUrl: '',
      teamMembers: [],
      date: '',
      status: 'planned',
      profileImage: null
    });
    setIsCreating(true);
    setShowForm(true);
  };

  const handleSaveProject = (project) => {
    if (isCreating) {
      const newProject = { 
        ...project, 
        id: `p${Date.now()}` // Use timestamp for unique ID
      };
      setProjects([...projects, newProject]);
    } else {
      setProjects(projects.map(p => (p.id === project.id ? project : p)));
    }
    setEditingProject(null);
    setIsCreating(false);
    setShowForm(false);
  };

  const handleDeleteProject = (id) => {
    if (window.confirm('Are you sure you want to delete this project?')) {
      setProjects(projects.filter(p => p.id !== id));
    }
  };

  const filteredProjects = filter === 'all' ? projects : projects.filter(project => project.status === filter);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
      <div className="max-w-7xl mx-auto space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">
            {showForm ? (isCreating ? 'Create New Project' : 'Edit Project') : 'My Projects'}
          </h1>
          <div className="flex space-x-2">
            {!showForm && (
              <>
                <div className="flex space-x-1">
                  <button
                    onClick={() => setFilter('all')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      filter === 'all'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    All
                  </button>
                  <button
                    onClick={() => setFilter('completed')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      filter === 'completed'
                        ? 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    Completed
                  </button>
                  <button
                    onClick={() => setFilter('in-progress')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      filter === 'in-progress'
                        ? 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    In Progress
                  </button>
                  <button
                    onClick={() => setFilter('planned')}
                    className={`px-3 py-1.5 rounded-md text-sm font-medium transition-all duration-200 ${
                      filter === 'planned'
                        ? 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-600 dark:text-yellow-400'
                        : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                    }`}
                  >
                    Planned
                  </button>
                </div>

                <button
                  onClick={handleCreateProject}
                  className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center"
                >
                  <PlusIcon className="w-4 h-4 mr-1" />
                  Add Project
                </button>
              </>
            )}
          </div>
        </div>

        {showForm ? (
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700">
            <ProjectForm
              {...editingProject}
              onSave={handleSaveProject}
              onCancel={() => {
                setEditingProject(null);
                setIsCreating(false);
                setShowForm(false);
              }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map(project => (
              <ProjectCard
                key={project.id}
                id={project.id}
                title={project.title}
                description={project.description}
                technologies={project.technologies}
                githubUrl={project.githubUrl}
                liveUrl={project.liveUrl}
                teamMembers={project.teamMembers}
                date={project.date}
                status={project.status}
                profileImage={project.profileImage}
                onEdit={() => handleEditProject(project)}
                onDelete={() => handleDeleteProject(project.id)}
              />
            ))}
          </div>
        )}

        {!showForm && filteredProjects.length === 0 && (
          <div className="text-center py-10">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 dark:bg-gray-800 mb-4">
              <FolderIcon className="w-8 h-8 text-gray-500 dark:text-gray-400" />
            </div>
            <h3 className="text-lg font-medium text-gray-800 dark:text-white mb-2">No projects found</h3>
            <p className="text-gray-500 dark:text-gray-400 mb-4">
              {filter === 'all' ? "You don't have any projects yet." : `You don't have any ${filter.replace('-', ' ')} projects.`}
            </p>
            <button
              onClick={handleCreateProject}
              className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200"
            >
              Create Your First Project
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;