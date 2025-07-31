import React, { useState } from "react";
import "./Forgot.css"; // optional styling

const ForgotPassword = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here you would typically trigger an API call
    console.log("Password reset link sent to:", email);
    alert("If this email is registered, a password reset link will be sent.");
  };

  return (
    <div className="forgot-password-container">
      <h2>Forgot Your Password?</h2>
      <p>Enter your registered email address and we’ll send you a password reset link.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Email address</label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <button type="submit">Send Reset Link</button>
      </form>
    </div>
  );
};

export default ForgotPassword;