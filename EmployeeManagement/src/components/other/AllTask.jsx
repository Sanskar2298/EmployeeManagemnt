import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthProvider';

const AllTask = () => {
  const [userData,setUserData]= useContext(AuthContext);

  return (
    <div className="bg-[#1c1c1c] p-5 rounded mt-5 h-48 overflow-auto text-white">

      {/* Header */}
      <div className="bg-[#1c1c1c] mb-2 py-2 px-4 flex justify-between rounded font-bold">
        <h2 className="w-1/5 bg-purple-600 text-center">Employee Name</h2>
        <h3 className="w-1/5 bg-yellow-600 text-center">New Task</h3>
        <h5 className="w-1/5 bg-blue-400 text-center">Active Task</h5>
        <h5 className="w-1/5 bg-green-600 text-center">Completed Task</h5>
        <h5 className="w-1/5 bg-red-600 text-center">Failed Task</h5>
      </div>

      {/* Data Rows */}
      {userData?.map((employee, index) => (
        <div key={index} className="bg-[#1c1c1c] mb-2 py-2 px-4 flex justify-between rounded">
          <h2 className="w-1/5 bg-purple-600 text-center">{employee.firstname}</h2>
          <h3 className="w-1/5 bg-yellow-600 text-center">{employee.taskStats.newTask}</h3>
          <h5 className="w-1/5 bg-blue-400 text-center">{employee.taskStats.active}</h5>
          <h5 className="w-1/5 bg-green-600 text-center">{employee.taskStats.completed}</h5>
          <h5 className="w-1/5 bg-red-600 text-center">{employee.taskStats.failed}</h5>
        </div>
      ))}
    </div>
  );
};

export default AllTask;
