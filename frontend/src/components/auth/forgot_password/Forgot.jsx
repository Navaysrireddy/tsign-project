// import React, { useState } from "react";
 
// const ForgotPassword = () => {
//   const [email, setEmail] = useState("");
 
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Password reset link sent to:", email);
//     alert("If this email is registered, a password reset link will be sent.");
//   };
 
//   return (
//     <div className="max-w-md mx-auto my-16 sm:my-8 p-10 sm:p-8 bg-gradient-to-br from-white to-[#e3e8ff] rounded-2xl shadow-2xl font-sans text-center">
//       {/* Heading */}
//       <h2 className="text-2xl sm:text-xl mb-4 text-slate-800 font-semibold">
//         Forgot Your Password?
//       </h2>
 
//       {/* Paragraph */}
//       <p className="text-sm sm:text-base text-slate-700 mb-8">
//         Enter your registered email address and we’ll send you a password reset
//         link.
//       </p>
 
//       {/* Form */}
//       <form onSubmit={handleSubmit} className="flex flex-col gap-6">
//         <div className="w-full text-left">
//           <label className="block text-sm font-semibold text-slate-800 mb-2">
//             Email address
//           </label>
//           <input
//             type="email"
//             placeholder="your@email.com"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             className="w-full p-3 rounded-xl border border-slate-300 bg-slate-50 text-slate-800 text-base focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-400 transition"
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-xl font-semibold text-base transition"
//         >
//           Send Reset Link
//         </button>
//       </form>
//     </div>
//   );
// };
 
// export default ForgotPassword;
 
 






import React, { useState } from "react";

const ForgotPassword = () => {
  const [mobile, setMobile] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const mobileRegex = /^[6-9]\d{9}$/;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!mobileRegex.test(mobile)) {
      setError("Please enter a valid 10-digit mobile number starting with 6-9.");
      return;
    }
    setError("");
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/send-reset-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ mobile }),
      });

      const data = await response.json();

      if (data.success) {
        alert(`Reset link sent successfully to ${mobile}`);
        setMobile("");
      } else {
        alert(data.message || "Failed to send reset link.");
      }
    } catch {
      alert("Error sending reset link, please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto my-16 p-10 bg-gradient-to-br from-white to-[#d0dafc] rounded-2xl shadow-xl font-sans text-center">
      <h2 className="text-3xl mb-5 font-bold text-indigo-700">Forgot Your Password?</h2>
      <p className="mb-8 text-indigo-600">
        Enter your registered mobile number to receive a password reset link.
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="text-left">
          <label className="block mb-2 font-semibold text-indigo-800">Mobile Number</label>
          <input
            type="tel"
            placeholder="Enter 10-digit mobile"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength={10}
            className={`w-full p-3 rounded-xl border ${
              error ? "border-red-500" : "border-indigo-300"
            } bg-indigo-50 text-indigo-900 text-base focus:outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-400 transition`}
            required
          />
          {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 rounded-xl font-semibold text-base transition disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Reset Link"}
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
