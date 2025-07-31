import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
// import Logo from '../../../assests/TG-SIGN (2).png';
import { 
  FiSearch, FiBell, FiChevronDown, FiExternalLink,
  FiUsers, FiBriefcase, FiDollarSign, FiTrendingUp 
} from 'react-icons/fi';
import { 
  RiDashboardLine, RiLogoutCircleRLine, RiUserLine 
} from 'react-icons/ri';

const Sidebar = () => {
  return (
    // <aside className="sidebar">
    //   <a href="/" ><img src={Logo} alt="" class='logo-img'/></a>
    //   <h2 className="logo">College</h2>
    //   <nav className="nav">
    //     <Link to="/college-dashboard" >Dashboard</Link>
    //     <Link to="/students">Students</Link>
    //     <Link to="/placements">Placements</Link>
    //     <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    //     <a href="/settings">Settings</a>
    //   </nav>
    // </aside>

    <div className="sidebar">
            <div className="sidebar-header">
              <h1><span className="highlight">College</span> Analytics</h1>
            </div>
            
            <nav className="sidebar-nav">
              <div className="nav-item active">
                <RiDashboardLine className="nav-icon" />
                <span><Link to="/college-dashboard" >Dashboard</Link></span>
              </div>
              <div className="nav-item">
                <FiUsers className="nav-icon" />
                <span><Link to="/students">Students</Link></span>
              </div>
              <div className="nav-item">
                <FiBriefcase className="nav-icon" />
                <span><Link to="/placements">Placements</Link></span>
              </div>
              <div className="nav-item">
                <FiDollarSign className="nav-icon" />
                <span>Financials</span>
              </div>
            </nav>
    
            <div className="user-profile-sidebar">
              <div className="avatar-gradient">JD</div>
              <div className="user-info">
                <span className="username">John Doe</span>
                <span className="user-role">Admin</span>
              </div>
            </div>
          </div>
  );
};

export default Sidebar;