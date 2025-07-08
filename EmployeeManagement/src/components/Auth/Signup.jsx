import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import Squares from '../Particles/Squares';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: 'employee',
  });

  const handleChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/signup',
        {
          fullName: formData.fullName,
          username: formData.email,
          password: formData.password,
          role: formData.role,
        },
        { withCredentials: true }
      );

      alert('Signup successful!');
      navigate('/');
    } catch (err) {
      alert(err.response?.data?.error || 'Signup failed');
    }
  };

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-black overflow-hidden text-white font-poppins">
      
      {/* Background Squares */}
      <div className="absolute inset-0 z-0">
        <Squares direction="diagonal" speed={0.5} squareSize={50} hoverFillColor="#1e1e1e" />
      </div>

      {/* Signup Form */}
      <div className="relative z-10 w-full max-w-md px-8 py-10 border border-emerald-600 bg-black bg-opacity-40 backdrop-blur-md rounded-2xl shadow-lg">
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <h2 className="text-3xl text-center font-semibold text-emerald-400">Create Account</h2>

          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-full bg-transparent border border-emerald-600 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-full bg-transparent border border-emerald-600 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-full bg-transparent border border-emerald-600 text-white placeholder-gray-400 focus:outline-none"
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
            className="px-4 py-3 rounded-full bg-transparent border border-emerald-600 text-white placeholder-gray-400 focus:outline-none"
          />

          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="px-4 py-3 rounded-full bg-black border border-emerald-600 text-white focus:outline-none"
          >
            <option value="employee">Employee</option>
            <option value="admin">Admin</option>
          </select>

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 text-white font-medium py-3 rounded-full"
          >
            Sign up
          </button>

          <Link
            to="/"
            className="text-emerald-400 hover:text-emerald-300 underline text-center"
          >
            Already have an account? Login
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Signup;
