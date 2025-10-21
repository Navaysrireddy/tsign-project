// import React, { useState } from 'react';
// import { FolderIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon, UsersIcon, GitBranchIcon, GitPullRequestIcon, PlusCircleIcon } from 'lucide-react';
// export const Projects = () => {
//   const projects = [{
//     id: 1,
//     name: 'Machine Learning Model',
//     description: 'Implement a neural network model for image classification',
//     course: 'CS 403',
//     status: 'completed',
//     dueDate: 'May 15, 2023',
//     progress: 100,
//     team: ['John Smith', 'Alice Johnson', 'Bob Chen'],
//     tags: ['AI', 'Python', 'TensorFlow']
//   }, {
//     id: 2,
//     name: 'Database Design',
//     description: 'Design and implement a relational database for an e-commerce platform',
//     course: 'CS 402',
//     status: 'ongoing',
//     dueDate: 'Jun 20, 2023',
//     progress: 65,
//     team: ['John Smith', 'David Lee'],
//     tags: ['SQL', 'Database', 'ERD']
//   }, {
//     id: 3,
//     name: 'UI/UX Research',
//     description: 'Conduct user research and design a mobile app interface',
//     course: 'CS 405',
//     status: 'ongoing',
//     dueDate: 'Jun 25, 2023',
//     progress: 40,
//     team: ['John Smith', 'Sarah Wilson', 'Michael Brown'],
//     tags: ['UI/UX', 'Research', 'Figma']
//   }, {
//     id: 4,
//     name: 'Final Presentation',
//     description: 'Prepare and deliver a presentation on cloud computing technologies',
//     course: 'CS 410',
//     status: 'upcoming',
//     dueDate: 'Jul 05, 2023',
//     progress: 10,
//     team: ['John Smith'],
//     tags: ['Cloud', 'Presentation', 'Research']
//   }];
//   const milestones = [{
//     id: 1,
//     projectId: 2,
//     title: 'Database Schema Design',
//     status: 'completed',
//     dueDate: 'May 25, 2023'
//   }, {
//     id: 2,
//     projectId: 2,
//     title: 'Query Optimization',
//     status: 'ongoing',
//     dueDate: 'Jun 10, 2023'
//   }, {
//     id: 3,
//     projectId: 2,
//     title: 'Final Implementation',
//     status: 'upcoming',
//     dueDate: 'Jun 20, 2023'
//   }, {
//     id: 4,
//     projectId: 3,
//     title: 'User Research',
//     status: 'completed',
//     dueDate: 'Jun 05, 2023'
//   }, {
//     id: 5,
//     projectId: 3,
//     title: 'Wireframing',
//     status: 'ongoing',
//     dueDate: 'Jun 15, 2023'
//   }, {
//     id: 6,
//     projectId: 3,
//     title: 'Usability Testing',
//     status: 'upcoming',
//     dueDate: 'Jun 22, 2023'
//   }];
//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'completed':
//         return <CheckCircleIcon size={16} className="text-green-500" />;
//       case 'ongoing':
//         return <ClockIcon size={16} className="text-amber-500" />;
//       case 'upcoming':
//         return <AlertCircleIcon size={16} className="text-blue-500" />;
//       default:
//         return null;
//     }
//   };
//   const getStatusClass = (status: string) => {
//     switch (status) {
//       case 'completed':
//         return 'bg-green-100 text-green-800';
//       case 'ongoing':
//         return 'bg-amber-100 text-amber-800';
//       case 'upcoming':
//         return 'bg-blue-100 text-blue-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };
//   const getProgressColor = (progress: number) => {
//     if (progress >= 100) return 'bg-green-500';
//     if (progress >= 60) return 'bg-blue-500';
//     if (progress >= 30) return 'bg-amber-500';
//     return 'bg-red-500';
//   };
//   const [selectedProject, setSelectedProject] = useState<number | null>(2);
//   return <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
//         <button className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
//           <PlusCircleIcon size={16} />
//           <span>New Project</span>
//         </button>
//       </div>

