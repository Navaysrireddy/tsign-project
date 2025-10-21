// import React from 'react';
// import { CalendarIcon, ClipboardCheckIcon, AlertCircleIcon, ClockIcon, BarChart2Icon, PieChartIcon, FilterIcon } from 'lucide-react';
// export const Assessments = () => {
//   const upcomingAssessments = [{
//     id: 1,
//     title: 'Algorithms Mid-term',
//     course: 'CS 401',
//     dueDate: 'Jun 15, 2023',
//     daysLeft: 5,
//     type: 'Exam',
//     weight: '30%'
//   }, {
//     id: 2,
//     title: 'Database Project',
//     course: 'CS 402',
//     dueDate: 'Jun 20, 2023',
//     daysLeft: 10,
//     type: 'Assignment',
//     weight: '25%'
//   }, {
//     id: 3,
//     title: 'ML Model Submission',
//     course: 'CS 403',
//     dueDate: 'Jun 25, 2023',
//     daysLeft: 15,
//     type: 'Project',
//     weight: '40%'
//   }, {
//     id: 4,
//     title: 'Linear Algebra Quiz',
//     course: 'MATH 301',
//     dueDate: 'Jun 18, 2023',
//     daysLeft: 8,
//     type: 'Quiz',
//     weight: '15%'
//   }];
//   const completedAssessments = [{
//     id: 1,
//     title: 'Algorithms Assignment 1',
//     course: 'CS 401',
//     submittedDate: 'May 20, 2023',
//     grade: '92/100',
//     status: 'Graded',
//     type: 'Assignment'
//   }, {
//     id: 2,
//     title: 'Database Quiz 1',
//     course: 'CS 402',
//     submittedDate: 'May 15, 2023',
//     grade: '85/100',
//     status: 'Graded',
//     type: 'Quiz'
//   }, {
//     id: 3,
//     title: 'ML Preliminary Report',
//     course: 'CS 403',
//     submittedDate: 'May 25, 2023',
//     grade: 'Pending',
//     status: 'Submitted',
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
//       case 'Quiz':
//         return 'bg-purple-100 text-purple-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };
//   const getStatusClass = (status: string) => {
//     switch (status) {
//       case 'Graded':
//         return 'bg-green-100 text-green-800';
//       case 'Submitted':
//         return 'bg-blue-100 text-blue-800';
//       case 'Late':
//         return 'bg-red-100 text-red-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };
//   const getUrgencyClass = (daysLeft: number) => {
//     if (daysLeft <= 5) return 'text-red-600';
//     if (daysLeft <= 10) return 'text-amber-600';
//     return 'text-green-600';
//   };
//   const courseGrades = [{
//     course: 'CS 401',
//     currentGrade: 'A-',
//     assessmentsCompleted: 3,
//     totalAssessments: 5
//   }, {
//     course: 'CS 402',
//     currentGrade: 'B+',
//     assessmentsCompleted: 2,
//     totalAssessments: 4
//   }, {
//     course: 'CS 403',
//     currentGrade: 'A',
//     assessmentsCompleted: 1,
//     totalAssessments: 3
//   }, {
//     course: 'MATH 301',
//     currentGrade: 'B',
//     assessmentsCompleted: 2,
//     totalAssessments: 4
//   }];
//   return <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-gray-800">Assessments</h1>
//         <div className="flex items-center space-x-2">
//           <button className="flex items-center space-x-1 bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
//             <FilterIcon size={14} />
//             <span>Filter</span>
//           </button>
//           <div className="text-sm text-gray-500">Total: 7 assessments</div>
//         </div>
//       </div>
//       {/* Upcoming Assessments */}
//       <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Upcoming Assessments
//           </h2>
//           <CalendarIcon size={20} className="text-blue-500" />
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Assessment
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Course
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Type
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Due Date
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Weight
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {upcomingAssessments.map(assessment => <tr key={assessment.id} className="hover:bg-gray-50 transition-colors duration-150">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {assessment.title}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">
//                       {assessment.course}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeClass(assessment.type)}`}>
//                       {assessment.type}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">
//                       {assessment.dueDate}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">
//                       {assessment.weight}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`text-xs font-medium ${getUrgencyClass(assessment.daysLeft)}`}>
//                       {assessment.daysLeft} days left
//                     </span>
//                   </td>
//                 </tr>)}
//             </tbody>
//           </table>
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Assessment Calendar */}
//         <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Assessment Timeline
//             </h2>
//             <ClockIcon size={20} className="text-blue-500" />
//           </div>
//           <div className="space-y-6">
//             <div className="relative">
//               <div className="absolute left-4 h-full w-0.5 bg-gray-200"></div>
//               {upcomingAssessments.map((assessment, index) => <div key={assessment.id} className="relative pl-10 pb-8">
//                   <div className="absolute left-0 -ml-0.5 mt-1.5">
//                     <div className={`w-8 h-8 rounded-full flex items-center justify-center ${assessment.daysLeft <= 5 ? 'bg-red-100' : assessment.daysLeft <= 10 ? 'bg-amber-100' : 'bg-green-100'}`}>
//                       <span className={`text-xs font-semibold ${assessment.daysLeft <= 5 ? 'text-red-600' : assessment.daysLeft <= 10 ? 'text-amber-600' : 'text-green-600'}`}>
//                         {assessment.daysLeft}d
//                       </span>
//                     </div>
//                   </div>
//                   <div className="p-3 bg-gray-50 rounded-lg">
//                     <div className="flex justify-between items-center">
//                       <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeClass(assessment.type)}`}>
//                         {assessment.type}
//                       </span>
//                       <span className="text-xs text-gray-500">
//                         {assessment.dueDate}
//                       </span>
//                     </div>
//                     <h3 className="text-sm font-medium text-gray-800 mt-2">
//                       {assessment.title}
//                     </h3>
//                     <p className="text-xs text-gray-500 mt-1">
//                       {assessment.course} • Weight: {assessment.weight}
//                     </p>
//                   </div>
//                 </div>)}
//             </div>
//           </div>
//         </div>
//         {/* Grade Distribution */}
//         <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Course Grade Summary
//             </h2>
//             <BarChart2Icon size={20} className="text-blue-500" />
//           </div>
//           <div className="space-y-6">
//             {courseGrades.map(course => <div key={course.course} className="space-y-2">
//                 <div className="flex items-center justify-between">
//                   <span className="text-sm font-medium text-gray-800">
//                     {course.course}
//                   </span>
//                   <span className="text-sm font-semibold text-blue-600">
//                     {course.currentGrade}
//                   </span>
//                 </div>
//                 <div className="flex items-center space-x-2">
//                   <div className="flex-1">
//                     <div className="w-full bg-gray-200 rounded-full h-2">
//                       <div className="bg-blue-500 h-2 rounded-full" style={{
//                     width: `${course.assessmentsCompleted / course.totalAssessments * 100}%`
//                   }}></div>
//                     </div>
//                   </div>
//                   <span className="text-xs text-gray-500">
//                     {course.assessmentsCompleted}/{course.totalAssessments}{' '}
//                     completed
//                   </span>
//                 </div>
//               </div>)}
//             <div className="pt-4 border-t border-gray-200">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">
//                     Current GPA
//                   </p>
//                   <p className="text-lg font-semibold text-gray-800">3.7/4.0</p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">
//                     Projected GPA
//                   </p>
//                   <p className="text-lg font-semibold text-blue-600">3.8/4.0</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       {/* Completed Assessments */}
//       <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Completed Assessments
//           </h2>
//           <ClipboardCheckIcon size={20} className="text-green-500" />
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Assessment
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Course
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Type
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Submitted
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Grade
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Status
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {completedAssessments.map(assessment => <tr key={assessment.id} className="hover:bg-gray-50 transition-colors duration-150">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {assessment.title}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">
//                       {assessment.course}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeClass(assessment.type)}`}>
//                       {assessment.type}
//                     </span>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-500">
//                       {assessment.submittedDate}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {assessment.grade}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(assessment.status)}`}>
//                       {assessment.status}
//                     </span>
//                   </td>
//                 </tr>)}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>;
// };


import React from 'react';
import {
  CalendarIcon,
  ClipboardCheckIcon,
  ClockIcon,
  BarChart2Icon,
  FilterIcon
} from 'lucide-react';

export const Assessments = () => {
  const upcomingAssessments = [
    { id: 1, title: 'Algorithms Mid-term', course: 'CS 401', dueDate: 'Jun 15, 2023', daysLeft: 5, type: 'Exam', weight: '30%' },
    { id: 2, title: 'Database Project', course: 'CS 402', dueDate: 'Jun 20, 2023', daysLeft: 10, type: 'Assignment', weight: '25%' },
    { id: 3, title: 'ML Model Submission', course: 'CS 403', dueDate: 'Jun 25, 2023', daysLeft: 15, type: 'Project', weight: '40%' },
    { id: 4, title: 'Linear Algebra Quiz', course: 'MATH 301', dueDate: 'Jun 18, 2023', daysLeft: 8, type: 'Quiz', weight: '15%' }
  ];

  const completedAssessments = [
    { id: 1, title: 'Algorithms Assignment 1', course: 'CS 401', submittedDate: 'May 20, 2023', grade: '92/100', status: 'Graded', type: 'Assignment' },
    { id: 2, title: 'Database Quiz 1', course: 'CS 402', submittedDate: 'May 15, 2023', grade: '85/100', status: 'Graded', type: 'Quiz' },
    { id: 3, title: 'ML Preliminary Report', course: 'CS 403', submittedDate: 'May 25, 2023', grade: 'Pending', status: 'Submitted', type: 'Project' }
  ];

  const courseGrades = [
    { course: 'CS 401', currentGrade: 'A-', assessmentsCompleted: 3, totalAssessments: 5 },
    { course: 'CS 402', currentGrade: 'B+', assessmentsCompleted: 2, totalAssessments: 4 },
    { course: 'CS 403', currentGrade: 'A', assessmentsCompleted: 1, totalAssessments: 3 },
    { course: 'MATH 301', currentGrade: 'B', assessmentsCompleted: 2, totalAssessments: 4 }
  ];

  const getTypeClass = type => {
    switch (type) {
      case 'Exam': return 'bg-red-100 text-red-800';
      case 'Assignment': return 'bg-amber-100 text-amber-800';
      case 'Project': return 'bg-blue-100 text-blue-800';
      case 'Quiz': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusClass = status => {
    switch (status) {
      case 'Graded': return 'bg-green-100 text-green-800';
      case 'Submitted': return 'bg-blue-100 text-blue-800';
      case 'Late': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getUrgencyClass = daysLeft => {
    if (daysLeft <= 5) return 'text-red-600';
    if (daysLeft <= 10) return 'text-amber-600';
    return 'text-green-600';
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Assessments</h1>
        <div className="flex items-center space-x-2">
          <button className="flex items-center space-x-1 bg-white px-3 py-1.5 rounded-lg border border-gray-200 text-sm text-gray-600 hover:bg-gray-50">
            <FilterIcon size={14} />
            <span>Filter</span>
          </button>
          <div className="text-sm text-gray-500">
            Total: {upcomingAssessments.length + completedAssessments.length} assessments
          </div>
        </div>
      </div>

      {/* Upcoming Assessments */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Upcoming Assessments</h2>
          <CalendarIcon size={20} className="text-blue-500" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Assessment', 'Course', 'Type', 'Due Date', 'Weight', 'Status'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {upcomingAssessments.map(a => (
                <tr key={a.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{a.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{a.course}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeClass(a.type)}`}>
                      {a.type}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{a.dueDate}</td>
                  <td className="px-6 py-4 text-sm text-gray-900">{a.weight}</td>
                  <td className="px-6 py-4">
                    <span className={`text-xs font-medium ${getUrgencyClass(a.daysLeft)}`}>{a.daysLeft} days left</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Timeline & Grades */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Assessment Timeline */}
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Assessment Timeline</h2>
            <ClockIcon size={20} className="text-blue-500" />
          </div>
          <div className="space-y-6 relative">
            <div className="absolute left-4 h-full w-0.5 bg-gray-200"></div>
            {upcomingAssessments.map(a => (
              <div key={a.id} className="relative pl-10 pb-8">
                <div className={`absolute left-0 -ml-0.5 mt-1.5 w-8 h-8 rounded-full flex items-center justify-center ${getUrgencyClass(a.daysLeft).replace('text-','bg-')}`}>
                  <span className={`text-xs font-semibold ${getUrgencyClass(a.daysLeft)}`}>
                    {a.daysLeft}d
                  </span>
                </div>
                <div className="p-3 bg-gray-50 rounded-lg">
                  <div className="flex justify-between items-center">
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getTypeClass(a.type)}`}>{a.type}</span>
                    <span className="text-xs text-gray-500">{a.dueDate}</span>
                  </div>
                  <h3 className="text-sm font-medium text-gray-800 mt-2">{a.title}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {a.course} • Weight: {a.weight}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Course Grade Summary */}
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Course Grade Summary</h2>
            <BarChart2Icon size={20} className="text-blue-500" />
          </div>
          <div className="space-y-6">
            {courseGrades.map(cg => {
              const pct = (cg.assessmentsCompleted / cg.totalAssessments) * 100;
              return (
                <div key={cg.course} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium text-gray-800">{cg.course}</span>
                    <span className="text-sm font-semibold text-blue-600">{cg.currentGrade}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="flex-1">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-500 h-2 rounded-full" style={{ width: `${pct}%` }} />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500">
                      {cg.assessmentsCompleted}/{cg.totalAssessments} completed
                    </span>
                  </div>
                </div>
              );
            })}
            <div className="pt-4 border-t border-gray-200 flex justify-between">
              <div>
                <p className="text-sm font-medium text-gray-600">Current GPA</p>
                <p className="text-lg font-semibold text-gray-800">3.7/4.0</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-600">Projected GPA</p>
                <p className="text-lg font-semibold text-blue-600">3.8/4.0</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Completed Assessments */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Completed Assessments</h2>
          <ClipboardCheckIcon size={20} className="text-green-500" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {['Assessment', 'Course', 'Type', 'Submitted', 'Grade', 'Status'].map(h => (
                  <th key={h} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {completedAssessments.map(a => (
                <tr key={a.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{a.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{a.course}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getTypeClass(a.type)}`}>{a.type}</span>
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-500">{a.submittedDate}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{a.grade}</td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(a.status)}`}>{a.status}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
