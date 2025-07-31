import React, { useState } from "react";
import { FaBell } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; // for navigation
import "./Header.css";

const Header = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

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
    localStorage.clear(); // Optional: clear auth/session data
    navigate("/login");
  };

  return (
    <header className="s-dashboard-header">
      <div className="s-header-left">
        <h2>Welcome, Student</h2>
        <p className="date">{today}</p>
      </div>

      <div className="s-header-right">
        <input type="text" placeholder="Search" className="s-search-input" />
        <FaBell className="s-bell-icon" />

        <div className="s-avatar-container">
          <img
            src="https://ui-avatars.com/api/?name=Student&background=5b2ecc&color=fff"
            alt="Avatar"
            className="s-avatar"
            onClick={toggleDropdown}
          />
          {dropdownOpen && (
            <div className="s-dropdown-menu">
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
