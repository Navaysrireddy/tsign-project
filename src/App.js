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
import Resume from "./student-dashboard/s-components/resume/Resume.jsx";

// ---------------- New Admin Dashboard (Separated) ----------------
import AdminRoutes from "./new-admindashboard/AdminRoutes";

// Student Layout with Sidebar
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
              <Route index element={<StudentDashboard />} />
              <Route path="courses" element={<Courses />} />
              <Route path="assignments" element={<Assignments />} />
              <Route path="attendance" element={<Attendance />} />
              <Route path="events" element={<Events />} />
              <Route path="placements" element={<Placements />} />
              <Route path="projects" element={<Projects />} />
              <Route path="settings" element={<Settings />} />
              {/* Profile inside layout has sidebar */}
              <Route path="profile" element={<Profilepage />} />
              <Route path="resume" element={<Resume />}/>
              <Route path="*" element={<StudentDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </StudentThemeProvider>
  );
}

// Standalone StudentProfilePage without sidebar
// used for route /studentprofilepage
// to show profile page only, no sidebar
function StandaloneStudentProfile() {
  return <Profilepage />;
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

              {/* Redirect /Profile and /profile to standalone student profile without sidebar */}
              <Route path="/Profile" element={<StandaloneStudentProfile />} />
              

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

              {/* ---------- Student Dashboard with sidebar ---------- */}
              <Route path="/student-dashboard/*" element={<StudentLayout />} />

              {/* ---------- New Admin Dashboard with Theme ---------- */}
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
