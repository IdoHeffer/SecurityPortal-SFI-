import React from 'react';
import { Task } from '../types';

interface ProfileProps {
    tasks: Task[];
}

const TopSecurityTasks: React.FC<ProfileProps> = ({tasks}) => {
  return (
    <div className="top-security-tasks mb-4">
      <h2>Top Security Tasks</h2>
      <ul>
      {tasks.map((task: Task) => (
        <li key={task.id}>{task.name}</li>
        ))}
        {/* Example tasks
        <li>Task 1 - High Impact, Urgent</li>
        <li>Task 2 - Medium Impact, Medium Urgency</li> */}
      </ul>
    </div>
  );
};

export default TopSecurityTasks;