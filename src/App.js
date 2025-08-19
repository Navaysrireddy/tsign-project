// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

// import { ThemeProvider } from './recruiter-dashboard/context/ThemeContext';
// import { DataProvider } from './recruiter-dashboard/context/DataContext';
// import { ModalProvider } from './recruiter-dashboard/context/ModalContext';
// import { ThemeProvider as StudentThemeProvider } from './student-dashboard/context/Themecontext'; // ✅ fixed path

// // Recruiter Dashboard
// import Layout from './recruiter-dashboard/layout/Layout';
// import Dashboard from './recruiter-dashboard/dashboard/Dashboard';
// import CandidatesView from './recruiter-dashboard/candidates/CandidatesView';
// import CandidateDetails from './recruiter-dashboard/candidates/CandidateDetails';
// import CandidateAnalysis from './recruiter-dashboard/candidates/CandidateAnalysis';
// import PositionsView from './recruiter-dashboard/positions/PositionsView';
// import InterviewsView from './recruiter-dashboard/interviews/InterviewsView';
// import SettingsView from './recruiter-dashboard/settings/SettingsView';

// // Public Pages
// import Home from './components/home/Home';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';
// import Services from './components/services/Services';
// import Login from './components/auth/login/Login';
// import Enrollpage from './components/auth/register/Register';
// import ForgotPassword from './components/auth/forgot_password/Forgot';

// // Other Dashboards
// import NewDashboard from './new-dashboard/NewDashboard';

// // Admin Dashboard
// import AdminDashboard from './admin-dashboard/admincomponents/admindash/AdminDashboard';
// import VidyardiStudents from './admin-dashboard/pages/AdminStudents';
// import AdminManageStudents from './admin-dashboard/pages/ManageStudents';
// import AdminColleges from './admin-dashboard/pages/AdminColleges';
// import ManageColleges from './admin-dashboard/pages/ManageColleges';
// import ManageRecuriters from './admin-dashboard/pages/ManageRecruiters';
// import AdminRecuriters from './admin-dashboard/pages/AdminRecruiters';
// import AdminSettings from './admin-dashboard/pages/Settings';

// // Student Dashboard Layout
// import Header from './student-dashboard/s-components/layouts/Header';
// import Sidebar from './student-dashboard/s-components/layouts/Sidebar';
// import StudentDashboard from './student-dashboard/s-components/dashboard/Dashboard';
// import Courses from './student-dashboard/s-components/courses/Courses';
// import Assignments from './student-dashboard/s-components/assignments/Assignments';
// import Attendance from './student-dashboard/s-components/attendance/Attendance';
// import Events from './student-dashboard/s-components/events/Events';
// import Placements from './student-dashboard/s-components/placements/Placements';
// import Projects from './student-dashboard/s-components/projects/Projects';
// import Settings from './student-dashboard/s-components/settings/Settings';

// function StudentLayout() {
//   const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
//   const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile);
//   const [activeSection, setActiveSection] = React.useState('dashboard');

//   React.useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       if (!mobile && !sidebarOpen) {
//         setSidebarOpen(true);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [sidebarOpen]);

//   const renderActiveSection = () => {
//     switch (activeSection) {
//       case 'dashboard': return <StudentDashboard setActiveSection={setActiveSection} />;
//       case 'courses': return <Courses />;
//       case 'assignments': return <Assignments />;
//       case 'attendance': return <Attendance />;
//       case 'events': return <Events />;
//       case 'placements': return <Placements />;
//       case 'projects': return <Projects />;
//       case 'settings': return <Settings />;
//       default: return <StudentDashboard setActiveSection={setActiveSection} />;
//     }
//   };

//   return (
//     <StudentThemeProvider>
//       <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//         <Sidebar
//           isOpen={sidebarOpen}
//           setIsOpen={setSidebarOpen}
//           activeSection={activeSection}
//           setActiveSection={setActiveSection}
//         />
//         <div className="flex flex-col flex-1 overflow-hidden">
//           <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//           <main className="flex-1 overflow-y-auto p-4 md:p-6">{renderActiveSection()}</main>
//         </div>
//       </div>
//     </StudentThemeProvider>
//   );
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <DataProvider>
//         <ModalProvider>
//           <Router>
//             <Routes>
//               {/* Public */}
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Enrollpage />} />
//               <Route path="/forgot" element={<ForgotPassword />} />

