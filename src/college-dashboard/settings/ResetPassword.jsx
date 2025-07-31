import React from "react";
import "./Settings.css"; // optional: for shared styles

const ResetPassword = () => {
  return (
    <div className="reset-password">
      <h3>Reset Your Password</h3>
      <form>
        <div>
          <label htmlFor="currentPassword">Current Password</label>
          <input type="password" id="currentPassword" />
        </div>
        <div>
          <label htmlFor="newPassword">New Password</label>
          <input type="password" id="newPassword" />
        </div>
        <div>
          <label htmlFor="confirmPassword">Confirm New Password</label>
          <input type="password" id="confirmPassword" />
        </div>
        <button type="submit">Update Password</button>
      </form>
    </div>
  );
};

export default ResetPassword;