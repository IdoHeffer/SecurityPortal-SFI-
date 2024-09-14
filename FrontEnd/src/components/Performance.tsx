// src/components/Performance.tsx

import React from 'react';
import ProgressOverview from './ProgressOverview';
import { Developer } from '../types';


interface ProfileProps {
    developer: Developer;
  }


const Performance: React.FC<ProfileProps> = ({developer}) => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Performance</h1>
      <ProgressOverview developer={developer} />
      <p>Manage your security Performance here.</p>
    </div>
  );
};

export default Performance;
