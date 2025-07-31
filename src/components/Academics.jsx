// import React from 'react';
// import { BookOpenIcon, GraduationCapIcon, CalendarIcon, ChartBarIcon, FileTextIcon, ChevronRightIcon } from 'lucide-react';
// export const Academics = () => {
//   const courses = [{
//     id: 1,
//     code: 'CS 401',
//     name: 'Advanced Algorithms',
//     instructor: 'Dr. Alan Turing',
//     credits: 4,
//     grade: 'A',
//     status: 'In Progress'
//   }, {
//     id: 2,
//     code: 'CS 402',
//     name: 'Database Systems',
//     instructor: 'Dr. Ada Lovelace',
//     credits: 3,
//     grade: 'B+',
//     status: 'In Progress'
//   }, {
//     id: 3,
//     code: 'CS 403',
//     name: 'Machine Learning',
//     instructor: 'Dr. Geoffrey Hinton',
//     credits: 4,
//     grade: 'A-',
//     status: 'In Progress'
//   }, {
//     id: 4,
//     code: 'MATH 301',
//     name: 'Linear Algebra',
//     instructor: 'Dr. Katherine Johnson',
//     credits: 3,
//     grade: 'A',
//     status: 'In Progress'
//   }];
//   const pastCourses = [{
//     id: 5,
//     code: 'CS 301',
//     name: 'Data Structures',
//     semester: 'Fall 2022',
//     grade: 'A',
//     credits: 4
//   }, {
//     id: 6,
//     code: 'CS 302',
//     name: 'Computer Networks',
//     semester: 'Fall 2022',
//     grade: 'B+',
//     credits: 3
//   }, {
//     id: 7,
//     code: 'MATH 201',
//     name: 'Calculus II',
//     semester: 'Spring 2022',
//     grade: 'A-',
//     credits: 4
//   }];
//   const academicEvents = [{
//     id: 1,
//     title: 'Registration for Fall 2023',
//     date: 'July 15, 2023',
//     type: 'Registration',
//     daysLeft: 20
//   }, {
//     id: 2,
//     title: 'Final Exams Week',
//     date: 'June 20-25, 2023',
//     type: 'Exam',
//     daysLeft: 5
//   }, {
//     id: 3,
//     title: 'Summer Break',
//     date: 'June 26 - Aug 15, 2023',
//     type: 'Holiday',
//     daysLeft: 10
//   }];
//   const getStatusClass = (status: string) => {
//     switch (status) {
//       case 'In Progress':
//         return 'bg-blue-100 text-blue-800';
//       case 'Completed':
//         return 'bg-green-100 text-green-800';
//       case 'Upcoming':
//         return 'bg-amber-100 text-amber-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };
//   const getEventTypeClass = (type: string) => {
//     switch (type) {
//       case 'Registration':
//         return 'bg-purple-100 text-purple-800';
//       case 'Exam':
//         return 'bg-red-100 text-red-800';
//       case 'Holiday':
//         return 'bg-green-100 text-green-800';
//       default:
//         return 'bg-gray-100 text-gray-800';
//     }
//   };
//   const getUrgencyClass = (daysLeft: number) => {
//     if (daysLeft <= 5) return 'text-red-600';
//     if (daysLeft <= 10) return 'text-amber-600';
//     return 'text-green-600';
//   };
//   return <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-gray-800">Academics</h1>
//         <div className="text-sm text-gray-500">
//           Current Semester: Spring 2023
//         </div>
//       </div>

//       {/* Current Courses */}
//       <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Current Courses
//           </h2>
//           <BookOpenIcon size={20} className="text-blue-500" />
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Course
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Instructor
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Credits
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
//               {courses.map(course => <tr key={course.id} className="hover:bg-gray-50 transition-colors duration-150">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">
//                           {course.name}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           {course.code}
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">
//                       {course.instructor}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">
//                       {course.credits}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">{course.grade}</div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(course.status)}`}>
//                       {course.status}
//                     </span>
//                   </td>
//                 </tr>)}
//             </tbody>
//           </table>
//         </div>
//       </div>

//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         {/* Academic Calendar */}
//         <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Academic Calendar
//             </h2>
//             <CalendarIcon size={20} className="text-blue-500" />
//           </div>
//           <div className="space-y-4">
//             {academicEvents.map(event => <div key={event.id} className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
//                 <div className="flex items-center justify-between">
//                   <span className={`text-xs px-2 py-0.5 rounded-full ${getEventTypeClass(event.type)}`}>
//                     {event.type}
//                   </span>
//                   <span className={`text-xs font-medium ${getUrgencyClass(event.daysLeft)}`}>
//                     {event.daysLeft} days left
//                   </span>
//                 </div>
//                 <div className="mt-2">
//                   <div className="flex items-center space-x-2">
//                     <h3 className="font-medium text-gray-800">{event.title}</h3>
//                   </div>
//                   <div className="flex items-center mt-1">
//                     <span className="text-xs text-gray-600">{event.date}</span>
//                   </div>
//                 </div>
//               </div>)}
//           </div>
//         </div>