//               {/* Recruiter Dashboard */}
//               <Route path="/recruiter" element={<Layout />}>
//                 <Route index element={<Navigate to="dashboard" replace />} />
//                 <Route path="dashboard" element={<Dashboard />} />
//                 <Route path="candidates" element={<CandidatesView />} />
//                 <Route path="candidates/:id/details" element={<CandidateDetails />} />
//                 <Route path="candidates/:id/analysis" element={<CandidateAnalysis />} />
//                 <Route path="positions" element={<PositionsView />} />
//                 <Route path="interviews" element={<InterviewsView />} />
//                 <Route path="settings" element={<SettingsView />} />
//               </Route>

//               {/* Other Dashboards */}
//               <Route path="/new-dashboard/*" element={<NewDashboard />} />
//               <Route path="/student-dashboard/*" element={<StudentLayout />} />

//               {/* Admin Dashboard */}
//               <Route path="/admindashboard" element={<AdminDashboard />} />
//               <Route path="/Vidyardi_Students" element={<VidyardiStudents />} />
//               <Route path="/Manage_Students" element={<AdminManageStudents />} />
//               <Route path="/Admin_Colleges" element={<AdminColleges />} />
//               <Route path="/Manage_Colleges" element={<ManageColleges />} />
//               <Route path="/Manage_Recruiters" element={<ManageRecuriters />} />
//               <Route path="/Admin_Recruiters" element={<AdminRecuriters />} />
//               <Route path="/admindashboard/settings" element={<AdminSettings />} />


//               {/* 404 */}
//               <Route path="*" element={<h2>404 - Page Not Found</h2>} />
//             </Routes>
//           </Router>
//         </ModalProvider>
//       </DataProvider>
//     </ThemeProvider>
//   );
// }

// export default App;













































// // App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// import { ThemeProvider } from './recruiter-dashboard/context/ThemeContext';
// import { DataProvider } from './recruiter-dashboard/context/DataContext';
// import { ModalProvider } from './recruiter-dashboard/context/ModalContext';
// import { ThemeProvider as StudentThemeProvider } from './student-dashboard/context/Themecontext';

// // Recruiter Dashboard
// import Layout from './recruiter-dashboard/layout/Layout';
// import Dashboard from './recruiter-dashboard/dashboard/Dashboard';
// import CandidatesView from './recruiter-dashboard/candidates/CandidatesView';
// import CandidateDetails from './recruiter-dashboard/candidates/CandidateDetails';
// import CandidateAnalysis from './recruiter-dashboard/candidates/CandidateAnalysis';
// import PositionsView from './recruiter-dashboard/positions/PositionsView';
// import InterviewsView from './recruiter-dashboard/interviews/InterviewsView';
// import SettingsView from './recruiter-dashboard/settings/SettingsView';

// // Public Pages
// import Home from './components/home/Home';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';
// import Services from './components/services/Services';
// import Login from './components/auth/login/Login';
// import Enrollpage from './components/auth/register/Register';
// import ForgotPassword from './components/auth/forgot_password/Forgot';

// // Other Dashboards
// import NewDashboard from './new-dashboard/NewDashboard';

// // Admin Dashboard
// import AdminDashboard from './admin-dashboard/admincomponents/admindash/AdminDashboard';
// import VidyardiStudents from './admin-dashboard/pages/AdminStudents';
// import AdminManageStudents from './admin-dashboard/pages/ManageStudents';
// import AdminColleges from './admin-dashboard/pages/AdminColleges';
// import ManageColleges from './admin-dashboard/pages/ManageColleges';
// import ManageRecuriters from './admin-dashboard/pages/ManageRecruiters';
// import AdminRecuriters from './admin-dashboard/pages/AdminRecruiters';
// import AdminSettings from './admin-dashboard/pages/Settings';

