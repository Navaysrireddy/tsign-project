// import React from 'react';
// import { CalendarIcon, FileTextIcon } from 'lucide-react';
// export const UpcomingAssessments = () => {
//   const assessments = [{
//     id: 1,
//     title: 'Algorithms Mid-term',
//     course: 'CS 401',
//     dueDate: 'Jun 15, 2023',
//     daysLeft: 5,
//     type: 'Exam'
//   }, {
//     id: 2,
//     title: 'Database Project',
//     course: 'CS 402',
//     dueDate: 'Jun 20, 2023',
//     daysLeft: 10,
//     type: 'Assignment'
//   }, {
//     id: 3,
//     title: 'ML Model Submission',
//     course: 'CS 403',
//     dueDate: 'Jun 25, 2023',
//     daysLeft: 15,
//     type: 'Project'
//   }];
//   const getTypeClass = (type: string) => {
//     switch (type) {
//       case 'Exam':
//         return 'bg-red-100 text-red-800';
//       case 'Assignment':
//         return 'bg-amber-100 text-amber-800';
//       case 'Project':
//         return 'bg-blue-100 text-blue-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };
//   const getUrgencyClass = (daysLeft: number) => {
//     if (daysLeft <= 5) return 'text-red-600';
//     if (daysLeft <= 10) return 'text-amber-600';
//     return 'text-green-600';
//   };
//   return <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Upcoming Assessments
//         </h2>
//         <CalendarIcon size={20} className="text-blue-500" />
//       </div>
//       <div className="space-y-4">
//         {assessments.map(assessment => <div key={assessment.id} className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
//             <div className="flex items-center justify-between">
//               <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeClass(assessment.type)}`}>
//                 {assessment.type}
//               </span>
//               <span className={`text-xs font-medium ${getUrgencyClass(assessment.daysLeft)}`}>
//                 {assessment.daysLeft} days left
//               </span>
//             </div>
//             <div className="mt-2">
//               <div className="flex items-center space-x-2">
//                 <FileTextIcon size={14} className="text-gray-500" />
//                 <h3 className="font-medium text-gray-800">
//                   {assessment.title}
//                 </h3>
//               </div>
//               <div className="flex items-center justify-between mt-1">
//                 <span className="text-xs text-gray-500">
//                   {assessment.course}
//                 </span>
//                 <span className="text-xs text-gray-600">
//                   Due: {assessment.dueDate}
//                 </span>
//               </div>
//             </div>
//           </div>)}
//       </div>
//     </div>;
// };




import React from 'react';
import { CalendarIcon, FileTextIcon } from 'lucide-react';

export const UpcomingAssessments = () => {
  const assessments = [
    { id: 1, title: 'Algorithms Mid-term', course: 'CS 401', dueDate: 'Jun 15, 2023', daysLeft: 5, type: 'Exam' },
    { id: 2, title: 'Database Project', course: 'CS 402', dueDate: 'Jun 20, 2023', daysLeft: 10, type: 'Assignment' },
    { id: 3, title: 'ML Model Submission', course: 'CS 403', dueDate: 'Jun 25, 2023', daysLeft: 15, type: 'Project' }
  ];

  const getTypeClass = type => {
    switch (type) {
      case 'Exam':
        return 'bg-red-100 text-red-800';
      case 'Assignment':
        return 'bg-amber-100 text-amber-800';
      case 'Project':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyClass = daysLeft => {
    if (daysLeft <= 5) return 'text-red-600';
    if (daysLeft <= 10) return 'text-amber-600';
    return 'text-green-600';
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Upcoming Assessments
        </h2>
        <CalendarIcon size={20} className="text-blue-500" />
      </div>
      <div className="space-y-4">
        {assessments.map(assessment => (
          <div
            key={assessment.id}
            className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer"
          >
            <div className="flex items-center justify-between">
              <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeClass(assessment.type)}`}>
                {assessment.type}
              </span>
              <span className={`text-xs font-medium ${getUrgencyClass(assessment.daysLeft)}`}>
                {assessment.daysLeft} days left
              </span>
            </div>
            <div className="mt-2">
              <div className="flex items-center space-x-2">
                <FileTextIcon size={14} className="text-gray-500" />
                <h3 className="font-medium text-gray-800">{assessment.title}</h3>
              </div>
              <div className="flex items-center justify-between mt-1">
                <span className="text-xs text-gray-500">{assessment.course}</span>
                <span className="text-xs text-gray-600">Due: {assessment.dueDate}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
