// import React from "react";
// import Header from "./Header";
// import Sidebar from "./Sidebar";
// import { Outlet } from "react-router-dom";
// import { useTheme } from "../../context/ThemeContext";

// const Layout = () => {
//   const { theme } = useTheme();

//   return (
//     <div
//       className={`min-h-screen ${
//         theme === "dark"
//           ? "bg-[#121212] text-[#E5E7EB]"
//           : "bg-gray-50 text-[#1F2937]"
//       }`}
//     >
//       <Header />
//       <Sidebar />
//       <main className="pt-16 pl-16 lg:pl-64 min-h-screen">
//         <div className="p-6">
//           <Outlet /> {/* child routes render here */}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default Layout;





import React, { useState } from "react";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

const Layout = () => {
  const { theme } = useTheme();
  const [collapsed] = useState(false); // desktop collapse
  const [sidebarOpen, setSidebarOpen] = useState(false); // mobile toggle

  return (
    <div
      className={`min-h-screen ${
        theme === "dark"
          ? "bg-[#121212] text-[#E5E7EB]"
          : "bg-gray-50 text-[#1F2937]"
      }`}
    >
      {/* Header needs sidebarOpen setter */}
      <Header sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Sidebar gets both collapsed + mobile toggle */}
      <Sidebar
        collapsed={collapsed}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main content */}
      <main
        className={`pt-16 min-h-screen transition-all duration-300 
          ${collapsed ? "md:pl-16" : "md:pl-64"} pl-0`}
      >
        <div className="p-6">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
