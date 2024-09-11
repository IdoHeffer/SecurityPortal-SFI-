import React from 'react';
import ProgressOverview from './ProgressOverview';
import RecentAchievements from './RecentAchievements';
import TopSecurityTasks from './TopSecurityTasks';
import { Developer } from '../types';
import { Task } from '../types';

interface ProfileProps {
  developer: Developer;
}
interface ProfileProps {
  tasks: Task[];
}



const Home: React.FC<ProfileProps> = ({ developer, tasks }) => {
  return (
    <div className="container mt-4">
      <h1 className="mb-4">Welcome to the Security Awareness Platform</h1>
      <p>Here is a brief about current status</p>
      
      <ProgressOverview developer={developer} />
      <RecentAchievements />
      <TopSecurityTasks tasks={tasks} />
    </div>
  );
};

export default Home;
