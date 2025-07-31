// import React, { useState } from "react";
// import "./StudentDashboard.css";
// import Sidebar from './student-components/sidebar/Sidebar';
// import Header from './student-components/header/Header';
// import StatCard from './student-components/StatCard';
// import AcademicProgressChart from './student-components/AcademicProgressChart';

// import AssessmentsList from './student-components/AssessmentsList';
// import CurrentCourses from './student-components/CurrentCourses';
// import TechNews from './student-components/TechNews';

// import stats from '../student-dashboard/data/Stats';
// import GPAProgress from './data/GPAProgress';
// import assessments from '../student-dashboard/data/Assesments';
// import courses from './data/Courses';
// import news from './data/News';

// const StudentDashboard = () => {
//   const [toggleView] = useState("semester");

//   return (
//     <div>
//         <Sidebar />
//     <div className="dashboard-wrapper">
      

//       <div className="dashboard-content">
//         <Header />
//         <br /><br />
//         {/* Stats Overview */}
//         <section className="section stats-section">
//           <div className="cards-container">
//             {stats.map((item, idx) => (
//               <StatCard
//                 key={idx}
//                 title={item.title}
//                 value={item.value}
//                 icon={item.icon}
//               />
//             ))}
//           </div>
//         </section>
//           <br /><br />
//         {/* Academic Progress */}
//         <section className="section gpa-progress-section">
          
//           <AcademicProgressChart data={GPAProgress[toggleView]} />
//         </section>

//         {/* Bottom Grid: Assessments, Courses, News */}
        
//             <section className="section bottom-grids">
  
//   <div className="grid-item"><CurrentCourses data={courses} /></div>
//   <div className="grid-item"><TechNews data={news} /></div>
//   <div className="grid-item"><AssessmentsList data={assessments} /></div>
// </section>

//       </div>
//     </div>
//     </div>
//   );
// };

// export default StudentDashboard;



// import React from "react";
// import "./StudentDashboard.css";
// import Sidebar from './student-components/sidebar/Sidebar';
// import Header from './student-components/header/Header';
// import StatCard from './student-components/StatCard';
// import AcademicProgressChart from './student-components/AcademicProgressChart';
// import AssessmentsList from './student-components/AssessmentsList';
// import CurrentCourses from './student-components/CurrentCourses';
// import TechNews from './student-components/TechNews';
// import StudentGraphSection from './student-components/StudentGraphSection';

// import stats from '../student-dashboard/data/Stats';
// import assessments from '../student-dashboard/data/Assesments';
// import courses from './data/Courses';
// import news from './data/News';

// const StudentDashboard = () => {
//   return (
//     <div className="dashboard-layout">
//       <Sidebar />
//       <div className="dashboard-main">
//         <Header />

//         {/* Overview Section */}
//         <section className="section overview-section">
//           <h2 className="section-title">📊 Overview</h2>
//           <div className="cards-container">
//             {stats.map((item, idx) => (
//               <StatCard
//                 key={idx}
//                 title={item.title}
//                 value={item.value}
//                 icon={item.icon}
//               />
//             ))}
//           </div>
//         </section>

//         {/* Academic Progress Section */}
//         <section className="section academic-progress">
//           <h2 className="section-title">📚 Academic Progress</h2>
//           <AcademicProgressChart />
//         </section>

//         {/* Placement Stats Section */}
//         <section className="section placements-stats">
//           <h2 className="section-title">💼 Placement Insights</h2>
//           <StudentGraphSection />
//         </section>

//         {/* Grid Section for Courses and News */}
//         <section className="section grid-section">
//           <div className="grid-left">
//             <CurrentCourses data={courses} />
//           </div>
//           <div className="grid-right">
//             <TechNews data={news} />
//           </div>
//         </section>

//         {/* Assessments Section */}
//         <section className="section assessments-section">
//           <h2 className="section-title">📝 Upcoming Assessments</h2>
//           <AssessmentsList data={assessments} />
//         </section>

//       </div>
//     </div>
//   );
// };

// export default StudentDashboard;




import React from "react";
import "./StudentDashboard.css";
import Sidebar from './student-components/sidebar/Sidebar';
import Header from './student-components/header/Header';
import StatCard from './student-components/StatCard';
import AcademicProgressChart from './student-components/AcademicProgressChart';
// import AssessmentsList from './stdcomponents/AssessmentsList';
import CurrentCourses from './student-components/CurrentCourses';
import TechNews from './student-components/TechNews';
import StudentGraphSection from './student-components/StudentGraphSection';
import OfferStats from './student-components/offerstats/OfferStats'; // ✅ New import
import stats from '../student-dashboard/data/Stats';
// import assessments from '../student-dashboard/data/Assessments';
import courses from '../student-dashboard/data/Courses';
import news from '../student-dashboard/data/News';
 
const StudentDashboard = () => {
  return (
    <div className="dashboard-layout">
      <Sidebar />
      <div className="dashboard-main">
        <Header />
 
        {/* Overview Section */}
        <section className="section overview-section">
          <h2 className="section-title">📊 Overview</h2>
          <div className="cards-container">
            {stats.map((item, idx) => (
              <StatCard
                key={idx}
                title={item.title}
                value={item.value}
                icon={item.icon}
              />
            ))}
          </div>
        </section>
 
        {/* Academic Progress Section */}
        <section className="section academic-progress">
          <h2 className="section-title">📚 Academic Progress</h2>
          <AcademicProgressChart />
        </section>
 
        {/* Placement Stats Section */}
        <section className="section placements-stats">
          <StudentGraphSection />
        </section>
 
        {/* Offer Letters Summary Section */}
        <section className="section offer-letters">
          <h2 className="section-title">📄 Offer Letters Summary</h2>
          <OfferStats />
        </section>
 
        {/* Grid Section for Courses and News */}
        <section className="section grid-section">
          <div className="grid-left">
            <CurrentCourses data={courses} />
          </div>
          <div className="grid-right">
            <TechNews data={news} />
          </div>
        </section>
 
      </div>
    </div>
  );
};
 
export default StudentDashboard;