//       {/* Projects List */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         {projects.map(project => <div key={project.id} className={`bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-opacity-80 border ${selectedProject === project.id ? 'border-blue-300 ring-2 ring-blue-100' : 'border-gray-100'} cursor-pointer`} onClick={() => setSelectedProject(project.id)}>
//             <div className="flex justify-between items-start">
//               <div className="flex items-center space-x-2">
//                 <FolderIcon size={18} className="text-blue-500" />
//                 <h2 className="font-semibold text-gray-800">{project.name}</h2>
//               </div>
//               <span className={`text-xs px-2 py-1 rounded-full flex items-center space-x-1 ${getStatusClass(project.status)}`}>
//                 {getStatusIcon(project.status)}
//                 <span className="capitalize">{project.status}</span>
//               </span>
//             </div>
//             <p className="text-sm text-gray-600 mt-3 line-clamp-2">
//               {project.description}
//             </p>
//             <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
//               <span>{project.course}</span>
//               <span>Due: {project.dueDate}</span>
//             </div>
//             <div className="mt-4">
//               <div className="flex justify-between mb-1 text-xs">
//                 <span className="font-medium text-gray-600">Progress</span>
//                 <span className="font-medium text-blue-600">
//                   {project.progress}%
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-1.5">
//                 <div className={`${getProgressColor(project.progress)} h-1.5 rounded-full transition-all duration-500 ease-out`} style={{
//               width: `${project.progress}%`
//             }}></div>
//               </div>
//             </div>
//             <div className="mt-4 flex items-center justify-between">
//               <div className="flex -space-x-2">
//                 {project.team.slice(0, 3).map((member, index) => <div key={index} className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600" title={member}>
//                     {member.split(' ').map(n => n[0]).join('')}
//                   </div>)}
//                 {project.team.length > 3 && <div className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
//                     +{project.team.length - 3}
//                   </div>}
//               </div>
//               <div className="flex flex-wrap gap-1">
//                 {project.tags.slice(0, 2).map((tag, index) => <span key={index} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
//                     {tag}
//                   </span>)}
//                 {project.tags.length > 2 && <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">
//                     +{project.tags.length - 2}
//                   </span>}
//               </div>
//             </div>
//           </div>)}
//       </div>

//       {selectedProject && <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {/* Project Details */}
//           <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Project Details
//               </h2>
//               <div className="flex items-center space-x-2">
//                 <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-full transition-colors duration-200">
//                   Edit
//                 </button>
//                 <GitBranchIcon size={18} className="text-blue-500" />
//               </div>
//             </div>
//             {projects.filter(p => p.id === selectedProject).map(project => <div key={project.id} className="space-y-4">
//                   <div>
//                     <h3 className="text-xl font-semibold text-gray-800">
//                       {project.name}
//                     </h3>
//                     <p className="text-sm text-gray-600 mt-1">
//                       {project.description}
//                     </p>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div className="bg-gray-50 p-3 rounded-lg">
//                       <p className="text-xs text-gray-500">Course</p>
//                       <p className="text-sm font-medium text-gray-800">
//                         {project.course}
//                       </p>
//                     </div>
//                     <div className="bg-gray-50 p-3 rounded-lg">
//                       <p className="text-xs text-gray-500">Due Date</p>
//                       <p className="text-sm font-medium text-gray-800">
//                         {project.dueDate}
//                       </p>
//                     </div>
//                     <div className="bg-gray-50 p-3 rounded-lg">
//                       <p className="text-xs text-gray-500">Status</p>
//                       <div className="flex items-center space-x-1 mt-1">
//                         {getStatusIcon(project.status)}
//                         <span className="text-sm font-medium text-gray-800 capitalize">
//                           {project.status}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="bg-gray-50 p-3 rounded-lg">
//                       <p className="text-xs text-gray-500">Team Size</p>
//                       <div className="flex items-center space-x-1 mt-1">
//                         <UsersIcon size={14} className="text-gray-500" />
//                         <span className="text-sm font-medium text-gray-800">
//                           {project.team.length} members
//                         </span>
//                       </div>
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-700 mb-2">
//                       Team Members
//                     </p>
//                     <div className="space-y-2">
//                       {project.team.map((member, index) => <div key={index} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
//                           <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
//                             {member.split(' ').map(n => n[0]).join('')}
//                           </div>
//                           <span className="text-sm text-gray-800">
//                             {member}
//                           </span>
//                         </div>)}
//                     </div>
//                   </div>
//                   <div>
//                     <p className="text-sm font-medium text-gray-700 mb-2">
//                       Tags
//                     </p>
//                     <div className="flex flex-wrap gap-2">
//                       {project.tags.map((tag, index) => <span key={index} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">
//                           {tag}
//                         </span>)}
//                     </div>
//                   </div>
//                 </div>)}
//           </div>

