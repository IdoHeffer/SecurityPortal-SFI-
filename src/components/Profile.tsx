import React from 'react';
import Badge from './Badge';
import { Developer } from '../types';
import '../styles/Profile.css';  // You may want to add specific CSS for the profile

interface ProfileProps {
  developer: Developer;
}

const Profile: React.FC<ProfileProps> = ({ developer }) => {
  return (
    <div className="container mt-4 text-center">
      <h1 className="mb-4">Profile</h1>
      
      {/* User photo */}
      <div className="profile-photo mb-4">
        <img
          src="https://via.placeholder.com/150" // Replace with real photo URL
          alt={`${developer.name}'s profile`}
          className="rounded-circle"
          width="150"
          height="150"
        />
      </div>
      
      {/* Progress bar */}
      <div className="progress mb-4" style={{ width: '50%', margin: '0 auto' }}>
        <div
          className="progress-bar"
          role="progressbar"
          style={{ width: `${developer.progress}%` }}
          aria-valuenow={developer.progress}
          aria-valuemin={0}
          aria-valuemax={100}
        />
      </div>
      <p>{developer.progress}% to next level</p>
      <p>Developer level {developer.rank}</p>
      {/* Developer badge */}
      <div className="mt-4">
        <Badge developer={developer} />
      </div>
    </div>
  );
};

export default Profile;
