import React, { useState } from "react";
import "./Settings.css";
import Sidebar from '../../student-components/sidebar/Sidebar';


const SettingsPage = () => {
  const [settings, setSettings] = useState({
    darkMode: false,
    notifications: true,
    fullName: "Student Name",
    email: "abc@example.com",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Settings:", settings);
    alert("Settings saved successfully!");
  };

  return (
    <div>
        <Sidebar/>
    <div className="settings-page">
      <h2 className="settings-title">User Settings</h2>

      {/* Profile Section */}
      <section className="settings-section">
        <h3>Profile Information</h3>
        <form className="settings-form" onSubmit={handleSubmit}>
          <label>
            Full Name:
            <input
              type="text"
              name="fullName"
              value={settings.fullName}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Email Address:
            <input
              type="email"
              name="email"
              value={settings.email}
              onChange={handleInputChange}
            />
          </label>

          <label>
            Change Password:
            <input
              type="password"
              name="password"
              placeholder="New Password"
              value={settings.password}
              onChange={handleInputChange}
            />
          </label>

          <button type="submit" className="save-button">
            Save Changes
          </button>
        </form>
      </section>
    </div>
    </div>
  );
};

export default SettingsPage;