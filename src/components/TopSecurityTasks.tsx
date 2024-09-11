import React from 'react';
import { Challenge } from '../types';
import { bottom } from '@popperjs/core';
import '../styles/TopSecurityTasks.css';

interface ProfileProps {
    challenges: Challenge[];
}

const TopSecurityTasks: React.FC<ProfileProps> = ({challenges}) => {
  return (
    <div className="top-security-tasks mb-6">
      <h2>Top Security Challenges</h2>
      <ul className="list-group">
        {challenges.map(challenge => (
          <li key={challenge.id} className="list-group-item d-flex align-items-center justify-content-between">
            <div className="task-info d-flex align-items-center">
              <span className="task-name">{challenge.name}</span>
            </div>
            <div className="task-score">
              <span className="badge-primary">{challenge.rank}</span> {/* Task rank (score) */}
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