// // Student Dashboard Layout
// import Header from './student-dashboard/s-components/layouts/Header';
// import Sidebar from './student-dashboard/s-components/layouts/Sidebar';
// import StudentDashboard from './student-dashboard/s-components/dashboard/Dashboard';
// import Courses from './student-dashboard/s-components/courses/Courses';
// import Assignments from './student-dashboard/s-components/assignments/Assignments';
// import Attendance from './student-dashboard/s-components/attendance/Attendance';
// import Events from './student-dashboard/s-components/events/Events';
// import Placements from './student-dashboard/s-components/placements/Placements';
// import Projects from './student-dashboard/s-components/projects/Projects';
// import Settings from './student-dashboard/s-components/settings/Settings';

// // Profile components
// import Profilepage from './student-dashboard/s-components/profile-page/Profilepage.jsx';
// import Profileform from './student-dashboard/s-components/std profile-form/profileform.jsx';

// function StudentLayout() {
//   const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
//   const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile);

//   React.useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       if (!mobile && !sidebarOpen) {
//         setSidebarOpen(true);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [sidebarOpen]);

//   return (
//     <StudentThemeProvider>
//       <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//         <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
//         <div className="flex flex-col flex-1 overflow-hidden">
//           <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//           <main className="flex-1 overflow-y-auto p-4 md:p-6">
//             <Routes>
//               <Route path="/" element={<StudentDashboard />} />
//               <Route path="/courses" element={<Courses />} />
//               <Route path="/assignments" element={<Assignments />} />
//               <Route path="/attendance" element={<Attendance />} />
//               <Route path="/events" element={<Events />} />
//               <Route path="/placements" element={<Placements />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/settings" element={<Settings />} />
//               {/* Profile page route INSIDE dashboard */}
//               <Route path="/profile" element={<Profilepage />} />
//               {/* NO profile-form route here */}
//               <Route path="*" element={<StudentDashboard />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </StudentThemeProvider>
//   );
// }

// // Wrapper component to handle registration redirect
// function EnrollpageWrapper() {
//   const navigate = useNavigate();

//   const handleRegisterSuccess = () => {
//     // Redirect to standalone profile form page after registration
//     navigate('/profile-form');
//   };

//   return <Enrollpage onRegisterSuccess={handleRegisterSuccess} />;
// }

// function App() {
//   return (
//     <ThemeProvider>
//       <DataProvider>
//         <ModalProvider>
//           <Router>
//             <Routes>
//               {/* Public */}
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<EnrollpageWrapper />} />
//               <Route path="/forgot" element={<ForgotPassword />} />

//               {/* Standalone profile form route */}
//               <Route path="/profile-form" element={<Profileform />} />

//               {/* Recruiter Dashboard */}
//               <Route path="/recruiter" element={<Layout />}>
//                 <Route index element={<Navigate to="dashboard" replace />} />
//                 <Route path="dashboard" element={<Dashboard />} />
//                 <Route path="candidates" element={<CandidatesView />} />
//                 <Route path="candidates/:id/details" element={<CandidateDetails />} />
//                 <Route path="candidates/:id/analysis" element={<CandidateAnalysis />} />
//                 <Route path="positions" element={<PositionsView />} />
//                 <Route path="interviews" element={<InterviewsView />} />
//                 <Route path="settings" element={<SettingsView />} />
//               </Route>

//               {/* Other Dashboards */}
//               <Route path="/new-dashboard/*" element={<NewDashboard />} />
//               <Route path="/student-dashboard/*" element={<StudentLayout />} />

//               {/* Admin Dashboard */}
//               <Route path="/admindashboard" element={<AdminDashboard />} />
//               <Route path="/Vidyardi_Students" element={<VidyardiStudents />} />
//               <Route path="/Manage_Students" element={<AdminManageStudents />} />
//               <Route path="/Admin_Colleges" element={<AdminColleges />} />
//               <Route path="/Manage_Colleges" element={<ManageColleges />} />
//               <Route path="/Manage_Recruiters" element={<ManageRecuriters />} />
//               <Route path="/Admin_Recruiters" element={<AdminRecuriters />} />
//               <Route path="/admindashboard/settings" element={<AdminSettings />} />

//               {/* 404 */}
//               <Route path="*" element={<h2>404 - Page Not Found</h2>} />
//             </Routes>
//           </Router>
//         </ModalProvider>
//       </DataProvider>
//     </ThemeProvider>
//   );
// }

// export default App;




// App.js
// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from 'react-router-dom';

