import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Squares from '../Particles/Squares';

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    handleLogin(email, password);
    setEmail('');
    setPassword('');
  };

  return (
    <div className="relative min-h-screen w-screen flex items-center justify-center bg-black overflow-hidden text-white font-poppins">
      
      
      <div className="absolute inset-0 z-0">
        <Squares direction="diagonal" speed={0.5} squareSize={50} hoverFillColor="#1e1e1e" />
      </div>

     
      <div className="relative z-10 w-full max-w-md px-8 py-10 border-2 border-emerald-600 bg-black bg-opacity-40 backdrop-blur-md rounded-2xl shadow-xl">
        <form onSubmit={submitHandler} autoComplete="off" className="flex flex-col gap-6">
          <h1 className="text-3xl font-semibold text-center text-emerald-400">Welcome Back</h1>

          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="bg-transparent border border-emerald-500 text-white px-4 py-3 rounded-full placeholder-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="email"
            placeholder="Enter your email"
          />

          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className="bg-transparent border border-emerald-500 text-white px-4 py-3 rounded-full placeholder-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            type="password"
            placeholder="Enter password"
          />

          <button
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 transition-colors duration-300 text-white font-medium py-3 rounded-full"
          >
            Log in
          </button>

          <p className="text-center text-sm">
            Don’t have an account?{' '}
            <Link to="/signup" className="text-emerald-400 hover:underline">
              Sign up
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
