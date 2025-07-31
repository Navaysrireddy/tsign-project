import React from 'react';
import { Link } from 'react-router-dom';
import {
  FaUserGraduate, FaGraduationCap, FaChartLine, 
  FaNewspaper, FaClipboardList, FaBars
} from 'react-icons/fa';
import ThemeToggle from '../../components/ThemeToggle';
import './Sidebar.css';

const Sidebar = ({ isOpen, onClose }) => {
  return (
    <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
      <div className="sidebar-header">
        <h2>EduDash</h2>
        <button 
          className="sidebar-toggle-btn close" 
          onClick={onClose}
          aria-label="Close sidebar"
        >
          <FaBars />
        </button>
      </div>
      <nav className="sidebar-nav">
        <ul>
          <li><Link to="/student-dashboard"><FaUserGraduate /> Dashboard</Link></li>
          <li><Link to="/sacademics"><FaGraduationCap /> Academic Progress</Link></li>
          <li><Link to="/placemet-insights"><FaChartLine /> Placement Insights</Link></li>
          {/* <li><Link to="/currentcourses"><FaBookOpen /> Current Courses</Link></li> */}
          <li><Link to="/technews"><FaNewspaper /> Tech News</Link></li>
          <li><Link to="/up-assessments"><FaClipboardList /> Upcoming Assessments</Link></li>
        </ul>
      </nav>
      <div className="sidebar-footer">
        <ThemeToggle />
      </div>
    </aside>
  );
};

export default Sidebar;