// import { ThemeProvider } from './recruiter-dashboard/context/ThemeContext';
// import { DataProvider } from './recruiter-dashboard/context/DataContext';
// import { ModalProvider } from './recruiter-dashboard/context/ModalContext';
// import { ThemeProvider as StudentThemeProvider } from './student-dashboard/context/Themecontext';

// // Recruiter Dashboard
// import Layout from './recruiter-dashboard/layout/Layout';
// import Dashboard from './recruiter-dashboard/dashboard/Dashboard';
// import CandidatesView from './recruiter-dashboard/candidates/CandidatesView';
// import CandidateDetails from './recruiter-dashboard/candidates/CandidateDetails';
// import CandidateAnalysis from './recruiter-dashboard/candidates/CandidateAnalysis';
// import PositionsView from './recruiter-dashboard/positions/PositionsView';
// import InterviewsView from './recruiter-dashboard/interviews/InterviewsView';
// import SettingsView from './recruiter-dashboard/settings/SettingsView';

// // Public Pages
// import Home from './components/home/Home';
// import About from './components/about/About';
// import Contact from './components/contact/Contact';
// import Services from './components/services/Services';
// import Login from './components/auth/login/Login';
// import Enrollpage from './components/auth/register/Register';
// import ForgotPassword from './components/auth/forgot_password/Forgot';

// // Other Dashboards
// import NewDashboard from './new-dashboard/NewDashboard';

// // Admin Dashboard
// import AdminDashboard from './admin-dashboard/admincomponents/admindash/AdminDashboard';
// import VidyardiStudents from './admin-dashboard/pages/AdminStudents';
// import AdminManageStudents from './admin-dashboard/pages/ManageStudents';
// import AdminColleges from './admin-dashboard/pages/AdminColleges';
// import ManageColleges from './admin-dashboard/pages/ManageColleges';
// import ManageRecuriters from './admin-dashboard/pages/ManageRecruiters';
// import AdminRecuriters from './admin-dashboard/pages/AdminRecruiters';
// import AdminSettings from './admin-dashboard/pages/Settings';

// // Student Dashboard Layout
// import Header from './student-dashboard/s-components/layouts/Header';
// import Sidebar from './student-dashboard/s-components/layouts/Sidebar';
// import StudentDashboard from './student-dashboard/s-components/dashboard/Dashboard';
// import Courses from './student-dashboard/s-components/courses/Courses';
// import Assignments from './student-dashboard/s-components/assignments/Assignments';
// import Attendance from './student-dashboard/s-components/attendance/Attendance';
// import Events from './student-dashboard/s-components/events/Events';
// import Placements from './student-dashboard/s-components/placements/Placements';
// import Projects from './student-dashboard/s-components/projects/Projects';
// import Settings from './student-dashboard/s-components/settings/Settings';

// // Profile components
// import Profilepage from './student-dashboard/s-components/profile-page/Profilepage.jsx';
// import Profileform from './student-dashboard/s-components/std profile-form/profileform.jsx';

// // ---------------- Student Layout ----------------
// function StudentLayout() {
//   const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
//   const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile);

//   React.useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       if (!mobile && !sidebarOpen) {
//         setSidebarOpen(true);
//       }
//     };
//     window.addEventListener('resize', handleResize);
//     return () => window.removeEventListener('resize', handleResize);
//   }, [sidebarOpen]);

//   return (
//     <StudentThemeProvider>
//       <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//         <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
//         <div className="flex flex-col flex-1 overflow-hidden">
//           <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//           <main className="flex-1 overflow-y-auto p-4 md:p-6">
//             <Routes>
//               <Route path="/" element={<StudentDashboard />} />
//               <Route path="/courses" element={<Courses />} />
//               <Route path="/assignments" element={<Assignments />} />
//               <Route path="/attendance" element={<Attendance />} />
//               <Route path="/events" element={<Events />} />
//               <Route path="/placements" element={<Placements />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/settings" element={<Settings />} />
//               <Route path="/profile" element={<Profilepage />} />
//               <Route path="*" element={<StudentDashboard />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </StudentThemeProvider>
//   );
// }

// // ---------------- Register Wrapper ----------------
// function EnrollpageWrapper() {
//   const navigate = useNavigate();

