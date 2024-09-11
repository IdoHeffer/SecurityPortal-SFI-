import React from 'react';
import { Task } from '../types';
import { bottom } from '@popperjs/core';
import '../styles/TopSecurityTasks.css';

interface ProfileProps {
    tasks: Task[];
}

const TopSecurityTasks: React.FC<ProfileProps> = ({tasks}) => {
  return (
    <div className="top-security-tasks mb-6">
      <h2>Top Security Tasks</h2>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex align-items-center justify-content-between">
            <div className="task-info d-flex align-items-center">
              <span className="task-name">{task.name}</span>
            </div>
            <div className="task-score">
              <span className="badge-primary">{task.rank}</span> {/* Task rank (score) */}
            </div>
          </li>
        ))}
      </ul>
      {/* <ul>
      {tasks.map((task: Task) => (
        <li className='top-sec-task list-group-item' key={task.id} >{task.name} - Impact: {task.impact}, Urgency: {task.urgency}</li>
        ))}
      </ul> */}
    </div>
  );
};

export default TopSecurityTasks;