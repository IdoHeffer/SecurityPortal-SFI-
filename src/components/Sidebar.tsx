// src/components/Sidebar.tsx

import React from 'react';
import { Task } from '../types';
import '../styles/Sidebar.css';

interface SidebarProps {
  tasks: Task[];
}

const Sidebar: React.FC<SidebarProps> = ({ tasks }) => {
  return (
    <div className="sidebar bg-light p-3">
      <h5 className="mb-3">My Security Tasks</h5>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
            {task.name}
            <span className="badge-primary">{task.rank}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
