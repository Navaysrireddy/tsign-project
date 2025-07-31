import React, { useState, useEffect } from "react";
import GeneralSettings from "./GeneralSettings";
import ResetPassword from "./ResetPassword";
import "./Settings.css";

const Settings = () => {
  const [activeTab, setActiveTab] = useState("general");

  // Load from localStorage on mount
  const [phone, setPhone] = useState(() => {
    return localStorage.getItem("userPhone") || "+91 8555839617";
  });

  const [personalEmail, setPersonalEmail] = useState(() => {
    return localStorage.getItem("userEmail") || "karnenavyasrireddy@gmail.com";
  });

  // Update localStorage when values change
  useEffect(() => {
    localStorage.setItem("userPhone", phone);
  }, [phone]);

  useEffect(() => {
    localStorage.setItem("userEmail", personalEmail);
  }, [personalEmail]);

  return (
    <div className="settings-container">
      <div className="settings-header">
        <h2>Account Settings</h2>
        <button className="close-button">×</button>
      </div>

      <div className="tab-header">
        <button
          onClick={() => setActiveTab("general")}
          className={activeTab === "general" ? "active" : ""}
        >
          General Settings
        </button>
        <button
          onClick={() => setActiveTab("reset")}
          className={activeTab === "reset" ? "active" : ""}
        >
          Reset Password
        </button>
      </div>

      <div className="tab-content">
        {activeTab === "general" ? (
          <GeneralSettings
            phone={phone}
            setPhone={setPhone}
            personalEmail={personalEmail}
            setPersonalEmail={setPersonalEmail}
          />
        ) : (
          <ResetPassword />
        )}
      </div>
    </div>
  );
};

export default Settings;