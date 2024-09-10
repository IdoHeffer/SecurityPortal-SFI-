// src/components/Badge.tsx

import React from 'react';
import '../styles/Badge.css';
import { Developer } from '../types';

interface BadgeProps {
  developer: Developer;
}

const Badge: React.FC<BadgeProps> = ({ developer }) => {
  return (
    <div className="badge bg-primary text-white p-3 rounded">
      <h5 className="mb-2">{developer.name}</h5>
      <p className="mb-2">Rank: {developer.rank}</p>
      <div className="progress">
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${developer.progress}%` }}
          aria-valuenow={developer.progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p className="mt-2">{developer.progress}% to next level</p>
    </div>
  );
};

export default Badge;
