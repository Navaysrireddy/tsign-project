import React, { useState } from 'react';

import { FolderIcon, PlusIcon, XIcon, SaveIcon, TrashIcon } from 'lucide-react';

 

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

 

  const handleAddTech = () => {

    if (newTech.trim() !== '' && !technologies.includes(newTech.trim())) {

      setTechnologies([...technologies, newTech.trim()]);

      setNewTech('');

    }

  };

 

  const handleRemoveTech = (tech) => {

    setTechnologies(technologies.filter(t => t !== tech));

  };

 

  const handleAddMember = () => {

    if (newMember.trim() !== '' && !teamMembers.includes(newMember.trim())) {

      setTeamMembers([...teamMembers, newMember.trim()]);

      setNewMember('');

    }

  };

 

  const handleRemoveMember = (member) => {

    setTeamMembers(teamMembers.filter(m => m !== member));

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

      status

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

            <div key={index} className="flex items-center text-sm px-2 py-1 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400">

              {tech}

              <button

                type="button"

                onClick={() => handleRemoveTech(tech)}

                className="ml-1 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300"

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

 

const EditProjects = () => {

  const [projects, setProjects] = useState([

    {

      id: 'p1',

      title: 'Student Dashboard',

      description:

        'A comprehensive dashboard for college students to track academic progress, assignments, and events.',

      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js'],

      githubUrl: 'https://github.com/username/student-dashboard',

      liveUrl: 'https://student-dashboard-demo.com',

      teamMembers: ['John Smith'],

      date: 'January 2025',

      status: 'completed'

    },

    {

      id: 'p2',

      title: 'E-Learning Platform',

      description:

        'An interactive platform for online education with video lectures, quizzes, and progress tracking.',

      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],

      githubUrl: 'https://github.com/username/e-learning-platform',

      liveUrl: '',

      teamMembers: ['John Smith', 'Jane Doe', 'Bob Johnson'],

      date: 'December 2024',

      status: 'in-progress'

    }

  ]);

  const [editingProject, setEditingProject] = useState(null);

  const [isCreating, setIsCreating] = useState(false);

 

  const handleEditProject = (project) => {

    setEditingProject(project);

    setIsCreating(false);

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

      status: 'planned'

    });

    setIsCreating(true);

  };

 

  const handleSaveProject = (project) => {

    if (isCreating) {

      setProjects([...projects, { ...project, id: `p${projects.length + 1}` }]);

    } else {

      setProjects(projects.map(p => (p.id === project.id ? project : p)));

    }

    setEditingProject(null);

    setIsCreating(false);

  };

 

  const handleDeleteProject = (id) => {

    setProjects(projects.filter(p => p.id !== id));

  };

 

  return (

    <div className="space-y-6">

      <div className="flex items-center justify-between">

        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">

          {editingProject ? (isCreating ? 'Create New Project' : 'Edit Project') : 'Manage Projects'}

        </h1>

        {!editingProject && (

          <button

            onClick={handleCreateProject}

            className="px-4 py-2 text-sm font-medium rounded-md bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 transition-all duration-200 flex items-center"

          >

            <PlusIcon className="w-4 h-4 mr-1" />

            New Project

          </button>

        )}

      </div>

      {editingProject ? (

        <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700">

          <ProjectForm {...editingProject} onSave={handleSaveProject} onCancel={() => setEditingProject(null)} />

        </div>

      ) : (

        <div className="space-y-4">

          {projects.map(project => (

            <div

              key={project.id}

              className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-[0_10px_20px_rgba(0,0,0,0.05)] dark:shadow-[0_10px_20px_rgba(0,0,0,0.2)] border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 transition-all duration-300"

            >

              <div className="flex items-start justify-between">

                <div className="flex items-start space-x-3">

                  <div className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 mt-1">

                    <FolderIcon className="w-5 h-5" />

                  </div>

                  <div>

                    <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{project.title}</h3>

                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{project.description.substring(0, 100)}...</p>

                    <div className="flex flex-wrap gap-2 mt-3">

                      {project.technologies.map((tech, index) => (

                        <span

                          key={index}

                          className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"

                        >

                          {tech}

                        </span>

                      ))}

                    </div>

                  </div>

                </div>

                <div className="flex space-x-2">

                  <button

                    onClick={() => handleEditProject(project)}

                    className="p-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors duration-200"

                  >

                    <SaveIcon className="w-4 h-4" />

                  </button>

                  <button

                    onClick={() => handleDeleteProject(project.id)}

                    className="p-2 rounded-full bg-red-100 dark:bg-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/50 transition-colors duration-200"

                  >

                    <TrashIcon className="w-4 h-4" />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );

};

 

export default EditProjects;

 

