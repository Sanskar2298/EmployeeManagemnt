import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

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
    <div className="min-h-screen flex items-center justify-center bg-black">
      <form
        onSubmit={handleSubmit}
        className="bg-transparent border border-emerald-500 rounded-lg p-8 flex flex-col gap-4 w-[300px]"
      >
        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={formData.fullName}
          onChange={handleChange}
          autoComplete="new-password"
          className="px-4 py-2 rounded-full bg-transparent border border-emerald-600 text-white placeholder-gray-400 focus:outline-none"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter your Email"
          value={formData.email}
          onChange={handleChange}
          autoComplete="new-password"
          className="px-4 py-2 rounded-full bg-transparent border border-emerald-600 text-white placeholder-gray-400 focus:outline-none"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          autoComplete="new-password"
          className="px-4 py-2 rounded-full bg-transparent border border-emerald-600 text-white placeholder-gray-400 focus:outline-none"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={formData.confirmPassword}
          onChange={handleChange}
          autoComplete="new-password"
          className="px-4 py-2 rounded-full bg-transparent border border-emerald-600 text-white placeholder-gray-400 focus:outline-none"
          required
        />

        <select
          name="role"
          value={formData.role}
          onChange={handleChange}
          className="px-4 py-2 rounded-full bg-transparent border border-emerald-600 text-black placeholder-gray-400 focus:outline-none"
        >
          <option value="employee" className="bg-black text-white">Employee</option>
          <option value="admin" className="bg-black text-white">Admin</option>
        </select>

        <button
          type="submit"
          className="bg-emerald-600 text-white py-2 px-6 rounded-full hover:bg-green-700 transition duration-300"
        >
          Sign up
        </button>

        <Link
          to="/"
          className="text-emerald-600 underline hover:text-emerald-300 text-center"
        >
          Already have an account? Login
        </Link>
      </form>
    </div>
  );
};

export default Signup;
