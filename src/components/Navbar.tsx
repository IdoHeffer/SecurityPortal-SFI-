// src/components/Navbar.tsx

import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="#">
        <img className='portalicon' src='/img/file.png' alt='shield'/> Security Portal
      </a>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">
              <i className="bi bi-house"></i> Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/tasks">
              <i className="bi bi-list-task"></i> Tasks
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/profile">
              <i className="bi bi-person"></i> Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/backlog">
              <i className="bi bi-archive"></i> Backlog
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/performance">
              <i className="bi bi-bar-chart"></i> Performance
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;