// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import CountUp from "react-countup";
// // import "./Dashboard.css";
// // import Sidebar from '../shared/sidebar/Sidebar';

// // const Dashboard = () => {
// //   const navigate = useNavigate();
// //   const [showDropdown, setShowDropdown] = useState(false);

// //   const handleProfileClick = () => {
// //     navigate("/college-profile");
// //   };

// //   const handleLogout = () => {
// //     localStorage.removeItem("token");
// //     navigate("/Login", { replace: true });
// //   };

// //   const toggleDropdown = () => {
// //     setShowDropdown(!showDropdown);
// //   };



// //   return (
// //     <div className="dashboard-container">
// //         <Sidebar/>

// //       <main className="main-content">
// //         <header className="topbar">
// //           <input type="text" placeholder="Search..." className="search" />

// //           <div className="college-d-user-info">
// //             <div className="college-d-avatar">JD</div>
// //             <span
// //               className="username"
// //               onClick={toggleDropdown}
// //               style={{ cursor: "pointer", position: "relative" }}
// //             >
// //               john Doe  
// //               {showDropdown && (
// //                 <div className="dropdown-menu">
// //                   <button onClick={handleProfileClick}>👤 Profile</button>
// //                   <button onClick={handleLogout}>📕 Logout</button>
// //                 </div>
// //               )}
// //             </span>
// //           </div>
// //         </header>

// //         <section className="college-dashboard-header">
// //           <h2>Dashboard</h2>
// //           <p>Welcome back, John! Here's what's happening today.</p>

// //           <div className="stats-grid">
// //             <div className="stat-card">
// //               <h3>Total Students</h3>
// //               <p className="value">
// //                 <CountUp end={2845} duration={2} separator="," />
// //               </p>
// //               <span className="positive">↑ 12% from last semester</span>
// //             </div>

// //             <div className="stat-card">
// //               <h3>Placement Rate</h3>
// //               <p className="value">
// //                 <CountUp end={92} duration={2} suffix="%" />
// //               </p>
// //               <span className="positive">↑ 5% from last year</span>
// //             </div>

// //             <div className="stat-card">
// //               <h3>Avg. Package</h3>
// //               <p className="value">
// //                 <CountUp end={85} duration={2} prefix="$" suffix="K" />
// //               </p>
// //               <span className="positive">↑ 8% from last year</span>
// //             </div>

// //             <div className="stat-card">
// //               <h3>Recruiting Companies</h3>
// //               <p className="value">
// //                 <CountUp end={156} duration={2} />
// //               </p>
// //               <span className="positive">+24 new this year</span>
// //             </div>
// //           </div>
// //         </section>

// //         <div className="content-grid">
// //           <div className="newsletters">
// //             <h3>Latest Newsletters</h3>
// //             <ul>
// //               <li>
// //                 <h4>Campus Recruitment Drive: Tech Giants Coming Next Week</h4>
// //                 <p>
// //                   Google, Microsoft, and Amazon will be conducting on-campus interviews for final year students. Register before May 15th.
// //                   <a href="//"> Read more</a>
// //                 </p>
// //               </li>
// //               <li>
// //                 <h4>Resume Workshop: Boost Your Chances of Getting Hired</h4>
// //                 <p>
// //                   Join our resume building workshop conducted by industry experts.
// //                   <a href="//"> Read more</a>
// //                 </p>
// //               </li>
// //               <li>
// //                 <h4>New Internship Opportunities for Second Year Students</h4>
// //                 <p>
// //                   Several startups are offering summer internships with stipends ranging from $1000–$2500.
// //                   <a href="//"> Apply now</a>
// //                 </p>
// //               </li>
// //             </ul>
// //           </div>

// //           <div className="placements">
// //             <h3>Recently Placed Students</h3>
// //             <ul>
// //               <li><span className="badge as">AS</span> Aisha Smith - Google</li>
// //               <li><span className="badge rj">RJ</span> Ryan Johnson - Microsoft</li>
// //               <li><span className="badge mp">MP</span> Maria Patel - Amazon</li>
// //               <li><span className="badge dk">DK</span> David Kim - Apple</li>
// //             </ul>
// //             <a href="./Placements" className="view-all">View all placements</a>
// //           </div>
// //         </div>
// //       </main>
// //     </div>
// //   );
// // };

// // export default Dashboard;






// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { 
//   FiSearch, FiBell, FiChevronDown, FiExternalLink,
//   FiUsers, FiBriefcase, FiDollarSign, FiTrendingUp 
// } from 'react-icons/fi';
// import { 
//   RiDashboardLine, RiLogoutCircleRLine, RiUserLine 
// } from 'react-icons/ri';
// import CountUp from 'react-countup';
// import { Line, Bar, Pie } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// import './Dashboard.css';
// import Sidebar from '../shared/sidebar/Sidebar';


// Chart.register(...registerables);

// const Dashboard = () => {
//   const navigate = useNavigate();
//   const [showDropdown, setShowDropdown] = useState(false);
//   const [activeStudents, setActiveStudents] = useState(0);
//   const [placementData, setPlacementData] = useState([]);

//   // Simulate real-time data updates
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setActiveStudents(Math.floor(Math.random() * 200) + 1800);
//       setPlacementData(generatePlacementData());
//     }, 3000);
//     return () => clearInterval(interval);
//   }, []);

//   const generatePlacementData = () => {
//     const companies = ['Google', 'Microsoft', 'Amazon', 'Apple', 'Facebook'];
//     return Array(5).fill(0).map((_, i) => ({
//       company: companies[i],
//       students: Math.floor(Math.random() * 30) + 10,
//       package: Math.floor(Math.random() * 30) + 70
//     }));
//   };

//   // Chart data configurations
//   const placementTrendData = {
//     labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
//     datasets: [{
//       label: 'Placements',
//       data: [45, 60, 75, 82, 68, 92],
//       borderColor: '#4f46e5',
//       backgroundColor: 'rgba(79, 70, 229, 0.1)',
//       tension: 0.4,
//       fill: true
//     }]
//   };

//   const packageDistributionData = {
//     labels: ['$50-70K', '$70-90K', '$90-110K', '$110K+'],
//     datasets: [{
//       data: [15, 35, 25, 25],
//       backgroundColor: [
//         '#6366f1',
//         '#8b5cf6',
//         '#a855f7',
//         '#d946ef'
//       ],
//       borderWidth: 0
//     }]
//   };

//   const companyWiseData = {
//     labels: placementData.map(item => item.company),
//     datasets: [{
//       label: 'Students Placed',
//       data: placementData.map(item => item.students),
//       backgroundColor: 'rgba(16, 185, 129, 0.6)',
//       borderColor: 'rgba(16, 185, 129, 1)',
//       borderWidth: 1
//     }]
//   };

//   return (
//     <div className="dashboard-container">
//       <Sidebar/>
//       {/* Enhanced Sidebar */}
// {/*      
//       <div className="sidebar">
//         <div className="sidebar-header">
//           <h1><span className="highlight">College</span> Analytics</h1>
//         </div>
        
//         <nav className="sidebar-nav">
//           <div className="nav-item active">
//             <RiDashboardLine className="nav-icon" />
//             <span>Dashboard</span>
//           </div>
//           <div className="nav-item">
//             <FiUsers className="nav-icon" />
//             <span>Students</span>
//           </div>
//           <div className="nav-item">
//             <FiBriefcase className="nav-icon" />
//             <span>Placements</span>
//           </div>
//           <div className="nav-item">
//             <FiDollarSign className="nav-icon" />
//             <span>Financials</span>
//           </div>
//         </nav>

//         <div className="user-profile-sidebar">
//           <div className="avatar-gradient">JD</div>
//           <div className="user-info">
//             <span className="username">John Doe</span>
//             <span className="user-role">Admin</span>
//           </div>
//         </div>
//       </div> */}

//       {/* Main Content */}
//       <main className="main-content">
//         {/* Topbar */}
//         <header className="topbar">
//           <div className="search-container">
//             <FiSearch className="search-icon" />
//             <input type="text" placeholder="Search analytics..." className="search-input" />
//           </div>
          
//           <div className="topbar-right">
//             <div className="notification-badge">
//               <FiBell />
//               <span className="notification-count">3</span>
//             </div>
            
//             <div className="user-profile" onClick={() => setShowDropdown(!showDropdown)}>
//               <div className="avatar-gradient">JD</div>
//               <FiChevronDown className={`dropdown-arrow ${showDropdown ? 'flipped' : ''}`} />
              
//               {showDropdown && (
//                 <div className="dropdown-menu">
//                   <button onClick={() => navigate('/profile')}>
//                     <RiUserLine /> Profile
//                   </button>
//                   <button onClick={() => {
//                     localStorage.removeItem('token');
//                     navigate('/login');
//                   }}>
//                     <RiLogoutCircleRLine /> Logout
//                   </button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </header>

