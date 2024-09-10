import React from 'react';
import { Task } from '../types';
import '../styles/Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; 
import { faTasks } from '@fortawesome/free-solid-svg-icons';

interface SidebarProps {
  tasks: Task[];
}

const Sidebar: React.FC<SidebarProps> = ({ tasks }) => {
  return (
    <div className="sidebar bg-light p-3">
      <h5 className="mb-3">My Security Tasks</h5>
      <ul className="list-group">
        {tasks.map(task => (
          <li key={task.id} className="list-group-item d-flex align-items-center justify-content-between">
            <div className="task-info d-flex align-items-center">
              <FontAwesomeIcon icon={faTasks} className="me-2 task-icon" />
              <span className="task-name">{task.name}</span>
            </div>
            <div className="task-score">
              <span className="badge-primary">{task.rank}</span> {/* Task rank (score) */}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
