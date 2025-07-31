import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./AdminHeader.css"; // Use this for both admin and student styles

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const isAdmin = location.pathname.startsWith("/admindashboard");

  const today = new Date().toLocaleDateString("en-IN", {
    weekday: "long",
    day: "numeric",
    month: "short",
    year: "numeric",
  });

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  const handleProfileClick = () => {
    navigate("/studentprofilepage");
  };

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return isAdmin ? (
    <div className="admin-header">
      <div>
        <h1 className="admin-header-title">Dashboard Overview</h1>
        <p className="admin-header-subtitle">Welcome back, Admin</p>
      </div>
      <div>
        <select className="admin-header-select">
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Last Year</option>
        </select>
      </div>
    </div>
  ) : (
    <header className="dashboard-header">
      <div className="header-left">
        <h2>Welcome, Student</h2>
        <p className="date">{today}</p>
      </div>

      <div className="header-right">
        <input type="text" placeholder="Search" className="search-input" />
        <FaBell className="bell-icon" />

        <div className="avatar-container">
          <img
            src="https://ui-avatars.com/api/?name=Student&background=5b2ecc&color=fff"
            alt="Avatar"
            className="avatar"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="dropdown-menu">
              <button onClick={handleProfileClick}>Profile</button>
              <button onClick={handleLogout}>Logout</button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;