import React from 'react';
import  StatusCards  from './StatusCards';
import  AcademicProgress  from './AcademicProgress';
import  EventUpdates  from './EventUpdates';
import  PlacementsChart  from './PlacementsChart';
import  PerformanceSection  from '../courses/PerformanceSection';
 
const Dashboard = ({ setActiveSection }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white">Dashboard</h1>
        <div className="text-sm text-gray-500 dark:text-gray-400">Last updated: January 15, 2025</div>
      </div>
      <StatusCards setActiveSection={setActiveSection} />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <AcademicProgress />
        <EventUpdates setActiveSection={setActiveSection} />
      </div>
      <PlacementsChart setActiveSection={setActiveSection} />
      <PerformanceSection />
    </div>
  );
};
 
export default Dashboard;