// // src/components/DashboardLayout.jsx
// import React from 'react';
// import DashboardCard from './DashboardCard';
// import ThemeToggle from './ThemeToggle';
// import StatCard from './StatCard';
// import CourseProgress from './CourseProgress';
// import AssessmentItem from './AssessmentItem';
// import './DashboardLayout.css';
// import '../styles/Variables.css';
// import { Link } from 'react-router-dom';

// import {
//   FaGraduationCap, FaChartLine, FaBookOpen, FaNewspaper,
//   FaClipboardList, FaBars, FaTrophy, FaCalendarCheck, FaUserGraduate
// } from 'react-icons/fa'; // More example React Icons
// import {
//   LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
// } from 'recharts'; // Recharts for data visualization

// const DashboardLayout = () => {
//   const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
//   const studentName = "Priya Sharma"; // Mock Student Name

//   // Mock Data for Charts
//   const academicData = [
//     { name: 'Jan', GPA: 3.5, Credits: 12 },
//     { name: 'Feb', GPA: 3.6, Credits: 14 },
//     { name: 'Mar', GPA: 3.7, Credits: 13 },
//     { name: 'Apr', GPA: 3.8, Credits: 15 },
//     { name: 'May', GPA: 3.9, Credits: 12 },
//   ];

//   const placementData = [
//     { name: '2023', Applicants: 300, Placed: 250 },
//     { name: '2024', Applicants: 350, Placed: 310 },
//     { name: '2025', Applicants: 400, Placed: 360 },
//   ];

//   // Mock Data for Components
//   const currentCourses = [
//     { id: 1, name: "Advanced React.js", progress: 60, status: "In Progress" },
//     { id: 2, name: "Machine Learning with Python", progress: 85, status: "In Progress" },
//     { id: 3, name: "Cloud Computing Fundamentals", progress: 100, status: "Completed" },
//     { id: 4, name: "Cybersecurity Basics", progress: 20, status: "Upcoming" },
//   ];

//   const upcomingAssessments = [
//     { id: 1, title: "React State Management Quiz", date: "July 28, 2025", status: "Pending" },
//     { id: 2, title: "ML Project Presentation", date: "August 5, 2025", status: "Scheduled" },
//     { id: 3, title: "Cloud Security Midterm", date: "August 10, 2025", status: "Pending" },
//     { id: 4, title: "DSA Final Exam", date: "July 20, 2025", status: "Overdue" },
//   ];

//   const techNews = [
//     { id: 1, title: "Google Announces Quantum AI Breakthroughs", link: "#" },
//     { id: 2, title: "Rise of Low-Code/No-Code Platforms in 2025", link: "#" },
//     { id: 3, title: "New European Data Privacy Regulations Coming", link: "#" },
//     { id: 4, title: "The Impact of AI on Software Development Jobs", link: "#" },
//   ];


//   return (
//     <div className="dashboard-container">
//       <aside className={`sidebar ${isSidebarOpen ? 'open' : ''}`}>
//         <div className="sidebar-header">
//           <h2>EduDash</h2>
//           <button className="sidebar-toggle-btn close" onClick={() => setIsSidebarOpen(false)} aria-label="Close sidebar">
//             <FaBars />
//           </button>
//         </div>
//         <nav className="sidebar-nav">
//   <ul>
//     <li><Link to="//"><FaUserGraduate /> Dashboard</Link></li>
//     <li><Link to="/academics"><FaGraduationCap /> Academic Progress</Link></li>
//     <li><Link to="/placements"><FaChartLine /> Placement Insights</Link></li>
//     <li><Link to="/courses"><FaBookOpen /> Current Courses</Link></li>
//     <li><Link to="/news"><FaNewspaper /> Tech News</Link></li>
//     <li><Link to="/assessments"><FaClipboardList /> Upcoming Assessments</Link></li>
//   </ul>
// </nav>

//         <div className="sidebar-footer">
//           <ThemeToggle />
//         </div>
//       </aside>

//       <main className="s-main-content">
//         <header className="main-header">
//           <button className="sidebar-toggle-btn open" onClick={() => setIsSidebarOpen(true)} aria-label="Open sidebar">
//             <FaBars />
//           </button>
//           <div className="welcome-section" id="welcome-section">
//             <h1>Hello, {studentName}!</h1>
//             <p>Welcome back to your personalized dashboard.</p>
//           </div>
//         </header>

//         <section className="stat-cards-grid">
//             <StatCard icon={<FaGraduationCap />} label="Current GPA" value="3.8" unit="" color="var(--color-primary-500)" />
//             <StatCard icon={<FaTrophy />} label="Badges Earned" value="12" unit="" color="var(--color-accent)" />
//             <StatCard icon={<FaCalendarCheck />} label="Assessments Due" value="3" unit="" color="var(--color-warning)" />
//             <StatCard icon={<FaBookOpen />} label="Courses Enrolled" value="4" unit="" color="var(--color-success)" />
//         </section>