//   const handleRegisterSuccess = () => {
//     navigate('/profile-form');
//   };

//   return <Enrollpage onRegisterSuccess={handleRegisterSuccess} />;
// }

// // ---------------- Main App ----------------
// function App() {
//   return (
//     <Router>
//       <ThemeProvider>
//         <DataProvider>
//           <ModalProvider>
//             <Routes>
//               {/* Public */}
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<EnrollpageWrapper />} />
//               <Route path="/forgot" element={<ForgotPassword />} />

//               {/* Standalone profile form */}
//               <Route path="/profile-form" element={<Profileform />} />

//               {/* Recruiter Dashboard */}
//               <Route path="/recruiter" element={<Layout />}>
//                 <Route index element={<Navigate to="dashboard" replace />} />
//                 <Route path="dashboard" element={<Dashboard />} />
//                 <Route path="candidates" element={<CandidatesView />} />
//                 <Route path="candidates/:id/details" element={<CandidateDetails />} />
//                 <Route path="candidates/:id/analysis" element={<CandidateAnalysis />} />
//                 <Route path="positions" element={<PositionsView />} />
//                 <Route path="interviews" element={<InterviewsView />} />
//                 <Route path="settings" element={<SettingsView />} />
//               </Route>

//               {/* Other Dashboards */}
//               <Route path="/new-dashboard/*" element={<NewDashboard />} />
//               <Route path="/student-dashboard/*" element={<StudentLayout />} />

//               {/* Admin Dashboard */}
//               <Route path="/admindashboard" element={<AdminDashboard />} />
//               <Route path="/Vidyardi_Students" element={<VidyardiStudents />} />
//               <Route path="/Manage_Students" element={<AdminManageStudents />} />
//               <Route path="/Admin_Colleges" element={<AdminColleges />} />
//               <Route path="/Manage_Colleges" element={<ManageColleges />} />
//               <Route path="/Manage_Recruiters" element={<ManageRecuriters />} />
//               <Route path="/Admin_Recruiters" element={<AdminRecuriters />} />
//               <Route path="/admindashboard/settings" element={<AdminSettings />} />

//               {/* 404 */}
//               <Route path="*" element={<h2>404 - Page Not Found</h2>} />
//             </Routes>
//           </ModalProvider>
//         </DataProvider>
//       </ThemeProvider>
//     </Router>
//   );
// }

// export default App;




























// // App.js
// import React from "react";
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
//   Navigate,
//   useNavigate,
// } from "react-router-dom";

// // Recruiter Contexts
// import { ThemeProvider } from "./recruiter-dashboard/context/ThemeContext";
// import { DataProvider } from "./recruiter-dashboard/context/DataContext";
// import { ModalProvider } from "./recruiter-dashboard/context/ModalContext";

// // Student Theme Context
// import { ThemeProvider as StudentThemeProvider } from "./student-dashboard/context/Themecontext";

// // ---------------- Recruiter Dashboard ----------------
// import Layout from "./recruiter-dashboard/layout/Layout";
// import Dashboard from "./recruiter-dashboard/dashboard/Dashboard";
// import CandidatesView from "./recruiter-dashboard/candidates/CandidatesView";
// import CandidateDetails from "./recruiter-dashboard/candidates/CandidateDetails";
// import CandidateAnalysis from "./recruiter-dashboard/candidates/CandidateAnalysis";
// import PositionsView from "./recruiter-dashboard/positions/PositionsView";
// import InterviewsView from "./recruiter-dashboard/interviews/InterviewsView";
// import SettingsView from "./recruiter-dashboard/settings/SettingsView";

// // ---------------- Public Pages ----------------
// import Home from "./components/home/Home";
// import About from "./components/about/About";
// import Contact from "./components/contact/Contact";
// import Services from "./components/services/Services";
// import Login from "./components/auth/login/Login";
// import Enrollpage from "./components/auth/register/Register";
// import ForgotPassword from "./components/auth/forgot_password/Forgot";

// // ---------------- Other Dashboards ----------------
// import NewDashboard from "./new-dashboard/NewDashboard";

