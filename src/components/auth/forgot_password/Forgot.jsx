import React, { useState } from "react";
 
const ForgotPassword = () => {
  const [email, setEmail] = useState("");
 
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Password reset link sent to:", email);
    alert("If this email is registered, a password reset link will be sent.");
  };
 
  return (
    <div className="max-w-md mx-auto my-16 sm:my-8 p-10 sm:p-8 bg-gradient-to-br from-white to-[#e3e8ff] rounded-2xl shadow-2xl font-sans text-center">
      {/* Heading */}
      <h2 className="text-2xl sm:text-xl mb-4 text-slate-800 font-semibold">
        Forgot Your Password?
      </h2>
 
      {/* Paragraph */}
      <p className="text-sm sm:text-base text-slate-700 mb-8">
        Enter your registered email address and we’ll send you a password reset
        link.
      </p>
 
      {/* Form */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="w-full text-left">
          <label className="block text-sm font-semibold text-slate-800 mb-2">
            Email address
          </label>
          <input
            type="email"
            placeholder="your@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold text-base transition"
        >
          Send Reset Link
        </button>
      </form>
    </div>
  );
};
 
export default ForgotPassword;
 
 