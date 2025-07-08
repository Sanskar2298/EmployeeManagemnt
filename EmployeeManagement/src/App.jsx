import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from 'react-router-dom';
import axios from 'axios';

import HomePage from './pages/HomePage'; // ✅ landing page
import Login from './components/Auth/Login';
import Signup from './components/Auth/Signup';
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard';
import AdminDashboard from './components/Dashboard/AdminDashboard';

function AppRoutes({ userRole, userInfo, allTasks, setUserRole, setUserInfo, setAllTasks }) {
  const navigate = useNavigate();

  const handleLogin = async (email, password) => {
    try {
      const res = await axios.post(
        'http://localhost:3000/api/auth/login',
        {
          username: email,
          password,
        },
        { withCredentials: true }
      );

      const { user } = res.data;
      setUserRole(user.role);
      setUserInfo(user);

      localStorage.setItem('loggedInUser', JSON.stringify({ role: user.role, user }));

      const taskRes = await axios.get("http://localhost:3000/api/tasks", {
        withCredentials: true,
      });
      setAllTasks(taskRes.data.tasks);

      navigate(user.role === 'admin' ? '/admin/dashboard' : '/employee/dashboard');

    } catch (err) {
      alert(err.response?.data?.error || 'Login failed');
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    setUserRole(null);
    setUserInfo(null);
    navigate('/');
  };

  return (
    <Routes>
      <Route path="/" element={<HomePage />} /> {/* ✅ Landing page */}
      <Route path="/login" element={<Login handleLogin={handleLogin} />} />
      <Route path="/signup" element={<Signup />} />
      <Route
        path="/admin/dashboard"
        element={
          userRole === 'admin' ? (
            <AdminDashboard changeUser={handleLogout} data={userInfo} tasks={allTasks} />
          ) : (
            <Navigate to="/" />
          )
        }
      />
      <Route
        path="/employee/dashboard"
        element={
          userRole === 'employee' ? (
            <EmployeeDashboard
              changeUser={handleLogout}
              data={userInfo}
              tasks={allTasks.filter(task => task.assignedTo?._id === userInfo._id)}
            />
          ) : (
            <Navigate to="/" />
          )
        }
      />
    </Routes>
  );
}

export default function App() {
  const [userRole, setUserRole] = useState(null);
  const [userInfo, setUserInfo] = useState(null);
  const [allTasks, setAllTasks] = useState([]);

  useEffect(() => {
    const stored = localStorage.getItem('loggedInUser');
    if (stored) {
      const parsed = JSON.parse(stored);
      setUserRole(parsed.role);
      setUserInfo(parsed.user);
    }
  }, []);

  return (
    <Router>
      <AppRoutes
        userRole={userRole}
        userInfo={userInfo}
        allTasks={allTasks}
        setUserRole={setUserRole}
        setUserInfo={setUserInfo}
        setAllTasks={setAllTasks}
      />
    </Router>
  );
}