// // ---------------- Admin Dashboard ----------------
// import AdminDashboard from "./admin-dashboard/admincomponents/admindash/AdminDashboard";
// import VidyardiStudents from "./admin-dashboard/pages/AdminStudents";
// import AdminManageStudents from "./admin-dashboard/pages/ManageStudents";
// import AdminColleges from "./admin-dashboard/pages/AdminColleges";
// import ManageColleges from "./admin-dashboard/pages/ManageColleges";
// import ManageRecuriters from "./admin-dashboard/pages/ManageRecruiters";
// import AdminRecuriters from "./admin-dashboard/pages/AdminRecruiters";
// import AdminSettings from "./admin-dashboard/pages/Settings";

// // ---------------- Student Dashboard ----------------
// import Header from "./student-dashboard/s-components/layouts/Header";
// import Sidebar from "./student-dashboard/s-components/layouts/Sidebar";
// import StudentDashboard from "./student-dashboard/s-components/dashboard/Dashboard";
// import Courses from "./student-dashboard/s-components/courses/Courses";
// import Assignments from "./student-dashboard/s-components/assignments/Assignments";
// import Attendance from "./student-dashboard/s-components/attendance/Attendance";
// import Events from "./student-dashboard/s-components/events/Events";
// import Placements from "./student-dashboard/s-components/placements/Placements";
// import Projects from "./student-dashboard/s-components/projects/Projects";
// import Settings from "./student-dashboard/s-components/settings/Settings";



// // Profile components
// import Profilepage from "./student-dashboard/s-components/profile-page/Profilepage.jsx";
// import Profileform from "./student-dashboard/s-components/std profile-form/profileform.jsx";

// // ---------------- Student Layout ----------------
// function StudentLayout() {
//   const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
//   const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile);

//   React.useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 768;
//       setIsMobile(mobile);
//       if (!mobile && !sidebarOpen) {
//         setSidebarOpen(true);
//       }
//     };
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, [sidebarOpen]);

//   return (
//     <StudentThemeProvider>
//       <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
//         <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
//         <div className="flex flex-col flex-1 overflow-hidden">
//           <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
//           <main className="flex-1 overflow-y-auto p-4 md:p-6">
//             <Routes>
//               <Route path="/" element={<StudentDashboard />} />
//               <Route path="/courses" element={<Courses />} />
//               <Route path="/assignments" element={<Assignments />} />
//               <Route path="/attendance" element={<Attendance />} />
//               <Route path="/events" element={<Events />} />
//               <Route path="/placements" element={<Placements />} />
//               <Route path="/projects" element={<Projects />} />
//               <Route path="/settings" element={<Settings />} />
//               <Route path="/profile" element={<Profilepage />} />
//               <Route path="*" element={<StudentDashboard />} />
//             </Routes>
//           </main>
//         </div>
//       </div>
//     </StudentThemeProvider>
//   );
// }

// // ---------------- Register Wrapper ----------------
// function EnrollpageWrapper() {
//   const navigate = useNavigate();
//   const handleRegisterSuccess = () => {
//     navigate("/profile-form");
//   };
//   return <Enrollpage onRegisterSuccess={handleRegisterSuccess} />;
// }

// // ---------------- Main App ----------------
// function App() {
//   return (
//     <Router>
//       <ThemeProvider>
//         <DataProvider>
//           <ModalProvider>
//             <Routes>
//               {/* ---------- Public ---------- */}
//               <Route path="/" element={<Home />} />
//               <Route path="/about" element={<About />} />
//               <Route path="/contact" element={<Contact />} />
//               <Route path="/services" element={<Services />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<EnrollpageWrapper />} />
//               <Route path="/forgot" element={<ForgotPassword />} />
//               <Route path="/profile-form" element={<Profileform />} />

//               {/* ---------- Recruiter Dashboard ---------- */}
//               <Route path="/recruiter" element={<Layout />}>
//                 <Route index element={<Navigate to="dashboard" replace />} />
//                 <Route path="dashboard" element={<Dashboard />} />
//                 <Route path="candidates" element={<CandidatesView />} />
//                 <Route path="candidates/:id/details" element={<CandidateDetails />} />
//                 <Route path="candidates/:id/analysis" element={<CandidateAnalysis />} />
//                 <Route path="positions" element={<PositionsView />} />
//                 <Route path="interviews" element={<InterviewsView />} />
//                 <Route path="settings" element={<SettingsView />} />
//               </Route>

