import React from 'react';

const CompleteTask = ({ data }) => {
  return (
    <div className="flex-shrink-0 h-full w-[300px] p-5 bg-green-600 rounded-xl text-white">
      <div className="flex justify-between items-center">
        <h3 className="bg-red-600 text-sm px-3 py-1 rounded-2xl">{data.category}</h3>
        <h4 className="text-sm">{data.dueDate?.slice(0, 10)}</h4>
      </div>
      <h2 className="mt-5 text-2xl font-semibold">{data.title}</h2>
      <p className="text-sm mt-4">{data.description}</p>
      <div className="mt-2">
        <button className="w-full bg-white text-green-700 font-bold py-1 rounded">
          ✅ Completed
        </button>
      </div>
    </div>
  );
};

export default CompleteTask;
