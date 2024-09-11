import React from 'react';
import { Developer } from '../types';

interface ProfileProps {
    developer: Developer;
  }

const ProgressOverview: React.FC<ProfileProps> = ({developer}) => {
  return (
    <div className="progress-overview mb-4">
      <h2>Progress Overview</h2>
      <div className="progress-bar">
        {/* Example progress bar */}
        <div className="progress" style={{ width: developer.progress +'%' }}> {developer.progress} to Next Level</div>
      </div>
    </div>
  );
};

export default ProgressOverview;