//           {/* Milestones */}
//           <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//             <div className="flex items-center justify-between mb-4">
//               <h2 className="text-lg font-semibold text-gray-800">
//                 Project Milestones
//               </h2>
//               <GitPullRequestIcon size={18} className="text-blue-500" />
//             </div>
//             <div className="relative">
//               <div className="absolute left-3 h-full w-0.5 bg-gray-200"></div>
//               {milestones.filter(m => m.projectId === selectedProject).map((milestone, index) => <div key={milestone.id} className="relative pl-8 pb-6">
//                     <div className="absolute left-0 -ml-0.5 mt-1.5">
//                       <div className={`w-6 h-6 rounded-full flex items-center justify-center ${milestone.status === 'completed' ? 'bg-green-100' : milestone.status === 'ongoing' ? 'bg-amber-100' : 'bg-blue-100'}`}>
//                         {getStatusIcon(milestone.status)}
//                       </div>
//                     </div>
//                     <div className="p-3 bg-gray-50 rounded-lg">
//                       <div className="flex justify-between items-center">
//                         <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusClass(milestone.status)}`}>
//                           {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
//                         </span>
//                         <span className="text-xs text-gray-500">
//                           Due: {milestone.dueDate}
//                         </span>
//                       </div>
//                       <h3 className="text-sm font-medium text-gray-800 mt-2">
//                         {milestone.title}
//                       </h3>
//                     </div>
//                   </div>)}
//             </div>
//             <div className="mt-4">
//               <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1">
//                 <PlusCircleIcon size={14} />
//                 <span>Add Milestone</span>
//               </button>
//             </div>
//           </div>
//         </div>}
//     </div>;
// };




import React, { useState } from 'react';
import {
  FolderIcon, ClockIcon, CheckCircleIcon, AlertCircleIcon,
  UsersIcon, GitBranchIcon, GitPullRequestIcon, PlusCircleIcon
} from 'lucide-react';

