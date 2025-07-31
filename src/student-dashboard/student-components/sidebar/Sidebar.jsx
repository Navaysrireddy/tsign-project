import React from "react";
import { NavLink } from "react-router-dom";
import {
  FaTachometerAlt,
  FaBook,
  FaClipboardList,
  FaFolder,
 
  FaUser
} from "react-icons/fa";
import "./Sidebar.css";
import image from '../../../assests/TG-SIGN (2).png';

const Sidebar = () => {
  return (
    <div className="student-sidebar">
      <div className="logo">
        <img src={image} alt="TS-SIGN Logo" />
        
      </div>

      <ul className="nav-list">
        
        <li><NavLink to="/studentdashboard"><FaTachometerAlt /> Dashboard</NavLink></li>
        <li><NavLink to="/academics"><FaBook /> Academics</NavLink></li>
        <li><NavLink to="/assessments"><FaClipboardList /> Assessments</NavLink></li>
        <li><NavLink to="/projects"><FaFolder /> Projects</NavLink></li>
        {/* <li><NavLink to="/resume"><FaTools /> Resume Builder</NavLink></li> */}
        <li><NavLink to="/settings"><FaUser /> Settings</NavLink></li>
      </ul>

      <div className="student-info">
        {/* <p>Name XXX</p>
        <p>College Name</p> */}
      </div>
    </div>
  );
};

export default Sidebar;