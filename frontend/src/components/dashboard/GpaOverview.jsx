// import React from 'react';
// import { TrendingUpIcon, Award } from 'lucide-react';
// export const GpaOverview = () => {
//   const currentGPA = 3.8;
//   const maxGPA = 4.0;
//   const percentage = currentGPA / maxGPA * 100;
//   return <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">GPA Overview</h2>
//         <TrendingUpIcon size={20} className="text-green-500" />
//       </div>
//       <div className="flex items-center space-x-4">
//         <div className="relative w-24 h-24">
//           <svg className="w-full h-full" viewBox="0 0 100 100">
//             <circle cx="50" cy="50" r="45" fill="none" stroke="#edf2f7" strokeWidth="10" />
//             <circle cx="50" cy="50" r="45" fill="none" stroke="#4299e1" strokeWidth="10" strokeDasharray="282.7" strokeDashoffset={282.7 - 282.7 * percentage / 100} strokeLinecap="round" transform="rotate(-90 50 50)" className="transition-all duration-1000 ease-out" />
//             <text x="50%" y="50%" dy=".3em" textAnchor="middle" className="text-xl font-bold text-gray-800" fill="currentColor">
//               {currentGPA}
//             </text>
//           </svg>
//         </div>
//         <div className="flex-1">
//           <div className="flex items-center space-x-2">
//             <Award size={18} className="text-yellow-500" />
//             <span className="text-sm font-medium text-gray-600">
//               Dean's List Qualification
//             </span>
//           </div>
//           <div className="mt-2">
//             <div className="flex justify-between mb-1 text-xs">
//               <span className="font-medium text-gray-600">
//                 Current Semester
//               </span>
//               <span className="font-medium text-blue-600">3.8/4.0</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out" style={{
//               width: `${percentage}%`
//             }}></div>
//             </div>
//           </div>
//           <div className="mt-3">
//             <div className="flex justify-between mb-1 text-xs">
//               <span className="font-medium text-gray-600">Overall GPA</span>
//               <span className="font-medium text-blue-600">3.7/4.0</span>
//             </div>
//             <div className="w-full bg-gray-200 rounded-full h-2">
//               <div className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full" style={{
//               width: '92.5%'
//             }}></div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>;
// };







import React from 'react';
import { TrendingUpIcon, Award } from 'lucide-react';

export const GpaOverview = () => {
  const currentGPA = 3.8;
  const maxGPA = 4.0;
  const percentage = (currentGPA / maxGPA) * 100;

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">GPA Overview</h2>
        <TrendingUpIcon size={20} className="text-green-500" />
      </div>

      <div className="flex items-center space-x-4">
        <div className="relative w-24 h-24">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#edf2f7"
              strokeWidth="10"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#4299e1"
              strokeWidth="10"
              strokeDasharray="282.7"
              strokeDashoffset={282.7 - (282.7 * percentage) / 100}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
              className="transition-all duration-1000 ease-out"
            />
            <text
              x="50%"
              y="50%"
              dy=".3em"
              textAnchor="middle"
              className="text-xl font-bold text-gray-800"
              fill="currentColor"
            >
              {currentGPA}
            </text>
          </svg>
        </div>

        <div className="flex-1">
          <div className="flex items-center space-x-2">
            <Award size={18} className="text-yellow-500" />
            <span className="text-sm font-medium text-gray-600">
              Dean's List Qualification
            </span>
          </div>

          <div className="mt-2">
            <div className="flex justify-between mb-1 text-xs">
              <span className="font-medium text-gray-600">
                Current Semester
              </span>
              <span className="font-medium text-blue-600">
                {currentGPA}/{maxGPA}
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full transition-all duration-500 ease-out"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>

          <div className="mt-3">
            <div className="flex justify-between mb-1 text-xs">
              <span className="font-medium text-gray-600">Overall GPA</span>
              <span className="font-medium text-blue-600">3.7/4.0</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-gradient-to-r from-blue-400 to-blue-500 h-2 rounded-full"
                style={{ width: '92.5%' }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