//         {/* Academic Stats */}
//         <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//           <div className="flex items-center justify-between mb-4">
//             <h2 className="text-lg font-semibold text-gray-800">
//               Academic Statistics
//             </h2>
//             <ChartBarIcon size={20} className="text-blue-500" />
//           </div>
//           <div className="space-y-6">
//             <div>
//               <div className="flex justify-between mb-1 text-sm">
//                 <span className="font-medium text-gray-600">
//                   Credits Completed
//                 </span>
//                 <span className="font-medium text-blue-600">54/120</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" style={{
//                 width: '45%'
//               }}></div>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-between mb-1 text-sm">
//                 <span className="font-medium text-gray-600">
//                   Major Requirements
//                 </span>
//                 <span className="font-medium text-blue-600">32/60</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" style={{
//                 width: '53.3%'
//               }}></div>
//               </div>
//             </div>
//             <div>
//               <div className="flex justify-between mb-1 text-sm">
//                 <span className="font-medium text-gray-600">
//                   General Education
//                 </span>
//                 <span className="font-medium text-blue-600">22/40</span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-2.5">
//                 <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" style={{
//                 width: '55%'
//               }}></div>
//               </div>
//             </div>
//             <div className="pt-4 border-t border-gray-200">
//               <div className="flex items-center justify-between">
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">
//                     Expected Graduation
//                   </p>
//                   <p className="text-lg font-semibold text-gray-800">
//                     May 2025
//                   </p>
//                 </div>
//                 <div>
//                   <p className="text-sm font-medium text-gray-600">
//                     Degree Progress
//                   </p>
//                   <p className="text-lg font-semibold text-blue-600">45%</p>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Past Courses & Transcript */}
//       <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//         <div className="flex items-center justify-between mb-4">
//           <h2 className="text-lg font-semibold text-gray-800">
//             Academic History
//           </h2>
//           <div className="flex items-center space-x-2">
//             <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
//               <FileTextIcon size={16} className="mr-1" /> View Full Transcript
//             </button>
//             <GraduationCapIcon size={20} className="text-blue-500" />
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Course
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Semester
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Credits
//                 </th>
//                 <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
//                   Grade
//                 </th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {pastCourses.map(course => <tr key={course.id} className="hover:bg-gray-50 transition-colors duration-150">
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className="ml-4">
//                         <div className="text-sm font-medium text-gray-900">
//                           {course.name}
//                         </div>
//                         <div className="text-sm text-gray-500">
//                           {course.code}
//                         </div>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">
//                       {course.semester}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm text-gray-900">
//                       {course.credits}
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="text-sm font-medium text-gray-900">
//                       {course.grade}
//                     </div>
//                   </td>
//                 </tr>)}
//             </tbody>
//           </table>
//         </div>
//         <div className="mt-4 flex justify-center">
//           <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center">
//             <span>Show more courses</span>
//             <ChevronRightIcon size={16} className="ml-1" />
//           </button>
//         </div>
//       </div>
//     </div>;
// };




import React from 'react';
import {
  BookOpenIcon,
  GraduationCapIcon,
  CalendarIcon,
  ChartBarIcon,
  FileTextIcon,
  ChevronRightIcon
} from 'lucide-react';

