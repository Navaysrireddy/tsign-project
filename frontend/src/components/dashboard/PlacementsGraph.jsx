// import React from 'react';
// import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
// import { TrendingUpIcon } from 'lucide-react';
// export const PlacementsGraph = () => {
//   const data = [{
//     name: 'Tech',
//     value: 65,
//     color: '#3b82f6'
//   }, {
//     name: 'Finance',
//     value: 20,
//     color: '#10b981'
//   }, {
//     name: 'Consulting',
//     value: 10,
//     color: '#f59e0b'
//   }, {
//     name: 'Others',
//     value: 5,
//     color: '#6366f1'
//   }];
//   const COLORS = data.map(item => item.color);
//   return <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h2 className="text-lg font-semibold text-gray-800">
//           Placement Statistics
//         </h2>
//         <TrendingUpIcon size={20} className="text-green-500" />
//       </div>
//       <div className="h-64">
//         <ResponsiveContainer width="100%" height="100%">
//           <PieChart>
//             <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value" labelLine={false} label={({
//             name,
//             percent
//           }) => `${name} ${(percent * 100).toFixed(0)}%`}>
//               {data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
//             </Pie>
//             <Tooltip formatter={value => [`${value}%`, 'Percentage']} contentStyle={{
//             borderRadius: '8px',
//             border: 'none',
//             boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
//             backgroundColor: 'rgba(255,255,255,0.95)'
//           }} />
//           </PieChart>
//         </ResponsiveContainer>
//       </div>
//       <div className="mt-4">
//         <div className="flex items-center justify-between text-sm">
//           <span className="text-gray-600">Average Salary</span>
//           <span className="font-medium text-gray-800">$85,000</span>
//         </div>
//         <div className="flex items-center justify-between text-sm mt-1">
//           <span className="text-gray-600">Placement Rate</span>
//           <span className="font-medium text-gray-800">92%</span>
//         </div>
//       </div>
//     </div>;
// };






import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { TrendingUpIcon } from 'lucide-react';

export const PlacementsGraph = () => {
  const data = [
    { name: 'Tech', value: 65, color: '#3b82f6' },
    { name: 'Finance', value: 20, color: '#10b981' },
    { name: 'Consulting', value: 10, color: '#f59e0b' },
    { name: 'Others', value: 5, color: '#6366f1' }
  ];
  const COLORS = data.map(item => item.color);

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-300 backdrop-blur-sm bg-opacity-80 border border-gray-100">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Placement Statistics
        </h2>
        <TrendingUpIcon size={20} className="text-green-500" />
      </div>

      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
              label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
              labelLine={false}
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip
              formatter={value => [`${value}%`, 'Percentage']}
              contentStyle={{
                borderRadius: '8px',
                border: 'none',
                boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                backgroundColor: 'rgba(255,255,255,0.95)'
              }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4">
        <div className="flex items-center justify-between text-sm">
          <span className="text-gray-600">Average Salary</span>
          <span className="font-medium text-gray-800">$85,000</span>
        </div>
        <div className="flex items-center justify-between text-sm mt-1">
          <span className="text-gray-600">Placement Rate</span>
          <span className="font-medium text-gray-800">92%</span>
        </div>
      </div>
    </div>
  );
};