//               {/* ---------- Student Dashboard ---------- */}
//               <Route path="/student-dashboard/*" element={<StudentLayout />} />

//               {/* ---------- Admin Dashboard ---------- */}
//               <Route path="/admindashboard" element={<AdminDashboard />} />
//               <Route path="/Vidyardi_Students" element={<VidyardiStudents />} />
//               <Route path="/Manage_Students" element={<AdminManageStudents />} />
//               <Route path="/Admin_Colleges" element={<AdminColleges />} />
//               <Route path="/Manage_Colleges" element={<ManageColleges />} />
//               <Route path="/Manage_Recruiters" element={<ManageRecuriters />} />
//               <Route path="/Admin_Recruiters" element={<AdminRecuriters />} />
//               <Route path="/admindashboard/settings" element={<AdminSettings />} />

//               {/* ---------- Other Dashboard ---------- */}
//               <Route path="/new-dashboard/*" element={<NewDashboard />} />

//               {/* ---------- 404 ---------- */}
//               <Route path="*" element={<h2>404 - Page Not Found</h2>} />
//             </Routes>
//           </ModalProvider>
//         </DataProvider>
//       </ThemeProvider>
//     </Router>
//   );
// }

// export default App;





// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";

// Recruiter Contexts
import { ThemeProvider } from "./recruiter-dashboard/context/ThemeContext";
import { DataProvider } from "./recruiter-dashboard/context/DataContext";
import { ModalProvider } from "./recruiter-dashboard/context/ModalContext";

// Student Theme Context
import { ThemeProvider as StudentThemeProvider } from "./student-dashboard/context/Themecontext";

// Admin Theme Context (New Admin Dashboard)
import { ThemeProvider as AdminThemeProvider } from "./new-admindashboard/context/ThemeContext.jsx";

// ---------------- Recruiter Dashboard ----------------
import Layout from "./recruiter-dashboard/layout/Layout";
import Dashboard from "./recruiter-dashboard/dashboard/Dashboard";
import CandidatesView from "./recruiter-dashboard/candidates/CandidatesView";
import CandidateDetails from "./recruiter-dashboard/candidates/CandidateDetails";
import CandidateAnalysis from "./recruiter-dashboard/candidates/CandidateAnalysis";
import PositionsView from "./recruiter-dashboard/positions/PositionsView";
import InterviewsView from "./recruiter-dashboard/interviews/InterviewsView";
import SettingsView from "./recruiter-dashboard/settings/SettingsView";

// ---------------- Public Pages ----------------
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Services from "./components/services/Services";
import Login from "./components/auth/login/Login";
import Enrollpage from "./components/auth/register/Register";
import ForgotPassword from "./components/auth/forgot_password/Forgot";

// ---------------- Other Dashboards ----------------
import NewDashboard from "./new-dashboard/NewDashboard";

// ---------------- Admin Dashboard (Old) ----------------
import AdminDashboard from "./admin-dashboard/admincomponents/admindash/AdminDashboard";
import VidyardiStudents from "./admin-dashboard/pages/AdminStudents";
import AdminManageStudents from "./admin-dashboard/pages/ManageStudents";
import AdminColleges from "./admin-dashboard/pages/AdminColleges";
import ManageColleges from "./admin-dashboard/pages/ManageColleges";
import ManageRecuriters from "./admin-dashboard/pages/ManageRecruiters";
import AdminRecuriters from "./admin-dashboard/pages/AdminRecruiters";
import AdminSettings from "./admin-dashboard/pages/Settings";

// ---------------- Student Dashboard ----------------
import Header from "./student-dashboard/s-components/layouts/Header";
import Sidebar from "./student-dashboard/s-components/layouts/Sidebar";
import StudentDashboard from "./student-dashboard/s-components/dashboard/Dashboard";
import Courses from "./student-dashboard/s-components/courses/Courses";
import Assignments from "./student-dashboard/s-components/assignments/Assignments";
import Attendance from "./student-dashboard/s-components/attendance/Attendance";
import Events from "./student-dashboard/s-components/events/Events";
import Placements from "./student-dashboard/s-components/placements/Placements";
import Projects from "./student-dashboard/s-components/projects/Projects";
import Settings from "./student-dashboard/s-components/settings/Settings";

