// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../styles/Signup.css'; // Reusing the same CSS

// const Signup = () => {
//   const navigate = useNavigate();

//   const handleLoginClick = () => {
//     navigate('/login');
//   };

//   return (
//     <div className="login-container">
//       <div className="login-form">
//         <h2>Sign Up</h2>

//         <form>
//           {/* Add your signup form fields here */}
//           <div className="form-group">
//             <label htmlFor="name">Full Name</label>
//             <input
//               type="text"
//               id="name"
//               name="name"
//               placeholder="Enter your full name"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="email">Email</label>
//             <input
//               type="email"
//               id="email"
//               name="email"
//               placeholder="Enter your email"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="password">Password</label>
//             <input
//               type="password"
//               id="password"
//               name="password"
//               placeholder="Create a password"
//             />
//           </div>

//           <div className="form-group">
//             <label htmlFor="confirmPassword">Confirm Password</label>
//             <input
//               type="password"
//               id="confirmPassword"
//               name="confirmPassword"
//               placeholder="Confirm your password"
//             />
//           </div>

//           <button type="submit" className="login-button">
//             Sign Up
//           </button>
//         </form>

//         <div className="signup-section">
//           <p>Already have an account?</p>
//           <button onClick={handleLoginClick} className="signup-button">
//             Login
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Signup;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import '../styles/Signup.css';

const Signup = ({ onClose }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [signupSuccess, setSignupSuccess] = useState(false);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else {
      navigate('/');
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });

    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }

    if (name === 'password') {
      calculatePasswordStrength(value);
    }
  };

  const calculatePasswordStrength = (password) => {
    let strength = 0;
    if (password.length >= 8) strength += 1;
    if (/\d/.test(password)) strength += 1;
    if (/[!@#$%^&*(),.?":{}|<>]/.test(password)) strength += 1;
    if (/[a-z]/.test(password) && /[A-Z]/.test(password)) strength += 1;
    setPasswordStrength(strength);
  };

  const validateForm = () => {
    const newErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.fullName.trim()) newErrors.fullName = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (passwordStrength < 2) {
      newErrors.password = 'Password is too weak';
    }
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);

    try {
      const response = await axios.get('http://localhost:5000/users');

      const emailExists = response.data.users.some(user => user.email === formData.email);

      if (emailExists) {
        setErrors({ ...errors, email: 'Email already in use' });
        return;
      }

      await new Promise(resolve => setTimeout(resolve, 1500));
      setSignupSuccess(true);

      setTimeout(() => {
        navigate('/login');
      }, 2000);

    } catch (error) {
      console.error('Signup error:', error);
      setErrors({ ...errors, form: 'Signup failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  const getPasswordStrengthColor = () => {
    switch (passwordStrength) {
      case 0: return '#e74c3c';
      case 1: return '#e67e22';
      case 2: return '#f1c40f';
      case 3: return '#2ecc71';
      case 4: return '#27ae60';
      default: return '#e74c3c';
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-form">
        <div className="signup-header">
          <h2>Create Your Account</h2>
          <button className="close-btn" onClick={handleClose} aria-label="Close">
            <FontAwesomeIcon
              icon={faCircleXmark}
              style={{ color: "#ff3d3d", fontSize: "1.5rem" }}
            />
          </button>
        </div>

        {signupSuccess ? (
          <div className="success-message">
            <svg viewBox="0 0 24 24" className="success-icon">
              <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
            </svg>
            <p>Account created successfully! Redirecting to login...</p>
          </div>
        ) : (
          <>
            {errors.form && <div className="error-message">{errors.form}</div>}

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className={errors.fullName ? 'error' : ''}
                />
                {errors.fullName && <span className="error-text">{errors.fullName}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                  className={errors.email ? 'error' : ''}
                />
                {errors.email && <span className="error-text">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a password (min 8 chars)"
                  className={errors.password ? 'error' : ''}
                />
                <div className="password-strength">
                  <div
                    className="strength-meter"
                    style={{
                      width: `${passwordStrength * 25}%`,
                      backgroundColor: getPasswordStrengthColor()
                    }}
                  ></div>
                </div>
                {errors.password && <span className="error-text">{errors.password}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Confirm your password"
                  className={errors.confirmPassword ? 'error' : ''}
                />
                {errors.confirmPassword && <span className="error-text">{errors.confirmPassword}</span>}
              </div>

              <button
                type="submit"
                className="signup-button"
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <span className="loading-spinner"></span>
                    Creating Account...
                  </>
                ) : 'Sign Up'}
              </button>
            </form>

            {/* <div className="terms-agreement">
              <p>By signing up, you agree to our <a href="#">Terms of Service</a> and <a href="#">Privacy Policy</a>.</p>
            </div>

            <div className="social-signup">
              <div className="social-divider">
                <span>OR SIGN UP WITH</span>
              </div>

              <div className="social-buttons">
                <button type="button" className="social-button google">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                </button>

                <button type="button" className="social-button facebook">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path fill="#1877F2" d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
                  </svg>
                </button>

                <button type="button" className="social-button github">
                  <svg className="social-icon" viewBox="0 0 24 24">
                    <path fill="#333" d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
                  </svg>
                </button>
              </div>
            </div> */}

            <div className="login-link">
              Already have an account? <Link to="/login">Log in</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Signup;