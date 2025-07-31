// admin-dashboard/admincomponents/adminsidebar/AdminSidebar.jsx

import React from "react";
import { Link } from "react-router-dom";
import "./AdminSidebar.css";
import Logo from '../../../assests/TG-SIGN (2).png';


const AdminSidebar = () => {
  return (
    <aside className="sidebar">
      <Link to="/admindashboard">
        <img src={Logo} alt="TG Sign Logo" className="logo-img" />
      </Link>
      <h3 className="logo">Admin</h3>

      <nav className="nav">
        <Link to="/admindashboard">Dashboard</Link>
        <Link to="/Vidyardi_Students">Students</Link>
        <Link to="/Admin_Colleges">Colleges</Link>
        <Link to="/Admin_Recruiters">Recruiters</Link>
        <Link to="/admindashboard/settings" className="settings-link">Settings</Link>
       
      </nav>
    </aside>
  );
};

export default AdminSidebar;