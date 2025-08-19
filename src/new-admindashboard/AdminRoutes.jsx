// import React from "react";
// import { Routes, Route, Navigate } from "react-router-dom";
// import { Outlet } from "react-router-dom";

// // Layout
// import Layout from "./ad-components/layout/Layout";

// // Pages
// import Dashboard from "./pages/Dashboard";
// import Colleges from "./pages/Colleges";
// import ManageColleges from "./pages/ManageColleges";
// import ManageRecruiters from "./pages/ManageRecruiters";
// import ManageStudents from "./pages/ManageStudents";
// import Recruiters from "./pages/Recruiters";
// import Students from "./pages/Students";
// import Settings from "./pages/Settings";

// /**
//  * AdminRoutes.jsx
//  * Wraps all admin dashboard routes under `/new-admindashboard/*`
//  */
// const AdminRoutes = () => {
//   return (
//     <Routes>
//       {/* Layout wrapper */}
//       <Route path="/" element={<Layout />}>
//         {/* Default redirect to dashboard */}
//         <Route index element={<Navigate to="dashboard" replace />} />

//         {/* Dashboard */}
//         <Route path="dashboard" element={<Dashboard />} />

//         {/* Colleges */}
//         <Route path="colleges" element={<Colleges />} />
//         <Route path="manage-colleges" element={<ManageColleges />} />

//         {/* Recruiters */}
//         <Route path="recruiters" element={<Recruiters />} />
//         <Route path="manage-recruiters" element={<ManageRecruiters />} />

//         {/* Students */}
//         <Route path="students" element={<Students />} />
//         <Route path="manage-students" element={<ManageStudents />} />

//         {/* Settings */}
//         <Route path="settings" element={<Settings />} />

//         {/* Catch-all for unknown admin routes */}
//         <Route path="*" element={<h2>Admin Page Not Found</h2>} />
//       </Route>
//     </Routes>
//   );
// };

// export default AdminRoutes;




import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Outlet } from "react-router-dom";

// Layout
import Layout from "./ad-components/layout/Layout";

// Pages
import { Dashboard } from "./pages/Dashboard";
import Colleges from "./pages/Colleges";
import ManageColleges from "./pages/ManageColleges";
import ManageRecruiters from "./pages/ManageRecruiters";
import ManageStudents from "./pages/ManageStudents";
import Recruiters from "./pages/Recruiters";
import { Students } from "./pages/Students";
import Settings from "./pages/Settings";

/**
 * AdminRoutes.jsx
 * Wraps all admin dashboard routes under `/new-admindashboard/*`
 */
const AdminRoutes = () => {
  return (
    <Routes>
      {/* Layout wrapper */}
      <Route path="/" element={<Layout />}>
        {/* Default redirect to dashboard */}
        <Route index element={<Navigate to="dashboard" replace />} />

        {/* Dashboard */}
        <Route path="dashboard" element={<Dashboard />} />

        {/* Colleges */}
        <Route path="colleges" element={<Colleges />} />
        <Route path="manage-colleges" element={<ManageColleges />} />

        {/* Recruiters */}
        <Route path="recruiters" element={<Recruiters />} />
        <Route path="manage-recruiters" element={<ManageRecruiters />} />

        {/* Students */}
        <Route path="students" element={<Students />} />
        <Route path="manage-students" element={<ManageStudents />} />

        {/* Settings */}
        <Route path="settings" element={<Settings />} />

        {/* Catch-all for unknown admin routes */}
        <Route path="*" element={<h2>Admin Page Not Found</h2>} />
      </Route>
    </Routes>
  );
};

export default AdminRoutes;
