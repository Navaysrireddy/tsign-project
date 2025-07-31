import React, { useState } from "react";
import "./Settings.css";

const GeneralSettings = ({ phone, setPhone, personalEmail, setPersonalEmail }) => {
  const [isEditingPhone, setIsEditingPhone] = useState(false);
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [tempPhone, setTempPhone] = useState(phone);
  const [tempEmail, setTempEmail] = useState(personalEmail);

  const savePhone = () => {
    setPhone(tempPhone);
    setIsEditingPhone(false);
  };

  const saveEmail = () => {
    setPersonalEmail(tempEmail);
    setIsEditingEmail(false);
  };

  return (
    <div className="general-settings">
      {/* Phone Number */}
      <p>
        <strong>Phone Number:</strong>{" "}
        {isEditingPhone ? (
          <>
            <input
              type="text"
              value={tempPhone}
              onChange={(e) => setTempPhone(e.target.value)}
              className="input-edit"
            />
            <button className="save-btn" onClick={savePhone}>Save</button>
            <button className="cancel-btn" onClick={() => setIsEditingPhone(false)}>Cancel</button>
          </>
        ) : (
          <>
            {phone}
            <span className="edit-link" onClick={() => {
              setTempPhone(phone);
              setIsEditingPhone(true);
            }}>✎ Edit</span>
          </>
        )}
      </p>

      {/* Personal Email */}
      <p>
        <strong>Primary Email Address:</strong>{" "}
        {isEditingEmail ? (
          <>
            <input
              type="email"
              value={tempEmail}
              onChange={(e) => setTempEmail(e.target.value)}
              className="input-edit"
            />
            <button className="save-btn" onClick={saveEmail}>Save</button>
            <button className="cancel-btn" onClick={() => setIsEditingEmail(false)}>Cancel</button>
          </>
        ) : (
          <>
            {personalEmail} ✅
            <span className="edit-link" onClick={() => {
              setTempEmail(personalEmail);
              setIsEditingEmail(true);
            }}>✎ Edit</span>
          </>
        )}
      </p>

      <small>You can use both your primary and personal email address to login.</small>
    </div>
  );
};

export default GeneralSettings;