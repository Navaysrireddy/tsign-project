// import React from 'react';
// import { GpaOverview } from './dashboard/GpaOverview';
// import { ProjectsSummary } from './dashboard/ProjectsSummary';
// import { AcademicProjectsGraph } from './dashboard/AcademicProjectsGraph';
// import { PlacementsGraph } from './dashboard/PlacementsGraph';
// import { CurrentCourses } from './dashboard/CurrentCourses';
// import { TrendingNews } from './dashboard/TrendingNews';
// import { UpcomingAssessments } from './dashboard/UpcomingAssessments';
// export const Dashboard = () => {
//   return <div className="space-y-6">
//       <div className="flex items-center justify-between">
//         <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
//         <div className="text-sm text-gray-500">
//           Last updated: Today, 10:30 AM
//         </div>
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <GpaOverview />
//         <ProjectsSummary />
//       </div>
//       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//         <AcademicProjectsGraph />
//         <PlacementsGraph />
//       </div>
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//         <CurrentCourses />
//         <TrendingNews />
//         <UpcomingAssessments />
//       </div>
//     </div>;
// };


import React from 'react';
import { GpaOverview } from './dashboard/GpaOverview';
import { ProjectsSummary } from './dashboard/ProjectsSummary';
import { AcademicProjectsGraph } from './dashboard/AcademicProjectsGraph';
import { PlacementsGraph } from './dashboard/PlacementsGraph';
import { CurrentCourses } from './dashboard/CurrentCourses';
import { TrendingNews } from './dashboard/TrendingNews';
import { UpcomingAssessments } from './dashboard/UpcomingAssessments';

export const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
        <div className="text-sm text-gray-500">
          Last updated: Today, 10:30 AM
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <GpaOverview />
        <ProjectsSummary />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <AcademicProjectsGraph />
        <PlacementsGraph />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <CurrentCourses />
        <TrendingNews />
        <UpcomingAssessments />
      </div>
    </div>
  );
};
