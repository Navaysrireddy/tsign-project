
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import TsignLogo from '../../../assests/TG-SIGN (2).png';
import backgroundImg from '../../../assests/background.png';

const Login = () => {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
    role: '',
  });
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const mobileRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    const newErrors = {};
    const { identifier, password, role } = loginData;

    if (!role) {
      newErrors.role = 'Please select a role to login';
    }

    if (!identifier) {
      newErrors.identifier = 'Enter email or mobile number';
    } else if (role === 'student') {
      if (!emailRegex.test(identifier) && !mobileRegex.test(identifier)) {
        newErrors.identifier = 'Enter valid email or mobile number';
      }
    } else if (role === 'college') {
      if (!emailRegex.test(identifier) || !identifier.includes('college')) {
        newErrors.identifier = 'Use college email (must include "college")';
      }
    } else if (role === 'recruiter') {
      if (!emailRegex.test(identifier) || !identifier.includes('recruiter')) {
        newErrors.identifier = 'Use recruiter email (must include "recruiter")';
      }
    } else if (role === 'admin') {
      if (!emailRegex.test(identifier) || !identifier.includes('admin')) {
        newErrors.identifier = 'Use admin email (must include "admin")';
      }
      if (!password) {
        newErrors.password = 'Password is required';
      }
    }

    if (!role.includes('admin') && !otpSent) {
      if (!password) {
        newErrors.password = 'Password required';
      } else if (password.length < 6) {
        newErrors.password = 'Password must be at least 6 characters long';
      }
    }

    if (!rememberMe) {
      newErrors.rememberMe = 'You must check Remember me';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const sendOtp = async () => {
    if (!mobileRegex.test(loginData.identifier)) {
      setErrors({ identifier: 'Enter valid mobile number for OTP' });
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/send-otp', {
        mobile: loginData.identifier,
      });
      setOtpSent(true);
      alert('OTP sent to mobile number');
    } catch {
      alert('Failed to send OTP');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);

    const adminEmail = 'admin@example.com';
    const adminPassword = 'Admin@123';

    try {
      if (loginData.role === 'admin') {
        if (
          loginData.identifier === adminEmail &&
          loginData.password === adminPassword
        ) {
          if (rememberMe) {
            localStorage.setItem('rememberedUser', JSON.stringify(loginData));
          }
          navigate('/admin-dashboard');
          return;
        } else {
          setShowModal(true);
          setLoading(false);
          return;
        }
      }

      if (otpSent) {
        const res = await axios.post('http://localhost:5000/api/verify-otp', {
          mobile: loginData.identifier,
          otp,
        });
        if (res.data.success) {
          navigate('/studentdashboard');
        } else {
          alert('Invalid OTP');
          setLoading(false);
        }
        return;
      }

      const dummyUsers = [
        { identifier: 'student@example.com', password: 'password123', role: 'student' },
        { identifier: 'college@example.com', password: 'college123', role: 'college' },
        { identifier: 'recruiter@example.com', password: 'recruiter123', role: 'recruiter' },
      ];

      const user = dummyUsers.find(
        u =>
          u.identifier === loginData.identifier &&
          u.password === loginData.password &&
          u.role === loginData.role
      );

      if (!user) {
        setShowModal(true);
        setLoading(false);
        return;
      }

      if (rememberMe) {
        localStorage.setItem('rememberedUser', JSON.stringify(loginData));
      }

      if (user.role === 'student') navigate('/studentdashboard');
      if (user.role === 'college') navigate('/college-dashboard');
      if (user.role === 'recruiter') navigate('/recruiter-dashboard');
    } catch {
      alert('Login failed, please try again');
      setLoading(false);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${backgroundImg})` }}
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed px-4"
    >
      <div className="bg-white/90 backdrop-blur-sm p-8 rounded-xl max-w-md w-full shadow-lg z-10 text-left">
        <img src={TsignLogo} alt="logo" className="mx-auto mb-6 w-48" />
        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block mb-3 font-semibold text-gray-700">Login As</label>
            <div className="flex justify-between text-center gap-2">
              {['student', 'college', 'recruiter'].map((role) => (
                <label
                  key={role}
                  className={`flex-1 cursor-pointer py-2 rounded-md text-sm font-medium ${
                    loginData.role === role
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  <input
                    type="radio"
                    name="role"
                    value={role}
                    checked={loginData.role === role}
                    onChange={handleChange}
                    className="hidden"
                    disabled={loading}
                  />
                  {role.charAt(0).toUpperCase() + role.slice(1)}
                </label>
              ))}
            </div>
            {errors.role && <p className="mt-1 text-xs text-red-600">{errors.role}</p>}
          </div>

          <div>
            <label className="block mb-2 font-semibold text-gray-700">Email or Mobile Number</label>
            <input
              type="text"
              name="identifier"
              placeholder="Enter email or mobile"
              value={loginData.identifier}
              onChange={handleChange}
              disabled={loading}
              className="w-full px-3 py-2 border border-gray-300 rounded-md"
            />
            {errors.identifier && (
              <p className="mt-1 text-xs text-red-600">{errors.identifier}</p>
            )}
          </div>

          {loginData.identifier && mobileRegex.test(loginData.identifier) && loginData.role !== 'admin' ? (
            otpSent ? (
              <div>
                <label className="block mb-2 font-semibold text-gray-700">Enter OTP</label>
                <input
                  type="text"
                  value={otp}
                  onChange={e => setOtp(e.target.value)}
                  placeholder="Enter OTP"
                  maxLength="6"
                  disabled={loading}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md"
                />
              </div>
            ) : (
              <button
                type="button"
                onClick={sendOtp}
                disabled={loading}
                className="w-full py-2 font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
              >
                Send OTP
              </button>
            )
          ) : (
            <div>
              <label className="block mb-2 font-semibold text-gray-700">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                placeholder="Enter password"
                disabled={loading}
                className="w-full px-3 py-2 border border-gray-300 rounded-md"
              />
              {errors.password && (
                <p className="mt-1 text-xs text-red-600">{errors.password}</p>
              )}
            </div>
          )}

          <div className="flex justify-between items-center mt-2 mb-4">
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                disabled={loading}
                className="rounded border-gray-300"
              />
              Remember me
            </label>
            <Link to="/forgot" className="text-blue-600 hover:underline">
              Forgot Password?
            </Link>
          </div>
          {errors.rememberMe && (
            <p className="mb-2 text-xs text-red-600">{errors.rememberMe}</p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 rounded-md text-white font-semibold transition ${
              loading ? 'cursor-not-allowed bg-blue-400' : 'bg-blue-600 hover:bg-blue-700'
            }`}
          >
            {loading ? (
              <div className="flex items-center justify-center gap-2">
                <svg
                  className="w-5 h-5 animate-spin"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8v8z"
                  />
                </svg>
                Loading...
              </div>
            ) : (
              'Login'
            )}
          </button>

          <p className="mt-4 text-center text-sm text-gray-600">
            Don't have an account?{' '}
            <Link to="/register" className="text-blue-600 hover:underline">
              Register
            </Link>
          </p>
        </form>

        {showModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-80 p-6 text-center bg-white rounded-lg shadow-lg">
              <h2 className="mb-4 text-xl font-semibold text-red-600">
                Account Not Found
              </h2>
              <p className="mb-6">
                Please register to continue.
              </p>
              <div className="flex justify-center gap-4">
                <button
                  onClick={() => {
                    setShowModal(false);
                    setLoading(false);
                  }}
                  className="px-4 py-2 font-semibold text-gray-700 bg-gray-200 rounded hover:bg-gray-300"
                >
                  Close
                </button>
                <Link
                  to="/register"
                  className="px-4 py-2 font-semibold text-white bg-blue-600 rounded hover:bg-blue-700"
                >
                  Go to Register →
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Login;
