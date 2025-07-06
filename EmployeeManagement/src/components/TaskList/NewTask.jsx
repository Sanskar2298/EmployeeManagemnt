
import React from 'react';
import axios from 'axios';

const NewTask = ({ data, onStatusChange }) => {
  const handleAccept = async () => {
    try {
      await axios.put(
        `http://localhost:3000/api/tasks/${data._id}`,
        { status: 'active' },
        { withCredentials: true }
      );
      onStatusChange();
    } catch (err) {
      console.error("Accept task failed", err);
    }
  };

  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-blue-600 rounded-xl text-white">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-2xl">{data.category || "Uncategorized"}</h3>
        <h4 className="text-sm">{data.dueDate?.slice(0, 10)}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-4">{data.description}</p>
      <div className="mt-4">
        <button onClick={handleAccept} className="bg-black px-3 py-1 rounded w-full">
          Accept Task
        </button>
      </div>
    </div>
  );
};

export default NewTask;
