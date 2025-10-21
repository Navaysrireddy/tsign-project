// import React from 'react';
// import { CheckCircle, Clock, AlertCircle } from 'lucide-react';
// export const ProjectsSummary = () => {
//   const projects = [{
//     id: 1,
//     name: 'Machine Learning Model',
//     status: 'completed',
//     dueDate: 'Completed on May 15'
//   }, {
//     id: 2,
//     name: 'Database Design',
//     status: 'ongoing',
//     dueDate: 'Due in 5 days'
//   }, {
//     id: 3,
//     name: 'UI/UX Research',
//     status: 'ongoing',
//     dueDate: 'Due in 12 days'
//   }, {
//     id: 4,
//     name: 'Final Presentation',
//     status: 'upcoming',
//     dueDate: 'Starts in 3 weeks'
//   }];
//   const getStatusIcon = (status: string) => {
//     switch (status) {
//       case 'completed':
//         return <CheckCircle size={16} className="text-green-500" />;
//       case 'ongoing':
//         return <Clock size={16} className="text-amber-500" />;
//       case 'upcoming':
//         return <AlertCircle size={16} className="text-blue-500" />;
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
//   return <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">Projects</h2>
//         <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
//           4 Total
//         </span>
//       </div>
//       <div className="space-y-3">
//         {projects.map(project => <div key={project.id} className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200">
//             <div className="flex items-center space-x-3">
//               <div className={`w-2 h-2 rounded-full ${project.status === 'completed' ? 'bg-green-500' : project.status === 'ongoing' ? 'bg-amber-500' : 'bg-blue-500'}`}></div>
//               <span className="font-medium text-gray-800">{project.name}</span>
//             </div>
//             <div className="flex items-center space-x-3">
//               <span className="text-xs text-gray-500">{project.dueDate}</span>
//               <span className={`text-xs px-2 py-1 rounded-full ${getStatusClass(project.status)}`}>
//                 <div className="flex items-center space-x-1">
//                   {getStatusIcon(project.status)}
//                   <span className="capitalize">{project.status}</span>
//                 </div>
//               </span>
//             </div>
//           </div>)}
//       </div>
//     </div>;
// };



import React from 'react';
import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

export const ProjectsSummary = () => {
  const projects = [
    { id: 1, name: 'Machine Learning Model', status: 'completed', dueDate: 'Completed on May 15' },
    { id: 2, name: 'Database Design', status: 'ongoing', dueDate: 'Due in 5 days' },
    { id: 3, name: 'UI/UX Research', status: 'ongoing', dueDate: 'Due in 12 days' },
    { id: 4, name: 'Final Presentation', status: 'upcoming', dueDate: 'Starts in 3 weeks' }
  ];

  const getStatusIcon = (status) => {
    switch (status) {
      case 'completed':
        return <CheckCircle size={16} className="text-green-500" />;
      case 'ongoing':
        return <Clock size={16} className="text-amber-500" />;
      case 'upcoming':
        return <AlertCircle size={16} className="text-blue-500" />;
      default:
        return null;
    }
  };

  const getStatusClass = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'ongoing':
        return 'bg-amber-100 text-amber-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Projects</h2>
        <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
          {projects.length} Total
        </span>
      </div>
      <div className="space-y-3">
        {projects.map(project => (
          <div
            key={project.id}
            className="flex items-center justify-between p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200"
          >
            <div className="flex items-center space-x-3">
              <div className={`w-2 h-2 rounded-full ${
                project.status === 'completed' ? 'bg-green-500' :
                project.status === 'ongoing' ? 'bg-amber-500' :
                'bg-blue-500'
              }`} />
              <span className="font-medium text-gray-800">{project.name}</span>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-xs text-gray-500">{project.dueDate}</span>
              <span className={`text-xs px-2 py-1 rounded-full ${getStatusClass(project.status)}`}>
                <div className="flex items-center space-x-1">
                  {getStatusIcon(project.status)}
                  <span className="capitalize">{project.status}</span>
                </div>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