//         <section className="dashboard-grid">
//           <DashboardCard title="Academic Progress" className="academic-progress" id="academic-progress">
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={academicData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-card)" />
//                 <XAxis dataKey="name" stroke="var(--color-text-secondary)" />
//                 <YAxis yAxisId="left" stroke="var(--color-primary-500)" />
//                 <YAxis yAxisId="right" orientation="right" stroke="var(--color-accent)" />
//                 <Tooltip
//                   contentStyle={{ backgroundColor: 'var(--color-background-card)', border: '1px solid var(--color-border-card)', borderRadius: 'var(--border-radius-md)' }}
//                   itemStyle={{ color: 'var(--color-text-primary)' }}
//                 />
//                 <Legend />
//                 <Line yAxisId="left" type="monotone" dataKey="GPA" stroke="var(--color-primary-500)" activeDot={{ r: 8 }} />
//                 <Line yAxisId="right" type="monotone" dataKey="Credits" stroke="var(--color-accent)" activeDot={{ r: 8 }} />
//               </LineChart>
//             </ResponsiveContainer>
//             <p className="card-description">Track your GPA and credits over time.</p>
//           </DashboardCard>

//           <DashboardCard title="Placement Insights" id="placement-insights">
//             <ResponsiveContainer width="100%" height={250}>
//               <LineChart data={placementData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
//                 <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-card)" />
//                 <XAxis dataKey="name" stroke="var(--color-text-secondary)" />
//                 <YAxis yAxisId="left" stroke="var(--color-primary-500)" />
//                 <YAxis yAxisId="right" orientation="right" stroke="var(--color-accent)" />
//                 <Tooltip
//                    contentStyle={{ backgroundColor: 'var(--color-background-card)', border: '1px solid var(--color-border-card)', borderRadius: 'var(--border-radius-md)' }}
//                    itemStyle={{ color: 'var(--color-text-primary)' }}
//                 />
//                 <Legend />
//                 <Line yAxisId="left" type="monotone" dataKey="Applicants" stroke="var(--color-primary-500)" activeDot={{ r: 8 }} />
//                 <Line yAxisId="right" type="monotone" dataKey="Placed" stroke="var(--color-accent)" activeDot={{ r: 8 }} />
//               </LineChart>
//             </ResponsiveContainer>
//             <p className="card-description">See the latest placement statistics and trends.</p>
//           </DashboardCard>

//           <DashboardCard title="Current Courses" id="current-courses">
//             <div className="courses-list-container">
//               {currentCourses.map(course => (
//                 <CourseProgress
//                   key={course.id}
//                   courseName={course.name}
//                   progress={course.progress}
//                   status={course.status}
//                 />
//               ))}
//             </div>
//           </DashboardCard>

//           <DashboardCard title="Upcoming Assessments" id="upcoming-assessments">
//             <ul className="assessment-list">
//               {upcomingAssessments.map(assessment => (
//                 <AssessmentItem
//                   key={assessment.id}
//                   title={assessment.title}
//                   date={assessment.date}
//                   status={assessment.status}
//                 />
//               ))}
//             </ul>
//           </DashboardCard>

//           <DashboardCard title="Tech News" id="tech-news" className="span-column">
//             <ul className="news-feed">
//               {techNews.map(news => (
//                 <li key={news.id}>
//                   <a href={news.link} target="_blank" rel="noopener noreferrer">
//                     {news.title}
//                   </a>
//                 </li>
//               ))}
//             </ul>
//           </DashboardCard>

//         </section>
//       </main>
//     </div>
//   );
// };

// export default DashboardLayout;





import React from 'react';
import Sidebar from '../pages/sidebar/Sidebar';
import DashboardCard from './DashboardCard';
import StatCard from './StatCard';
import CourseProgress from './CourseProgress';
import AssessmentItem from './AssessmentItem';
import './DashboardLayout.css';
import '../styles/Variables.css';

import {
  FaBars, FaGraduationCap, FaTrophy, FaCalendarCheck, FaBookOpen
} from 'react-icons/fa';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer
} from 'recharts';

const DashboardLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = React.useState(false);
  const studentName = "Priya Sharma";

  // Mock Data
  const academicData = [
    { name: 'Jan', GPA: 3.5, Credits: 12 },
    { name: 'Feb', GPA: 3.6, Credits: 14 },
    { name: 'Mar', GPA: 3.7, Credits: 13 },
    { name: 'Apr', GPA: 3.8, Credits: 15 },
    { name: 'May', GPA: 3.9, Credits: 12 },
  ];

  const placementData = [
    { name: '2023', Applicants: 300, Placed: 250 },
    { name: '2024', Applicants: 350, Placed: 310 },
    { name: '2025', Applicants: 400, Placed: 360 },
  ];

  const currentCourses = [
    { id: 1, name: "Advanced React.js", progress: 60, status: "In Progress" },
    { id: 2, name: "Machine Learning with Python", progress: 85, status: "In Progress" },
    { id: 3, name: "Cloud Computing Fundamentals", progress: 100, status: "Completed" },
    { id: 4, name: "Cybersecurity Basics", progress: 20, status: "Upcoming" },
  ];

  const upcomingAssessments = [
    { id: 1, title: "React State Management Quiz", date: "July 28, 2025", status: "Pending" },
    { id: 2, title: "ML Project Presentation", date: "August 5, 2025", status: "Scheduled" },
    { id: 3, title: "Cloud Security Midterm", date: "August 10, 2025", status: "Pending" },
    { id: 4, title: "DSA Final Exam", date: "July 20, 2025", status: "Overdue" },
  ];

  const techNews = [
    { id: 1, title: "Google Announces Quantum AI Breakthroughs", link: "#" },
    { id: 2, title: "Rise of Low-Code/No-Code Platforms in 2025", link: "#" },
    { id: 3, title: "New European Data Privacy Regulations Coming", link: "#" },
    { id: 4, title: "The Impact of AI on Software Development Jobs", link: "#" },
  ];

  return (
    <div className="dashboard-container">
      <Sidebar 
        isOpen={isSidebarOpen} 
        onClose={() => setIsSidebarOpen(false)} 
      />
      
      <div className={`main-content-wrapper ${isSidebarOpen ? 'sidebar-open' : ''}`}>
      <main className="s-main-content">
        <header className="main-header">
          <button 
            className="sidebar-toggle-btn open" 
            onClick={() => setIsSidebarOpen(true)}
            aria-label="Open sidebar"
          >
            <FaBars />
          </button>
          <div className="welcome-section">
            <h1>Hello, {studentName}!</h1>
            <p>Welcome back to your personalized dashboard.</p>
          </div>
        </header>

        <section className="stat-cards-grid">
          <StatCard icon={<FaGraduationCap />} label="Current GPA" value="3.8" color="var(--color-primary-500)" />
          <StatCard icon={<FaTrophy />} label="Badges Earned" value="12" color="var(--color-accent)" />
          <StatCard icon={<FaCalendarCheck />} label="Assessments Due" value="3" color="var(--color-warning)" />
          <StatCard icon={<FaBookOpen />} label="Courses Enrolled" value="4" color="var(--color-success)" />
        </section>

        <section className="dashboard-grid">
          <DashboardCard title="Academic Progress" className="academic-progress">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={academicData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-card)" />
                <XAxis dataKey="name" stroke="var(--color-text-secondary)" />
                <YAxis yAxisId="left" stroke="var(--color-primary-500)" />
                <YAxis yAxisId="right" orientation="right" stroke="var(--color-accent)" />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'var(--color-background-card)', 
                    border: '1px solid var(--color-border-card)', 
                    borderRadius: 'var(--border-radius-md)' 
                  }}
                />
                <Legend />
                <Line yAxisId="left" type="monotone" dataKey="GPA" stroke="var(--color-primary-500)" />
                <Line yAxisId="right" type="monotone" dataKey="Credits" stroke="var(--color-accent)" />
              </LineChart>
            </ResponsiveContainer>
            <p className="card-description">Track your GPA and credits over time.</p>
          </DashboardCard>

          <DashboardCard title="Placement Insights">
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={placementData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-card)" />
                <XAxis dataKey="name" stroke="var(--color-text-secondary)" />
                <YAxis stroke="var(--color-primary-500)" />
                <Tooltip
                  contentStyle={{ 
                    backgroundColor: 'var(--color-background-card)', 
                    border: '1px solid var(--color-border-card)',
                    borderRadius: 'var(--border-radius-md)' 
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="Applicants" stroke="var(--color-primary-500)" />
                <Line type="monotone" dataKey="Placed" stroke="var(--color-accent)" />
              </LineChart>
            </ResponsiveContainer>
            <p className="card-description">See the latest placement statistics and trends.</p>
          </DashboardCard>

          <DashboardCard title="Current Courses">
            <div className="courses-list-container">
              {currentCourses.map(course => (
                <CourseProgress
                  key={course.id}
                  courseName={course.name}
                  progress={course.progress}
                  status={course.status}
                />
              ))}
            </div>
          </DashboardCard>

          <DashboardCard title="Upcoming Assessments">
            <ul className="assessment-list">
              {upcomingAssessments.map(assessment => (
                <AssessmentItem
                  key={assessment.id}
                  title={assessment.title}
                  date={assessment.date}
                  status={assessment.status}
                />
              ))}
            </ul>
          </DashboardCard>

          <DashboardCard title="Tech News" className="span-column">
            <ul className="news-feed">
              {techNews.map(news => (
                <li key={news.id}>
                  <a href={news.link} target="_blank" rel="noopener noreferrer">
                    {news.title}
                  </a>
                </li>
              ))}
            </ul>
          </DashboardCard>
        </section>
      </main>
    </div>
    </div>
  );
};

export default DashboardLayout;