import React from 'react';
import AcceptTask from './AcceptTask';
import NewTask from './NewTask';
import CompleteTask from './CompleteTask';
import FailedTask from './FailedTask';

function TaskList({ data }) {
  if (!data || !Array.isArray(data.tasks)) {
    return <p className="text-white">No tasks available</p>;
  }

  return (
    <div
      id="tasklist"
      className="h-[55%] overflow-x-auto flex items-center justify-start gap-5 flex-nowrap w-full py-5 mt-10"
    >
      {data.tasks.map((task, idx) => {
        switch (task.status?.toLowerCase()) {
          case 'newtask':
            return <NewTask key={idx} data={task} onStatusChange={data.refreshTasks} />;
          case 'active':
            return <AcceptTask key={idx} data={task} onStatusChange={data.refreshTasks} />;
          case 'completed':
            return <CompleteTask key={idx} data={task} />;
          case 'failed':
            return <FailedTask key={idx} data={task} />;
          default:
            return null;
        }
      })}

    </div>
  );
}

export default TaskList;
