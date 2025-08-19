import React, { useState, useEffect } from 'react';
import './Login.css';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import logo from '../../../assests/TG-SIGN (2).png';

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
  // Password validation regex: min 6 chars, at least one uppercase, one lowercase, one digit, one special char
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/;

  useEffect(() => {
    const remembered = localStorage.getItem('rememberedUser');
    if (remembered) {
      const parsed = JSON.parse(remembered);
      setLoginData(parsed);
      setRememberMe(true);
    }
  }, []);

  // Dynamic placeholder text based on role
  const getPlaceholder = () => {
    switch (loginData.role) {
      case 'student':
        return 'Enter student email or mobile';
      case 'college':
        return 'Enter college email or mobile';
      case 'recruiter':
        return 'Enter recruiter email or mobile';
      default:
        return 'Enter email or mobile';
    }
  };

  const handleChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' }); // Clear the error for the field being typed
  };

  const validate = () => {
    const newErrors = {};
    const { identifier, password, role } = loginData;

    // Validate identifier
    if (!identifier) {
      newErrors.identifier = `Enter ${role} email or mobile number`;
    } else if (role === 'student') {
      if (!emailRegex.test(identifier) && !mobileRegex.test(identifier)) {
        newErrors.identifier = 'Enter valid student email or mobile number';
      }
    } else if (role === 'college') {
      if (!emailRegex.test(identifier) || !identifier.toLowerCase().includes('college')) {
        newErrors.identifier = 'Use college email (must include "college")';
      }
    } else if (role === 'recruiter') {
      if (!emailRegex.test(identifier) || !identifier.toLowerCase().includes('recruiter')) {
        newErrors.identifier = 'Use recruiter email (must include "recruiter")';
      }
    }

    // Validate rememberMe (mandatory now)
    if (!rememberMe) {
      newErrors.rememberMe = 'You must accept Remember Me to continue';
    }

    // Validate password (only if OTP not sent and identifier is not a mobile number)
    if (!mobileRegex.test(identifier) && !otpSent) {
      if (!password) {
        newErrors.password = 'Password is required';
      } else if (!passwordRegex.test(password)) {
        newErrors.password = 'Password must be at least 6 characters, ' +
                             'include uppercase, lowercase, digit, and special character';
      }
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const sendOtp = async () => {
    // OTP only for mobile numbers
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
          if (loginData.role === 'student') navigate('/studentdashboard');
          if (loginData.role === 'college') navigate('/college-dashboard');
          if (loginData.role === 'recruiter') navigate('/recruiter-dashboard');
        } else {
          alert('Invalid OTP');
        }
      } catch (error) {
        alert('OTP verification failed');
      }
      return;
    }

    // Dummy users for password login
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
    } else {
      localStorage.removeItem('rememberedUser');
    }

    if (user.role === 'student') navigate('/studentdashboard');
    if (user.role === 'college') navigate('/college-dashboard');
    if (user.role === 'recruiter') navigate('/recruiter-dashboard');
  };

  // Close modal and navigate away immediately on close button click
  const handleCloseModal = () => {
    setShowModal(false);
    navigate('/'); // Change '/' to whatever page you want to close to (home page here)
  };

  return (
    <div className="login-page">
      <div className="login-card">
        <img src={logo} alt="T-Sign Logo" className="login-logo" />

        <form onSubmit={handleSubmit}>
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
            placeholder={getPlaceholder()}
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
                onChange={() => {
                  setRememberMe(!rememberMe);
                  setErrors({ ...errors, rememberMe: '' });
                }}
              />{' '}
              Remember me
            </label>
            {errors.rememberMe && <p className="error">{errors.rememberMe}</p>}
            <a href="/forgot">Forgot Password?</a>
          </div>

          <button type="submit" className="btn-primary">
            Login
          </button>

          <p className="signup-link">
            Don’t have an account? <Link to="/register">Register</Link>
          </p>
        </form>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Account Not Found</h3>
            <p>Please register to continue.</p>
            <button onClick={handleCloseModal}>Close</button>
            <Link className="register-link" to="/register">
              Go to Register →
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
