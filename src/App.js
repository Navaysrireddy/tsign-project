 import React from 'react'; 
 import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './std-dashboard/context/ThemeContext';
import DashboardLayout from './std-dashboard/components/DashboardLayout'; // This is your new enhanced student dashboard layout
import SAcademics from './std-dashboard/pages/s-academics/SAcademics'; // This is your new enhanced student dashboard layout
import PlacementInsights from './std-dashboard/pages/placement-insights/PlacementInsights';
import CurrentCourses from './std-dashboard/pages/current-courses/CurrentCourses';
import TechNews from './std-dashboard/pages/tech-news/TechNews';
import UpAssessments from './std-dashboard/pages/upcoming-assessments/UpAssessments';



 import HomePage from './components/home/Home';
import About from './components/about/About';
import Services from './components/services/Services';
import Forgot from './components/auth/forgot_password/Forgot';
import Register from './components/auth/register/Register';
import Login from './components/auth/login/Login';
import Contact from './components/contact/Contact';
// import HResume from './components/h-resume/HResume';
import HTechNews from './components/htechnews/HTechNews';
// import CollegeProfile from './college-dashboard/profile/ProfilePage';
// import Cdb from './college-dashboard/college-components/Dashboard';
// import Placements from'./college-dashboard/placements/Placements';
// import StudentsPlacements from './college-dashboard/students-placements/StudentsPlacements';
// import Students from './college-dashboard/students/Students';
// import ProfileForm from './college-dashboard/profile-form/ProfileForm';
import Settings from './college-dashboard/settings/Settings';




import StudentDashboard from './student-dashboard/StudentDashboard';
import Academics from './student-dashboard/pages/academics/Academics';
import Assessments from './student-dashboard/pages/assesments/Assessments';
import Projects from './student-dashboard/pages/projects/Projects';
import StudentSettings from './student-dashboard/pages/settings/Settings';
import StudentProfileForm from './student-dashboard/pages/profile-form/StudentProfileForm';
import StudentProfilePage from './student-dashboard/pages/profile-page/StudentProfilePage';





import RecruiterPForm from './recruiter-dashboard/pages/profile-form/RecruiterPForm';



// import {Sidebar as StudentSidebar} from './std-dashboard/Sidebar';
// import { Dashboard as StudentDashboard } from './std-dashboard/Dashboard';
// import { Academics as StudentAcademics } from './std-dashboard/Academics';
// import { Assessments as StudentAssessments } from './std-dashboard/Assessments';
// import { Projects as StudentProjects } from './std-dashboard/Projects';
// import { Settings as StudentSettings } from './std-dashboard/Settings';




import AdminDashboard from './admin-dashboard/admincomponents/admindash/AdminDashboard';
import VidyardiStudents from './admin-dashboard/pages/AdminStudents';
import AdminManageStudents from './admin-dashboard/pages/ManageStudents';
import AdminColleges from './admin-dashboard/pages/AdminColleges';
import ManageColleges from './admin-dashboard/pages/ManageColleges';
import ManageRecuriters from './admin-dashboard/pages/ManageRecruiters';
import AdminRecuriters from './admin-dashboard/pages/AdminRecruiters';


import NewDashboard from './new-dashboard/NewDashboard';




function App() {
  return (
    <Router>
      {/* If Header is common to all pages, place it here */}
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
        {/* <Route path="/h-resume" element={<HResume />} /> */}
        <Route path="/htechnews" element={<HTechNews />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/college-dashboard" element={<Cdb />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot" element={<Forgot />} />
        {/* <Route path="/college-profile" element={<CollegeProfile />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/students-placements" element={<StudentsPlacements />} />
        <Route path="/students" element={<Students />} />
        <Route path="/profile-form" element={<ProfileForm />} />*/}
        <Route path="/settings" element={<StudentSettings />} /> 



        <Route path="/student-dashboard" element={<DashboardLayout />} />
        <Route path="/sacademics" element={<SAcademics />} />
        <Route path="/placemet-insights" element={<PlacementInsights />} />
        <Route path="/currentcourses" element={<CurrentCourses />} />
        <Route path="/technews" element={<TechNews />} />
        <Route path="/up-assessments" element={<UpAssessments />} />




        <Route path="/studentdashboard" element={<StudentDashboard />} />
        <Route path="/academics" element={<Academics />} />
        <Route path="/assessments" element={<Assessments />} />
        <Route path="/projects" element={<Projects />} />
        
        <Route path="/studentsettings" element={<Settings />} />
        <Route path="/studentprofileform" element={<StudentProfileForm />} />
        <Route path="/studentprofilepage" element={<StudentProfilePage />} />
        



        <Route path="/recruiter-profile-form" element={<RecruiterPForm />} /> 


      
            {/* <Route path="/studentdashboard" element={<StudentDashboard />} />
            <Route path="/studentacademics" element={<StudentAcademics />} />
            <Route path="/studentassessments" element={<StudentAssessments />} />
            <Route path="/studentprojects" element={<StudentProjects />} />
            <Route path="/studentsettings" element={<StudentSettings />} />*/}
          
            <Route path="*" element={<h2>404 - Not Found</h2>} /> 

        <Route path="/admindashboard" element={<AdminDashboard />} />
        <Route path="/Vidyardi_Students" element={<VidyardiStudents />} />
        <Route path="/Manage_Students" element={<AdminManageStudents />} />
        <Route path="/Admin_Colleges" element={<AdminColleges />} />
        <Route path="/Manage_Colleges" element={<ManageColleges />} />
        <Route path="/Manage_Recruiters" element={<ManageRecuriters />} />
        <Route path="/Admin_Recruiters" element={<AdminRecuriters />} />
        

        <Route path="/new-dashboard/*" element={<NewDashboard />} />


      </Routes>
      </ThemeProvider>
    </Router>
  );
}

export default App;
