

 
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import TsignLogo from '../../../assests/TG-SIGN (2).png';
import backgroundImg from '../../../assests/background.png';
 
const Login = () => {
  const [loginData, setLoginData] = useState({
    identifier: '',
    password: '',
    role: 'student',
  });
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [errors, setErrors] = useState({});
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
 
  const mobileRegex = /^[6-9]\d{9}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
  useEffect(() => {
    const remembered = localStorage.getItem('rememberedUser');
    if (remembered) {
      const parsed = JSON.parse(remembered);
      setLoginData(parsed);
      setRememberMe(true);
    }
  }, []);
 
  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };
 
  const validate = () => {
    const newErrors = {};
    const { identifier, password, role } = loginData;
 
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
    }
 
    if (!mobileRegex.test(identifier) && !password && !otpSent) {
      newErrors.password = 'Password required unless using OTP';
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
    } catch (error) {
      alert('Failed to send OTP');
    }
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
 
    if (otpSent && mobileRegex.test(loginData.identifier)) {
      try {
        const res = await axios.post('http://localhost:5000/api/verify-otp', {
          mobile: loginData.identifier,
          otp,
        });
 
        if (res.data.success) {
          navigate('/studentdashboard');
        } else {
          alert('Invalid OTP');
        }
      } catch (error) {
        alert('OTP verification failed');
      }
      return;
    }
 
    const dummyUsers = [
      { identifier: 'student@example.com', password: '123456', role: 'student' },
      { identifier: 'admin@college.edu.in', password: 'college123', role: 'college' },
      { identifier: 'hr@recruiterfirm.com', password: 'recruit123', role: 'recruiter' },
    ];
 
    const user = dummyUsers.find(
      (u) =>
        u.identifier === loginData.identifier &&
        u.password === loginData.password &&
        u.role === loginData.role
    );
 
    if (!user) {
      setShowModal(true);
      return;
    }
 
    if (rememberMe) {
      localStorage.setItem('rememberedUser', JSON.stringify(loginData));
    }
 
    if (user.role === 'student') navigate('/studentdashboard');
    if (user.role === 'college') navigate('/college-dashboard');
    if (user.role === 'recruiter') navigate('/recruiter-dashboard');
  };
 
  return (
    <div
  className="min-h-screen flex items-center justify-center bg-cover bg-center bg-fixed"
  style={{ backgroundImage: `url(${backgroundImg})` }}
>
      <div className="bg-white p-10 w-full max-w-md rounded-xl shadow-2xl z-10 text-left">
        <img
          className="w-64 mx-auto mb-6"
          src={TsignLogo}
          alt="logo"
        />
 
        <form onSubmit={handleSubmit}>
          <label className="font-medium block mb-1.5">Login As</label>
          <div className="flex justify-between mb-4 text-sm">
            {['student', 'college', 'recruiter'].map((role) => (
              <label key={role} className="cursor-pointer">
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={loginData.role === role}
                  onChange={handleChange}
                  className="mr-1"
                />{' '}
                {role}
              </label>
            ))}
          </div>
         
          <label className="font-medium block mb-1.5">Email or Mobile Number</label>
          <input
            type="text"
            name="identifier"
            placeholder="Enter email or mobile"
            value={loginData.identifier}
            onChange={handleChange}
            className="w-full p-2.5 mb-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-none"
          />
          {errors.identifier && <p className="text-red-600 text-xs mt-[-10px] mb-2.5">{errors.identifier}</p>}
 
          {mobileRegex.test(loginData.identifier) ? (
            <>
              {otpSent ? (
                <>
                  <label className="font-medium block mb-1.5">Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    maxLength="6"
                    className="w-full p-2.5 mb-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-none"
                  />
                </>
              ) : (
                <button
                  type="button"
                  className="bg-blue-600 text-white border-none py-2.5 px-4 rounded-md cursor-pointer mb-2.5 text-sm"
                  onClick={sendOtp}
                >
                  Send OTP
                </button>
              )}
            </>
          ) : (
            <>
              <label className="font-medium block mb-1.5">Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
                className="w-full p-2.5 mb-3 border border-gray-300 rounded-md text-sm focus:border-blue-500 focus:outline-none"
              />
              {errors.password && <p className="text-red-600 text-xs mt-[-10px] mb-2.5">{errors.password}</p>}
            </>
          )}
 
          <div className="flex justify-between text-xs mb-4">
            <label className="cursor-pointer">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                className="mr-1"
              />{' '}
              Remember me
            </label>
            <a href="/forgot" className="text-blue-800 hover:underline">Forgot Password?</a>
          </div>
 
          <button
            type="submit"
            className="bg-blue-900 text-white border-none py-3 w-full rounded-md font-bold text-sm cursor-pointer transition-colors duration-200 hover:bg-blue-800"
          >
            Login
          </button>
          <p className="text-xs text-center mt-4">
            Don't have an account? <a href="/register" className="text-blue-900 font-semibold no-underline">Register</a>
          </p>
        </form>
      </div>
 
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50">
          <div className="bg-white p-7 rounded-xl w-11/12 max-w-md text-center">
            <h3 className="text-red-600 text-xl mb-3">Account Not Found</h3>
            <p className="text-gray-700 mb-4">Please register to continue.</p>
            <button
              onClick={() => setShowModal(false)}
              className="bg-gray-300 text-gray-800 py-2 px-4 rounded-md mr-3 hover:bg-gray-400"
            >
              Close
            </button>
            <a
              className="text-blue-600 font-semibold no-underline mt-3 inline-block"
              href="/sign up"
            >
              Go to Register →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};
 
export default Login;
 