export const Projects = () => {
  const projects = [
    { id: 1, name: 'Machine Learning Model', description: 'Implement a neural network model for image classification', course: 'CS 403', status: 'completed', dueDate: 'May 15, 2023', progress: 100, team: ['John Smith', 'Alice Johnson', 'Bob Chen'], tags: ['AI', 'Python', 'TensorFlow'] },
    { id: 2, name: 'Database Design', description: 'Design and implement a relational database for an e-commerce platform', course: 'CS 402', status: 'ongoing', dueDate: 'Jun 20, 2023', progress: 65, team: ['John Smith', 'David Lee'], tags: ['SQL', 'Database', 'ERD'] },
    { id: 3, name: 'UI/UX Research', description: 'Conduct user research and design a mobile app interface', course: 'CS 405', status: 'ongoing', dueDate: 'Jun 25, 2023', progress: 40, team: ['John Smith', 'Sarah Wilson', 'Michael Brown'], tags: ['UI/UX', 'Research', 'Figma'] },
    { id: 4, name: 'Final Presentation', description: 'Prepare and deliver a presentation on cloud computing technologies', course: 'CS 410', status: 'upcoming', dueDate: 'Jul 05, 2023', progress: 10, team: ['John Smith'], tags: ['Cloud', 'Presentation', 'Research'] }
  ];

  const milestones = [
    { id: 1, projectId: 2, title: 'Database Schema Design', status: 'completed', dueDate: 'May 25, 2023' },
    { id: 2, projectId: 2, title: 'Query Optimization', status: 'ongoing', dueDate: 'Jun 10, 2023' },
    { id: 3, projectId: 2, title: 'Final Implementation', status: 'upcoming', dueDate: 'Jun 20, 2023' },
    { id: 4, projectId: 3, title: 'User Research', status: 'completed', dueDate: 'Jun 05, 2023' },
    { id: 5, projectId: 3, title: 'Wireframing', status: 'ongoing', dueDate: 'Jun 15, 2023' },
    { id: 6, projectId: 3, title: 'Usability Testing', status: 'upcoming', dueDate: 'Jun 22, 2023' }
  ];

  const getStatusIcon = status => {
    switch (status) {
      case 'completed': return <CheckCircleIcon size={16} className="text-green-500" />;
      case 'ongoing': return <ClockIcon size={16} className="text-amber-500" />;
      case 'upcoming': return <AlertCircleIcon size={16} className="text-blue-500" />;
      default: return null;
    }
  };

  const getStatusClass = status => {
    switch (status) {
      case 'completed': return 'bg-green-100 text-green-800';
      case 'ongoing': return 'bg-amber-100 text-amber-800';
      case 'upcoming': return 'bg-blue-100 text-blue-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getProgressColor = progress => {
    if (progress >= 100) return 'bg-green-500';
    if (progress >= 60) return 'bg-blue-500';
    if (progress >= 30) return 'bg-amber-500';
    return 'bg-red-500';
  };

  const [selectedProject, setSelectedProject] = useState(2);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Projects</h1>
        <button className="flex items-center space-x-1 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors duration-200">
          <PlusCircleIcon size={16} /><span>New Project</span>
        </button>
      </div>

      {/* Projects List */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map(project => (
          <div
            key={project.id}
            className={`bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-all duration-300 backdrop-blur-sm bg-opacity-80 border ${
              selectedProject === project.id
                ? 'border-blue-300 ring-2 ring-blue-100'
                : 'border-gray-100'
            } cursor-pointer`}
            onClick={() => setSelectedProject(project.id)}
          >
            <div className="flex justify-between items-start">
              <div className="flex items-center space-x-2">
                <FolderIcon size={18} className="text-blue-500" />
                <h2 className="font-semibold text-gray-800">{project.name}</h2>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full flex items-center space-x-1 ${getStatusClass(project.status)}`}>
                {getStatusIcon(project.status)}
                <span className="capitalize">{project.status}</span>
              </span>
            </div>
            <p className="text-sm text-gray-600 mt-3 line-clamp-2">{project.description}</p>
            <div className="mt-3 flex items-center justify-between text-xs text-gray-500">
              <span>{project.course}</span>
              <span>Due: {project.dueDate}</span>
            </div>
            <div className="mt-4">
              <div className="flex justify-between mb-1 text-xs">
                <span className="font-medium text-gray-600">Progress</span>
                <span className="font-medium text-blue-600">{project.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className={`${getProgressColor(project.progress)} h-1.5 rounded-full transition-all duration-500 ease-out`}
                  style={{ width: `${project.progress}%` }}
                />
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex -space-x-2">
                {project.team.slice(0, 3).map((member, i) => (
                  <div
                    key={i}
                    className="w-7 h-7 rounded-full bg-gray-200 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600"
                    title={member}
                  >
                    {member.split(' ').map(n => n[0]).join('')}
                  </div>
                ))}
                {project.team.length > 3 && (
                  <div className="w-7 h-7 rounded-full bg-gray-100 border-2 border-white flex items-center justify-center text-xs font-medium text-gray-600">
                    +{project.team.length - 3}
                  </div>
                )}
              </div>
              <div className="flex flex-wrap gap-1">
                {project.tags.slice(0, 2).map((tag, i) => (
                  <span key={i} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{tag}</span>
                ))}
                {project.tags.length > 2 && (
                  <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">+{project.tags.length - 2}</span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Details & Milestones */}
      {selectedProject && (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Project Details */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Project Details</h2>
              <div className="flex items-center space-x-2">
                <button className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-600 px-3 py-1 rounded-full transition-colors duration-200">Edit</button>
                <GitBranchIcon size={18} className="text-blue-500" />
              </div>
            </div>
            {projects.filter(p => p.id === selectedProject).map(project => (
              <div key={project.id} className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">{project.name}</h3>
                  <p className="text-sm text-gray-600 mt-1">{project.description}</p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    ['Course', project.course],
                    ['Due Date', project.dueDate],
                    ['Status', project.status],
                    ['Team Size', `${project.team.length} members`]
                  ].map(([label, val]) => (
                    <div key={label} className="bg-gray-50 p-3 rounded-lg">
                      <p className="text-xs text-gray-500">{label}</p>
                      <p className="text-sm font-medium text-gray-800">{val}</p>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Team Members</p>
                  <div className="space-y-2">
                    {project.team.map((member, i) => (
                      <div key={i} className="flex items-center space-x-2 bg-gray-50 p-2 rounded-lg">
                        <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-xs font-medium text-blue-600">
                          {member.split(' ').map(n => n[0]).join('')}
                        </div>
                        <span className="text-sm text-gray-800">{member}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-700 mb-2">Tags</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, i) => (
                      <span key={i} className="text-xs bg-blue-50 text-blue-600 px-3 py-1 rounded-full">{tag}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Milestones */}
          <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-gray-800">Project Milestones</h2>
              <GitPullRequestIcon size={18} className="text-blue-500" />
            </div>
            <div className="relative">
              <div className="absolute left-3 h-full w-0.5 bg-gray-200"></div>
              {milestones.filter(m => m.projectId === selectedProject).map(milestone => (
                <div key={milestone.id} className="relative pl-8 pb-6">
                  <div className="absolute left-0 -ml-0.5 mt-1.5">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      milestone.status === 'completed' ? 'bg-green-100' :
                      milestone.status === 'ongoing' ? 'bg-amber-100' :
                      'bg-blue-100'
                    }`}>
                      {getStatusIcon(milestone.status)}
                    </div>
                  </div>
                  <div className="p-3 bg-gray-50 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusClass(milestone.status)}`}>
                        {milestone.status.charAt(0).toUpperCase() + milestone.status.slice(1)}
                      </span>
                      <span className="text-xs text-gray-500">Due: {milestone.dueDate}</span>
                    </div>
                    <h3 className="text-sm font-medium text-gray-800 mt-2">{milestone.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-4">
              <button className="w-full bg-gray-50 hover:bg-gray-100 text-gray-600 text-sm py-2 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-1">
                <PlusCircleIcon size={14} /><span>Add Milestone</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
