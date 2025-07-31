import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

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
    <div className="login-page">
      <div className="login-card">
        <h2>Welcome back ✦</h2>
        <p className='login-heading'>Login using Email or Phone Number</p>

        <form onSubmit={handleSubmit}>
          <label>Login As</label>
          <div className="role-options">
            {['student', 'college', 'recruiter'].map((role) => (
              <label key={role}>
                <input
                  type="radio"
                  name="role"
                  value={role}
                  checked={loginData.role === role}
                  onChange={handleChange}
                />{' '}
                {role}
              </label>
            ))}
          </div>
          <label>Email or Mobile Number</label>
          <input
            type="text"
            name="identifier"
            placeholder="Enter email or mobile"
            value={loginData.identifier}
            onChange={handleChange}
          />
          {errors.identifier && <p className="error">{errors.identifier}</p>}

          {mobileRegex.test(loginData.identifier) ? (
            <>
              {otpSent ? (
                <>
                  <label>Enter OTP</label>
                  <input
                    type="text"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    placeholder="Enter OTP"
                    maxLength="6"
                  />
                </>
              ) : (
                <button type="button" className="btn-secondary" onClick={sendOtp}>
                  Send OTP
                </button>
              )}
            </>
          ) : (
            <>
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={loginData.password}
                onChange={handleChange}
              />
              {errors.password && <p className="error">{errors.password}</p>}
            </>
          )}

          

          <div className="form-options">
            <label>
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
              />{' '}
              Remember me
            </label>
            <a href="/forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="btn-primary">
            Login
          </button>
          <p className="signup-link">
            Don’t have an account? <a href="/register">Register</a>
          </p>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Account Not Found</h3>
            <p>Please register to continue.</p>
            <button onClick={() => setShowModal(false)}>Close</button>
            <a className="register-link" href="/sign up">
              Go to Register →
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
