import React, { useEffect, useState } from 'react';
import Header from '../other/Header';
import CreateTask from '../other/CreateTask';
import AllTask from '../other/AllTask';
import axios from 'axios';

function AdminDashboard({ changeUser, data }) {
  const [tasks, setTasks] = useState([]);
  const [reload, setReload] = useState(false);

  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:3000/api/tasks', {
        withCredentials: true,
      });
      setTasks(res.data.tasks);
    } catch (err) {
      console.error('Error fetching tasks:', err);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, [reload]);

  const handleTaskCreated = () => setReload(!reload);

  return (
    <div className="h-screen w-full p-10 bg-[#1C1C1C] text-white">
      <Header changeUser={changeUser} data={data} />
      <h2 className="text-xl font-semibold mt-6 mb-2">Create a New Task</h2>
      <CreateTask onTaskCreated={handleTaskCreated} />
      <h2 className="text-xl font-semibold mt-10 mb-2">All Tasks Summary</h2>
      <AllTask tasks={tasks} />
    </div>
  );
}

export default AdminDashboard;