export const Academics = () => {
  const courses = [
    {
      id: 1,
      code: 'CS 401',
      name: 'Advanced Algorithms',
      instructor: 'Dr. Alan Turing',
      credits: 4,
      grade: 'A',
      status: 'In Progress'
    },
    {
      id: 2,
      code: 'CS 402',
      name: 'Database Systems',
      instructor: 'Dr. Ada Lovelace',
      credits: 3,
      grade: 'B+',
      status: 'In Progress'
    },
    {
      id: 3,
      code: 'CS 403',
      name: 'Machine Learning',
      instructor: 'Dr. Geoffrey Hinton',
      credits: 4,
      grade: 'A-',
      status: 'In Progress'
    },
    {
      id: 4,
      code: 'MATH 301',
      name: 'Linear Algebra',
      instructor: 'Dr. Katherine Johnson',
      credits: 3,
      grade: 'A',
      status: 'In Progress'
    }
  ];

  const pastCourses = [
    {
      id: 5,
      code: 'CS 301',
      name: 'Data Structures',
      semester: 'Fall 2022',
      grade: 'A',
      credits: 4
    },
    {
      id: 6,
      code: 'CS 302',
      name: 'Computer Networks',
      semester: 'Fall 2022',
      grade: 'B+',
      credits: 3
    },
    {
      id: 7,
      code: 'MATH 201',
      name: 'Calculus II',
      semester: 'Spring 2022',
      grade: 'A-',
      credits: 4
    }
  ];

  const academicEvents = [
    {
      id: 1,
      title: 'Registration for Fall 2023',
      date: 'July 15, 2023',
      type: 'Registration',
      daysLeft: 20
    },
    {
      id: 2,
      title: 'Final Exams Week',
      date: 'June 20-25, 2023',
      type: 'Exam',
      daysLeft: 5
    },
    {
      id: 3,
      title: 'Summer Break',
      date: 'June 26 - Aug 15, 2023',
      type: 'Holiday',
      daysLeft: 10
    }
  ];

  const getStatusClass = status => {
    switch (status) {
      case 'In Progress':
        return 'bg-blue-100 text-blue-800';
      case 'Completed':
        return 'bg-green-100 text-green-800';
      case 'Upcoming':
        return 'bg-amber-100 text-amber-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getEventTypeClass = type => {
    switch (type) {
      case 'Registration':
        return 'bg-purple-100 text-purple-800';
      case 'Exam':
        return 'bg-red-100 text-red-800';
      case 'Holiday':
        return 'bg-green-100 text-green-800';
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
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Academics</h1>
        <div className="text-sm text-gray-500">
          Current Semester: Spring 2023
        </div>
      </div>

      {/* Current Courses */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Current Courses</h2>
          <BookOpenIcon size={20} className="text-blue-500" />
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Instructor
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Credits
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Grade
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {courses.map(course => (
                <tr key={course.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{course.name}</div>
                        <div className="text-sm text-gray-500">{course.code}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.instructor}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.credits}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.grade}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusClass(course.status)}`}>
                      {course.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Academic Calendar */}
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Academic Calendar</h2>
            <CalendarIcon size={20} className="text-blue-500" />
          </div>
          <div className="space-y-4">
            {academicEvents.map(event => (
              <div key={event.id} className="p-3 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-200 cursor-pointer">
                <div className="flex items-center justify-between">
                  <span className={`text-xs px-2 py-0.5 rounded-full ${getEventTypeClass(event.type)}`}>
                    {event.type}
                  </span>
                  <span className={`text-xs font-medium ${getUrgencyClass(event.daysLeft)}`}>
                    {event.daysLeft} days left
                  </span>
                </div>
                <div className="mt-2">
                  <h3 className="font-medium text-gray-800">{event.title}</h3>
                  <span className="text-xs text-gray-600">{event.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Academic Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-800">Academic Statistics</h2>
            <ChartBarIcon size={20} className="text-blue-500" />
          </div>
          <div className="space-y-6">
            {/* Stats bars */}
            {[
              { label: 'Credits Completed', value: '54/120', pct: '45%' },
              { label: 'Major Requirements', value: '32/60', pct: '53.3%' },
              { label: 'General Education', value: '22/40', pct: '55%' }
            ].map((s, idx) => (
              <div key={idx}>
                <div className="flex justify-between mb-1 text-sm">
                  <span className="font-medium text-gray-600">{s.label}</span>
                  <span className="font-medium text-blue-600">{s.value}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-2.5 rounded-full" style={{ width: s.pct }} />
                </div>
              </div>
            ))}
            {/* Graduation & progress */}
            <div className="pt-4 border-t border-gray-200">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Expected Graduation</p>
                  <p className="text-lg font-semibold text-gray-800">May 2025</p>
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-600">Degree Progress</p>
                  <p className="text-lg font-semibold text-blue-600">45%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Past Courses & Transcript */}
      <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Academic History</h2>
          <div className="flex items-center space-x-2">
            <button className="text-sm text-blue-600 hover:text-blue-800 flex items-center">
              <FileTextIcon size={16} className="mr-1" /> View Full Transcript
            </button>
            <GraduationCapIcon size={20} className="text-blue-500" />
          </div>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Course</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Semester</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Credits</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Grade</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {pastCourses.map(course => (
                <tr key={course.id} className="hover:bg-gray-50 transition-colors duration-150">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="ml-4">
                        <div className="text-sm font-medium text-gray-900">{course.name}</div>
                        <div className="text-sm text-gray-500">{course.code}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.semester}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">{course.credits}</div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-gray-900">{course.grade}</div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-center">
          <button className="text-sm text-gray-600 hover:text-blue-600 flex items-center">
            <span>Show more courses</span>
            <ChevronRightIcon size={16} className="ml-1" />
          </button>
        </div>
      </div>
    </div>
  );
};
