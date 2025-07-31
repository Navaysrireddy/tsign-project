// import React from 'react';
// import { BookOpenIcon, ChevronRightIcon } from 'lucide-react';
// export const CurrentCourses = () => {
//   const courses = [{
//     id: 1,
//     code: 'CS 401',
//     name: 'Advanced Algorithms',
//     credits: 4,
//     progress: 75
//   }, {
//     id: 2,
//     code: 'CS 402',
//     name: 'Database Systems',
//     credits: 3,
//     progress: 60
//   }, {
//     id: 3,
//     code: 'CS 403',
//     name: 'Machine Learning',
//     credits: 4,
//     progress: 45
//   }, {
//     id: 4,
//     code: 'MATH 301',
//     name: 'Linear Algebra',
//     credits: 3,
//     progress: 80
//   }];
//   return <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">Current Courses</h2>
//         <BookOpenIcon size={20} className="text-blue-500" />
//       </div>
//       <div className="space-y-4">
//         {courses.map(course => <div key={course.id} className="group">
//             <div className="flex items-center justify-between">
//               <div>
//                 <div className="flex items-center space-x-2">
//                   <span className="text-sm font-medium text-gray-500">
//                     {course.code}
//                   </span>
//                   <span className="text-sm font-medium text-gray-800">
//                     {course.name}
//                   </span>
//                 </div>
//                 <div className="text-xs text-gray-500 mt-1">
//                   {course.credits} Credits
//                 </div>
//               </div>
//               <ChevronRightIcon size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
//             </div>
//             <div className="mt-2">
//               <div className="flex justify-between mb-1 text-xs">
//                 <span className="font-medium text-gray-600">Progress</span>
//                 <span className="font-medium text-blue-600">
//                   {course.progress}%
//                 </span>
//               </div>
//               <div className="w-full bg-gray-200 rounded-full h-1.5">
//                 <div className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full transition-all duration-500 ease-out" style={{
//               width: `${course.progress}%`
//             }}></div>
//               </div>
//             </div>
//           </div>)}
//       </div>
//     </div>;
// };





import React from 'react';
import { BookOpenIcon, ChevronRightIcon } from 'lucide-react';

export const CurrentCourses = () => {
  const courses = [
    { id: 1, code: 'CS 401', name: 'Advanced Algorithms', credits: 4, progress: 75 },
    { id: 2, code: 'CS 402', name: 'Database Systems', credits: 3, progress: 60 },
    { id: 3, code: 'CS 403', name: 'Machine Learning', credits: 4, progress: 45 },
    { id: 4, code: 'MATH 301', name: 'Linear Algebra', credits: 3, progress: 80 }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Current Courses</h2>
        <BookOpenIcon size={20} className="text-blue-500" />
      </div>

      <div className="space-y-4">
        {courses.map(course => (
          <div key={course.id} className="group">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center space-x-2">
                  <span className="text-sm font-medium text-gray-500">{course.code}</span>
                  <span className="text-sm font-medium text-gray-800">{course.name}</span>
                </div>
                <div className="text-xs text-gray-500 mt-1">{course.credits} Credits</div>
              </div>
              <ChevronRightIcon size={16} className="text-gray-400 group-hover:text-blue-500 transition-colors duration-200" />
            </div>

            <div className="mt-2">
              <div className="flex justify-between mb-1 text-xs">
                <span className="font-medium text-gray-600">Progress</span>
                <span className="font-medium text-blue-600">{course.progress}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-1.5">
                <div
                  className="bg-gradient-to-r from-blue-400 to-blue-600 h-1.5 rounded-full transition-all duration-500 ease-out"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
