import React, { useEffect, useState } from 'react';
import Header from '../other/Header';
import TaskListNumbers from '../other/TaskListNumbers';
import TaskList from '../TaskList/TaskList';
import axios from 'axios';

const EmployeeDashboard = (props) => {
  const [tasks, setTasks] = useState([]);

  // Fetch tasks assigned to the logged-in employee
  const fetchTasks = async () => {
  try {
    const res = await axios.get('http://localhost:3000/api/tasks/my', {
      withCredentials: true,
    });

    console.log("✅ Tasks fetched from /api/tasks/my:", res.data.tasks);

    res.data.tasks.forEach((t, i) => {
      console.log(`Task ${i}: title=${t.title}, status=${t.status}`);
    });

    setTasks(res.data.tasks);
  } catch (err) {
    console.error('Error fetching employee tasks:', err);
  }
};


  useEffect(() => {
    fetchTasks();
  }, []);

  return (
    <div className="p-10 bg-[#1C1C1C] h-screen text-white">
      <Header changeUser={props.changeUser} data={props.data} />
      <TaskListNumbers data={{ ...props.data, tasks }} />
      <TaskList data={{ tasks, refreshTasks: fetchTasks }} />
    </div>
  );
};

export default EmployeeDashboard;