//         {/* Dashboard Content */}
//         <div className="dashboard-content">
//           {/* Welcome Banner */}
//           <div className="welcome-banner">
//             <h1>Welcome back, <span className="highlight">John</span>!</h1>
//             <p>Here's your college performance at a glance</p>
//           </div>

//           {/* Live Stats Grid */}
//           <div className="college-stats-grid">
//             <div className="college-stat-card">
//               <div className="college-card-icon">
//                 <FiUsers />
//               </div>
//               <div className="college-card-content">
//                 <h3>Active Students</h3>
//                 <p className="college-value">
//                   <CountUp end={activeStudents} duration={1} separator="," />
//                 </p>
//                 <div className="college-trend positive">
//                   <FiTrendingUp /> 12% from last semester
//                 </div>
//               </div>
//             </div>

//             <div className="college-stat-card">
//               <div className="college-card-icon">
//                 <FiBriefcase />
//               </div>
//               <div className="college-card-content">
//                 <h3>Placement Rate</h3>
//                 <p className="college-value">
//                   <CountUp end={92} duration={2} suffix="%" />
//                 </p>
//                 <div className="college-trend positive">
//                   <FiTrendingUp /> 5% from last year
//                 </div>
//               </div>
//             </div>

//             <div className="college-stat-card">
//               <div className="college-card-icon">
//                 <FiDollarSign />
//               </div>
//               <div className="college-card-content">
//                 <h3>Avg. Package</h3>
//                 <p className="college-value">
//                   <CountUp end={85} duration={2} prefix="$" suffix="K" />
//                 </p>
//                 <div className="college-trend positive">
//                   <FiTrendingUp /> 8% from last year
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* Charts Section */}
//           <div className="college-charts-grid">
//             {/* Placement Trend Chart */}
//             <div className="college-chart-card">
//               <div className="college-chart-header">
//                 <h3>Placement Trend (2023)</h3>
//                 <select className="college-chart-filter">
//                   <option>Last 6 Months</option>
//                   <option>This Year</option>
//                   <option>Last Year</option>
//                 </select>
//               </div>
//               <div className="college-chart-container">
//                 <Line 
//                   data={placementTrendData}
//                   options={{
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     plugins: {
//                       legend: { display: false }
//                     }
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Package Distribution Chart */}
//             <div className="college-chart-card">
//               <div className="college-chart-header">
//                 <h3>Package Distribution</h3>
//                 <select className="college-chart-filter">
//                   <option>Current Year</option>
//                   <option>Last Year</option>
//                 </select>
//               </div>
//               <div className="college-chart-container">
//                 <Pie 
//                   data={packageDistributionData}
//                   options={{
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     plugins: {
//                       legend: { position: 'right' }
//                     }
//                   }}
//                 />
//               </div>
//             </div>

//             {/* Company-wise Placements */}
//             <div className="college-chart-card">
//               <div className="college-chart-header">
//                 <h3>Top Recruiters</h3>
//                 <select className="college-chart-filter">
//                   <option>This Year</option>
//                   <option>Last Year</option>
//                 </select>
//               </div>
//               <div className="college-chart-container">
//                 <Bar 
//                   data={companyWiseData}
//                   options={{
//                     responsive: true,
//                     maintainAspectRatio: false,
//                     plugins: {
//                       legend: { display: false }
//                     },
//                     scales: {
//                       y: { beginAtZero: true }
//                     }
//                   }}
//                 />
//               </div>
//             </div>
//           </div>

//           {/* Recent Activity */}
//           <div className="activity-section">
//             <div className="section-header">
//               <h2>Recent Placements</h2>
//               <a href="#" className="view-all">View All</a>
//             </div>
            
//             <div className="activity-grid">
//               {placementData.slice(0, 4).map((company, index) => (
//                 <div key={index} className="activity-card">
//                   <div className="company-logo">
//                     {company.company.substring(0, 2)}
//                   </div>
//                   <div className="activity-details">
//                     <h3>{company.company}</h3>
//                     <p>{company.students} students placed</p>
//                     <div className="activity-meta">
//                       <span>Avg. ${company.package}K</span>
//                       <span className="trend positive">
//                         <FiTrendingUp /> {Math.floor(Math.random() * 5) + 1}%
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Dashboard;









// import React, { useState, useEffect } from 'react';
// import { Line, Bar, Pie } from 'react-chartjs-2';
// import { Chart, registerables } from 'chart.js';
// import './Dashboard.css';

// Chart.register(...registerables);

// const Dashboard = () => {
//   const [darkMode, setDarkMode] = useState(false);
//   const [activeTab, setActiveTab] = useState('dashboard');
//   const [notifications, setNotifications] = useState([
//     { id: 1, text: 'Assignment due tomorrow', read: false, time: '10 min ago' },
//     { id: 2, text: 'New grade posted for Math 101', read: false, time: '1 hour ago' },
//     { id: 3, text: 'Campus event today at 3 PM', read: true, time: '3 hours ago' },
//   ]);
//   const [courses, setCourses] = useState([
//     { id: 1, name: 'Computer Science 101', progress: 75, color: '#FF6384' },
//     { id: 2, name: 'Mathematics 201', progress: 60, color: '#36A2EB' },
//     { id: 3, name: 'Physics 101', progress: 45, color: '#FFCE56' },
//     { id: 4, name: 'Literature 301', progress: 30, color: '#4BC0C0' },
//   ]);
//   const [events, setEvents] = useState([
//     { id: 1, title: 'Midterm Exam', date: '2023-11-15', course: 'CS 101' },
//     { id: 2, title: 'Project Submission', date: '2023-11-20', course: 'Math 201' },
//     { id: 3, title: 'Guest Lecture', date: '2023-11-25', course: 'Physics 101' },
//   ]);

//   const toggleDarkMode = () => {
//     setDarkMode(!darkMode);
//   };

//   const markAsRead = (id) => {
//     setNotifications(notifications.map(notification => 
//       notification.id === id ? { ...notification, read: true } : notification
//     ));
//   };

//   // Chart data
//   const performanceData = {
//     labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6'],
//     datasets: [
//       {
//         label: 'Your Performance',
//         data: [65, 59, 80, 81, 56, 85],
//         fill: false,
//         backgroundColor: 'rgb(75, 192, 192)',
//         borderColor: 'rgba(75, 192, 192, 0.8)',
//         tension: 0.4,
//       },
//       {
//         label: 'Class Average',
//         data: [50, 55, 65, 70, 60, 75],
//         fill: false,
//         backgroundColor: 'rgb(255, 99, 132)',
//         borderColor: 'rgba(255, 99, 132, 0.8)',
//         tension: 0.4,
//       },
//     ],
//   };

//   const attendanceData = {
//     labels: ['CS 101', 'Math 201', 'Physics 101', 'Literature 301'],
//     datasets: [
//       {
//         label: 'Attendance Percentage',
//         data: [95, 85, 75, 90],
//         backgroundColor: [
//           'rgba(255, 99, 132, 0.8)',
//           'rgba(54, 162, 235, 0.8)',
//           'rgba(255, 206, 86, 0.8)',
//           'rgba(75, 192, 192, 0.8)',
//         ],
//         borderColor: [
//           'rgba(255, 99, 132, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(75, 192, 192, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   const gradeDistribution = {
//     labels: ['A', 'B', 'C', 'D', 'F'],
//     datasets: [
//       {
//         label: 'Grade Distribution',
//         data: [12, 19, 3, 5, 2],
//         backgroundColor: [
//           'rgba(75, 192, 192, 0.8)',
//           'rgba(54, 162, 235, 0.8)',
//           'rgba(255, 206, 86, 0.8)',
//           'rgba(255, 99, 132, 0.8)',
//           'rgba(153, 102, 255, 0.8)',
//         ],
//         borderColor: [
//           'rgba(75, 192, 192, 1)',
//           'rgba(54, 162, 235, 1)',
//           'rgba(255, 206, 86, 1)',
//           'rgba(255, 99, 132, 1)',
//           'rgba(153, 102, 255, 1)',
//         ],
//         borderWidth: 1,
//       },
//     ],
//   };

//   return (
//     <div className={`dashboard-container ${darkMode ? 'dark-mode' : ''}`}>
//       <div className="sidebar">
//         <div className="logo">
//           <i className="fas fa-graduation-cap"></i>
//           <span>CollegeHub</span>
//         </div>
//         <nav>
//           <ul>
//             <li className={activeTab === 'dashboard' ? 'active' : ''} onClick={() => setActiveTab('dashboard')}>
//               <i className="fas fa-tachometer-alt"></i>
//               <span>Dashboard</span>
//             </li>
//             <li className={activeTab === 'courses' ? 'active' : ''} onClick={() => setActiveTab('courses')}>
//               <i className="fas fa-book"></i>
//               <span>Courses</span>
//             </li>
//             <li className={activeTab === 'calendar' ? 'active' : ''} onClick={() => setActiveTab('calendar')}>
//               <i className="fas fa-calendar-alt"></i>
//               <span>Calendar</span>
//             </li>
//             <li className={activeTab === 'grades' ? 'active' : ''} onClick={() => setActiveTab('grades')}>
//               <i className="fas fa-chart-bar"></i>
//               <span>Grades</span>
//             </li>
//             <li className={activeTab === 'resources' ? 'active' : ''} onClick={() => setActiveTab('resources')}>
//               <i className="fas fa-folder"></i>
//               <span>Resources</span>
//             </li>
//             <li className={activeTab === 'settings' ? 'active' : ''} onClick={() => setActiveTab('settings')}>
//               <i className="fas fa-cog"></i>
//               <span>Settings</span>
//             </li>
//           </ul>
//         </nav>
//         <div className="theme-toggle" onClick={toggleDarkMode}>
//           <i className={darkMode ? 'fas fa-sun' : 'fas fa-moon'}></i>
//           <span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span>
//         </div>
//       </div>

//       <div className="main-content">
//         <header>
//           <div className="search-bar">
//             <i className="fas fa-search"></i>
//             <input type="text" placeholder="Search..." />
//           </div>
//           <div className="user-actions">
//             <div className="notifications">
//               <i className="fas fa-bell"></i>
//               <span className="badge">{notifications.filter(n => !n.read).length}</span>
//               <div className="notification-dropdown">
//                 <h4>Notifications</h4>
//                 {notifications.map(notification => (
//                   <div key={notification.id} className={`notification-item ${notification.read ? 'read' : ''}`}>
//                     <p>{notification.text}</p>
//                     <small>{notification.time}</small>
//                     {!notification.read && (
//                       <button onClick={() => markAsRead(notification.id)}>Mark as read</button>
//                     )}
//                   </div>
//                 ))}
//               </div>
//             </div>
//             <div className="user-profile">
//               <img src="https://via.placeholder.com/40" alt="User" />
//               <span>John Doe</span>
//             </div>
//           </div>
//         </header>

//         {activeTab === 'dashboard' && (
//           <div className="dashboard-content">
//             <div className="welcome-banner">
//               <h1>Welcome back, John!</h1>
//               <p>Here's what's happening with your college journey today.</p>
//               <div className="stats">
//                 <div className="stat-card">
//                   <i className="fas fa-book-open"></i>
//                   <div>
//                     <h3>4</h3>
//                     <p>Active Courses</p>
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <i className="fas fa-tasks"></i>
//                   <div>
//                     <h3>3</h3>
//                     <p>Pending Assignments</p>
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <i className="fas fa-calendar-check"></i>
//                   <div>
//                     <h3>2</h3>
//                     <p>Upcoming Events</p>
//                   </div>
//                 </div>
//                 <div className="stat-card">
//                   <i className="fas fa-chart-line"></i>
//                   <div>
//                     <h3>85%</h3>
//                     <p>Overall Performance</p>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             <div className="charts-row">
//               <div className="chart-container">
//                 <h3>Performance Trend</h3>
//                 <Line data={performanceData} />
//               </div>
//               <div className="chart-container">
//                 <h3>Attendance</h3>
//                 <Bar data={attendanceData} />
//               </div>
//             </div>

//             <div className="bottom-row">
//               <div className="courses-progress">
//                 <h3>Courses Progress</h3>
//                 <div className="progress-bars">
//                   {courses.map(course => (
//                     <div key={course.id} className="progress-item">
//                       <div className="progress-info">
//                         <span>{course.name}</span>
//                         <span>{course.progress}%</span>
//                       </div>
//                       <div className="progress-bar">
//                         <div 
//                           className="progress-fill" 
//                           style={{ 
//                             width: `${course.progress}%`,
//                             backgroundColor: course.color
//                           }}
//                         ></div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="upcoming-events">
//                 <h3>Upcoming Events</h3>
//                 <div className="events-list">
//                   {events.map(event => (
//                     <div key={event.id} className="event-item">
//                       <div className="event-date">
//                         <span>{new Date(event.date).toLocaleDateString('en-US', { month: 'short' })}</span>
//                         <span>{new Date(event.date).getDate()}</span>
//                       </div>
//                       <div className="event-details">
//                         <h4>{event.title}</h4>
//                         <p>{event.course}</p>
//                       </div>
//                       <button className="event-action">
//                         <i className="fas fa-chevron-right"></i>
//                       </button>
//                     </div>
//                   ))}
//                 </div>
//                 <button className="view-all">View All Events</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'courses' && (
//           <div className="courses-content">
//             <h2>Your Courses</h2>
//             <div className="course-grid">
//               {courses.map(course => (
//                 <div key={course.id} className="course-card">
//                   <div className="course-header" style={{ backgroundColor: course.color }}>
//                     <h3>{course.name}</h3>
//                   </div>
//                   <div className="course-body">
//                     <div className="course-progress">
//                       <div className="circular-progress">
//                         <svg>
//                           <circle className="bg" cx="50" cy="50" r="40"></circle>
//                           <circle 
//                             className="fill" 
//                             cx="50" 
//                             cy="50" 
//                             r="40" 
//                             style={{ 
//                               stroke: course.color,
//                               strokeDashoffset: 251 - (251 * course.progress / 100)
//                             }}
//                           ></circle>
//                         </svg>
//                         <div className="percentage">{course.progress}%</div>
//                       </div>
//                     </div>
//                     <div className="course-stats">
//                       <div>
//                         <i className="fas fa-tasks"></i>
//                         <span>3 Assignments</span>
//                       </div>
//                       <div>
//                         <i className="fas fa-file-alt"></i>
//                         <span>5 Resources</span>
//                       </div>
//                     </div>
//                     <div className="course-actions">
//                       <button className="btn-primary">Continue</button>
//                       <button className="btn-outline">Details</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'calendar' && (
//           <div className="calendar-content">
//             <h2>Academic Calendar</h2>
//             <div className="calendar-container">
//               <div className="calendar-header">
//                 <button className="nav-button">
//                   <i className="fas fa-chevron-left"></i>
//                 </button>
//                 <h3>November 2023</h3>
//                 <button className="nav-button">
//                   <i className="fas fa-chevron-right"></i>
//                 </button>
//               </div>
//               <div className="calendar-grid">
//                 <div className="calendar-weekdays">
//                   {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'].map(day => (
//                     <div key={day} className="weekday">{day}</div>
//                   ))}
//                 </div>
//                 <div className="calendar-days">
//                   {Array.from({ length: 30 }).map((_, index) => {
//                     const day = index + 1;
//                     const hasEvent = events.some(event => 
//                       new Date(event.date).getDate() === day && 
//                       new Date(event.date).getMonth() === 10 // November is month 10 (0-indexed)
//                     );
                    
//                     return (
//                       <div 
//                         key={day} 
//                         className={`calendar-day ${hasEvent ? 'has-event' : ''} ${day === 15 ? 'current-day' : ''}`}
//                       >
//                         {day}
//                         {hasEvent && <div className="event-dot"></div>}
//                       </div>
//                     );
//                   })}
//                 </div>
//               </div>
//             </div>
//             <div className="calendar-events">
//               <h3>Upcoming Events</h3>
//               {events.map(event => (
//                 <div key={event.id} className="calendar-event">
//                   <div className="event-date">
//                     {new Date(event.date).toLocaleDateString('en-US', { 
//                       month: 'short', 
//                       day: 'numeric' 
//                     })}
//                   </div>
//                   <div className="event-details">
//                     <h4>{event.title}</h4>
//                     <p>{event.course}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         )}

//         {activeTab === 'grades' && (
//           <div className="grades-content">
//             <h2>Grades Overview</h2>
//             <div className="grades-container">
//               <div className="grades-chart">
//                 <h3>Grade Distribution</h3>
//                 <Pie data={gradeDistribution} />
//               </div>
//               <div className="grades-table">
//                 <h3>Course Grades</h3>
//                 <table>
//                   <thead>
//                     <tr>
//                       <th>Course</th>
//                       <th>Assignments</th>
//                       <th>Midterm</th>
//                       <th>Final</th>
//                       <th>Total</th>
//                     </tr>
//                   </thead>
//                   <tbody>
//                     <tr>
//                       <td>CS 101</td>
//                       <td>85%</td>
//                       <td>90%</td>
//                       <td>-</td>
//                       <td>87%</td>
//                     </tr>
//                     <tr>
//                       <td>Math 201</td>
//                       <td>78%</td>
//                       <td>82%</td>
//                       <td>-</td>
//                       <td>80%</td>
//                     </tr>
//                     <tr>
//                       <td>Physics 101</td>
//                       <td>92%</td>
//                       <td>88%</td>
//                       <td>-</td>
//                       <td>90%</td>
//                     </tr>
//                     <tr>
//                       <td>Literature 301</td>
//                       <td>75%</td>
//                       <td>80%</td>
//                       <td>-</td>
//                       <td>78%</td>
//                     </tr>
//                   </tbody>
//                 </table>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'resources' && (
//           <div className="resources-content">
//             <h2>Learning Resources</h2>
//             <div className="resources-grid">
//               <div className="resource-card">
//                 <div className="resource-icon">
//                   <i className="fas fa-file-pdf"></i>
//                 </div>
//                 <h3>Lecture Notes</h3>
//                 <p>Collection of all lecture slides and notes</p>
//                 <button className="btn-primary">View</button>
//               </div>
//               <div className="resource-card">
//                 <div className="resource-icon">
//                   <i className="fas fa-video"></i>
//                 </div>
//                 <h3>Video Lectures</h3>
//                 <p>Recorded lectures and tutorials</p>
//                 <button className="btn-primary">Watch</button>
//               </div>
//               <div className="resource-card">
//                 <div className="resource-icon">
//                   <i className="fas fa-book"></i>
//                 </div>
//                 <h3>Textbooks</h3>
//                 <p>Digital copies of required textbooks</p>
//                 <button className="btn-primary">Read</button>
//               </div>
//               <div className="resource-card">
//                 <div className="resource-icon">
//                   <i className="fas fa-code"></i>
//                 </div>
//                 <h3>Code Examples</h3>
//                 <p>Programming examples and exercises</p>
//                 <button className="btn-primary">Explore</button>
//               </div>
//               <div className="resource-card">
//                 <div className="resource-icon">
//                   <i className="fas fa-question-circle"></i>
//                 </div>
//                 <h3>Practice Tests</h3>
//                 <p>Previous exams and practice questions</p>
//                 <button className="btn-primary">Practice</button>
//               </div>
//               <div className="resource-card">
//                 <div className="resource-icon">
//                   <i className="fas fa-users"></i>
//                 </div>
//                 <h3>Study Groups</h3>
//                 <p>Connect with your peers</p>
//                 <button className="btn-primary">Join</button>
//               </div>
//             </div>
//           </div>
//         )}

//         {activeTab === 'settings' && (
//           <div className="settings-content">
//             <h2>Account Settings</h2>
//             <div className="settings-container">
//               <div className="settings-profile">
//                 <div className="profile-picture">
//                   <img src="https://via.placeholder.com/150" alt="Profile" />
//                   <button className="btn-outline">Change Photo</button>
//                 </div>
//                 <div className="profile-info">
//                   <h3>John Doe</h3>
//                   <p>Computer Science Major</p>
//                   <p>johndoe@college.edu</p>
//                 </div>
//               </div>

//               <div className="settings-form">
//                 <h3>Personal Information</h3>
//                 <form>
//                   <div className="form-group">
//                     <label>First Name</label>
//                     <input type="text" value="John" />
//                   </div>
//                   <div className="form-group">
//                     <label>Last Name</label>
//                     <input type="text" value="Doe" />
//                   </div>
//                   <div className="form-group">
//                     <label>Email</label>
//                     <input type="email" value="johndoe@college.edu" />
//                   </div>
//                   <div className="form-group">
//                     <label>Major</label>
//                     <select>
//                       <option>Computer Science</option>
//                       <option>Mathematics</option>
//                       <option>Physics</option>
//                       <option>Literature</option>
//                     </select>
//                   </div>
//                   <button type="submit" className="btn-primary">Save Changes</button>
//                 </form>

//                 <div className="settings-actions">
//                   <h3>Account Actions</h3>
//                   <button className="btn-outline">
//                     <i className="fas fa-lock"></i> Change Password
//                   </button>
//                   <button className="btn-outline">
//                     <i className="fas fa-bell"></i> Notification Preferences
//                   </button>
//                   <button className="btn-danger">
//                     <i className="fas fa-sign-out-alt"></i> Logout
//                   </button>
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Dashboard;