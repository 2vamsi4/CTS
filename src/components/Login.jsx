import React, { useState } from 'react';
import api from '../api/axios';
import logo from '../assets/Logo1.jpg';
import '../ui/login.css';
import { useNavigate } from 'react-router-dom';

/* ================= VALIDATORS ================= */
const validateEmail = (email) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

const validatePassword = (password) =>
  /^(?=.*[A-Z])(?=.*\d).{8,}$/.test(password);

/* ================= COMPONENT ================= */
const LoginPage = () => {
  const navigate = useNavigate();

  const [isSignup, setIsSignup] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState({ type: '', text: '' });

  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  /* ================= HANDLERS ================= */
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage({ type: '', text: '' });
    setLoading(true);

    /* ---------- VALIDATION ---------- */
    if (!validateEmail(form.email)) {
      setMessage({ type: 'error', text: 'Invalid email address' });
      setLoading(false);
      return;
    }

    if (!validatePassword(form.password)) {
      setMessage({
        type: 'error',
        text: 'Password must be 8+ chars, include 1 uppercase & 1 number',
      });
      setLoading(false);
      return;
    }

    if (isSignup && form.password !== form.confirmPassword) {
      setMessage({ type: 'error', text: 'Passwords do not match' });
      setLoading(false);
      return;
    }

    try {
      if (isSignup) {
        await api.post('/auth/register', {
          name: form.name,
          email: form.email,
          password: form.password,
        });

        setMessage({
          type: 'success',
          text: 'Registration successful. Please login.',
        });

        setIsSignup(false);
        setForm({ name: '', email: '', password: '', confirmPassword: '' });
      } else {
        const res = await api.post('/auth/login', {
          email: form.email,
          password: form.password,
        });

        console.log(res.data);

        localStorage.setItem('token', res.data);

        console.log(localStorage.getItem('token'));
        
        navigate('/home');
      }
    } catch (err) {
      setMessage({
        type: 'error',
        text: err.response?.data?.message || 'Something went wrong',
      });
    } finally {
      setLoading(false);
    }
  };
  
  /* ================= UI ================= */
  return (
    <div className={`login-container ${darkMode ? 'dark' : ''}`}>
      <form className="login-card glass" onSubmit={handleSubmit}>
        {/* 🌙 Dark Mode */}
        <div
          className="dark-toggle"
          title="Toggle dark mode"
          onClick={() => setDarkMode(!darkMode)}
        >
          🌙
        </div>

        {/* Logo */}
        <img src={logo} alt="Logo" className="login-logo" />

        <h2>{isSignup ? 'Create Account' : 'Welcome Back'}</h2>

        {/* Messages */}
        {message.text && (
          <div className={`message ${message.type}`}>
            {message.text}
          </div>
        )}

        {/* Signup Name */}
        {isSignup && (
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
          />
        )}

        {/* Email */}
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        {/* Password */}
        <div className="password-wrapper">
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? '🙈' : '👁️'}
          </span>
        </div>

        {/* Confirm Password */}
        {isSignup && (
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
            required
          />
        )}

        {/* Submit */}
        <button type="submit" disabled={loading}>
          {loading ? <span className="spinner"></span> : isSignup ? 'Register' : 'Login'}
        </button>

        {/* Toggle */}
        <p className="toggle-text">
          {isSignup ? 'Already have an account?' : "Don't have an account?"}
          <span onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? ' Login' : ' Register'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
