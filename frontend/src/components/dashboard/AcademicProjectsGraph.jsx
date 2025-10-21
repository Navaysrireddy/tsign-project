// import React from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer, Tooltip } from 'recharts';
// import { BarChartIcon } from 'lucide-react';
// export const AcademicProjectsGraph = () => {
//   const data = [{
//     name: 'Jan',
//     completed: 2,
//     ongoing: 1,
//     upcoming: 0
//   }, {
//     name: 'Feb',
//     completed: 3,
//     ongoing: 2,
//     upcoming: 1
//   }, {
//     name: 'Mar',
//     completed: 4,
//     ongoing: 1,
//     upcoming: 2
//   }, {
//     name: 'Apr',
//     completed: 3,
//     ongoing: 3,
//     upcoming: 1
//   }, {
//     name: 'May',
//     completed: 5,
//     ongoing: 2,
//     upcoming: 3
//   }, {
//     name: 'Jun',
//     completed: 2,
//     ongoing: 4,
//     upcoming: 2
//   }];
//   return <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Academic Projects
//         </h2>
//         <BarChartIcon size={20} className="text-blue-500" />
//       </div>
//       <div className="h-64">
//         <ResponsiveContainer width="100%" height="100%">
//           <BarChart data={data} margin={{
//           top: 10,
//           right: 10,
//           left: -20,
//           bottom: 0
//         }} barSize={20}>
//             <CartesianGrid strokeDasharray="3 3" vertical={false} />
//             <XAxis dataKey="name" scale="point" padding={{
//             left: 10,
//             right: 10
//           }} tick={{
//             fontSize: 12
//           }} />
//             <YAxis tick={{
//             fontSize: 12
//           }} />
//             <Tooltip contentStyle={{
//             borderRadius: '8px',
//             border: 'none',
//             boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//             backgroundColor: 'rgba(255,255,255,0.95)'
//           }} />
//             <Bar dataKey="completed" name="Completed" fill="#4ade80" radius={[4, 4, 0, 0]} />
//             <Bar dataKey="ongoing" name="Ongoing" fill="#fbbf24" radius={[4, 4, 0, 0]} />
//             <Bar dataKey="upcoming" name="Upcoming" fill="#60a5fa" radius={[4, 4, 0, 0]} />
//           </BarChart>
//         </ResponsiveContainer>
//       </div>
//       <div className="flex items-center justify-center space-x-6 mt-2">
//         <div className="flex items-center space-x-1">
//           <div className="w-3 h-3 bg-green-400 rounded-sm"></div>
//           <span className="text-xs text-gray-600">Completed</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <div className="w-3 h-3 bg-amber-400 rounded-sm"></div>
//           <span className="text-xs text-gray-600">Ongoing</span>
//         </div>
//         <div className="flex items-center space-x-1">
//           <div className="w-3 h-3 bg-blue-400 rounded-sm"></div>
//           <span className="text-xs text-gray-600">Upcoming</span>
//         </div>
//       </div>
//     </div>;
// };



import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip
} from 'recharts';
import { BarChartIcon } from 'lucide-react';

export const AcademicProjectsGraph = () => {
  const data = [
    { name: 'Jan', completed: 2, ongoing: 1, upcoming: 0 },
    { name: 'Feb', completed: 3, ongoing: 2, upcoming: 1 },
    { name: 'Mar', completed: 4, ongoing: 1, upcoming: 2 },
    { name: 'Apr', completed: 3, ongoing: 3, upcoming: 1 },
    { name: 'May', completed: 5, ongoing: 2, upcoming: 3 },
    { name: 'Jun', completed: 2, ongoing: 4, upcoming: 2 }
  ];

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">Academic Projects</h2>
        <BarChartIcon size={20} className="text-blue-500" />
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={data}
            margin={{ top: 10, right: 10, left: -20, bottom: 0 }}
            barSize={20}
          >
            <CartesianGrid strokeDasharray="3 3" vertical={false} />
            <XAxis
              dataKey="name"
              scale="point"
              padding={{ left: 10, right: 10 }}
              tick={{ fontSize: 12 }}
            />
            <YAxis tick={{ fontSize: 12 }} />
            <Tooltip
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                backgroundColor: 'rgba(255,255,255,0.95)'
              }}
            />
            <Bar dataKey="completed" name="Completed" fill="#4ade80" radius={[4, 4, 0, 0]} />
            <Bar dataKey="ongoing" name="Ongoing" fill="#fbbf24" radius={[4, 4, 0, 0]} />
            <Bar dataKey="upcoming" name="Upcoming" fill="#60a5fa" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center space-x-6 mt-2">
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-green-400 rounded-sm" />
          <span className="text-xs text-gray-600">Completed</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-amber-400 rounded-sm" />
          <span className="text-xs text-gray-600">Ongoing</span>
        </div>
        <div className="flex items-center space-x-1">
          <div className="w-3 h-3 bg-blue-400 rounded-sm" />
          <span className="text-xs text-gray-600">Upcoming</span>
        </div>
      </div>
    </div>
  );
};
