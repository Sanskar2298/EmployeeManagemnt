import React from 'react';
import axios from 'axios';

const AcceptTask = ({ data, onStatusChange }) => {
  const markComplete = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/tasks/${data._id}`,
        { status: 'completed' },
        { withCredentials: true }
      );
      onStatusChange();
    } catch (err) {
      console.error("Mark complete failed", err);
    }
  };

  const markFailed = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/tasks/${data._id}`,
        { status: 'failed' },
        { withCredentials: true }
      );
      onStatusChange();
    } catch (err) {
      console.error("Mark failed failed", err);
    }
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-red-600 rounded-xl text-white">
      <div className="flex justify-between items-center">
        <h3 className="bg-black text-sm px-3 py-1 rounded-2xl">{data.category}</h3>
        <h4 className="text-sm">{data.dueDate?.slice(0, 10)}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-4">{data.description}</p>
      <div className="flex justify-between mt-4 gap-2">
        <button onClick={markComplete} className="bg-green-500 py-1 px-2 text-sm rounded">
          Mark as Completed
        </button>
        <button onClick={markFailed} className="bg-yellow-500 py-1 px-2 text-sm rounded">
          Mark as Failed
        </button>
      </div>
    </div>
  );
};

export default AcceptTask;