// Profile components
import Profilepage from "./student-dashboard/s-components/profile-page/Profilepage.jsx";
import Profileform from "./student-dashboard/s-components/std profile-form/profileform.jsx";

// ---------------- New Admin Dashboard (Separated) ----------------
import AdminRoutes from "./new-admindashboard/AdminRoutes";

// ---------------- Student Layout ----------------
function StudentLayout() {
  const [isMobile, setIsMobile] = React.useState(window.innerWidth < 768);
  const [sidebarOpen, setSidebarOpen] = React.useState(!isMobile);

  React.useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 768;
      setIsMobile(mobile);
      if (!mobile && !sidebarOpen) {
        setSidebarOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [sidebarOpen]);

  return (
    <StudentThemeProvider>
      <div className="flex h-screen w-full bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Sidebar isOpen={sidebarOpen} setIsOpen={setSidebarOpen} />
        <div className="flex flex-col flex-1 overflow-hidden">
          <Header toggleSidebar={() => setSidebarOpen(!sidebarOpen)} />
          <main className="flex-1 overflow-y-auto p-4 md:p-6">
            <Routes>
              <Route path="/" element={<StudentDashboard />} />
              <Route path="/courses" element={<Courses />} />
              <Route path="/assignments" element={<Assignments />} />
              <Route path="/attendance" element={<Attendance />} />
              <Route path="/events" element={<Events />} />
              <Route path="/placements" element={<Placements />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/settings" element={<Settings />} />
              <Route path="/profile" element={<Profilepage />} />
              <Route path="*" element={<StudentDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </StudentThemeProvider>
  );
}

// ---------------- Register Wrapper ----------------
function EnrollpageWrapper() {
  const navigate = useNavigate();
  const handleRegisterSuccess = () => {
    navigate("/profile-form");
  };
  return <Enrollpage onRegisterSuccess={handleRegisterSuccess} />;
}

// ---------------- Main App ----------------
function App() {
  return (
    <Router>
      <ThemeProvider>
        <DataProvider>
          <ModalProvider>
            <Routes>
              {/* ---------- Public ---------- */}
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<EnrollpageWrapper />} />
              <Route path="/forgot" element={<ForgotPassword />} />
              <Route path="/profile-form" element={<Profileform />} />

              {/* ---------- Recruiter Dashboard ---------- */}
              <Route path="/recruiter" element={<Layout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="candidates" element={<CandidatesView />} />
                <Route path="candidates/:id/details" element={<CandidateDetails />} />
                <Route path="candidates/:id/analysis" element={<CandidateAnalysis />} />
                <Route path="positions" element={<PositionsView />} />
                <Route path="interviews" element={<InterviewsView />} />
                <Route path="settings" element={<SettingsView />} />
              </Route>

              {/* ---------- Student Dashboard ---------- */}
              <Route path="/student-dashboard/*" element={<StudentLayout />} />

              {/* ---------- Old Admin Dashboard ---------- */}
              <Route path="/admindashboard" element={<AdminDashboard />} />
              <Route path="/Vidyardi_Students" element={<VidyardiStudents />} />
              <Route path="/Manage_Students" element={<AdminManageStudents />} />
              <Route path="/Admin_Colleges" element={<AdminColleges />} />
              <Route path="/Manage_Colleges" element={<ManageColleges />} />
              <Route path="/Manage_Recruiters" element={<ManageRecuriters />} />
              <Route path="/Admin_Recruiters" element={<AdminRecuriters />} />
              <Route path="/admindashboard/settings" element={<AdminSettings />} />

              {/* ---------- ✅ New Admin Dashboard with Theme ---------- */}
              <Route
                path="/new-admindashboard/*"
                element={
                  <AdminThemeProvider>
                    <AdminRoutes />
                  </AdminThemeProvider>
                }
              />

              {/* ---------- Other Dashboard ---------- */}
              <Route path="/new-dashboard/*" element={<NewDashboard />} />

              {/* ---------- 404 ---------- */}
              <Route path="*" element={<h2>404 - Page Not Found</h2>} />
            </Routes>
          </ModalProvider>
        </DataProvider>
      </ThemeProvider>
    </Router>
  );
}

export default App;
