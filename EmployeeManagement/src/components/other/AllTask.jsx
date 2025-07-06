import React from 'react';

const AllTask = ({ tasks }) => {
  
  const statsByEmployee = {};

  tasks.forEach((task) => {
    const name = task.assignedTo?.fullName || "Unassigned";

    if (!statsByEmployee[name]) {
      statsByEmployee[name] = {
        newTask: 0,
        active: 0,
        completed: 0,
        failed: 0,
      };
    }

    statsByEmployee[name][task.status] += 1;
  });

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-64 overflow-auto text-white">
      <div className="mb-2 py-2 px-4 flex justify-between font-bold">
        <h2 className="w-1/5 text-center bg-purple-300">Employee Name</h2>
        <h3 className="w-1/5 text-center bg-blue-300">New Task</h3>
        <h5 className="w-1/5 text-center bg-yellow-300">Active Task</h5>
        <h5 className="w-1/5 text-center bg-green-300">Completed Task</h5>
        <h5 className="w-1/5 text-center bg-red-300">Failed Task</h5>
      </div>

      {Object.entries(statsByEmployee).map(([name, stats], index) => (
        <div key={index} className="py-2 px-4 flex justify-between bg-[#2a2a2a] rounded my-2">
          <h2 className="w-1/5 text-center bg-purple-300">{name}</h2>
          <h3 className="w-1/5 text-center bg-blue-300">{stats.newTask}</h3>
          <h5 className="w-1/5 text-center bg-yellow-300">{stats.active}</h5>
          <h5 className="w-1/5 text-center bg-green-300">{stats.completed}</h5>
          <h5 className="w-1/5 text-center bg-red-300">{stats.failed}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
